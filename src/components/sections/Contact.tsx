import { useState } from "react";
import { toast } from "sonner";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import profile from "@/data/profile.json";
import { GlassCard, Magnetic, Reveal, SectionHeading } from "@/components/common/primitives";

export function Contact() {
  const [sending, setSending] = useState(false);
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div aria-hidden className="orb h-[500px] w-[500px] left-1/3 top-10 bg-brand-violet opacity-25" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something intelligent."
          description="I'm open to full-time AI Engineer roles, contract engagements and interesting problems in computer vision."
        />
        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <Reveal>
            <GlassCard className="p-8 h-full flex flex-col">
              <div className="space-y-4">
                {[
                  { Icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                  { Icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                  { Icon: MapPin, label: profile.location, href: null },
                  { Icon: Github, label: "github.com/mohankasaurabh", href: profile.socials.github },
                  { Icon: Linkedin, label: "linkedin.com/in/saurabhkumarmohanka", href: profile.socials.linkedin },
                ].map((it, i) => (
                  <a key={i} href={it.href ?? undefined} target={it.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 hover:border-brand-cyan/60 hover:bg-accent/50 transition group">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-violet/25 to-brand-cyan/25 border border-white/10 text-brand-cyan">
                      <it.Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition truncate">{it.label}</span>
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-emerald animate-pulse" />
                  Currently accepting new work
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSending(true);
                  setTimeout(() => {
                    setSending(false);
                    toast.success("Message queued — I'll get back to you.");
                    (e.target as HTMLFormElement).reset();
                  }, 900);
                }}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea required rows={6} name="message" className="mt-1.5 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/20 transition resize-none" placeholder="Tell me about the role or project..." />
                </div>
                <Magnetic>
                  <button
                    type="submit"
                    disabled={sending}
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-50"
                  >
                    {sending ? "Sending..." : "Send message"}
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </Magnetic>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required={required}
        type={type}
        name={name}
        className="mt-1.5 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none focus:border-brand-cyan/60 focus:ring-2 focus:ring-brand-cyan/20 transition"
      />
    </div>
  );
}
