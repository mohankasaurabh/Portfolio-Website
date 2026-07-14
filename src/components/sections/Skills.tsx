import * as Icons from "lucide-react";
import { motion } from "motion/react";
import skills from "@/data/skills.json";
import { GlassCard, Reveal, SectionHeading } from "@/components/common/primitives";

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div aria-hidden className="orb h-96 w-96 right-0 top-40 bg-brand-cyan opacity-25" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A toolbox tuned for production AI."
          description="Full-stack coverage — from data pipelines and model training to real-time inference services and web dashboards."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => {
            const Icon = (Icons as any)[cat.icon] || Icons.Sparkles;
            return (
              <Reveal key={cat.category} delay={i * 0.05}>
                <GlassCard className="p-6 h-full group">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl">{cat.category}</h3>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20 border border-white/10 text-brand-cyan">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {cat.items.map((s) => (
                      <li key={s.name}>
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-foreground/90">{s.name}</span>
                          <span className="text-muted-foreground">{s.level}</span>
                        </div>
                        <div className="mt-1.5 h-1.5 rounded-full bg-muted overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-emerald"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
