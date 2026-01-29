import { Play, Pause, Loader2, RotateCcw, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlidePlayButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  progress: number;
  hasCompleted?: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNextSlide?: () => void;
  variant?: "dark" | "light";
}

const SlidePlayButton = ({
  isPlaying,
  isLoading,
  progress,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
  variant = "dark",
}: SlidePlayButtonProps) => {
  const handleClick = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  return (
    <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-30 flex flex-row-reverse items-center gap-3">
      {/* Main play/pause button */}
      <button
        onClick={handleClick}
        className={cn(
          "w-14 h-14 rounded-full relative",
          "flex items-center justify-center",
          "shadow-lg hover:shadow-xl hover:scale-105",
          "transition-all duration-200",
          variant === "light"
            ? "bg-primary/90 hover:bg-primary border-2 border-primary-foreground/20"
            : "bg-primary/90 hover:bg-primary border-2 border-primary-foreground/20",
          isPlaying && "bg-primary/70"
        )}
        title={hasCompleted ? "Replay narration" : isPlaying ? "Pause narration" : "Play narration"}
      >
        {isLoading ? (
          <Loader2 className="w-6 h-6 text-primary-foreground animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-6 h-6 text-primary-foreground" />
        ) : hasCompleted ? (
          <RotateCcw className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
        )}

        {/* Circular progress indicator */}
        <svg 
          className="absolute inset-0 -rotate-90 pointer-events-none"
          width="56"
          height="56"
          viewBox="0 0 56 56"
        >
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-foreground/20"
          />
          {(isPlaying || progress > 0) && (
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 26}`}
              strokeDashoffset={`${2 * Math.PI * 26 * (1 - progress / 100)}`}
              className="text-primary-foreground transition-all duration-150"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {/* Next slide button - shown after completion */}
      {hasCompleted && onNextSlide && (
        <button
          onClick={onNextSlide}
          className={cn(
            "flex items-center gap-2 px-3 py-1.5 rounded-full",
            "bg-card/80 backdrop-blur-sm border border-border",
            "text-xs font-medium text-foreground",
            "hover:bg-card hover:border-primary/50",
            "transition-all duration-200"
          )}
        >
          Next
          <ChevronRight className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};

export default SlidePlayButton;
