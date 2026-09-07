"use client";
import { Grid, Heading, Text } from "@radix-ui/themes";
import FadeInOnView from "./components/FadeInOnView";
import SectionHeading from "./components/SectionHeading";
import { useLanguage } from "./context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "01",
    eyebrowLabel: "Background",
    title: "About my...",
    t1: "Past",
    d1: "Scientist with a PhD in Biological Sciences. During my doctoral research, I leveraged Python for data analysis and visualization. Driven by curiosity, I taught myself web development and quickly fell in love with it: JavaScript, HTML, CSS, and eventually React, TypeScript, and Next.js became my focus.",
    t2: "Present",
    d2: "Recently completed my PhD and currently working as a freelance frontend developer. I'm actively seeking a Junior Frontend Developer position at a forward-thinking company. My combination of scientific rigor and web development expertise enables me to tackle complex problems with both creativity and precision.",
    t3: "Future",
    d3: "I'm committed to deepening my expertise in frontend development, working within collaborative teams that challenge and inspire growth, and building products that make a real impact. I'm proactive, adaptable, and excited about the opportunities ahead.",
  },
  es: {
    eyebrowIndex: "01",
    eyebrowLabel: "Trasfondo",
    title: "Sobre mi...",
    t1: "Pasado",
    d1: "Científico con Doctorado en Ciencias Biológicas. Durante mi investigación doctoral, utilicé Python para análisis de datos y visualización. Impulsado por la curiosidad, me enseñé a mí mismo desarrollo web y rápidamente me enamoré de él: JavaScript, HTML, CSS, y eventualmente React, TypeScript y Next.js se convirtieron en mi enfoque.",
    t2: "Presente",
    d2: "Recientemente completé mi Doctorado y actualmente trabajo como desarrollador frontend freelance. Estoy buscando activamente una posición como Desarrollador Frontend Junior en una empresa progresista. Mi combinación de rigor científico y experiencia en desarrollo web me permite abordar problemas complejos con creatividad y precisión.",
    t3: "Futuro",
    d3: "Estoy comprometido a profundizar mi experiencia en desarrollo frontend, trabajar dentro de equipos colaborativos que desafíen e inspiren crecimiento, y construir productos que generen un impacto real. Soy proactivo, adaptable y entusiasmado con las oportunidades que se avecinan.",
  },
};

const About = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, t1, d1, t2, d2, t3, d3 } =
    translations[language];

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
