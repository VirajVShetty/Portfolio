import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#about", sec: "about" },
  { name: "Experience", href: "#experience", sec: "experience" },
  { name: "Projects", href: "#projects", sec: "projects" },
  { name: "Certs", href: "#certifications", sec: "certifications" },
  { name: "Skills", href: "#skills", sec: "skills" },
];

function Navbar({ activeSection }: { activeSection: string }) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[min(92vw,780px)]">
      <div className="relative flex items-center justify-between gap-4 bg-background/90 backdrop-blur-md border border-border/60 rounded-full px-3 py-2.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]">
        {/* Progress bar */}
        <div className="absolute bottom-[-6px] left-6 right-6 h-[2px] bg-border/30 rounded-full overflow-hidden">
          <div
            id="nav-progress"
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-[width] duration-100"
            style={{ width: "0%" }}
          />
        </div>

        {/* VS logo */}
        <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-display font-bold text-[13px] text-background"
          style={{ background: "linear-gradient(135deg, #818cf8, #34d399)" }}>
          VS
        </div>

        {/* Nav links */}
        <ul className="hidden sm:flex items-center gap-1 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={cn(
                  "px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap",
                  activeSection === link.sec
                    ? "bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:virajvshetty47@gmail.com"
          className="flex-shrink-0 bg-foreground text-background text-[13px] font-medium px-4 py-2 rounded-full transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          Contact →
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
