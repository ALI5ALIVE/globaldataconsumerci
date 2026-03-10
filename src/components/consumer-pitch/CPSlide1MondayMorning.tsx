import { motion } from "framer-motion";
import { Mail, TrendingUp, Shield, Beaker, BarChart3, Users, FileText } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const notifications = [
  { icon: Mail, text: "CEO: What's our plant-based strategy?", delay: 0.2, color: "text-red-400" },
  { icon: TrendingUp, text: "Sales: Need competitive context for Tesco by tomorrow", delay: 0.5, color: "text-amber-400" },
  { icon: Beaker, text: "Innovation: Has the protein trend peaked?", delay: 0.8, color: "text-emerald-400" },
  { icon: Shield, text: "R&D: Clean-label regs in 3 markets?", delay: 1.1, color: "text-sky-400" },
  { icon: BarChart3, text: "Finance: Category sizing for board deck", delay: 1.4, color: "text-violet-400" },
  { icon: Users, text: "Marketing: Consumer sentiment on sustainability", delay: 1.7, color: "text-pink-400" },
  { icon: FileText, text: "Regulatory: Reformulation timeline impact", delay: 2.0, color: "text-orange-400" },
];

const CPSlide1MondayMorning = (props: SlideNarrationProps) => {
  return (
    <CPSlideContainer
      id="cp-slide-1"
      title="Your Monday Morning"
      subtitle="Seven questions. Seven tools. Zero alignment."
      slideNumber={1}
      {...props}
    >
      <div className="h-full flex flex-col items-center justify-center gap-4 relative">
        {/* Overwhelming notification stream */}
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

        {/* Bottom tension line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="text-muted-foreground text-sm sm:text-base mt-4 text-center italic"
        >
          Your data lives in seven different places. Seven versions of the truth.
        </motion.p>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide1MondayMorning;
