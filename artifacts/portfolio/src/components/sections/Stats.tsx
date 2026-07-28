import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "75%", label: "Turnaround time reduced" },
    { value: "$1M", label: "Projected delinquent loans prevented" },
    { value: "95%", label: "Execution time reduction (PSI/AUC pipeline)" },
    { value: "85%", label: "Manual investigation time cut" },
    { value: "12", label: "Active models governed" },
    { value: "0.709", label: "Best AUC on 2.3M+ loan dataset" },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col border-l border-primary/30 pl-6"
          >
            <span className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
              {stat.value}
            </span>
            <span className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}