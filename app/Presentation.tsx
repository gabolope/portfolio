"use client";

import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import FadeInOnView from "./components/FadeInOnView";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const Presentation = () => {
  const { language } = useLanguage();
  const { t1, t2, t3 } = translations[language].presentation;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 items-center">
      <div className="lg:col-span-2">
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
      </div>
      <div
        className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto md:ml-auto lg:col-span-1"
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
      </div>
    </div>
  );
};

export default Presentation;
