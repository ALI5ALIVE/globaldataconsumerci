import GDSlideContainer from "./GDSlideContainer";
import { Database, Users, Brain, Sparkles, Zap, TrendingUp, Trophy } from "lucide-react";
import type { SlideNarrationProps } from "@/types/slideProps";

const differentiators = [
  { 
    icon: Database, 
    title: "High-Impact Data", 
    tagline: "Category, consumer, and competitive signals in one view",
    desc: "Deep coverage across categories, brands, and consumer behaviour—analyst-validated and unified into one taxonomy. Earlier signals on trends, preferences, and competitive moves.",
    color: "from-primary to-sky-400"
  },
  { 
    icon: Sparkles, 
    title: "AI & Technology", 
    tagline: "AI that accelerates insight to action",
    desc: "Agentic AI that surfaces opportunities, predicts shifts, and guides teams to act—turning weeks of analysis into minutes of clarity.",
    color: "from-sky-400 to-cyan-400"
  },
  { 
    icon: Users, 
    title: "Human Expertise", 
    tagline: "Consumer specialists who translate insight into action",
    desc: "Category analysts, consumer researchers, and strategic advisors embedded in your workflows—decoding consumer behaviour and translating intelligence into confident brand decisions.",
    color: "from-cyan-400 to-teal-400"
  },
];

const closingTruths = [
  { text: "Faster time to market", icon: Zap },
  { text: "Stronger consumer connection", icon: TrendingUp },
  { text: "Consistent category gains", icon: Trophy },
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
      title="Built for Connected Intelligence at Scale"
      subtitle="High-impact data, AI, and human expertise—moving you from reactive to precision execution"
      slideNumber={10}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-2 h-full max-h-full overflow-hidden">
        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-3">
          {differentiators.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <div 
                key={i}
                className="bg-card/50 border border-border/50 rounded-xl p-4 hover:border-primary/30 transition-all group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${diff.color} flex items-center justify-center mb-2`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xs font-bold text-foreground mb-0.5">{diff.title}</h3>
                <p className="text-[10px] text-primary font-medium mb-1.5">{diff.tagline}</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{diff.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Ava Highlight */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/5 border border-purple-500/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-bold text-foreground">Ava</h4>
                <span className="px-1.5 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded text-[9px] text-purple-400 font-semibold uppercase">
                  Enterprise AI Analyst
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                AI-powered research analyst that amplifies your teams — accelerating trend discovery, consumer pattern recognition, and decision support across brand, innovation, and category intelligence.
              </p>
            </div>
          </div>
        </div>

        {/* Executive Close Section */}
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* Leadership Imperative */}
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
            <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-2">Performance Imperative</p>
            <p className="text-sm text-foreground leading-relaxed">
              Organisations that <span className="font-bold text-primary">close the Intelligence Gap</span> and operate intelligence as a connected system will define the <span className="font-bold text-primary">next generation of consumer brand leaders</span>.
            </p>
          </div>

          {/* Three Results */}
          <div className="space-y-1.5">
            {closingTruths.map((truth, i) => {
              const Icon = truth.icon;
              return (
                <div 
                  key={i}
                  className="flex items-center gap-2 bg-card/50 border border-border/50 rounded-lg p-2"
                >
                  <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span className="text-xs text-foreground">{truth.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Takeaway */}
        <div className="bg-gradient-to-r from-primary to-sky-500 rounded-xl p-5 text-center">
          <p className="text-[10px] font-semibold text-white/80 uppercase tracking-wider mb-1">The Result</p>
          <p className="text-base font-bold text-white leading-relaxed">
            Faster time to market, stronger consumer connection, and consistent category gains.
          </p>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide9WhyGlobalData;
