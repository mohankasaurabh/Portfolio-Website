import { GraduationCap } from "lucide-react";
import education from "@/data/education.json";
import { GlassCard, Reveal, SectionHeading } from "@/components/common/primitives";

export function Education() {
  const e = education[0];
  const cgpaPct = (parseFloat(e.cgpa) / 10) * 100;
  return (
    <section id="education" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Education" title="Foundations." />
        <div className="mt-12">
          <Reveal>
            <GlassCard className="p-8 sm:p-12">
              <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/25 to-brand-cyan/25 border border-white/10">
                      <GraduationCap className="h-4 w-4 text-brand-cyan" />
                    </span>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.period}</div>
                  </div>
                  <h3 className="mt-4 font-display text-3xl sm:text-4xl">{e.school}</h3>
                  <div className="mt-1 text-muted-foreground">{e.degree}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{e.location}</div>
                </div>
                <div className="relative flex items-center justify-center">
                  <svg width="160" height="160" viewBox="0 0 160 160" className="-rotate-90">
                    <circle cx="80" cy="80" r="66" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="10" />
                    <circle
                      cx="80" cy="80" r="66" fill="none" strokeWidth="10" strokeLinecap="round"
                      stroke="url(#g)"
                      strokeDasharray={`${(cgpaPct / 100) * 2 * Math.PI * 66} ${2 * Math.PI * 66}`}
                    />
                    <defs>
                      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="oklch(0.7 0.2 290)" />
                        <stop offset="100%" stopColor="oklch(0.82 0.14 210)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute text-center">
                    <div className="font-display text-4xl">{e.cgpa}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">CGPA</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
