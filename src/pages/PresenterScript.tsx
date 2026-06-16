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
      "Connected Intelligence for Consumer Brands. For CMOs, CSOs and Category leaders — what you're about to see isn't just better data. It's a completely new way of working.",
    ],
    cue: "Pause two beats, then advance.",
  },
  {
    num: "02",
    title: "A new way of working",
    timing: "0:15",
    paragraphs: [
      "The brands that win don't have more data — they have connected intelligence. Eight of the top ten FMCG companies already trust us. Ninety-five percent global GDP coverage. Forty years of market intelligence behind every decision.",
    ],
  },
  {
    num: "03",
    title: "You're under more pressure than ever",
    timing: "0:30",
    paragraphs: [
      "And you're under more pressure than ever. Consumer expectations are shifting faster than your planning cycles. Competitors move in weeks — you move in quarters. Your data lives in seven different places. And every missed signal is a missed category.",
      "Sound familiar? Picture your typical Monday.",
    ],
  },
  {
    num: "04",
    title: "Your Monday morning",
    timing: "0:55",
    paragraphs: [
      "It's nine in the morning and your inbox is already on fire. The CEO wants your plant-based protein position by Friday. Strategy says the category is peaking — social says it's accelerating. Finance has two TAM numbers. A rival has filed four patents nobody saw coming. Innovation, commercial and procurement are all waiting.",
      "One opportunity. Seven teams. Seven answers. Which one do you trust?",
    ],
  },
  {
    num: "05",
    title: "Same opportunity. Seven conflicting signals.",
    timing: "1:25",
    paragraphs: [
      "Because every team is pulling from a different source — and every source tells them something different about the same opportunity. Mintel, Euromonitor, Innova, NielsenIQ, Kantar, Circana — all credible, all conflicting.",
      "So your people spend sixty percent of their time reconciling, ten percent on actual strategy, and twelve weeks reaching a decision. By the time you reconcile, someone else has launched.",
    ],
  },
  {
    num: "06",
    title: "The business cost. The personal cost.",
    timing: "1:55",
    paragraphs: [
      "And it's already cost you. A forty-million-pound line lost — a competitor saw the same signal six months ago, launched, and claimed the shelf. Across your portfolio, sixty-three million pounds of revenue at risk this year.",
      "But there's a personal cost too. Sixty percent of your week reconciling spreadsheets instead of shaping the category. Three days building a deck, not a strategy. The board questioning your numbers — again. You had the right instinct. You waited. Someone else didn't.",
    ],
  },
  {
    num: "07",
    title: "One Lens. Six solutions. One AI layer.",
    timing: "2:25",
    paragraphs: [
      "Now imagine the same opportunity through one connected lens. Six people. Six solutions. One AI layer — Ava — wrapped around the consumer.",
      "Sarah in Strategy spots the convergence. Chloe sizes the market across a hundred and ten countries. Sebastian tracks every competitive move across twenty-five thousand companies. Priya validates concepts in eight-week sprints. Marcus walks into retailer meetings with evidence. And David consolidates fourteen contracts into one — thirty percent lower total cost.",
    ],
  },
  {
    num: "08",
    title: "One question. Five perspectives. One connected answer.",
    timing: "3:00",
    paragraphs: [
      "Here's what that looks like in practice. One question: should you launch plant-based snacking in Southeast Asia?",
      "Sarah: convergence score ninety-two — three signals all accelerating. Chloe: two-point-one billion dollar TAM, Southeast Asia is the white space. Sebastian: high threat — a rival has filed four patents and is building capacity. Priya: three of five concepts pass, all aligned to the converging trends. Marcus: two of three target retailers ready for a first-mover pitch.",
      "Without it — six vendors, fourteen weeks, three conflicting answers. With it — one platform, one meeting, one connected answer.",
    ],
  },
  {
    num: "09",
    title: "What changes when your best people stop being data janitors",
    timing: "3:30",
    paragraphs: [
      "And this is what changes when your best people stop being data janitors. Strategy time goes from ten percent to seventy-five percent. Decision velocity from weeks to hours. Seven-and-a-half times the time reclaimed. Same-day decisions. Double the launch success rate.",
      "That's not incremental. That's a fundamentally different operating model.",
    ],
  },
  {
    num: "10",
    title: "The Intelligence Maturity Journey",
    timing: "3:55",
    paragraphs: [
      "There's a clear path to get there. Most teams are stuck at Fragmented — six to eight weeks per decision. The gateway is Connected — one taxonomy unlocks everything, and reconciliation drops from sixty percent to twenty. Then Optimised — AI surfaces patterns across every solution. And finally Predictive — AI anticipates, and your team acts first.",
      "You can't skip to Predictive. Connected is the foundation.",
    ],
  },
  {
    num: "11",
    title: "The proof",
    timing: "4:15",
    paragraphs: [
      "Eight of the top ten FMCG companies have already made this shift. Seventy percent reduction in time to insight. Three times faster decisions. Double the launch success rate.",
      "In the words of a VP of Consumer Insights at a top five FMCG: seven disconnected vendors became one connected platform in ninety days. For the first time, strategy, innovation and commercial work from the same intelligence.",
    ],
  },
  {
    num: "12",
    title: "Can't we just integrate what we already have?",
    timing: "4:35",
    paragraphs: [
      "And the question we always get — can't you just integrate what you have? Eighteen months of integration, fourteen contracts, no shared taxonomy, no cross-pollination. Connected Intelligence is ninety days, one contract, one taxonomy across fifty markets, ninety-five percent global GDP — pre-built on forty years of analyst-validated data. You're not building it. You're switching it on.",
    ],
  },
  {
    num: "13",
    title: "Your competitors already see the full picture",
    timing: "4:55",
    paragraphs: [
      "Your competitors already see the full picture. Let's make sure you do too. Three ways to start: a thirty-minute discovery call, an intelligence maturity assessment, or a proof of concept in one of your categories — measurable impact within a quarter.",
    ],
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
              Print script
            </button>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Presenter Script
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Connected Intelligence for Consumer Brands
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            ~4 min 50 sec · ~{totalWords} words · 14 slides · Empathetic Advisor tone, UK spelling
          </p>
        </header>

        <main className="space-y-10 print:space-y-6">
          {slides.map((s) => (
            <section
              key={s.num}
              className="border-l-2 border-primary/30 pl-6 print:break-inside-avoid"
            >
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-xs font-mono font-semibold text-primary">
                  SLIDE {s.num}
                </span>
                <span className="text-xs text-muted-foreground">~{s.timing}</span>
              </div>
              <h2 className="mb-4 text-lg font-semibold tracking-tight">
                {s.title}
              </h2>
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
            </section>
          ))}
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
