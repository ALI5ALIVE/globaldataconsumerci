import { ChevronDown } from "lucide-react";
import SlidePlayButton from "@/components/SlidePlayButton";
import type { SlideNarrationProps } from "@/types/slideProps";

const agendaItems = [
  { num: 1, label: "Market Pressure", summary: "Speed rewarded, hesitation punished" },
  { num: 2, label: "Intelligence Gap", summary: "Where growth and performance are lost" },
  { num: 3, label: "Transformation", summary: "From fragmented to connected" },
  { num: 4, label: "The Answer", summary: "One system, faster, aligned, confident" },
  { num: 5, label: "Value Chain", summary: "Trend to shelf—compounding intelligence" },
  { num: 6, label: "Your Position", summary: "Five stages—Stage 3 changes everything" },
  { num: 7, label: "Your Roadmap", summary: "Reactive to first-mover" },
  { num: 8, label: "The Return", summary: "Speed, success, savings" },
  { num: 9, label: "Why GlobalData", summary: "Trusted by 8 of top 10 FMCG" },
];

interface GDSlide0TitleProps extends SlideNarrationProps {
  onNavigateToSlide?: (slideIndex: number) => void;
}

const GDSlide0Title = ({ 
  onNavigateToSlide,
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: GDSlide0TitleProps) => {
  return (
    <section
      id="gd-slide-0"
      className="h-screen w-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-6 sm:py-8 snap-start relative overflow-hidden bg-background"
    >
      {/* Play button */}
      {onPlay && (
        <SlidePlayButton
          isPlaying={isPlaying}
          isLoading={isLoading}
          progress={progress}
          hasCompleted={hasCompleted}
          onPlay={onPlay}
          onPause={onPause ?? (() => {})}
          onNextSlide={onNextSlide}
        />
      )}

      {/* Decorative gradient orbs - Comply365 blue theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(217 100% 50% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(217 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center space-y-4 sm:space-y-6">
        {/* Headline */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
            <span className="text-foreground">Your Consumers Are Changing</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent">
              Faster Than
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-sky-400 to-primary bg-clip-text text-transparent">
              Your Insights
            </span>
          </h1>
          
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            How leading consumer brands turn constant change into
            <br className="hidden sm:block" />
            <span className="text-primary font-medium">faster, more confident growth</span> and better category performance.
          </p>
        </div>

        {/* Executive Takeaway */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-3 sm:p-4">
            <p className="text-[10px] sm:text-xs text-primary uppercase tracking-wider font-semibold mb-1.5">For CMOs, CSOs & Category Leaders</p>
            <p className="text-xs sm:text-sm text-foreground leading-relaxed">
              The brands winning today don't have more data—they have connected intelligence that lets them move faster, align better, and act with confidence.
            </p>
          </div>
        </div>

        {/* Agenda Grid */}
        <div className="pt-1 sm:pt-2">
          <div className="inline-block">
            <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mb-2 sm:mb-3">
              The Journey
            </div>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {agendaItems.map((item) => (
                <button 
                  key={item.num}
                  onClick={() => onNavigateToSlide?.(item.num)}
                  className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 text-left hover:border-primary/50 hover:bg-card/80 hover:scale-[1.02] cursor-pointer transition-all duration-200"
                >
                  <div className="flex items-start gap-1.5 sm:gap-2">
                    <span className="text-primary font-mono text-[10px] sm:text-xs font-bold">
                      {String(item.num).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="text-foreground text-[10px] sm:text-xs font-medium leading-tight">
                        {item.label}
                      </div>
                      <div className="text-muted-foreground text-[9px] sm:text-[10px] mt-0.5 leading-tight hidden sm:block">
                        {item.summary}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Context */}
        <div className="pt-2 sm:pt-4 space-y-0.5">
          <p className="text-muted-foreground text-xs sm:text-sm font-medium">
            Consumer Brands Strategy Session
          </p>
          <p className="text-muted-foreground/60 text-[10px] sm:text-xs">
            January 2026
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 animate-pulse">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest">Scroll to begin</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      {/* Slide number - aligned with content */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 max-w-5xl">
        <span className="text-sm font-medium text-muted-foreground">00</span>
      </div>
    </section>
  );
};

export default GDSlide0Title;
