"use client";

import { Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useRef, useState, useEffect } from "react";
import styles from "./HoverBar.module.css";

const HoverBar = () => {
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const updateLineHeight = () => {
      if (iconContainerRef.current) {
        const containerHeight = iconContainerRef.current.offsetHeight;
        const screenHeight = window.innerHeight;
        const calculatedHeight = screenHeight / 2 - containerHeight / 2 - 10;
        setLineHeight(Math.max(calculatedHeight, 0));
      }
    };

    updateLineHeight();
    window.addEventListener("resize", updateLineHeight);
    return () => window.removeEventListener("resize", updateLineHeight);
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className="fixed left-6 top-0 h-screen z-50"
      display={{ initial: "none", md: "flex" }}
      role="navigation"
      aria-label="Social links"
    >
      <Flex direction="column" align="center" gap="5" ref={iconContainerRef}>
        {iconLinks.map((link, index) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.target}
            rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            className={`group relative p-2 transition-all duration-300 ${styles.iconEnter} ${styles[`iconEnter${index + 1}`]}`}
            aria-label={link.label}
          >
            <div className="glow">{link.icon}</div>
          </Link>
        ))}
      </Flex>

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.75 rounded-t-md bg-(--accent-9) transition-all duration-300"
        style={{ height: `${lineHeight}px` }}
      />
    </Flex>
  );
};

export default HoverBar;

const iconLinks = [
  {
    href: "mailto:gabriellopezmdp@gmail.com?subject=Contact%20from%20Portfolio&body=Hi,%20I%20saw%20your%20online%20portfolio...",
    icon: <MdOutlineEmail size={30} />,
    label: "Email",
    target: "_self",
  },
  {
    href: "https://www.linkedin.com/in/gabriel-alejandro-l%C3%B3pez/",
    icon: <FaLinkedin size={30} />,
    label: "LinkedIn",
    target: "_blank",
  },
  {
    href: "https://github.com/gabolope",
    icon: <FaGithub size={30} />,
    label: "GitHub",
    target: "_blank",
  },
];
