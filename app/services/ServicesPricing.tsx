"use client";

import { Grid, Heading, Text } from "@radix-ui/themes";
import { MdOutlineEmail } from "react-icons/md";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    eyebrowIndex: "04",
    eyebrowLabel: "What It Costs",
    title: "Pricing",
    note: "The final number depends on your project's scope, we define it together on the first call.",
    p1t: "Website",
    p1cta: "Ask about",
    p1d: "A landing page or institutional site to show your business, catalog or services online.",
    p2t: "Web Application",
    p2cta: "Ask about",
    p2d: "A custom system: inventory, payments, bookings. Built around how your business actually works.",
    p3t: "Maintenance",
    p3cta: "Ask about",
    p3d: "Content updates, small changes and technical support so the site keeps working while you run your business.",
  },
  es: {
    eyebrowIndex: "04",
    eyebrowLabel: "Cuánto sale",
    title: "Precios",
    note: "El número final depende del alcance de tu proyecto, lo definimos juntos en la primera reunión.",
    p1t: "Sitio Web",
    p1cta: "Consultar",
    p1d: "Landing o sitio institucional para mostrar tu negocio, tu catálogo o tus servicios online.",
    p2t: "Aplicación Web",
    p2cta: "Consultar",
    p2d: "Un sistema a medida: inventario, cobros, turnos. Armado alrededor de cómo funciona tu negocio.",
    p3t: "Mantenimiento",
    p3cta: "Consultar",
    p3d: "Cambios de contenido, ajustes y soporte técnico para que el sitio siga funcionando mientras vos atendés tu negocio.",
  },
};

const ServicesPricing = () => {
  const { language } = useLanguage();
  const {
    eyebrowIndex,
    eyebrowLabel,
    title,
    note,
    p1t,
    p1cta,
    p1d,
    p2t,
    p2cta,
    p2d,
    p3t,
    p3cta,
    p3d,
  } = translations[language];

  const packages = [
    { title: p1t, cta: p1cta, text: p1d },
    { title: p2t, cta: p2cta, text: p2d },
    { title: p3t, cta: p3cta, text: p3d },
  ];

  return (
    <section className="mb-16">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <Grid gap="5" columns={{ initial: "1", sm: "3" }} mb="6">
        {packages.map((pkg, index) => (
          <FadeInOnView key={pkg.title} index={index} delay={130}>
            <div
              className="marks"
              style={{
                height: "100%",
                border: "1px solid var(--line)",
                background: "var(--surface)",
                padding: "30px 26px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Heading as="h3" mb="3" size="5">
                {pkg.title}
              </Heading>
              <Text
                as="p"
                style={{ color: "var(--muted)", lineHeight: 1.6, flexGrow: 1 }}
              >
                {pkg.text}
              </Text>
              <a
                href="/contact"
                className="glow"
                style={{
                  marginTop: "16px",
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "var(--signal)",
                  letterSpacing: "-0.01em",
                }}
              >
                <MdOutlineEmail />
                {pkg.cta}
              </a>
            </div>
          </FadeInOnView>
        ))}
      </Grid>
      <FadeInOnView index={3} delay={130}>
        <Text
          as="p"
          size="3"
          style={{ color: "var(--muted)", maxWidth: "58ch", lineHeight: 1.65 }}
        >
          {note}
        </Text>
      </FadeInOnView>
    </section>
  );
};

export default ServicesPricing;
