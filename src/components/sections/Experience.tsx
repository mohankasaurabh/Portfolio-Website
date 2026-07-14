import { Briefcase } from "lucide-react";
import experience from "@/data/experience.json";
import { GlassCard, Reveal, SectionHeading } from "@/components/common/primitives";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Experience" title="Where I've shipped." />
        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-violet/60 via-brand-cyan/40 to-transparent" />
          <div className="space-y-8">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative pl-12 sm:pl-16">
                  <div className="absolute left-0 sm:left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card">
                    <Briefcase className="h-3.5 w-3.5 text-brand-cyan" />
                  </div>
                  <GlassCard className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="font-display text-2xl">{e.company}</h3>
                        <div className="text-sm text-muted-foreground">{e.role}</div>
                      </div>
                      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.period}</div>
                    </div>
                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
                      {e.bullets.map((b, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-emerald" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {e.tech.map((t) => (
                        <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
