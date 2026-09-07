"use client";

import { Grid, Heading, Text } from "@radix-ui/themes";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "02",
    eyebrowLabel: "How I Work",
    title: "Process",
    s1t: "Discovery Call",
    s1d: "We talk through your goals, scope and timeline to see if it's a good fit.",
    s2t: "Proposal & Scope",
    s2d: "You get a clear proposal — deliverables, timeline and cost — before any work starts.",
    s3t: "Build & Iterate",
    s3d: "Development happens in short cycles with regular check-ins, so you always know where things stand.",
    s4t: "Launch & Support",
    s4d: "I help you ship, and stay available for fixes, tweaks and future iterations.",
  },
  es: {
    eyebrowIndex: "02",
    eyebrowLabel: "Cómo trabajo",
    title: "Proceso",
    s1t: "Llamada Inicial",
    s1d: "Hablamos sobre tus objetivos, alcance y plazos para ver si encajamos bien.",
    s2t: "Propuesta y Alcance",
    s2d: "Recibís una propuesta clara — entregables, cronograma y costo — antes de empezar a trabajar.",
    s3t: "Desarrollo Iterativo",
    s3d: "El desarrollo avanza en ciclos cortos con check-ins regulares, para que siempre sepas en qué estamos.",
    s4t: "Lanzamiento y Soporte",
    s4d: "Te ayudo a lanzar el producto y sigo disponible para ajustes, correcciones y futuras iteraciones.",
  },
};

const ServicesProcess = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, s1t, s1d, s2t, s2d, s3t, s3d, s4t, s4d } =
    translations[language];

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
