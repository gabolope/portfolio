"use client";

import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import SocialButton from "../components/SocialButton";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "05",
    eyebrowLabel: "Let's Talk",
    title: "Ready to start a project?",
    subtitle:
      "Tell me what you need and we'll get in touch to work on it, your question is welcomed.",
  },
  es: {
    eyebrowIndex: "05",
    eyebrowLabel: "Hablemos",
    title: "¿Listo para empezar un proyecto?",
    subtitle:
      "Contame sobre lo que necesitás y nos ponemos en contacto para trabajar sobre ello, tu consulta no es molestia.",
  },
};

const ServicesContact = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, subtitle } =
    translations[language];

  const socialLinks = [
    {
      id: "whatsapp",
      href: "https://wa.me/542235597430",
      label: "WhatsApp",
      icon: <FaWhatsapp />,
    },
    {
      id: "email",
      href: "/contact",
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
      <Grid columns="2" gap={{ initial: "4", md: "7" }} align="center">
        <Text
          as="p"
          size="4"
          className="col-start-1 col-span-2 row-start-1 md:col-span-1"
          style={{ color: "var(--muted)", maxWidth: "58ch", lineHeight: 1.7 }}
        >
          {subtitle}
        </Text>
        <Flex justify="start" className="col-start-1 row-start-2">
          <Grid
            columns={{ initial: "1", sm: "3" }}
            gap={{ initial: "3", sm: "6" }}
          >
            {socialLinks.map(({ id, href, label, icon }, index) => (
              <FadeInOnView key={id} index={index} delay={100}>
                <SocialButton href={href} openInNewTab={id !== "email"}>
                  {icon}
                  {label}
                </SocialButton>
              </FadeInOnView>
            ))}
          </Grid>
        </Flex>
        <Box className="col-start-2 row-start-2 md:row-start-1 md:row-span-2">
          <FadeInOnView index={2} direction="right" delay={150}>
            <img
              src="/services/contact.svg"
              alt=""
              aria-hidden
              className="mx-auto w-full max-w-65 md:max-w-75"
            />
          </FadeInOnView>
        </Box>
      </Grid>
    </section>
  );
};

export default ServicesContact;
