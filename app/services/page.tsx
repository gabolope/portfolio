import type { Metadata } from "next";
import ServicesContact from "./ServicesContact";
import ServicesFAQ from "./ServicesFAQ";
import ServicesHero from "./ServicesHero";
import ServicesOfferings from "./ServicesOfferings";
import ServicesPricing from "./ServicesPricing";
import ServicesProcess from "./ServicesProcess";
import ServicesProof from "./ServicesProof";

export const metadata: Metadata = {
  title: "Servicios Web | Gabriel López",
  description:
    "Sitios web y aplicaciones a medida para comercios y emprendimientos. Contame tu proyecto y recibí un presupuesto claro, sin vueltas.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Servicios Web | Gabriel López",
    description:
      "Desarrollo sitios web y aplicaciones a medida para que tu negocio venda más y atienda mejor a tus clientes. Contame tu proyecto y te paso un presupuesto claro.",
    url: "https://gabriellopez.com.ar/services",
    siteName: "Gabriel Alejandro López Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Gabriel Alejandro López Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios Web | Gabriel López",
    description:
      "Desarrollo sitios web y aplicaciones a medida para que tu negocio venda más y atienda mejor a tus clientes. Contame tu proyecto y te paso un presupuesto claro.",
    images: ["/og.webp"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOfferings />
      <ServicesProof />
      <ServicesProcess />
      <ServicesPricing />
      <ServicesFAQ />
      <ServicesContact />
    </>
  );
}
