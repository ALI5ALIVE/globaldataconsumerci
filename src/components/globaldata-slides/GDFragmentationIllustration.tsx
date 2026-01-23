import { useState, useEffect } from "react";
import { BarChart3, ShoppingCart, TrendingUp, MessageCircle, FileSpreadsheet, Table2, PieChart, LayoutDashboard } from "lucide-react";

interface GDFragmentationIllustrationProps {
  onNodeClick?: (node: string) => void;
}

// 8 nodes with staggered y-positions for organic fragmentation look
const nodes = [
  { id: "nielsen", label: "Nielsen", icon: BarChart3, color: "hsl(199, 89%, 48%)", x: 45, y: 80 },
  { id: "spreadsheets", label: "Spreadsheets", icon: Table2, color: "hsl(140, 70%, 45%)", x: 132, y: 100 },
  { id: "iri", label: "IRI", icon: ShoppingCart, color: "hsl(330, 80%, 55%)", x: 219, y: 68 },
  { id: "bi", label: "BI Tools", icon: PieChart, color: "hsl(45, 90%, 50%)", x: 306, y: 105 },
  { id: "mintel", label: "Mintel", icon: TrendingUp, color: "hsl(145, 70%, 45%)", x: 393, y: 72 },
  { id: "dashboards", label: "Dashboards", icon: LayoutDashboard, color: "hsl(200, 80%, 50%)", x: 480, y: 95 },
  { id: "social", label: "Social", icon: MessageCircle, color: "hsl(280, 65%, 55%)", x: 567, y: 65 },
  { id: "internal", label: "Internal", icon: FileSpreadsheet, color: "hsl(30, 90%, 55%)", x: 655, y: 88 },
];

const brokenConnections = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 6 },
  { from: 6, to: 7 },
];

const GDFragmentationIllustration = ({ onNodeClick }: GDFragmentationIllustrationProps) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [warningPulse, setWarningPulse] = useState(0);

  // Animate warning pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setWarningPulse(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Larger radius for full width display
  const nodeRadius = 35;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 700 190" className="w-full max-w-[700px]">
        <defs>
          <filter id="gdFragmentGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="hsl(0, 70%, 50%)" floodOpacity="0.4" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="gdNodeHoverGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feFlood floodColor="hsl(0, 70%, 55%)" floodOpacity="0.7" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="gdWarningPulse" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="hsl(30, 90%, 55%)" floodOpacity="0.8" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Node gradients */}
          {nodes.map((node) => (
            <linearGradient key={node.id} id={`gdNode-${node.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={node.color} stopOpacity="0.9" />
              <stop offset="100%" stopColor={node.color} stopOpacity="0.5" />
            </linearGradient>
          ))}
        </defs>

        {/* Broken connection lines with × marks */}
        {brokenConnections.map((conn, index) => {
          const fromNode = nodes[conn.from];
          const toNode = nodes[conn.to];
          const midX = (fromNode.x + toNode.x) / 2;
          const midY = (fromNode.y + toNode.y) / 2;

          return (
            <g key={`conn-${index}`}>
              {/* Left segment */}
              <line
                x1={fromNode.x + nodeRadius}
                y1={fromNode.y}
                x2={midX - 10}
                y2={midY}
                stroke="hsl(0, 70%, 45%)"
                strokeWidth="3"
                strokeDasharray="8 4"
                strokeOpacity="0.6"
              />
              {/* Right segment */}
              <line
                x1={midX + 10}
                y1={midY}
                x2={toNode.x - nodeRadius}
                y2={toNode.y}
                stroke="hsl(0, 70%, 45%)"
                strokeWidth="3"
                strokeDasharray="8 4"
                strokeOpacity="0.6"
              />
              {/* × break mark */}
              <text
                x={midX}
                y={midY + 6}
                textAnchor="middle"
                fill="hsl(0, 70%, 55%)"
                fontSize="20"
                fontWeight="bold"
              >
                ×
              </text>
            </g>
          );
        })}

        {/* Warning indicators with ≠ symbol - positioned above some nodes */}
        {[{ x: 175, y: 32 }, { x: 350, y: 28 }, { x: 525, y: 30 }].map((pos, index) => {
          const pulseOpacity = 0.4 + 0.3 * Math.sin((warningPulse + index * 50) * 0.1);
          
          return (
            <g key={`warning-${index}`} style={{ filter: "url(#gdWarningPulse)" }}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r="14"
                fill="hsl(30, 90%, 55%)"
                fillOpacity={pulseOpacity}
                stroke="hsl(30, 90%, 55%)"
                strokeWidth="2"
              />
              <text
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                ≠
              </text>
            </g>
          );
        })}

        {/* Data source nodes */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const IconComponent = node.icon;

          return (
            <g
              key={node.id}
              className="cursor-pointer"
              onClick={() => onNodeClick?.(node.id)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ 
                filter: isHovered ? "url(#gdNodeHoverGlow)" : "url(#gdFragmentGlow)",
                transform: isHovered ? `scale(1.1)` : "scale(1)",
                transformOrigin: `${node.x}px ${node.y}px`,
                transition: "transform 0.2s ease",
              }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeRadius}
                fill={`url(#gdNode-${node.id})`}
                stroke={node.color}
                strokeWidth="3"
              />
              
              {/* Icon */}
              <foreignObject x={node.x - 18} y={node.y - 18} width="36" height="36">
                <div className="w-full h-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
              </foreignObject>
              
              {/* Label */}
              <text
                x={node.x}
                y={node.y + nodeRadius + 18}
                textAnchor="middle"
                fill={isHovered ? node.color : "hsl(0, 40%, 70%)"}
                fontSize="11"
                fontWeight="500"
                fontFamily="'Inter', sans-serif"
                className="transition-colors duration-200"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* "Different Taxonomy" label */}
        <text
          x="350"
          y="178"
          textAnchor="middle"
          fill="hsl(0, 50%, 60%)"
          fontSize="13"
          fontWeight="500"
          fontFamily="'Inter', sans-serif"
          fontStyle="italic"
        >
          Different Taxonomies & Disconnected Tools
        </text>
      </svg>
    </div>
  );
};

export default GDFragmentationIllustration;
