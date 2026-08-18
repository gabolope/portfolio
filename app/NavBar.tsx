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
    <nav className=" sticky top-0 z-40 py-3 p-5 pl-5 pr-5 md:pl-20 md:pr-20 mb-5 border-b-2 border-(--accent-9) sm:text-xl bg-[var(--color-background)]">
      <Container>
        <Flex justify="between" align="center">
          <Link
            href="/"
            className="glow text-lg md:text-lg lg:text-2xl font-medium"
          >
            Gabriel López
          </Link>
          <NavLinks />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;

const NavLinks = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { about, skills, projects, contact, resume } =
    translations[language].navbar;

  const links = [
    { label: about, href: "#about", openInNewTab: false },
    { label: skills, href: "#skills", openInNewTab: false },
    { label: projects, href: "#projects", openInNewTab: false },
    { label: contact, href: "#contact", openInNewTab: false },
    { label: resume, href: "/resume.pdf", openInNewTab: true },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Desktop - Links + Theme Toggle */}
      <div className="hidden sm:flex items-center gap-4">
        <ul className="flex space-x-10">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.openInNewTab ? "_blank" : ""}
                className="glow md:text-sm lg:text-xl font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        |
        <button
          onClick={toggleTheme}
          className="glow"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <MdDarkMode size={25} />
          ) : (
            <MdLightMode size={25} />
          )}
        </button>
        <button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          className="p-1 glow md:text-sm lg:text-2xl"
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
            <MdDarkMode size={25} />
          ) : (
            <MdLightMode size={25} />
          )}
        </button>
        <button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          className="m-1 glow"
        >
          {language === "en" ? "EN" : "ES"}
        </button>
        <button onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </button>
      </div>

      {/* Mobile Menu - Only appears when open */}
      {open && (
        <ul className="absolute left-0 top-12 w-full bg-[var(--color-background)] md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block px-6 py-4 transition-colors hover:text-[var(--accent-9)]"
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
