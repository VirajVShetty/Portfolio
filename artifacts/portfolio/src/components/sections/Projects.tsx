import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Credit Risk Model",
      subtitle: "Lending Club (2.3M Loans)",
      description: "Built XGBoost credit risk model on 2.3M+ Lending Club loans. Applied fuzzy augmentation reject inference to incorporate 27M+ declined applications and correct accept-only sample bias. Tuned via stratified 5-fold CV → 0.709 AUC / 0.303 KS. Segment analysis across grade, DTI, and FICO bands.",
      tags: ["XGBoost", "Reject Inference", "Python", "Stratified CV"]
    },
    {
      title: "Fraud Detection Model",
      subtitle: "Wells Fargo Transactions",
      description: "Cleaned and prepared 1M rows of transaction data. One-hot encoded categoricals, feature engineering. Implemented XGBoost with grid + random search hyperparameter tuning → 93% accuracy.",
      tags: ["XGBoost", "Feature Engineering", "GridSearchCV", "Python"]
    },
    {
      title: "Model Monitoring Pipeline",
      subtitle: "Performance Tracking Automation",
      description: "Automated variable stability (PSI) and performance (AUC, KS, lift) tracking for 10 active models. Parameterized Jupyter notebooks + engineered Snowflake-to-Power BI pipeline → 95% execution time reduction.",
      tags: ["Snowflake", "Power BI", "Python", "PSI/AUC"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto section-anchor bg-card/20 rounded-3xl border border-border/50 my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col bg-card border border-card-border rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.15)]"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">{project.title}</h3>
                <div className="text-sm font-medium text-primary/80">{project.subtitle}</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="px-3 py-1 bg-background text-xs font-medium text-muted-foreground rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}