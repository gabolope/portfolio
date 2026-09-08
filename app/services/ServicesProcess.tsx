"use client";

import { Grid, Heading, Text } from "@radix-ui/themes";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "03",
    eyebrowLabel: "How I Work",
    title: "Process",
    s1t: "Initial Meeting",
    s1d: "We talk about your goals, scope and timeline.",
    s2t: "Proposal & Scope",
    s2d: "You get a proposal for the website design, along with a timeline and costs.",
    s3t: "Development",
    s3d: "Development moves forward with updates on the project's status.",
    s4t: "Launch & Support",
    s4d: "Project deployment and verification that everything works correctly.",
  },
  es: {
    eyebrowIndex: "03",
    eyebrowLabel: "Cómo trabajo",
    title: "Proceso",
    s1t: "Reunión Inicial",
    s1d: "Hablamos sobre tus objetivos, alcance y plazos.",
    s2t: "Propuesta y Alcance",
    s2d: "Recibís una propuesta para el diseño del sitio web, junto a un cronograma y costos.",
    s3t: "Desarrollo",
    s3d: "El desarrollo avanza con actualizaciones del estado del proyecto.",
    s4t: "Lanzamiento y Soporte",
    s4d: "Despliegue del proyecto y verificación de correcto funcionamiento.",
  },
};

const ServicesProcess = () => {
  const { language } = useLanguage();
  const {
    eyebrowIndex,
    eyebrowLabel,
    title,
    s1t,
    s1d,
    s2t,
    s2d,
    s3t,
    s3d,
    s4t,
    s4d,
  } = translations[language];

  const steps = [
    { title: s1t, text: s1d },
    { title: s2t, text: s2d },
    { title: s3t, text: s3d },
    { title: s4t, text: s4d },
  ];

  return (
    <section className="mb-24">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <Grid gap="5" columns={{ initial: "1", sm: "2", md: "4" }}>
        {steps.map((step, index) => (
          <FadeInOnView key={step.title} index={index} delay={120}>
            <div style={{ height: "100%" }}>
              <Text
                as="div"
                mb="2"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.08em",
                  color: "var(--signal)",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Heading mb="2" size={{ initial: "5", sm: "5" }}>
                {step.title}
              </Heading>
              <Text style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {step.text}
              </Text>
            </div>
          </FadeInOnView>
        ))}
      </Grid>
    </section>
  );
};

export default ServicesProcess;
