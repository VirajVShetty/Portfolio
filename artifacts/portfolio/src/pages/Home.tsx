import { useEffect, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import WhatIBring from "@/components/sections/WhatIBring";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    // Scroll progress bar
    const progressEl = document.getElementById("nav-progress");
    const onScroll = () => {
      if (!progressEl) return;
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      progressEl.style.width = `${pct}%`;
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Active section observer
    const sectionIds = ["about", "experience", "projects", "certifications", "skills", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) setActiveSection(id);
            });
          },
          { rootMargin: "-30% 0px -70% 0px" }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      document.removeEventListener("scroll", onScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <WhatIBring />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}
