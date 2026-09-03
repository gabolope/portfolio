export const Background = () => {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "var(--background)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(circle at 50% 0%, black, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 0%, black, transparent 78%)",
        }}
      />
    </div>
  );
};
