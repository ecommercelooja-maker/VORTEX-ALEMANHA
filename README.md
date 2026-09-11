# VORTEX Deutschland

Verkaufsseite für den **VORTEX Z10** E-Scooter, deutsche Ausgabe (Deutsch, EUR, km/h).
Gebaut mit Next.js 16 + Tailwind CSS 4. Schwesterprojekt von `VORTEX-UK` (englische Seite) und `vortex-loja-2` (französische Seite).

## Lokal starten

```bash
npm install
npm run dev
```

Dann http://localhost:3000 öffnen.

## Wo die Inhalte liegen

- `src/data/product.ts` — Preis, Titel, Bullets, Checkout-Link (`CHECKOUT_URL`), Footer, Navigation.
- `src/data/company.ts` — Firmendaten für Impressum, Rechtstexte und Footer (Platzhalter in eckigen Klammern ausfüllen).
- `src/data/reviews.json` — die 312 Kundenbewertungen (Name, Sterne, Text, Fotos).
- `src/components/Description.tsx` — die lange Produktbeschreibung (HTML, keine Bilder mit Text).
- `src/app/impressum`, `datenschutz`, `cookie-richtlinie`, `agb`, `widerrufsrecht`, `versand` — Rechtstexte nach deutschem Recht (DDG, DSGVO, TDDDG, BGB/EGBGB, PAngV, ElektroG, VerpackG).
- `public/produto/` — Produktfotos, `public/reviews/` — Kundenfotos.

## Vor dem Livegang

1. Platzhalter in `src/data/company.ts` ausfüllen (Firma, Geschäftsführer, Registergericht, HRB, USt-IdNr., WEEE-Nr., LUCID-Nr., Adresse, Telefon, E-Mail).
2. `CHECKOUT_URL` in `src/data/product.ts` auf den echten Checkout setzen.
3. `lowestPrice30Days` in `src/data/product.ts` prüfen (PAngV § 11 — niedrigster Gesamtpreis der letzten 30 Tage).
4. In `src/app/widerrufsrecht/page.tsx` die Abholgebühr `[Abholgebühr]` eintragen.
5. Google-Tag (gtag.js) mit der eigenen Mess-ID im Layout einbinden — das Consent-Mode-Banner ist schon vorbereitet.

## Deploy

Gehostet auf Vercel (Projekt `vortex-de`, Team ecommercelooja). `NEXT_PUBLIC_SITE_URL`
auf die Produktionsdomain setzen, damit Canonical-URLs, robots.txt und sitemap.xml darauf zeigen.

## Eigene Domain verbinden

1. Domain kaufen (z. B. bei Hostinger).
2. Aus diesem Ordner in PowerShell ausführen:

   ```powershell
   .\scripts\connect-domain.ps1 -Domain example.de
   ```

   Das fügt `example.de` und `www.example.de` zum Vercel-Projekt hinzu, setzt
   `NEXT_PUBLIC_SITE_URL=https://example.de` für Production und deployt neu.
3. Beim Registrar die DNS-Einträge anlegen:

   | Typ   | Name | Wert                   |
   | ----- | ---- | ---------------------- |
   | A     | @    | 76.76.21.21            |
   | CNAME | www  | cname.vercel-dns.com   |

4. DNS-Propagation abwarten; Vercel stellt das SSL-Zertifikat automatisch aus.
5. `src/data/company.ts` aktualisieren (Support-E-Mail auf der neuen Domain) und neu deployen.

Die Seite läuft in der Zwischenzeit weiter auf https://vortex-de.vercel.app.
