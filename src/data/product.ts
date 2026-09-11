// Inhalte der Verkaufsseite für den VORTEX Z10 — deutsche Ausgabe (Deutschland, EUR, km/h).
// Übernommen von der UK-Seite vortexemobility.com (die wiederum auf der französischen Seite basiert).

/** Checkout-Link. Wird von allen Kauf-Buttons benutzt. Durch die deutsche Checkout-URL ersetzen. */
export const CHECKOUT_URL = "#kaufen";

export const product = {
  title: "VORTEX Z10 2x2, App-vernetzter E-Scooter.",
  vendor: "VORTEX",
  price: "94,90 €",
  comparePrice: "194,90 €",
  /** PAngV § 11: bei Preisermäßigungen muss der niedrigste Gesamtpreis der letzten 30 Tage angegeben werden. */
  lowestPrice30Days: "194,90 €",
  priceNote: "inkl. MwSt., kostenloser Versand",
  discountLabel: "51 % sparen",
  rating: 4.9,
  reviewCount: 312,
  bullets: [
    "Auf Lager — sofortiger Versand.",
    "Kostenloser Expressversand in ganz Deutschland",
    "60 Tage Geld-zurück-Garantie",
  ],
  gallery: Array.from({ length: 7 }, (_, i) => `/produto/${String(i + 1).padStart(2, "0")}.jpg`),
  guarantees: ["Kostenloser Versand", "Sichere Zahlung", "Begrenzter Vorrat"],
  ctaLabel: "IN DEN WARENKORB",
  stickyCtaLabel: "JETZT KAUFEN",
};

export const announcements = [
  { icon: "box", text: "KOSTENLOSER VERSAND IN DEUTSCHLAND" },
  { icon: "storefront", text: "BIS ZU 70 % RABATT" },
];

export const nav = [
  "Erste Schritte",
  "Elektromobilität",
  "Scooter-Zubehör",
  "Sicherheit unterwegs",
  "Style & Essentials",
  "Power & Laden",
];

export const trust = {
  label: "VERIFIZIERT",
  score: "4,8 von 5",
  basedOn: "Basierend auf 2.595 Bewertungen",
  grade: "Hervorragend",
};

export const deliverySteps = [
  { icon: "cart", label: "Bestellt", minDays: 0, maxDays: 0 },
  { icon: "truck", label: "Versandbereit", minDays: 2, maxDays: 3 },
  { icon: "gift", label: "Zugestellt", minDays: 6, maxDays: 7 },
];

export const reviewSummary = {
  average: 4.9,
  total: 312,
  distribution: { 5: 295, 4: 8, 3: 5, 2: 3, 1: 1 } as Record<number, number>,
};

// Die 312 Kundenbewertungen liegen in src/data/reviews.json (Name, Sterne, Text, Fotos).

export const footer = {
  serviceTitle: "KUNDENSERVICE",
  policiesTitle: "RECHTLICHES",
  newsletterTitle: "Newsletter abonnieren",
  newsletterText: "Exklusive Angebote, Neuigkeiten und Sonderrabatte direkt in dein Postfach.",
  paymentTitle: "Zahlungsarten",
  payments: ["Mastercard", "Visa", "Diners Club", "Discover"],
  copyright: "© 2026, Vortex Deutschland",
  reseller: "Autorisierter Händler",
};
