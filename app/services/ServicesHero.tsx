"use client";

import { Heading, Text } from "@radix-ui/themes";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import CtaButton from "../components/CtaButton";
import FadeInOnView from "../components/FadeInOnView";
import PhoneMockup from "./PhoneMockup";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrow: "Digital Solutions",
    title: "Take your business to the next level",
    audience:
      "For shops, studios and small businesses. Wherever you are, we start with a call.",
    subtitlePre: "Stand out with a ",
    subtitleHighlight: "website specially designed",
    subtitlePost:
      " to show your clients the quality of your products and services.",
    ctaEmail: "Request a quote",
    ctaWhatsapp: "Tell me your idea",
  },
  es: {
    eyebrow: "Soluciones digitales",
    title: "Llevá tu negocio al siguiente nivel",
    audience:
      "Para comercios, estudios y emprendimientos. Estés donde estés, arrancamos con una llamada.",
    subtitlePre: "Destacate con una ",
    subtitleHighlight: "página web especialmente diseñada",
    subtitlePost:
      " para mostrarles a tus clientes la calidad de tus productos y servicios.",
    ctaEmail: "Pedime un presupuesto",
    ctaWhatsapp: "Contame de tu proyecto",
  },
};

const ServicesHero = () => {
  const { language } = useLanguage();
  const {
    eyebrow,
    title,
    audience,
    subtitlePre,
    subtitleHighlight,
    subtitlePost,
    ctaEmail,
    ctaWhatsapp,
  } = translations[language];

  return (
    <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-5 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-0 mt-4 mb-16 items-start lg:items-center">
      <div className="col-start-1 row-start-1 lg:col-start-1 lg:row-start-1 lg:col-span-3">
        <FadeInOnView index={1} direction="up" delay={100}>
          <Heading
            as="h1"
            mb="5"
            size={{ initial: "7", sm: "9" }}
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
        <FadeInOnView index={0} direction="up" delay={100}>
          <div className="eyebrow eyebrow--icon">
            <TbBulb size={14} />
            {eyebrow}
          </div>
        </FadeInOnView>
        <FadeInOnView index={2} direction="up" delay={100}>
          <Text
            as="p"
            size="2"
            mb="5"
            style={{
              color: "var(--muted)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.02em",
            }}
          >
            {audience}
          </Text>
        </FadeInOnView>
      </div>
      <div className="col-start-2 row-start-1 lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-2">
        <FadeInOnView index={2} direction="right" delay={150}>
          <PhoneMockup />
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
            {subtitlePre}
            <span
              style={{
                background: "var(--signal-soft)",
                color: "var(--fg)",
                fontWeight: 600,
                padding: "0 4px",
                borderRadius: "4px",
                boxDecorationBreak: "clone",
                WebkitBoxDecorationBreak: "clone",
              }}
            >
              {subtitleHighlight}
            </span>
            {subtitlePost}
          </Text>
        </FadeInOnView>
        <FadeInOnView index={5} direction="up" delay={150}>
          <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
            <CtaButton href="/contact" variant="solid" className="sm:w-56">
              <MdOutlineEmail />
              {ctaEmail}
            </CtaButton>
            <CtaButton
              href="https://wa.me/542235597430"
              variant="accent"
              openInNewTab
              className="sm:w-56"
            >
              <FaWhatsapp />
              {ctaWhatsapp}
            </CtaButton>
          </div>
        </FadeInOnView>
      </div>
    </div>
  );
};

export default ServicesHero;
