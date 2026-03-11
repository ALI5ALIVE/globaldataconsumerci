import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Compass, BarChart3, Radar, Lightbulb, ShoppingCart, Wallet } from "lucide-react";
import { useConsumerJourneyNarration } from "@/hooks/useConsumerJourneyNarration";
import CPSlide1MondayMorning from "@/components/consumer-pitch/CPSlide1MondayMorning";
import CPSlide2SevenSources from "@/components/consumer-pitch/CPSlide2SevenSources";
import CPSlide3TheCost from "@/components/consumer-pitch/CPSlide3TheCost";
import CPSlide4ImagineOneLens from "@/components/consumer-pitch/CPSlide4ImagineOneLens";
import GDSlide4Proposition from "@/components/globaldata-slides/GDSlide4Proposition";
import CPSlide7TeamsTransformed from "@/components/consumer-pitch/CPSlide7TeamsTransformed";
import CPSlide9NothingLikeThis from "@/components/consumer-pitch/CPSlide9NothingLikeThis";
import CJSlideWhyNotDIY from "@/components/consumer-journey/CJSlideWhyNotDIY";
import CJSlideMaturityJourney from "@/components/consumer-journey/CJSlideMaturityJourney";

import CJSlide0Title from "@/components/consumer-journey/CJSlide0Title";

import CJSlideProof from "@/components/consumer-journey/CJSlideProof";
import CJSlideConnectedDecision from "@/components/consumer-journey/CJSlideConnectedDecision";

import type { PersonaData } from "@/components/consumer-journey/PersonaSlide";

const personas: PersonaData[] = [
  {
    name: "Sarah",
    role: "Head of Strategy · Global FMCG",
    step: "Trend & Strategy",
    icon: Compass,
    painQuote: "I'm always 12 months late. By the time I've validated a trend, my competitor has launched.",
    painDetail: "Three providers. Three conflicting trend reports. By the time Sarah reconciles them, the window has closed.",
    painBullets: ["12-month insight lag", "3 conflicting sources", "Board gets hindsight, not foresight"],
    benefitQuote: "I see what's coming 18 months out. I walk into the board with evidence, not excuses.",
    benefitDetail: "Strategic foresight flags emerging themes before they hit her category. One validated view — no reconciliation.",
    metrics: [
      { value: "18mo", label: "foresight horizon" },
      { value: "1", label: "validated view" },
      { value: "3×", label: "faster board prep" },
    ],
    solutionName: "Strategic Foresight",
    dashboardType: "trend-radar",
    valueChainPosition: 1,
    unlockedActions: [
      { text: "Validate trends against live market sizing", enabledBy: "James" },
      { text: "Pre-screen concepts before innovation invests", enabledBy: "Marcus" },
    ],
  },
  {
    name: "James",
    role: "Market Intelligence Lead · Global FMCG",
    step: "Opportunity Sizing",
    icon: BarChart3,
    painQuote: "I spend 3 weeks pulling numbers from 4 different sources. The board still questions them.",
    painDetail: "Every executive has their own data source. Every meeting starts with 'where did this number come from?'",
    painBullets: ["3 weeks per sizing exercise", "4 conflicting data sources", "Numbers always questioned"],
    benefitQuote: "One click. 110 countries. Numbers the board trusts because everyone sees the same data.",
    benefitDetail: "Unified market sizing across all priority markets. One taxonomy, one number — trusted and defensible.",
    metrics: [
      { value: "110", label: "countries, one click" },
      { value: "3min", label: "replaces 3 weeks" },
      { value: "1", label: "trusted number" },
    ],
    solutionName: "Market Sizing",
    dashboardType: "market-sizing",
    valueChainPosition: 2,
    unlockedActions: [
      { text: "Size only the markets where trends are accelerating", enabledBy: "Sarah" },
      { text: "Flag sizing gaps competitors are already exploiting", enabledBy: "Priya" },
    ],
  },
  {
    name: "Priya",
    role: "Competitive Intelligence Analyst · Global FMCG",
    step: "Competitive Tracking",
    icon: Radar,
    painQuote: "I find out about competitor moves from trade press. By then, it's too late to respond.",
    painDetail: "Priya is brilliant at pattern recognition. But she's reading the same news as everyone, at the same time.",
    painBullets: ["Reactive to trade press", "Same intel as competitors", "Always a step behind"],
    benefitQuote: "I track 25,000 companies in real-time. I see their moves before they announce them.",
    benefitDetail: "Six alternative data signals — patent filings, job postings, supply chain shifts. Real-time intelligence.",
    metrics: [
      { value: "25K", label: "companies tracked" },
      { value: "6", label: "signal types" },
      { value: "Real-time", label: "alerts" },
    ],
    solutionName: "Competitive Intelligence",
    dashboardType: "competitive-tracker",
    valueChainPosition: 3,
    unlockedActions: [
      { text: "Prioritise tracking on categories with validated growth", enabledBy: "James" },
      { text: "Alert innovation when a competitor files a relevant patent", enabledBy: "Marcus" },
    ],
  },
  {
    name: "Marcus",
    role: "Innovation Director · Global FMCG",
    step: "Innovation Validation",
    icon: Lightbulb,
    painQuote: "We killed a product that would have been a hit. We launched one that flopped. Both based on gut feel.",
    painDetail: "Consumer research takes months. By the time results arrive, the market has moved.",
    painBullets: ["18-month development cycles", "Gut feel over evidence", "50/50 launch success rate"],
    benefitQuote: "Every concept scored against real consumer signals. Our launch success rate doubled.",
    benefitDetail: "Search trends, social sentiment, purchase behaviour — all connected. 8-week validated sprints.",
    metrics: [
      { value: "2×", label: "launch success" },
      { value: "8wk", label: "replaces 18 months" },
      { value: "Evidence", label: "based scoring" },
    ],
    solutionName: "Innovation Validation",
    dashboardType: "innovation-scorecard",
    valueChainPosition: 4,
    unlockedActions: [
      { text: "Score concepts against trend momentum + market size", enabledBy: "Sarah + James" },
      { text: "Kill concepts where competitors already dominate", enabledBy: "Priya" },
    ],
  },
  {
    name: "Elena",
    role: "National Account Manager · Global FMCG",
    step: "Commercial Execution",
    icon: ShoppingCart,
    painQuote: "I walk into buyer meetings with slides I made last night. No foresight. No proof points.",
    painDetail: "The buyer has better data than Elena does — and they both know it.",
    painBullets: ["No foresight or proof points", "Buyer has better data", "Price-led, not insight-led"],
    benefitQuote: "I walk in with the full picture — trend data, sizing, competitive context. The buyer leans in.",
    benefitDetail: "Unified intelligence means Elena presents a story backed by foresight — a partnership conversation.",
    metrics: [
      { value: "Full", label: "buyer story" },
      { value: "4", label: "intelligence layers" },
      { value: "Partnership", label: "conversations" },
    ],
    solutionName: "Commercial Intelligence",
    dashboardType: "commercial-dashboard",
    valueChainPosition: 5,
    unlockedActions: [
      { text: "Build buyer stories with trend + sizing + competitive proof", enabledBy: "Sarah + James + Priya" },
      { text: "Lead with validated innovation pipeline, not price", enabledBy: "Marcus" },
    ],
  },
  {
    name: "David",
    role: "Head of Procurement · Global FMCG",
    step: "Procurement & TCO",
    icon: Wallet,
    painQuote: "I manage 14 data suppliers. Nobody can tell me what we're actually using. Renewal season is a nightmare.",
    painDetail: "Fourteen overlapping contracts. No usage visibility. £2.4M annual spend with no way to measure ROI or eliminate redundancy.",
    painBullets: ["14 overlapping suppliers", "No usage visibility", "£2.4M spend unoptimised"],
    benefitQuote: "One platform. One contract. TCO down 40%. I went from managing 14 vendors to one strategic partner.",
    benefitDetail: "Full consolidation into a single platform. Usage tracking across every team. Best-in-class procurement with measurable ROI.",
    metrics: [
      { value: "40%", label: "TCO reduction" },
      { value: "14→1", label: "suppliers consolidated" },
      { value: "Best-in-class", label: "consolidation" },
    ],
    solutionName: "Procurement Intelligence",
    dashboardType: "procurement-dashboard",
    valueChainPosition: 6,
    unlockedActions: [
      { text: "Measure usage across all five intelligence layers", enabledBy: "All teams" },
      { text: "Consolidate 14 contracts with full ROI evidence", enabledBy: "All teams" },
    ],
  },
];

