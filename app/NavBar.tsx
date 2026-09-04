"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Container, Flex } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./translations";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-40 py-3 p-5 pl-5 pr-5 md:pl-20 md:pr-20 mb-5 border-b border-(--line) bg-[var(--background)]">
      <Container>
        <Flex justify="between" align="center">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 glow"
          >
            <Brand />
          </Link>
          <NavLinks />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;

const Brand = () => {
  return (
    <>
      <span
        aria-hidden
        className="inline-block w-6 h-6 shrink-0 bg-current transition-colors"
        style={{
          WebkitMaskImage: "url(/logoBlack.svg)",
          maskImage: "url(/logoBlack.svg)",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
      <span
        className="text-lg md:text-lg lg:text-xl font-semibold"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
      >
        Gabriel López
      </span>
    </>
  );
};

const NavLinks = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { about, skills, projects, contact, resume } =
    translations[language].navbar;

  const links = [
    { label: about, href: "#about" },
    { label: skills, href: "#skills" },
    { label: projects, href: "#projects" },
    { label: contact, href: "#contact" },
  ];

  const navFont = {
    fontFamily: "var(--font-mono)",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Desktop - Links + Theme Toggle */}
      <div className="hidden sm:flex items-center gap-5">
        <ul className="flex space-x-8">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="glow text-xs font-medium"
                style={navFont}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="text-xs font-medium px-3 py-1.5 border border-(--line) rounded-[3px] transition-colors hover:border-(--signal) hover:text-(--signal)"
          style={navFont}
        >
          {resume}
        </Link>
        <button
          onClick={toggleTheme}
          className="glow"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <MdDarkMode size={20} />
          ) : (
            <MdLightMode size={20} />
          )}
        </button>
        <button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          className="p-1 glow text-xs"
          style={navFont}
        >
          {language === "en" ? "EN" : "ES"}
        </button>
      </div>

      {/* Mobile - Theme Toggle + Hamburger ONLY */}
      <div className="flex sm:hidden items-center gap-4 ">
        <button
          onClick={toggleTheme}
          className="glow"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <MdDarkMode size={22} />
          ) : (
            <MdLightMode size={22} />
          )}
        </button>
        <button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          className="m-1 glow text-xs"
          style={navFont}
        >
          {language === "en" ? "EN" : "ES"}
        </button>
        <button onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>
      </div>

      {/* Mobile Menu - Only appears when open */}
      {open && (
        <ul className="absolute left-0 top-full w-full bg-[var(--background)] border-t border-(--line) md:hidden">
          {[...links, { label: resume, href: "/resume.pdf" }].map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block px-6 py-4 text-sm transition-colors hover:text-(--signal)"
                style={navFont}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
