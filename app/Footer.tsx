"use client";
import { Container, Flex } from "@radix-ui/themes";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const Footer = () => {
  const { language } = useLanguage();
  const { copyright } = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer
      className="mt-20 py-14 border-t border-(--line)"
      style={{ background: "var(--surface)" }}
    >
      <Container>
        <Flex direction="column" align="center" justify="center" gap="5">
          <button onClick={scrollToTop} aria-label="Scroll to top">
            <MdKeyboardDoubleArrowUp
              size={30}
              className="glow hover:scale-110 transition-transform duration-200"
            />
          </button>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.06em",
              color: "var(--muted)",
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
