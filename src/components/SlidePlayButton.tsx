import { Play, Pause, Loader2, RotateCcw, ChevronRight, Volume2 } from "lucide-react";
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

  // Compact pill when idle (not playing, not completed)
  const isIdle = !isPlaying && !isLoading && !hasCompleted && progress === 0;

  return (
    <div data-deck-ui="true" className="absolute top-5 right-5 sm:top-7 sm:right-9 z-30 flex flex-row-reverse items-center gap-2 print:hidden">
      {/* Main play/pause control */}
      <button
        onClick={handleClick}
        className={cn(
          "relative flex items-center gap-2 transition-all duration-300 ease-out",
          isIdle
            ? "h-9 px-4 rounded-full bg-foreground/8 backdrop-blur-md border border-foreground/10 hover:bg-foreground/14 hover:border-foreground/20"
            : "h-10 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/12 hover:bg-foreground/16",
          isPlaying && "pl-3 pr-1.5",
          !isIdle && !isPlaying && "px-3",
        )}
        title={hasCompleted ? "Replay narration" : isPlaying ? "Pause narration" : "Play narration"}
      >
        {/* Icon */}
        {isLoading ? (
          <Loader2 className="w-4 h-4 text-foreground/70 animate-spin" />
        ) : isPlaying ? (
          <Volume2 className="w-4 h-4 text-foreground/80" />
        ) : hasCompleted ? (
          <RotateCcw className="w-3.5 h-3.5 text-foreground/60" />
        ) : (
          <Play className="w-3.5 h-3.5 text-foreground/60 ml-0.5" fill="currentColor" />
        )}

        {/* Label for idle state */}
        {isIdle && (
          <span className="text-[11px] font-medium text-foreground/50 tracking-wide uppercase">
            Listen
          </span>
        )}

        {/* Inline progress bar when playing */}
        {isPlaying && (
          <div className="w-16 h-1 rounded-full bg-foreground/10 overflow-hidden mx-1">
            <div
              className="h-full rounded-full bg-foreground/50 transition-all duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Pause icon when playing */}
        {isPlaying && (
          <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center">
            <Pause className="w-3 h-3 text-foreground/70" />
          </div>
        )}

        {/* Replay label */}
        {hasCompleted && !isPlaying && (
          <span className="text-[11px] font-medium text-foreground/50 tracking-wide">
            Replay
          </span>
        )}
      </button>

      {/* Next slide pill - shown after completion */}
      {hasCompleted && onNextSlide && (
        <button
          onClick={onNextSlide}
          className={cn(
            "flex items-center gap-1.5 h-8 px-3 rounded-full",
            "bg-foreground/8 backdrop-blur-md border border-foreground/10",
            "text-[11px] font-medium text-foreground/50 tracking-wide",
            "hover:bg-foreground/14 hover:text-foreground/70",
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
