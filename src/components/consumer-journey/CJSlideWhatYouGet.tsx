import { LayoutGrid, Sparkles, Database, Users, Rocket, FileText } from "lucide-react";
import CPSlideContainer from "@/components/consumer-pitch/CPSlideContainer";
import type { SlideNarrationProps } from "@/types/slideProps";

const tiles = [
  {
    icon: LayoutGrid,
    title: "The Connected Platform",
    detail: "Single login · 6 solutions · one taxonomy across 50+ markets",
  },
  {
    icon: Sparkles,
    title: "Ava AI Workspace",
    detail: "Agentic assistant · natural-language queries · proactive alerts",
  },
  {
    icon: Database,
    title: "Analyst-Validated Data",
    detail: "25,000 companies · 1,000+ segments · 95% global GDP · continuously refreshed",
  },
  {
    icon: Users,
    title: "Dedicated Domain Experts",
    detail: "Named analysts and industry advisors embedded in your workflows",
  },
  {
    icon: Rocket,
    title: "90-Day Onboarding & Taxonomy Mapping",
    detail: "White-glove deployment mapped to your categories",
  },
  {
    icon: FileText,
    title: "Executive Briefings & Custom Research",
    detail: "Quarterly board-ready deep dives, on demand",
  },
];

const timeline = [
  { day: "Day 1", text: "Platform access · taxonomy workshop · named analyst introduced" },
  { day: "Day 30", text: "Your category mapped · first cross-solution dashboards live" },
  { day: "Day 90", text: "Ava trained on your portfolio · first connected decision delivered" },
];

const CJSlideWhatYouGet = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cj-slide-whatyouget"
      title="What You Actually Get"
      showTitle={false}
      slideNumber={7}
      variant="light"
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-2">
            What You Actually Get
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
            One platform. Six deliverables. <span className="text-primary">Live in 90 days.</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Beyond the vision — here's what lands in your business.
          </p>
        </div>

        {/* 6-tile grid */}
        <div className="grid grid-cols-3 gap-3 w-full mb-5">
          {tiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <div
                key={tile.title}
                className="rounded-xl border border-border bg-card/60 p-4 flex flex-col gap-2 hover:border-primary/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <h3 className="text-sm font-display font-bold text-foreground leading-tight">
                  {tile.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug">{tile.detail}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline strip */}
        <div className="w-full">
          <div className="grid grid-cols-3 gap-3">
            {timeline.map((step) => (
              <div
                key={step.day}
                className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-2.5 flex items-start gap-3"
              >
                <span className="text-xs font-bold text-primary uppercase tracking-wider shrink-0">
                  {step.day}
                </span>
                <span className="text-[11px] text-foreground/80 leading-snug">{step.text}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground italic text-right mt-2">
            Renewed annually · Advisory included
          </p>
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default CJSlideWhatYouGet;
