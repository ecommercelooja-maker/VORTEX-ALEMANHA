import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Widerrufsrecht & Rückgabe – Vortex Deutschland",
  description: "Widerrufsbelehrung, Muster-Widerrufsformular, 60-Tage-Geld-zurück-Garantie, Gewährleistung und Ablauf von Rücksendungen und Erstattungen.",
  alternates: { canonical: "/widerrufsrecht" },
};

export default function Widerrufsrecht() {
  return (
    <PolicyPage
      title="Widerrufsrecht & Rückgabe"
      intro="Wir möchten, dass du mit deinem VORTEX rundum zufrieden bist. Diese Seite enthält die gesetzliche Widerrufsbelehrung mit Muster-Widerrufsformular, unsere freiwillige 60-Tage-Geld-zurück-Garantie, deine Rechte bei Mängeln sowie den Ablauf von Rücksendungen und Erstattungen."
    >
      <h2>Überblick</h2>
      <table>
        <thead>
          <tr>
            <th>Situation</th>
            <th>Frist</th>
            <th>Was du erhältst</th>
            <th>Wer trägt die Rücksendekosten</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Widerruf ohne Angabe von Gründen (gesetzliches Widerrufsrecht)</td>
            <td>14 Tage ab Erhalt der Ware</td>
            <td>Volle Erstattung inkl. Standardlieferkosten</td>
            <td>Du (auf Wunsch organisieren wir die Abholung, Kosten werden verrechnet)</td>
          </tr>
          <tr>
            <td>Nicht zufrieden (unsere Garantie)</td>
            <td>60 Tage ab Lieferung</td>
            <td>Volle Erstattung des Kaufpreises</td>
            <td>Du (auf Wunsch organisieren wir die Abholung, Kosten werden verrechnet)</td>
          </tr>
          <tr>
            <td>Mangelhaft, beschädigt oder nicht wie beschrieben</td>
            <td>2 Jahre Gewährleistung; Beweislastumkehr in den ersten 12 Monaten</td>
            <td>Reparatur, Ersatz oder Erstattung</td>
            <td>Wir — kostenlose Abholung</td>
          </tr>
          <tr>
            <td>Falscher Artikel geliefert</td>
            <td>Bitte innerhalb von 14 Tagen melden</td>
            <td>Richtiger Artikel oder volle Erstattung</td>
            <td>Wir — kostenlose Abholung</td>
          </tr>
        </tbody>
      </table>

      <h2>1. Widerrufsbelehrung</h2>
      <h3>Widerrufsrecht</h3>
      <p>
        Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem du oder ein von dir benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen hast bzw. hat.
      </p>
      <p>
        Um dein Widerrufsrecht auszuüben, musst du uns ({company.legalName}, {company.address}, E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>, Telefon: {company.phone}) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
      </p>
      <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.</p>

      <h3>Folgen des Widerrufs</h3>
      <p>
        Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass du eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt hast), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.
      </p>
      <p>
        Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis du den Nachweis erbracht hast, dass du die Waren zurückgesandt hast, je nachdem, welches der frühere Zeitpunkt ist.
      </p>
      <p>
        Du hast die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem du uns über den Widerruf dieses Vertrags unterrichtest, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn du die Waren vor Ablauf der Frist von vierzehn Tagen absendest. Du trägst die unmittelbaren Kosten der Rücksendung der Waren. Da der VORTEX Z10 aufgrund seiner Beschaffigkeit nicht normal mit der Post zurückgesandt werden kann, betragen die Kosten der Rücksendung per Spedition schätzungsweise höchstens [Abholgebühr] €.
      </p>
      <p>
        Du musst für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
      </p>

      <h3>Muster-Widerrufsformular</h3>
      <p>(Wenn du den Vertrag widerrufen willst, dann fülle bitte dieses Formular aus und sende es zurück.)</p>
      <pre>
        {`An: ${company.legalName}
${company.address}
E-Mail: ${company.email}

Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag
über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*):
____________________________________________
Bestellt am (*) / erhalten am (*): ____________
Bestellnummer: ____________
Name des/der Verbraucher(s): ____________
Anschrift des/der Verbraucher(s): ____________
Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): ____________
Datum: ____________

(*) Unzutreffendes streichen.`}
      </pre>

      <h2>2. Unsere 60-Tage-Geld-zurück-Garantie</h2>
      <p>Ist die Widerrufsfrist abgelaufen, du aber noch innerhalb von 60 Tagen nach Lieferung und nicht zufrieden, kannst du das Produkt gegen Erstattung des gezahlten Kaufpreises zurückgeben, sofern:</p>
      <ul>
        <li>der Scooter vollständig ist (Ladegerät, Werkzeugset, Anleitung, NFC-Schlüsselanhänger) und in der Originalverpackung zurückgesandt wird;</li>
        <li>er keine Schäden über leichte Gebrauchsspuren hinaus aufweist und nicht verändert wurde;</li>
        <li>du uns vorher kontaktierst, damit wir dir eine Rücksendenummer und Anweisungen geben können.</li>
      </ul>
      <p>Die Rücksendekosten im Rahmen der Garantie trägst du (oder wir organisieren die Abholung und verrechnen die Gebühr). Die Erstattung erfolgt innerhalb von 14 Tagen nach Eingang und Prüfung des Produkts. Diese freiwillige Garantie schränkt deine gesetzlichen Rechte nicht ein.</p>

      <h2>3. Mangelhaft, beschädigt oder nicht wie beschrieben (gesetzliche Gewährleistung)</h2>
      <ul>
        <li><b>Transportschaden:</b> Bitte fotografiere Karton und Produkt vor der Nutzung und melde dich innerhalb von 48 Stunden, damit wir den Schaden beim Transportdienstleister geltend machen können. Wir senden Ersatz oder erstatten den vollen Betrag und holen den beschädigten Artikel kostenlos ab.</li>
        <li><b>Innerhalb von 12 Monaten:</b> Zeigt sich ein Mangel, wird vermutet, dass er bereits bei Lieferung vorlag (§ 477 BGB). Wir reparieren oder ersetzen; schlägt das fehl, kannst du mindern oder vom Vertrag zurücktreten.</li>
        <li><b>12 bis 24 Monate:</b> Die gesetzliche Gewährleistung gilt weiterhin; ggf. musst du darlegen, dass der Mangel bei Lieferung vorlag. Parallel gilt unsere 3-Jahres-Garantie (siehe <Link href="/agb">AGB § 10</Link>).</li>
        <li><b>Nach 24 Monaten:</b> Es gilt unsere 3-Jahres-Garantie auf Rahmen, Motoren, Controller und Display.</li>
      </ul>
      <p>Die Abholung mangelhafter Artikel übernehmen wir immer kostenlos. Fotos oder ein kurzes Video des Problems beschleunigen die Bearbeitung.</p>

      <h2>4. So funktioniert die Rücksendung</h2>
      <ol>
        <li>Schreibe an <a href={`mailto:${company.email}`}>{company.email}</a> mit deiner Bestellnummer, dem Grund und (falls zutreffend) Fotos.</li>
        <li>Wir antworten innerhalb von 2 Werktagen mit einer Rücksendenummer und der Rücksendeadresse oder einem Abholtermin.</li>
        <li>Verpacke den Scooter sicher — zusammengeklappt, Akku ausgeschaltet, Ladegerät und Zubehör beigelegt — und bringe die Rücksendenummer außen am Karton an. Lithium-Akkus dürfen nur über einen dafür zugelassenen Transportdienstleister versandt werden (Gefahrgut UN 3171); wir teilen dir mit, welchen Dienst du nutzen sollst.</li>
        <li>Bewahre deinen Einlieferungsbeleg oder die Abholquittung auf, bis die Erstattung erfolgt ist.</li>
      </ol>

      <h2>5. Erstattungen</h2>
      <ul>
        <li>Erstattungen erfolgen auf das ursprüngliche Zahlungsmittel. Kartenerstattungen sind in der Regel 3 bis 5 Werktage nach unserer Bearbeitung sichtbar; deine Bank kann länger brauchen.</li>
        <li>Wir erstatten innerhalb von 14 Tagen nach Rückerhalt der Ware oder nach deinem Nachweis der Rücksendung, je nachdem, was früher eintritt.</li>
        <li>Aktionsrabatte werden anteilig berücksichtigt; Gutschein- oder Geschenkbeträge werden als Gutschein erstattet.</li>
      </ul>

      <h2>6. Ausschlüsse</h2>
      <p>Das Widerrufsrecht besteht nicht bei Waren, die nach Kundenspezifikation angefertigt oder eindeutig auf persönliche Bedürfnisse zugeschnitten sind (§ 312g Abs. 2 Nr. 1 BGB). Die freiwillige 60-Tage-Garantie gilt nicht für Verbrauchsmaterial (Reifen, Bremsbeläge) nach dem Öffnen, es sei denn, es ist mangelhaft. Deine gesetzlichen Rechte bleiben in jedem Fall unberührt.</p>

      <h2>7. Kontakt</h2>
      <p>
        Kundenservice {company.tradingName} — <a href={`mailto:${company.email}`}>{company.email}</a> — {company.phone} — {company.serviceHours}.
      </p>
    </PolicyPage>
  );
}
