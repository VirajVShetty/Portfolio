import { motion } from "framer-motion";
import { ShieldCheck, LineChart, Activity, Scale, Database, Users } from "lucide-react";

export default function WhatIBring() {
  const cards = [
    {
      icon: ShieldCheck,
      title: "Model Governance & Lifecycle",
      description: "SR 26-2, OCC 11-12, inventory management, retirement workflows."
    },
    {
      icon: LineChart,
      title: "Credit Risk Modeling",
      description: "XGBoost, reject inference, stratified CV, AUC/KS/lift."
    },
    {
      icon: Activity,
      title: "Automated Monitoring",
      description: "PSI, performance tracking, Snowflake→Power BI pipelines."
    },
    {
      icon: Scale,
      title: "Regulatory & Compliance",
      description: "Third-party vendor validation, discriminatory bias reviews."
    },
    {
      icon: Database,
      title: "Data Engineering & ETL",
      description: "PySpark, Databricks, Snowflake stored procedures, Census API."
    },
    {
      icon: Users,
      title: "Stakeholder Communication",
      description: "Executive model reviews, Copilot meeting notes, 24hr status SLAs."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What I Bring</h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-card border border-card-border rounded-xl p-8 hover:bg-card/80 transition-colors overflow-hidden"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-xl" />
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <card.icon className="w-32 h-32 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}