import { motion } from "framer-motion";
import { useState } from "react";

const valueChainStages = [
  {
    id: "discover",
    label: "Discover\nTrends",
    solutionName: "Strategic Foresight",
    questions: ["Where is the category heading?", "Which macro shifts matter most?"],
    color: "hsl(217 100% 40%)",
    persona: { name: "Sarah", initials: "S", role: "Head of Strategy · Global FMCG" },
  },
  {
    id: "size",
    label: "Size\nOpportunity",
    solutionName: "Market Sizing",
    questions: ["How big is the white space?", "Which markets should we prioritise?"],
    color: "hsl(200 90% 45%)",
    persona: { name: "James", initials: "J", role: "Market Intelligence Lead · Global FMCG" },
  },
  {
    id: "track",
    label: "Track\nCompetition",
    solutionName: "Competitive Intelligence",
    questions: ["Who's gaining share and why?", "What are competitors launching?"],
    color: "hsl(195 85% 50%)",
    persona: { name: "Priya", initials: "P", role: "CI Analyst · Global FMCG" },
  },
  {
    id: "validate",
    label: "Validate\nInnovation",
    solutionName: "Innovation Validation",
    questions: ["Which concepts will resonate?", "What claims can we defend?"],
    color: "hsl(160 70% 40%)",
    persona: { name: "Marcus", initials: "M", role: "Innovation Director · Global FMCG" },
  },
  {
    id: "win",
    label: "Win at\nShelf",
    solutionName: "Commercial Intelligence",
    questions: ["What proof points win the listing?", "Where's the incremental growth?"],
    color: "hsl(280 60% 50%)",
    persona: { name: "Elena", initials: "E", role: "National Account Mgr · Global FMCG" },
  },
  {
    id: "optimise",
    label: "Optimise\nCosts",
    solutionName: "Procurement Intelligence",
    questions: ["How do we reduce total cost of ownership?", "Which suppliers can we consolidate?"],
    color: "hsl(35 80% 45%)",
    persona: { name: "David", initials: "D", role: "Head of Procurement · Global FMCG" },
  },
];

