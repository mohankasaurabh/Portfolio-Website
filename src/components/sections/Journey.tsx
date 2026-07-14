import journey from "@/data/journey.json";
import { Reveal, SectionHeading } from "@/components/common/primitives";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  School,
  BookOpen,
  GraduationCap,
  Laptop,
  BrainCircuit,
  Briefcase,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  school: School,
  book: BookOpen,
  cap: GraduationCap,
  laptop: Laptop,
  brain: BrainCircuit,
  briefcase: Briefcase,
  rocket: Rocket,
  sparkles: Sparkles,
};

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-28 sm:py-36">
      <div
        aria-hidden
        className="orb h-96 w-96 right-10 top-20 bg-brand-violet opacity-25"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="From school student to AI engineer."
        />

        <div ref={ref} className="relative mt-16">
          {/* Base line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-px bg-border" />
          {/* Animated line */}
          <motion.div
            style={{ height }}
            className="absolute left-6 md:left-1/2 top-0 w-px -translate-x-px bg-gradient-to-b from-brand-violet via-brand-cyan to-brand-emerald"
          />

          <div className="space-y-12 md:space-y-16">
            {journey.map((j, i) => {
              const Icon = ICONS[j.icon] ?? Sparkles;
              const isLeft = i % 2 === 0;
              const isCurrent = "current" in j && j.current;

              return (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="relative md:grid md:grid-cols-2 md:gap-12">
                    {/* Node */}
                    <div className="absolute left-6 md:left-1/2 top-4 z-10 -translate-x-1/2">
                      <div
                        className={`relative flex h-11 w-11 items-center justify-center rounded-full border bg-background ${
                          isCurrent
                            ? "border-brand-cyan shadow-[0_0_24px_hsl(var(--brand-cyan)/0.6)]"
                            : "border-brand-violet/60"
                        }`}
                      >
                        {isCurrent && (
                          <span className="absolute inset-0 rounded-full bg-brand-cyan/30 animate-ping" />
                        )}
                        <Icon
                          size={18}
                          className={
                            isCurrent ? "text-brand-cyan" : "text-brand-violet"
                          }
                        />
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`pl-16 md:pl-0 ${
                        isLeft
                          ? "md:col-start-1 md:pr-12 md:text-right"
                          : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`group relative rounded-2xl border border-border/70 bg-card/40 backdrop-blur p-5 sm:p-6 transition-colors hover:border-brand-cyan/50 hover:bg-card/70 ${
                          isCurrent
                            ? "border-brand-cyan/60 shadow-[0_0_40px_-10px_hsl(var(--brand-cyan)/0.6)]"
                            : ""
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          <span
                            className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-widest ${
                              isCurrent
                                ? "border-brand-cyan/60 bg-brand-cyan/10 text-brand-cyan"
                                : "border-brand-violet/40 bg-brand-violet/10 text-brand-violet"
                            }`}
                          >
                            {j.year}
                          </span>
                          {isCurrent && (
                            <span className="inline-flex items-center rounded-full bg-brand-emerald/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand-emerald">
                              Now
                            </span>
                          )}
                        </div>
                        <h3 className="mt-3 font-display text-xl sm:text-2xl leading-tight">
                          {j.title}
                        </h3>
                        {j.place && (
                          <div className="mt-1 text-sm text-foreground/70">
                            {j.place}
                          </div>
                        )}
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                          {j.detail}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
