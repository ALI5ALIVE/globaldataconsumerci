import { motion } from "framer-motion";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";
import CJOneLensHub from "@/components/consumer-journey/CJOneLensHub";

const CPSlide4ImagineOneLens = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-4"
      title="Imagine One Lens"
      slideNumber={4}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center relative">
        <div className="flex-1 w-full flex items-center justify-center min-h-0">
          <CJOneLensHub />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="text-center max-w-xl pb-2"
        >
          <p className="text-sm text-primary font-medium">
            One opportunity — plant-based protein — seen through one connected lens. From the first signal to the shelf.
          </p>
        </motion.div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide4ImagineOneLens;
