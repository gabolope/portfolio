"use client";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="mt-20 py-16 ">
      <Container>
        <Flex direction="column" align="center" justify="center" gap="6">
          <button onClick={scrollToTop} aria-label="Scroll to top">
            <MdKeyboardDoubleArrowUp
              size={50}
              className="glow hover:scale-110 transition-transform duration-200"
            />
          </button>
          <p>© 2026 Gabriel López. All rights reserved.</p>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
