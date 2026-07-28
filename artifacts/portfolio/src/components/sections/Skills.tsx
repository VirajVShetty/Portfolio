import { motion } from "framer-motion";

const categories = [
  {
    name: "Data Science",
    skills: ["Python", "R", "SQL", "PySpark", "Pandas", "NumPy", "PyTorch"],
  },
  {
    name: "ML / Modeling",
    skills: ["XGBoost", "scikit-learn", "Reject Inference", "Stratified K-Fold", "NLP", "Hypothesis Testing"],
  },
  {
    name: "Data & Cloud",
    skills: ["Snowflake", "Databricks", "Azure", "AWS", "Jupyter", "Census API"],
  },
  {
    name: "Reporting & Governance",
    skills: ["Power BI", "Tableau", "SR 26-2 / OCC 11-12", "Model Risk Management", "Fair Lending"],
  },
  {
    name: "MLOps & Tools",
    skills: ["Docker", "CI/CD", "JIRA", "Git"],
  },
  {
    name: "AI Tools",
    skills: ["Claude AI", "Microsoft Copilot"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto section-anchor">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The toolkit.</h2>
        <div className="w-20 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 mb-4">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
