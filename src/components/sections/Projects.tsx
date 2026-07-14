import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import projectsData from "@/data/projects.json";
import { Reveal, SectionHeading, TiltCard } from "@/components/common/primitives";
import { ProjectModal, type Project } from "./ProjectModal";

const projects = projectsData as Project[];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div aria-hidden className="orb h-[500px] w-[500px] -left-40 top-1/3 bg-brand-emerald opacity-25" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Featured AI Projects"
          description="Production-grade Computer Vision and Machine Learning systems designed for real-world deployment."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.id} delay={0.08 * idx} className="h-full">
              <TiltCard className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl glass p-px text-left transition-all duration-500 hover:-translate-y-1"
                >
                  {/* gradient border glow on hover */}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r ${p.accent} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60`}
                  />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.2xl)-1px)] bg-card/70 backdrop-blur-xl">
                    {/* mouse light */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "radial-gradient(400px circle at var(--mx) var(--my), rgba(255,255,255,0.08), transparent 45%)" }}
                    />

                    {/* image (top ~55%) */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent" />
                      <div className="absolute left-3 top-3 rounded-full glass-strong px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest">
                        0{idx + 1} / 0{projects.length}
                      </div>
                    </div>

                    {/* info (bottom ~45%) */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg leading-tight line-clamp-1">{p.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{p.blurb}</p>

                      <div className="mt-4 grid grid-cols-3 gap-1.5">
                        {p.metrics.map((m) => (
                          <div key={m.label} className="rounded-lg border border-border bg-background/40 px-2 py-1.5">
                            <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground line-clamp-1">{m.label}</div>
                            <div className="font-display text-sm mt-0.5 line-clamp-1">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1">
                        {p.tech.map((t) => (
                          <span key={t} className="rounded-full border border-border bg-muted/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">{t}</span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center gap-2 pt-5">
                        {p.links.github && (
                          <a
                            href={p.links.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`${p.title} on GitHub`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 transition hover:bg-background hover:-translate-y-0.5"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-2 text-xs font-medium text-background transition group-hover:opacity-90">
                          Learn More
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
