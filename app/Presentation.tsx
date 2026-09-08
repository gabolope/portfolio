"use client";

import { Heading, Text } from "@radix-ui/themes";
import { FaRegFilePdf } from "react-icons/fa6";
import { TbArrowDown } from "react-icons/tb";
import Image from "next/image";
import CtaButton from "./components/CtaButton";
import FadeInOnView from "./components/FadeInOnView";
import { useLanguage } from "./context/LanguageContext";

const translations = {
  en: {
    status: "Open to work",
    t1: "Hello! I'm",
    t2: "Frontend Developer",
    t3: "I'm a Frontend Developer passionate about building user-centered web applications. With a background in scientific research and specialization in React, TypeScript, and modern frontend architecture, I excel at turning complex requirements into clear, functional experiences. My years in research formed my analytical mindset and problem-solving skills, which translate directly into robust, maintainable code.",
    ctaProjects: "See projects",
    ctaCv: "Download CV",
  },
  es: {
    status: "Disponible para trabajar",
    t1: "Hola! Soy",
    t2: "Desarrollador Frontend",
    t3: "Soy Desarrollador Frontend apasionado por construir aplicaciones web centradas en el usuario. Con formación en investigación científica y especialización en React, TypeScript y arquitectura frontend moderna, destaco en transformar requisitos complejos en experiencias claras y funcionales. Mis años en investigación formaron mi pensamiento analítico y capacidad de resolución de problemas, que se traducen directamente en código robusto y mantenible.",
    ctaProjects: "Ver proyectos",
    ctaCv: "Descargar CV",
  },
};

const Presentation = () => {
  const { language } = useLanguage();
  const { status, t1, t2, t3, ctaProjects, ctaCv } = translations[language];

  return (
    <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-5 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-0 mb-20 items-start lg:items-center">
      <div className="col-start-1 row-start-1 lg:col-start-1 lg:row-start-1 lg:col-span-3">
        <FadeInOnView index={0} direction="up" delay={100}>
          <div className="eyebrow mb-5">{status}</div>
        </FadeInOnView>
        <FadeInOnView index={1} direction="up" delay={100}>
          <Heading
            asChild
            mb="1"
            size={{ initial: "4", sm: "7" }}
            weight="medium"
            style={{ color: "var(--muted)" }}
          >
            <p>{t1}</p>
          </Heading>
        </FadeInOnView>
        <FadeInOnView index={2} direction="up" delay={100}>
          <Heading
            as="h1"
            mb="3"
            size={{ initial: "6", sm: "9" }}
            style={{
              color: "var(--signal)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Gabriel López
          </Heading>
        </FadeInOnView>
        <FadeInOnView index={3} direction="up" delay={100}>
          <Heading
            asChild
            mb="4"
            size={{ initial: "4", sm: "7" }}
            weight="medium"
            style={{ letterSpacing: "-0.01em" }}
          >
            <p>{t2}</p>
          </Heading>
        </FadeInOnView>
      </div>
      <div className="col-start-2 row-start-1 lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-2">
        <FadeInOnView index={2} direction="right" delay={150}>
          <div
            className="marks relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-full lg:h-auto lg:aspect-[1/1.05]"
            style={{
              border: "1px solid var(--line)",
            }}
          >
            <Image
              src="/photo.png"
              fill
              alt="Gabriel López picture"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </FadeInOnView>
      </div>
      <div className="col-start-1 col-span-2 row-start-2 lg:col-start-1 lg:row-start-2 lg:col-span-3">
        <FadeInOnView index={4} direction="up" delay={150}>
          <Text
            as="p"
            size="4"
            mb="6"
            style={{ color: "var(--muted)", maxWidth: "58ch", lineHeight: 1.7 }}
          >
            {t3}
          </Text>
        </FadeInOnView>
        <FadeInOnView index={5} direction="up" delay={150}>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="#projects" variant="solid">
              <TbArrowDown />
              {ctaProjects}
            </CtaButton>
            <CtaButton href="/resume.pdf" variant="accent" openInNewTab>
              <FaRegFilePdf />
              {ctaCv}
            </CtaButton>
          </div>
        </FadeInOnView>
      </div>
    </div>
  );
};

export default Presentation;
