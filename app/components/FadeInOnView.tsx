"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  index?: number;
  threshold?: number;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  alternating?: boolean;
  secondaryDirection?: "left" | "right" | "up" | "down";
}

const FadeInOnView = ({
  children,
  index = 0,
  delay = 50,
  threshold = 0.25,
  direction = "left",
  alternating = false,
  secondaryDirection = "right",
}: Props) => {
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

  // Si alternating es true, alterna entre direction y secondaryDirection
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
        transition: `all 0.5s ease-out ${animationDelay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnView;
