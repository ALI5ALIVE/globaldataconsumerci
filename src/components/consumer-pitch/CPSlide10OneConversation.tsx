import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";
import globalDataLogo from "@/assets/globaldata-logo-white.svg";

const CPSlide10OneConversation = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-10"
      title=""
      showTitle={false}
      slideNumber={10}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center text-center px-4">
        <motion.img
          src={globalDataLogo}
          alt="GlobalData"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-6 sm:h-8 mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground">
            90 Days
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground mt-2">
            to unified consumer intelligence
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-16 h-0.5 bg-primary rounded-full mb-8 origin-left"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="space-y-3 max-w-md"
        >
          <p className="text-sm text-muted-foreground">
            Seven vendors become one platform.
          </p>
          <p className="text-sm text-muted-foreground">
            Your teams move from reconciling data to reading consumers.
          </p>
          <p className="text-sm text-primary font-medium">
            Every week of delay is a consumer trend missed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-10 flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30"
        >
          <span className="text-base font-semibold text-foreground">
            Let's have the conversation
          </span>
          <ArrowRight className="w-5 h-5 text-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-6 text-xs text-muted-foreground"
        >
          globaldata.com · Connected Consumer Intelligence
        </motion.p>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide10OneConversation;
