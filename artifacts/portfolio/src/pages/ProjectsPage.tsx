import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Maximize2,
  RefreshCw,
} from 'lucide-react';
import {
  featuredProject,
  otherProjects,
  GITHUB_PROFILE_URL,
} from '@/data/projects';

/** Streamlit Cloud honours ?embed=true to strip its own chrome inside an iframe. */
function embedUrl(url: string) {
  return url.includes('?') ? `${url}&embed=true` : `${url}?embed=true`;
}

function StreamlitEmbed({ url, title }: { url: string; title: string }) {
  const [nonce, setNonce] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // If the app hasn't painted after a while it's probably cold-starting.
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    setSlow(false);
    const t = setTimeout(() => setSlow(true), 6000);
    return () => clearTimeout(t);
  }, [nonce]);

  return (
    <div className="rounded-2xl border border-card-border bg-card overflow-hidden">
      {/* Browser-chrome style header */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-border/60 bg-background/50">
        <div className="flex items-center gap-2 min-w-0">
          <div className="hidden sm:flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="text-xs font-mono text-muted-foreground truncate">
            {url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            type="button"
            onClick={() => {
              setLoaded(false);
              setNonce((n) => n + 1);
            }}
            aria-label="Reload the embedded app"
            title="Reload"
            className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the app in a new tab"
            title="Open in new tab"
            className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="relative bg-background">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6 pointer-events-none">
            <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            <p className="text-sm text-muted-foreground">
              {slow
                ? 'Streamlit Cloud apps sleep when idle — this one may take a few seconds to wake up.'
                : 'Loading the live dashboard…'}
            </p>
          </div>
        )}

        <iframe
          key={nonce}
          src={embedUrl(url)}
          title={title}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          allow="clipboard-write; fullscreen"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[600px] md:h-[780px] border-0 bg-transparent"
        />
      </div>

      <div className="px-4 py-3 border-t border-border/60 bg-background/50">
        <p className="text-xs text-muted-foreground">
          Live embed of the deployed app. If it doesn&apos;t load,{' '}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            open it directly
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  // Deep-link support: /projects#credit-risk-model scrolls to that section,
  // otherwise start at the top of the page.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>

          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium bg-foreground text-background px-4 py-2 rounded-full transition-transform hover:scale-105 active:scale-95"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-16 pb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Projects
          </h1>
          <div className="w-20 h-1 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A live demo of my financial analytics dashboard, plus the modelling
            work behind it. Everything here is open source — repo links on each
            project.
          </p>
        </motion.div>

        {/* Featured project — live embed */}
        {featuredProject && (
          <motion.section
            id={featuredProject.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="scroll-mt-24 mb-24"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30">
                  Featured · Live demo
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold">
                  {featuredProject.title}
                </h2>
                <div className="text-sm font-medium text-primary/80 mt-1">
                  {featuredProject.subtitle}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 active:scale-95"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open live app
                  </a>
                )}
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
              {featuredProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-card text-xs font-medium text-muted-foreground rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            {featuredProject.liveUrl && (
              <StreamlitEmbed
                url={featuredProject.liveUrl}
                title={featuredProject.title}
              />
            )}

            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-8 max-w-4xl">
              {featuredProject.highlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Other projects */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            More work
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-8">
          {otherProjects.map((project, idx) => (
            <motion.section
              key={project.slug}
              id={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="scroll-mt-24 bg-card border border-card-border rounded-2xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-semibold">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-primary/80 mt-1">
                    {project.subtitle}
                  </div>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors flex-shrink-0"
                >
                  <Github className="w-4 h-4" />
                  View repo
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <ul className="space-y-3 mb-6 max-w-3xl">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background text-xs font-medium text-muted-foreground rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.section>
          ))}

          {/* More on GitHub */}
          <motion.a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col items-center justify-center text-center bg-card border border-card-border rounded-2xl p-10 hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.15)]"
          >
            <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2">
              More on GitHub
            </h3>
            <p className="text-muted-foreground">
              Browse the rest of my projects and code →
            </p>
          </motion.a>
        </div>
      </main>
    </div>
  );
}
