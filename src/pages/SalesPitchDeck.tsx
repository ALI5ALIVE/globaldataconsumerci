import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSalesPitchNarration } from "@/hooks/useSalesPitchNarration";
import SlidePlayButton from "@/components/SlidePlayButton";

const slides = [
  { id: "sp-slide-1", label: "Title" },
  { id: "sp-slide-2", label: "Hook" },
  { id: "sp-slide-3", label: "Journey" },
  { id: "sp-slide-4", label: "Market Speed" },
  { id: "sp-slide-5", label: "Intelligence Gap" },
  { id: "sp-slide-6", label: "Transformation" },
  { id: "sp-slide-7", label: "Strategic Intel" },
  { id: "sp-slide-8", label: "Market Intel" },
  { id: "sp-slide-9", label: "Competitive Intel" },
  { id: "sp-slide-10", label: "Innovation Intel" },
  { id: "sp-slide-11", label: "Sales Intel" },
  { id: "sp-slide-12", label: "Fragmented" },
  { id: "sp-slide-13", label: "Connected" },
  { id: "sp-slide-14", label: "Optimised" },
  { id: "sp-slide-15", label: "Predictive" },
  { id: "sp-slide-16", label: "Why GlobalData" },
  { id: "sp-slide-17", label: "The Return" },
  { id: "sp-slide-18", label: "Get Connected" },
  { id: "sp-slide-19", label: "CTA" },
];

const SalesPitchDeck = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const narration = useSalesPitchNarration();
  const autoAdvanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSlide = useCallback((index: number) => {
    if (!containerRef.current) return;
    const slideHeight = containerRef.current.clientHeight;
    containerRef.current.scrollTo({ top: index * slideHeight, behavior: "smooth" });
  }, []);

  const getNarrationProps = (slideIndex: number) => ({
    isPlaying: narration.currentSlide === slideIndex && narration.isPlaying,
    isLoading: narration.currentSlide === slideIndex && narration.isLoading,
    progress: narration.currentSlide === slideIndex ? narration.progress : 0,
    hasCompleted: narration.currentSlide === slideIndex && narration.hasCompleted,
    onPlay: () => {
      narration.play(slideIndex);
      narration.preloadNext(slideIndex);
    },
    onPause: () => narration.pause(),
    onNextSlide: slideIndex < slides.length - 1 ? () => scrollToSlide(slideIndex + 1) : undefined,
  });

  // Auto-advance: when narration completes, scroll to next slide and play
  useEffect(() => {
    if (!autoAdvance) return;
    if (
      narration.hasCompleted &&
      narration.currentSlide === activeSlide &&
      activeSlide < slides.length - 1
    ) {
      autoAdvanceTimerRef.current = setTimeout(() => {
        const nextSlide = activeSlide + 1;
        scrollToSlide(nextSlide);
        // Play next slide after scroll settles
        setTimeout(() => {
          narration.play(nextSlide);
          narration.preloadNext(nextSlide);
        }, 800);
      }, 1500);
    }
    return () => {
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    };
  }, [narration.hasCompleted, narration.currentSlide, activeSlide, autoAdvance, scrollToSlide]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = containerRef.current.scrollTop;
      const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      setScrollProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
      const slideHeight = containerRef.current.clientHeight;
      setActiveSlide(Math.min(Math.round(scrollTop / slideHeight), slides.length - 1));
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => { container?.removeEventListener("scroll", handleScroll); };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        scrollToSlide(Math.min(activeSlide + 1, slides.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        scrollToSlide(Math.max(activeSlide - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide, scrollToSlide]);

  const navigateSlide = (direction: "up" | "down") => {
    if (direction === "up" && activeSlide > 0) scrollToSlide(activeSlide - 1);
    else if (direction === "down" && activeSlide < slides.length - 1) scrollToSlide(activeSlide + 1);
  };

  return (
    <div className="h-screen w-screen bg-black overflow-hidden relative">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div className="h-full bg-primary transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Header */}
      <header className="fixed top-1 left-0 right-0 z-40 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <span className="text-xs text-white/60">{activeSlide + 1} / {slides.length}</span>
        </div>
      </header>

      {/* Navigation dots */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-1">
        {slides.map((slide, index) => (
          <button key={slide.id} onClick={() => scrollToSlide(index)} className="group relative flex items-center justify-end transition-all duration-200">
            <span className={`absolute right-5 whitespace-nowrap text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${activeSlide === index ? 'text-primary' : 'text-white/50'}`}>
              {slide.label}
            </span>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${activeSlide === index ? "bg-primary scale-150" : "bg-white/30 hover:bg-white/50"}`} />
          </button>
        ))}
      </nav>

      {/* Navigation arrows */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
        <button onClick={() => navigateSlide("up")} disabled={activeSlide === 0} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all">
          <ChevronUp className="w-5 h-5" />
        </button>
        <button onClick={() => navigateSlide("down")} disabled={activeSlide === slides.length - 1} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all">
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Slides */}
      <div ref={containerRef} className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {slides.map((slide, index) => (
          <section key={slide.id} className="h-screen w-full snap-start relative flex items-center justify-center">
            <img
              src={`/slides/sp-slide-${index + 1}.jpg`}
              alt={slide.label}
              className="max-h-full max-w-full object-contain"
              loading={index < 3 ? "eager" : "lazy"}
            />
            <SlidePlayButton {...getNarrationProps(index)} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default SalesPitchDeck;
