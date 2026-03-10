import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useConsumerPitchNarration } from "@/hooks/useConsumerPitchNarration";
import CPSlide1MondayMorning from "@/components/consumer-pitch/CPSlide1MondayMorning";
import CPSlide2SevenSources from "@/components/consumer-pitch/CPSlide2SevenSources";
import CPSlide3TheCost from "@/components/consumer-pitch/CPSlide3TheCost";
import CPSlide4ImagineOneLens from "@/components/consumer-pitch/CPSlide4ImagineOneLens";
import CPSlide5ConnectedIntelligence from "@/components/consumer-pitch/CPSlide5ConnectedIntelligence";
import CPSlide6IdeaToShelf from "@/components/consumer-pitch/CPSlide6IdeaToShelf";
import CPSlide7TeamsTransformed from "@/components/consumer-pitch/CPSlide7TeamsTransformed";
import CPSlide8Results from "@/components/consumer-pitch/CPSlide8Results";
import CPSlide9NothingLikeThis from "@/components/consumer-pitch/CPSlide9NothingLikeThis";
import CPSlide10OneConversation from "@/components/consumer-pitch/CPSlide10OneConversation";

const slides = [
  { id: "cp-slide-1", label: "Your Monday" },
  { id: "cp-slide-2", label: "Seven Sources" },
  { id: "cp-slide-3", label: "The Cost" },
  { id: "cp-slide-4", label: "One Lens" },
  { id: "cp-slide-5", label: "Connected Intelligence" },
  { id: "cp-slide-6", label: "Idea to Shelf" },
  { id: "cp-slide-7", label: "Teams Transformed" },
  { id: "cp-slide-8", label: "Results" },
  { id: "cp-slide-9", label: "Revolutionary" },
  { id: "cp-slide-10", label: "One Conversation" },
];

const ConsumerPitchDeck = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const narration = useConsumerPitchNarration();

  const getNarrationProps = (slideId: number) => ({
    isPlaying: narration.currentSlide === slideId && narration.isPlaying,
    isLoading: narration.currentSlide === slideId && narration.isLoading,
    progress: narration.currentSlide === slideId ? narration.progress : 0,
    hasCompleted: narration.currentSlide === slideId && narration.hasCompleted,
    onPlay: () => {
      narration.play(slideId);
      narration.preloadNext(slideId);
    },
    onPause: () => narration.pause(),
    onNextSlide: slideId < slides.length - 1 ? () => scrollToSlide(slideId + 1) : undefined,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollTop;
      const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollProgress(progress * 100);
      const slideHeight = containerRef.current.clientHeight;
      const currentSlide = Math.round(scrollTop / slideHeight);
      setActiveSlide(Math.min(currentSlide, slides.length - 1));
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    if (container) {
      const slideHeight = container.clientHeight;
      const currentSlide = Math.round(container.scrollTop / slideHeight);
      setActiveSlide(Math.min(currentSlide, slides.length - 1));
    }
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const slideHeight = containerRef.current.clientHeight;
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        const next = Math.min(activeSlide + 1, slides.length - 1);
        containerRef.current.scrollTo({ top: next * slideHeight, behavior: "smooth" });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(activeSlide - 1, 0);
        containerRef.current.scrollTo({ top: prev * slideHeight, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide]);

  const scrollToSlide = useCallback((index: number) => {
    if (!containerRef.current) return;
    const slideHeight = containerRef.current.clientHeight;
    containerRef.current.scrollTo({ top: index * slideHeight, behavior: "smooth" });
  }, []);

  const navigateSlide = (direction: "up" | "down") => {
    if (direction === "up" && activeSlide > 0) scrollToSlide(activeSlide - 1);
    else if (direction === "down" && activeSlide < slides.length - 1) scrollToSlide(activeSlide + 1);
  };

  return (
    <div className="h-screen w-screen bg-background overflow-hidden relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div className="h-full bg-primary transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Header */}
      <header className="fixed top-1 left-0 right-0 z-40 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <span className="text-xs text-muted-foreground">{activeSlide + 1} / {slides.length}</span>
        </div>
      </header>

      {/* Slide nav dots */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(index)}
            className="group relative flex items-center justify-end transition-all duration-200"
          >
            <span className={`absolute right-5 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity ${activeSlide === index ? 'text-primary' : 'text-muted-foreground'}`}>
              {slide.label}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-200 ${activeSlide === index ? "bg-primary scale-150" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
          </button>
        ))}
      </nav>

      {/* Nav arrows */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
        <button onClick={() => navigateSlide("up")} disabled={activeSlide === 0} className="w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all">
          <ChevronUp className="w-5 h-5" />
        </button>
        <button onClick={() => navigateSlide("down")} disabled={activeSlide === slides.length - 1} className="w-10 h-10 rounded-full bg-card/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Slides */}
      <div ref={containerRef} className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <CPSlide1MondayMorning {...getNarrationProps(0)} />
        <CPSlide2SevenSources {...getNarrationProps(1)} />
        <CPSlide3TheCost {...getNarrationProps(2)} />
        <CPSlide4ImagineOneLens {...getNarrationProps(3)} />
        <CPSlide5ConnectedIntelligence {...getNarrationProps(4)} />
        <CPSlide6IdeaToShelf {...getNarrationProps(5)} />
        <CPSlide7TeamsTransformed {...getNarrationProps(6)} />
        <CPSlide8Results {...getNarrationProps(7)} />
        <CPSlide9NothingLikeThis {...getNarrationProps(8)} />
        <CPSlide10OneConversation {...getNarrationProps(9)} />
      </div>
    </div>
  );
};

export default ConsumerPitchDeck;
