import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { Zap, Target, DollarSign } from "lucide-react";

const SPSlide22ROI = (props: SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-22"
      title="The Return: Speed, Success, Savings"
      subtitle="Proven by Mondelēz and other category leaders"
      slideNumber={22}
      {...props}
    >
      <div className="flex flex-col justify-center h-full gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/50 border border-primary/30 rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Speed to Decision</h3>
            <p className="text-3xl font-bold text-primary mb-2">70%</p>
            <p className="text-sm font-medium mb-2">Faster decision cycles</p>
            <p className="text-xs text-muted-foreground">Mondelēz cut decision cycles from 6 weeks to days</p>
          </div>
          <div className="bg-card/50 border border-accent/30 rounded-xl p-6 text-center">
            <Target className="w-8 h-8 text-accent mx-auto mb-3" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Launch Success</h3>
            <p className="text-3xl font-bold text-accent mb-2">2×</p>
            <p className="text-sm font-medium mb-2">Higher launch success</p>
            <p className="text-xs text-muted-foreground">Bets informed by connected data, not siloed opinions</p>
          </div>
          <div className="bg-card/50 border border-green-500/30 rounded-xl p-6 text-center">
            <DollarSign className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Cost of Intelligence</h3>
            <p className="text-3xl font-bold text-green-500 mb-2">30%</p>
            <p className="text-sm font-medium mb-2">Lower TCO</p>
            <p className="text-xs text-muted-foreground">One contract. One taxonomy. One source of truth.</p>
          </div>
        </div>

        <div className="bg-card/30 border border-primary/20 rounded-xl p-5 max-w-3xl mx-auto">
          <h3 className="text-sm font-bold text-primary mb-2">Mondelēz Case Study</h3>
          <p className="text-sm text-muted-foreground">
            When Mondelēz consolidated their intelligence stack, they measured impact across all three dimensions — value compounded exponentially as maturity increased.
          </p>
        </div>
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide22ROI;
