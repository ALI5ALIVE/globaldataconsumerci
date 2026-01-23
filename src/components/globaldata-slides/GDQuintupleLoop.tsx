import { useState } from "react";

interface GDQuintupleLoopProps {
  onModuleClick?: (module: string) => void;
}

const modules = [
  { id: "market", label: "Market" },
  { id: "innovation", label: "Innovation" },
  { id: "consumer", label: "Consumer" },
  { id: "competitive", label: "Competitive" },
  { id: "commercial", label: "Commercial" },
];

const GDQuintupleLoop = ({ onModuleClick }: GDQuintupleLoopProps) => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  // Overlapping infinity model dimensions - sized to fit within pyramid layer
  const loopRadius = 50;
  const loopSpacing = 80;
  const startX = 90;
  const cy = 85;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 500 200" className="w-full h-full">
        <defs>
          <filter id="gdLoopGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feFlood floodColor="hsl(0, 0%, 100%)" floodOpacity="0.7" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="gdLoopHoverGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feFlood floodColor="hsl(45, 93%, 70%)" floodOpacity="0.9" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="gdCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(0, 0%, 100%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(0, 0%, 100%)" stopOpacity="0" />
          </radialGradient>
          {/* Intersection highlight gradient */}
          <radialGradient id="gdIntersectionGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(45, 93%, 65%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(45, 93%, 58%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central radial glow - "One Truth" */}
        <circle cx="250" cy={cy} r="160" fill="url(#gdCenterGlow)" />

        {/* Intersection highlight ellipses between overlapping circles */}
        {[0, 1, 2, 3].map((i) => (
          <ellipse
            key={`intersection-${i}`}
            cx={startX + loopSpacing * i + loopSpacing / 2}
            cy={cy}
            rx="18"
            ry="32"
            fill="url(#gdIntersectionGlow)"
            opacity="0.6"
          />
        ))}

        {/* 5 interlocking circles - white with semi-transparent fill */}
        {modules.map((module, index) => {
          const cx = startX + index * loopSpacing;
          const isHovered = hoveredModule === module.id;

          return (
            <g key={module.id}>
              <circle
                cx={cx}
                cy={cy}
                r={loopRadius}
                fill="hsla(0, 0%, 100%, 0.12)"
                stroke="hsl(0, 0%, 100%)"
                strokeWidth="3"
                className="cursor-pointer transition-all duration-200"
                style={{ filter: isHovered ? "url(#gdLoopHoverGlow)" : "url(#gdLoopGlow)" }}
                onMouseEnter={() => setHoveredModule(module.id)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => onModuleClick?.(module.id)}
              />
              
              {/* Module label - full text, white for contrast */}
              <text
                x={cx}
                y={cy + loopRadius + 24}
                textAnchor="middle"
                fill={isHovered ? "hsl(45, 93%, 65%)" : "white"}
                fontSize="13"
                fontWeight="600"
                fontFamily="'Inter', sans-serif"
                className="pointer-events-none select-none transition-colors duration-200"
              >
                {module.label}
              </text>
            </g>
          );
        })}

        {/* "Unified Taxonomy" label at bottom */}
        <text
          x="250"
          y="175"
          textAnchor="middle"
          fill="white"
          fontSize="15"
          fontWeight="600"
          fontFamily="'Space Grotesk', sans-serif"
          letterSpacing="0.05em"
        >
          Unified Taxonomy
        </text>
      </svg>
    </div>
  );
};

export default GDQuintupleLoop;
