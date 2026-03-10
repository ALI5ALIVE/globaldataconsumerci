import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Compass, BarChart3, Radar, Lightbulb, ShoppingCart } from "lucide-react";
import { useConsumerJourneyNarration } from "@/hooks/useConsumerJourneyNarration";
import CPSlide1MondayMorning from "@/components/consumer-pitch/CPSlide1MondayMorning";
import CPSlide2SevenSources from "@/components/consumer-pitch/CPSlide2SevenSources";
import CPSlide3TheCost from "@/components/consumer-pitch/CPSlide3TheCost";
import CPSlide4ImagineOneLens from "@/components/consumer-pitch/CPSlide4ImagineOneLens";
import CPSlide7TeamsTransformed from "@/components/consumer-pitch/CPSlide7TeamsTransformed";
import CPSlide8Results from "@/components/consumer-pitch/CPSlide8Results";
import PersonaSlide, { PersonaData } from "@/components/consumer-journey/PersonaSlide";
import CJSlide12CTA from "@/components/consumer-journey/CJSlide12CTA";

const personas: PersonaData[] = [
  {
    name: "Sarah",
    role: "Head of Strategy · Top-5 FMCG",
    step: "Trend & Strategy",
    icon: Compass,
    painQuote: "I'm always 12 months late. By the time I've validated a trend, my competitor has launched.",
    painDetail: "Three providers. Three conflicting trend reports. By the time Sarah reconciles them, the window has closed. Her board wants foresight — she delivers hindsight with a time lag.",
    benefitQuote: "I see what's coming 18 months out. I walk into the board with evidence, not excuses.",
    benefitDetail: "Strategic foresight flags emerging themes before they hit her category. Connected data means one validated view — no reconciliation, no debate, just clarity.",
  },
  {
    name: "James",
    role: "Market Intelligence Lead · Global Snacking Division",
    step: "Opportunity Sizing",
    icon: BarChart3,
    painQuote: "I spend 3 weeks pulling numbers from 4 different sources. The board still questions them.",
    painDetail: "Every executive has their own data source. Every meeting starts with 'where did this number come from?' James isn't wrong — he's outnumbered by conflicting data.",
    benefitQuote: "One click. 110 countries. Numbers the board trusts because everyone sees the same data.",
    benefitDetail: "Unified market sizing across all priority markets. One taxonomy means one number — trusted, defensible, and available in minutes instead of weeks.",
  },
  {
    name: "Priya",
    role: "Competitive Intelligence Analyst · Beverages",
    step: "Competitive Tracking",
    icon: Radar,
    painQuote: "I find out about competitor moves from trade press. By then, it's too late to respond.",
    painDetail: "Priya is brilliant at pattern recognition. But she's reading the same news everyone else reads, at the same time. She's always reactive, always a step behind.",
    benefitQuote: "I track 25,000 companies in real-time. I see their moves before they announce them.",
    benefitDetail: "Six alternative data signals — patent filings, job postings, supply chain shifts. The boardroom doesn't hear what happened. They hear what's coming.",
  },
  {
    name: "Marcus",
    role: "Innovation Director · Health & Wellness",
    step: "Innovation Validation",
    icon: Lightbulb,
    painQuote: "We killed a product that would have been a hit. We launched one that flopped. Both based on gut feel.",
    painDetail: "Consumer research takes months. By the time results arrive, the market has moved. Every concept is a gamble disguised as a process.",
    benefitQuote: "Every concept scored against real consumer signals. Our launch success rate doubled.",
    benefitDetail: "Search trends, social sentiment, purchase behaviour — all connected. 18-month cycles compress to 8-week validated sprints. Evidence, not intuition.",
  },
  {
    name: "Elena",
    role: "National Account Manager · Retail",
    step: "Commercial Execution",
    icon: ShoppingCart,
    painQuote: "I walk into buyer meetings with slides I made last night. No foresight. No proof points.",
    painDetail: "The buyer has better data than Elena does — and they both know it. She's bringing enthusiasm and a price list to a conversation that demands intelligence.",
    benefitQuote: "I walk in with the full picture — trend data, sizing, competitive context. The buyer leans in.",
    benefitDetail: "Unified intelligence means Elena presents a story backed by foresight. Not a pitch — a partnership conversation built on shared evidence.",
  },
];

const slides = [
  { id: "cp-slide-1", label: "Your Monday" },
  { id: "cp-slide-2", label: "Seven Sources" },
  { id: "cp-slide-3", label: "The Cost" },
  { id: "cj-slide-4", label: "The Strategist" },
  { id: "cj-slide-5", label: "The Market Lead" },
  { id: "cj-slide-6", label: "The CI Analyst" },
  { id: "cj-slide-7", label: "The Innovator" },
  { id: "cj-slide-8", label: "The Sales Lead" },
  { id: "cj-slide-9", label: "One Lens" },
  { id: "cj-slide-10", label: "Teams Transformed" },
  { id: "cj-slide-11", label: "Results" },
  { id: "cj-slide-12", label: "Let's Talk" },
];

const ConsumerJourneyDeck = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const narration = useConsumerJourneyNarration();

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
        {personas.map((persona, i) => (
          <PersonaSlide
            key={persona.name}
            persona={persona}
            slideNumber={i + 4}
            {...getNarrationProps(i + 3)}
          />
        ))}
        <CPSlide4ImagineOneLens {...getNarrationProps(8)} />
        <CPSlide7TeamsTransformed {...getNarrationProps(9)} />
        <CPSlide8Results {...getNarrationProps(10)} />
        <CJSlide12CTA {...getNarrationProps(11)} />
      </div>
    </div>
  );
};

export default ConsumerJourneyDeck;
