/* ==========================================================================
   Softdoor Karriere Demo — Stellendaten
   Quelle: echte Ausschreibungen von softdoor.jobs.personio.de (Juli 2026)
   ========================================================================== */

const ABOUT_SOFTDOOR = [
  "Die Softdoor GmbH ist ein Unternehmen, das Projekte schwerpunktmäßig im Bereich Gesundheit, Leben und Arbeit umsetzt. Wir begleiten und coachen Menschen mit gesundheitlichen Einschränkungen und multiplen Hemmnissen.",
  "Dabei verfolgen wir einen spezifischen Ansatz: Jeder Mensch lebt mit seiner individuellen Geschichte und eigenen Herausforderungen. Unsere Vision liegt in der Entwicklung und Verbreitung des Empowerment-Ansatzes.",
  "Als Bildungsträger möchten wir helfen, Wissen zu erwerben, es anzuwenden und eigenverantwortlich zu handeln. Unsere Lehr- und Lerntechniken setzen auf Individualität, Innovation und Integration.",
  "Zusammen mit zwei weiteren Gesellschaften bilden wir die „Integration Gruppe“ und betreuen ca. 18.000 Teilnehmer pro Jahr."
];

/* Inhaltsbausteine je Berufsbild (aus den echten Personio-Anzeigen abgeleitet) */
const CONTENT = {
  coach: {
    tasks: [
      "Du führst individuelle Coachinggespräche durch (vor Ort, digital und in der aufsuchenden Arbeit)",
      "Du unterstützt beim Abbau gesundheitlicher und psychosozialer Einschränkungen und Hemmnisse",
      "Du stärkst Selbstorganisation, Alltagsstruktur und Selbstwirksamkeit",
      "Du entwickelst realistische berufliche Perspektiven und begleitest Bewerbungsprozesse",
      "Du dokumentierst Fortschritte professionell und aussagekräftig",
      "Du bringst dich aktiv in die Weiterentwicklung unserer Coachingformate ein"
    ],
    profile: [
      "Einen anerkannten Berufsabschluss oder ein Studium",
      "Wünschenswert: eine Weiterbildung im Coaching- oder im psychologischen Bereich",
      "Erfahrung in der Arbeit mit Menschen in komplexen Lebenssituationen",
      "Kenntnisse in psychosozialer Beratung, Gesundheitsförderung und Arbeitsmarktintegration",
      "Digitale Kompetenz und die Fähigkeit, auch online vertrauensvolle Beziehungen aufzubauen",
      "Klarheit, Empathie und die Fähigkeit, auch in herausfordernden Momenten Orientierung zu geben"
    ]
  },
  sozial: {
    tasks: [
      "Du begleitest und betreust unsere Teilnehmer:innen ganzheitlich auf ihrem Weg zurück ins Berufsleben",
      "Du führst Einzel- und Gruppenangebote zur Stabilisierung und Aktivierung durch",
      "Du unterstützt beim Abbau psychosozialer Hemmnisse und bei Alltagsfragen",
      "Du arbeitest eng mit Jobcentern, Netzwerkpartnern und unserem Standortteam zusammen",
      "Du dokumentierst Entwicklungsverläufe professionell und aussagekräftig",
      "Du gestaltest unsere Betreuungsformate aktiv mit"
    ],
    profile: [
      "Ein abgeschlossenes Studium der Sozialen Arbeit, Sozialpädagogik oder eine vergleichbare Qualifikation",
      "Erfahrung in der Arbeit mit Menschen in komplexen Lebenssituationen",
      "Kenntnisse in psychosozialer Beratung und Arbeitsmarktintegration",
      "Eine strukturierte, eigenverantwortliche Arbeitsweise",
      "Empathie, Geduld und eine wertschätzende Grundhaltung",
      "Digitale Kompetenz für Dokumentation und Online-Formate"
    ]
  },
  psych: {
    tasks: [
      "Du unterstützt unsere Teilnehmer:innen psychologisch bei der Stabilisierung ihrer Gesundheit",
      "Du führst Einzelgespräche und psychoedukative Gruppenangebote durch",
      "Du erkennst psychische Belastungen und leitest passende Unterstützungsangebote ein",
      "Du arbeitest interdisziplinär mit Coaches und Sozialpädagog:innen zusammen",
      "Du dokumentierst Verläufe professionell und aussagekräftig",
      "Du bringst dein Fachwissen in die Weiterentwicklung unserer Programme ein"
    ],
    profile: [
      "Ein abgeschlossenes Studium der Psychologie (Bachelor oder Master)",
      "Erfahrung in Beratung, Diagnostik oder psychosozialer Unterstützung",
      "Kenntnisse in Gesundheitsförderung und Arbeitsmarktintegration von Vorteil",
      "Klarheit, Empathie und professionelle Distanz in herausfordernden Situationen",
      "Freude an interdisziplinärer Teamarbeit",
      "Digitale Kompetenz für hybride Betreuungsformate"
    ]
  },
  verwaltung: {
    tasks: [
      "Du bist die erste Anlaufstelle für Teilnehmer:innen, Besucher:innen und Anrufer:innen",
      "Du übernimmst die administrative Organisation des Standorts",
      "Du pflegst Teilnehmerdaten und unterstützt bei der Dokumentation",
      "Du koordinierst Termine und unterstützt das Team im Tagesgeschäft",
      "Du bereitest Unterlagen, Berichte und Abrechnungen vor",
      "Du sorgst dafür, dass unser Standort rund läuft"
    ],
    profile: [
      "Eine abgeschlossene kaufmännische Ausbildung oder vergleichbare Qualifikation",
      "Sicherer Umgang mit MS Office und digitalen Tools",
      "Organisationstalent und eine strukturierte, sorgfältige Arbeitsweise",
      "Freundliches, verbindliches Auftreten",
      "Freude am Umgang mit Menschen in unterschiedlichen Lebenslagen",
      "Zuverlässigkeit und Diskretion"
    ]
  },
  koordination: {
    tasks: [
      "Du verantwortest die operative Durchführung arbeitsmarktpolitischer Maßnahmen am Standort",
      "Du koordinierst das Team aus Coaches, Sozialpädagog:innen und Verwaltungskräften",
      "Du bist Ansprechpartner:in für Jobcenter, Agenturen für Arbeit und Netzwerkpartner",
      "Du stellst Qualität, Dokumentation und Zielerreichung der Projekte sicher",
      "Du planst Ressourcen und optimierst Abläufe am Standort",
      "Du berichtest an die Regionalleitung und wirkst an der Weiterentwicklung mit"
    ],
    profile: [
      "Ein abgeschlossenes Studium oder eine vergleichbare Qualifikation",
      "Erfahrung in der Durchführung oder Koordination arbeitsmarktpolitischer Maßnahmen",
      "Führungskompetenz und Organisationsstärke",
      "Sicheres Auftreten gegenüber Auftraggebern und Partnern",
      "Kenntnisse der Förderlandschaft (SGB II / SGB III) von Vorteil",
      "Hands-on-Mentalität und Freude an Verantwortung"
    ]
  }
};

