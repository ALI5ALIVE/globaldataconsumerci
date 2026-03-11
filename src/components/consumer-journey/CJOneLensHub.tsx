import { motion } from "framer-motion";
import { useState } from "react";

const valueChainStages = [
  {
    id: "discover",
    label: "Strategic\nIntelligence",
    solutionName: "Disruption · Themes · Predictive Foresight",
    value: "Spot emerging disruptions and converging themes to act before the market shifts",
    color: "hsl(217 100% 40%)",
    persona: { name: "Sarah", initials: "S", role: "Head of Strategy" },
  },
  {
    id: "size",
    label: "Market\nIntelligence",
    solutionName: "110 countries · 1,000+ segments",
    value: "One definitive sizing across every market you care about",
    color: "hsl(200 90% 45%)",
    persona: { name: "James", initials: "J", role: "Market Intelligence Lead" },
  },
  {
    id: "track",
    label: "Competitive\nIntelligence",
    solutionName: "25,000 companies tracked",
    value: "Every move, every patent, every hire — tracked in real time",
    color: "hsl(195 85% 50%)",
    persona: { name: "Priya", initials: "P", role: "CI Analyst" },
  },
  {
    id: "validate",
    label: "Innovation\nIntelligence",
    solutionName: "8-week validated sprints",
    value: "Test concepts against real evidence, not gut feel",
    color: "hsl(160 70% 40%)",
    persona: { name: "Marcus", initials: "M", role: "Innovation Director" },
  },
  {
    id: "win",
    label: "Sales\nIntelligence",
    solutionName: "Evidence-backed listings",
    value: "Walk into every buyer meeting with the full story",
    color: "hsl(280 60% 50%)",
    persona: { name: "Elena", initials: "E", role: "National Account Mgr" },
  },
  {
    id: "optimise",
    label: "One Vendor\nLower Cost",
    solutionName: "Best-in-class, consolidated",
    value: "One contract. Best-in-class solutions. 30% lower cost",
    color: "hsl(35 80% 45%)",
    persona: { name: "David", initials: "D", role: "Head of Procurement" },
  },
];

const CJOneLensHub = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const cx = 300;
  const cy = 300;
  const nodeCount = valueChainStages.length;
  const stageRadius = 150;
  const personaRadius = 250;
  const avaRadius = 62;

  const getPos = (index: number, radius: number) => {
    const angle = (index / nodeCount) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
    };
  };

  const getArcPath = (i: number) => {
    const p1 = getPos(i, stageRadius);
    const p2 = getPos((i + 1) % nodeCount, stageRadius);
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;
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
          <filter id="avaGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="hsl(270 80% 60%)" floodOpacity="0.35" result="color" />
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
          <linearGradient id="avaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(270 80% 55%)" />
            <stop offset="100%" stopColor="hsl(220 90% 55%)" />
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

        {/* Ava connection lines — from Ava ring to each solution */}
        {valueChainStages.map((node, i) => {
          const sPos = getPos(i, stageRadius);
          const avaPos = getPos(i, avaRadius);
          const isActive = hoveredId === null || hoveredId === node.id;
          return (
            <motion.line
              key={`ava-line-${node.id}`}
              x1={avaPos.x} y1={avaPos.y} x2={sPos.x} y2={sPos.y}
              stroke="url(#avaGrad)"
              strokeWidth={isActive ? 1.5 : 0.8}
              strokeDasharray="3 5"
              opacity={isActive ? 0.35 : 0.08}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.9 + i * 0.12, duration: 0.5 }}
            />
          );
        })}

        {/* Spokes: stages → personas */}
        {valueChainStages.map((node, i) => {
          const sPos = getPos(i, stageRadius);
          const pPos = getPos(i, personaRadius);
          const isActive = hoveredId === null || hoveredId === node.id;
          return (
            <motion.line
              key={`spoke-${node.id}`}
              x1={sPos.x} y1={sPos.y} x2={pPos.x} y2={pPos.y}
              stroke={node.color}
              strokeWidth={isActive ? 1.5 : 1}
              strokeDasharray="4 4"
              opacity={isActive ? 0.4 : 0.08}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.8 + i * 0.12, duration: 0.4 }}
            />
          );
        })}

        {/* Ava AI ring */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <circle cx={cx} cy={cy} r={avaRadius} fill="none" stroke="url(#avaGrad)" strokeWidth="2" strokeDasharray="4 3" filter="url(#avaGlow)" opacity="0.7" />
          {/* Ava label — positioned at top of ring */}
          <text x={cx} y={cy - avaRadius - 6} textAnchor="middle" dominantBaseline="auto" fill="hsl(270 80% 65%)" fontSize="7" fontWeight="700" letterSpacing="1.5">
            AVA — AI INTELLIGENCE LAYER
          </text>
        </motion.g>

        {/* Center hub — The Consumer */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <circle cx={cx} cy={cy} r="38" fill="url(#hubCenter)" filter="url(#hubGlow)" />
          {/* Consumer silhouette */}
          <circle cx={cx} cy={cy - 10} r="6" fill="none" stroke="white" strokeWidth="1.5" />
          <path
            d={`M ${cx - 10} ${cy + 4} Q ${cx - 10} ${cy - 3} ${cx} ${cy - 3} Q ${cx + 10} ${cy - 3} ${cx + 10} ${cy + 4}`}
            fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"
          />
          <text x={cx} y={cy + 14} textAnchor="middle" dominantBaseline="middle" className="fill-white font-bold" fontSize="7" letterSpacing="0.5">
            THE CONSUMER
          </text>
          <text x={cx} y={cy + 24} textAnchor="middle" dominantBaseline="middle" className="fill-white/70" fontSize="5.5">
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
                x={pos.x - 50} y={pos.y - 28}
                width="100" height="56"
                rx="8" fill="hsl(var(--card))"
                stroke={node.color} strokeWidth="2"
              />
              {lines.map((line, li) => (
                <text
                  key={li}
                  x={pos.x} y={pos.y - 12 + li * 13}
                  textAnchor="middle" dominantBaseline="middle"
                  fill={node.color} fontSize="8.5" fontWeight="700"
                >
                  {line}
                </text>
              ))}
              <text
                x={pos.x} y={pos.y + 14}
                textAnchor="middle" dominantBaseline="middle"
                className="fill-muted-foreground" fontSize="6" fontStyle="italic"
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

      {/* Hover tooltip — shows value proposition */}
      {hoveredId && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-card/95 border border-border rounded-lg px-4 py-3 text-center max-w-xs backdrop-blur-sm"
        >
          <p className="text-xs font-semibold text-foreground mb-0.5">
            {valueChainStages.find(n => n.id === hoveredId)?.label.replace("\n", " ")}
          </p>
          <p className="text-[11px] text-muted-foreground mb-1">
            {valueChainStages.find(n => n.id === hoveredId)?.persona.name}, {valueChainStages.find(n => n.id === hoveredId)?.persona.role}
          </p>
          <p className="text-[11px] text-primary font-medium">
            {valueChainStages.find(n => n.id === hoveredId)?.value}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CJOneLensHub;
