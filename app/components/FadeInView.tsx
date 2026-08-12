"use client";

import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface FadeInOnViewProps {
  children: ReactNode;
  index?: number;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
}

const FadeInOnView = ({
  children,
  index = 0,
  delay = 50,
  direction = "left",
}: FadeInOnViewProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getTransform = () => {
    const distance = "20px";
    const transforms = {
      left: `translateX(-${distance})`,
      right: `translateX(${distance})`,
      up: `translateY(-${distance})`,
      down: `translateY(${distance})`,
    };
    return transforms[direction];
  };

  const animationDelay = index * delay;

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translate(0)" : getTransform(),
        transition: `all 0.5s ease-out ${animationDelay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnView;
