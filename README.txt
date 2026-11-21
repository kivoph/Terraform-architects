Terraform Architects - Design and Construction Management (Version 1)

Buksan ang index.html sa browser.
Sign in as Admin with the Admin account set up in Supabase. Staff are registered by the admin in Administration > Users with a name and password; they choose their own password at first sign in.

Ang logo ay nakalagay na rin sa loob ng index.html.
Ang assets/terraform-logo.png ay kopya lang para magamit sa ibang lugar.
Ang datos ay nasa Supabase na (online, shared ng lahat ng users).

Ang assets/icon-*.png ay ang app icon (192/512 para sa Home Screen, 180 para sa iPhone). Ang favicon at apple-touch-icon ay nakalagay na rin sa loob ng index.html.

Version 5.3: may babala na kapag hindi na-save ang datos (puno o bawal ang storage ng browser). May manifest.json at sw.js na rin para sa Add to Home Screen at offline use. Gumagana lang ang offline kapag binuksan ang app mula sa web address (https), hindi kapag direktang file lang. Kapag naglabas ng bagong bersyon, palitan ang CACHE sa sw.js.

Version 5.4: pinalitan ang pangalan ng system, ngayon ay Design and Construction Management.

Version 5.5: ang screen ay hindi na tumatalon sa taas o nawawalan ng cursor kapag may binago sa isang field. May button na sa header (araw/buwan) para palitan ang light at dark. Nilinis din ang CSS at gumagana na ang "reduce motion" setting ng device. Laging light ang simula; dark lang kapag in-on ng user ang switch.


Version 6.0: konektado na sa Supabase. Online login (Supabase Auth), shared na datos para sa lahat ng users, audit log sa database, at ang mga file (contracts, site uploads) ay nasa Supabase Storage. Sa Administration > Backup, may "Move old data online" para ilipat ang lumang datos ng browser. Palitan ang CACHE sa sw.js kapag may bagong bersyon.


Version 6.1: tinanggal ang Foreman role. Admin at Staff na lang. May nickname na ang staff (pinipili nila pag unang sign in; makikita ng admin sa Users). Ang staff na ang nag-a-upload ng Site Uploads (photos, videos, documents) at ang admin ay nakikita lahat ng uploads sa Admin home (Staff uploads) at sa Site Uploads. Ang "Assigned to" (Tasks, Back Jobs, Studies, Design scope) ay admin lang ang nakakapaglagay at nakakapagpalit.

Version 6.2: tinanggal ang Daily Site Progress sa menu, sa Quick actions, at sa Project Overview. Nasa database pa rin ang lumang records at audit log nito.

Version 6.3: ang Staff at Admin sa Sign in ay may kanya-kanyang box at border.

Version 6.4: ang admin ay pwede nang maglagay at magpalit ng nickname ng staff sa Administration > Users (Nickname column, o sa Register user form).

Version 6.5: may Save button na sa Nickname column ng Users page.

Version 6.6: Audit Log - may Search, filter (Role, Person, Feature, Action, Project, From/To date), nakagrupo kada araw (pinakabago muna), at ang Edit ay ipinapakita lang ang nagbago (dating -> bago). May Show 50 more at Clear filters.

Version 6.7: ang mga bilang sa Home (Ongoing design projects, Overdue scopes, Requests, Leads) ay pwede nang pindutin para buksan ang listahan.

Version 6.7: ang apat na bilang sa Home (Ongoing design projects, Overdue scopes, Requests, Leads) ay nakabox na 2x2 ulit at hindi clickable, gaya ng dati.

Version 6.8: ang apat na bilang sa Home ay nakabox na 2x2 at clickable (bubukas ang Design Ongoing, Requests, o Leads).

Version 6.9: sa Design Ongoing (loob ng project) may button na Add standard plan list: Architectural, Structural, Electrical, Sanitary/Plumbing na may Sheet No. (A-01, A-02, S-01, S-02, E-01, E-02, P-01, P-02).

Version 7.0: ang Scope of work sa Design Ongoing ay pwedeng pumili sa listahan ng standard plans (lalabas habang nagtatype) o mag-type ng sariling plan. Awtomatikong lumalabas ang Sheet No. ng napiling standard plan.

Version 7.1: sa Home ng staff may My assignments: Tasks, Back jobs, Studies at Design scopes na naka-assign sa kanya (ayon sa nickname o pangalan niya), may Open button.
