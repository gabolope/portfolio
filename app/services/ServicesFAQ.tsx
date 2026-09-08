"use client";

import { Heading, Text } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

// Must match the grid-template-rows transition duration in globals.css
// (.faq-answer) — the native `open` attribute is only removed once the
// close transition has actually finished, see FaqItem below.
const FAQ_CLOSE_MS = 300;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  // `open` is the native <details> attribute (controls what's actually
  // rendered/exposed to assistive tech). `expanded` drives the visual
  // grid-row transition and is deliberately allowed to briefly lag behind
  // `open` on close, so the collapse animation has something to animate
  // before the content disappears. See globals.css for why.
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const closeTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimeout.current !== null)
        window.clearTimeout(closeTimeout.current);
    };
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (closeTimeout.current !== null) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }

    if (!open) {
      setOpen(true);
      // Double rAF: let the browser paint the newly-mounted, still-collapsed
      // content first, then flip the class so the 0fr -> 1fr change has a
      // real starting point to transition from.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setExpanded(true));
      });
      return;
    }

    setExpanded(false);
    if (prefersReducedMotion()) {
      setOpen(false);
    } else {
      closeTimeout.current = window.setTimeout(() => {
        setOpen(false);
        closeTimeout.current = null;
      }, FAQ_CLOSE_MS);
    }
  };

  return (
    <details
      className={`faq-item${expanded ? " faq-item--expanded" : ""}`}
      open={open}
    >
      <summary onClick={handleToggle}>
        <Heading
          as="h3"
          size={{ initial: "4", sm: "5" }}
          weight="medium"
          style={{ margin: 0 }}
        >
          {question}
        </Heading>
        <span className="faq-marker" aria-hidden="true" />
      </summary>
      <div className="faq-answer">
        <div>
          <Text as="p">{answer}</Text>
        </div>
      </div>
    </details>
  );
};

const translations = {
  en: {
    eyebrowIndex: "05",
    eyebrowLabel: "Before We Start",
    title: "FAQ",
    q1t: "How long does a project take?",
    q1d: "A simple site is usually ready in 2 to 3 weeks. A custom web application takes between 4 and 8 weeks, depending on the scope we define in the proposal.",
    q2t: "Who pays for hosting and the domain?",
    q2d: "Hosting and the domain are on you. I help you choose and set them up the first time. If you'd rather not deal with it, I can set them up for you and add the invoices to my costs.",
    q3t: "Can I edit the content myself after delivery?",
    q3d: "Yes. I set the site up so you can update text and images on your own. If you'd rather not deal with it, I can handle it as part of the Maintenance plan.",
    q4t: "What if I need a change in the future?",
    q4d: "A one-off change, like swapping a photo or tweaking some text, can be quoted separately, no strings attached. If you have the Maintenance plan active, minor changes are included. Bigger changes (a redesign, adding sections or pages) are billed separately.",
  },
  es: {
    eyebrowIndex: "05",
    eyebrowLabel: "Antes de Arrancar",
    title: "Preguntas Frecuentes",
    q1t: "¿Cuánto tarda un proyecto?",
    q1d: "Un sitio simple  suele estar listo en 2 a 3 semanas. Una aplicación web con funcionalidades a medida lleva entre 4 y 8 semanas, según el alcance que definimos en la propuesta.",
    q2t: "¿Quién paga el hosting y el dominio?",
    q2d: "El hosting y el dominio corren por tu cuenta. Te ayudo a elegirlos y configurarlos la primera vez. Si preferís puedo configurarlos por vos y adjunto las facturas a mis costos.",
    q3t: "¿Puedo editar el contenido yo mismo/a después de la entrega?",
    q3d: "Sí. Dejo el sitio armado para que puedas actualizar textos e imágenes por tu cuenta. Si preferís no ocuparte de eso, lo puedo hacer yo dentro del plan de Mantenimiento.",
    q4t: "¿Qué pasa si necesito un cambio más adelante?",
    q4d: "Un cambio puntual, como cambiar una foto o ajustar un texto, se puede cotizar aparte, sin compromiso. Si tenés el plan de Mantenimiento activo, los cambios menores están incluidos. Cambios más grandes (rediseño de la web, agregar secciones o páginas) se cobran por separado. ",
  },
};

// Static Spanish copy for the FAQPage structured data. Kept independent of
// the language toggle (es is the default SSR locale, see LanguageContext).
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: translations.es.q1t,
      acceptedAnswer: { "@type": "Answer", text: translations.es.q1d },
    },
    {
      "@type": "Question",
      name: translations.es.q2t,
      acceptedAnswer: { "@type": "Answer", text: translations.es.q2d },
    },
    {
      "@type": "Question",
      name: translations.es.q3t,
      acceptedAnswer: { "@type": "Answer", text: translations.es.q3d },
    },
    {
      "@type": "Question",
      name: translations.es.q4t,
      acceptedAnswer: { "@type": "Answer", text: translations.es.q4d },
    },
  ],
};

const ServicesFAQ = () => {
  const { language } = useLanguage();
  const {
    eyebrowIndex,
    eyebrowLabel,
    title,
    q1t,
    q1d,
    q2t,
    q2d,
    q3t,
    q3d,
    q4t,
    q4d,
  } = translations[language];

  const items = [
    { q: q1t, a: q1d },
    { q: q2t, a: q2d },
    { q: q3t, a: q3d },
    { q: q4t, a: q4d },
  ];

  return (
    <section className="mb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <div className="faq-list">
        {items.map((item, index) => (
          <FadeInOnView key={item.q} index={index} delay={110}>
            <FaqItem question={item.q} answer={item.a} />
          </FadeInOnView>
        ))}
      </div>
    </section>
  );
};

export default ServicesFAQ;
