import { motion } from "framer-motion";

// Verification platforms this section knows how to label/link. Add a cert
// with platform: "accredible" to have it show "Verify on Credential.net →"
// instead of Credly — no other changes needed.
const platforms = {
  credly: { label: "Credly", profileUrl: "https://www.credly.com/users/viraj-shetty.d917c426/badges/credly" },
  accredible: { label: "Credential.net", profileUrl: "https://www.credential.net/profile/virajshetty655837/wallet" },
} as const;

type Platform = keyof typeof platforms;

const certs: {
  name: string;
  issuer: string;
  date: string;
  verifyUrl: string;
  platform: Platform;
  icon: string;
}[] = [
  {
    name: "Databricks Fundamentals",
    issuer: "Databricks",
    date: "Accredited 2026",
    verifyUrl: "https://credentials.databricks.com/bce813e0-1310-4656-8576-08bbfb48b354#acc.xHuna90z",
    platform: "credly",
    // TODO: Replace with real badge image:
    // import badgeImg from "@assets/databricks-fundamentals-badge.png"
    // then use: <img src={badgeImg} alt="Databricks Fundamentals" className="w-full h-full object-cover" />
    icon: "◆",
  },
  {
    name: "Databricks Generative AI Fundamentals",
    issuer: "Databricks",
    date: "Accredited 2026",
    verifyUrl: "https://credentials.databricks.com/bce813e0-1310-4656-8576-08bbfb48b354#acc.juzPptcw",
    platform: "credly",
    // TODO: Replace with real badge image:
    // import badgeImg from "@assets/databricks-genai-badge.png"
    icon: "✦",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto section-anchor">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          Certifications
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Credentialed where it counts.</h2>
        <div className="w-20 h-1 bg-primary rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col items-center bg-card border border-card-border rounded-2xl p-8 text-center hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_50px_-20px_rgba(79,70,229,0.2)] transition-all duration-300"
          >
            {/* Badge ring — TODO: swap fallback-icon for <img> once you have the badge file */}
            <div
              className="w-24 h-24 rounded-full mb-5 p-[3px] flex items-center justify-center"
              style={{ background: "conic-gradient(#4f46e5, #7c3aed, #4f46e5)" }}
            >
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                {/* TODO: Replace the span below with your badge image:
                    <img src={badgeImg} alt={cert.name} className="w-full h-full object-cover" /> */}
                <span className="text-3xl">{cert.icon}</span>
              </div>
            </div>

            <h3 className="text-base font-semibold text-foreground mb-1">{cert.name}</h3>
            <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
            <p className="font-mono text-xs text-muted-foreground/60 mb-5">{cert.date}</p>
            <a
              href={cert.verifyUrl}
              className="text-xs font-medium text-foreground border-b border-foreground/40 pb-px hover:opacity-60 transition-opacity"
            >
              Verify on {platforms[cert.platform].label} →
            </a>
          </motion.div>
        ))}

        {/* "More on the way" card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center bg-card border border-card-border rounded-2xl p-8 text-center hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_50px_-20px_rgba(79,70,229,0.2)] transition-all duration-300"
        >
          <h3 className="text-base font-semibold text-foreground mb-2">More on the way</h3>
          <p className="text-sm text-muted-foreground mb-5">Currently building out additional certifications and badges.</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(Object.keys(platforms) as Platform[]).map((key) => (
              <a
                key={key}
                href={platforms[key].profileUrl}
                className="text-xs font-medium text-foreground border border-foreground/20 px-4 py-2 rounded-full hover:bg-foreground/10 transition-colors"
              >
                {platforms[key].label} profile →
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
