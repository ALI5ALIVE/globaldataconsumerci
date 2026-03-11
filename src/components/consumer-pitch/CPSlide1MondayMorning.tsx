import { motion } from "framer-motion";
import { Mail, TrendingUp, Shield, Beaker, BarChart3, Users, FileText } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const notifications = [
  { icon: Mail, text: "CEO: The board wants our plant-based protein position by Friday", delay: 0.2, color: "text-red-400" },
  { icon: TrendingUp, text: "Strategy: Our trend provider says plant-based is peaking — but social data says it's accelerating", delay: 0.5, color: "text-amber-400" },
  { icon: BarChart3, text: "Market Sizing: Finance needs a TAM number. Ours says $1.4B. The consultant says $2.1B", delay: 0.8, color: "text-emerald-400" },
  { icon: Shield, text: "Competitive Intel: A rival just filed four patents in plant-based protein. Where did that come from?", delay: 1.1, color: "text-sky-400" },
  { icon: Beaker, text: "Innovation: We have five concepts in the pipeline — which ones should we kill?", delay: 1.4, color: "text-violet-400" },
  { icon: Users, text: "Commercial: The buyer at our biggest retailer wants a plant-based range proposal by next month", delay: 1.7, color: "text-pink-400" },
  { icon: FileText, text: "Procurement: We're paying six vendors for overlapping data. Renewal season is in three weeks", delay: 2.0, color: "text-orange-400" },
];

const CPSlide1MondayMorning = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-1"
      title="Your Monday Morning"
      subtitle="One opportunity. Seven opinions. Zero alignment."
      slideNumber={1}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center gap-4 relative">
        <div className="w-full max-w-2xl space-y-3">
          {notifications.map((notif, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: notif.delay, duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-4 px-5 py-3 rounded-lg bg-card/60 border border-border/50 backdrop-blur-sm"
            >
              <notif.icon className={`w-5 h-5 ${notif.color} shrink-0`} />
              <span className="text-sm sm:text-base text-foreground/90">{notif.text}</span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: notif.delay + 0.5, duration: 2 }}
                className="absolute bottom-0 left-0 h-[1px] bg-primary/20"
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="text-muted-foreground text-sm sm:text-base mt-4 text-center italic"
        >
          One opportunity. Seven teams. Seven answers. Which one do you trust?
        </motion.p>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide1MondayMorning;
