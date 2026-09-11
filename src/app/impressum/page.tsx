import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Impressum – Vortex Deutschland",
  description: "Anbieterkennzeichnung von Vortex Deutschland gemäß § 5 DDG und § 18 Abs. 2 MStV.",
  alternates: { canonical: "/impressum" },
};

export default function Impressum() {
  return (
    <PolicyPage title="Impressum" intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV).">
      <h2>Diensteanbieter</h2>
      <table>
        <tbody>
          <tr>
            <th>Handelsname</th>
            <td>{company.tradingName}</td>
          </tr>
          <tr>
            <th>Firma</th>
            <td>{company.legalName}</td>
          </tr>
          <tr>
            <th>Anschrift</th>
            <td>{company.address}</td>
          </tr>
          <tr>
            <th>Vertreten durch</th>
            <td>{company.managingDirector} (Geschäftsführer)</td>
          </tr>
          <tr>
            <th>Registergericht</th>
            <td>{company.registerCourt}</td>
          </tr>
          <tr>
            <th>Registernummer</th>
            <td>{company.registerNumber}</td>
          </tr>
          <tr>
            <th>Umsatzsteuer-ID</th>
            <td>{company.vatId} (gemäß § 27a Umsatzsteuergesetz)</td>
          </tr>
          <tr>
            <th>WEEE-Reg.-Nr.</th>
            <td>{company.weeeNumber} (Registrierung bei der stiftung ear gemäß ElektroG)</td>
          </tr>
          <tr>
            <th>LUCID-Nr.</th>
            <td>{company.lucidNumber} (Verpackungsregister gemäß VerpackG)</td>
          </tr>
          <tr>
            <th>E-Mail</th>
            <td>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </td>
          </tr>
          <tr>
            <th>Telefon</th>
            <td>
              {company.phone} — {company.serviceHours}
            </td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{company.website}</td>
          </tr>
        </tbody>
      </table>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        {company.managingDirector}
        <br />
        {company.address}
      </p>

      <h2>Hosting</h2>
      <p>Diese Website wird gehostet von Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.</p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG). Die Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS-Plattform) wurde zum 20. Juli 2025 eingestellt. Bei Fragen oder Beschwerden wende dich bitte direkt an <a href={`mailto:${company.email}`}>{company.email}</a> — wir bemühen uns um eine schnelle Lösung.
      </p>

      <h2>Hinweise zur Entsorgung (ElektroG, Batterierecht)</h2>
      <p>
        <b>Elektro- und Elektronikgeräte:</b> Das Symbol der durchgestrichenen Mülltonne auf dem Produkt bedeutet, dass Altgeräte nicht über den Hausmüll entsorgt werden dürfen. Du kannst Altgeräte kostenlos bei den kommunalen Sammelstellen abgeben. Als Vertreiber nehmen wir beim Kauf eines neuen Geräts gleicher Art ein Altgerät kostenlos zurück; kleine Altgeräte (keine äußere Abmessung größer als 25 cm) nehmen wir auch ohne Neukauf zurück. Kontaktiere uns unter <a href={`mailto:${company.email}`}>{company.email}</a>, um eine Rücksendung zu vereinbaren. Bitte entferne vor der Abgabe personenbezogene Daten (z. B. App-Kopplung) und, sofern möglich, entnehmbare Batterien.
      </p>
      <p>
        <b>Batterien und Akkus:</b> Der VORTEX Z10 enthält einen Lithium-Ionen-Akku. Batterien und Akkus dürfen nicht in den Hausmüll. Du bist gesetzlich verpflichtet, Altbatterien zurückzugeben — kostenlos bei uns (Rücksendung nach Absprache) oder bei kommunalen Sammelstellen und im Handel. Das Symbol der durchgestrichenen Mülltonne, ggf. mit den Zeichen Pb, Cd oder Hg, weist auf die getrennte Sammlung und enthaltene Schadstoffe hin. Lithium-Akkus bitte mit abgeklebten Polen und nur im entladenen, unbeschädigten Zustand abgeben.
      </p>

      <h2>Marken</h2>
      <p>
        VORTEX und das VORTEX-Logo sind Marken des jeweiligen Inhabers. {company.tradingName} ist autorisierter Händler. Alle anderen genannten Marken gehören ihren jeweiligen Eigentümern.
      </p>

      <h2>Produktsicherheit</h2>
      <p>
        Der VORTEX Z10 wird mit einem EU-Ladegerät und einer Bedienungsanleitung geliefert. Bitte lies die Anleitung vor der ersten Nutzung. Der VORTEX Z10 besitzt keine Allgemeine Betriebserlaubnis (ABE) nach der Elektrokleinstfahrzeuge-Verordnung (eKFV) und darf in Deutschland nicht im öffentlichen Straßenverkehr genutzt werden — nur auf Privatgelände mit Zustimmung des Eigentümers; siehe unsere <Link href="/agb">AGB</Link>. Sicherheitsbedenken bitte an <a href={`mailto:${company.email}`}>{company.email}</a> melden.
      </p>

      <h2>Haftung für Inhalte und Links</h2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität können wir jedoch keine Gewähr übernehmen. Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben; für diese Inhalte ist stets der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Rechteinhabers.
      </p>

      <h2>Unsere Rechtstexte</h2>
      <ul>
        <li>
          <Link href="/datenschutz">Datenschutzerklärung</Link>
        </li>
        <li>
          <Link href="/cookie-richtlinie">Cookie-Richtlinie</Link>
        </li>
        <li>
          <Link href="/agb">Allgemeine Geschäftsbedingungen (AGB)</Link>
        </li>
        <li>
          <Link href="/widerrufsrecht">Widerrufsrecht &amp; Rückgabe</Link>
        </li>
        <li>
          <Link href="/versand">Versand &amp; Lieferung</Link>
        </li>
      </ul>
    </PolicyPage>
  );
}
