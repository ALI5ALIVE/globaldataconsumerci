import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { Layers, Users, Clock, ShieldAlert } from "lucide-react";

const dimensions = [
  {
    icon: Layers, label: "Breadth", color: "text-primary", borderColor: "border-primary/30",
    problem: "Signals fragment across tools, teams, and vendors",
    stat: "3-5 sources", statDesc: "conflicting data per decision",
    impact: "No single source of truth",
  },
  {
    icon: Users, label: "Alignment", color: "text-accent", borderColor: "border-accent/30",
    problem: "Leaders debate data instead of committing to direction",
    stat: "40%", statDesc: "launches miss optimal windows",
    impact: "Analysis paralysis",
  },
  {
    icon: Clock, label: "Speed", color: "text-yellow-500", borderColor: "border-yellow-500/30",
    problem: "Decisions arrive late and too late to matter",
    stat: "12+ weeks", statDesc: "average decision latency",
    impact: "Missed windows",
  },
  {
    icon: ShieldAlert, label: "Confidence", color: "text-destructive", borderColor: "border-destructive/30",
    problem: "Decisions lack conviction — teams hedge instead of committing",
    stat: "68%", statDesc: "teams lack confidence to act",
    impact: "Diluted action",
  },
];

const SPSlide05IntelligenceGap = (props: SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-5"
      title="Where Growth and Performance Are Lost"
      subtitle="Why the Intelligence Gap is widening for consumer brands"
      slideNumber={5}
      {...props}
    >
      <div className="flex flex-col h-full gap-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1 min-h-0">
          {dimensions.map((dim) => (
            <div key={dim.label} className={`bg-card/50 border ${dim.borderColor} rounded-xl p-3 flex flex-col`}>
              <div className="flex items-center gap-2 mb-2">
                <dim.icon className={`w-5 h-5 ${dim.color}`} />
                <h3 className={`text-sm font-bold ${dim.color}`}>{dim.label}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-3 flex-1">{dim.problem}</p>
              <div className="mt-auto">
                <p className={`text-xl font-bold ${dim.color}`}>{dim.stat}</p>
                <p className="text-[10px] text-muted-foreground">{dim.statDesc}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-1 italic">{dim.impact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card/30 border border-destructive/20 rounded-xl p-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-destructive mb-1">Case in Point</h3>
          <p className="text-sm text-muted-foreground">
            A top-10 FMCG company spent <span className="text-foreground font-medium">12 weeks</span> preparing for a QBR—not generating insight, but reconciling Nielsen, Kantar, and Mintel into one story.
          </p>
        </div>
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide05IntelligenceGap;
