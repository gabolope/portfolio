"use client";

import { Heading, Text } from "@radix-ui/themes";
import { FaRegFilePdf } from "react-icons/fa6";
import { TbArrowDown } from "react-icons/tb";
import Image from "next/image";
import CtaButton from "./components/CtaButton";
import FadeInOnView from "./components/FadeInOnView";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const Presentation = () => {
  const { language } = useLanguage();
  const { status, t1, t2, t3, ctaProjects, ctaCv } =
    translations[language].presentation;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 mb-20 items-center">
      <div className="lg:col-span-3">
        <FadeInOnView index={0} direction="up" delay={100}>
          <div className="eyebrow mb-5">{status}</div>
        </FadeInOnView>
        <FadeInOnView index={1} direction="up" delay={100}>
          <Heading
            mb="1"
            size={{ initial: "6", sm: "7" }}
            weight="medium"
            style={{ color: "var(--muted)" }}
          >
            {t1}
          </Heading>
        </FadeInOnView>
        <FadeInOnView index={2} direction="up" delay={100}>
          <Heading
            mb="3"
            size={{ initial: "8", sm: "9" }}
            style={{
              color: "var(--signal)",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Gabriel López
          </Heading>
        </FadeInOnView>
        <FadeInOnView index={3} direction="up" delay={100}>
          <Heading
            mb="4"
            size={{ initial: "6", sm: "7" }}
            weight="medium"
            style={{ letterSpacing: "-0.01em" }}
          >
            {t2}
          </Heading>
        </FadeInOnView>
        <FadeInOnView index={4} direction="up" delay={150}>
          <Text
            as="p"
            size="4"
            mb="6"
            style={{ color: "var(--muted)", maxWidth: "58ch", lineHeight: 1.7 }}
          >
            {t3}
          </Text>
        </FadeInOnView>
        <FadeInOnView index={5} direction="up" delay={150}>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="#projects" variant="solid">
              <TbArrowDown />
              {ctaProjects}
            </CtaButton>
            <CtaButton href="/resume.pdf" variant="accent" openInNewTab>
              <FaRegFilePdf />
              {ctaCv}
            </CtaButton>
          </div>
        </FadeInOnView>
      </div>
      <div className="lg:col-span-2">
        <FadeInOnView index={2} direction="right" delay={150}>
          <div
            className="marks w-full max-w-sm mx-auto lg:max-w-none"
            style={{
              position: "relative",
              aspectRatio: "1 / 1.05",
              border: "1px solid var(--line)",
            }}
          >
            <Image
              src="/photo.png"
              fill
              alt="Gabriel López picture"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </FadeInOnView>
      </div>
    </div>
  );
};

export default Presentation;
