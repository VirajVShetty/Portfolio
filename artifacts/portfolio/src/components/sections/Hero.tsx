import { motion } from "framer-motion";
import {
  SiLinkedin,
  SiGithub,
  SiHackerrank,
  SiCodechef,
  SiTableau,
  SiKaggle,
  SiCredly,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { BadgeCheck } from "lucide-react";

const chips = [
  "Model Risk Management",
  "XGBoost",
  "SR 26-2 / OCC 11-12",
  "Credit Risk",
];

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/virajshetty47/", icon: SiLinkedin },
  { name: "GitHub", href: "https://github.com/VirajVShetty", icon: SiGithub },
  { name: "HackerRank", href: "https://www.hackerrank.com/viraj_shetty", icon: SiHackerrank },
  { name: "CodeChef", href: "https://www.codechef.com/users/viraj713", icon: SiCodechef },
  { name: "Tableau Public", href: "https://public.tableau.com/profile/viraj2833#!/", icon: SiTableau },
  { name: "Kaggle", href: "https://www.kaggle.com/virajvshetty", icon: SiKaggle },
  { name: "Twitter / X", href: "https://x.com/vshetty47", icon: FaXTwitter },
  // TODO: swap "#" for your real Credly profile URL
  { name: "Credly", href: "https://www.credly.com/users/viraj-shetty.d917c426/edit/badges/credly", icon: SiCredly },
  // TODO: swap "#" for your real Credential.net / Accredible profile URL
  // (no dedicated brand icon exists in Simple Icons for this one, using a generic badge icon instead)
  { name: "Credential.net", href: "https://www.credential.net/profile/virajshetty655837/wallet", icon: BadgeCheck },
];

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden section-anchor">
      {/* Oversized background letterforms */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display font-bold leading-none whitespace-nowrap text-foreground select-none"
          style={{ fontSize: "clamp(90px, 22vw, 280px)", opacity: 0.04 }}>
          SHETTY
        </span>
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-600 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-700 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Floating chips */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {chips.map((chip, i) => (
            <span
              key={chip}
              className="font-mono text-[11px] px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground"
              style={{ animation: `floaty 5s ease-in-out infinite`, animationDelay: `${-i * 1.2}s` }}
            >
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground mb-4 tracking-tighter leading-[1.02]">
            Making credit models<br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              trustworthy at scale.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Data Scientist II at Elevate Credit, working in Model Risk Management — governing, monitoring, and validating the models that decide who gets credit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#experience"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(79,70,229,0.35)]"
          >
            View experience →
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground border border-border rounded-full font-medium transition-all hover:bg-card hover:border-muted-foreground/30 hover:scale-105 active:scale-95"
          >
            See featured project
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-16"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              aria-label={social.name}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-10px_rgba(79,70,229,0.35)] transition-all duration-200"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 font-mono text-[11px]"
          style={{ animation: "bounce-cue 2s ease-in-out infinite" }}
        >
          <span>SCROLL</span>
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  );
}