import GDSlideContainer from "./GDSlideContainer";
import { 
  Lightbulb, 
  ClipboardCheck, 
  Clock, 
  Video, 
  FileText,
  Users, 
  Globe, 
  Award, 
  Timer,
  Shield,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { SlideNarrationProps } from "@/types/slideProps";

interface CTACardProps {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  bullets: string[];
  duration: string;
  durationIcon: React.ReactNode;
  secondaryBadge: string;
  secondaryIcon: React.ReactNode;
  buttonText: string;
  variant: "primary" | "secondary";
}

const CTACard = ({
  icon,
  title,
  tagline,
  bullets,
  duration,
  durationIcon,
  secondaryBadge,
  secondaryIcon,
  buttonText,
  variant,
}: CTACardProps) => {
  const isPrimary = variant === "primary";
  
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border p-5 transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-lg cursor-pointer group",
        isPrimary
          ? "border-primary/30 bg-gradient-to-br from-primary/5 to-sky-400/5 hover:border-primary/50"
          : "border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-teal-400/5 hover:border-cyan-500/50"
      )}
    >
      {/* Icon and Title */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg",
            isPrimary ? "bg-primary/10 text-primary" : "bg-cyan-500/10 text-cyan-500"
          )}
        >
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className={cn(
            "text-xs font-medium",
            isPrimary ? "text-primary" : "text-cyan-500"
          )}>
            {tagline}
          </p>
        </div>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-2 mb-4 flex-1">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className={cn(
              "h-4 w-4 mt-0.5 flex-shrink-0",
              isPrimary ? "text-primary/70" : "text-cyan-500/70"
            )} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex items-center gap-1.5 rounded-full bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
          {durationIcon}
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
          {secondaryIcon}
          <span>{secondaryBadge}</span>
        </div>
      </div>

      {/* CTA Button */}
      <button
        className={cn(
          "flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all",
          "group-hover:gap-3",
          isPrimary
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-cyan-500 text-white hover:bg-cyan-600"
        )}
      >
        {buttonText}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
};

interface TrustBadgeProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const TrustBadge = ({ icon, value, label }: TrustBadgeProps) => (
  <div className="flex items-center gap-2 rounded-lg bg-card/50 border border-border/50 px-3 py-2">
    <div className="text-primary/70">{icon}</div>
    <div className="flex flex-col">
      <span className="text-xs font-semibold text-foreground">{value}</span>
      <span className="text-[10px] text-muted-foreground">{label}</span>
    </div>
  </div>
);

const GDSlide10CTA = ({
  isPlaying,
  isLoading,
  progress,
  hasCompleted,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const trustSignals = [
    { icon: <Users className="h-4 w-4" />, value: "8 of Top 10", label: "FMCG Brands" },
    { icon: <Globe className="h-4 w-4" />, value: "95%", label: "Global GDP" },
    { icon: <Award className="h-4 w-4" />, value: "200+", label: "Consumer Brands" },
    { icon: <Timer className="h-4 w-4" />, value: "15+", label: "Years Expertise" },
    { icon: <Shield className="h-4 w-4" />, value: "Enterprise", label: "Security" },
  ];

  return (
    <GDSlideContainer
      id="gd-slide-10"
      title="Let's Close Your Intelligence Gap"
      subtitle="Choose your path to Connected Intelligence"
      slideNumber={11}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col h-full gap-4">
        {/* Two CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          <CTACard
            icon={<Lightbulb className="h-5 w-5" />}
            title="Discovery Session"
            tagline="See the Art of the Possible"
            bullets={[
              "Deep dive into 5 core intelligence solutions",
              "Use cases tailored to your specific challenges",
              "Live platform demonstration",
            ]}
            duration="60 minutes"
            durationIcon={<Clock className="h-3.5 w-3.5" />}
            secondaryBadge="Virtual or In-person"
            secondaryIcon={<Video className="h-3.5 w-3.5" />}
            buttonText="Schedule Discovery"
            variant="primary"
          />
          
          <CTACard
            icon={<ClipboardCheck className="h-5 w-5" />}
            title="Intelligence Audit"
            tagline="Benchmark Your Current Landscape"
            bullets={[
              "Map your existing tools and data sources",
              "Identify gaps, redundancies, and blind spots",
              "Maturity stage assessment with recommendations",
            ]}
            duration="90 minutes"
            durationIcon={<Clock className="h-3.5 w-3.5" />}
            secondaryBadge="Custom Audit Report"
            secondaryIcon={<FileText className="h-3.5 w-3.5" />}
            buttonText="Request Audit"
            variant="secondary"
          />
        </div>

        {/* Urgency Banner */}
        <div className="rounded-lg border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/20">
              <Clock className="h-4 w-4 text-amber-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-0.5">
                The Cost of Waiting
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Every week of decision latency compounds: missed market windows, competitor advantage, 
                and intelligence debt that becomes harder to recover.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-3">
          {trustSignals.map((signal, index) => (
            <TrustBadge
              key={index}
              icon={signal.icon}
              value={signal.value}
              label={signal.label}
            />
          ))}
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide10CTA;
