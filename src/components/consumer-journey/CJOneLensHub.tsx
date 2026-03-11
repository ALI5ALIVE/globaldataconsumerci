import { motion } from "framer-motion";
import { Eye, BarChart3, Shield, Lightbulb, ShoppingCart, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Eye,
    name: "Strategic Intelligence",
    value: "See what's coming 18 months out",
    data: "Global trend foresight",
    color: "hsl(217 100% 40%)",
  },
  {
    icon: BarChart3,
    name: "Market Intelligence",
    value: "Size any opportunity instantly",
    data: "110 countries · 1,000+ segments",
    color: "hsl(200 90% 45%)",
  },
  {
    icon: Shield,
    name: "Competitive Intelligence",
    value: "Know every move in real time",
    data: "25,000 companies tracked",
    color: "hsl(195 85% 50%)",
  },
  {
    icon: Lightbulb,
    name: "Innovation Intelligence",
    value: "Validate concepts with evidence",
    data: "8-week validated sprints",
    color: "hsl(160 70% 40%)",
  },
  {
    icon: ShoppingCart,
    name: "Sales Intelligence",
    value: "Win listings with proof",
    data: "Evidence-backed sell stories",
    color: "hsl(280 60% 50%)",
  },
];

const CJOneLensHub = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-4">
      {/* Solution cards row */}
      <div className="flex gap-3 w-full max-w-4xl justify-center flex-wrap">
        {solutions.map((sol, i) => {
          const Icon = sol.icon;
          return (
            <motion.div
              key={sol.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center rounded-lg border border-border bg-card p-3 w-[150px] shadow-sm"
              style={{ borderTopColor: sol.color, borderTopWidth: 3 }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-2"
                style={{ backgroundColor: `${sol.color}20`, color: sol.color }}
              >
                <Icon className="w-4 h-4" />
              </div>
              <p className="text-xs font-bold text-foreground leading-tight mb-1">{sol.name}</p>
              <p className="text-[11px] text-primary font-medium leading-tight mb-1.5">{sol.value}</p>
              <p className="text-[10px] text-muted-foreground italic">{sol.data}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Connecting lines visual */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      {/* Ava AI card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="flex items-center gap-3 rounded-xl border-2 bg-card px-5 py-3 shadow-md"
        style={{ borderColor: "hsl(35 80% 45%)" }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, hsl(35 80% 45%), hsl(45 90% 55%))" }}
        >
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="text-left">
          <p className="text-sm font-bold text-foreground">
            Ava <span className="text-muted-foreground font-normal text-xs ml-1">AI Intelligence Assistant</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Surfaces patterns across all five solutions — so your teams don't have to.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CJOneLensHub;
