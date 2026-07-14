import { ArrowUpRight, BookOpen, Github } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export type Project = {
  id: string;
  title: string;
  blurb: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  image: string;
  accent: string;
  overview: string;
  features: string[];
  architecture: string[];
  links: { github: string | null; docs: string | null };
};

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const open = !!project;
  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent className="max-w-3xl max-h-[88vh] overflow-y-auto p-0 border border-border bg-card/95 backdrop-blur-xl">
        {project && (
          <>
            <div className="relative aspect-[16/8] overflow-hidden">
              <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent`} />
              <div className={`absolute inset-x-0 -bottom-px h-px bg-gradient-to-r ${project.accent} opacity-80`} />
            </div>
            <div className="p-6 sm:p-8">
              <DialogHeader className="text-left">
                <DialogTitle className="font-display text-3xl leading-tight">{project.title}</DialogTitle>
                <DialogDescription className="mt-2 text-base text-muted-foreground">{project.overview}</DialogDescription>
              </DialogHeader>

              <section className="mt-8">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Performance</h4>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl border border-border bg-background/50 px-3 py-2.5">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{m.label}</div>
                      <div className="font-display text-lg mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <section>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Key Features</h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${project.accent}`} />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Architecture</h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    {project.architecture.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${project.accent}`} />
                        <span className="text-foreground/90">{a}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="mt-8">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Tech Stack</h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">{t}</span>
                  ))}
                </div>
              </section>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium transition hover:opacity-90">
                    <Github className="h-3.5 w-3.5" /> GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <a
                  href={project.links.docs ?? project.links.github ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-4 py-2 text-sm font-medium transition hover:bg-background"
                >
                  <BookOpen className="h-3.5 w-3.5" /> Documentation
                </a>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
