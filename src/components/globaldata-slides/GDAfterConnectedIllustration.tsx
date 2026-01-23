import { useState } from "react";

interface GDAfterConnectedIllustrationProps {
  onNodeClick?: (node: string) => void;
}

const modules = [
  { id: "market", label: "Market" },
  { id: "strategic", label: "Strategic" },
  { id: "competitive", label: "Competitive" },
  { id: "innovation", label: "Innovation" },
  { id: "sales", label: "Sales" },
];

const GDAfterConnectedIllustration = ({ onNodeClick }: GDAfterConnectedIllustrationProps) => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  const loopRadius = 28;
  const loopSpacing = 44;
  const startX = 58;
  const cy = 50;

  return (
    <svg
      viewBox="0 0 300 110"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Glow filter for circles */}
        <filter id="afterLoopGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor="hsl(217, 100%, 60%)" floodOpacity="0.4" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Hover glow filter */}
        <filter id="afterLoopHoverGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feFlood floodColor="hsl(195, 100%, 60%)" floodOpacity="0.6" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Radial gradient for center glow */}
        <radialGradient id="afterCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(217, 100%, 50%)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(217, 100%, 50%)" stopOpacity="0" />
        </radialGradient>

        {/* Intersection gradient */}
        <linearGradient id="afterIntersectionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(195, 100%, 55%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(217, 100%, 50%)" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Central glow effect */}
      <ellipse
        cx={startX + loopSpacing * 2}
        cy={cy}
        rx={loopSpacing * 2.5}
        ry={loopRadius * 1.2}
        fill="url(#afterCenterGlow)"
      />

      {/* Intersection ellipses between circles */}
      {[0, 1, 2, 3].map((i) => {
        const x = startX + loopSpacing * i + loopSpacing / 2;
        return (
          <ellipse
            key={`intersection-${i}`}
            cx={x}
            cy={cy}
            rx={8}
            ry={loopRadius * 0.6}
            fill="url(#afterIntersectionGradient)"
          />
        );
      })}

      {/* Interlocking circles */}
      {modules.map((module, index) => {
        const cx = startX + index * loopSpacing;
        const isHovered = hoveredModule === module.id;

        return (
          <g
            key={module.id}
            className="cursor-pointer transition-all duration-200"
            onClick={() => onNodeClick?.(module.id)}
            onMouseEnter={() => setHoveredModule(module.id)}
            onMouseLeave={() => setHoveredModule(null)}
          >
            {/* Circle */}
            <circle
              cx={cx}
              cy={cy}
              r={loopRadius}
              fill="hsla(217, 100%, 50%, 0.08)"
              stroke={isHovered ? "hsl(195, 100%, 55%)" : "hsl(217, 100%, 50%)"}
              strokeWidth={isHovered ? 2.5 : 1.5}
              style={{
                filter: isHovered ? "url(#afterLoopHoverGlow)" : "url(#afterLoopGlow)",
              }}
            />

            {/* Label below circle */}
            <text
              x={cx}
              y={cy + loopRadius + 14}
              textAnchor="middle"
              fill={isHovered ? "hsl(195, 100%, 70%)" : "hsl(217, 100%, 65%)"}
              fontSize="8"
              fontWeight="600"
              fontFamily="'Space Grotesk', sans-serif"
              letterSpacing="0.02em"
              className="pointer-events-none select-none"
            >
              {module.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default GDAfterConnectedIllustration;