const BENEFITS_DEFAULT = [
  "Ein professionelles Umfeld mit wertschätzender Teamkultur",
  "Flexible Arbeitszeiten und die Möglichkeit, mobil zu arbeiten",
  "Regelmäßige Supervision und kollegialer Austausch",
  "Raum für Eigenverantwortung, Mitgestaltung und fachliche Weiterentwicklung",
  "Eine Tätigkeit mit gesellschaftlicher Relevanz und spürbarem Impact",
  "Eine attraktive Vergütung"
];

const JOBS = [
  { id: "coach-kiel", title: "Coach (m/w/d) in Teilzeit/ Vollzeit", city: "Kiel", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Coaching & Betreuung", cat: "coach", featured: true },
  { id: "coach-siegen", title: "Coach (m/w/d) in Teilzeit/ Vollzeit", city: "Siegen", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Coaching & Betreuung", cat: "coach" },
  { id: "coach-lueneburg", title: "Coach (m/w/d) in Teilzeit/ Vollzeit", city: "Lüneburg", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Coaching & Betreuung", cat: "coach" },
  { id: "coach-walsrode", title: "Coach (m/w/d) in Teilzeit/ Vollzeit Heidelandkreis", city: "Walsrode", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Coaching & Betreuung", cat: "coach" },
  { id: "coach-schleswig", title: "Coach (m/w/d) in Teilzeit/ Vollzeit oder Honorarbasis | Schleswig/Flensburg", city: "Schleswig / Flensburg", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Coaching & Betreuung", cat: "coach" },
  { id: "coach-ukraine-zwickau", title: "Coach (m/w/d) auf Honorarbasis – Ukraine", city: "Zwickau", schedule: "Voll- oder Teilzeit", type: "Freelancing", dept: "Coaching & Betreuung", cat: "coach" },
  { id: "coach-bergisch", title: "Coach für die ganzheitliche Betreuung (m/w/d)", city: "Bergisch Gladbach", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Coaching & Betreuung", cat: "coach" },
  { id: "coach-kassel", title: "Coach für die ganzheitliche Betreuung (m/w/d)", city: "Kassel", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Coaching & Betreuung", cat: "coach" },
  { id: "coach-ingolstadt", title: "Coach für die ganzheitliche Betreuung (m/w/d) in Voll- oder Teilzeit bzw. Honorarbasis", city: "Ingolstadt", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Coaching & Betreuung", cat: "coach" },
  { id: "jobcoach-koeln", title: "Jobcoach für berufliche Betreuung (m/w/d)", city: "Köln", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Coaching & Betreuung", cat: "coach" },
  { id: "sozialpaed-hamburg-frei", title: "Freiberufliche Mitarbeit als Sozialpädagoge (m/w/d)", city: "Hamburg", schedule: "Voll- oder Teilzeit", type: "Freelancing", dept: "Sozialpädagogik & Psychologie", cat: "sozial" },
  { id: "sozialpaed-reinbek", title: "Sozialpädagog:innen (m/w/d) – Vollzeit oder Teilzeit | Reinbek", city: "Hamburg", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Sozialpädagogik & Psychologie", cat: "sozial" },
  { id: "sozialpaed-vs", title: "Sozialpädagoge, Erzieher, Arbeitserzieher, Psychologe (m/w/d)", city: "Villingen-Schwenningen", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Sozialpädagogik & Psychologie", cat: "sozial" },
  { id: "sozialpaed-muenster", title: "Sozialpädagogische Fachkraft / Sozialarbeiter (m/w/d) in Münster", city: "Münster", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Sozialpädagogik & Psychologie", cat: "sozial" },
  { id: "psych-bergisch", title: "Psycholog:in für die ganzheitliche Betreuung (m/w/d)", city: "Bergisch Gladbach", schedule: "Voll- oder Teilzeit", type: "Festanstellung", dept: "Sozialpädagogik & Psychologie", cat: "psych" },
  { id: "projektkoordination-plauen", title: "Projektkoordination (m/w/d) für die Durchführung arbeitsmarktpolitischer Maßnahmen", city: "Plauen", schedule: "Vollzeit", type: "Festanstellung", dept: "Projektleitung & Koordination", cat: "koordination" },
  { id: "verwaltung-siegen", title: "Verwaltungskraft (m/w/d)", city: "Siegen", schedule: "Vollzeit", type: "Festanstellung", dept: "Verwaltung & Organisation", cat: "verwaltung" },
  { id: "verwaltung-itzehoe", title: "Verwaltungskraft / Büroassistenz (m/w/d) in Teilzeit (15 Stunden)", city: "Itzehoe", schedule: "Teilzeit", type: "Festanstellung", dept: "Verwaltung & Organisation", cat: "verwaltung" }
];

/* Reihenfolge der Abteilungen in der Liste */
const DEPT_ORDER = [
  "Coaching & Betreuung",
  "Sozialpädagogik & Psychologie",
  "Projektleitung & Koordination",
  "Verwaltung & Organisation"
];

const DEPT_ICONS = {
  "Coaching & Betreuung": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  "Sozialpädagogik & Psychologie": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  "Projektleitung & Koordination": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 9h6M9 13h6M9 17h3"/></svg>',
  "Verwaltung & Organisation": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'
};

function jobContent(job) {
  const c = CONTENT[job.cat] || CONTENT.coach;
  return { tasks: c.tasks, profile: c.profile, benefits: BENEFITS_DEFAULT, about: ABOUT_SOFTDOOR };
}

function getJob(id) {
  return JOBS.find(j => j.id === id) || JOBS[0];
}
