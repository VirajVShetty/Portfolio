import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Scientist II",
    company: "Elevate Credit",
    location: "Dallas, TX",
    date: "Oct 2025 — Present",
    bullets: [
      "Governed the model development lifecycle, replacing email-based reviews with structured leadership alignment meetings — cutting turnaround time 75%.",
      "Presented monthly and quarterly model performance reviews to internal leadership and bank partners, flagging underperforming models and driving strategy changes. Retired 2 underperforming models in a single review.",
      "Owned lifecycle management for 10–12 active models, including retirement of deprecated ones, with real-time status updates delivered within 24 hours.",
      "Coordinated third-party vendor validation and fair lending reviews to ensure compliance with SR 26-2 / OCC 11-12.",
    ],
  },
  {
    role: "Data Scientist I",
    company: "Elevate Credit",
    location: "Dallas, TX",
    date: "Aug 2023 — Oct 2025",
    bullets: [
      "Built XGBoost credit risk model with reject inference and Docker + CI/CD deployment — reducing projected delinquent loans by $1M.",
      "Automated PSI, AUC, KS, and lift tracking for 10 active models via parameterized Jupyter notebooks and a Snowflake-to-Power BI pipeline — reducing execution time 95%.",
      "Designed ad-hoc analytical views for charge-off benchmarking, roll-rate analysis, and re-parameterization comparisons — reducing delinquent population 60%.",
      "Enhanced an automated underwriting lookup query using Claude AI to resolve fund/no-fund conflicts — cutting manual investigation time 85%.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Loopback Analytics",
    location: "Dallas, TX",
    date: "Jun 2022 — Dec 2022",
    bullets: [
      "Analyzed client feasibility requirements using JIRA and wrote Snowflake stored procedures — optimizing execution time and space by 20%.",
      "Identified 5 key business metrics and ran hypothesis testing on patient data — improving treatment success rate by 20%.",
      "Used PySpark and Databricks to clean and ETL socio-economic data from the Census API — reducing null values 30%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto section-anchor">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Where the work happened.</h2>
        <div className="w-20 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-card border border-card-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(79,70,229,0.2)] transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-foreground">{exp.role}</h3>
                <div className="text-primary font-medium text-sm mt-1">
                  {exp.company} · {exp.location}
                </div>
              </div>
              <span className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-1">{exp.date}</span>
            </div>

            <ul className="space-y-3">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="text-muted-foreground flex gap-3 leading-relaxed text-sm">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
