"use client";

import { Grid, Heading, Text } from "@radix-ui/themes";
import { TbBrowser, TbLayoutDashboard, TbRobot, TbTools } from "react-icons/tb";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "01",
    eyebrowLabel: "What I Offer",
    title: "Services",
    o1t: "Websites",
    o1d: "Pages designed to highlight your brand. Whether your brand already has its own style or you need a new one, my design adapts to your needs.",
    o2t: "Web Applications",
    o2d: "Inventory systems, payment processing, automated messaging. I build applications that simplify problems, no matter how complex.",
    o3t: "AI-Powered Features",
    o3d: "Practical integrations with AI agents that assist you with your tasks.",
    o4t: "Maintenance & Technical Support",
    o4d: "All my products come with maintenance service. I can also update and fix your existing site.",
  },
  es: {
    eyebrowIndex: "01",
    eyebrowLabel: "Qué ofrezco",
    title: "Servicios",
    o1t: "Sitios Web",
    o1d: "Páginas diseñadas para resaltar tu marca. Ya sea que tu marca tenga un estilo propio o necesites uno nuevo, mi diseño se adapta a tus necesidades.",
    o2t: "Aplicaciones Web",
    o2d: "Sistemas de inventariado, de cobro, de respuesta de mensajes. Diseño aplicaciones que simplifican problemas sin importar su complejidad..",
    o3t: "Funcionalidades con IA",
    o3d: "Integraciones prácticas con agentes IA que te asisten en tus tareas.",
    o4t: "Mantenimiento y Soporte Técnico",
    o4d: "Todos mis productos cuentan con servicio de mantenimiento. También puedo actualizar y arreglar tu sitio existente.",
  },
};

const ServicesOfferings = () => {
  const { language } = useLanguage();
  const {
    eyebrowIndex,
    eyebrowLabel,
    title,
    o1t,
    o1d,
    o2t,
    o2d,
    o3t,
    o3d,
    o4t,
    o4d,
  } = translations[language];

  const cards = [
    { title: o1t, text: o1d, Icon: TbBrowser },
    { title: o2t, text: o2d, Icon: TbLayoutDashboard },
    { title: o3t, text: o3d, Icon: TbRobot },
    { title: o4t, text: o4d, Icon: TbTools },
  ];

  return (
    <section className="mb-24">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <Grid gap="5" columns={{ initial: "1", sm: "2" }}>
        {cards.map((card, index) => (
          <FadeInOnView key={card.title} index={index} delay={150}>
            <div
              className="flex items-center"
              style={{
                height: "100%",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "28px 24px",
                gap: "20px",
              }}
            >
              <div style={{ flex: 1 }}>
                <Heading mb="3" size={{ initial: "6", sm: "7" }}>
                  {card.title}
                </Heading>
                <Text style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                  {card.text}
                </Text>
              </div>
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0"
                style={{
                  borderRadius: "20%",
                  background: "var(--signal-soft)",
                  color: "var(--signal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <card.Icon size="46%" />
              </div>
            </div>
          </FadeInOnView>
        ))}
      </Grid>
    </section>
  );
};

export default ServicesOfferings;
