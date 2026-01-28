import { useState } from "react";

interface GDBeforeSilosIllustrationProps {
  onNodeClick?: (node: string) => void;
}

const nodes = [
  // Row 1 - External data sources (staggered y)
  { id: "nielsen", label: "NielsenIQ", icon: "📊", x: 65, y: 42 },
  { id: "circana", label: "Circana", icon: "🛒", x: 175, y: 52 },
  { id: "mintel", label: "Mintel", icon: "📈", x: 285, y: 38 },
  { id: "social", label: "Social", icon: "💬", x: 395, y: 48 },
  // Row 2 - Internal tools
  { id: "spreadsheets", label: "Spreadsheets", icon: "📑", x: 120, y: 108 },
  { id: "bi", label: "BI Tools", icon: "📉", x: 230, y: 115 },
  { id: "reports", label: "Reports", icon: "📋", x: 340, y: 105 },
];

const brokenConnections = [
  // Row 1 connections
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  // Row 2 connections
  { from: 4, to: 5 },
  { from: 5, to: 6 },
];

const GDBeforeSilosIllustration = ({ onNodeClick }: GDBeforeSilosIllustrationProps) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodeRadius = 32;

  return (
    <svg
      viewBox="0 0 460 180"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Warning glow filter */}
        <filter id="beforeSiloGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor="hsl(0, 70%, 55%)" floodOpacity="0.6" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Warning pulse filter */}
        <filter id="beforeWarningPulse" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="hsl(30, 90%, 55%)" floodOpacity="0.7" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Node gradient */}
        <linearGradient id="beforeNodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(222, 47%, 16%)" />
          <stop offset="100%" stopColor="hsl(222, 47%, 11%)" />
        </linearGradient>
      </defs>

      {/* Broken connection lines */}
      {brokenConnections.map((conn, index) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        const midX = (fromNode.x + toNode.x) / 2;
        const midY = (fromNode.y + toNode.y) / 2;

        return (
          <g key={`conn-${index}`}>
            {/* Dashed line */}
            <line
              x1={fromNode.x + nodeRadius}
              y1={fromNode.y}
              x2={toNode.x - nodeRadius}
              y2={toNode.y}
              stroke="hsl(0, 60%, 45%)"
              strokeWidth="2"
              strokeDasharray="6 4"
              strokeOpacity="0.6"
            />
            {/* Break mark */}
            <text
              x={midX}
              y={midY + 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="hsl(0, 70%, 55%)"
              fontSize="16"
              fontWeight="bold"
            >
              ×
            </text>
          </g>
        );
      })}

      {/* Cross-row broken connections */}
      {[
        { from: nodes[0], to: nodes[4] },
        { from: nodes[2], to: nodes[6] },
      ].map((conn, index) => {
        const midX = (conn.from.x + conn.to.x) / 2;
        const midY = (conn.from.y + conn.to.y) / 2;

        return (
          <g key={`cross-conn-${index}`}>
            <line
              x1={conn.from.x}
              y1={conn.from.y + nodeRadius}
              x2={conn.to.x}
              y2={conn.to.y - nodeRadius}
              stroke="hsl(0, 50%, 40%)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeOpacity="0.4"
            />
            <text
              x={midX}
              y={midY}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="hsl(30, 80%, 50%)"
              fontSize="12"
              fontWeight="bold"
            >
              ≠
            </text>
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => {
        const isHovered = hoveredNode === node.id;

        return (
          <g
            key={node.id}
            className="cursor-pointer transition-all duration-200"
            onClick={() => onNodeClick?.(node.id)}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
              transformOrigin: `${node.x}px ${node.y}px`,
            }}
          >
            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={isHovered ? nodeRadius + 2 : nodeRadius}
              fill="url(#beforeNodeGradient)"
              stroke={isHovered ? "hsl(0, 70%, 55%)" : "hsl(0, 50%, 45%)"}
              strokeWidth={isHovered ? 2.5 : 2}
              style={{
                filter: isHovered ? "url(#beforeSiloGlow)" : "none",
              }}
            />

            {/* Icon */}
            <text
              x={node.x}
              y={node.y + 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="22"
              className="pointer-events-none select-none"
            >
              {node.icon}
            </text>

            {/* Label */}
            <text
              x={node.x}
              y={node.y + nodeRadius + 12}
              textAnchor="middle"
              fill={isHovered ? "hsl(0, 0%, 95%)" : "hsl(0, 0%, 75%)"}
              fontSize="11"
              fontWeight="600"
              fontFamily="'Space Grotesk', sans-serif"
              className="pointer-events-none select-none"
              letterSpacing="0.02em"
            >
              {node.label}
            </text>
          </g>
        );
      })}

      {/* Warning indicators */}
      {[
        { x: 120, y: 45 },
        { x: 340, y: 42 },
        { x: 175, y: 112 },
      ].map((pos, index) => (
        <g key={`warning-${index}`}>
          <circle
            cx={pos.x}
            cy={pos.y}
            r={6}
            fill="hsl(30, 90%, 55%)"
            style={{ filter: "url(#beforeWarningPulse)" }}
            opacity={0.85}
          />
          <text
            x={pos.x}
            y={pos.y + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="11"
            fontWeight="bold"
          >
            !
          </text>
        </g>
      ))}

    </svg>
  );
};

export default GDBeforeSilosIllustration;
