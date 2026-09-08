"use client";

import { Heading, Text } from "@radix-ui/themes";
import { MdOutlineEmail } from "react-icons/md";
import FadeInOnView from "../components/FadeInOnView";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrow: "Get in Touch",
    title: "Tell me about your project",
    subtitle:
      "Fill in the form and I'll get back to you within a day or two with a clear answer.",
  },
  es: {
    eyebrow: "Contacto",
    title: "Contame sobre tu proyecto",
    subtitle:
      "Completá el formulario y te respondo en uno o dos días con una respuesta clara.",
  },
};

const ContactHeader = () => {
  const { language } = useLanguage();
  const { eyebrow, title, subtitle } = translations[language];

  return (
    <div className="mb-10">
      <FadeInOnView index={0} direction="up" delay={100}>
        <div className="eyebrow eyebrow--icon mb-3">
          <MdOutlineEmail size={14} />
          {eyebrow}
        </div>
      </FadeInOnView>
      <FadeInOnView index={1} direction="up" delay={100}>
        <Heading
          mb="3"
          size={{ initial: "7", sm: "8" }}
          style={{ color: "var(--fg)", fontWeight: 600, letterSpacing: "-0.01em" }}
        >
          {title}
        </Heading>
      </FadeInOnView>
      <FadeInOnView index={2} direction="up" delay={100}>
        <Text as="p" size="4" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          {subtitle}
        </Text>
      </FadeInOnView>
    </div>
  );
};

export default ContactHeader;
