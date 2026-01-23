import GDSlideContainer from "./GDSlideContainer";
import { Database, Users, Layers, Brain, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const differentiators = [
  { 
    icon: Layers, 
    title: "Unified Taxonomy", 
    desc: "The same shopper language used by 8 of the top 10 global FMCG companies",
    proof: "One shopper truth across your entire value chain",
    color: "from-primary to-sky-400"
  },
  { 
    icon: Database, 
    title: "Proprietary Consumer Data", 
    desc: "40 years of shopper, category, and competitive intelligence across 200+ markets",
    proof: "Data no competitor can replicate",
    color: "from-sky-400 to-cyan-400"
  },
  { 
    icon: Users, 
    title: "Ava + 1,000 Analysts", 
    desc: "AI that's analyzed 10M+ consumer data points, amplified by human expertise",
    proof: "Insights your team would take months to find",
    color: "from-cyan-400 to-teal-400"
  },
];

const closingTruths = [
  { text: "Shopper insight alone doesn't win shelf space", icon: Database },
  { text: "Speed without validation creates failed launches", icon: ArrowRight },
  { text: "Connected shopper intelligence creates category winners", icon: Sparkles },
];

const GDSlide9WhyGlobalData = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  return (
    <GDSlideContainer
      id="gd-slide-9"
      title="Trusted by the World's Leading Consumer Brands"
      subtitle="8 of the top 10 FMCG companies. 40 years of shopper intelligence. AI that amplifies expertise."
      slideNumber={9}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-5 h-full">
        {/* Three Differentiators */}
        <div className="grid md:grid-cols-3 gap-4">
          {differentiators.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <div 
                key={i}
                className="bg-card/50 border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${diff.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{diff.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{diff.desc}</p>
                <div className="flex items-center gap-2 pt-3 border-t border-border/30">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs text-primary font-medium">{diff.proof}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ava Highlight */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/5 border border-purple-500/30 rounded-xl p-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-base font-bold text-foreground">Ava</h4>
                <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded text-[10px] text-purple-400 font-semibold uppercase">
                  Enterprise AI Analyst
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered research analyst that amplifies human expertise — accelerating insight discovery, pattern recognition, and decision support across all intelligence domains.
              </p>
            </div>
          </div>
        </div>

        {/* Executive Close Section */}
        <div className="flex-1 grid lg:grid-cols-2 gap-4 items-center">
          {/* Leadership Imperative */}
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">For Consumer Brand Leaders</p>
            <p className="text-base text-foreground leading-relaxed">
              The brands that <span className="font-bold text-primary">see shoppers as one connected journey</span>—from trend to shelf to basket—will own the next generation of <span className="font-bold text-primary">category moments</span>.
            </p>
          </div>

          {/* Three Truths */}
          <div className="space-y-2">
            {closingTruths.map((truth, i) => {
              const Icon = truth.icon;
              return (
                <div 
                  key={i}
                  className="flex items-center gap-3 bg-card/50 border border-border/50 rounded-lg p-3"
                >
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{truth.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Takeaway */}
        <div className="bg-gradient-to-r from-primary to-sky-500 rounded-xl p-6 text-center">
          <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2">Final Takeaway</p>
          <p className="text-lg font-bold text-white leading-relaxed">
            The brands that win will be the ones who see shopper change <span className="underline decoration-2">first</span>, act <span className="underline decoration-2">together</span>, and own the shelf <span className="underline decoration-2">before competitors react</span>.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide9WhyGlobalData;
