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

  // Enlarged dimensions for Stage 3
  const loopRadius = 50;
  const loopSpacing = 115;
  const startX = 95;
  const cy = 80;

  // SVG path that weaves through all 5 circles in an infinity-style pattern
  const weavePath = `
    M ${startX} ${cy}
    C ${startX} ${cy - 50}, ${startX + loopSpacing * 0.5} ${cy - 50}, ${startX + loopSpacing} ${cy}
    C ${startX + loopSpacing * 1.5} ${cy + 50}, ${startX + loopSpacing * 2} ${cy + 50}, ${startX + loopSpacing * 2} ${cy}
    C ${startX + loopSpacing * 2} ${cy - 50}, ${startX + loopSpacing * 2.5} ${cy - 50}, ${startX + loopSpacing * 3} ${cy}
    C ${startX + loopSpacing * 3.5} ${cy + 50}, ${startX + loopSpacing * 4} ${cy + 50}, ${startX + loopSpacing * 4} ${cy}
    C ${startX + loopSpacing * 4} ${cy - 50}, ${startX + loopSpacing * 3.5} ${cy - 50}, ${startX + loopSpacing * 3} ${cy}
    C ${startX + loopSpacing * 2.5} ${cy + 50}, ${startX + loopSpacing * 2} ${cy + 50}, ${startX + loopSpacing * 2} ${cy}
    C ${startX + loopSpacing * 2} ${cy - 50}, ${startX + loopSpacing * 1.5} ${cy - 50}, ${startX + loopSpacing} ${cy}
    C ${startX + loopSpacing * 0.5} ${cy + 50}, ${startX} ${cy + 50}, ${startX} ${cy}
  `;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 680 200" className="w-full max-w-[680px]">
        <defs>
          <filter id="gdLoopGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="hsl(217, 100%, 50%)" floodOpacity="0.6" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="gdLoopHoverGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feFlood floodColor="hsl(217, 100%, 60%)" floodOpacity="0.8" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="gdDotGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="hsl(45, 93%, 58%)" floodOpacity="0.9" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="gdCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(217, 100%, 60%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(217, 100%, 50%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central radial glow - "One Truth" */}
        <circle cx="340" cy={cy} r="130" fill="url(#gdCenterGlow)" />

        {/* 5 interlocking circles */}
        {modules.map((module, index) => {
          const cx = startX + index * loopSpacing;
          const isHovered = hoveredModule === module.id;

          return (
            <g key={module.id}>
              <circle
                cx={cx}
                cy={cy}
                r={loopRadius}
                fill="transparent"
                stroke="hsl(217, 100%, 50%)"
                strokeWidth="4"
                strokeDasharray="8 4"
                className="cursor-pointer transition-all duration-200"
                style={{ filter: isHovered ? "url(#gdLoopHoverGlow)" : "url(#gdLoopGlow)" }}
                onMouseEnter={() => setHoveredModule(module.id)}
                onMouseLeave={() => setHoveredModule(null)}
                onClick={() => onModuleClick?.(module.id)}
              />
              
              {/* Module label - full text, larger font */}
              <text
                x={cx}
                y={cy + loopRadius + 24}
                textAnchor="middle"
                fill={isHovered ? "hsl(173, 80%, 20%)" : "black"}
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

        {/* Animated dots flowing through all circles in infinity pattern */}
        <circle r="7" fill="hsl(45, 93%, 58%)" style={{ filter: "url(#gdDotGlow)" }}>
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path={weavePath}
          />
        </circle>
        <circle r="7" fill="hsl(45, 93%, 58%)" style={{ filter: "url(#gdDotGlow)" }}>
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            begin="3.33s"
            path={weavePath}
          />
        </circle>
        <circle r="7" fill="hsl(45, 93%, 58%)" style={{ filter: "url(#gdDotGlow)" }}>
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            begin="6.66s"
            path={weavePath}
          />
        </circle>

        {/* "Unified Taxonomy" label at bottom */}
        <text
          x="340"
          y="185"
          textAnchor="middle"
          fill="black"
          fontSize="18"
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
