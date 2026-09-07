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
    eyebrowIndex: "03",
    eyebrowLabel: "Let's Talk",
    title: "Ready to start a project?",
    subtitle:
      "Tell me what you need and we'll get in touch to work on it, your question is welcomed.",
  },
  es: {
    eyebrowIndex: "03",
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
    {
      id: "whatsapp",
      href: "https://wa.me/542235597430",
      label: "WhatsApp",
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <section id="contact">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <Grid columns={{ initial: "1", md: "2" }} gap="7" align="center">
        <Box>
          <Text
            as="p"
            size="4"
            mb="7"
            style={{ color: "var(--muted)", maxWidth: "58ch", lineHeight: 1.7 }}
          >
            {subtitle}
          </Text>
          <Flex justify="start">
            <Grid columns={{ initial: "3" }} gap={{ initial: "4", sm: "6" }}>
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
        </Box>
        <FadeInOnView index={2} direction="right" delay={150}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/services/contact.svg"
            alt=""
            aria-hidden
            className="mx-auto w-full max-w-65 md:max-w-75"
          />
        </FadeInOnView>
      </Grid>
    </section>
  );
};

export default ServicesContact;
