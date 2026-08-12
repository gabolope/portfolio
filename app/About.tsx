"use client";
import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { useInView } from "react-intersection-observer";

const About = () => {
  return (
    <section id="about">
      <Heading align="center" size={{ initial: "8", sm: "9" }} mb="7">
        About My
      </Heading>
      <Flex gap="5" wrap="wrap" justify="center" mb="7">
        {cards.map((card, index) => (
          <AboutCard card={card} index={index} key={card.title} />
        ))}
      </Flex>
    </section>
  );
};

export default About;

const AboutCard = ({
  card,
  index,
}: {
  card: { title: string; text: string };
  index: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const delay = index * 500; // delay entre cada card

  return (
    <Box
      ref={ref}
      width={{
        initial: "100%",
        sm: "calc(50% - 12px)", // 2 columnas (resta la mitad del gap de 24px)
        md: "calc(33.333% - 16px)", // 3 columnas (resta 1/3 del gap total de 48px)
      }}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
        transition: `all 0.5s ease-out ${delay}ms`,
      }}
    >
      <Card
        className="flex-1"
        variant="surface"
        style={{ height: "100%", border: "1px solid var(--accent-7)" }}
      >
        <Heading align="center" size={{ initial: "7", sm: "8" }} mb="2">
          {card.title}
        </Heading>
        <Text align="center">{card.text}</Text>
      </Card>
    </Box>
  );
};

const cards = [
  {
    title: "Past",
    text: "Software developer with a PhD in science. During my studies I used Python for data analysis, I started to study web development by my own, and fell in love with it. Since then, I learned JavaScript, CSS and HTML. Then I moved forward to React, Typescript and NextJs.",
  },
  {
    title: "Present",
    text: "I have just finished my PhD and now Im working as a freelance web developer. I'm looking forward to find a steady job for a company as a Junior Frontend developer. As a former scientist, I have a lot to offer given that Im used to ing complex problems and working on long projects.",
  },
  {
    title: "Future",
    text: "I aim to expand my knowledge in web development, work in a team that enriches my career and get experience. I am very forward thinking, proactive,",
  },
];
