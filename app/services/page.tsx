import type { Metadata } from "next";
import ServicesContact from "./ServicesContact";
import ServicesHero from "./ServicesHero";
import ServicesOfferings from "./ServicesOfferings";
import ServicesProcess from "./ServicesProcess";

export const metadata: Metadata = {
  title: "Freelance Web Development Services | Gabriel López",
  description:
    "Freelance frontend and full-stack developer available for landing pages, web applications and AI-powered features, built with React, Next.js, TypeScript and Node.js.",
  openGraph: {
    title: "Freelance Web Development Services | Gabriel López",
    description:
      "Freelance frontend and full-stack developer available for landing pages, web applications and AI-powered features.",
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
    title: "Freelance Web Development Services | Gabriel López",
    description:
      "Freelance frontend and full-stack developer available for landing pages, web applications and AI-powered features.",
    images: ["/og.webp"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <div className="py-4 mb-8">
        <ServicesHero />
      </div>
      <ServicesOfferings />
      <ServicesProcess />
      <ServicesContact />
    </>
  );
}
