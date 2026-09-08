"use client";

import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import FadeInOnView from "../components/FadeInOnView";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";
import { getProject, getProjectDomain } from "../data/projects";

// How long each slide stays on screen before auto-advancing.
const AUTOPLAY_MS = 4000;

const translations = {
  en: {
    eyebrowIndex: "02",
    eyebrowLabel: "Real Cases",
    title: "Work Delivered",
    visit: "Visit site",
    goTo: "Go to",
    slideStatus: "Project",
    of: "of",
  },
  es: {
    eyebrowIndex: "02",
    eyebrowLabel: "Casos reales",
    title: "Trabajos hechos",
    visit: "Ver sitio",
    goTo: "Ir a",
    slideStatus: "Proyecto",
    of: "de",
  },
};

// Landing pages (client sites) first, then in-house/demo applications.
// Facts and copy (name, URL, screenshots, note) live in app/data/projects.ts
// — this just picks the display order.
const CASE_ORDER = [
  "thermoreleaf",
  "kreart",
  "herald",
  "critter",
  "songmanager",
] as const;

const cases = CASE_ORDER.map((id) => {
  const project = getProject(id);
  return {
    client: project.title,
    domain: getProjectDomain(project.href),
    href: project.href,
    image: project.screens[0].desktop,
    note: project.note,
  };
});

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const subscribeToReducedMotion = (callback: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () =>
  window.matchMedia(REDUCED_MOTION_QUERY).matches;

const getReducedMotionServerSnapshot = () => false;

const ServicesProof = () => {
  const { language } = useLanguage();
  const { eyebrowIndex, eyebrowLabel, title, visit, goTo, slideStatus, of } =
    translations[language];

  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  // Reduced motion: never auto-advance, only manual navigation remains.
  const autoplaying = playing && !hovering && !reduceMotion;

  useEffect(() => {
    if (!autoplaying) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % cases.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [autoplaying]);

  // Any deliberate manual navigation stops autoplay for good, until the
  // viewer explicitly presses play again.
  const goToSlide = (index: number) => {
    setActive(index);
    setPlaying(false);
  };

  const activeCase = cases[active];

  return (
    <section className="mb-16">
      <SectionHeading index={eyebrowIndex} label={eyebrowLabel} title={title} />
      <FadeInOnView index={0} delay={150}>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={title}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setHovering(false);
            }
          }}
        >
          <span className="sr-only" aria-live="polite">
            {`${slideStatus} ${active + 1} ${of} ${cases.length}: ${activeCase.client}`}
          </span>

          <div
            className="marks"
            style={{
              overflow: "hidden",
              border: "1px solid var(--line)",
              background: "var(--surface)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: `${cases.length * 100}%`,
                transform: `translateX(-${(100 / cases.length) * active}%)`,
                transition: reduceMotion
                  ? "none"
                  : "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              {cases.map((item, index) => (
                <a
                  key={item.client}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col"
                  style={{ width: `${100 / cases.length}%`, flexShrink: 0 }}
                  aria-hidden={index !== active}
                  tabIndex={index === active ? 0 : -1}
                >
                  <div
                    className="flex items-center"
                    style={{
                      gap: "8px",
                      padding: "10px 16px",
                      borderBottom: "1px solid var(--line)",
                    }}
                  >
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "var(--line)",
                          flexShrink: 0,
                        }}
                      />
                    ))}
                    <Text
                      style={{
                        marginLeft: "8px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--muted)",
                        letterSpacing: "0.02em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.domain}
                    </Text>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-stretch">
                    <div className="border-b sm:border-b-0 sm:border-r border-(--line)">
                      <div
                        style={{
                          position: "relative",
                          aspectRatio: "16 / 10",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={`${item.client} — ${item.domain}`}
                          fill
                          style={{ objectFit: "cover", objectPosition: "top" }}
                          sizes="(min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-center"
                      style={{ padding: "26px 28px" }}
                    >
                      <div
                        className="flex items-center justify-between"
                        style={{ marginBottom: "10px" }}
                      >
                        <Heading as="h3" size="5">
                          {item.client}
                        </Heading>
                        <TbArrowUpRight
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          style={{ color: "var(--signal)", flexShrink: 0 }}
                          size={20}
                        />
                      </div>
                      <Text style={{ color: "var(--muted)", lineHeight: 1.65 }}>
                        {item.note[language]}
                      </Text>
                      <span className="sr-only">{visit}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            className="flex items-center"
            style={{ gap: "6px", marginTop: "18px" }}
          >
            {cases.map((item, index) => {
              const isPast = index < active;
              const isActive = index === active;
              const animate = isActive && autoplaying;
              const resetByHover = isActive && hovering && !animate;
              return (
                <button
                  key={item.client}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`${goTo} ${item.client}`}
                  aria-current={isActive}
                  className="flex flex-1 items-center border-0 bg-transparent p-0"
                  style={{ height: "20px", cursor: "pointer" }}
                >
                  <span
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "3px",
                      background: "var(--line)",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      key={isActive ? `${active}-${autoplaying}` : undefined}
                      className={animate ? "proof-progress-fill" : undefined}
                      style={{
                        position: "absolute",
                        inset: 0,
                        transformOrigin: "left",
                        background: "var(--signal)",
                        ...(animate
                          ? ({
                              "--proof-duration": `${AUTOPLAY_MS}ms`,
                            } as React.CSSProperties)
                          : {
                              transform:
                                isPast || (isActive && !resetByHover)
                                  ? "scaleX(1)"
                                  : "scaleX(0)",
                            }),
                      }}
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </FadeInOnView>
    </section>
  );
};

export default ServicesProof;
