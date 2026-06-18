import { Printer, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface ScriptSlide {
  num: string;
  title: string;
  timing: string;
  paragraphs: string[];
  cue?: string;
}

const slides: ScriptSlide[] = [
  {
    num: "01",
    title: "Title — Connected Intelligence for Consumer Brands",
    timing: "0:00",
    paragraphs: [
      "Connected Intelligence for Consumer Brands. For CMOs, CSOs and Category leaders — stop reconciling data. Start running the category.",
    ],
    cue: "Pause two beats, then advance.",
  },
  {
    num: "02",
    title: "A new way of working",
    timing: "0:12",
    paragraphs: [
      "The brands that win don't have more data. They've changed how they work. That's what we're here to show you — a new operating model for consumer intelligence.",
    ],
  },
  {
    num: "03",
    title: "You're under more pressure than ever",
    timing: "0:25",
    paragraphs: [
      "And you're under more pressure than ever. Competitors move in weeks — you move in quarters. Consumer expectations shift faster than your planning cycles. Your data lives in seven different places. And every missed signal is a missed category.",
      "This isn't a data problem. It's an operating-model problem. Look at your Monday.",
    ],
    cue: "Beat — transition into the story.",
  },
  {
    num: "04",
    title: "Your Monday morning",
    timing: "0:50",
    paragraphs: [
      "It's nine in the morning. Forty-one minutes in — seven unread emails, all about the same opportunity. The CEO wants your plant-based protein position by Friday. Strategy says peaking, social says accelerating, finance has two TAM numbers, a rival has filed four patents nobody saw coming.",
      "Same opportunity. Seven inboxes. Zero alignment. And the clock starts now.",
    ],
  },
  {
    num: "05",
    title: "Same opportunity. Seven conflicting signals.",
    timing: "1:18",
    paragraphs: [
      "Because every team is pulling from a different source — Mintel, Euromonitor, Innova, NielsenIQ, Kantar, Circana — all credible, all conflicting. For every week you reconcile, a competitor ships.",
    ],
  },
  {
    num: "06",
    title: "The business cost. The personal cost.",
    timing: "1:38",
    paragraphs: [
      "And it's already cost you. This isn't theoretical — it happened this year, in your category. A forty-million-pound line lost to a competitor who saw the same signal six months ago. Sixty-three million pounds of revenue at risk across the portfolio.",
      "And the personal cost. Sixty percent of your week reconciling spreadsheets instead of shaping the category. The board questioning your numbers — again. You had the right instinct. You waited. Someone else didn't.",
    ],
    cue: "Beat — let the cost land before pivoting to the vision.",
  },
  {
    num: "07",
    title: "One Lens. Five solutions. One AI layer.",
    timing: "2:13",
    paragraphs: [
      "Now picture the same Monday — but through one connected lens. Five intelligence solutions, one AI layer — Ava — sitting on forty years of analyst-validated data and one shared taxonomy. Here's what that means for the people on your team.",
      "Sarah in Strategy stops chasing convergence across vendors — she sees it, scored, across twenty-two sectors. James in Market stops rebuilding TAMs in spreadsheets — they're already sized and forecast across a hundred and ten countries. Priya in Competitive stops finding out late — twenty-five thousand companies, every move tracked the day it happens. Marcus in Innovation stops guessing at concepts — four million products and patents tell him what's already been tried and what's about to land. Elena in Sales stops walking into retailers with caveats — she walks in with the evidence, account by account. And David in Procurement consolidates fourteen contracts into one.",
      "One platform. One source of truth. Every number traceable back to a named analyst. Now watch what they do with it on a Friday.",
    ],
  },
  {
    num: "08",
    title: "One question. Five perspectives. One connected answer.",
    timing: "2:55",
    paragraphs: [
      "The CEO's Friday question: should you launch plant-based snacking in Southeast Asia?",
      "Sarah — convergence ninety-two. James — two-point-one billion dollar TAM, Southeast Asia is the white space. Priya — high threat, a rival is building capacity. Marcus — three of five concepts pass. Elena — two of three target retailers ready for a first-mover pitch.",
      "Same taxonomy, so the numbers reconcile automatically. Every figure carries a confidence score and a citation — you can click the GO verdict back to the source survey, the patent filing, the shipment record. Old way: fourteen weeks, three answers, no audit trail. New way: GO, validated in forty-seven minutes — and you can prove every line.",
    ],
  },

  {
    num: "09",
    title: "What changes when your best people stop being data janitors",
    timing: "3:30",
    paragraphs: [
      "And this is what changes for the people on your team. Sarah stops defending numbers and starts shaping the category. James stops rebuilding TAMs and starts calling the next market. Priya stops chasing rumours and starts pre-empting moves. Marcus stops killing time on dead concepts. Elena walks into retailers already trusted.",
      "Seventy-five percent of your team's time, back on strategy. One reconciled dataset — not seven conflicting ones. Double the launch success rate.",
      "This is what a new operating model looks like on a Tuesday.",
    ],
  },
  {
    num: "10",
    title: "The Intelligence Maturity Journey",
    timing: "4:00",
    paragraphs: [
      "There's a clear path to get there. Fragmented — Sarah's team defends every number; six to eight weeks per decision. Connected — one taxonomy, one source of truth; Sarah, James, Priya, Marcus and Elena finally see the same picture. Decisions made in days. This is the gateway; everything compounds from here. Optimised — Ava surfaces patterns the team would have missed, and decisions get pre-empted. Predictive — your team acts on signals before the market reads them.",
      "You can't skip to Predictive. Connected is the foundation.",
    ],
  },

  {
    num: "11",
    title: "The proof",
    timing: "4:25",
    paragraphs: [
      "The brands you compete with already switched. Eight of the top ten FMCG companies. Ninety-five percent global GDP coverage. Seventy percent faster time to insight. Three times faster decisions. Double the launch success rate.",
      "In the words of a VP of Consumer Insights at a top five FMCG: seven disconnected vendors became one connected platform in ninety days. For the first time, strategy, innovation and commercial work from the same intelligence.",
    ],
  },

  {
    num: "12",
    title: "Integration connects pipes. We connect meaning.",
    timing: "4:35",
    paragraphs: [
      "And the question we always get — can't you just integrate what you have? Eighteen months. Fourteen contracts. No shared taxonomy. No cross-pollination. Connected Intelligence is ninety days, one contract, one taxonomy across fifty markets — pre-built on forty years of analyst-validated data. You're not building it. You're switching it on.",
    ],
  },
  {
    num: "13",
    title: "Your competitors already see the full picture",
    timing: "4:55",
    paragraphs: [
      "Three ways to start — a thirty-minute discovery call, an intelligence maturity assessment, or a ninety-day pilot in one of your categories with measurable payback. Your competitors aren't waiting for clarity. They bought it.",
    ],
    cue: "Beat before the ask. Then close.",
  },
  {
    num: "14",
    title: "Thank you",
    timing: "5:10",
    paragraphs: [
      "Thank you — happy to take your questions.",
    ],
  },
];

interface CopyChange {
  field: string;
  before?: string;
  after: string;
}

const copyChanges: { section: string; items: CopyChange[] }[] = [
  {
    section: "Slide 00 — Title",
    items: [
      { field: "Subtitle", before: "What you're about to see isn't just better data. It's a completely new way of working.", after: "Stop reconciling data. Start running the category." },
      { field: "Quote attribution", after: "Add a source line (e.g. \u201CInternal benchmark, 2025\u201D) so the pull-quote doesn't read as invented." },
    ],
  },
  {
    section: "Slide 01 — The Pressure",
    items: [
      { field: "Card order", after: "Reorder cards: Market Velocity \u2192 First-Mover Risk \u2192 Consumer Expectations \u2192 Fragmented View. Feel the squeeze before the cause." },
      { field: "Bridge", before: "Sound familiar? Picture your typical Monday.", after: "This isn't a data problem. It's an operating-model problem. Look at your Monday." },
    ],
  },
  {
    section: "Slide 02 — Monday Morning",
    items: [
      { field: "Add ribbon", after: "9:00\u20139:41 AM \u00B7 41 minutes \u00B7 7 unread" },
      { field: "Footer", before: "One opportunity. Seven teams. Seven answers. Which one do you trust?", after: "Same opportunity. Seven inboxes. Zero alignment. And the clock starts now." },
    ],
  },
  {
    section: "Slide 03 — Seven Sources, Seven Signals",
    items: [
      { field: "Caption", before: "By the time you reconcile, someone else has launched.", after: "Six vendors. Seven answers. One window closing." },
      { field: "Hero stat (replace 3-stat strip)", after: "For every week you reconcile, a competitor ships." },
    ],
  },
  {
    section: "Slide 04 — The Cost",
    items: [
      { field: "Hammer line above columns", after: "This isn't theoretical. It already happened \u2014 this year, in your category." },
      { field: "Accumulator caption", before: "And next quarter, it happens again \u2014 unless something changes.", after: "Same quarter, next year. Unless the operating model changes." },
    ],
  },
  {
    section: "Slide 05 — One Lens (fix the count)",
    items: [
      { field: "Title", before: "One lens. Six solutions. One AI layer.", after: "One Lens. Five solutions. One AI layer." },
      { field: "Subtitle", after: "Five intelligence solutions. One AI layer. One consumer truth \u2014 wrapped around your category." },
      { field: "Persona lock", after: "Sarah (Strategy) \u00B7 James (Market) \u00B7 Priya (Competitive) \u00B7 Marcus (Innovation) \u00B7 Elena (Sales) \u00B7 David (Procurement outcome). Drop the \u201C6 solutions\u201D framing \u2014 procurement is an outcome, not a solution." },
    ],
  },
  {
    section: "Slide 06 — What You Get",
    items: [
      { field: "Tile 1 title", before: "The Connected Platform \u2014 Single login \u00B7 6 solutions \u00B7 one taxonomy across 50+ markets", after: "One platform \u00B7 five solutions \u00B7 one taxonomy across 50+ markets" },
      { field: "Closing line", after: "Switched on, not built." },
    ],
  },
  {
    section: "Slide 07 — The Connected Decision",
    items: [
      { field: "Before/After strip above the verdict", after: "Old way: 14 weeks, 3 answers. New way: 1 meeting, 1 answer." },
      { field: "Verdict caption", before: "Validated in one meeting \u2014 not 14 weeks.", after: "GO. Validated in 47 minutes." },
    ],
  },
  {
    section: "Slide 08 — Teams Transformed",
    items: [
      { field: "Hero stat", after: "75% of your team's time, back on strategy." },
      { field: "Supporting strip", after: "Collapse 7.5\u00D7 Time Reclaimed \u00B7 Same-day Decisions \u00B7 2\u00D7 Launch Success into one footer strip." },
      { field: "Closer", after: "This is what a new operating model looks like on a Tuesday." },
    ],
  },
  {
    section: "Slide 09 — Maturity Journey",
    items: [
      { field: "Connected stage subtitle", before: "The Gateway \u2014 one taxonomy unlocks everything.", after: "The Gateway. Everything compounds from here." },
      { field: "Diagnostic line", after: "Most teams reading this are at Stage 1. The fastest movers reach Stage 3 within a year." },
    ],
  },
  {
    section: "Slide 10 — Proof",
    items: [
      { field: "Headline above logos", before: "8 of the top 10 FMCG companies have already transformed how they work.", after: "The brands you compete with already switched." },
    ],
  },
  {
    section: "Slide 11 — Why Not DIY",
    items: [
      { field: "Dominant title", after: "Integration connects pipes. We connect meaning." },
      { field: "DIY column", after: "Cut from 4 rows to 3: merge \u201CNo shared taxonomy\u201D and \u201CNo cross-pollination\u201D \u2014 they overlap." },
    ],
  },
  {
    section: "Slide 12 — CTA",
    items: [
      { field: "Time-boxed offer (replace soft reassurance)", before: "No commitment. No procurement. Just clarity.", after: "90-day proof of concept in one category. Measurable payback \u2014 or we walk." },
      { field: "Final line", after: "Your competitors aren't waiting for clarity. They bought it." },
    ],
  },
];

const numberDiscipline = [
  "5 solutions (Strategic, Market, Competitive, Innovation, Sales)",
  "1 AI layer \u2014 Ava",
  "1 procurement outcome \u2014 not counted as a solution",
  "4 maturity stages (Fragmented \u2192 Connected \u2192 Optimised \u2192 Predictive)",
  "90 days to deploy \u00B7 8 of top 10 FMCG \u00B7 95% global GDP \u00B7 40 years of intelligence",
  "Personas: Sarah, James, Priya, Marcus, Elena, David",
];

const totalWords = slides.reduce(
  (n, s) => n + s.paragraphs.join(" ").split(/\s+/).filter(Boolean).length,
  0,
);

export default function PresenterScript() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-12 print:py-6">
        <header className="mb-10 border-b border-border pb-8 print:mb-6 print:pb-4">
          <div className="mb-6 flex items-center justify-between print:hidden">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to deck
            </Link>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Printer className="h-4 w-4" />
              Print
            </button>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Presenter Script & Slide Copy Updates
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Connected Intelligence for Consumer Brands
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            ~5 min · ~{totalWords} words · 14 slides · Empathetic Advisor tone, UK spelling
          </p>
        </header>

        <main className="space-y-12 print:space-y-6">
          <section>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight">
              Presenter script
            </h2>
            <div className="space-y-10 print:space-y-6">
              {slides.map((s) => (
                <article
                  key={s.num}
                  className="border-l-2 border-primary/30 pl-6 print:break-inside-avoid"
                >
                  <div className="mb-3 flex items-baseline gap-3">
                    <span className="text-xs font-mono font-semibold text-primary">
                      SLIDE {s.num}
                    </span>
                    <span className="text-xs text-muted-foreground">~{s.timing}</span>
                  </div>
                  <h3 className="mb-4 text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <div className="space-y-3 text-[17px] leading-relaxed text-foreground/90">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {s.cue && (
                    <p className="mt-3 text-xs italic text-muted-foreground">
                      Cue: {s.cue}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="border-t border-border pt-12 print:pt-6">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight">
              Slide copy updates
            </h2>
            <p className="mb-8 text-sm text-muted-foreground">
              Drop-in replacements for the live deck. Each block lists the field,
              the existing line (where relevant), and the sharper replacement —
              ready to copy and paste.
            </p>

            <div className="mb-10 rounded-lg border border-border bg-muted/30 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Number discipline (lock across every slide)
              </p>
              <ul className="space-y-1 text-sm text-foreground/90">
                {numberDiscipline.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              {copyChanges.map((group) => (
                <article
                  key={group.section}
                  className="border-l-2 border-primary/30 pl-6 print:break-inside-avoid"
                >
                  <h3 className="mb-4 text-lg font-semibold tracking-tight">
                    {group.section}
                  </h3>
                  <div className="space-y-5">
                    {group.items.map((item, i) => (
                      <div key={i} className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                          {item.field}
                        </p>
                        {item.before && (
                          <div className="rounded-md border border-border/60 bg-muted/40 px-3 py-2 text-sm text-foreground/70 line-through decoration-muted-foreground/50">
                            {item.before}
                          </div>
                        )}
                        <div className="rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-[15px] text-foreground">
                          {item.after}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-16 border-t border-border pt-6 text-xs text-muted-foreground print:mt-8">
          Delivered in second person · Pause on em-dashes · Land the close before
          inviting questions.
        </footer>
      </div>

      <style>{`
        @media print {
          @page { margin: 1.5cm; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  );
}
