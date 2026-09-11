import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Vortex Deutschland",
  description: "Wie Vortex Deutschland personenbezogene Daten gemäß DSGVO, BDSG und TDDDG erhebt, verwendet und schützt.",
  alternates: { canonical: "/datenschutz" },
};

export default function Datenschutz() {
  return (
    <PolicyPage
      title="Datenschutzerklärung"
      intro={`Diese Datenschutzerklärung informiert dich darüber, wie die ${company.legalName}, handelnd als ${company.tradingName} („wir", „uns"), personenbezogene Daten erhebt, verwendet, weitergibt und schützt, wenn du ${company.website} besuchst, bei uns bestellst oder uns kontaktierst. Sie entspricht der Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz (BDSG) und dem Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG).`}
    >
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher im Sinne der DSGVO ist die {company.legalName}, {company.address}, vertreten durch {company.managingDirector}. E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>, Telefon: {company.phone}.
      </p>
      <p>
        Ein Datenschutzbeauftragter ist nicht benannt, da die gesetzlichen Voraussetzungen (§ 38 BDSG, Art. 37 DSGVO) nicht vorliegen. Alle Anfragen zum Datenschutz beantwortet unser Datenschutz-Kontakt unter der oben genannten E-Mail-Adresse.
      </p>

      <h2>2. Welche personenbezogenen Daten wir verarbeiten</h2>
      <p>Je nachdem, wie du mit uns interagierst, verarbeiten wir:</p>
      <ul>
        <li><b>Stamm- und Kontaktdaten</b> — Name, E-Mail-Adresse, Telefonnummer, Rechnungs- und Lieferadresse.</li>
        <li><b>Bestell- und Transaktionsdaten</b> — bestellte Produkte, Bestellnummer, gezahlter Preis, Lieferstatus, Rücksendungen und Erstattungen. Kartendaten gibst du direkt bei unserem Zahlungsdienstleister ein; wir sehen oder speichern deine vollständige Kartennummer nie.</li>
        <li><b>Kundenservice-Daten</b> — den Inhalt von E-Mails, Chats oder Telefonaten mit uns, einschließlich Fotos, die du uns für eine Garantie oder Rücksendung schickst.</li>
        <li><b>Technische und Nutzungsdaten</b> — IP-Adresse, Browsertyp und -version, Gerätetyp, Betriebssystem, besuchte Seiten, Verweildauer, verweisende Website, ungefährer Standort (Stadt/Land) aus der IP-Adresse sowie die in unserer <Link href="/cookie-richtlinie">Cookie-Richtlinie</Link> beschriebenen Cookie-Kennungen.</li>
        <li><b>Marketingdaten</b> — deine Newsletter-Anmeldung, deine Einwilligungen und wie du mit unseren E-Mails interagierst (Öffnungen und Klicks).</li>
        <li><b>Bewertungsdaten</b> — wenn du eine Produktbewertung hinterlässt: dein Name (oder der von dir gewählte Anzeigename), der Bewertungstext und hochgeladene Fotos.</li>
      </ul>
      <p>Wir verarbeiten wissentlich keine besonderen Kategorien personenbezogener Daten (z. B. Gesundheitsdaten) und keine Daten von Kindern (siehe Abschnitt 11).</p>

      <h2>3. Wie wir die Daten erheben</h2>
      <ul>
        <li>Direkt von dir, wenn du bestellst, den Newsletter abonnierst, eine Bewertung hinterlässt oder uns kontaktierst.</li>
        <li>Automatisch über Cookies und ähnliche Technologien beim Besuch der Website (siehe Cookie-Richtlinie).</li>
        <li>Von Dritten wie unserem Zahlungsdienstleister (Zahlungsbestätigung, Betrugsprüfung) und unseren Versandpartnern (Lieferstatus).</li>
      </ul>

      <h2>4. Zwecke und Rechtsgrundlagen</h2>
      <p>Nach der DSGVO brauchen wir für jede Verarbeitung eine Rechtsgrundlage. Wir stützen uns auf folgende:</p>
      <table>
        <thead>
          <tr>
            <th>Zweck</th>
            <th>Verwendete Daten</th>
            <th>Rechtsgrundlage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abwicklung und Lieferung deiner Bestellung, Zahlungsabwicklung, Rücksendungen und Erstattungen</td>
            <td>Stamm-, Kontakt-, Bestell- und Transaktionsdaten</td>
            <td>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</td>
          </tr>
          <tr>
            <td>Erbringung der 3-Jahres-Garantie und der 60-Tage-Geld-zurück-Garantie</td>
            <td>Stamm-, Kontakt-, Bestell- und Kundenservice-Daten</td>
            <td>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)</td>
          </tr>
          <tr>
            <td>Beantwortung von Anfragen und Beschwerden</td>
            <td>Stamm-, Kontakt- und Kundenservice-Daten</td>
            <td>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) — Betrieb unseres Geschäfts und guter Kundenservice</td>
          </tr>
          <tr>
            <td>Aufbewahrung von Buchhaltungs-, Steuer- und Verbraucherschutzunterlagen</td>
            <td>Bestell- und Transaktionsdaten</td>
            <td>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO) — z. B. § 147 AO, § 257 HGB</td>
          </tr>
          <tr>
            <td>Betrugsprävention und Sicherheit der Website</td>
            <td>Technische, Bestell- und Transaktionsdaten</td>
            <td>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) — Schutz unseres Unternehmens und unserer Kunden</td>
          </tr>
          <tr>
            <td>Versand unseres Newsletters und von Angeboten per E-Mail</td>
            <td>Kontakt- und Marketingdaten</td>
            <td>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO); für Bestandskunden ggf. § 7 Abs. 3 UWG mit Widerspruchsmöglichkeit in jeder E-Mail</td>
          </tr>
          <tr>
            <td>Reichweitenmessung (Google Analytics)</td>
            <td>Technische und Nutzungsdaten</td>
            <td>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG) — über das Cookie-Banner</td>
          </tr>
          <tr>
            <td>Messung unserer Werbung und Anzeige relevanter Anzeigen (Google Ads, Remarketing)</td>
            <td>Technische und Nutzungsdaten, gehashte E-Mail zur Conversion-Zuordnung</td>
            <td>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG) — über das Cookie-Banner</td>
          </tr>
          <tr>
            <td>Veröffentlichung von Produktbewertungen</td>
            <td>Bewertungsdaten</td>
            <td>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</td>
          </tr>
        </tbody>
      </table>
      <p>Soweit wir uns auf berechtigte Interessen stützen, haben wir diese gegen deine Rechte und Interessen abgewogen. Du kannst Einzelheiten dieser Abwägung bei uns anfragen.</p>

      <h2>5. Google-Dienste und Werbung</h2>
      <p>
        Wir nutzen Dienste der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland) und der Google LLC (USA). Diese setzen erst dann Cookies oder lesen Kennungen aus, wenn du über unser Cookie-Banner eingewilligt hast (wir nutzen den Google Consent Mode v2, sodass Google-Tags bis zu deiner Einwilligung nur in einem eingeschränkten, cookielosen Modus laufen).
      </p>
      <ul>
        <li>
          <b>Google Analytics 4</b> — erstellt Statistiken über Besuche (aufgerufene Seiten, Gerät, ungefährer Standort). IP-Adressen werden von Google Analytics 4 nicht protokolliert oder gespeichert; die Verarbeitung von EU-Daten erfolgt auf EU-Servern, bevor sie an Google übertragen werden. Die Daten werden in Google Analytics 14 Monate aufbewahrt. Du kannst die Erfassung auch mit dem{" "}
          <a href="https://tools.google.com/dlpage/gaoptout?hl=de" rel="noopener noreferrer" target="_blank">Browser-Add-on zur Deaktivierung von Google Analytics</a> verhindern.
        </li>
        <li>
          <b>Google Ads Conversion-Tracking und Remarketing</b> — zeigt uns, ob eine Anzeige zu einem Kauf geführt hat, und ermöglicht es, dir nach deinem Besuch Vortex-Anzeigen auf Google und Partnerseiten zu zeigen. Die Personalisierung von Werbung kannst du unter{" "}
          <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">adssettings.google.com</a> verwalten; wie Google Daten verwendet, erfährst du unter{" "}
          <a href="https://policies.google.com/technologies/partner-sites?hl=de" rel="noopener noreferrer" target="_blank">policies.google.com/technologies/partner-sites</a>.
        </li>
        <li>
          <b>Erweiterte Conversions</b> — sofern aktiviert, übermitteln wir Google eine gehashte (einweg-verschlüsselte) Version der im Checkout eingegebenen E-Mail-Adresse, damit Conversions genauer zugeordnet werden können. Google kann den Hash nicht zurückrechnen.
        </li>
      </ul>
      <p>
        Wir verkaufen und werben außerdem über Google Shopping. Für die von Google verarbeiteten Daten gilt die Datenschutzerklärung von Google:{" "}
        <a href="https://policies.google.com/privacy?hl=de" rel="noopener noreferrer" target="_blank">policies.google.com/privacy</a>.
      </p>

      <h2>6. Empfänger deiner Daten</h2>
      <p>Wir geben personenbezogene Daten nur weiter, soweit es erforderlich ist, und nur an Dienstleister, die vertraglich (Art. 28 DSGVO) zum Schutz der Daten verpflichtet sind:</p>
      <ul>
        <li><b>Zahlungsdienstleister</b> — zur Zahlungsabwicklung sowie für Betrugs- und 3-D-Secure-Prüfungen.</li>
        <li><b>Versandpartner und Paketdienste</b> — Name, Adresse, Telefon und E-Mail, damit sie deine Bestellung zustellen und Sendungsupdates senden können.</li>
        <li><b>Hosting- und IT-Dienstleister</b> — die Website wird von Vercel Inc. gehostet; E-Mail- und Kundenservice-Tools können von Drittanbietern bereitgestellt werden.</li>
        <li><b>E-Mail-Marketing-Plattform</b> — zum Versand unseres Newsletters, wenn du ihn abonniert hast.</li>
        <li><b>Google</b> — wie in Abschnitt 5 beschrieben.</li>
        <li><b>Berater</b> — Steuerberater, Rechtsanwälte und Versicherer, soweit erforderlich.</li>
        <li><b>Behörden</b> — Finanzamt, Gerichte, Aufsichtsbehörden oder Polizei, wenn das Gesetz es verlangt.</li>
      </ul>
      <p>Wir verkaufen deine personenbezogenen Daten nicht.</p>

      <h2>7. Datenübermittlung in Drittländer</h2>
      <p>
        Einige unserer Dienstleister (z. B. Google und Vercel) verarbeiten Daten in den USA oder anderen Ländern außerhalb des Europäischen Wirtschaftsraums. In diesen Fällen stellen wir eine geeignete Garantie sicher: einen Angemessenheitsbeschluss der Europäischen Kommission (insbesondere das EU-US Data Privacy Framework, dem Google LLC und Vercel Inc. zertifiziert angehören) oder die EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) mit ergänzenden Maßnahmen. Eine Kopie der jeweiligen Garantie kannst du bei uns anfordern.
      </p>

      <h2>8. Speicherdauer</h2>
      <table>
        <thead>
          <tr>
            <th>Daten</th>
            <th>Speicherdauer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bestell-, Rechnungs- und Zahlungsunterlagen</td>
            <td>8 bzw. 10 Jahre ab Ende des Kalenderjahres der Bestellung (§ 147 AO, § 257 HGB)</td>
          </tr>
          <tr>
            <td>Garantie- und Rücksendekorrespondenz</td>
            <td>Dauer der 3-Jahres-Garantie plus 12 Monate</td>
          </tr>
          <tr>
            <td>Kundenservice-E-Mails (ohne Bestellung)</td>
            <td>24 Monate nach dem letzten Kontakt</td>
          </tr>
          <tr>
            <td>Newsletter-Abonnement</td>
            <td>Bis zur Abmeldung, danach ein Sperrvermerk, damit wir dich nicht erneut anschreiben</td>
          </tr>
          <tr>
            <td>Nachweis der Cookie-Einwilligung</td>
            <td>12 Monate, danach fragen wir erneut</td>
          </tr>
          <tr>
            <td>Google-Analytics-Daten</td>
            <td>14 Monate</td>
          </tr>
          <tr>
            <td>Produktbewertungen</td>
            <td>Solange das Produkt verkauft wird oder bis du die Löschung deiner Bewertung verlangst</td>
          </tr>
        </tbody>
      </table>

      <h2>9. Deine Rechte</h2>
      <p>Nach der DSGVO hast du das Recht auf:</p>
      <ul>
        <li><b>Auskunft</b> (Art. 15) — eine Kopie der personenbezogenen Daten, die wir über dich gespeichert haben.</li>
        <li><b>Berichtigung</b> (Art. 16) — Korrektur unrichtiger oder unvollständiger Daten.</li>
        <li><b>Löschung</b> (Art. 17) — Löschung deiner Daten, wenn kein berechtigter Grund für die weitere Speicherung besteht.</li>
        <li><b>Einschränkung der Verarbeitung</b> (Art. 18) — in bestimmten Fällen die Verarbeitung „einfrieren" zu lassen.</li>
        <li><b>Datenübertragbarkeit</b> (Art. 20) — die von dir bereitgestellten Daten in einem maschinenlesbaren Format zu erhalten oder an einen anderen Anbieter übermitteln zu lassen.</li>
        <li><b>Widerspruch</b> (Art. 21) — gegen Verarbeitungen auf Grundlage berechtigter Interessen und jederzeit gegen Direktwerbung.</li>
        <li><b>Widerruf der Einwilligung</b> (Art. 7 Abs. 3) — jederzeit, wenn wir uns auf eine Einwilligung stützen (z. B. Cookies oder Newsletter), ohne dass die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung berührt wird.</li>
        <li><b>Keine automatisierte Entscheidung</b> (Art. 22) — wir treffen keine Entscheidungen mit rechtlicher oder ähnlich erheblicher Wirkung ausschließlich auf Basis automatisierter Verarbeitung.</li>
      </ul>
      <p>
        Zur Ausübung deiner Rechte schreibe an <a href={`mailto:${company.email}`}>{company.email}</a>. Wir antworten innerhalb eines Monats (bei komplexen Anfragen verlängerbar um zwei weitere Monate; in diesem Fall informieren wir dich). Die Auskunft ist kostenlos, es sei denn, ein Antrag ist offenkundig unbegründet oder exzessiv. Wir können dich bitten, zunächst deine Identität zu bestätigen.
      </p>

      <h2>10. Beschwerderecht bei einer Aufsichtsbehörde</h2>
      <p>
        Wir möchten die Gelegenheit haben, jedes Anliegen zu klären — bitte kontaktiere uns zuerst. Unabhängig davon hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO), insbesondere bei der für unseren Sitz zuständigen Landesdatenschutzbehörde. Eine Liste aller Aufsichtsbehörden findest du beim Bundesbeauftragten für den Datenschutz und die Informationsfreiheit:{" "}
        <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html" rel="noopener noreferrer" target="_blank">bfdi.bund.de</a>.
      </p>

      <h2>11. Kinder</h2>
      <p>
        Unsere Produkte und unsere Website richten sich an Erwachsene. Wir verarbeiten wissentlich keine personenbezogenen Daten von Personen unter 18 Jahren; Bestellungen dürfen nur von volljährigen Personen aufgegeben werden. Wenn du glaubst, dass ein Kind uns personenbezogene Daten übermittelt hat, kontaktiere uns und wir löschen sie.
      </p>

      <h2>12. Datensicherheit</h2>
      <p>
        Wir setzen angemessene technische und organisatorische Maßnahmen zum Schutz deiner Daten ein, darunter HTTPS-Verschlüsselung der gesamten Website, PCI-DSS-konforme Zahlungsabwicklung (wir speichern keine Kartennummern), Zugriffskontrollen und Vertraulichkeitsverpflichtungen der Mitarbeiter. Keine Übertragung über das Internet ist vollkommen sicher, daher können wir absolute Sicherheit nicht garantieren; Verletzungen des Schutzes personenbezogener Daten melden wir jedoch der Aufsichtsbehörde und, wo gesetzlich vorgeschrieben, auch dir (Art. 33, 34 DSGVO).
      </p>

      <h2>13. Newsletter und Werbung</h2>
      <p>
        Wir senden dir Werbe-E-Mails nur, wenn du dich angemeldet hast (Double-Opt-in), oder wenn du Bestandskunde bist und beim Kauf nicht widersprochen hast (§ 7 Abs. 3 UWG). Jede Werbe-E-Mail enthält einen Abmeldelink. Du kannst uns auch jederzeit per E-Mail bitten, den Versand einzustellen. Wir senden keine Werbung per SMS oder Post und geben deine Daten nie an andere Unternehmen für deren Werbung weiter.
      </p>

      <h2>14. Cookies</h2>
      <p>
        Einzelheiten zu jedem eingesetzten Cookie, zum Zweck und dazu, wie du deine Auswahl änderst, findest du in unserer <Link href="/cookie-richtlinie">Cookie-Richtlinie</Link>.
      </p>

      <h2>15. Links zu Dritten</h2>
      <p>
        Unsere Website kann auf Websites Dritter verlinken (z. B. unseren Zahlungsanbieter oder soziale Netzwerke). Für deren Datenschutzpraktiken sind wir nicht verantwortlich — bitte lies die dortigen Datenschutzhinweise.
      </p>

      <h2>16. Änderungen dieser Erklärung</h2>
      <p>
        Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Das Datum „Stand" oben zeigt die aktuelle Version. Bei wesentlichen Änderungen informieren wir Bestandskunden per E-Mail oder durch einen Hinweis auf der Website.
      </p>

      <h2>17. Kontakt</h2>
      <p>
        {company.legalName}, handelnd als {company.tradingName}
        <br />
        {company.address}
        <br />
        E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
        <br />
        Telefon: {company.phone} ({company.serviceHours})
      </p>
    </PolicyPage>
  );
}
