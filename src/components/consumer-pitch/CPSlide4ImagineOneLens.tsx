import { motion } from "framer-motion";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";
import CJOneLensHub from "@/components/consumer-journey/CJOneLensHub";

const CPSlide4ImagineOneLens = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-4"
      title="Now Imagine One Lens, One New Way of Working"
      slideNumber={4}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center relative">
        <div className="flex-1 w-full flex items-center justify-center min-h-0">
          <CJOneLensHub />
        </div>

        <div className="text-center max-w-xl pb-2 space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="text-sm text-primary font-medium"
          >
            One opportunity — plant-based protein — seen through one connected lens. From the first signal to the shelf.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 0.6 }}
            className="text-sm text-muted-foreground font-medium"
          >
            And David? He consolidates fourteen contracts into one — best-in-class solutions, 30% lower cost, with data access his teams never had before.
          </motion.p>
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide4ImagineOneLens;
