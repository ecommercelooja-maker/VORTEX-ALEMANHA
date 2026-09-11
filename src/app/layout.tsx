import type { Metadata } from "next";
import { Bebas_Neue, Figtree } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });
const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: "400" });

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VORTEX Z10 2x2 App-vernetzter E-Scooter – Vortex Deutschland",
  description:
    "VORTEX Z10 2x2 App-vernetzter E-Scooter. Bis zu 4.000 W, Dual-Motor AWD, 120 km Reichweite. Kostenloser Expressversand in ganz Deutschland und 60 Tage Geld-zurück-Garantie.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VORTEX Z10 2x2 App-vernetzter E-Scooter.",
    images: ["/produto/01.jpg"],
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de-DE" className={`${figtree.variable} ${bebas.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
