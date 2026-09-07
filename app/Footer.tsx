"use client";
import { Container, Flex } from "@radix-ui/themes";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useLanguage } from "./context/LanguageContext";

const translations = {
  en: {
    copyright: "© 2026 Gabriel López. All rights reserved.",
  },
  es: {
    copyright: "© 2026 Gabriel López. Todos los derechos reservados.",
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const { copyright } = translations[language];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer
      className="mt-20 py-14"
      style={{
        background: "#10140f",
        borderTop: "1px solid rgba(231, 233, 225, 0.14)",
      }}
    >
      <Container>
        <Flex direction="column" align="center" justify="center" gap="5">
          <button onClick={scrollToTop} aria-label="Scroll to top">
            <MdKeyboardDoubleArrowUp
              size={30}
              className="glow hover:scale-110 transition-transform duration-200"
              style={{ color: "#e7e9e1" }}
            />
          </button>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: "#8b9186",
            }}
          >
            {copyright}
          </p>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
