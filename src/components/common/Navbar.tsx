import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Download } from "lucide-react";
import nav from "@/data/navigation.json";
import profile from "@/data/profile.json";
import { ThemeToggle } from "./ThemeToggle";
import { Magnetic } from "./primitives";

export function Navbar() {
  const { scrollY } = useScroll();
  const py = useTransform(scrollY, [0, 120], [16, 8]);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.header
      style={{ paddingTop: py, paddingBottom: py }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? "bg-background/60 backdrop-blur-xl border-b border-border/60" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-violet via-brand-cyan to-brand-emerald text-primary-foreground font-display text-lg">
            <span className="text-black/90">S</span>
          </span>
          <span className="font-mono text-sm tracking-tight hidden sm:inline">{profile.shortName}<span className="text-muted-foreground">.dev</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/40 backdrop-blur-md px-1.5 py-1">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition rounded-full hover:bg-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Magnetic className="hidden sm:block">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              <Download className="h-3.5 w-3.5" /> Resume
            </a>
          </Magnetic>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="flex flex-col gap-1">
              <span className={`h-0.5 w-4 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 w-4 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-4 bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-3 mx-5 rounded-2xl border border-border bg-card/90 backdrop-blur-xl p-2">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm rounded-lg hover:bg-accent">{n.label}</a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
