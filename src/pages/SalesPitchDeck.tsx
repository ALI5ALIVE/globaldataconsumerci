import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSalesPitchNarration } from "@/hooks/useSalesPitchNarration";
import SPSlide01Title from "@/components/salespitch-slides/SPSlide01Title";
import SPSlide02Hook from "@/components/salespitch-slides/SPSlide02Hook";
import SPSlide03Journey from "@/components/salespitch-slides/SPSlide03Journey";
import SPSlide04MarketSpeed from "@/components/salespitch-slides/SPSlide04MarketSpeed";
import SPSlide05IntelligenceGap from "@/components/salespitch-slides/SPSlide05IntelligenceGap";
import SPSlide06Transformation from "@/components/salespitch-slides/SPSlide06Transformation";
import { SPSlide07Sales, SPSlide08Strategic, SPSlide09Market, SPSlide10Competitive, SPSlide11Innovation } from "@/components/salespitch-slides/SPIntelligenceSlide";
import { SPSlide12VCStrategic, SPSlide13VCMarket, SPSlide14VCInnovation, SPSlide15VCCompetitive, SPSlide16VCSales } from "@/components/salespitch-slides/SPValueChainStage";
import { SPSlide17Fragmented, SPSlide18Connected, SPSlide19Optimised, SPSlide20Predictive } from "@/components/salespitch-slides/SPMaturityStage";
import SPSlide21WhyGlobalData from "@/components/salespitch-slides/SPSlide21WhyGlobalData";
import SPSlide22ROI from "@/components/salespitch-slides/SPSlide22ROI";
import SPSlide23GetConnected from "@/components/salespitch-slides/SPSlide23GetConnected";
import SPSlide24CTA from "@/components/salespitch-slides/SPSlide24CTA";

const slides = [
  { id: "sp-slide-1", label: "Title" },
  { id: "sp-slide-2", label: "Hook" },
  { id: "sp-slide-3", label: "Journey" },
  { id: "sp-slide-4", label: "Market Speed" },
  { id: "sp-slide-5", label: "Intelligence Gap" },
  { id: "sp-slide-6", label: "Transformation" },
  { id: "sp-slide-7", label: "Sales Intel" },
  { id: "sp-slide-8", label: "Strategic Intel" },
  { id: "sp-slide-9", label: "Market Intel" },
  { id: "sp-slide-10", label: "Competitive Intel" },
  { id: "sp-slide-11", label: "Innovation Intel" },
  { id: "sp-slide-12", label: "VC: Strategic" },
  { id: "sp-slide-13", label: "VC: Market" },
  { id: "sp-slide-14", label: "VC: Innovation" },
  { id: "sp-slide-15", label: "VC: Competitive" },
  { id: "sp-slide-16", label: "VC: Sales" },
  { id: "sp-slide-17", label: "Fragmented" },
  { id: "sp-slide-18", label: "Connected" },
  { id: "sp-slide-19", label: "Optimised" },
  { id: "sp-slide-20", label: "Predictive" },
  { id: "sp-slide-21", label: "Why GlobalData" },
  { id: "sp-slide-22", label: "The Return" },
  { id: "sp-slide-23", label: "Get Connected" },
  { id: "sp-slide-24", label: "CTA" },
];

const SalesPitchDeck = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const narration = useSalesPitchNarration();

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

  const scrollToSlide = useCallback((index: number) => {
    if (!containerRef.current) return;
    const slideHeight = containerRef.current.clientHeight;
    containerRef.current.scrollTo({ top: index * slideHeight, behavior: "smooth" });
  }, []);

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

      {/* Navigation dots */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-1">
        {slides.map((slide, index) => (
          <button key={slide.id} onClick={() => scrollToSlide(index)} className="group relative flex items-center justify-end transition-all duration-200">
            <span className={`absolute right-5 whitespace-nowrap text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${activeSlide === index ? 'text-primary' : 'text-muted-foreground'}`}>
              {slide.label}
            </span>
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${activeSlide === index ? "bg-primary scale-150" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
          </button>
        ))}
      </nav>

      {/* Navigation arrows */}
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
        <SPSlide01Title onNavigateToSlide={scrollToSlide} {...getNarrationProps(0)} />
        <SPSlide02Hook {...getNarrationProps(1)} />
        <SPSlide03Journey {...getNarrationProps(2)} />
        <SPSlide04MarketSpeed {...getNarrationProps(3)} />
        <SPSlide05IntelligenceGap {...getNarrationProps(4)} />
        <SPSlide06Transformation {...getNarrationProps(5)} />
        <SPSlide07Sales {...getNarrationProps(6)} />
        <SPSlide08Strategic {...getNarrationProps(7)} />
        <SPSlide09Market {...getNarrationProps(8)} />
        <SPSlide10Competitive {...getNarrationProps(9)} />
        <SPSlide11Innovation {...getNarrationProps(10)} />
        <SPSlide12VCStrategic {...getNarrationProps(11)} />
        <SPSlide13VCMarket {...getNarrationProps(12)} />
        <SPSlide14VCInnovation {...getNarrationProps(13)} />
        <SPSlide15VCCompetitive {...getNarrationProps(14)} />
        <SPSlide16VCSales {...getNarrationProps(15)} />
        <SPSlide17Fragmented {...getNarrationProps(16)} />
        <SPSlide18Connected {...getNarrationProps(17)} />
        <SPSlide19Optimised {...getNarrationProps(18)} />
        <SPSlide20Predictive {...getNarrationProps(19)} />
        <SPSlide21WhyGlobalData {...getNarrationProps(20)} />
        <SPSlide22ROI {...getNarrationProps(21)} />
        <SPSlide23GetConnected {...getNarrationProps(22)} />
        <SPSlide24CTA {...getNarrationProps(23)} />
      </div>
    </div>
  );
};

export default SalesPitchDeck;
