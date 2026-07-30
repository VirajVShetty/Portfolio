import { motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

// Verification platforms this section knows how to label/link. Add a cert
// with platform: "accredible" to have it show "Verify on Credential.net →"
// instead of Credly — no other changes needed.
const platforms = {
  credly: { label: "Credly", profileUrl: "https://www.credly.com/users/viraj-shetty.d917c426/badges/credly" },
  accredible: { label: "Credential.net", profileUrl: "https://www.credential.net/profile/virajshetty655837/wallet" },
} as const;

type Platform = keyof typeof platforms;

type Cert = {
  name: string;
  date: string;
  verifyUrl: string;
  platform: Platform;
  icon: string;
};

// Certifications grouped by issuer. Each issuer renders as one card; clicking
// it opens a window listing every credential under that issuer, each linking
// straight to its verification page.
const issuers: { name: string; icon: string; certs: Cert[] }[] = [
  {
    name: "Databricks",
    icon: "◆",
    certs: [
      {
        name: "Databricks Fundamentals",
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
        date: "Accredited 2026",
        verifyUrl: "https://credentials.databricks.com/bce813e0-1310-4656-8576-08bbfb48b354#acc.juzPptcw",
        platform: "credly",
        // TODO: Replace with real badge image:
        // import badgeImg from "@assets/databricks-genai-badge.png"
        icon: "✦",
      },
    ],
  },
  {
    name: "Snowflake",
    icon: "❄",
    certs: [
      // TODO: replace with your real Snowflake certification name, date, and
      // verify URL (and badge image, same as the Databricks ones above).
      {
        name: "Snowflake Certification - Hands on Essentials",
        date: "Accredited 2022",
        verifyUrl: "https://www.credly.com/badges/20655581-e3ef-4203-9865-d984122410d4",
        platform: "credly",
        icon: "❄",
      },
    ],
  },
  {
    name: "Tableau",
    icon: "◆",
    certs: [
      // TODO: replace with your real Snowflake certification name, date, and
      // verify URL (and badge image, same as the Databricks ones above).
      {
        name: "Tableau Consumer",
        date: "Accredited 2020",
        verifyUrl: "https://www.credly.com/badges/557180a9-0c84-4fc0-b945-63eec5d663f9",
        platform: "credly",
        icon: "❄",
      },
      {
        name: "Tableau Author",
        date: "Accredited 2020",
        verifyUrl: "https://www.credly.com/badges/29da9bba-c8f8-45ae-b931-89d0852295a0",
        platform: "credly",
        icon: "◆",
      },
      {
        name: "Tableau Analyst",
        date: "Accredited 2021",
        verifyUrl: "https://www.credly.com/badges/86cccdf5-249c-4765-a455-6a5014a1f61c",
        platform: "credly",
        icon: "❄",
      },
      {
        name: "Tableau Data Scientist",
        date: "Accredited 2020",
        verifyUrl: "https://www.credly.com/badges/b491de61-e748-49ac-a5d2-0507d019a08f",
        platform: "credly",
        icon: "◆",
      },
    ],
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
        {issuers.map((issuer, idx) => (
          <Dialog key={issuer.name}>
            <DialogTrigger asChild>
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col items-center bg-card border border-card-border rounded-2xl p-8 text-center hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_50px_-20px_rgba(79,70,229,0.2)] transition-all duration-300 cursor-pointer"
              >
                {/* Badge ring — TODO: swap fallback-icon for <img> once you have the badge file */}
                <div
                  className="w-24 h-24 rounded-full mb-5 p-[3px] flex items-center justify-center"
                  style={{ background: "conic-gradient(#4f46e5, #7c3aed, #4f46e5)" }}
                >
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    <span className="text-3xl">{issuer.icon}</span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-1">{issuer.name}</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {issuer.certs.length} {issuer.certs.length === 1 ? "credential" : "credentials"}
                </p>
                <span className="text-xs font-medium text-foreground border-b border-foreground/40 pb-px group-hover:opacity-60 transition-opacity">
                  View badges →
                </span>
              </motion.button>
            </DialogTrigger>

            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>{issuer.name}</DialogTitle>
                <DialogDescription>
                  Click a badge to verify the credential.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-3">
                {issuer.certs.map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-card border border-card-border rounded-xl p-4 hover:border-primary/40 hover:bg-foreground/5 transition-colors"
                  >
                    <div
                      className="w-14 h-14 flex-shrink-0 rounded-full p-[2px] flex items-center justify-center"
                      style={{ background: "conic-gradient(#4f46e5, #7c3aed, #4f46e5)" }}
                    >
                      <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                        <span className="text-xl">{cert.icon}</span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-foreground">{cert.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {cert.date} · via {platforms[cert.platform].label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Explicit close button — a second, clearly-labeled way to exit
                  the window in addition to clicking outside it. */}
              <DialogClose asChild>
                <button
                  type="button"
                  className="mt-2 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-full px-4 py-2 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Close
                </button>
              </DialogClose>
            </DialogContent>
          </Dialog>
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
