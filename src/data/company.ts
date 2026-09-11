import { SITE_URL } from "@/lib/site";

// Rechtliche Identität, die in Impressum, Rechtstexten und Footer verwendet wird.
// Die Platzhalter in eckigen Klammern VOR dem Livegang ausfüllen — § 5 DDG (Impressumspflicht),
// § 312d BGB / Art. 246a EGBGB (Informationspflichten im Fernabsatz), ElektroG, VerpackG und die
// Google-Merchant-/Ads-Richtlinien verlangen korrekte und vollständige Angaben.

export const company = {
  tradingName: "Vortex Deutschland",
  legalName: "[Firmenname] GmbH",
  managingDirector: "[Vor- und Nachname des Geschäftsführers]",
  registerCourt: "[Amtsgericht, z. B. Amtsgericht Berlin-Charlottenburg]",
  registerNumber: "HRB [Nummer]",
  vatId: "DE[USt-IdNr.]",
  weeeNumber: "DE [WEEE-Reg.-Nr.]",
  lucidNumber: "DE[LUCID-Registrierungsnummer]",
  address: "[Straße und Hausnummer], [PLZ] [Stadt], Deutschland",
  email: "support@vortex-deutschland.de",
  phone: "[Telefonnummer des Kundenservice]",
  website: SITE_URL,
  serviceHours: "Montag bis Freitag, 9 bis 17 Uhr",
  lastUpdated: "11. September 2026",
};

export const policyLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutzerklärung", href: "/datenschutz" },
  { label: "Cookie-Richtlinie", href: "/cookie-richtlinie" },
  { label: "AGB", href: "/agb" },
  { label: "Widerrufsrecht & Rückgabe", href: "/widerrufsrecht" },
  { label: "Versand & Lieferung", href: "/versand" },
];
