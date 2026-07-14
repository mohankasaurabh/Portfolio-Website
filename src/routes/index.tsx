import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/common/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";

import { Experience } from "@/components/sections/Experience";
import { Journey } from "@/components/sections/Journey";
import { TechCloud } from "@/components/sections/TechCloud";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative noise">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <TechCloud />
        <Projects />
        <Experience />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
