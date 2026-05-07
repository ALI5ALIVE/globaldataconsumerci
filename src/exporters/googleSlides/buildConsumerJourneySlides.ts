/**
 * Map the Consumer Journey deck copy into a flat slide structure suitable for
 * the Google Slides edge function. The edge function renders each entry as a
 * blank slide with eyebrow / title / subtitle / bullets / footer, plus a left
 * primary stripe for brand consistency.
 */
import {
  TITLE_SLIDE,
  PRESSURE_SLIDE,
  MONDAY_SLIDE,
  SEVEN_SOURCES_SLIDE,
  COST_SLIDE,
  ONE_LENS_SLIDE,
  WHAT_YOU_GET_SLIDE,
  CONNECTED_DECISION_SLIDE,
  TEAMS_SLIDE,
  MATURITY_SLIDE,
  PROOF_SLIDE,
  DIY_SLIDE,
  CTA_SLIDE,
} from "@/exporters/pptx/specs/consumerJourney/_copy";

export interface GSlideInput {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  footer?: string;
}

export function buildConsumerJourneySlides(): GSlideInput[] {
  return [
    {
      eyebrow: TITLE_SLIDE.badge,
      title: `${TITLE_SLIDE.headlineTop} ${TITLE_SLIDE.headlineBottom}`,
      subtitle: TITLE_SLIDE.sub,
      bullets: TITLE_SLIDE.stats.map((s) => `${s.value} — ${s.label}`),
      footer: TITLE_SLIDE.quote,
    },
    {
      eyebrow: PRESSURE_SLIDE.eyebrow,
      title: `${PRESSURE_SLIDE.titleA} ${PRESSURE_SLIDE.titleB}`,
      subtitle: PRESSURE_SLIDE.sub,
      bullets: PRESSURE_SLIDE.cards.map((c) => `${c.title} — ${c.desc}`),
      footer: PRESSURE_SLIDE.bridge,
    },
    {
      eyebrow: MONDAY_SLIDE.eyebrow,
      title: MONDAY_SLIDE.title,
      subtitle: MONDAY_SLIDE.sub,
      bullets: MONDAY_SLIDE.emails.map((e) => `${e.time} · ${e.sender}: ${e.subject}`),
      footer: MONDAY_SLIDE.footer,
    },
    {
      eyebrow: SEVEN_SOURCES_SLIDE.eyebrow,
      title: SEVEN_SOURCES_SLIDE.title,
      subtitle: SEVEN_SOURCES_SLIDE.sub,
      bullets: [
        ...SEVEN_SOURCES_SLIDE.vendors.map((v) => `${v.name} (${v.role}): ${v.signal}`),
        ...SEVEN_SOURCES_SLIDE.stats.map((s) => `${s.value} ${s.label}`),
      ],
      footer: SEVEN_SOURCES_SLIDE.caption,
    },
    {
      eyebrow: COST_SLIDE.eyebrow,
      title: COST_SLIDE.title,
      subtitle: COST_SLIDE.sub,
      bullets: [
        ...COST_SLIDE.business.map((b) => `Business — ${b.stat}: ${b.detail}`),
        ...COST_SLIDE.personal.map((p) => `You — ${p.stat}: ${p.detail}`),
      ],
      footer: `${COST_SLIDE.accumulator.revenue} ${COST_SLIDE.accumulator.revenueLabel} · ${COST_SLIDE.accumulator.caption}`,
    },
    {
      eyebrow: ONE_LENS_SLIDE.eyebrow,
      title: ONE_LENS_SLIDE.title,
      subtitle: ONE_LENS_SLIDE.sub,
      bullets: ONE_LENS_SLIDE.spokes.map((s) => `${s.name} (${s.role}) — ${s.solution}: ${s.subline}`),
      footer: ONE_LENS_SLIDE.footer,
    },
    {
      eyebrow: WHAT_YOU_GET_SLIDE.eyebrow,
      title: `${WHAT_YOU_GET_SLIDE.titleA} ${WHAT_YOU_GET_SLIDE.titleAccent}`,
      subtitle: WHAT_YOU_GET_SLIDE.sub,
      bullets: [
        ...WHAT_YOU_GET_SLIDE.tiles.map((t) => `${t.title} — ${t.detail}`),
        ...WHAT_YOU_GET_SLIDE.timeline.map((t) => `${t.day}: ${t.text}`),
      ],
      footer: WHAT_YOU_GET_SLIDE.closing,
    },
    {
      eyebrow: CONNECTED_DECISION_SLIDE.eyebrow,
      title: CONNECTED_DECISION_SLIDE.title,
      subtitle: CONNECTED_DECISION_SLIDE.question,
      bullets: CONNECTED_DECISION_SLIDE.personas.map(
        (p) => `${p.name} (${p.role}) — ${p.verdict} [${p.stat} ${p.statLabel}]`,
      ),
      footer: `Verdict: ${CONNECTED_DECISION_SLIDE.verdict.label} — ${CONNECTED_DECISION_SLIDE.verdict.caption}`,
    },
    {
      eyebrow: TEAMS_SLIDE.eyebrow,
      title: TEAMS_SLIDE.title,
      subtitle: TEAMS_SLIDE.sub,
      bullets: [
        `Before — ${TEAMS_SLIDE.before.map((b) => `${b.label} ${b.pct}%`).join(" · ")}`,
        `After — ${TEAMS_SLIDE.after.map((a) => `${a.label} ${a.pct}%`).join(" · ")}`,
        `Decision velocity: ${TEAMS_SLIDE.velocityBefore} → ${TEAMS_SLIDE.velocityAfter}`,
        ...TEAMS_SLIDE.cards.map((c) => `${c.metric} ${c.title} — ${c.desc}`),
      ],
    },
    {
      eyebrow: MATURITY_SLIDE.eyebrow,
      title: MATURITY_SLIDE.title,
      subtitle: MATURITY_SLIDE.sub,
      bullets: MATURITY_SLIDE.stages.map(
        (s) => `${s.label} (${s.decisionSpeed}) — ${s.tagline}`,
      ),
    },
    {
      eyebrow: PROOF_SLIDE.eyebrow,
      title: `${PROOF_SLIDE.titleA} ${PROOF_SLIDE.titleB}`,
      subtitle: PROOF_SLIDE.sub,
      bullets: [
        ...PROOF_SLIDE.pillars.map((p) => `${p.metric} ${p.label} — ${p.tagline}`),
        `Trusted by: ${PROOF_SLIDE.logos.join(", ")}`,
      ],
      footer: `${PROOF_SLIDE.quote} — ${PROOF_SLIDE.attribution}`,
    },
    {
      eyebrow: DIY_SLIDE.eyebrow,
      title: `${DIY_SLIDE.titleA} ${DIY_SLIDE.titleAccent} ${DIY_SLIDE.titleB}`,
      bullets: [
        ...DIY_SLIDE.diy.map((d) => `DIY — ${d.label}: ${d.detail}`),
        ...DIY_SLIDE.connected.map((c) => `Connected — ${c.label}: ${c.detail}`),
      ],
      footer: DIY_SLIDE.closing,
    },
    {
      eyebrow: CTA_SLIDE.eyebrow,
      title: `${CTA_SLIDE.titleA} ${CTA_SLIDE.titleAccent}`,
      subtitle: CTA_SLIDE.sub,
      bullets: CTA_SLIDE.options.map((o) => `${o.title} — ${o.desc} (${o.cta})`),
      footer: `${CTA_SLIDE.badge} · ${CTA_SLIDE.reassurance}`,
    },
  ];
}
