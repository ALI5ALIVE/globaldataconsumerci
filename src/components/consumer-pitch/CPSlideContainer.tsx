import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import SlidePlayButton from "@/components/SlidePlayButton";

interface CPSlideContainerProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  variant?: "dark" | "light";
  slideNumber?: number;
  showTitle?: boolean;
  isPlaying?: boolean;
  isLoading?: boolean;
  progress?: number;
  hasCompleted?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
  onNextSlide?: () => void;
}

const CPSlideContainer = ({
  id,
  title,
  subtitle,
  children,
  className,
  variant = "dark",
  slideNumber,
  showTitle = true,
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: CPSlideContainerProps) => {
  return (
    <section
      id={id}
      className={cn(
        "h-screen w-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8 snap-start relative overflow-hidden",
        variant === "light" ? "bg-gd-cream text-foreground" : "bg-background",
        className
      )}
    >
      {onPlay && (
        <SlidePlayButton
          isPlaying={isPlaying}
          isLoading={isLoading}
          progress={progress}
          hasCompleted={hasCompleted}
          onPlay={onPlay}
          onPause={onPause ?? (() => {})}
          onNextSlide={onNextSlide}
          variant={variant}
        />
      )}

      <div className="max-w-7xl w-full mx-auto flex-1 flex flex-col relative">
        <div className="absolute bottom-2 left-0 hidden sm:block">
          <p className="text-[10px] text-muted-foreground">
            © 2026 GlobalData · Connected Consumer Intelligence
          </p>
        </div>

        {slideNumber !== undefined && (
          <div className="absolute bottom-2 right-0">
            <span className="text-sm font-medium text-muted-foreground">
              {String(slideNumber).padStart(2, '0')}
            </span>
          </div>
        )}

        {showTitle && (
          <div className="mb-2 sm:mb-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-tight mb-2 text-foreground">
              <span className="title-accent">{title}</span>
            </h2>
            {subtitle && (
              <p className="text-primary text-sm sm:text-base md:text-lg max-w-3xl mt-2">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="w-full flex-1 min-h-0 relative">{children}</div>
      </div>
    </section>
  );
};

export default CPSlideContainer;
