"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

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
  threshold = 0.1,
}: FadeInOnViewProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

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

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : getTransform(currentDirection),
        transition: `opacity 0.5s ease-out ${animationDelay}ms, transform 0.5s ease-out ${animationDelay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnView;
