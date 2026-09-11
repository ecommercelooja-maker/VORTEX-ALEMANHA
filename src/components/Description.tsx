import Image from "next/image";
import type { ReactNode } from "react";
import { CHECKOUT_URL } from "@/data/product";

/*
 * Produktbeschreibung als HTML (die französische Originalseite nutzte Bilder mit eingebettetem Text).
 * Gleiche 11 Blöcke, gleiche Reihenfolge, auf Deutsch mit metrischen Einheiten (km/h, km).
 */

const IMG = (n: number) => `/produto/${String(n).padStart(2, "0")}.jpg`;

function Photo({ n, alt, className = "" }: { n: number; alt: string; className?: string }) {
  return (
    <div className={`relative aspect-square overflow-hidden rounded-2xl bg-white ${className}`}>
      <Image src={IMG(n)} alt={alt} fill sizes="(min-width: 896px) 448px, 100vw" className="object-cover" />
    </div>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return <li className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold uppercase leading-tight tracking-wide">{children}</li>;
}

function Stat({ big, small }: { big: string; small: string }) {
  return (
    <div className="text-center">
      <div className="font-heading text-2xl leading-none text-accent">{big}</div>
      <div className="mt-1 text-[11px] font-bold uppercase tracking-wide">{small}</div>
    </div>
  );
}

export default function Description() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-10" aria-label="Produktbeschreibung">
      {/* 1 — Exklusives Angebot */}
      <div className="overflow-hidden rounded-xl bg-[#0f1113] text-white">
        <div className="grid items-center gap-6 p-6 sm:grid-cols-[1fr_1.4fr] sm:p-10">
          <div className="font-heading text-6xl tracking-wide text-accent sm:text-7xl">VORTEX</div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/80">Exklusives Vortex-Angebot</div>
            <h2 className="font-heading mt-2 text-4xl leading-none sm:text-5xl">
              <span className="text-accent">10 % Rabatt</span> auf deine erste Bestellung
            </h2>
            <p className="mt-3 text-sm text-white/80">Bestelle heute und sichere dir einen exklusiven Neukunden-Rabatt.</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="rounded bg-white px-2 py-1 text-[#1a1f71]">VISA</span>
              <span className="rounded bg-white px-2 py-1 text-black">Mastercard</span>
              <span className="rounded bg-[#2e77bc] px-2 py-1">AMEX</span>
              <span className="rounded bg-white px-2 py-1 text-black">G Pay</span>
              <span className="text-white/80">🔒 100 % sichere Zahlung</span>
              <span className="ml-auto rounded-full bg-accent px-3 py-2 font-heading text-xl leading-none text-black">-10%</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-3 text-center text-xs font-semibold sm:text-sm">
          100 % sichere Zahlung • Kostenloser Versand in ganz Deutschland • 3 Jahre Garantie
          <div className="mt-1 text-[11px] font-normal text-white/50">Der Rabatt wird automatisch auf deine erste Bestellung angewendet.</div>
        </div>
      </div>

      {/* 2 — Hero */}
      <div className="overflow-hidden rounded-xl bg-[#0f1113] text-white">
        <div className="p-6 text-center sm:p-10">
          <div className="font-heading text-lg tracking-widest text-white/70">VORTEX Z10</div>
          <h2 className="font-heading mt-1 text-5xl leading-none sm:text-6xl">VORTEX Z10</h2>
          <div className="font-heading mt-2 text-5xl leading-none text-accent sm:text-7xl">BIS ZU 4.000 W</div>
          <div className="font-heading mt-2 text-2xl text-white/90 sm:text-3xl">BIS ZU 65 KM/H · DUAL-MOTOR AWD</div>
        </div>
        <Photo n={1} alt="VORTEX Z10 E-Scooter, Dreiviertelansicht von vorne" className="mx-auto max-w-lg rounded-none" />
        <div className="p-6 text-center sm:p-8">
          <p className="font-heading text-2xl sm:text-3xl">Der leistungsstarke Allrad-E-Scooter für jedes Gelände.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-10 gap-y-2 border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider text-white/80">
            <span>Kostenloser Versand in ganz Deutschland</span>
            <span>3 Jahre Garantie</span>
          </div>
        </div>
      </div>

      {/* 3 — Leistung */}
      <div className="overflow-hidden rounded-xl bg-[#0f1113] p-6 text-white sm:p-10">
        <h2 className="font-heading text-center text-4xl leading-none sm:text-5xl">
          <span className="text-accent">4.000 W</span> Spitzenleistung
        </h2>
        <Photo n={3} alt="VORTEX Z10 Seitenansicht mit beiden Radnabenmotoren" className="mt-6" />
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat big="2" small="Dual-Motor" />
          <Stat big="AWD" small="Allradantrieb" />
          <Stat big="2.000 W" small="Nennleistung" />
          <Stat big="40%" small="Max. Steigung" />
        </div>
        <p className="mt-6 text-center font-heading text-xl tracking-wide sm:text-2xl">Kraft, die dich weiter bringt.</p>
      </div>

      {/* 4 — Reichweite */}
      <div className="overflow-hidden rounded-xl bg-[#f3f6e8] p-6 text-black sm:p-10">
        <h2 className="font-heading text-center text-4xl leading-none sm:text-5xl">
          Bis zu <span className="text-accent-dark">120 km</span> Reichweite
        </h2>
        <p className="mt-2 text-center text-sm font-semibold">60 V · 25 Ah · 1.500 Wh</p>
        <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
          <Photo n={4} alt="VORTEX Z10 mit eingeklapptem Lenker" />
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center justify-between rounded-full bg-white px-4 py-3 shadow-sm">
              <span className="font-semibold uppercase">Eco</span>
              <span>
                bis zu <b className="text-accent-dark">120 km</b>
              </span>
            </li>
            <li className="flex items-center justify-between rounded-full bg-white px-4 py-3 shadow-sm">
              <span className="font-semibold uppercase">Normal</span>
              <span>
                bis zu <b className="text-accent-dark">90 km</b>
              </span>
            </li>
            <li className="flex items-center justify-between rounded-full bg-white px-4 py-3 shadow-sm">
              <span className="font-semibold uppercase">Sport</span>
              <span>
                <b className="text-accent-dark">60–70 km</b>
              </span>
            </li>
            <li className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-black/70">
              🔌 Ladezeit: 6 bis 7 Stunden · doppelter Ladeanschluss
            </li>
          </ul>
        </div>
        <p className="mt-6 text-center font-heading text-2xl sm:text-3xl">Mehr Strecke. Weniger Grenzen.</p>
      </div>

      {/* 5 — Gelände */}
      <div className="overflow-hidden rounded-xl bg-[#0f1113] p-6 text-white sm:p-10">
        <h2 className="font-heading text-4xl leading-none sm:text-5xl">
          Gebaut für <span className="text-accent">raues Gelände.</span>
        </h2>
        <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
          <Photo n={2} alt="VORTEX Z10 Frontansicht mit doppelter Federung" />
          <ul className="grid gap-2">
            <Callout>11&quot; Tubeless-Geländereifen</Callout>
            <Callout>Doppelte hydraulische Upside-down-Frontfederung</Callout>
            <Callout>Einstellbare hydraulische Hinterradfederung</Callout>
            <Callout>Breites Trittbrett im Longboard-Stil</Callout>
          </ul>
        </div>
        <p className="mt-6 text-center font-heading text-2xl tracking-wider sm:text-3xl">Grip • Stabilität • Komfort</p>
      </div>

      {/* 6 — Kontrolle */}
      <div className="overflow-hidden rounded-xl bg-[#0f1113] p-6 text-white sm:p-10">
        <h2 className="font-heading text-center text-4xl leading-none sm:text-5xl">Behalte die Kontrolle</h2>
        <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
          <ul className="grid gap-2 sm:order-1">
            <Callout>Hydraulische Scheibenbremsen vorne + hinten</Callout>
            <Callout>Smartes E-ABS</Callout>
            <Callout>Doppelte Frontscheinwerfer</Callout>
            <Callout>360°-LED-Beleuchtung</Callout>
            <Callout>Integrierte Blinker</Callout>
            <Callout>Rücklicht</Callout>
          </ul>
          <Photo n={7} alt="VORTEX Z10 Heckansicht mit leuchtendem Bremslicht" />
        </div>
      </div>

      {/* 7 — Vernetzt */}
      <div className="overflow-hidden rounded-xl bg-[#eef1f4] p-6 text-black sm:p-10">
        <h2 className="font-heading text-4xl leading-none sm:text-5xl">
          Mehr als ein Scooter.
          <br />
          Ein vernetztes System.
        </h2>
        <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
          <ul className="grid grid-cols-1 gap-2 text-sm font-bold uppercase tracking-wide">
            {[
              "4\" Farb-LCD-Display",
              "Bluetooth",
              "Smartphone-App",
              "Integriertes GPS",
              "Fernverriegelung",
              "Echtzeit-Telemetrie",
              "NFC-Entriegelung",
              "Integrierte Alarmanlage",
              "Diebstahl-Ortung",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-dark text-white">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <Photo n={6} alt="VORTEX Z10 von oben, Display und NFC-Schlüsselanhänger" />
        </div>
      </div>

      {/* 8 — Freiheit */}
      <div className="overflow-hidden rounded-xl bg-[#0f1113] text-white">
        <div className="p-6 text-center sm:p-10">
          <h2 className="font-heading text-4xl leading-none sm:text-5xl">Dein Weg. Deine Freiheit.</h2>
          <p className="font-heading mt-2 text-2xl tracking-widest text-white/80">Stadt • Straße • Offroad</p>
        </div>
        <Photo n={5} alt="VORTEX Z10 zusammengeklappt, Seitenansicht" className="mx-auto max-w-lg rounded-none" />
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
          <div className="flex gap-3">
            {[
              ["65 km/h", "Höchstgeschw."],
              ["120 km", "Reichweite"],
              ["AWD", "Dual-Motor"],
            ].map(([b, s]) => (
              <div key={b} className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white text-black">
                <span className="font-heading text-xl leading-none">{b}</span>
                <span className="text-[10px] font-semibold uppercase">{s}</span>
              </div>
            ))}
          </div>
          <span className="rounded bg-white px-3 py-2 text-sm font-bold text-black">
            3 Jahre <b>Garantie</b>
          </span>
        </div>
      </div>

      {/* 9 — Gebaut für Leistung */}
      <div className="overflow-hidden rounded-xl border border-black/10 bg-white p-6 text-black sm:p-10">
        <h2 className="font-heading text-center text-4xl leading-none sm:text-5xl">Gebaut für Leistung</h2>
        <div className="mt-6 grid items-center gap-6 sm:grid-cols-2">
          <Photo n={1} alt="VORTEX Z10 Produktfoto" />
          <ul className="grid gap-2 text-sm font-bold uppercase tracking-wide">
            {[
              "Hydraulische Federung",
              "IPX6-Schutz",
              "11\" Tubeless-Offroad-Reifen",
              "Breites Trittbrett im Longboard-Stil",
              "Rahmen aus Aluminiumlegierung in Luftfahrtqualität",
            ].map((f) => (
              <li key={f} className="rounded-lg bg-surface px-3 py-2">
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-6 max-w-md rounded-xl border-2 border-accent p-4 text-center text-sm font-bold uppercase tracking-wide">
          Max. Zuladung: 150 kg
          <br />
          Gewicht: ca. 32 kg
          <br />
          Hält starkem Regen stand
        </div>
        <p className="mx-auto mt-4 max-w-md text-center text-[11px] leading-snug text-black/60">
          Hinweis: Der VORTEX Z10 besitzt keine Allgemeine Betriebserlaubnis (ABE) nach der eKFV und darf in Deutschland nicht im öffentlichen Straßenverkehr genutzt werden. Nutzung nur auf Privatgelände mit Zustimmung des Eigentümers.
        </p>
      </div>

      {/* 10 — Lieferumfang */}
      <div className="overflow-hidden rounded-xl border border-black/10 bg-white p-6 text-black sm:p-10">
        <h2 className="font-heading text-4xl leading-none sm:text-5xl">Alles, was du zum Loslegen brauchst.</h2>
        <ul className="mt-4 grid gap-1 text-base font-bold uppercase tracking-wide">
          <li>■ 1 × VORTEX Z10</li>
          <li>■ 1 × Ladegerät (EU-Stecker)</li>
          <li>■ 1 × Bedienungsanleitung</li>
          <li>■ 1 × Basis-Werkzeugset</li>
        </ul>
        <Photo n={4} alt="VORTEX Z10 zusammengeklappt zur Aufbewahrung" className="mt-6" />
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-full bg-accent px-5 py-3 text-center text-sm font-bold uppercase text-black">🚚 Kostenloser Versand in Deutschland</div>
          <div className="rounded-full bg-accent px-5 py-3 text-center text-sm font-bold uppercase text-black">🛡 3 Jahre Garantie</div>
        </div>
      </div>

      {/* 11 — Zusammenfassung */}
      <div className="overflow-hidden rounded-xl bg-[#0f1113] p-6 text-white sm:p-10">
        <h2 className="font-heading text-center text-5xl leading-none sm:text-6xl">
          VORTEX <span className="text-accent">Z10</span>
        </h2>
        <p className="font-heading mt-2 text-center text-2xl text-accent sm:text-3xl">Hohe Leistung. Jedes Gelände. Keine Kompromisse.</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_1.2fr_1fr]">
          <ul className="flex flex-col gap-3 text-sm font-bold uppercase">
            <li>⚡ 4.000 W max.</li>
            <li>⏱ 65 km/h</li>
            <li>📍 120 km max.</li>
            <li>🔁 AWD</li>
          </ul>
          <Photo n={3} alt="VORTEX Z10 Seitenansicht" />
          <ul className="flex flex-col gap-3 text-sm font-bold uppercase">
            <li>🔋 60 V • 25 Ah</li>
            <li>🛞 11&quot; Offroad</li>
            <li>🛑 E-ABS</li>
            <li>📡 GPS + App</li>
            <li>💧 IPX6</li>
          </ul>
        </div>
        <p className="mt-8 text-center font-heading text-2xl sm:text-3xl">Steig ein in eine neue Generation der Elektromobilität.</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs font-bold uppercase tracking-wider">
          <span>
            Kostenloser Versand
            <br />
            in ganz Deutschland
          </span>
          <a href={CHECKOUT_URL} className="rounded-lg bg-accent px-6 py-3 font-heading text-2xl leading-none text-black">
            Entdecke den Vortex Z10
          </a>
          <span>
            3 Jahre <span className="text-accent">Garantie</span>
          </span>
        </div>
      </div>
    </section>
  );
}
