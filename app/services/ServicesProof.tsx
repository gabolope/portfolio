"use client";

import { Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "02",
    eyebrowLabel: "Real Cases",
    title: "Work Delivered",
    visit: "Visit site",
    c1Problem:
      "No previous online presence. Needed a site that builds trust from the first second.",
    c2Problem:
      "Was showing a custom furniture catalog only through WhatsApp and Instagram. Needed a site for being easily located.",
  },
  es: {
    eyebrowIndex: "02",
    eyebrowLabel: "Casos reales",
    title: "Trabajos hechos",
    visit: "Ver sitio",
    c1Problem:
      "No tenía presencia online anterior. Necesitaba un sitio que genere confianza desde el primer segundo.",
    c2Problem:
      "Mostraba su catálogo de muebles a medida solo por WhatsApp e Instagram. Necesitaba un sitio propio para ser encontrado fácilmente.",
  },
};

const cases = [
  {
    client: "ThermoReleaf",
    domain: "thermoreleaf.com.ar",
    href: "https://thermoreleaf.com.ar/",
    image: "/projects/thermoreleaf/desktop1.png",
    key: "c1Problem" as const,
  },
  {
    client: "Kreart",
    domain: "kreart-dpm.com",
    href: "https://kreart-dpm.com/",
    image: "/projects/kreart/desktop1.png",
    key: "c2Problem" as const,
  },
];

const ServicesProof = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, visit, ...problems } =
    translations[language];

  return (
    <section className="mb-24">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <Grid gap="5" columns={{ initial: "1", sm: "2" }}>
        {cases.map((item, index) => (
          <FadeInOnView key={item.client} index={index} delay={150}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              style={{
                border: "1px solid var(--line)",
                background: "var(--surface)",
                height: "100%",
              }}
            >
              <div
                className="flex items-center"
                style={{
                  gap: "8px",
                  padding: "10px 16px",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "var(--line)",
                    }}
                  />
                ))}
                <Text
                  style={{
                    marginLeft: "8px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--muted)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.domain}
                </Text>
              </div>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 10",
                  borderBottom: "1px solid var(--line)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={`${item.client} — ${item.domain}`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div style={{ padding: "22px 24px" }}>
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: "10px" }}
                >
                  <Heading size="5">{item.client}</Heading>
                  <TbArrowUpRight
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "var(--signal)", flexShrink: 0 }}
                    size={20}
                  />
                </div>
                <Text style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                  {problems[item.key]}
                </Text>
              </div>
            </a>
          </FadeInOnView>
        ))}
      </Grid>
    </section>
  );
};

export default ServicesProof;
