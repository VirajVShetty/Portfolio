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
    <div className="w-full py-8 overflow-hidden bg-card/30 border-y border-border/50 relative">
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-[200%] animate-marquee">
        <div className="flex w-1/2 justify-around items-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              {item.icon && <item.icon className="w-6 h-6" />}
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center">
          {items.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              {item.icon && <item.icon className="w-6 h-6" />}
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}