import { Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";

const About = () => {
  return (
    <section id="about">
      <Heading align="center" mb="5">
        About My
      </Heading>
      <Grid gap="5" columns={{ initial: "1", sm: "3" }}>
        {cards.map((card) => (
          <Card key={card.title} className="flex-1" variant="surface">
            <Heading align="center" size="5" mb="2">
              {card.title}
            </Heading>
            <Text align="center">{card.text}</Text>
          </Card>
        ))}
      </Grid>
    </section>
  );
};

export default About;

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
