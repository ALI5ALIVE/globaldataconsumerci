import { MousePointer2, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { solutionDeepDives } from "@/data/solutionDeepDives";

interface SolutionValuePanelProps {
  activeSolution: string | null;
}

// Map wheel segment names to solution IDs
const segmentToSolutionId: Record<string, string> = {
  "Strategic Intelligence": "strategic",
  "Market Intelligence": "market",
  "Competitor Intelligence": "competitive",
  "Innovation Intelligence": "innovation",
  "Sales Intelligence": "sales",
};

const SolutionValuePanel = ({ activeSolution }: SolutionValuePanelProps) => {
  const solutionId = activeSolution ? segmentToSolutionId[activeSolution] : null;
  const deepDive = solutionId 
    ? solutionDeepDives.find(s => s.id === solutionId) 
    : null;

  if (!deepDive) {
    return (
      <div className="h-full min-h-[180px] max-h-[340px] flex items-center justify-center bg-card/30 border border-border/30 rounded-xl p-3">
        <div className="text-center">
          <MousePointer2 className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">
            Hover over a segment to explore our intelligence solutions
          </p>
        </div>
      </div>
    );
  }

  const IconComponent = deepDive.icon;
  const firstPain = deepDive.painToCapability[0];

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={deepDive.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="h-full min-h-[180px] max-h-[340px] bg-card/50 border rounded-xl p-2.5 overflow-hidden"
        style={{ borderColor: `${deepDive.color}40` }}
      >
        {/* Header: Icon + Title */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${deepDive.color}20` }}
          >
            <IconComponent className="w-4 h-4" style={{ color: deepDive.color }} />
          </div>
          <h3 className="text-base font-bold text-foreground">{deepDive.label}</h3>
        </div>
        
        {/* JTBD Section */}
        <div className="mb-1.5 p-1.5 bg-card/60 rounded-lg border border-border/50">
          <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
            Jobs to Be Done
          </p>
          <p className="text-[11px] text-foreground leading-snug">
            <span className="text-primary font-medium">When</span> {deepDive.jtbd.when}, {" "}
            <span className="text-primary font-medium">I want to</span> {deepDive.jtbd.iWantTo} {" "}
            <span className="text-primary font-medium">so that</span> {deepDive.jtbd.soThat}.
          </p>
        </div>
        
        {/* Pain to Outcome - Vertical stacked layout */}
        <div className="mb-1.5 p-1.5 bg-card/60 rounded-lg border border-border/50">
          <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
            From Pain to Outcome
          </p>
          <div className="flex flex-col gap-0.5">
            {/* Pain */}
            <div className="px-2 py-1 rounded-md bg-destructive/10 border border-destructive/20">
              <span className="text-[11px] text-destructive">{firstPain.pain}</span>
            </div>
            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="w-3 h-3 text-muted-foreground" />
            </div>
            {/* Capability */}
            <div className="px-2 py-1 rounded-md bg-card border border-border">
              <span className="text-[11px] text-foreground">{firstPain.capability}</span>
            </div>
            {/* Arrow Down */}
            <div className="flex justify-center">
              <ArrowDown className="w-3 h-3 text-muted-foreground" />
            </div>
            {/* Outcome */}
            <div className="px-2 py-1 rounded-md bg-primary/15 border border-primary/30">
              <span className="text-[11px] text-primary font-medium">{firstPain.outcome}</span>
            </div>
          </div>
        </div>
        
        {/* Real Example */}
        <div className="mb-1.5 p-1.5 bg-primary/10 rounded-lg border border-primary/20">
          <p className="text-[9px] font-semibold text-primary uppercase tracking-wider mb-0.5">
            Real Example
          </p>
          <p className="text-[10px] text-muted-foreground">{deepDive.example.brand}</p>
          <p className="text-[11px] font-medium text-foreground mt-0.5 leading-snug">
            {deepDive.example.result}
          </p>
        </div>
        
        {/* Capabilities Tags */}
        <div className="flex flex-wrap gap-1">
          {deepDive.capabilities.slice(0, 2).map((cap, i) => (
            <span 
              key={i}
              className="px-1.5 py-0.5 rounded-full text-[9px] font-medium"
              style={{ 
                backgroundColor: `${deepDive.color}15`,
                color: deepDive.color 
              }}
            >
              {cap}
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SolutionValuePanel;
