/* Terraform Architects - service worker (Add to Home Screen + offline shell).
   Kapag may bagong bersyon ng app, palitan ang CACHE sa ibaba. */
const CACHE = 'terraform-v7.4';

const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './assets/terraform-logo.png',
  './assets/icon-180.png',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(SHELL.map((u) => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  /* Huwag i-cache ang Supabase (login, database, storage): laging live na datos. */
  if (url.hostname.endsWith('.supabase.co')) return;

  /* Pages: network muna para laging bago; cache kapag offline. */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  /* Assets at supabase-js (jsdelivr): cache muna, tapos i-update sa background. */
  if (url.origin === location.origin || url.hostname === 'cdn.jsdelivr.net') {
    e.respondWith(
      caches.match(req).then((cached) => {
        const net = fetch(req)
          .then((res) => {
            if (res && res.status === 200) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
            }
            return res;
          })
          .catch(() => cached);
        return cached || net;
      })
    );
  }
});
