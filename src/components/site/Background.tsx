export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* moving grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "grid-pan 22s linear infinite",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%)",
        }}
      />

      {/* radial glows */}
      <div
        className="absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--blue), transparent 62%)", animation: "float-slow 16s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, var(--violet), transparent 62%)", animation: "float-slow 20s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute bottom-0 -left-40 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-[0.15]"
        style={{ background: "radial-gradient(circle, var(--cyan), transparent 62%)", animation: "float-slow 24s ease-in-out infinite" }}
      />

      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
