"use client";

import { Grid, Heading, Text } from "@radix-ui/themes";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "01",
    eyebrowLabel: "What I Offer",
    title: "Services",
    o1t: "Landing Pages & Marketing Sites",
    o1d: "Responsive, fast-loading pages focused on clear messaging and conversion, built with modern React/Next.js and clean, maintainable code.",
    o2t: "Full-Stack Web Applications",
    o2d: "End-to-end products with React/Next.js on the front and Node.js, Prisma and PostgreSQL/MySQL on the back — authentication, dashboards, and everything in between.",
    o3t: "AI-Powered Features",
    o3d: "Practical integrations with LLM agents — automated support, smart triage, content generation — built to fit into a real workflow, not just a demo.",
    o4t: "Maintenance & Technical Support",
    o4d: "Bug fixes, performance improvements, and ongoing support for existing sites and applications, so you can focus on your business.",
  },
  es: {
    eyebrowIndex: "01",
    eyebrowLabel: "Qué ofrezco",
    title: "Servicios",
    o1t: "Landing Pages y Sitios de Marketing",
    o1d: "Páginas responsivas y de carga rápida, enfocadas en un mensaje claro y en la conversión, construidas con React/Next.js moderno y código limpio y mantenible.",
    o2t: "Aplicaciones Web Full-Stack",
    o2d: "Productos completos con React/Next.js en el frontend y Node.js, Prisma y PostgreSQL/MySQL en el backend — autenticación, dashboards y todo lo que haga falta.",
    o3t: "Funcionalidades con IA",
    o3d: "Integraciones prácticas con agentes LLM — soporte automatizado, triaje inteligente, generación de contenido — pensadas para encajar en un flujo de trabajo real, no solo una demo.",
    o4t: "Mantenimiento y Soporte Técnico",
    o4d: "Corrección de bugs, mejoras de performance y soporte continuo para sitios y aplicaciones existentes, para que puedas enfocarte en tu negocio.",
  },
};

const ServicesOfferings = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, o1t, o1d, o2t, o2d, o3t, o3d, o4t, o4d } =
    translations[language];

  const cards = [
    { title: o1t, text: o1d },
    { title: o2t, text: o2d },
    { title: o3t, text: o3d },
    { title: o4t, text: o4d },
  ];

  return (
    <section className="mb-24">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <Grid gap="5" columns={{ initial: "1", sm: "2" }}>
        {cards.map((card, index) => (
          <FadeInOnView key={card.title} index={index} delay={150}>
            <div
              style={{
                height: "100%",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "28px 24px",
              }}
            >
              <Heading mb="3" size={{ initial: "6", sm: "7" }}>
                {card.title}
              </Heading>
              <Text style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                {card.text}
              </Text>
            </div>
          </FadeInOnView>
        ))}
      </Grid>
    </section>
  );
};

export default ServicesOfferings;
