"use client";

import { Flex, Grid, Text } from "@radix-ui/themes";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import SocialButton from "../components/SocialButton";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "03",
    eyebrowLabel: "Let's Talk",
    title: "Ready to start a project?",
    subtitle:
      "Tell me a bit about what you're building and I'll get back to you within a day or two.",
  },
  es: {
    eyebrowIndex: "03",
    eyebrowLabel: "Hablemos",
    title: "¿Listo para empezar un proyecto?",
    subtitle:
      "Contame un poco sobre lo que estás construyendo y te respondo en uno o dos días.",
  },
};

const ServicesContact = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, subtitle } = translations[language];

  const socialLinks = [
    {
      id: "email",
      href: "mailto:gabriellopezmdp@gmail.com?subject=Freelance%20project%20inquiry&body=Hi%20Gabriel,%20I'd%20like%20to%20talk%20about%20a%20project...",
      label: "Email",
      icon: <MdOutlineEmail />,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/gabriel-alejandro-l%C3%B3pez/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <section id="contact">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <Text
        as="p"
        size="4"
        mb="7"
        style={{ color: "var(--muted)", maxWidth: "58ch", lineHeight: 1.7 }}
      >
        {subtitle}
      </Text>
      <Flex justify="start">
        <Grid columns={{ initial: "2" }} gap={{ initial: "4", sm: "6" }}>
          {socialLinks.map(({ id, href, label, icon }, index) => (
            <FadeInOnView key={id} index={index} delay={100}>
              <SocialButton href={href} openInNewTab>
                {icon}
                {label}
              </SocialButton>
            </FadeInOnView>
          ))}
        </Grid>
      </Flex>
    </section>
  );
};

export default ServicesContact;
