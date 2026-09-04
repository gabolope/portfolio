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
const FADE_MS = 1000;

const ProjectImageShowcase = ({
  title,
  image,
  screens,
}: ProjectImageShowcaseProps) => {
  const hasScreens = !!screens && screens.length > 0;

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!hasScreens) return;

    const id = setInterval(() => {
      setIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % screens!.length;
      });
    }, CYCLE_MS);

    return () => clearInterval(id);
  }, [hasScreens, screens]);

  useEffect(() => {
    if (prevIndex === null) return;
    const timeout = setTimeout(() => setPrevIndex(null), FADE_MS);
    return () => clearTimeout(timeout);
  }, [prevIndex]);

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
  const previous = prevIndex !== null ? screens![prevIndex] : null;

  return (
    <Box className={styles.stage}>
      <Box className={styles.desktopFrame}>
        {previous && (
          <Image
            src={previous.desktop}
            alt={`${title} desktop screenshot`}
            fill
            style={{ objectFit: "cover" }}
          />
        )}
        <Image
          key={index}
          src={current.desktop}
          alt={`${title} desktop screenshot`}
          fill
          style={{ objectFit: "cover" }}
          className={previous ? styles.imageEnter : undefined}
        />
      </Box>
      <Box className={styles.mobileOverlay}>
        {previous && (
          <Image
            src={previous.mobile}
            alt={`${title} mobile screenshot`}
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        )}
        <Image
          key={index}
          src={current.mobile}
          alt={`${title} mobile screenshot`}
          fill
          style={{ objectFit: "cover", borderRadius: "10px" }}
          className={previous ? styles.imageEnter : undefined}
        />
      </Box>
    </Box>
  );
};

export default ProjectImageShowcase;
