"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Background = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (theme === "dark") {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="relative h-full w-full bg-[var(--color-background)]">
          <div
            className="absolute rounded-full blur-[80px] opacity-50"
            style={{
              bottom: 0,
              right: "-20%",
              top: "-10%",
              height: "500px",
              width: "500px",
              background: `radial-gradient(circle farthest-side, var(--accent-9) 0%, var(--color-background) 100%)`,
              opacity: 0.3,
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 h-full w-full bg-[var(--color-background)]">
        <div
          className="absolute rounded-full blur-[80px]"
          style={{
            bottom: 0,
            right: "-20%",
            top: "-10%",
            height: "500px",
            width: "500px",
            background: `radial-gradient(circle farthest-side, var(--accent-9) 0%, var(--color-background) 100%)`,
            opacity: 0.4,
          }}
        />
      </div>
    </div>
  );
};
