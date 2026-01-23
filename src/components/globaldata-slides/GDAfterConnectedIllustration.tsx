import { useState } from "react";

interface GDAfterConnectedIllustrationProps {
  onNodeClick?: (node: string) => void;
}

const solutionNodes = [
  { id: "market", label: "Market", icon: "📈", color: "hsl(199, 89%, 48%)", x: 55, y: 95 },
  { id: "strategic", label: "Strategic", icon: "🎯", color: "hsl(142, 70%, 45%)", x: 140, y: 100 },
  { id: "competitive", label: "Competitive", icon: "⚔️", color: "hsl(330, 80%, 55%)", x: 230, y: 105 },
  { id: "innovation", label: "Innovation", icon: "💡", color: "hsl(45, 90%, 50%)", x: 320, y: 100 },
  { id: "sales", label: "Sales", icon: "📊", color: "hsl(280, 65%, 55%)", x: 405, y: 95 },
];

const centralHub = { id: "ava", label: "Ava AI", x: 230, y: 35 };

const GDAfterConnectedIllustration = ({ onNodeClick }: GDAfterConnectedIllustrationProps) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodeRadius = 24;
  const hubRadius = 32;

  return (
    <svg
      viewBox="0 0 460 150"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Primary glow filter */}
        <filter id="afterPrimaryGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feFlood floodColor="hsl(217, 100%, 50%)" floodOpacity="0.6" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Hub glow */}
        <filter id="afterHubGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feFlood floodColor="hsl(195, 100%, 45%)" floodOpacity="0.5" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Connection gradient */}
        <linearGradient id="afterConnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(217, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(195, 100%, 45%)" />
        </linearGradient>

        {/* Hub gradient */}
        <linearGradient id="afterHubGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(217, 100%, 55%)" />
          <stop offset="100%" stopColor="hsl(217, 100%, 40%)" />
        </linearGradient>

        {/* Node gradient */}
        <linearGradient id="afterNodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(222, 47%, 18%)" />
          <stop offset="100%" stopColor="hsl(222, 47%, 12%)" />
        </linearGradient>
      </defs>

      {/* Connection lines from hub to nodes */}
      {solutionNodes.map((node, index) => (
        <line
          key={`conn-${node.id}`}
          x1={centralHub.x}
          y1={centralHub.y + hubRadius}
          x2={node.x}
          y2={node.y - nodeRadius}
          stroke="url(#afterConnGradient)"
          strokeWidth="2"
          strokeOpacity="0.7"
          strokeDasharray="none"
        />
      ))}

      {/* Unified arc connecting solution nodes */}
      <path
        d={`M ${solutionNodes[0].x} ${solutionNodes[0].y + nodeRadius + 8} 
            Q ${solutionNodes[2].x} ${solutionNodes[2].y + nodeRadius + 20} 
              ${solutionNodes[4].x} ${solutionNodes[4].y + nodeRadius + 8}`}
        fill="none"
        stroke="hsl(195, 100%, 45%)"
        strokeWidth="2"
        strokeOpacity="0.5"
        strokeDasharray="none"
      />

      {/* Horizontal connection between solution nodes */}
      {solutionNodes.slice(0, -1).map((node, index) => {
        const nextNode = solutionNodes[index + 1];
        return (
          <line
            key={`h-conn-${index}`}
            x1={node.x + nodeRadius}
            y1={node.y}
            x2={nextNode.x - nodeRadius}
            y2={nextNode.y}
            stroke="hsl(217, 100%, 50%)"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
        );
      })}

      {/* Central Hub */}
      <g
        className="cursor-pointer"
        onClick={() => onNodeClick?.("ava")}
        onMouseEnter={() => setHoveredNode("ava")}
        onMouseLeave={() => setHoveredNode(null)}
      >
        {/* Hub outer ring */}
        <circle
          cx={centralHub.x}
          cy={centralHub.y}
          r={hubRadius + 4}
          fill="none"
          stroke="hsl(195, 100%, 45%)"
          strokeWidth="1.5"
          strokeOpacity={hoveredNode === "ava" ? 0.8 : 0.4}
          strokeDasharray="10 5"
        />
        
        {/* Hub circle */}
        <circle
          cx={centralHub.x}
          cy={centralHub.y}
          r={hubRadius}
          fill="url(#afterHubGradient)"
          stroke="hsl(195, 100%, 50%)"
          strokeWidth="2"
          style={{
            filter: hoveredNode === "ava" ? "url(#afterHubGlow)" : "none",
            transform: hoveredNode === "ava" ? "scale(1.05)" : "scale(1)",
            transformOrigin: `${centralHub.x}px ${centralHub.y}px`,
          }}
        />

        {/* Hub icon */}
        <text
          x={centralHub.x}
          y={centralHub.y + 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="22"
          className="pointer-events-none select-none"
        >
          ✨
        </text>

        {/* Hub label */}
        <text
          x={centralHub.x}
          y={centralHub.y - hubRadius - 8}
          textAnchor="middle"
          fill="hsl(195, 100%, 60%)"
          fontSize="10"
          fontWeight="700"
          fontFamily="'Space Grotesk', sans-serif"
          letterSpacing="0.05em"
        >
          AVA AI
        </text>
      </g>

      {/* Solution Nodes */}
      {solutionNodes.map((node) => {
        const isHovered = hoveredNode === node.id;

        return (
          <g
            key={node.id}
            className="cursor-pointer transition-all duration-200"
            onClick={() => onNodeClick?.(node.id)}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transformOrigin: `${node.x}px ${node.y}px`,
            }}
          >
            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={isHovered ? nodeRadius + 2 : nodeRadius}
              fill="url(#afterNodeGradient)"
              stroke={node.color}
              strokeWidth={isHovered ? 2.5 : 2}
              style={{
                filter: isHovered ? "url(#afterPrimaryGlow)" : "none",
              }}
            />

            {/* Icon */}
            <text
              x={node.x}
              y={node.y + 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="16"
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
              fontSize="9"
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

      {/* Success checkmarks */}
      {[
        { x: 97, y: 65 },
        { x: 185, y: 70 },
        { x: 275, y: 70 },
        { x: 362, y: 65 },
      ].map((pos, index) => (
        <g key={`check-${index}`}>
          <circle
            cx={pos.x}
            cy={pos.y}
            r="7"
            fill="hsl(142, 70%, 45%)"
            opacity="0.9"
          />
          <text
            x={pos.x}
            y={pos.y + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="9"
            fontWeight="bold"
          >
            ✓
          </text>
        </g>
      ))}

    </svg>
  );
};

export default GDAfterConnectedIllustration;
