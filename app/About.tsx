"use client";
import { Card, Grid, Heading, Text } from "@radix-ui/themes";
import FadeInOnView from "./components/FadeInOnView";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const About = () => {
  const { language } = useLanguage();
  const { title, t1, d1, t2, d2, t3, d3 } = translations[language].about;

  const cards = [
    {
      title: t1,
      text: d1,
    },
    {
      title: t2,
      text: d2,
    },
    {
      title: t3,
      text: d3,
    },
  ];

  return (
    <section id="about" className="mb-20">
      <Heading align="center" size={{ initial: "8", sm: "9" }} mb="7">
        {title}
      </Heading>
      <Grid gap="5" columns={{ initial: "1", sm: "2", md: "3" }} mb="7">
        {cards.map((card, index) => (
          <FadeInOnView key={card.title} index={index} delay={500}>
            <Card
              variant="surface"
              style={{ height: "100%", border: "1px solid var(--accent-7)" }}
            >
              <Heading align="center" size={{ initial: "7", sm: "8" }} mb="2">
                {card.title}
              </Heading>
              <Text align="center">{card.text}</Text>
            </Card>
          </FadeInOnView>
        ))}
      </Grid>
    </section>
  );
};

export default About;