const slides = [
  { id: "cj-slide-0", label: "The Pressure" },
  { id: "cp-slide-1", label: "Your Monday" },
  { id: "cp-slide-2", label: "Seven Sources" },
  { id: "cp-slide-3", label: "The Cost" },
  { id: "cj-slide-4", label: "One Lens" },
  { id: "cj-slide-5", label: "The Connected Decision" },
  { id: "cj-slide-6", label: "Teams Transformed" },
  { id: "cj-slide-7", label: "Maturity Journey" },
  { id: "cj-slide-8", label: "The Platform" },
  { id: "cj-slide-9", label: "Proof" },
  { id: "cp-slide-10", label: "Nothing Like This" },
  { id: "cj-slide-11", label: "Why Not DIY?" },
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

      {/* Slides — 11-slide optimised arc */}
      <div ref={containerRef} className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <CJSlide0Title {...getNarrationProps(0)} />
        <CPSlide1MondayMorning {...getNarrationProps(1)} />
        <CPSlide2SevenSources {...getNarrationProps(2)} />
        <CPSlide3TheCost {...getNarrationProps(3)} />
        <CPSlide4ImagineOneLens {...getNarrationProps(4)} />
        <CJSlideConnectedDecision {...getNarrationProps(5)} />
        <CPSlide7TeamsTransformed {...getNarrationProps(6)} />
        <CJSlideMaturityJourney {...getNarrationProps(7)} />
        <GDSlide4Proposition {...getNarrationProps(8)} />
        <CJSlideProof {...getNarrationProps(9)} />
        <CPSlide9NothingLikeThis {...getNarrationProps(10)} />
        <CJSlideWhyNotDIY {...getNarrationProps(11)} />
      </div>
    </div>
  );
};

export default ConsumerJourneyDeck;
