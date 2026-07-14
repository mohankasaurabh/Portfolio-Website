import { MapPin, Sparkles } from "lucide-react";
import portrait from "@/assets/portrait.png";
import { GlassCard, Reveal, SectionHeading } from "@/components/common/primitives";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div aria-hidden className="orb h-96 w-96 -left-32 top-24 bg-brand-violet opacity-30" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-violet/40 via-brand-cyan/30 to-brand-emerald/40 blur-2xl opacity-70" />
            <GlassCard className="relative p-2">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={portrait} alt="Saurabh Kumar Mohanka" className="w-full h-auto object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="rounded-full glass-strong px-3 py-1 text-xs font-mono">
                    <MapPin className="inline h-3 w-3 mr-1" /> Pune, IN
                  </div>
                  <div className="rounded-full glass-strong px-3 py-1 text-xs font-mono">
                    <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-brand-emerald animate-pulse" />
                    Open to work
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="About" title="Turning pixels into production intelligence." />
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-[15px] sm:text-base">
            <Reveal delay={0.1}>
              <p>
                I'm a Computer Science graduate from Lovely Professional University, specializing in
                <span className="text-foreground"> Computer Vision</span> and
                <span className="text-foreground"> Deep Learning</span>. I design and ship
                production-grade AI systems — from custom-trained YOLO models to full multi-object tracking
                pipelines with cross-camera re-identification.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                My focus is real-time video analytics: <span className="text-foreground">YOLO11 / YOLO26</span>,
                <span className="text-foreground"> ByteTrack</span>, <span className="text-foreground">OSNet ReID</span>,
                <span className="text-foreground"> InsightFace</span>, wrapped in Flask / Docker services that
                stream analytics live. I've built systems that run at 25+ FPS across 4+ concurrent camera streams.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Currently exploring the frontier — LLMs, Agentic AI, MCP and LangChain — and
                <span className="text-foreground"> actively looking for AI Engineer opportunities</span> where I can
                deploy tracking, detection and analytics systems at scale.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
              {[
                { k: "Grad", v: "2026" },
                { k: "Focus", v: "CV / DL" },
                { k: "Base", v: "Pune" },
              ].map((it) => (
                <GlassCard key={it.k} className="p-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{it.k}</div>
                  <div className="mt-1 font-display text-2xl">{it.v}</div>
                </GlassCard>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-brand-cyan" />
              Currently learning: LLMs · Agentic AI · MCP · LangChain
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
