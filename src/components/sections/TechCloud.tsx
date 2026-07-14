import { motion } from "motion/react";
import techs from "@/data/techCloud.json";
import { Reveal, SectionHeading } from "@/components/common/primitives";

export function TechCloud() {
  return (
    <section id="stack" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Stack" title="The tools I reach for." description="Full-stack coverage — from data pipelines and model training to real-time inference services and web dashboards." />
        <div className="relative mt-16 h-[360px] sm:h-[420px]">
          <div aria-hidden className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-full border border-border" />
            <div className="absolute h-48 w-48 sm:h-60 sm:w-60 rounded-full border border-border/70" />
            <div className="absolute h-32 w-32 sm:h-40 sm:w-40 rounded-full border border-border/50" />
          </div>
          <Reveal>
            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-8">
              {techs.map((t, i) => {
                const size = 12 + ((i * 37) % 10);
                return (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 15) * 0.03, duration: 0.5 }}
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="rounded-full border border-border bg-card/60 backdrop-blur px-3.5 py-1.5 font-mono text-muted-foreground hover:text-foreground hover:border-brand-cyan/60 transition cursor-default"
                    style={{ fontSize: `${size}px` }}
                  >
                    {t}
                  </motion.span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
