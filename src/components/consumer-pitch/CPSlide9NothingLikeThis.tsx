import { motion } from "framer-motion";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const CPSlide9NothingLikeThis = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-9"
      title=""
      showTitle={false}
      slideNumber={9}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Let's be direct
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-foreground leading-tight max-w-4xl"
        >
          Nothing like this{" "}
          <span className="text-primary">exists.</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="w-24 h-1 bg-primary rounded-full my-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
        >
          No one has ever connected strategic foresight, market sizing, competitive tracking,
          innovation validation, and commercial intelligence through a single consumer-connected taxonomy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="text-sm text-primary mt-6"
        >
          Not a rebundle. Not a portal. A genuinely unified intelligence platform.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8, duration: 0.5 }}
          className="mt-8 px-5 py-2.5 rounded-full bg-card/60 border border-border text-sm text-foreground"
        >
          8 of the top 10 FMCG companies already trust it.
        </motion.p>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide9NothingLikeThis;
