import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowUpRight, Github, PlayCircle } from 'lucide-react';
import { projects, GITHUB_PROFILE_URL } from '@/data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto section-anchor bg-card/20 rounded-3xl border border-border/50 my-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all projects
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link
              href={`/projects#${project.slug}`}
              className="group h-full flex flex-col bg-card border border-card-border rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.15)]"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-3 text-[11px] font-medium rounded-full bg-primary/10 text-primary border border-primary/30">
                      <PlayCircle className="w-3 h-3" />
                      Live demo
                    </span>
                  )}
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-primary/80">
                    {project.subtitle}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-background text-xs font-medium text-muted-foreground rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Find more on GitHub */}
        <motion.a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: projects.length * 0.1 }}
          className="group flex flex-col items-center justify-center text-center bg-card border border-card-border rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.15)]"
        >
          <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
            <Github className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-2">
            More on GitHub
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Browse the rest of my projects and code →
          </p>
        </motion.a>
      </div>
    </section>
  );
}
