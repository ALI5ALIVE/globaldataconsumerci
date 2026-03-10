import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const convergenceItems = [
  "Strategic", "Competitive", "Market", "Innovation", "Commercial"
];

const CPSlide4ImagineOneLens = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-4"
      title="Imagine One Lens"
      slideNumber={4}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center relative">
        {/* Convergence animation */}
        <div className="relative w-80 h-80 sm:w-96 sm:h-96">
          {/* Central unified circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 m-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-center"
            >
              <Eye className="w-8 h-8 text-primary mx-auto mb-1" />
              <p className="text-xs sm:text-sm font-semibold text-foreground">One Truth</p>
            </motion.div>
          </motion.div>

          {/* Converging items */}
          {convergenceItems.map((item, i) => {
            const angle = (i / convergenceItems.length) * Math.PI * 2 - Math.PI / 2;
            const startRadius = 160;
            const startX = Math.cos(angle) * startRadius;
            const startY = Math.sin(angle) * startRadius;

            return (
              <motion.div
                key={item}
                initial={{ x: startX, y: startY, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, y: 0, opacity: [0, 1, 1, 0.6], scale: [0.8, 1, 1, 0.5] }}
                transition={{ delay: 0.15 * i, duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 m-auto w-20 h-20 flex items-center justify-center"
              >
                <div className="px-3 py-2 rounded-lg bg-card/80 border border-border text-xs font-medium text-foreground whitespace-nowrap">
                  {item}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reveal text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="mt-6 text-center max-w-xl"
        >
          <p className="text-lg sm:text-xl text-foreground font-medium">
            One taxonomy. One truth. From trend to shelf.
          </p>
          <p className="text-sm text-primary mt-2">
            That's not a dream. It exists.
          </p>
        </motion.div>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide4ImagineOneLens;
