import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight, User, Briefcase, BarChart3 } from "lucide-react";
import GDSlideContainer from "./GDSlideContainer";
import { solutionDeepDives, type SolutionDeepDive } from "@/data/solutionDeepDives";
import { SlideNarrationProps } from "@/types/slideProps";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const roleIcons: Record<string, React.ReactNode> = {
  CMO: <User className="w-4 h-4" />,
  CSO: <Briefcase className="w-4 h-4" />,
  "Category Lead": <BarChart3 className="w-4 h-4" />,
};

const GDSlide10SolutionDeepDives = ({
  isPlaying = false,
  isLoading = false,
  progress = 0,
  hasCompleted = false,
  onPlay,
  onPause,
  onNextSlide,
}: SlideNarrationProps) => {
  const [activeSolution, setActiveSolution] = useState<string>("strategic");

  const currentSolution = solutionDeepDives.find((s) => s.id === activeSolution) || solutionDeepDives[0];

  return (
    <GDSlideContainer
      id="gd-slide-10"
      title="Explore Your Intelligence Needs"
      subtitle="Click any solution to see how it solves real consumer brand challenges"
      slideNumber={10}
      isPlaying={isPlaying}
      isLoading={isLoading}
      progress={progress}
      hasCompleted={hasCompleted}
      onPlay={onPlay}
      onPause={onPause}
      onNextSlide={onNextSlide}
    >
      <div className="flex flex-col gap-6">
        {/* Solution Tabs */}
        <Tabs value={activeSolution} onValueChange={setActiveSolution} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-transparent h-auto p-0">
            {solutionDeepDives.map((solution) => {
              const Icon = solution.icon;
              return (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200",
                    "data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary",
                    "data-[state=inactive]:border-border data-[state=inactive]:bg-card/50 data-[state=inactive]:text-muted-foreground",
                    "hover:border-primary/50 hover:bg-primary/5"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{solution.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <AnimatePresence mode="wait">
            {solutionDeepDives.map((solution) => (
              <TabsContent key={solution.id} value={solution.id} className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {/* Left Column: JTBD + Pain Mapping */}
                  <div className="flex flex-col gap-5">
                    {/* JTBD Statement */}
                    <div className="bg-card/60 border border-border rounded-xl p-5">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Jobs to Be Done
                      </h4>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          <span className="text-primary font-medium">When</span> {solution.jtbd.when}...
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-primary font-medium">I want to</span> {solution.jtbd.iWantTo}...
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          <span className="text-primary font-medium">So that</span> {solution.jtbd.soThat}.
                        </p>
                      </div>
                    </div>

                    {/* Pain → Capability → Outcome */}
                    <div className="bg-card/60 border border-border rounded-xl p-5">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Pain → Capability → Outcome
                      </h4>
                      <div className="space-y-4">
                        {solution.painToCapability.map((item, idx) => (
                          <div key={idx} className="flex flex-col gap-1.5">
                            <div className="flex items-start gap-2">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/20 text-destructive flex items-center justify-center text-xs font-medium">
                                {idx + 1}
                              </span>
                              <p className="text-sm text-muted-foreground">{item.pain}</p>
                            </div>
                            <div className="flex items-center gap-2 ml-7">
                              <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                              <p className="text-sm text-foreground">{item.capability}</p>
                            </div>
                            <div className="flex items-center gap-2 ml-7">
                              <ChevronRight className="w-3 h-3 text-accent flex-shrink-0" />
                              <p className="text-sm text-accent font-medium">{item.outcome}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Role Use Cases */}
                    <div className="bg-card/60 border border-border rounded-xl p-5">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Who Uses This
                      </h4>
                      <div className="space-y-2">
                        {solution.useCases.map((uc, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                              {roleIcons[uc.role] || <User className="w-3 h-3" />}
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-foreground">{uc.role}</p>
                              <p className="text-xs text-muted-foreground">{uc.useCase}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Real-Life Example + Capabilities */}
                  <div className="flex flex-col gap-5">
                    {/* Real-Life Example */}
                    <div className="rounded-xl p-5 border border-primary/30 bg-primary/10">
                      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                        Real-Life Example
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-1">{solution.example.brand}</p>
                          <p className="text-sm text-muted-foreground">{solution.example.challenge}</p>
                        </div>
                        <div className="border-t border-border pt-3">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                            What They Did
                          </p>
                          <p className="text-sm text-muted-foreground">{solution.example.action}</p>
                        </div>
                        <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                            The Result
                          </p>
                          <p className="text-sm font-medium text-foreground">{solution.example.result}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Capabilities */}
                    <div className="bg-card/60 border border-border rounded-xl p-5 flex-1">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Key Capabilities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.capabilities.map((cap, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-border/50">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
            Let's Discuss Your Priorities
          </button>
          <button className="px-6 py-3 border border-border text-muted-foreground rounded-lg font-medium text-sm hover:border-primary hover:text-primary transition-colors">
            Download Solution Briefs
          </button>
        </div>
      </div>
    </GDSlideContainer>
  );
};

export default GDSlide10SolutionDeepDives;
