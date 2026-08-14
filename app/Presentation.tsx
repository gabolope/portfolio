"use client";

import { Box, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import FadeInOnView from "./components/FadeInOnView";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const Presentation = () => {
  const { language } = useLanguage();
  const { t1, t2, t3 } = translations[language].presentation;

  return (
    <Grid
      columns={{ initial: "1", md: "2" }}
      align="center"
      gap="6"
      className="mb-20"
    >
      <Box>
        <FadeInOnView index={0} direction="up" delay={100}>
          <Heading mb="4" size="7" weight="light">
            {t1}
          </Heading>
        </FadeInOnView>
        <FadeInOnView index={1} direction="up" delay={100}>
          <Heading
            mb="4"
            size="8"
            style={{ color: "var(--accent-9)" }}
            weight="medium"
          >
            Gabriel López
          </Heading>
        </FadeInOnView>
        <FadeInOnView index={2} direction="up" delay={100}>
          <Heading mb="4" size="7" weight="light">
            {t2}
          </Heading>
        </FadeInOnView>
        <FadeInOnView index={3} direction="up" delay={150}>
          <Text as="p" size="5" weight="light">
            {t3}
          </Text>
        </FadeInOnView>
      </Box>
      <Box
        className="w-[75vw] md:w-[40vw] lg:w-[30vw] mx-auto md:ml-auto"
        style={{
          position: "relative",
          aspectRatio: "1 / 1",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "10px 10px var(--accent-9)",
        }}
      >
        <Image
          src="/photo.png"
          fill
          alt="Gabriel López picture"
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Grid>
  );
};

export default Presentation;
