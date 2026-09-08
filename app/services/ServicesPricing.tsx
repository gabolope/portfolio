"use client";

import { Grid, Heading, Text } from "@radix-ui/themes";
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
    p1p: "From $200 USD",
    p1d: "A landing page or institutional site to show your business, catalog or services online.",
    p2t: "Web Application",
    p2p: "From $500 USD",
    p2d: "A custom system: inventory, payments, bookings. Built around how your business actually works.",
    p3t: "Maintenance",
    p3p: "From $20 USD /mo",
    p3d: "Content updates, small changes and technical support so the site keeps working while you run your business.",
  },
  es: {
    eyebrowIndex: "04",
    eyebrowLabel: "Cuánto sale",
    title: "Precios",
    note: "El número final depende del alcance de tu proyecto, lo definimos juntos en la primera reunión.",
    p1t: "Sitio Web",
    p1p: "Desde $300.000 ARS",
    p1d: "Landing o sitio institucional para mostrar tu negocio, tu catálogo o tus servicios online.",
    p2t: "Aplicación Web",
    p2p: "Desde $600.000 ARS",
    p2d: "Un sistema a medida: inventario, cobros, turnos. Armado alrededor de cómo funciona tu negocio.",
    p3t: "Mantenimiento",
    p3p: "Desde $30.000 ARS /mes",
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
    p1p,
    p1d,
    p2t,
    p2p,
    p2d,
    p3t,
    p3p,
    p3d,
  } = translations[language];

  const packages = [
    { title: p1t, price: p1p, text: p1d },
    { title: p2t, price: p2p, text: p2d },
    { title: p3t, price: p3p, text: p3d },
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
              }}
            >
              <Heading as="h3" mb="3" size="5">
                {pkg.title}
              </Heading>
              <Text
                as="div"
                mb="3"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  color: "var(--signal)",
                  letterSpacing: "-0.01em",
                }}
              >
                {pkg.price}
              </Text>
              <Text style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {pkg.text}
              </Text>
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
