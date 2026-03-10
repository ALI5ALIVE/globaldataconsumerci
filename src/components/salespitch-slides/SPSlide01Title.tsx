import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import globalDataLogoWhite from "@/assets/globaldata-logo-white.svg";

interface SPSlide01TitleProps extends SlideNarrationProps {
  onNavigateToSlide?: (index: number) => void;
}

const SPSlide01Title = ({ onNavigateToSlide, ...narrationProps }: SPSlide01TitleProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-1"
      title=""
      showTitleAccent={false}
      slideNumber={1}
      {...narrationProps}
    >
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <img src={globalDataLogoWhite} alt="GlobalData" className="h-12 sm:h-16 opacity-90" />
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            <span className="title-accent">Connected Intelligence</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2">
            Sales Deck
          </p>
          <p className="text-sm text-muted-foreground">
            12th October 2025
          </p>
        </div>
        {onNavigateToSlide && (
          <button
            onClick={() => onNavigateToSlide(1)}
            className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Begin Presentation
          </button>
        )}
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide01Title;
