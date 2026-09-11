import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/PolicyPage";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Versand & Lieferung – Vortex Deutschland",
  description: "Liefergebiete, Kosten und Lieferzeiten für VORTEX-Bestellungen in Deutschland, Sendungsverfolgung und was bei Verspätung oder Transportschaden zu tun ist.",
  alternates: { canonical: "/versand" },
};

export default function Versand() {
  return (
    <PolicyPage title="Versand & Lieferung" intro="Alles darüber, wie und wann wir deinen VORTEX in Deutschland liefern.">
      <h2>1. Liefergebiete und Lieferzeiten</h2>
      <table>
        <thead>
          <tr>
            <th>Gebiet</th>
            <th>Kosten</th>
            <th>Bearbeitung</th>
            <th>Zustellung nach Versand</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Deutschland (Festland)</td>
            <td>Kostenlos — Expressversand mit Sendungsverfolgung</td>
            <td>2 bis 3 Werktage</td>
            <td>3 bis 4 Werktage</td>
          </tr>
          <tr>
            <td>Deutsche Inseln (z. B. Sylt, Rügen, Föhr, Norderney)</td>
            <td>Kostenlos — mit Sendungsverfolgung</td>
            <td>2 bis 3 Werktage</td>
            <td>5 bis 8 Werktage</td>
          </tr>
          <tr>
            <td>Außerhalb Deutschlands</td>
            <td colSpan={3}>Derzeit über diesen Shop nicht verfügbar</td>
          </tr>
        </tbody>
      </table>
      <p>
        Die übliche Gesamtzeit von der Bestellung bis zur Haustür beträgt für das deutsche Festland 6 bis 7 Tage, wie auf der Produktseite angegeben. Werktage sind Montag bis Freitag, ausgenommen bundeseinheitliche Feiertage. Bestellungen nach 14 Uhr oder am Wochenende werden am nächsten Werktag bearbeitet. Die Lieferfrist beginnt bei Zahlung per Vorkasse mit Zahlungseingang, sonst mit Vertragsschluss.
      </p>

      <h2>2. Sendungsverfolgung</h2>
      <p>
        Sobald deine Bestellung versandt ist, senden wir dir per E-Mail die Sendungsnummer und einen Link zur Website des Paketdienstes (z. B. DHL, DPD, GLS). Die meisten Dienste senden zusätzlich SMS- oder E-Mail-Updates und ermöglichen die Auswahl eines Ablageorts oder eines Wunschnachbarn.
      </p>

      <h2>3. Sperrgut-Lieferung</h2>
      <p>
        Der VORTEX Z10 wird in einem einzelnen Karton von ca. 125 × 30 × 55 cm mit rund 36 kg versandt. Die Zustellung erfolgt durch einen Zusteller bis zur Haustür (bei Mehrfamilienhäusern bis zur Gebäudeeingangstür). Bitte stelle sicher, dass eine Person ab 18 Jahren zur Annahme und Unterschrift anwesend ist. Der Zusteller trägt das Paket nicht die Treppe hinauf und nimmt keine Montage vor.
      </p>

      <h2>4. Verzögerungen</h2>
      <p>
        Können wir nicht innerhalb der angegebenen Zeit versenden, informieren wir dich und nennen einen neuen Termin. Beträgt die Verzögerung mehr als 30 Tage ab Bestellung oder passt der neue Termin nicht, kannst du vom Vertrag zurücktreten und erhältst alle Zahlungen zurück. Liefertermine sind Schätzungen; für Verzögerungen durch Ereignisse außerhalb unserer Kontrolle wie Unwetter oder Störungen beim Transportdienstleister sind wir nicht verantwortlich, helfen dir aber immer bei der Nachverfolgung.
      </p>

      <h2>5. Verpasste oder fehlgeschlagene Zustellung</h2>
      <p>
        Bist du nicht zu Hause, hinterlässt der Zusteller eine Benachrichtigungskarte oder Nachricht mit Optionen zur erneuten Zustellung oder Abholung. Sendungen, die nach den Zustellversuchen nicht abgeholt oder angenommen werden, gehen an uns zurück; wir kontaktieren dich zur Vereinbarung einer erneuten Zustellung und können die tatsächlichen Kosten der zweiten Zustellung berechnen, wenn du die erste fehlgeschlagene Zustellung zu vertreten hast.
      </p>

      <h2>6. Beschädigte oder fehlende Artikel</h2>
      <p>
        Bitte prüfe den Karton bei der Zustellung. Ist er sichtbar beschädigt, lass dir das vom Zusteller bestätigen oder verweigere die Annahme. Melde dich innerhalb von 48 Stunden mit Fotos der Verpackung und des Produkts; wir senden Ersatz oder erstatten und holen den beschädigten Artikel kostenlos ab. Siehe <Link href="/widerrufsrecht">Widerrufsrecht &amp; Rückgabe</Link>.
      </p>

      <h2>7. Adressänderungen</h2>
      <p>
        Die Lieferadresse können wir nur vor dem Versand ändern. Schreibe uns so schnell wie möglich unter Angabe deiner Bestellnummer. Nach dem Versand nutze bitte die Umleitungsoptionen des Paketdienstes, sofern verfügbar.
      </p>

      <h2>8. Kontakt</h2>
      <p>
        Fragen zur Lieferung: <a href={`mailto:${company.email}`}>{company.email}</a> oder {company.phone} ({company.serviceHours}).
      </p>
    </PolicyPage>
  );
}
