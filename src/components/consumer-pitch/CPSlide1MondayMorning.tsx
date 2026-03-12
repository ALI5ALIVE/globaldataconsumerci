import { motion } from "framer-motion";
import { Search, Filter, Mail } from "lucide-react";
import CPSlideContainer from "./CPSlideContainer";
import { SlideNarrationProps } from "@/types/slideProps";

const emails = [
  { sender: "CEO", subject: "The board wants our plant-based protein position by Friday", time: "9:02 AM", delay: 0.3 },
  { sender: "Head of Strategy", subject: "Our trend provider says plant-based is peaking — but social data says it's accelerating", time: "9:08 AM", delay: 0.55 },
  { sender: "Finance / Market Intel", subject: "Finance needs a TAM number. Ours says $1.4B. The consultant says $2.1B", time: "9:14 AM", delay: 0.8 },
  { sender: "Competitive Intel", subject: "A rival just filed four patents in plant-based protein. Where did that come from?", time: "9:21 AM", delay: 1.05 },
  { sender: "Innovation Lead", subject: "We have five concepts in the pipeline — which ones should we kill?", time: "9:27 AM", delay: 1.3 },
  { sender: "Commercial / Sales", subject: "The buyer at our biggest retailer wants a plant-based range proposal by next month", time: "9:33 AM", delay: 1.55 },
  { sender: "Procurement", subject: "We're paying six vendors for overlapping data. Renewal season is in three weeks", time: "9:41 AM", delay: 1.8 },
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
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl">
          {/* Inbox chrome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Inbox</span>
                <span className="text-[10px] font-bold bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 leading-none">7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-background text-muted-foreground text-xs w-48">
                  <Search className="w-3 h-3" />
                  <span>Search mail…</span>
                </div>
                <Filter className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Email rows */}
            <div className="divide-y divide-border/50">
              {emails.map((email, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: email.delay, duration: 0.35 }}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-muted/30 transition-colors cursor-default"
                >
                  {/* Unread dot */}
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />

                  {/* Sender */}
                  <span className="text-xs sm:text-sm font-bold text-foreground w-28 sm:w-36 shrink-0 truncate">
                    {email.sender}
                  </span>

                  {/* Subject */}
                  <span className="flex-1 text-xs sm:text-sm text-muted-foreground truncate">
                    {email.subject}
                  </span>

                  {/* Time */}
                  <span className="text-[10px] sm:text-xs text-muted-foreground/70 shrink-0 tabular-nums">
                    {email.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          className="text-muted-foreground text-sm mt-6 text-center italic"
        >
          One opportunity. Seven teams. Seven answers. Which one do you trust?
        </motion.p>
      </div>
    </CPSlideContainer>
  );
};

export default CPSlide1MondayMorning;
