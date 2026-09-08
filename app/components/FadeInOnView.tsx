"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

interface FadeInOnViewProps {
  children: ReactNode;
  index?: number;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  alternating?: boolean;
  secondaryDirection?: "left" | "right" | "up" | "down";
  threshold?: number;
}

const FadeInOnView = ({
  children,
  index = 0,
  delay = 50,
  direction = "left",
  alternating = false,
  secondaryDirection = "right",
  threshold = 0,
}: FadeInOnViewProps) => {
  const { ref: ioRef, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const nodeRef = useRef<HTMLDivElement | null>(null);
  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      nodeRef.current = node;
      ioRef(node);
    },
    [ioRef],
  );

  const [reduceMotion, setReduceMotion] = useState(false);
  const [initiallyVisible, setInitiallyVisible] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const handleChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  // Elements already inside the viewport on mount shouldn't wait on an
  // IntersectionObserver callback (it can be delayed or throttled, e.g. by
  // the tab not yet being visible/focused) — reveal them immediately.
  useLayoutEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const inViewport =
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.top < window.innerHeight &&
      rect.left < window.innerWidth;
    if (inViewport) setInitiallyVisible(true);
  }, []);

  const getTransform = (dir: "left" | "right" | "up" | "down") => {
    const distance = "20px";
    const transforms = {
      left: `translateX(-${distance})`,
      right: `translateX(${distance})`,
      up: `translateY(-${distance})`,
      down: `translateY(${distance})`,
    };
    return transforms[dir];
  };

  const currentDirection = alternating
    ? index % 2 === 0
      ? direction
      : secondaryDirection
    : direction;

  const animationDelay = index * delay;
  const visible = inView || reduceMotion || initiallyVisible;

  return (
    <div
      ref={setRefs}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : getTransform(currentDirection),
        transition: reduceMotion
          ? "none"
          : `opacity 0.5s ease-out ${animationDelay}ms, transform 0.5s ease-out ${animationDelay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnView;
