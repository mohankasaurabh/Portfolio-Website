import * as Icons from "lucide-react";
import certifications from "@/data/certifications.json";
import { GlassCard, Reveal, SectionHeading } from "@/components/common/primitives";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Certifications" title="Continued learning." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => {
            const Icon = (Icons as any)[c.icon] || Icons.Award;
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <GlassCard className="p-6 sm:p-8 group">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/25 to-brand-cyan/25 border border-white/10 text-brand-cyan">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.date}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{c.title}</h3>
                  <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
