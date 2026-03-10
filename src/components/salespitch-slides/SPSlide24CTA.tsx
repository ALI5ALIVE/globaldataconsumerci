import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import globalDataLogoWhite from "@/assets/globaldata-logo-white.svg";

const SPSlide24CTA = (props: SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-24"
      title=""
      showTitleAccent={false}
      slideNumber={24}
      {...props}
    >
      <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
        <img src={globalDataLogoWhite} alt="GlobalData" className="h-10 sm:h-14 opacity-80" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight max-w-3xl">
          <span className="title-accent">Let's Embed Foresight Into Your Strategy</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Together, we can turn foresight into measurable advantage — ensuring every decision compounds long-term competitive advantage.
        </p>
        <a
          href="https://globaldata.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
        >
          globaldata.com
        </a>
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide24CTA;
