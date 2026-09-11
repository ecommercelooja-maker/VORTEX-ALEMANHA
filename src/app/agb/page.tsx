import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "AGB – Vortex Deutschland",
  description: "Allgemeine Geschäftsbedingungen für Bestellungen bei Vortex Deutschland, einschließlich Kundeninformationen nach § 312d BGB und Art. 246a EGBGB.",
  alternates: { canonical: "/agb" },
};

export default function AGB() {
  return (
    <PolicyPage
      title="Allgemeine Geschäftsbedingungen (AGB)"
      intro={`Diese AGB gelten für alle Bestellungen, die Verbraucher über ${company.website} bei der ${company.legalName}, handelnd als ${company.tradingName}, aufgeben. Bitte lies sie vor der Bestellung. Deine gesetzlichen Rechte als Verbraucher, insbesondere die Gewährleistungsrechte nach §§ 434 ff. BGB und das Widerrufsrecht nach §§ 312g, 355 BGB, bleiben von diesen AGB unberührt.`}
    >
      <h2>§ 1 Anbieter und Geltungsbereich</h2>
      <p>
        Vertragspartner ist die {company.legalName}, {company.address}, eingetragen beim {company.registerCourt} unter {company.registerNumber}, vertreten durch {company.managingDirector}. USt-IdNr.: {company.vatId}. Du erreichst uns unter <a href={`mailto:${company.email}`}>{company.email}</a> oder {company.phone} ({company.serviceHours}). Diese AGB gelten in der zum Zeitpunkt der Bestellung gültigen Fassung. Abweichende Bedingungen des Kunden erkennen wir nicht an.
      </p>

      <h2>§ 2 Kundenkreis</h2>
      <p>
        Bestellen dürfen nur unbeschränkt geschäftsfähige Personen ab 18 Jahren. Unser Angebot richtet sich an Verbraucher im Sinne des § 13 BGB; Unternehmer (§ 14 BGB) bitten wir, uns für gesonderte Konditionen zu kontaktieren. Mit der Bestellung bestätigst du, dass deine Angaben richtig sind und du zur Nutzung der gewählten Zahlungsart berechtigt bist.
      </p>

      <h2>§ 3 Vertragsschluss</h2>
      <ol>
        <li>Die Darstellung der Produkte im Online-Shop ist kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Bestellung.</li>
        <li>Durch Anklicken des Buttons „Zahlungspflichtig bestellen" im letzten Schritt des Bestellvorgangs gibst du ein verbindliches Angebot zum Kauf der im Warenkorb befindlichen Waren ab. Vor dem Absenden kannst du deine Eingaben jederzeit über die üblichen Tastatur- und Mausfunktionen korrigieren.</li>
        <li>Nach Eingang der Bestellung senden wir dir eine automatische Eingangsbestätigung per E-Mail; diese stellt noch keine Annahme dar. Der Kaufvertrag kommt zustande, wenn wir deine Bestellung durch eine gesonderte Auftragsbestätigung oder durch Versand der Ware (Versandbestätigung) annehmen, spätestens jedoch innerhalb von 5 Tagen. Nehmen wir nicht an — z. B. wegen fehlender Verfügbarkeit, eines Preisfehlers oder eines Betrugsverdachts — erstatten wir bereits geleistete Zahlungen unverzüglich.</li>
        <li>Der Vertragstext (Bestelldaten und AGB) wird von uns gespeichert und dir mit der Bestellbestätigung per E-Mail zugesandt. Du kannst die AGB jederzeit hier abrufen und speichern. Vertragssprache ist Deutsch.</li>
      </ol>

      <h2>§ 4 Produkte und wichtiger Hinweis zur Straßenzulassung</h2>
      <p>
        Abbildungen dienen der Veranschaulichung; Farben können je nach Bildschirm leicht abweichen. Angaben wie Reichweite, Höchstgeschwindigkeit und Leistung sind Maximalwerte unter Testbedingungen (75 kg Fahrer, ebene Strecke, 20&nbsp;°C, Eco-Modus für die Reichweite) und variieren mit Fahrergewicht, Gelände, Temperatur, Reifendruck und Fahrweise.
      </p>
      <p>
        <b>Wichtiger rechtlicher Hinweis:</b> Der VORTEX Z10 besitzt <b>keine Allgemeine Betriebserlaubnis (ABE)</b> nach der Elektrokleinstfahrzeuge-Verordnung (eKFV). Seine Höchstgeschwindigkeit und Motorleistung überschreiten die für Elektrokleinstfahrzeuge zulässigen Werte (max. 20 km/h). Er darf daher in Deutschland <b>nicht im öffentlichen Straßenverkehr</b> (Straßen, Radwege, Gehwege, öffentliche Plätze) genutzt werden, sondern ausschließlich auf Privatgelände mit Zustimmung des Eigentümers. Die Nutzung im öffentlichen Verkehrsraum kann als Fahren ohne Fahrerlaubnis, ohne Versicherungsschutz und ohne Betriebserlaubnis straf- und bußgeldbewehrt sein. Der Kunde ist für die Einhaltung der jeweils geltenden Vorschriften am Nutzungsort selbst verantwortlich. Wir empfehlen, stets Helm und Schutzausrüstung zu tragen.
      </p>

      <h2>§ 5 Preise und Zahlung</h2>
      <ul>
        <li>Alle Preise sind Endpreise in Euro und enthalten die gesetzliche Umsatzsteuer (derzeit 19 %). Die Lieferung innerhalb Deutschlands ist versandkostenfrei (siehe <Link href="/versand">Versand &amp; Lieferung</Link>).</li>
        <li>Bei Preisermäßigungen geben wir gemäß § 11 PAngV den niedrigsten Gesamtpreis an, den wir innerhalb der letzten 30 Tage vor der Ermäßigung verlangt haben. Aktionspreise gelten nur für den angegebenen Zeitraum bzw. solange der Vorrat reicht.</li>
        <li>Stellen wir vor Versand einen offensichtlichen Preisfehler fest, informieren wir dich und bieten dir an, zum korrekten Preis zu kaufen oder kostenfrei zu stornieren.</li>
        <li>Die Zahlung ist mit Vertragsschluss fällig und erfolgt über die im Checkout angezeigten Karten- und Wallet-Zahlungsarten. Die Abwicklung übernimmt ein PCI-DSS-konformer Zahlungsdienstleister; wir speichern keine Kartendaten.</li>
      </ul>

      <h2>§ 6 Lieferung, Gefahrübergang und Eigentumsvorbehalt</h2>
      <p>
        Lieferzeiten und -gebiete sind unter <Link href="/versand">Versand &amp; Lieferung</Link> beschrieben. Die Gefahr des zufälligen Untergangs und der zufälligen Verschlechterung der Ware geht bei Verbrauchern mit Übergabe der Ware an dich (oder eine von dir benannte Person) über. Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum. Ist niemand zur Annahme anwesend, hinterlässt der Paketdienst eine Benachrichtigung; wird eine Sendung nach angemessenen Zustellversuchen als unzustellbar an uns zurückgesandt, können wir die Kosten einer erneuten Zustellung berechnen, sofern du die fehlgeschlagene Zustellung zu vertreten hast.
      </p>

      <h2>§ 7 Widerrufsrecht</h2>
      <p>
        Als Verbraucher hast du das Recht, den Vertrag binnen 14 Tagen ohne Angabe von Gründen zu widerrufen. Die vollständige Widerrufsbelehrung und das Muster-Widerrufsformular findest du unter <Link href="/widerrufsrecht">Widerrufsrecht &amp; Rückgabe</Link>.
      </p>

      <h2>§ 8 60-Tage-Geld-zurück-Garantie</h2>
      <p>
        Zusätzlich zu deinem gesetzlichen Widerrufsrecht gewähren wir freiwillig eine 60-Tage-Geld-zurück-Garantie: Bist du nicht zufrieden, kannst du das Produkt innerhalb von 60 Tagen nach Lieferung zu den unter <Link href="/widerrufsrecht">Widerrufsrecht &amp; Rückgabe</Link> genannten Bedingungen zurückgeben und erhältst den Kaufpreis erstattet. Deine gesetzlichen Rechte werden dadurch nicht eingeschränkt.
      </p>

      <h2>§ 9 Gewährleistung (gesetzliche Mängelrechte)</h2>
      <p>Es gelten die gesetzlichen Mängelhaftungsrechte (§§ 434 ff. BGB):</p>
      <ul>
        <li>Die Gewährleistungsfrist beträgt 2 Jahre ab Lieferung der Ware.</li>
        <li>Zeigt sich innerhalb von 12 Monaten nach Lieferung ein Mangel, wird vermutet, dass die Ware bereits bei Lieferung mangelhaft war (§ 477 BGB).</li>
        <li>Bei einem Mangel kannst du zunächst Nacherfüllung (Reparatur oder Ersatzlieferung) verlangen. Schlägt die Nacherfüllung fehl, kannst du den Kaufpreis mindern oder vom Vertrag zurücktreten sowie ggf. Schadensersatz verlangen.</li>
        <li>Für digitale Elemente des Produkts (App, Firmware) stellen wir die für die Vertragsmäßigkeit erforderlichen Aktualisierungen für die Dauer bereit, die du nach Art und Zweck der Sache erwarten kannst (§ 475b BGB).</li>
      </ul>
      <p>Diese Rechte bestehen unabhängig von der Garantie nach § 10 und werden durch sie nicht eingeschränkt.</p>

      <h2>§ 10 Garantie (3 Jahre)</h2>
      <p>
        Wir gewähren als Garantiegeber ({company.legalName}, {company.address}) eine Händlergarantie von 3 Jahren ab Lieferung auf Rahmen, Motoren, Controller und Display des VORTEX Z10 sowie von 12 Monaten auf Akku und Ladegerät, jeweils gegen Herstellungsfehler. Die Garantie gilt in Deutschland. Nicht erfasst sind normaler Verschleiß (Reifen, Bremsbeläge, Griffe), Schäden durch Unfälle, unsachgemäße Nutzung, Eintauchen in Wasser über die IPX6-Klassifizierung hinaus, nicht autorisierte Umbauten oder Reparaturen sowie rechtswidrige Nutzung im öffentlichen Straßenverkehr. Zur Geltendmachung kontaktiere uns mit Bestellnummer, Beschreibung und Fotos oder Video des Problems. Wir reparieren, ersetzen oder — falls beides nicht möglich ist — erstatten. Die Garantie gilt zusätzlich zu den gesetzlichen Mängelrechten nach § 9, die durch die Garantie nicht eingeschränkt werden und unentgeltlich bestehen (§ 479 BGB).
      </p>

      <h2>§ 11 Bewertungen und Nutzerinhalte</h2>
      <p>
        Reichst du eine Bewertung oder ein Foto ein, räumst du uns ein einfaches, unentgeltliches Nutzungsrecht zur Veröffentlichung auf unserer Website und in unserem Marketing ein. Du bestätigst, dass es sich um deine eigene, ehrliche Meinung handelt. Wir können Inhalte entfernen, die beleidigend, rechtswidrig oder nicht produktbezogen sind. Wir zahlen keine Vergütung und gewähren keine Vorteile für Bewertungen und verändern deren Inhalt nicht. Bewertungen werden nur von Kunden veröffentlicht, deren Kauf wir verifiziert haben (§ 5b Abs. 3 UWG).
      </p>

      <h2>§ 12 Haftung</h2>
      <p>
        Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, bei Vorsatz und grober Fahrlässigkeit, bei arglistigem Verschweigen eines Mangels, bei Übernahme einer Garantie sowie nach dem Produkthaftungsgesetz. Bei einfach fahrlässiger Verletzung wesentlicher Vertragspflichten (Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung du regelmäßig vertrauen darfst) ist unsere Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt. Im Übrigen ist die Haftung für einfache Fahrlässigkeit ausgeschlossen.
      </p>

      <h2>§ 13 Höhere Gewalt</h2>
      <p>
        Für Verzögerungen oder Ausfälle, die auf Ereignissen außerhalb unserer Kontrolle beruhen (z. B. Unwetter, Streiks, Ausfälle von Transportdienstleistern oder Lieferengpässe), sind wir nicht verantwortlich. Wir informieren dich so schnell wie möglich; bei erheblicher Verzögerung kannst du vom Vertrag zurücktreten und erhältst alle Zahlungen zurück.
      </p>

      <h2>§ 14 Geistiges Eigentum</h2>
      <p>
        Der Name VORTEX, das Logo, die Produktbilder und die Inhalte dieser Website stehen uns oder unseren Lizenzgebern zu und sind urheber- und markenrechtlich geschützt. Eine Nutzung ohne unsere schriftliche Zustimmung ist nicht gestattet.
      </p>

      <h2>§ 15 Beschwerden, Streitbeilegung, anwendbares Recht</h2>
      <p>
        Bei Beschwerden wende dich bitte an <a href={`mailto:${company.email}`}>{company.email}</a>; wir bemühen uns um eine Lösung innerhalb von 14 Tagen. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG). Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG). Bist du Verbraucher mit gewöhnlichem Aufenthalt in einem anderen Staat, bleiben zwingende Verbraucherschutzvorschriften dieses Staates unberührt. Gerichtsstand ist, soweit gesetzlich zulässig, unser Sitz; für Verbraucher gelten die gesetzlichen Gerichtsstände.
      </p>

      <h2>§ 16 Schlussbestimmungen</h2>
      <p>
        Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Wir können diese AGB ändern; für eine Bestellung gilt die bei Bestellung gültige Fassung. Diese AGB und die verlinkten Rechtstexte bilden die vollständige Vereinbarung für deine Bestellung.
      </p>
    </PolicyPage>
  );
}
