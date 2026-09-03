import type { CSSProperties } from "react";

type Leaf = {
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  sway: number;
  rotate: number;
  opacity: number;
};

type LeafStyle = CSSProperties & {
  "--x"?: string;
  "--y"?: string;
  "--size"?: string;
  "--duration"?: string;
  "--delay"?: string;
  "--sway"?: string;
  "--rotate"?: string;
  "--o"?: number;
};

const LEAF_COUNT = 26;

// Deterministic pseudo-random generator (seeded) — keeps SSR and client
// output identical while still spreading leaves out organically.
const seededRandom = (seed: number) => {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
};

const rand = seededRandom(20260903);

const LEAVES: Leaf[] = Array.from({ length: LEAF_COUNT }, (_, i) => {
  const x = ((i + rand()) / LEAF_COUNT) * 96 + 2;
  const y = rand() * 92 + 4;
  const size = 7 + rand() * 10;
  const duration = 20 + rand() * 22;
  const delay = -rand() * duration;
  const sway = (rand() - 0.5) * 64;
  const rotate = rand() * 360;
  const opacity = 0.16 + rand() * 0.16;

  return {
    x: `${x.toFixed(1)}%`,
    y: `${y.toFixed(1)}%`,
    size: Number(size.toFixed(1)),
    duration: Number(duration.toFixed(1)),
    delay: Number(delay.toFixed(1)),
    sway: Number(sway.toFixed(1)),
    rotate: Number(rotate.toFixed(0)),
    opacity: Number(opacity.toFixed(2)),
  };
});

export const Background = () => {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {LEAVES.map((leaf, i) => {
        const style: LeafStyle = {
          "--x": leaf.x,
          "--y": leaf.y,
          "--size": `${leaf.size}px`,
          "--duration": `${leaf.duration}s`,
          "--delay": `${leaf.delay}s`,
          "--sway": `${leaf.sway}px`,
          "--rotate": `${leaf.rotate}deg`,
          "--o": leaf.opacity,
        };
        return <span key={i} className="leaf" style={style} />;
      })}
    </div>
  );
};
