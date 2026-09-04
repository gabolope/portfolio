"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();
  const label = translations[language].buttons.backToTop;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="/"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-(--line) bg-(--surface) text-(--fg) shadow-md transition-all duration-300 hover:border-(--signal) hover:text-(--accent-fg) hover:bg-(--signal) ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <FaArrowUp size={16} />
    </Link>
  );
};

export default BackToTop;
