import { SlideNarrationProps } from "@/types/slideProps";
import SPSlideContainer from "./SPSlideContainer";
import { Zap, Clock, Swords, AlertTriangle } from "lucide-react";

const SPSlide04MarketSpeed = (props: SlideNarrationProps) => {
  return (
    <SPSlideContainer
      id="sp-slide-4"
      title="Markets Reward Speed and Punish Delay"
      subtitle="Why the Intelligence Gap is widening for consumer brands"
      slideNumber={4}
      {...props}
    >
      <div className="flex flex-col h-full gap-4">
        {/* Three stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Zap, stat: "3×", label: "Faster behaviour shifts", color: "text-primary" },
            { icon: Clock, stat: "40%", label: "Narrower windows", color: "text-accent" },
            { icon: Swords, stat: "2×", label: "Faster competitor moves", color: "text-destructive" },
          ].map((item, i) => (
            <div key={i} className="bg-card/50 border border-border rounded-xl p-4 text-center">
              <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-2`} />
              <p className={`text-2xl sm:text-3xl font-bold ${item.color}`}>{item.stat}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
          {/* Paradox */}
          <div className="bg-card/30 border border-primary/20 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-500">The Paradox</h3>
            </div>
            <p className="text-base font-semibold mb-2">More insight than ever, yet less confidence to act.</p>
            <p className="text-sm text-muted-foreground">Data abundance hasn't created clarity. It's created noise, debate, and missed windows.</p>

            <div className="mt-4 pt-4 border-t border-border">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">What Winners Do</h4>
              <p className="text-sm text-muted-foreground">Connected intelligence that moves the entire organisation together. Unilever, PepsiCo, and Nestlé don't have more data—they have unified truth.</p>
            </div>
          </div>

          {/* Case in point */}
          <div className="bg-card/30 border border-destructive/20 rounded-xl p-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-destructive mb-3">Case in Point</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In 2023, a major CPG company missed the protein snacking wave. Their insight, innovation, and sales teams had three different views of the opportunity. By the time they aligned, <span className="text-foreground font-medium">Grenade and Barebells had claimed the shelf</span>.
            </p>
          </div>
        </div>
      </div>
    </SPSlideContainer>
  );
};

export default SPSlide04MarketSpeed;
