"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Container, Flex } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="py-3 p-5 pl-5 pr-5 md:pl-20 md:pr-20 mb-5 border-b-2 border-(--accent-9) sm:text-xl ">
      <Container>
        <Flex justify="between" align="center">
          <Link
            href="/"
            style={{
              fontSize: "var(--font-size-7)",
              fontWeight: "var(--font-weight-medium)",
            }}
            className="glow"
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
  const links = [
    { label: "About", href: "#about", openInNewTab: false },
    { label: "Skills", href: "#skills", openInNewTab: false },
    { label: "Projects", href: "#projects", openInNewTab: false },
    { label: "Contact", href: "#contact", openInNewTab: false },
    { label: "Resume", href: "/resume.pdf", openInNewTab: true },
  ];

  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
                className="glow"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="glow"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <MdLightMode size={25} />
          ) : (
            <MdDarkMode size={25} />
          )}
        </button>
      </div>

      {/* Mobile - Theme Toggle + Hamburger ONLY */}
      <div className="flex sm:hidden items-center gap-4">
        <button
          onClick={toggleTheme}
          className="glow"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <MdLightMode size={25} />
          ) : (
            <MdDarkMode size={25} />
          )}
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
