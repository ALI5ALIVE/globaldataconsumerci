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
            transition={{ delay: 2.2, duration: 0.6 }}
            className="text-sm text-primary font-medium"
          >
            Five best-in-class solutions. One AI assistant. One completely new way of working.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            className="text-sm text-muted-foreground font-medium"
          >
            And David? Fourteen contracts become one — best-in-class at 30% lower cost.
          </motion.p>
        </div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide4ImagineOneLens;
