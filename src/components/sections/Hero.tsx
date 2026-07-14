import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "motion/react";
import profile from "@/data/profile.json";
import { ParticleField } from "@/components/common/ParticleField";
import { NeuralSphere } from "@/components/common/NeuralSphere";
import { TypingRoles } from "@/components/common/TypingRoles";
import { Magnetic } from "@/components/common/primitives";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <div aria-hidden className="orb h-[520px] w-[520px] -top-40 -left-40 bg-brand-violet" />
      <div aria-hidden className="orb h-[520px] w-[520px] top-40 -right-40 bg-brand-cyan" />
      <div aria-hidden className="orb h-[400px] w-[400px] bottom-0 left-1/3 bg-brand-emerald opacity-40" />
      <div aria-hidden className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0"><ParticleField /></div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-3 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-emerald" />
            </span>
            Available for AI Engineer roles
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-lg font-display italic">
            {profile.greeting}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
          >
            {"Saurabh Mohanka".split(" ").map((w, i) => (
              <motion.span key={i} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="inline-block mr-3">
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-6 text-2xl sm:text-3xl md:text-4xl font-display h-[1.4em]">
            <TypingRoles roles={profile.roles} />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {profile.tagline}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition">
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-accent transition">
                <Download className="h-4 w-4" /> Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-accent transition">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur hover:bg-accent transition">
                <Github className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/40 backdrop-blur hover:bg-accent transition">
                <Linkedin className="h-4 w-4" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative aspect-square max-w-[520px] mx-auto w-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-violet/25 via-brand-cyan/20 to-brand-emerald/25 blur-3xl" />
          <div className="absolute inset-4 rounded-full border border-white/10" />
          <div className="absolute inset-12 rounded-full border border-white/5" />
          <NeuralSphere />
          {/* orbiting labels */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 pointer-events-none">
            {["YOLO26", "ByteTrack", "OSNet", "PyTorch"].map((t, i) => (
              <div key={t} style={{ transform: `rotate(${i * 90}deg) translateY(-50%)` }} className="absolute left-1/2 top-1/2 origin-left">
                <div style={{ transform: `rotate(${-i * 90}deg) translateX(230px)` }}>
                  <span className="rounded-full border border-border bg-card/70 backdrop-blur px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{t}</span>
                </div>
              </div>
            ))}
          </motion.div>
          {/* floating bounding boxes */}
          <div className="absolute top-8 right-6 rounded-md border border-brand-emerald/70 bg-brand-emerald/10 px-2 py-0.5 text-[10px] font-mono text-brand-emerald backdrop-blur">person · 0.97</div>
          <div className="absolute bottom-14 left-4 rounded-md border border-brand-cyan/70 bg-brand-cyan/10 px-2 py-0.5 text-[10px] font-mono text-brand-cyan backdrop-blur">helmet · 0.92</div>
          <div className="absolute bottom-4 right-16 rounded-md border border-brand-violet/70 bg-brand-violet/10 px-2 py-0.5 text-[10px] font-mono text-brand-violet backdrop-blur">vest · 0.88</div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">scroll ↓</div>
    </section>
  );
}