const CJOneLensHub = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const cx = 300;
  const cy = 300;
  const nodeCount = valueChainStages.length;
  const stageRadius = 140;
  const personaRadius = 245;

  const getPos = (index: number, radius: number) => {
    const angle = (index / nodeCount) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
    };
  };

  // Build arc path between two adjacent stage positions
  const getArcPath = (i: number) => {
    const p1 = getPos(i, stageRadius);
    const p2 = getPos((i + 1) % nodeCount, stageRadius);
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;
    // Push control point outward from center for a slight curve
    const dx = mx - cx;
    const dy = my - cy;
    const len = Math.sqrt(dx * dx + dy * dy) || 1;
    const bulge = 18;
    const cpx = mx + (dx / len) * bulge;
    const cpy = my + (dy / len) * bulge;
    return `M ${p1.x} ${p1.y} Q ${cpx} ${cpy} ${p2.x} ${p2.y}`;
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 600 600" className="w-full h-full max-h-[600px] max-w-[600px]">
        <defs>
          <filter id="hubGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feFlood floodColor="hsl(217 100% 55%)" floodOpacity="0.4" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="hubCenter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217 100% 50%)" />
            <stop offset="100%" stopColor="hsl(200 90% 45%)" />
          </linearGradient>
        </defs>

        {/* Journey arcs connecting adjacent stages */}
        {valueChainStages.map((_, i) => (
          <motion.path
            key={`arc-${i}`}
            d={getArcPath(i)}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity={hoveredId === null ? 0.4 : 0.15}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.6 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Spokes: center → stages → personas */}
        {valueChainStages.map((node, i) => {
          const sPos = getPos(i, stageRadius);
          const pPos = getPos(i, personaRadius);
          const isActive = hoveredId === null || hoveredId === node.id;
          return (
            <g key={`spoke-${node.id}`}>
              <motion.line
                x1={cx} y1={cy} x2={sPos.x} y2={sPos.y}
                stroke={node.color}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray="4 4"
                opacity={isActive ? 0.5 : 0.12}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
              />
              <motion.line
                x1={sPos.x} y1={sPos.y} x2={pPos.x} y2={pPos.y}
                stroke={node.color}
                strokeWidth={isActive ? 1.5 : 1}
                strokeDasharray="4 4"
                opacity={isActive ? 0.4 : 0.08}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.8 + i * 0.12, duration: 0.4 }}
              />
            </g>
          );
        })}

        {/* Center hub — The Consumer */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <circle cx={cx} cy={cy} r="46" fill="url(#hubCenter)" filter="url(#hubGlow)" />
          {/* Consumer silhouette — simple head + shoulders */}
          <circle cx={cx} cy={cy - 12} r="7" fill="none" stroke="white" strokeWidth="1.5" />
          <path
            d={`M ${cx - 12} ${cy + 6} Q ${cx - 12} ${cy - 2} ${cx} ${cy - 2} Q ${cx + 12} ${cy - 2} ${cx + 12} ${cy + 6}`}
            fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"
          />
          <text x={cx} y={cy + 16} textAnchor="middle" dominantBaseline="middle" className="fill-white font-bold" fontSize="7.5" letterSpacing="0.5">
            THE CONSUMER
          </text>
          <text x={cx} y={cy + 27} textAnchor="middle" dominantBaseline="middle" className="fill-white/70" fontSize="6">
            One Lens · One Truth
          </text>
        </motion.g>

        {/* Value chain stage cards (Ring 1) */}
        {valueChainStages.map((node, i) => {
          const pos = getPos(i, stageRadius);
          const isActive = hoveredId === null || hoveredId === node.id;
          const lines = node.label.split("\n");

          return (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: isActive ? 1 : 0.3 }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.45, ease: "easeOut" }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="cursor-pointer"
            >
              <rect
                x={pos.x - 48} y={pos.y - 26}
                width="96" height="52"
                rx="8" fill="hsl(var(--card))"
                stroke={node.color} strokeWidth="2"
              />
              {lines.map((line, li) => (
                <text
                  key={li}
                  x={pos.x} y={pos.y - 10 + li * 14}
                  textAnchor="middle" dominantBaseline="middle"
                  fill={node.color} fontSize="9" fontWeight="700"
                >
                  {line}
                </text>
              ))}
              <text
                x={pos.x} y={pos.y + 20}
                textAnchor="middle" dominantBaseline="middle"
                className="fill-muted-foreground" fontSize="6.5" fontStyle="italic"
              >
                {node.solutionName}
              </text>
            </motion.g>
          );
        })}

        {/* Persona avatars (Ring 2) */}
        {valueChainStages.map((node, i) => {
          const pos = getPos(i, personaRadius);
          const isActive = hoveredId === null || hoveredId === node.id;

          return (
            <motion.g
              key={`persona-${node.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: isActive ? 1 : 0.25 }}
              transition={{ delay: 2.0 + i * 0.12, duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="cursor-pointer"
            >
              <circle cx={pos.x} cy={pos.y - 6} r="16" fill={node.color} opacity="0.9" />
              <text
                x={pos.x} y={pos.y - 6}
                textAnchor="middle" dominantBaseline="middle"
                className="fill-white font-bold" fontSize="10"
              >
                {node.persona.initials}
              </text>
              <text
                x={pos.x} y={pos.y + 16}
                textAnchor="middle" dominantBaseline="middle"
                className="fill-foreground font-semibold" fontSize="8"
              >
                {node.persona.name}
              </text>
              <text
                x={pos.x} y={pos.y + 26}
                textAnchor="middle" dominantBaseline="middle"
                className="fill-muted-foreground" fontSize="5.5"
              >
                {node.persona.role}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      {hoveredId && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-card/95 border border-border rounded-lg px-4 py-2 text-center max-w-xs backdrop-blur-sm"
        >
          <p className="text-xs font-semibold text-foreground mb-1">
            {valueChainStages.find(n => n.id === hoveredId)?.label.replace("\n", " ")}
          </p>
          {valueChainStages.find(n => n.id === hoveredId)?.questions.map((q, i) => (
            <p key={i} className="text-[11px] text-muted-foreground italic">"{q}"</p>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CJOneLensHub;
