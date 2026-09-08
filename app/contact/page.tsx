import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

export const metadata: Metadata = {
  title: "Contacto | Gabriel López",
  description:
    "Contame sobre tu proyecto: qué necesitás, presupuesto aproximado y cómo contactarte. Te respondo en uno o dos días.",
  openGraph: {
    title: "Contacto | Gabriel López",
    description:
      "Contame sobre tu proyecto: qué necesitás, presupuesto aproximado y cómo contactarte. Te respondo en uno o dos días.",
    url: "https://gabriellopez.com.ar/contact",
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
    title: "Contacto | Gabriel López",
    description:
      "Contame sobre tu proyecto: qué necesitás, presupuesto aproximado y cómo contactarte. Te respondo en uno o dos días.",
    images: ["/og.webp"],
  },
};

export default function ContactPage() {
  return (
    <div className="py-4 mb-8 max-w-2xl mx-auto">
      <ContactHeader />
      <ContactForm />
    </div>
  );
}
