import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";

const journeySteps = [
  { num: "01", label: "Market Pressure", desc: "Speed rewarded, hesitation punished", color: "bg-primary" },
  { num: "02", label: "Intelligence Gap", desc: "Where growth and performance are lost", color: "bg-destructive" },
  { num: "03", label: "Transformation", desc: "From fragmented to connected", color: "bg-accent" },
  { num: "04", label: "The Answer", desc: "Meet Ava + Connected Intelligence", color: "bg-primary" },
  { num: "05", label: "Value Chain", desc: "Trend to shelf — compounding intelligence", color: "bg-accent" },
  { num: "06", label: "Maturity", desc: "Where you are, where to go", color: "bg-primary" },
  { num: "07", label: "The Return", desc: "Speed, success, savings", color: "bg-accent" },
  { num: "08", label: "Why GlobalData", desc: "Trusted by 8 of top 10 FMCG", color: "bg-primary" },
  { num: "09", label: "Next Steps", desc: "Two paths forward", color: "bg-accent" },
];

const SPSlide03Journey = (props: SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-3"
      title="The Journey to Connected Intelligence"
      slideNumber={3}
      {...props}
    >
      <div className="flex flex-col justify-center h-full">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {journeySteps.map((step) => (
            <div key={step.num} className="bg-card/50 border border-border rounded-lg p-3 text-center">
              <div className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center mx-auto mb-2`}>
                <span className="text-xs font-bold text-primary-foreground">{step.num}</span>
              </div>
              <p className="text-xs font-semibold mb-1">{step.label}</p>
              <p className="text-[10px] text-muted-foreground leading-tight">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide03Journey;
