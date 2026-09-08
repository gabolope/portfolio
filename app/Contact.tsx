"use client";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import FadeInOnView from "./components/FadeInOnView";
import SectionHeading from "./components/SectionHeading";
import SocialButton from "./components/SocialButton";
import { useLanguage } from "./context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "04",
    eyebrowLabel: "Get in Touch",
    title: "Want to...",
    t1: "Offer a job opportunity?",
    d1: "I'm actively seeking a Frontend Developer position or exciting freelance projects. With hands-on experience building real-world applications and a scientific background, I'm ready to contribute meaningfully to your team.",
    t2: "Connect?",
    d2: "I believe in the power of collaboration and community. Whether you're a developer, designer, or entrepreneur, I'd love to chat about web development or potential partnerships.Let's grow together!",
    t3: "Build something?",
    d3: "I'm passionate about creating innovative web applications that solve real problems. From e-commerce platforms to collaborative tools, I'm eager to take on challenging projects. Let's build something impactful!",
    ctaServices: "See freelance services",
    resume: "Resume",
  },
  es: {
    eyebrowIndex: "04",
    eyebrowLabel: "Contacto",
    title: "¿Te gustaría...",
    t1: "Ofrecer una oportunidad laboral?",
    d1: "Estoy buscando activamente una posición como Desarrollador Frontend o proyectos freelance emocionantes. Con experiencia práctica construyendo aplicaciones reales y una formación científica sólida, estoy listo para contribuir significativamente a tu equipo.",
    t2: "Conectar?",
    d2: "Creo en el poder de la colaboración y la comunidad. Ya seas desarrollador, diseñador o emprendedor, me encantaría charlar sobre desarrollo web o posibles asociaciones. ¡Crezcamos juntos!",
    t3: "Construir algo?",
    d3: "Soy apasionado por crear aplicaciones web innovadoras que resuelvan problemas reales. Desde plataformas de e-commerce hasta herramientas colaborativas, estoy ansioso por asumir proyectos desafiantes. ¡Construyamos algo impactante!",
    ctaServices: "Ver servicios freelance",
    resume: "Currículum",
  },
};

const Contact = () => {
  const { language } = useLanguage();
  const {
    eyebrowIndex,
    eyebrowLabel,
    title,
    t1,
    t2,
    t3,
    d1,
    d2,
    d3,
    ctaServices,
    resume,
  } = translations[language];

  const cards = [
    { title: t1, text: d1 },
    { title: t2, text: d2 },
    { title: t3, text: d3, href: "/services", cta: ctaServices },
  ];

  const socialLinks = [
    {
      id: "email",
      href: "/contact",
      label: "Email",
      icon: <MdOutlineEmail />,
    },
    {
      id: "github",
      href: "https://github.com/gabolope",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/gabriel-alejandro-l%C3%B3pez/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      id: "resume",
      href: "/resume.pdf",
      label: `${resume}`,
      icon: <FaRegFilePdf />,
    },
  ];

  return (
    <section id="contact">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <Grid gap="5" columns={{ initial: "1", sm: "2", md: "3" }} mb="8">
        {cards.map((card, index) => (
          <FadeInOnView key={card.title} index={index} delay={150}>
            <div
              style={{
                height: "100%",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="min-h-[60px] sm:min-h-[100px] lg:min-h-[70px]">
                <Heading as="h3" size={{ initial: "6", sm: "7" }} mb="2">
                  {card.title}
                </Heading>
              </div>
              <Text style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {card.text}
              </Text>
              {card.href && (
                <Link
                  href={card.href}
                  className="glow"
                  style={{
                    marginTop: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--signal)",
                  }}
                >
                  {card.cta}
                  <TbArrowRight />
                </Link>
              )}
            </div>
          </FadeInOnView>
        ))}
      </Grid>

      <Flex justify="center">
        <Grid
          columns={{ initial: "2", sm: "4" }}
          gap={{ initial: "4", sm: "8" }}
          justify="center"
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
    </section>
  );
};

export default Contact;
