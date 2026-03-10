import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { ArrowRight } from "lucide-react";

const changes = [
  { before: "5 vendors", after: "1 platform", benefit: "Reduce total cost of ownership by 30%" },
  { before: "12+ weeks to decision", after: "Days to decision", benefit: "Accelerate decisions from weeks to days" },
  { before: "Debate & reconciliation", after: "Confidence & alignment", benefit: "Align teams with one source of truth" },
  { before: "Siloed insights", after: "Unified intelligence", benefit: "Connected intelligence across functions" },
];

const SPSlide23GetConnected = (props: SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-23"
      title="The First Step: Get Connected"
      subtitle="Escape the fragmentation trap and unlock 30% cost savings"
      slideNumber={23}
      {...props}
    >
      <div className="flex flex-col justify-center h-full gap-6">
        <p className="text-base text-muted-foreground max-w-2xl">
          The shift from fragmented to connected is where the magic happens — <span className="text-foreground font-medium">90 days to unified intelligence</span>.
        </p>

        <div className="space-y-3">
          {changes.map((change) => (
            <div key={change.before} className="flex items-center gap-3 bg-card/50 border border-border rounded-xl p-4">
              <div className="flex-1">
                <p className="text-sm text-destructive line-through">{change.before}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-green-500 font-medium">{change.after}</p>
              </div>
              <div className="flex-[2] hidden md:block">
                <p className="text-xs text-muted-foreground">{change.benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 text-center">
          <p className="text-sm text-primary font-medium">
            Every week of delay compounds. The brands that move first define the category.
          </p>
        </div>
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide23GetConnected;
