import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useState } from "react";

const solutionNodes = [
  {
    id: "strategic",
    label: "Strategic\nIntelligence",
    questions: ["Where is plant-based heading?", "Which macro trends matter?"],
    color: "hsl(217 100% 40%)",
    persona: { name: "Sarah", initials: "S", role: "Head of Strategy" },
  },
  {
    id: "market",
    label: "Market\nIntelligence",
    questions: ["How big is the opportunity?", "Which markets to prioritise?"],
    color: "hsl(200 90% 45%)",
    persona: { name: "James", initials: "J", role: "Market Intelligence Lead" },
  },
  {
    id: "competitive",
    label: "Competitive\nIntelligence",
    questions: ["Who's gaining share?", "What are competitors filing?"],
    color: "hsl(195 85% 50%)",
    persona: { name: "Priya", initials: "P", role: "CI Analyst" },
  },
  {
    id: "innovation",
    label: "Innovation\nIntelligence",
    questions: ["Which concepts resonate?", "What's the white space?"],
    color: "hsl(160 70% 40%)",
    persona: { name: "Marcus", initials: "M", role: "Innovation Director" },
  },
  {
    id: "commercial",
    label: "Commercial\nIntelligence",
    questions: ["What proof points to lead with?", "Where's the growth?"],
    color: "hsl(280 60% 50%)",
    persona: { name: "Elena", initials: "E", role: "National Account Mgr" },
  },
  {
    id: "procurement",
    label: "Procurement\nIntelligence",
    questions: ["How do we reduce TCO?", "Which suppliers overlap?"],
    color: "hsl(35 80% 45%)",
    persona: { name: "David", initials: "D", role: "Head of Procurement" },
  },
];

const CJOneLensHub = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const cx = 300;
  const cy = 300;
  const nodeCount = solutionNodes.length;
  const solutionRadius = 140;
  const personaRadius = 245;

  const getPos = (index: number, radius: number) => {
    const angle = (index / nodeCount) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
    };
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 600 600" className="w-full h-full max-h-[520px] max-w-[520px]">
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

        {/* Spokes: center → solutions → personas */}
        {solutionNodes.map((node, i) => {
          const sPos = getPos(i, solutionRadius);
          const pPos = getPos(i, personaRadius);
          const isActive = hoveredId === null || hoveredId === node.id;
          return (
            <g key={`spoke-${node.id}`}>
              <motion.line
                x1={cx} y1={cy} x2={sPos.x} y2={sPos.y}
                stroke={node.color}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray="4 4"
                opacity={isActive ? 0.6 : 0.15}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
              />
              <motion.line
                x1={sPos.x} y1={sPos.y} x2={pPos.x} y2={pPos.y}
                stroke={node.color}
                strokeWidth={isActive ? 2 : 1}
                strokeDasharray="4 4"
                opacity={isActive ? 0.5 : 0.1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.8 + i * 0.15, duration: 0.5 }}
              />
            </g>
          );
        })}

        {/* Center hub */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          <circle cx={cx} cy={cy} r="42" fill="url(#hubCenter)" filter="url(#hubGlow)" />
          <text x={cx} y={cy - 8} textAnchor="middle" dominantBaseline="middle" className="fill-white font-bold" fontSize="9">
            ONE TRUTH
          </text>
          <text x={cx} y={cy + 5} textAnchor="middle" dominantBaseline="middle" className="fill-white/80" fontSize="7">
            One Taxonomy
          </text>
          {/* Eye icon approximation */}
          <circle cx={cx} cy={cy + 18} r="5" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx={cx} cy={cy + 18} r="2" fill="white" />
        </motion.g>

        {/* Solution nodes (Ring 2) */}
        {solutionNodes.map((node, i) => {
          const pos = getPos(i, solutionRadius);
          const isActive = hoveredId === null || hoveredId === node.id;
          const lines = node.label.split("\n");

          return (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: isActive ? 1 : 0.3 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="cursor-pointer"
            >
              {/* Solution card background */}
              <rect
                x={pos.x - 52} y={pos.y - 38}
                width="104" height="76"
                rx="8" fill="hsl(var(--card))"
                stroke={node.color} strokeWidth="2"
              />
              {/* Solution name */}
              {lines.map((line, li) => (
                <text
                  key={li}
                  x={pos.x} y={pos.y - 20 + li * 12}
                  textAnchor="middle" dominantBaseline="middle"
                  fill={node.color} fontSize="8" fontWeight="700"
                >
                  {line}
                </text>
              ))}
              {/* Dashboard placeholder */}
              <rect
                x={pos.x - 38} y={pos.y + 4}
                width="76" height="28" rx="3"
                fill={node.color} opacity="0.15"
                stroke={node.color} strokeWidth="0.5"
              />
              {/* Mock dashboard lines */}
              <line x1={pos.x - 30} y1={pos.y + 12} x2={pos.x - 10} y2={pos.y + 12} stroke={node.color} strokeWidth="1.5" opacity="0.5" />
              <line x1={pos.x - 30} y1={pos.y + 18} x2={pos.x + 5} y2={pos.y + 18} stroke={node.color} strokeWidth="1.5" opacity="0.4" />
              <line x1={pos.x - 30} y1={pos.y + 24} x2={pos.x - 15} y2={pos.y + 24} stroke={node.color} strokeWidth="1.5" opacity="0.3" />
              {/* Mini bar chart */}
              <rect x={pos.x + 14} y={pos.y + 20} width="4" height="8" rx="1" fill={node.color} opacity="0.5" />
              <rect x={pos.x + 20} y={pos.y + 16} width="4" height="12" rx="1" fill={node.color} opacity="0.6" />
              <rect x={pos.x + 26} y={pos.y + 12} width="4" height="16" rx="1" fill={node.color} opacity="0.7" />
            </motion.g>
          );
        })}

        {/* Persona nodes (Ring 3) */}
        {solutionNodes.map((node, i) => {
          const pos = getPos(i, personaRadius);
          const isActive = hoveredId === null || hoveredId === node.id;

          return (
            <motion.g
              key={`persona-${node.id}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: isActive ? 1 : 0.25 }}
              transition={{ delay: 2.2 + i * 0.15, duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="cursor-pointer"
            >
              {/* Avatar circle */}
              <circle cx={pos.x} cy={pos.y - 6} r="16" fill={node.color} opacity="0.9" />
              <text
                x={pos.x} y={pos.y - 6}
                textAnchor="middle" dominantBaseline="middle"
                className="fill-white font-bold" fontSize="10"
              >
                {node.persona.initials}
              </text>
              {/* Name & role */}
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
                className="fill-muted-foreground" fontSize="6"
              >
                {node.persona.role}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Hover tooltip for questions */}
      {hoveredId && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-card/95 border border-border rounded-lg px-4 py-2 text-center max-w-xs backdrop-blur-sm"
        >
          <p className="text-xs font-semibold text-foreground mb-1">
            {solutionNodes.find(n => n.id === hoveredId)?.label.replace("\n", " ")}
          </p>
          {solutionNodes.find(n => n.id === hoveredId)?.questions.map((q, i) => (
            <p key={i} className="text-[11px] text-muted-foreground italic">"{q}"</p>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CJOneLensHub;
