/**
 * i18n.js — Greek / English translation toggle
 * Malliaris H&S Engineer — Σταύρος Μάλλιαρης
 * Modular & reusable. Drop into any page that uses data-i18n attributes.
 *
 * Attributes recognised:
 *   data-i18n="key"             → replaces element.textContent
 *   data-i18n-html="key"        → replaces element.innerHTML
 *   data-i18n-placeholder="key" → replaces element.placeholder
 *
 * Public API:
 *   window.I18n.setLang('el' | 'en')
 *   window.I18n.getLang()
 *   window.setLang(lang)          ← shorthand for onclick="setLang('el')"
 */

(function () {
    'use strict';

    /* ─── TRANSLATIONS ───────────────────────────────────────────────────── */
    const t = {

        /* NAV */
        'nav.title':    { el: 'Τεχνικός Ασφαλείας',          en: 'Safety Officer' },
        'nav.about':    { el: 'Σχετικά',                      en: 'About' },
        'nav.services': { el: 'Υπηρεσίες',                    en: 'Services' },
        'nav.sectors':  { el: 'Τομείς',                       en: 'Sectors' },
        'nav.contact':  { el: 'Επικοινωνία',                  en: 'Contact' },

        /* HERO */
        'hero.name1':    { el: 'ΣΤΑΥΡΟΣ',                                      en: 'STAVROS' },
        'hero.name2':    { el: 'ΜΑΛΛΙΑΡΗΣ',                                    en: 'MALLIARIS' },
        'hero.eyebrow':  { el: 'Μηχανικός Υγείας & Ασφάλειας ΑΠΘ',            en: 'H&S Engineer — AUTH' },
        'hero.cta':      { el: 'Επικοινωνία',                                  en: 'Get in Touch' },
        'hero.stat1.num':{ el: '7+',                                            en: '7+' },
        'hero.stat1.lbl':{ el: 'χρόνια εμπειρίας',                             en: 'years experience' },
        'hero.stat2.num':{ el: 'ASP®',                                          en: 'ASP®' },
        'hero.stat2.lbl':{ el: 'πιστοποίηση',                                  en: 'certification' },
        'hero.stat3.num':{ el: 'ΑΠΘ',                                          en: 'AUTH' },
        'hero.stat3.lbl':{ el: 'πολ. μηχανικός',                               en: 'civil engineer' },

        /* MARQUEE */
        'marquee.m1': { el: 'Τεχνικός Ασφαλείας',                    en: 'Safety Officer' },
        'marquee.m2': { el: 'Εκτίμηση Επαγγελματικού Κινδύνου',      en: 'Risk Assessment (ΓΕΕΚ)' },
        'marquee.m3': { el: 'Σχέδια Εκκένωσης',                      en: 'Evacuation Plans' },
        'marquee.m4': { el: 'Εκπαιδεύσεις Υ&Α',                     en: 'H&S Training' },
        'marquee.m5': { el: 'ASP® Certified',                        en: 'ASP® Certified' },
        'marquee.m6': { el: 'Πολιτικός Μηχανικός ΑΠΘ',              en: 'Civil Engineer AUTH' },

        /* ABOUT */
        'about.eyebrow': { el: 'Ποιοι είμαστε', en: 'Who We Are' },
        'about.heading': {
            el: 'Σταύρος Μάλλιαρης',
            en: 'Stavros Malliaris',
        },
        'about.lead': {
            el: '<ul class="about-bullets"><li><span class="hi-num">5+</span> χρόνια <span class="hi-key">διεθνούς εμπειρίας</span> στην Υγεία &amp; Ασφάλεια</li><li>Πιστοποιημένος <span class="hi-badge">ASP®</span> &middot; Πολιτικός Μηχανικός <span class="hi-badge">ΑΠΘ</span></li><li>Εξυπηρέτηση <span class="hi-key">κάθε τύπου επιχείρησης</span> — εστιατόρια, γραφεία, εργοτάξια, βιομηχανίες</li><li>Εκατοντάδες ώρες εκπαίδευσης — <span class="hi-key">πρακτικές λύσεις</span> κατευθείαν στο πεδίο</li><li>Πλήρης <span class="hi-green">νομική κάλυψη</span> &amp; προστασία του ανθρώπινου δυναμικού σας</li></ul>',
            en: '<ul class="about-bullets"><li><span class="hi-num">5+</span> years of <span class="hi-key">international H&amp;S experience</span></li><li>Certified <span class="hi-badge">ASP®</span> &middot; Civil Engineer <span class="hi-badge">AUTH</span></li><li>Supporting <span class="hi-key">every business type</span> — restaurants, offices, construction sites, industry</li><li>Hundreds of training hours — <span class="hi-key">practical solutions</span> directly in the field</li><li>Full <span class="hi-green">legal compliance</span> &amp; protection of your most valuable asset: your people</li></ul>',
        },
        'about.dim': { el: 'Ελλάδα — Διεθνώς', en: 'Greece — International' },

        /* FEATURES — Γιατί να μας επιλέξετε */
        'feature.risk.label':        { el: 'Πολυετής Εμπειρία σε Θέματα Ασφάλειας', en: 'Years of Safety Expertise' },
        'feature.risk.text':         { el: 'Αναγνωρίζουμε έγκαιρα κινδύνους και προτείνουμε πρακτικές λύσεις που λειτουργούν στην πράξη', en: 'We identify risks early and propose practical solutions that work in the field' },
        'feature.custom.label':      { el: 'Στοχευμένη Εξυπηρέτηση',    en: 'Targeted Service' },
        'feature.custom.text':       { el: 'Εξατομικευμένη αξιολόγηση και σαφείς προτάσεις προσαρμοσμένες στο μέγεθος και τον χαρακτήρα της επιχείρησης', en: 'Individual assessment with clear, specific proposals adapted to the size and nature of each business' },
        'feature.compliance.label':  { el: 'Διακριτικότητα & Άρτια Επικοινωνία', en: 'Discretion & Clear Communication' },
        'feature.compliance.text':   { el: 'Διαχειριζόμαστε κάθε πληροφορία με απόλυτη εχεμύθεια και δίνουμε ιδιαίτερη έμφαση στη σαφή επικοινωνία με τη διοίκηση και το προσωπικό', en: 'We handle all information with full confidentiality and place special emphasis on clear communication with management and staff' },

        /* SERVICES */
        'services.eyebrow': { el: 'Εξασφαλίστε κορυφαίες συνθήκες Υγείας &amp; Ασφάλειας', en: 'Ensure top-tier Health &amp; Safety conditions' },
        'services.heading': {
            el: 'Παρέχουμε ένα πλήρες πακέτο <em>Υπηρεσιών Υ&amp;Α</em>',
            en: 'We provide a complete package of <em>H&amp;S Services</em>',
        },
        'services.lead': {
            el: 'Από την ικανοποίηση των νομικών απαιτήσεων έως την διαμόρφωση κουλτούρας πρόληψης στην εταιρεία σας, έχουμε τις λύσεις.',
            en: 'From meeting legal requirements to building a culture of prevention in your company, we have the solutions.',
        },
        'services.legal': {
            el: 'Σύμφωνα με το Ν. 3850/2010, ακόμα και για ένα άτομο προσωπικό η επιχείρηση πρέπει να έχει Τεχνικό Ασφαλείας και ΓΕΕΚ — <strong>Νόμος 3850/2010, Άρθρο 8 &amp; 43</strong>',
            en: 'Under Law 3850/2010, even a single employee requires a Safety Officer and a Risk Assessment — <strong>Law 3850/2010, Articles 8 &amp; 43</strong>',
        },

        's1.title': { el: 'Κάλυψη Τεχνικού Ασφαλείας', en: 'Safety Officer Coverage' },
        's1.text':  {
            el: 'Υποχρεωτική για κάθε εταιρεία σύμφωνα με το Νόμο 3850/2010, Άρθρο 8. Μηνιαίες επισκέψεις Τεχνικού Ασφαλείας στο χώρο σας για την αναγνώριση κινδύνων, την επίβλεψη των συνθηκών εργασίας, και παροχή στοχευμένων προτάσεων.',
            en: 'Mandatory for every business under Law 3850/2010, Article 8. Monthly Safety Officer visits to your premises for hazard identification, supervision of working conditions, and targeted recommendations.',
        },

        's2.title': { el: 'Σύνταξη Γραπτής Εκτίμησης Επαγγελματικού Κινδύνου (ΓΕΕΚ)', en: 'Written Risk Assessment Study (ΓΕΕΚ)' },
        's2.text':  {
            el: 'Υποχρεωτική για κάθε εταιρεία σύμφωνα με το Νόμο 3850/2010, Άρθρο 43. Αναλαμβάνουμε την εκπόνηση μελέτης για την σωστή εκτίμηση του επαγγελματικού κινδύνου, ανάλογα με τη δραστηριότητα και τις θέσεις εργασίας.',
            en: 'Mandatory for every business under Law 3850/2010, Article 43. We prepare the occupational risk assessment study based on your activity and job positions.',
        },

        's3.title': { el: 'Οργάνωση Εκπαιδεύσεων Υγείας και Ασφάλειας', en: 'H&S Training Programmes' },
        's3.text':  {
            el: 'Ανάλογα με τις ανάγκες της κάθε επιχείρησης και σε συνεννόηση με τη διοίκηση, παρέχουμε ένα ευρύ φάσμα εκπαιδεύσεων για τους εργαζόμενους σύμφωνα με το Νόμο 3850/2010, Άρθρο 48.',
            en: 'Tailored to the needs of each business and in agreement with management, we provide a wide range of employee training programmes under Law 3850/2010, Article 48.',
        },

        's4.title': { el: 'Διερεύνηση Εργατικών Ατυχημάτων', en: 'Workplace Accident Investigation' },
        's4.text':  {
            el: 'Αναλαμβάνουμε να διερευνήσουμε με εχεμύθεια και πλήρη επαγγελματισμό κάθε είδους εργατικό ατύχημα. Συμπεριλαμβάνεται Root Cause Analysis, προτάσεις για διορθωτικές ενέργειες και σύνταξη έκθεσης ατυχήματος.',
            en: 'We investigate all types of workplace accidents with full confidentiality and professionalism, including Root Cause Analysis, corrective action recommendations, and accident report preparation.',
        },

        's5.title': { el: 'Εκπόνηση Σχεδίων Εκκένωσης', en: 'Evacuation Plan Design' },
        's5.text':  {
            el: 'Παρέχουμε υπηρεσίες μελέτης, σχεδιασμού και αποτύπωσης Σχεδίων Διαφυγής και Εκκένωσης, βασικό εργαλείο για τη συμμόρφωση με τις απαιτήσεις της Πυροσβεστικής Υπηρεσίας και της εργατικής νομοθεσίας.',
            en: 'We provide study, design and documentation of Escape and Evacuation Plans — a key tool for compliance with Fire Service and labour legislation requirements.',
        },

        's6.title': { el: 'Προετοιμασία για Επιθεώρηση ΣΕΠΕ', en: 'Labour Inspectorate (SEPE) Preparation' },
        's6.text':  {
            el: 'Έλεγχος του φακέλου Υγείας &amp; Ασφάλειας της επιχείρησης, προκειμένου να διαπιστωθεί ο βαθμός συμμόρφωσης με την ισχύουσα νομοθεσία και να προταθούν οι απαραίτητες διορθωτικές ενέργειες.',
            en: 'Review of the business H&amp;S file to determine the level of compliance with current legislation and propose the necessary corrective actions.',
        },

        /* SECTORS */
        'sectors.eyebrow': { el: 'Τομείς Δραστηριότητας', en: 'Activity Sectors' },
        'sectors.heading': {
            el: 'Τομείς <em>Δραστηριότητας</em>',
            en: 'Sectors of <em>Activity</em>',
        },
        'sectors.lead': {
            el: 'Μετά από πολυετή εμπειρία σε απαιτητικά έργα υποδομών και επιχειρήσεις κάθε είδους, ο Σταύρος Μάλλιαρης και η ομάδα του μπορούν να συμβουλέψουν πελάτες από κάθε τομέα δραστηριότητας.',
            en: 'With years of experience across demanding infrastructure projects and businesses of all kinds, Stavros Malliaris and his team can advise clients from every sector.',
        },

        /* RESOURCES */
        'resources.eyebrow': { el: 'Γνώση & Πόροι',                      en: 'Knowledge & Resources' },
        'resources.heading': {
            el: 'Άρθρα &amp; <em>Χρήσιμοι Σύνδεσμοι</em>',
            en: 'Articles &amp; <em>Useful Links</em>',
        },

        /* CONTACT */
        'contact.eyebrow': { el: 'Επικοινωνία', en: 'Contact' },
        'contact.heading': {
            el: 'Μιλήστε <em>μαζί μου</em>',
            en: 'Let\'s <em>talk</em>',
        },
        'contact.lead': {
            el: 'Είμαι εδώ για κάθε ερώτηση ή ανάγκη. Επικοινωνήστε σήμερα για δωρεάν αρχική ενημέρωση ή κλείστε ραντεβού 15 λεπτών.',
            en: 'I\'m here for any question or need. Get in touch today for a free initial consultation or book a 15-minute appointment.',
        },
        'contact.role':    { el: 'Μηχανικός Υγείας & Ασφάλειας ΑΠΘ, MEng, ASP®', en: 'H&S Engineer AUTH, MEng, ASP®' },
        'contact.calendly':{ el: 'Κλείστε Ραντεβού',                               en: 'Book an Appointment' },

        /* FORM */
        'form.title':          { el: 'Στείλτε μήνυμα',           en: 'Send a Message' },
        'form.label.name':     { el: 'Ονοματεπώνυμο',            en: 'Full Name' },
        'form.ph.name':        { el: 'Το όνομά σας',              en: 'Your name' },
        'form.label.phone':    { el: 'Τηλέφωνο',                 en: 'Phone' },
        'form.label.email':    { el: 'Email',                     en: 'Email' },
        'form.ph.email':       { el: 'email@example.gr',          en: 'email@example.com' },
        'form.label.subject':  { el: 'Αντικείμενο',              en: 'Subject' },
        'form.select.default': { el: 'Επιλέξτε υπηρεσία',        en: 'Select a service' },
        'form.opt.1':          { el: 'Κάλυψη Τεχνικού Ασφαλείας',               en: 'Safety Officer Coverage' },
        'form.opt.2':          { el: 'ΓΕΕΚ — Εκτίμηση Επαγγελματικού Κινδύνου', en: 'Risk Assessment Study (ΓΕΕΚ)' },
        'form.opt.3':          { el: 'Εκπαιδεύσεις Υ&Α',                        en: 'H&S Training' },
        'form.opt.4':          { el: 'Διερεύνηση Εργατικού Ατυχήματος',          en: 'Accident Investigation' },
        'form.opt.5':          { el: 'Σχέδια Εκκένωσης',                         en: 'Evacuation Plans' },
        'form.opt.6':          { el: 'Προετοιμασία ΣΕΠΕ',                        en: 'Labour Inspectorate Prep' },
        'form.opt.7':          { el: 'Άλλο',                                     en: 'Other' },
        'form.label.message':  { el: 'Μήνυμα',                   en: 'Message' },
        'form.ph.message':     { el: 'Περιγράψτε σύντομα το αίτημά σας...', en: 'Briefly describe your request...' },
        'form.submit':         { el: 'Αποστολή Μηνύματος',       en: 'Send Message' },

        /* GAUGE */
        'gauge.label': { el: 'Συμμόρφωση', en: 'Compliance' },

        /* CHECKLIST */
        'cl.item1': { el: 'ΓΕΕΚ εκπονημένο',              en: 'Risk assessment completed' },
        'cl.item2': { el: 'Εκπαίδευση εργαζομένων',       en: 'Employee training done' },
        'cl.item3': { el: 'Σχέδιο εκκένωσης',             en: 'Evacuation plan in place' },
        'cl.item4': { el: 'Σήμανση ασφαλείας',            en: 'Safety signage installed' },
        'cl.item5': { el: 'Ν.3850/2010 συμμόρφωση',       en: 'Law 3850/2010 compliant' },

        /* SECTOR CARDS */
        'sec1.title': { el: 'Εστίαση και Τουρισμός', en: 'Hospitality & Tourism' },
        'sec1.text':  {
            el: '<li>Εργονομία &amp; Θέσεις Εργασίας</li><li>Πυρασφάλεια &amp; Σχέδια Εκκένωσης</li><li>Αναγνώριση Κινδύνων Υγειονομικών Χώρων</li><li>Εκπαίδευση Προσωπικού σε Θέματα Υ&amp;Α</li><li>Σχέδια Έκτακτης Ανάγκης για Επισκέπτες</li>',
            en: '<li>Ergonomics &amp; Workstations</li><li>Fire Safety &amp; Evacuation Plans</li><li>Hazard Identification in Catering Areas</li><li>Staff H&amp;S Training</li><li>Emergency Plans for Guests</li>',
        },
        'sec2.title': { el: 'Εμπόριο και Υπηρεσίες', en: 'Retail & Services' },
        'sec2.text':  {
            el: '<li>Αξιολόγηση Κινδύνου Γραφείου ή Καταστήματος</li><li>Έλεγχος Ηλεκτρολογικών Εγκαταστάσεων</li><li>Εκπαίδευση Βασικών Πρώτων Βοηθειών</li><li>Μελέτη Φωτισμού και Αερισμού Χώρων</li><li>Διαχείριση Επαγγελματικού Άγχους &amp; Κόπωσης</li>',
            en: '<li>Office or Shop Risk Assessment</li><li>Electrical Installations Inspection</li><li>Basic First Aid Training</li><li>Lighting and Ventilation Study</li><li>Occupational Stress &amp; Fatigue Management</li>',
        },
        'sec3.title': { el: 'Κατασκευές και Υποδομές', en: 'Construction & Infrastructure' },
        'sec3.text':  {
            el: '<li>Σχέδιο Ασφάλειας και Υγείας (ΣΑΥ/ΦΑΥ)</li><li>Πρόληψη Πτώσεων &amp; Μέτρα Προστασίας</li><li>Επιθεώρηση Εργοταξίου — Έλεγχος εξοπλισμού</li><li>Ασφαλής Χρήση Μηχανημάτων Έργου</li><li>Οργάνωση Πυροπροστασίας Εργοταξίου</li>',
            en: '<li>Safety &amp; Health Plan (SAY/FAY)</li><li>Fall Prevention &amp; Protection Measures</li><li>Site Inspection — Equipment Check</li><li>Safe Use of Construction Machinery</li><li>Site Fire Safety Organisation</li>',
        },
        'sec4.title': { el: 'Μεταφορές και Logistics', en: 'Transport & Logistics' },
        'sec4.text':  {
            el: '<li>Ασφαλής Αποθήκευση &amp; Στοίβαξη</li><li>Κυκλοφορία Εντός Εγκαταστάσεων</li><li>Χειρωνακτική Διακίνηση Φορτίων</li><li>Έλεγχος Κατάστασης Εξοπλισμού Φόρτωσης</li><li>Σεμινάρια Ασφαλούς Κίνησης Εντός Αποθηκών</li>',
            en: '<li>Safe Storage &amp; Stacking</li><li>Traffic Management Within Premises</li><li>Manual Handling of Loads</li><li>Loading Equipment Condition Check</li><li>Safe Movement in Warehouses Seminars</li>',
        },
        'sec5.title': { el: 'Ενέργεια και Περιβάλλον', en: 'Energy & Environment' },
        'sec5.text':  {
            el: '<li>Διαχείριση Ηλεκτρικού Κινδύνου</li><li>Ασφάλεια σε Ανανεώσιμες Πηγές</li><li>Περιβαλλοντική Πρόληψη</li><li>Εργασία σε Περιορισμένους Χώρους</li><li>Πρωτόκολλα Συντήρησης Υψηλής Τάσης</li>',
            en: '<li>Electrical Risk Management</li><li>Safety in Renewable Energy</li><li>Environmental Prevention</li><li>Confined Space Work</li><li>High Voltage Maintenance Protocols</li>',
        },
        'sec6.title': { el: 'Βιομηχανία και Παραγωγή', en: 'Industry & Production' },
        'sec6.text':  {
            el: '<li>Ασφαλής Χειρισμός Μηχανημάτων</li><li>Διαχείριση Χημικών Παραγόντων</li><li>Μελέτες ATEX</li><li>Σήμανση Ασφάλειας Χώρων Εργασίας</li><li>Τακτικοί Έλεγχοι Συστημάτων Ασφαλείας</li>',
            en: '<li>Safe Machine Operation</li><li>Chemical Agents Management</li><li>ATEX Studies</li><li>Workplace Safety Signage</li><li>Regular Safety System Inspections</li>',
        },

        /* IN ACTION */
        'action.eyebrow': { el: 'Στη Δράση',       en: 'In the Field' },
        'action.heading': {
            el: 'Επί το <em>Έργω</em>',
            en: 'In the <em>Field</em>',
        },
        'action.cap1': { el: 'Επιθεώρηση Ασφαλείας Εργοταξίου', en: 'Construction Site Safety Inspection' },
        'action.cap2': { el: 'Εκπαίδευση &amp; Αξιολόγηση Κινδύνου', en: 'Training &amp; Risk Assessment' },

        /* QUOTE */
        'quote.text': {
            el: '«Στόχος μας είναι η μετατροπή της ασφάλειας από τυπική υποχρέωση σε ουσιαστικό πλεονέκτημα για την επιχείρησή σας»',
            en: '"Our goal is to transform safety from a formal obligation into a real competitive advantage for your business."',
        },
        'quote.author': { el: 'Σταύρος Μάλλιαρης — Μηχανικός Υγείας και Ασφάλειας, MEng, ASP®', en: 'Stavros Malliaris — H&S Engineer, MEng, ASP®' },

        /* RESOURCES */
        'res1.title': { el: 'ΕΛΙΝΥΑΕ', en: 'ELINYAE' },
        'res1.text':  { el: 'Ελληνικό Ινστιτούτο Υγιεινής και Ασφάλειας της Εργασίας — εκδόσεις, μελέτες, εκπαίδευση και ενημέρωση για Υ&Α.', en: 'Hellenic Institute for Occupational Health & Safety — publications, studies, training and updates.' },
        'res2.title': { el: 'Νόμος 3850/2010', en: 'Law 3850/2010' },
        'res2.text':  { el: 'Κωδικοποιημένο κείμενο του Ν. 3850/2010 — ο βασικός νόμος για την Υγεία και Ασφάλεια στην Εργασία στην Ελλάδα.', en: 'Consolidated text of Law 3850/2010 — the primary Greek H&S at Work legislation.' },
        'res3.title': { el: 'Επιθεώρηση Εργασίας', en: 'Labour Inspectorate' },
        'res3.text':  { el: 'Επίσημος φορέας ελέγχου εφαρμογής της εργατικής νομοθεσίας — υποχρεώσεις εργοδότη, Τεχνικός Ασφαλείας, έντυπα.', en: 'Official enforcement body for labour legislation — employer obligations, Safety Officer requirements, official forms.' },
        'res4.title': { el: 'OiRA — Εκτίμηση Κινδύνου', en: 'OiRA — Risk Assessment' },
        'res4.text':  { el: 'Διαδραστικά εργαλεία εκτίμησης επαγγελματικού κινδύνου ανά κλάδο, εκδοθέντα από το Υπ. Εργασίας & EU-OSHA.', en: 'Interactive sector-specific occupational risk assessment tools published by the Ministry of Labour & EU-OSHA.' },
        'res5.title': { el: 'Αναγγελία Εργατικού Ατυχήματος', en: 'Workplace Accident Reporting' },
        'res5.text':  { el: 'Επίσημη διαδικασία αναγγελίας εργατικού ατυχήματος μέσω gov.gr — υποχρεώσεις εργοδότη και βήματα υποβολής.', en: 'Official workplace accident reporting process via gov.gr — employer obligations and submission steps.' },
        'res6.title': { el: 'Νομοθεσία Υ&Α — Υπ. Εργασίας', en: 'H&S Legislation — Ministry of Labour' },
        'res6.text':  { el: 'Πλήρης νομοθεσία για την Υγεία & Ασφάλεια στην Εργασία από το Υπουργείο Εργασίας — νόμοι, ΠΔ και υπουργικές αποφάσεις.', en: 'Full H&S at Work legislation from the Ministry of Labour — laws, presidential decrees and ministerial decisions.' },
        'res.visit':  { el: 'Επίσκεψη', en: 'Visit' },

        /* CONTACT */
        'contact.location': { el: 'Ελλάδα & Διεθνώς', en: 'Greece & International' },

        /* FOOTER */
        'footer.title': { el: 'Μηχανικός Υγείας & Ασφάλειας ΑΠΘ', en: 'H&S Engineer AUTH' },
    };

    /* ─── STATE ──────────────────────────────────────────────────────────── */
    let currentLang = 'el';

    /* ─── APPLY TRANSLATIONS ─────────────────────────────────────────────── */
    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        /* text content */
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key] && t[key][lang] !== undefined) {
                el.textContent = t[key][lang];
            }
        });

        /* innerHTML (for keys with HTML tags) */
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (t[key] && t[key][lang] !== undefined) {
                el.innerHTML = t[key][lang];
            }
        });

        /* placeholder attribute */
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (t[key] && t[key][lang] !== undefined) {
                el.placeholder = t[key][lang];
            }
        });

        /* update <html lang> attribute */
        document.documentElement.lang = lang;

        /* update toggle button states */
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    /* ─── PUBLIC API ─────────────────────────────────────────────────────── */
    window.I18n = {
        setLang: applyLang,
        getLang: function () { return currentLang; },
        translations: t,
    };

    /* Global shorthand used by onclick="setLang('en')" buttons */
    window.setLang = applyLang;

    /* ─── INIT ───────────────────────────────────────────────────────────── */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { applyLang(currentLang); });
    } else {
        applyLang(currentLang);
    }

})();
