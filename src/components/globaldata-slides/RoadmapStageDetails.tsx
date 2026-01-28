import { Wrench, Users, Lightbulb, Clock } from "lucide-react";

export interface RoadmapStage {
  id: string;
  stage: number;
  headline: string;
  sublabel: string;
  accentColor: string;
  waysOfWorking: {
    keyActions: string[];
    teamBehavior: string;
    exampleUseCase: string;
    timeToDecision: string;
  };
}

interface RoadmapStageDetailsProps {
  stage: RoadmapStage;
}

const RoadmapStageDetails = ({ stage }: RoadmapStageDetailsProps) => {
  return (
    <div className="space-y-2">
      {/* Header */}
      <div className="flex items-start gap-2 mb-2">
        <div
          className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-xs font-bold"
          style={{
            background: `linear-gradient(135deg, ${stage.accentColor}, ${stage.accentColor}80)`,
            color: "white",
          }}
        >
          {stage.stage}
        </div>
        <div>
          <h3 className="text-sm lg:text-base font-bold text-foreground leading-tight">
            {stage.headline}
          </h3>
          <p
            className="text-[10px] font-medium mt-0.5"
            style={{ color: stage.accentColor }}
          >
            {stage.sublabel}
          </p>
        </div>
      </div>

      {/* Key Actions */}
      <div className="mb-2">
        <div className="flex items-center gap-1.5 mb-1">
          <Wrench className="w-3 h-3" style={{ color: stage.accentColor }} />
          <span
            className="text-[9px] font-semibold uppercase tracking-wider"
            style={{ color: stage.accentColor }}
          >
            Key Actions
          </span>
        </div>
        <ul className="space-y-0.5">
          {stage.waysOfWorking.keyActions.map((action, i) => (
            <li
              key={i}
              className="flex items-start gap-1.5 text-[10px] text-muted-foreground"
            >
              <span
                className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: stage.accentColor }}
              />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Team Behavior */}
      <div className="mb-2">
        <div className="flex items-center gap-1.5 mb-1">
          <Users className="w-3 h-3" style={{ color: stage.accentColor }} />
          <span
            className="text-[9px] font-semibold uppercase tracking-wider"
            style={{ color: stage.accentColor }}
          >
            Team Behavior
          </span>
        </div>
        <p className="text-[10px] text-muted-foreground pl-4">
          {stage.waysOfWorking.teamBehavior}
        </p>
      </div>

      {/* Example Use Case */}
      <div className="mb-2">
        <div className="flex items-center gap-1.5 mb-1">
          <Lightbulb className="w-3 h-3" style={{ color: stage.accentColor }} />
          <span
            className="text-[9px] font-semibold uppercase tracking-wider"
            style={{ color: stage.accentColor }}
          >
            Real Example
          </span>
        </div>
        <div
          className="flex items-start gap-1.5 p-2 rounded-lg"
          style={{ backgroundColor: `${stage.accentColor}15` }}
        >
          <span className="text-[10px] italic text-muted-foreground">
            "{stage.waysOfWorking.exampleUseCase}"
          </span>
        </div>
      </div>

      {/* Time to Decision */}
      <div
        className="flex items-center justify-between p-2 rounded-lg"
        style={{ backgroundColor: `${stage.accentColor}20` }}
      >
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3" style={{ color: stage.accentColor }} />
          <span
            className="text-[9px] font-semibold uppercase tracking-wider"
            style={{ color: stage.accentColor }}
          >
            Time to Decision
          </span>
        </div>
        <span
          className="text-sm font-bold"
          style={{ color: stage.accentColor }}
        >
          {stage.waysOfWorking.timeToDecision}
        </span>
      </div>
    </div>
  );
};

export default RoadmapStageDetails;
