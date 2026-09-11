import type { Metadata } from "next";
import Link from "next/link";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import PolicyPage from "@/components/PolicyPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie – Vortex Deutschland",
  description: "Die auf der Website von Vortex Deutschland eingesetzten Cookies und ähnlichen Technologien und wie du deine Auswahl verwaltest (§ 25 TDDDG / DSGVO).",
  alternates: { canonical: "/cookie-richtlinie" },
};

export default function CookieRichtlinie() {
  return (
    <PolicyPage
      title="Cookie-Richtlinie"
      intro={`Diese Richtlinie erklärt, welche Cookies und ähnlichen Technologien ${company.tradingName} auf ${company.website} einsetzt, wozu, und wie du sie steuern kannst. Sie ergänzt unsere Datenschutzerklärung und entspricht § 25 des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG) sowie der DSGVO, unter Berücksichtigung der Orientierungshilfe der Datenschutzkonferenz (DSK) für Telemedienanbieter.`}
    >
      <h2>1. Was sind Cookies?</h2>
      <p>
        Cookies sind kleine Textdateien, die eine Website auf deinem Endgerät ablegt. Ähnliche Technologien sind Local Storage, Pixel und Tags. Sie ermöglichen es einer Website, deine Aktionen und Einstellungen zu speichern, die Nutzung zu messen oder Werbung auszuspielen. Manche Cookies setzen wir selbst (First-Party), andere setzen Dritte, deren Dienste wir nutzen (Third-Party), z. B. Google.
      </p>

      <h2>2. Deine Einwilligung</h2>
      <p>
        Nach § 25 Abs. 1 TDDDG dürfen wir Cookies, die <b>nicht</b> technisch unbedingt erforderlich sind, nur mit deiner Einwilligung setzen. Beim ersten Besuch stellt unser Cookie-Banner jede nicht notwendige Kategorie auf „abgelehnt" und bittet dich um eine Entscheidung. Nichts Nicht-Notwendiges wird geladen, bevor du auf „Alle akzeptieren" klickst oder eine individuelle Auswahl speicherst. Wir speichern deine Entscheidung 12 Monate lang, danach fragen wir erneut. Du kannst deine Entscheidung jederzeit ändern:
      </p>
      <p>
        <CookieSettingsButton />
      </p>
      <p>
        Wir setzen den Google Consent Mode v2 ein. Das bedeutet, dass die Google-Tags deine Auswahl respektieren: Ohne Einwilligung setzen sie keine Werbe- oder Analyse-Cookies und senden nur cookielose, aggregierte Signale.
      </p>

      <h2>3. Eingesetzte Cookies</h2>

      <h3>3.1 Technisch notwendig (immer aktiv)</h3>
      <p>Diese Cookies sind für den Betrieb der Website erforderlich und können nicht abgeschaltet werden. Sie bedürfen nach § 25 Abs. 2 Nr. 2 TDDDG keiner Einwilligung.</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Anbieter</th>
            <th>Zweck</th>
            <th>Laufzeit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>vortex-de-consent</td>
            <td>{company.tradingName} (Local Storage)</td>
            <td>Speichert deine Cookie-Auswahl, damit wir nicht auf jeder Seite erneut fragen</td>
            <td>12 Monate</td>
          </tr>
          <tr>
            <td>__cf_bm, _vercel_*</td>
            <td>Vercel / Hosting</td>
            <td>Sicherheit, Bot-Schutz und Lastverteilung</td>
            <td>Sitzung bis 30 Minuten</td>
          </tr>
          <tr>
            <td>Checkout- und Zahlungs-Cookies</td>
            <td>Unser Checkout- und Zahlungsanbieter</td>
            <td>Warenkorb halten, Zahlung abschließen, 3-D-Secure-Betrugsprüfung</td>
            <td>Sitzung bis 1 Jahr</td>
          </tr>
        </tbody>
      </table>

      <h3>3.2 Statistik (mit deiner Einwilligung)</h3>
      <p>Hilft uns zu verstehen, wie Besucher die Website nutzen, damit wir sie verbessern können. Die Daten werden aggregiert und identifizieren dich nicht persönlich.</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Anbieter</th>
            <th>Zweck</th>
            <th>Laufzeit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_ga</td>
            <td>Google Analytics</td>
            <td>Unterscheidet Besucher anhand einer zufälligen Kennung</td>
            <td>2 Jahre</td>
          </tr>
          <tr>
            <td>_ga_&lt;container-id&gt;</td>
            <td>Google Analytics</td>
            <td>Hält den Sitzungsstatus</td>
            <td>2 Jahre</td>
          </tr>
          <tr>
            <td>_gid</td>
            <td>Google Analytics</td>
            <td>Unterscheidet Besucher</td>
            <td>24 Stunden</td>
          </tr>
        </tbody>
      </table>

      <h3>3.3 Marketing (mit deiner Einwilligung)</h3>
      <p>Wird genutzt, um zu messen, ob unsere Google-Anzeigen zu einem Kauf geführt haben, und um dir Vortex-Anzeigen auf Google und Partnerseiten zu zeigen (Remarketing).</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Anbieter</th>
            <th>Zweck</th>
            <th>Laufzeit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_gcl_au</td>
            <td>Google Ads</td>
            <td>Conversion-Messung (welche Anzeige zu einem Kauf geführt hat)</td>
            <td>90 Tage</td>
          </tr>
          <tr>
            <td>_gcl_aw, _gcl_gb</td>
            <td>Google Ads</td>
            <td>Speichert die Klick-Kennung einer Google-Anzeige</td>
            <td>90 Tage</td>
          </tr>
          <tr>
            <td>IDE, test_cookie</td>
            <td>Google (doubleclick.net)</td>
            <td>Remarketing und Begrenzung der Anzeigenhäufigkeit</td>
            <td>13 Monate / 15 Minuten</td>
          </tr>
          <tr>
            <td>NID, 1P_JAR</td>
            <td>Google</td>
            <td>Personalisierung von Anzeigen in Google-Diensten</td>
            <td>6 Monate / 1 Monat</td>
          </tr>
        </tbody>
      </table>
      <p>
        Googles eigene Informationen zu diesen Cookies:{" "}
        <a href="https://policies.google.com/technologies/cookies?hl=de" rel="noopener noreferrer" target="_blank">policies.google.com/technologies/cookies</a>. Die Personalisierung von Google-Anzeigen verwaltest du unter{" "}
        <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">adssettings.google.com</a>.
      </p>

      <h2>4. Cookies im Browser verwalten</h2>
      <p>
        Neben unserem Banner kannst du Cookies auch in den Einstellungen deines Browsers blockieren oder löschen. Das Blockieren technisch notwendiger Cookies kann dazu führen, dass der Checkout nicht mehr funktioniert. Anleitungen:{" "}
        <a href="https://support.google.com/chrome/answer/95647?hl=de" rel="noopener noreferrer" target="_blank">Chrome</a>,{" "}
        <a href="https://support.mozilla.org/de/kb/verbesserter-schutz-aktivitatenverfolgung-desktop" rel="noopener noreferrer" target="_blank">Firefox</a>,{" "}
        <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" rel="noopener noreferrer" target="_blank">Safari</a>,{" "}
        <a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-abed-3e6c-3bdf-2f5f4d8b6dda" rel="noopener noreferrer" target="_blank">Edge</a>.
      </p>

      <h2>5. Änderungen</h2>
      <p>
        Wir überprüfen diese Liste regelmäßig und aktualisieren sie, wenn wir einen Dienst hinzufügen oder entfernen. Das Datum oben zeigt die aktuelle Version. Wie wir die über Cookies erhobenen Daten verwenden, erfährst du in unserer <Link href="/datenschutz">Datenschutzerklärung</Link>.
      </p>

      <h2>6. Kontakt</h2>
      <p>
        Fragen zu Cookies: <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </PolicyPage>
  );
}
