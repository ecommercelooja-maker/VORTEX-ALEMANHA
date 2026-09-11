"use client";
import { useState } from "react";
import { CHECKOUT_URL, footer, product } from "@/data/product";
import { Check, PaymentIcon, Stars } from "./Icons";

export default function BuyBox() {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-heading text-4xl uppercase leading-[1.05] sm:text-5xl">{product.title}</h1>

      <a href="#reviews" className="flex items-center gap-2 text-sm">
        <Stars value={product.rating} />
        <span className="font-semibold">{product.rating.toLocaleString("de-DE")}</span>
        <span className="text-black/60">({product.reviewCount} Bewertungen)</span>
      </a>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl font-bold text-accent-dark">{product.price}</span>
          <s className="text-lg text-black/50">{product.comparePrice}</s>
          <span className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white">{product.discountLabel}</span>
        </div>
        {/* PAngV: Preis inkl. MwSt., Versandhinweis und niedrigster Gesamtpreis der letzten 30 Tage */}
        <p className="mt-1 text-xs text-black/60">
          {product.priceNote} · Niedrigster Gesamtpreis der letzten 30 Tage: {product.lowestPrice30Days}
        </p>
      </div>

      <ul className="flex flex-col gap-2 text-sm">
        {product.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark" />
            {b}
          </li>
        ))}
      </ul>

      <div>
        <span className="mb-2 block text-sm text-black/70">Menge</span>
        <div className="inline-flex items-center rounded-full border border-black/30">
          <button
            type="button"
            aria-label="Menge verringern"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-4 py-2 text-lg"
          >
            −
          </button>
          <span className="w-10 text-center font-semibold">{qty}</span>
          <button type="button" aria-label="Menge erhöhen" onClick={() => setQty((q) => q + 1)} className="px-4 py-2 text-lg">
            +
          </button>
        </div>
      </div>

      <a
        id="kaufen"
        href={CHECKOUT_URL}
        rel="noopener"
        className="btn-gradient block w-full rounded-full py-4 text-center text-base font-bold tracking-wide text-white shadow-lg transition"
      >
        {product.ctaLabel}
      </a>

      <div className="flex flex-wrap items-center gap-2">
        {footer.payments.map((p) => (
          <PaymentIcon key={p} name={p} />
        ))}
      </div>

      <ul className="grid grid-cols-3 gap-2 rounded-xl bg-surface p-3 text-center text-xs font-semibold">
        {product.guarantees.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
