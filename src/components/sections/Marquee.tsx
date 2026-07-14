const items = [
  "Python", "PyTorch", "YOLO11", "OpenCV", "ByteTrack", "OSNet", "InsightFace",
  "Docker", "AWS", "Flask", "React", "Node.js", "TypeScript", "Cursor", "Claude",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="relative border-y border-border/60 bg-card/20 py-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex whitespace-nowrap marquee">
        {loop.map((t, i) => (
          <span key={i} className="mx-6 font-display text-2xl sm:text-3xl text-muted-foreground/70 hover:text-foreground transition">
            {t} <span className="mx-6 text-brand-violet">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
