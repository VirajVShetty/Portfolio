import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="relative pt-32 pb-12 px-6 overflow-hidden section-anchor border-t border-border/40">
      {/* "CONNECT" background word */}
      <div
        className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 font-display font-bold whitespace-nowrap pointer-events-none select-none text-foreground"
        style={{ fontSize: "clamp(70px, 15vw, 180px)", opacity: 0.04 }}
      >
        CONNECT
      </div>

      {/* Radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center justify-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Let's talk
          </span>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 max-w-xl mx-auto leading-tight">
            Open to conversations about credit risk, model governance, and applied ML.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <a
              href="mailto:virajvshetty47@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              Email me →
            </a>
            <a
              href="https://linkedin.com/in/virajvshetty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full hover:border-primary/50 transition-all group"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <span>© 2026 Viraj Shetty · Dallas, TX</span>
            <div className="flex items-center gap-6">
              <a href="mailto:virajvshetty47@gmail.com" className="hover:text-foreground transition-colors">Email</a>
              <a href="https://www.linkedin.com/in/virajshetty47" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://github.com/virajVshetty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
