import Image from "next/image";
import Link from "next/link";
import { product } from "@/data/product";

/*
 * Lange Produktbeschreibung: dieselben 11 Grafiken wie im französischen Shop,
 * auf Deutsch neu beschriftet (public/desc/01-11.jpg).
 */
export default function Description() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-10" aria-label="Produktbeschreibung">
      {product.descriptionImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${product.title} - Detail ${i + 1}`}
          width={1024}
          height={1024}
          sizes="(min-width: 896px) 896px, 100vw"
          className="h-auto w-full rounded-xl"
        />
      ))}
      {/* Vorvertragliche Information: eKFV — der Z10 hat keine ABE und darf nur auf Privatgelände gefahren werden */}
      <p className="mt-2 text-center text-[11px] leading-snug text-black/60">
        Hinweis: Der VORTEX Z10 besitzt keine Allgemeine Betriebserlaubnis nach der Elektrokleinstfahrzeuge-Verordnung (eKFV) und darf in Deutschland nicht im öffentlichen Straßenverkehr genutzt werden. Die Nutzung ist ausschließlich auf Privatgelände mit Zustimmung des Eigentümers zulässig. Helm und Schutzausrüstung werden empfohlen. Siehe unsere{" "}
        <Link href="/agb" className="underline">
          AGB
        </Link>
        .
      </p>
    </section>
  );
}
