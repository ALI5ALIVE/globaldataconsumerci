import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { TrendingUp, Users, Shield } from "lucide-react";

const SPSlide02Hook = (props: SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-2"
      title="How leading consumer brands turn constant change into faster, more confident growth"
      subtitle="Your consumers are changing faster than your insights"
      slideNumber={2}
      {...props}
    >
      <div className="flex flex-col justify-center h-full gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm font-medium text-muted-foreground mb-1">Built for</p>
            <p className="text-lg font-semibold">CMOs, CSOs & Category Leaders</p>
          </div>
          <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
            <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm font-medium text-muted-foreground mb-1">Trusted by</p>
            <p className="text-lg font-semibold">8 of Top 10 FMCG</p>
          </div>
          <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-sm font-medium text-muted-foreground mb-1">Advantage</p>
            <p className="text-lg font-semibold">Connected Intelligence</p>
          </div>
        </div>
        <div className="bg-card/30 border border-primary/20 rounded-xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-muted-foreground italic">
            "The brands winning today don't have more data — they have connected intelligence that lets them move faster, align better, and act with confidence."
          </p>
        </div>
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide02Hook;
