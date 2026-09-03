"use client";
import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import FadeInOnView from "./components/FadeInOnView";
import SectionHeading from "./components/SectionHeading";
import SocialButton from "./components/SocialButton";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const Contact = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, t1, t2, t3, d1, d2, d3 } =
    translations[language].contact;
  const { resume } = translations[language].buttons;

  const cards = [
    { title: t1, text: d1 },
    { title: t2, text: d2 },
    { title: t3, text: d3 },
  ];

  const socialLinks = [
    {
      id: "email",
      href: "mailto:gabriellopezmdp@gmail.com?subject=Contact%20from%20Portfolio&body=Hi,%20I%20saw%20your%20online%20portfolio...",
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
                <Heading size={{ initial: "6", sm: "7" }} mb="2">
                  {card.title}
                </Heading>
              </div>
              <Text style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {card.text}
              </Text>
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

export default Contact;
