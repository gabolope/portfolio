"use client";

import { Heading, Text } from "@radix-ui/themes";
import { TbArrowDown } from "react-icons/tb";
import CtaButton from "../components/CtaButton";
import FadeInOnView from "../components/FadeInOnView";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrow: "Freelance Services",
    title: "Let's build your web project",
    subtitle:
      "I'm a freelance frontend/full-stack developer helping startups and small businesses turn ideas into fast, polished, production-ready web products — from landing pages to full applications with AI-powered features.",
    cta: "Get in touch",
  },
  es: {
    eyebrow: "Servicios Freelance",
    title: "Construyamos tu proyecto web",
    subtitle:
      "Soy desarrollador frontend/full-stack freelance y ayudo a startups y pequeñas empresas a convertir ideas en productos web rápidos, cuidados y listos para producción — desde landing pages hasta aplicaciones completas con funcionalidades de IA.",
    cta: "Contactarme",
  },
};

const ServicesHero = () => {
  const { language } = useLanguage();
  const { eyebrow, title, subtitle, cta } = translations[language];

  return (
    <div className="mb-20">
      <FadeInOnView index={0} direction="up" delay={100}>
        <div className="eyebrow mb-5">{eyebrow}</div>
      </FadeInOnView>
      <FadeInOnView index={1} direction="up" delay={100}>
        <Heading
          mb="4"
          size={{ initial: "6", sm: "9" }}
          style={{
            color: "var(--fg)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            maxWidth: "18ch",
          }}
        >
          {title}
        </Heading>
      </FadeInOnView>
      <FadeInOnView index={2} direction="up" delay={150}>
        <Text
          as="p"
          size="4"
          mb="6"
          style={{ color: "var(--muted)", maxWidth: "60ch", lineHeight: 1.7 }}
        >
          {subtitle}
        </Text>
      </FadeInOnView>
      <FadeInOnView index={3} direction="up" delay={150}>
        <CtaButton href="#contact" variant="solid">
          <TbArrowDown />
          {cta}
        </CtaButton>
      </FadeInOnView>
    </div>
  );
};

export default ServicesHero;
