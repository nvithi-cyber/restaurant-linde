/*
 * Design Reminder — Editorial Hospitality Modernism
 * Warme Naturtöne, grosszügiger Weissraum, elegante Serif-Headlines,
 * ruhige Premium-Typografie und versetzte Bild-Text-Kompositionen.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type SpaceItem = {
  slug: string;
  kicker: string;
  title: string;
  shortText: string;
  longText: string;
  image: string;
  accent: string;
  surface: string;
};

export type MenuSection = {
  title: string;
  description: string;
  items: Array<{
    name: string;
    detail: string;
    price: string;
  }>;
};

export const siteMeta = {
  name: "Restaurant Linde",
  legalName: "Bistro zur Linde GmbH",
  address: "Aeschwuhrstrasse 25, 4665 Oftringen",
  phone: "+41 62 000 00 00",
  email: "kontakt@restaurant-linde.ch",
  reservationAnchor: "#reservieren",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Bistro", href: "/bistro" },
  { label: "Sääli", href: "/saeaeli" },
  { label: "Zigarrenlounge & Wine Room", href: "/lounge-wine-room" },
  { label: "Reservation", href: "/reservation" },
  { label: "Kontakt", href: "/kontakt" },
];

export const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663030041768/Xd9zj5dpGPntZ8LAPR39h7/restaurant-linde-hero-EGKzuodHxKQRCuNXinNXCf.webp";

export const foodImages = {
  menu:
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  brunch:
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
  atmosphere:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
};

export const spaces: SpaceItem[] = [
  {
    slug: "bistro",
    kicker: "Offen. Hell. Unkompliziert.",
    title: "Bistro",
    shortText:
      "Der Hauptfokus der Website: ein zugänglicher, heller Gastraum mit entspannter Premium-Anmutung für Mittag, Abend und spontane Besuche.",
    longText:
      "Dies ist ein deutscher Platzhaltertext für das Bistro. Hier entsteht eine spätere Beschreibung zu Atmosphäre, Tagesangebot, Treffpunkt-Charakter und unkomplizierter Gastfreundschaft. Der Text dient aktuell als Layoutinhalt und zeigt, wie ein hochwertiger redaktioneller Abschnitt mit realem Content wirken wird.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030041768/Xd9zj5dpGPntZ8LAPR39h7/restaurant-linde-bistro-DjaBXoaDb3WBhT9imUnxBv.webp",
    accent: "text-stone-800",
    surface: "bg-[#f6efe5]",
  },
  {
    slug: "saeaeli",
    kicker: "Klassisch. Hochwertig. Feierlich.",
    title: "Sääli",
    shortText:
      "Ein separater Raum für Anlässe, Firmenessen und geschlossene Gesellschaften – mit klassischer, ruhiger und gepflegter Ausstrahlung.",
    longText:
      "Dies ist ein deutscher Platzhaltertext für das Sääli. Später stehen hier Informationen zu Bestuhlungen, Gruppenformaten, Firmenessen und privaten Feiern. Der Abschnitt demonstriert die Tonalität einer wertigen Raumpräsentation mit viel Ruhe und klarer Informationshierarchie.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030041768/Xd9zj5dpGPntZ8LAPR39h7/restaurant-linde-saeli-ALyCmoU9B5KgVdXMbmrxN4.webp",
    accent: "text-[#6f4e37]",
    surface: "bg-[#fbf7f2]",
  },
  {
    slug: "zigarrenlounge",
    kicker: "Gediegen. Ruhig. Elegant.",
    title: "Zigarrenlounge",
    shortText:
      "Ein dunkler, intimer Rückzugsort mit gedämpftem Licht, Leder und Holz – gestaltet für entspannte Gespräche in souveräner Atmosphäre.",
    longText:
      "Dies ist ein deutscher Platzhaltertext für die Zigarrenlounge. Er zeigt, wie später Informationen zu Ambiente, Nutzung und Aufenthaltsqualität platziert werden. Die Textlänge ist bewusst gewählt, damit Typografie, Weissraum und dunkle Flächen bereits im finalen Charakter getestet werden können.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030041768/Xd9zj5dpGPntZ8LAPR39h7/restaurant-linde-cigar-lounge-dyuC7ZRpzfWCRDY4ihKsYs.webp",
    accent: "text-[#f1e7d7]",
    surface: "bg-[#241a16]",
  },
  {
    slug: "wine-room",
    kicker: "Exklusiv. Warm. Kuratiert.",
    title: "Wine Room",
    shortText:
      "Ein holzbetonter Raum mit tiefer Wärme und diskretem Luxus für Degustationen, kleine Runden und private Genussmomente.",
    longText:
      "Dies ist ein deutscher Platzhaltertext für den Wine Room. Später werden hier Hinweise zu Weinabenden, Formaten und privater Nutzung ergänzt. Aktuell dient der Inhalt als glaubwürdiger Strukturtext für die hochwertige Präsentation dieses exklusiveren Bereichs.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663030041768/Xd9zj5dpGPntZ8LAPR39h7/restaurant-linde-wine-room-LQvMtSibw8FEPTuitied2a.webp",
    accent: "text-[#f4e7ce]",
    surface: "bg-[#2f241c]",
  },
];

export const bistroMenus: MenuSection[] = [
  {
    title: "Mittagskarte · Beispielinhalte",
    description:
      "Diese Menükarten sind bewusst als deutsche Platzhalter angelegt und zeigen die spätere Struktur der Speisepräsentation.",
    items: [
      {
        name: "Beispielgericht Linde",
        detail: "Platzhaltertext mit saisonaler Beilage, Gemüsevariation und warmer Jus.",
        price: "CHF 24",
      },
      {
        name: "Hausgemachte Pasta · Beispiel",
        detail: "Deutscher Lorem-Ipsum-Platzhalter für eine vegetarische Mittagsoption.",
        price: "CHF 21",
      },
      {
        name: "Tagesdessert · Beispiel",
        detail: "Kleine süsse Komposition als Layout- und Strukturplatzhalter.",
        price: "CHF 9",
      },
    ],
  },
  {
    title: "Abendkarte · Beispielinhalte",
    description:
      "Die Typografie, Preislogik und Abstände sind bereits auf einen hochwertigen gastronomischen Auftritt ausgerichtet.",
    items: [
      {
        name: "Rind · Platzhalter",
        detail: "Beschreibung auf Deutsch mit cremiger Begleitung und saisonischen Akzenten.",
        price: "CHF 42",
      },
      {
        name: "Fisch · Platzhalter",
        detail: "Feiner Layouttext für eine elegante Hauptgang-Komposition.",
        price: "CHF 39",
      },
      {
        name: "Vegetarisch · Platzhalter",
        detail: "Deutschsprachiger Demo-Text für die spätere Menüpflege.",
        price: "CHF 31",
      },
    ],
  },
];

export const events = [
  {
    date: "12. Juni 2026",
    title: "Sommerabend im Innenhof · Platzhalter",
    text:
      "Dies ist ein deutscher Platzhaltertext für News und Events. Er zeigt, wie Datum, Titel und kurzer Teaser auf der Startseite inszeniert werden.",
    image: foodImages.atmosphere,
  },
  {
    date: "26. Juni 2026",
    title: "Wine Room Tasting · Platzhalter",
    text:
      "Auch dieser Inhalt ist ein Platzhalter. Später können hier thematische Degustationen, Menüabende oder saisonale Specials gepflegt werden.",
    image: foodImages.menu,
  },
  {
    date: "10. Juli 2026",
    title: "Business Lunch im Sääli · Platzhalter",
    text:
      "Beispieltext für Firmenessen, Gruppenformate oder exklusive Buchungsfenster mit hochwertiger Kurzbeschreibung.",
    image: foodImages.brunch,
  },
];

export const openingHours = [
  { day: "Montag", hours: "Geschlossen · Platzhalter" },
  { day: "Dienstag", hours: "11:30–14:00 / 17:30–23:00 · Platzhalter" },
  { day: "Mittwoch", hours: "11:30–14:00 / 17:30–23:00 · Platzhalter" },
  { day: "Donnerstag", hours: "11:30–14:00 / 17:30–23:00 · Platzhalter" },
  { day: "Freitag", hours: "11:30–14:00 / 17:30–00:00 · Platzhalter" },
  { day: "Samstag", hours: "17:30–00:00 · Platzhalter" },
  { day: "Sonntag", hours: "10:00–16:00 · Platzhalter" },
];

export const reservationReasons = [
  "Bistro",
  "Sääli",
  "Zigarrenlounge",
  "Wine Room",
  "Firmenessen",
  "Privatanlass",
];

export const legalPlaceholders = {
  impressum:
    "Dies ist ein Platzhalter für das Impressum der Bistro zur Linde GmbH. Nach der finalen Abnahme werden hier die vollständigen rechtlichen Angaben, Vertretungsberechtigungen, Kontaktpunkte und allfällige Registereinträge ergänzt.",
  datenschutz:
    "Dies ist ein Platzhalter für die Datenschutzerklärung. Nach der finalen juristischen Prüfung werden hier Angaben zur Datenverarbeitung, zu eingebundenen Diensten, zu Kontaktformularen, Analysewerkzeugen und Betroffenenrechten ergänzt.",
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];
