import { 
  SiPython, SiSnowflake, SiApachespark, 
  SiDatabricks, SiMysql, SiDocker, SiR, 
  SiJira, SiScikitlearn 
} from "react-icons/si";

export default function Marquee() {
  const items = [
    { name: "Python", icon: SiPython },
    { name: "XGBoost", icon: null },
    { name: "Snowflake", icon: SiSnowflake },
    { name: "Power BI", icon: null },
    { name: "PySpark", icon: SiApachespark },
    { name: "Databricks", icon: SiDatabricks },
    { name: "SQL", icon: SiMysql },
    { name: "Docker", icon: SiDocker },
    { name: "R", icon: SiR },
    { name: "JIRA", icon: SiJira },
    { name: "Claude AI", icon: null },
    { name: "scikit-learn", icon: SiScikitlearn },
  ];

  return (
    <div className="w-full py-6 sm:py-8 overflow-hidden bg-card/30 border-y border-border/50 relative">
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        <div className="flex shrink-0 items-center gap-x-6 sm:gap-x-10 pr-6 sm:pr-10">
          {items.map((item, idx) => (
            <div key={idx} className="flex shrink-0 items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors">
              {item.icon && <item.icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />}
              <span className="font-medium text-sm sm:text-base whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-x-6 sm:gap-x-10 pr-6 sm:pr-10" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex shrink-0 items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors">
              {item.icon && <item.icon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />}
              <span className="font-medium text-sm sm:text-base whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}