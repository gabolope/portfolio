"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  return (
    <nav className="py-3 px-4 mb-5 border-b border-(--accent-9) sm:text-xl">
      <Container>
        <Flex justify="between">
          <Link href="/">Gabriel Alejandro López</Link>
          <NavLinks />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;

const NavLinks = () => {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "/" },
    { label: "Contact", href: "/" },
    { label: "Resume", href: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <ul className="hidden md:flex space-x-10">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="transition-colors duration-200 hover:text-[var(--accent-9)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <Cross1Icon /> : <HamburgerMenuIcon />}
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute left-0 top-12 w-full  bg-[var(--color-background)] md:hidden">
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
  // Mobile:
};
