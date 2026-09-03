"use client";

import { Box } from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ProjectImageShowcase.module.css";

interface Screen {
  mobile: string;
  desktop: string;
}

interface ProjectImageShowcaseProps {
  title: string;
  image: string;
  screens?: Screen[];
}

const CYCLE_MS = 4000;

const ProjectImageShowcase = ({
  title,
  image,
  screens,
}: ProjectImageShowcaseProps) => {
  const hasScreens = !!screens && screens.length > 0;

  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: none), (pointer: coarse)");
    setIsTouchDevice(mql.matches);
    const listener = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (!hasScreens) return;
    if (!isTouchDevice && !isHovering) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % screens!.length);
    }, CYCLE_MS);

    return () => clearInterval(id);
  }, [hasScreens, isTouchDevice, isHovering, screens]);

  if (!hasScreens) {
    return (
      <Box
        style={{
          position: "relative",
          aspectRatio: "5 / 3",
          border: "1px solid var(--line)",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover", borderRadius: "4px" }}
        />
      </Box>
    );
  }

  const current = screens![index];

  return (
    <Box
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <DeviceMockup screen={current} title={title} />
    </Box>
  );
};

const DeviceMockup = ({ screen, title }: { screen: Screen; title: string }) => (
  <Box className={styles.mockup}>
    <Box className={styles.desktopFrame}>
      <Image
        src={screen.desktop}
        alt={`${title} desktop screenshot`}
        fill
        style={{ objectFit: "cover" }}
      />
    </Box>
    <Box className={styles.mobileOverlay}>
      <Image
        src={screen.mobile}
        alt={`${title} mobile screenshot`}
        fill
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
    </Box>
  </Box>
);

export default ProjectImageShowcase;
