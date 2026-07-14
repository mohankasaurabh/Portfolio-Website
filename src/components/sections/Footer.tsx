import { Github, Linkedin, Mail } from "lucide-react";
import profile from "@/data/profile.json";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display text-xl">{profile.name}</div>
          <div className="text-xs text-muted-foreground font-mono mt-1">AI Engineer · Computer Vision · {new Date().getFullYear()}</div>
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent transition">
            <Github className="h-4 w-4" />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent transition">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-accent transition">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 Saurabh Kumar Mohanka. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
