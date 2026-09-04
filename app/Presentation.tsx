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
    <div className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-5 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-0 mb-20 items-start lg:items-center">
      <div className="col-start-1 row-start-1 lg:col-start-1 lg:row-start-1 lg:col-span-3">
        <FadeInOnView index={0} direction="up" delay={100}>
          <div className="eyebrow mb-5">{status}</div>
        </FadeInOnView>
        <FadeInOnView index={1} direction="up" delay={100}>
          <Heading
            mb="1"
            size={{ initial: "4", sm: "7" }}
            weight="medium"
            style={{ color: "var(--muted)" }}
          >
            {t1}
          </Heading>
        </FadeInOnView>
        <FadeInOnView index={2} direction="up" delay={100}>
          <Heading
            mb="3"
            size={{ initial: "6", sm: "9" }}
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
            size={{ initial: "4", sm: "7" }}
            weight="medium"
            style={{ letterSpacing: "-0.01em" }}
          >
            {t2}
          </Heading>
        </FadeInOnView>
      </div>
      <div className="col-start-2 row-start-1 lg:col-start-4 lg:row-start-1 lg:col-span-2 lg:row-span-2">
        <FadeInOnView index={2} direction="right" delay={150}>
          <div
            className="marks relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-full lg:h-auto lg:aspect-[1/1.05]"
            style={{
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
      <div className="col-start-1 col-span-2 row-start-2 lg:col-start-1 lg:row-start-2 lg:col-span-3">
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
    </div>
  );
};

export default Presentation;
