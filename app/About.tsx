"use client";
import { Grid, Heading, Text } from "@radix-ui/themes";
import FadeInOnView from "./components/FadeInOnView";
import SectionHeading from "./components/SectionHeading";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const About = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, t1, d1, t2, d2, t3, d3 } =
    translations[language].about;

  const cards = [
    { title: t1, text: d1 },
    { title: t2, text: d2 },
    { title: t3, text: d3 },
  ];

  return (
    <section id="about" className="mb-24">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <Grid gap="5" columns={{ initial: "1", sm: "2", md: "3" }}>
        {cards.map((card, index) => (
          <FadeInOnView key={card.title} index={index} delay={150}>
            <div
              style={{
                height: "100%",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "28px 24px",
              }}
            >
              <Heading mb="3" size={{ initial: "6", sm: "7" }}>
                {card.title}
              </Heading>
              <Text style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                {card.text}
              </Text>
            </div>
          </FadeInOnView>
        ))}
      </Grid>
    </section>
  );
};

export default About;
