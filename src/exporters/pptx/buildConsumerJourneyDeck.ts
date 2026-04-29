import type PptxGenJS from "pptxgenjs";
import {
  brand,
  fonts,
  SLIDE_W,
  SLIDE_H,
  PAGE_PAD,
  addBackground,
  addAccentBar,
  addTitle,
  addEyebrow,
  addFooter,
  addCard,
} from "@/lib/pptxBrand";
import type { BuildOpts } from "./types";
import { renderToImage } from "./renderToImage";

const TOTAL = 12;

/* ─────────────────────────  Slide 0 — Title  ────────────────────────── */

function buildSlide0(pptx: PptxGenJS) {
  const s = pptx.addSlide();
  addBackground(s);

  // soft accent ellipse
  s.addShape("ellipse", {
    x: SLIDE_W / 2 - 4,
    y: 1.4,
    w: 8,
    h: 4,
    fill: { color: brand.primary, transparency: 88 },
    line: { type: "none" },
  });

  // Audience badge (rounded pill)
  s.addShape("roundRect", {
    x: SLIDE_W / 2 - 1.9,
    y: 1.5,
    w: 3.8,
    h: 0.4,
    fill: { color: brand.primary, transparency: 80 },
    line: { color: brand.primary, width: 0.5 },
    rectRadius: 0.2,
  });
  s.addText("FOR CMOs, CSOs & CATEGORY LEADERS", {
    x: SLIDE_W / 2 - 1.9,
    y: 1.5,
    w: 3.8,
    h: 0.4,
    fontFace: fonts.body,
    fontSize: 10,
    bold: true,
    color: brand.primary,
    align: "center",
    valign: "middle",
    charSpacing: 3,
  });

  // Headline
  s.addText(
    [
      { text: "Connected Intelligence\n", options: { color: brand.text, bold: true } },
      { text: "for Consumer Brands", options: { color: brand.primary, bold: true } },
    ],
    {
      x: 1,
      y: 2.1,
      w: SLIDE_W - 2,
      h: 1.8,
      fontFace: fonts.heading,
      fontSize: 48,
      align: "center",
      valign: "top",
      lineSpacingMultiple: 1.05,
    },
  );

  // Sub-line
  s.addText(
    [
      { text: "What you're about to see isn't just better data.\nIt's a completely ", options: { color: brand.textMuted } },
      { text: "new way of working.", options: { color: brand.primary, bold: true } },
    ],
    {
      x: 1,
      y: 4.0,
      w: SLIDE_W - 2,
      h: 0.9,
      fontFace: fonts.body,
      fontSize: 16,
      align: "center",
    },
  );

  // 3 stat columns
  const stats = [
    { value: "8 of 10", label: "Top FMCG companies trust us" },
    { value: "95%", label: "Global GDP coverage" },
    { value: "40+", label: "Years of market intelligence" },
  ];
  const colW = 3.0;
  const startX = (SLIDE_W - colW * 3) / 2;
  // separator line
  s.addShape("line", {
    x: startX,
    y: 5.05,
    w: colW * 3,
    h: 0,
    line: { color: brand.border, width: 0.75 },
  });
  stats.forEach((stat, i) => {
    const x = startX + i * colW;
    s.addText(stat.value, {
      x,
      y: 5.2,
      w: colW,
      h: 0.6,
      fontFace: fonts.heading,
      fontSize: 28,
      bold: true,
      color: brand.primary,
      align: "center",
    });
    s.addText(stat.label, {
      x,
      y: 5.8,
      w: colW,
      h: 0.4,
      fontFace: fonts.body,
      fontSize: 11,
      color: brand.textMuted,
      align: "center",
    });
  });

  // Bottom quote
  s.addText('"The brands that win don\'t have more data.\nThey have connected intelligence."', {
    x: 1.5,
    y: 6.4,
    w: SLIDE_W - 3,
    h: 0.7,
    fontFace: fonts.heading,
    fontSize: 16,
    italic: true,
    color: brand.text,
    align: "center",
  });
  s.addText("A NEW WAY OF WORKING", {
    x: 1.5,
    y: 7.05,
    w: SLIDE_W - 3,
    h: 0.3,
    fontFace: fonts.body,
    fontSize: 9,
    bold: true,
    color: brand.primary,
    align: "center",
    charSpacing: 5,
  });
}

/* ────────────────────────  Slide 1 — Pressure  ──────────────────────── */

function buildSlide1(pptx: PptxGenJS) {
  const s = pptx.addSlide();
  addBackground(s);
  addAccentBar(s);

  // Headline
  s.addText(
    [
      { text: "You're Under More Pressure\n", options: { color: brand.text } },
      { text: "Than Ever.", options: { color: brand.destructive } },
    ],
    {
      x: PAGE_PAD,
      y: 0.6,
      w: SLIDE_W - PAGE_PAD * 2,
      h: 1.6,
      fontFace: fonts.heading,
      fontSize: 38,
      bold: true,
      align: "center",
      lineSpacingMultiple: 1.05,
    },
  );
  s.addText(
    "Your consumers are changing faster than you can track them.\nAnd every missed signal is a missed opportunity.",
    {
      x: PAGE_PAD,
      y: 2.2,
      w: SLIDE_W - PAGE_PAD * 2,
      h: 0.7,
      fontFace: fonts.body,
      fontSize: 14,
      color: brand.textMuted,
      align: "center",
    },
  );

  // 2x2 cards
  const cards = [
    { title: "Consumer Expectations", desc: "Changing faster than your planning cycles", color: brand.primary },
    { title: "Market Velocity", desc: "Competitors move in weeks, you move in quarters", color: brand.sky },
    { title: "Fragmented View", desc: "Your data lives in 7 different places", color: brand.amber },
    { title: "First-Mover Risk", desc: "Every missed signal is a missed category", color: brand.destructive },
  ];
  const cardW = 4.6;
  const cardH = 1.5;
  const gap = 0.3;
  const gridW = cardW * 2 + gap;
  const gridStartX = (SLIDE_W - gridW) / 2;
  const gridStartY = 3.3;
  cards.forEach((c, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = gridStartX + col * (cardW + gap);
    const y = gridStartY + row * (cardH + gap);
    addCard(s, x, y, cardW, cardH, { fill: c.color, transparency: 88, border: c.color });
    // accent square (icon stand-in)
    s.addShape("roundRect", {
      x: x + 0.25,
      y: y + 0.3,
      w: 0.5,
      h: 0.5,
      fill: { color: brand.bgNavy },
      line: { color: c.color, width: 1 },
      rectRadius: 0.06,
    });
    s.addText(c.title, {
      x: x + 0.9,
      y: y + 0.25,
      w: cardW - 1.1,
      h: 0.4,
      fontFace: fonts.heading,
      fontSize: 16,
      bold: true,
      color: brand.text,
    });
    s.addText(c.desc, {
      x: x + 0.9,
      y: y + 0.7,
      w: cardW - 1.1,
      h: 0.7,
      fontFace: fonts.body,
      fontSize: 12,
      color: brand.textMuted,
    });
  });

  s.addText("Sound familiar? Picture your typical Monday.", {
    x: PAGE_PAD,
    y: 6.7,
    w: SLIDE_W - PAGE_PAD * 2,
    h: 0.4,
    fontFace: fonts.heading,
    fontSize: 14,
    italic: true,
    color: brand.text,
    align: "center",
  });

  addFooter(s, 2, TOTAL);
}

/* ────────────────────  Slide 2 — Monday Morning Inbox  ───────────────── */

function buildSlide2(pptx: PptxGenJS) {
  const s = pptx.addSlide();
  addBackground(s);
  addAccentBar(s);
  addTitle(s, "Your Monday Morning", {
    subtitle: "One opportunity. Seven opinions. Zero alignment.",
  });

  const emails = [
    { sender: "CEO", subject: "The board wants our plant-based protein position by Friday", time: "9:02 AM" },
    { sender: "Head of Strategy", subject: "Our trend provider says plant-based is peaking — but social data says it's accelerating", time: "9:08 AM" },
    { sender: "Finance / Market Intel", subject: "Finance needs a TAM number. Ours says $1.4B. The consultant says $2.1B", time: "9:14 AM" },
    { sender: "Competitive Intel", subject: "A rival just filed four patents in plant-based protein. Where did that come from?", time: "9:21 AM" },
    { sender: "Innovation Lead", subject: "We have five concepts in the pipeline — which ones should we kill?", time: "9:27 AM" },
    { sender: "Commercial / Sales", subject: "The buyer at our biggest retailer wants a plant-based range proposal by next month", time: "9:33 AM" },
    { sender: "Procurement", subject: "We're paying six vendors for overlapping data. Renewal season is in three weeks", time: "9:41 AM" },
  ];

  // Inbox card frame
  const tableX = 1.0;
  const tableY = 1.7;
  const tableW = SLIDE_W - 2.0;
  const headerH = 0.5;
  const rowH = 0.46;
  const totalH = headerH + emails.length * rowH;

  addCard(s, tableX, tableY, tableW, totalH + 0.1, {
    fill: brand.bgCard,
    border: brand.border,
    radius: 0.1,
  });

  // Toolbar header
  s.addShape("rect", {
    x: tableX,
    y: tableY,
    w: tableW,
    h: headerH,
    fill: { color: brand.bgCardSoft },
    line: { type: "none" },
  });
  s.addText(
    [
      { text: "📥  Inbox  ", options: { bold: true, color: brand.text } },
      { text: "  7 ", options: { bold: true, color: brand.white, fontSize: 10 } },
    ],
    {
      x: tableX + 0.2,
      y: tableY,
      w: 4,
      h: headerH,
      fontFace: fonts.body,
      fontSize: 13,
      valign: "middle",
    },
  );
  s.addText("Search mail…", {
    x: tableX + tableW - 2.2,
    y: tableY + 0.08,
    w: 2.0,
    h: headerH - 0.16,
    fontFace: fonts.body,
    fontSize: 10,
    color: brand.textSubtle,
    align: "right",
    valign: "middle",
  });

  // Rows
  emails.forEach((e, i) => {
    const y = tableY + headerH + i * rowH;
    // Divider
    if (i > 0) {
      s.addShape("line", {
        x: tableX + 0.15,
        y,
        w: tableW - 0.3,
        h: 0,
        line: { color: brand.border, width: 0.5 },
      });
    }
    // unread dot
    s.addShape("ellipse", {
      x: tableX + 0.2,
      y: y + rowH / 2 - 0.07,
      w: 0.14,
      h: 0.14,
      fill: { color: brand.primary },
      line: { type: "none" },
    });
    // sender
    s.addText(e.sender, {
      x: tableX + 0.45,
      y,
      w: 2.4,
      h: rowH,
      fontFace: fonts.body,
      fontSize: 11,
      bold: true,
      color: brand.text,
      valign: "middle",
    });
    // subject
    s.addText(e.subject, {
      x: tableX + 2.9,
      y,
      w: tableW - 4.0,
      h: rowH,
      fontFace: fonts.body,
      fontSize: 11,
      color: brand.textMuted,
      valign: "middle",
    });
    // time
    s.addText(e.time, {
      x: tableX + tableW - 1.05,
      y,
      w: 0.9,
      h: rowH,
      fontFace: fonts.body,
      fontSize: 10,
      color: brand.textSubtle,
      align: "right",
      valign: "middle",
    });
  });

  s.addText("One opportunity. Seven teams. Seven answers. Which one do you trust?", {
    x: PAGE_PAD,
    y: tableY + totalH + 0.25,
    w: SLIDE_W - PAGE_PAD * 2,
    h: 0.4,
    fontFace: fonts.heading,
    fontSize: 13,
    italic: true,
    color: brand.textMuted,
    align: "center",
  });

  addFooter(s, 3, TOTAL);
}

/* ─────────────────  Slide 3 — Seven Conflicting Sources  ────────────── */

function buildSlide3(pptx: PptxGenJS) {
  const s = pptx.addSlide();
  addBackground(s);
  addAccentBar(s);
  addTitle(s, "Same Opportunity. Seven Conflicting Signals.", {
    subtitle: "Every source is telling you something different about plant-based protein.",
  });

  const sources = [
    { label: "Mintel\nTrends", signal: '"Plant-based is peaking"' },
    { label: "Euromonitor\nMarket Sizing", signal: '"$1.4B TAM (or $2.1B?)"' },
    { label: "Innova\nCompetitive Intel", signal: '"No significant moves"' },
    { label: "IDEO /\nAgency", signal: '"Consumer fatigue detected"' },
    { label: "NielsenIQ\nRetail Data", signal: '"Retailer X is demanding it"' },
    { label: "Kantar\nConsumer Panel", signal: '"Trial up, repeat flat"' },
    { label: "Circana\nInternal POS", signal: '"Test market grew 22%"' },
  ];

  const cardW = 1.55;
  const cardH = 2.0;
  const gap = 0.18;
  const gridW = cardW * 7 + gap * 6;
  const startX = (SLIDE_W - gridW) / 2;
  const startY = 2.0;

  sources.forEach((src, i) => {
    const x = startX + i * (cardW + gap);
    addCard(s, x, startY, cardW, cardH, {
      fill: brand.bgCard,
      border: brand.border,
      radius: 0.1,
    });
    // alert dot
    s.addShape("ellipse", {
      x: x + cardW - 0.22,
      y: startY - 0.06,
      w: 0.16,
      h: 0.16,
      fill: { color: brand.destructive },
      line: { type: "none" },
    });
    // icon stand-in (rounded rect)
    s.addShape("roundRect", {
      x: x + cardW / 2 - 0.3,
      y: startY + 0.25,
      w: 0.6,
      h: 0.6,
      fill: { color: brand.primary, transparency: 70 },
      line: { color: brand.primary, width: 0.5 },
      rectRadius: 0.08,
    });
    s.addText(src.label, {
      x: x + 0.05,
      y: startY + 0.95,
      w: cardW - 0.1,
      h: 0.55,
      fontFace: fonts.body,
      fontSize: 10,
      bold: true,
      color: brand.text,
      align: "center",
    });
    s.addText(src.signal, {
      x: x + 0.05,
      y: startY + 1.5,
      w: cardW - 0.1,
      h: 0.45,
      fontFace: fonts.body,
      fontSize: 8.5,
      italic: true,
      color: brand.destructive,
      align: "center",
    });
  });

  // Stat strip
  const stripY = 4.6;
  const stripW = 8;
  const stripX = (SLIDE_W - stripW) / 2;
  addCard(s, stripX, stripY, stripW, 1.2, {
    fill: brand.destructive,
    transparency: 88,
    border: brand.destructive,
    radius: 0.18,
  });
  const stats = [
    { v: "60%", l: "of time reconciling", c: brand.destructive },
    { v: "10%", l: "on strategy", c: brand.textMuted },
    { v: "12 wks", l: "to decide", c: brand.amber },
  ];
  const colW = stripW / 3;
  stats.forEach((st, i) => {
    const cx = stripX + i * colW;
    s.addText(st.v, {
      x: cx,
      y: stripY + 0.15,
      w: colW,
      h: 0.55,
      fontFace: fonts.heading,
      fontSize: 30,
      bold: true,
      color: st.c,
      align: "center",
    });
    s.addText(st.l, {
      x: cx,
      y: stripY + 0.7,
      w: colW,
      h: 0.4,
      fontFace: fonts.body,
      fontSize: 11,
      color: brand.textMuted,
      align: "center",
    });
    if (i < 2) {
      s.addShape("line", {
        x: cx + colW,
        y: stripY + 0.3,
        w: 0,
        h: 0.6,
        line: { color: brand.border, width: 0.5 },
      });
    }
  });

  s.addText("By the time you reconcile, someone else has launched.", {
    x: PAGE_PAD,
    y: 6.0,
    w: SLIDE_W - PAGE_PAD * 2,
    h: 0.4,
    fontFace: fonts.heading,
    fontSize: 13,
    italic: true,
    color: brand.textMuted,
    align: "center",
  });

  addFooter(s, 4, TOTAL);
}

/* ────────────────────────  Slide 4 — The Cost  ──────────────────────── */

function buildSlide4(pptx: PptxGenJS) {
  const s = pptx.addSlide();
  addBackground(s);
  addAccentBar(s);
  addTitle(s, "What It's Already Cost You", {
    subtitle: "In your category. This year. Personally.",
  });

  const businessCosts = [
    { stat: "£40M Line — Lost", detail: "A competitor saw the same plant-based signals six months ago. They launched. They claimed the shelf. You're still reconciling.", color: brand.destructive },
    { stat: "12 Weeks to Align", detail: "Strategy, innovation, and commercial each had a different view. By the time they agreed, the buyer had moved on.", color: brand.amber },
    { stat: "The Launch That Flopped", detail: "Launched without competitive context. A rival had already saturated the space. You found out from trade press.", color: brand.orange },
  ];
  const personalCosts = [
    { stat: "Your Board Questioned the Numbers — Again", detail: "Three different data sources. Three different stories. Your credibility took the hit.", color: brand.violet },
    { stat: "3 Days Building a Deck, Not Strategy", detail: "You spent 60% of your week reconciling spreadsheets instead of shaping the category.", color: brand.sky },
    { stat: "The Call You Didn't Make", detail: "You had the right instinct but no evidence to back it. So you waited. Someone else didn't.", color: brand.emerald },
  ];

  const colW = 5.9;
  const colGap = 0.4;
  const startX = (SLIDE_W - (colW * 2 + colGap)) / 2;
  const startY = 1.7;
  const cardH = 1.25;
  const cardGap = 0.12;

  // Headers
  s.addText("YOUR BUSINESS", {
    x: startX,
    y: startY,
    w: colW,
    h: 0.3,
    fontFace: fonts.body,
    fontSize: 11,
    bold: true,
    color: brand.destructive,
    charSpacing: 3,
  });
  s.addText("YOU, PERSONALLY", {
    x: startX + colW + colGap,
    y: startY,
    w: colW,
    h: 0.3,
    fontFace: fonts.body,
    fontSize: 11,
    bold: true,
    color: brand.primary,
    charSpacing: 3,
  });

  type CostItem = { stat: string; detail: string; color: string };
  const renderCol = (items: CostItem[], x: number) => {
    items.forEach((c, i) => {
      const y = startY + 0.4 + i * (cardH + cardGap);
      addCard(s, x, y, colW, cardH, { fill: c.color, transparency: 90, border: c.color });
      // colored stripe
      s.addShape("rect", {
        x,
        y,
        w: 0.08,
        h: cardH,
        fill: { color: c.color },
        line: { type: "none" },
      });
      s.addText(c.stat, {
        x: x + 0.25,
        y: y + 0.12,
        w: colW - 0.4,
        h: 0.4,
        fontFace: fonts.heading,
        fontSize: 14,
        bold: true,
        color: brand.text,
      });
      s.addText(c.detail, {
        x: x + 0.25,
        y: y + 0.55,
        w: colW - 0.4,
        h: 0.65,
        fontFace: fonts.body,
        fontSize: 10.5,
        color: brand.textMuted,
      });
    });
  };
  renderCol(businessCosts, startX);
  renderCol(personalCosts, startX + colW + colGap);

  // Accumulator
  const accY = 6.3;
  addCard(s, PAGE_PAD, accY, SLIDE_W - PAGE_PAD * 2, 0.8, {
    fill: brand.primary,
    transparency: 90,
    border: brand.primary,
    radius: 0.1,
  });
  s.addText(
    [
      { text: "Revenue at risk: ", options: { color: brand.textMuted } },
      { text: "£63M", options: { color: brand.destructive, bold: true, fontSize: 16 } },
      { text: "   ·   Time lost: ", options: { color: brand.textMuted } },
      { text: "60% of your week", options: { color: brand.primary, bold: true } },
    ],
    {
      x: PAGE_PAD + 0.3,
      y: accY,
      w: 7,
      h: 0.8,
      fontFace: fonts.body,
      fontSize: 13,
      valign: "middle",
    },
  );
  s.addText("And next quarter, it happens again — unless something changes.", {
    x: PAGE_PAD + 7.3,
    y: accY,
    w: SLIDE_W - PAGE_PAD * 2 - 7.5,
    h: 0.8,
    fontFace: fonts.body,
    fontSize: 11,
    italic: true,
    color: brand.textMuted,
    align: "right",
    valign: "middle",
  });

  addFooter(s, 5, TOTAL);
}

/* ───────────  Slide 7 — Teams Transformed (before/after bars)  ──────── */

function buildSlide7(pptx: PptxGenJS) {
  const s = pptx.addSlide();
  addBackground(s);
  addAccentBar(s);
  addTitle(s, "Your Teams, Transformed", {
    subtitle: "What changes when your best people stop being data janitors.",
  });

  const beforeBars = [
    { label: "Reconciling", pct: 60, color: brand.destructive },
    { label: "Searching", pct: 20, color: brand.amber },
    { label: "Reporting", pct: 10, color: brand.textSubtle },
    { label: "Strategy", pct: 10, color: brand.primary },
  ];
  const afterBars = [
    { label: "Reconciling", pct: 5, color: brand.textSubtle },
    { label: "Searching", pct: 5, color: brand.textSubtle },
    { label: "Reporting", pct: 15, color: brand.sky },
    { label: "Strategy", pct: 75, color: brand.primary },
  ];

  const colW = 5.6;
  const colGap = 0.6;
  const startX = (SLIDE_W - (colW * 2 + colGap)) / 2;
  const startY = 1.8;

  const renderBars = (
    bars: typeof beforeBars,
    x: number,
    label: string,
  ) => {
    s.addText(label, {
      x,
      y: startY,
      w: colW,
      h: 0.35,
      fontFace: fonts.heading,
      fontSize: 14,
      bold: true,
      color: brand.text,
    });
    const labelW = 1.2;
    const barTrackX = x + labelW + 0.1;
    const barTrackW = colW - labelW - 0.1;
    const rowH = 0.42;
    const rowGap = 0.12;
    bars.forEach((b, i) => {
      const y = startY + 0.45 + i * (rowH + rowGap);
      s.addText(b.label, {
        x,
        y,
        w: labelW,
        h: rowH,
        fontFace: fonts.body,
        fontSize: 11,
        color: brand.textMuted,
        align: "right",
        valign: "middle",
      });
      // background track
      s.addShape("roundRect", {
        x: barTrackX,
        y,
        w: barTrackW,
        h: rowH,
        fill: { color: brand.bgCardSoft },
        line: { type: "none" },
        rectRadius: 0.05,
      });
      // fill
      const fillW = Math.max(0.4, (b.pct / 100) * barTrackW);
      s.addShape("roundRect", {
        x: barTrackX,
        y,
        w: fillW,
        h: rowH,
        fill: { color: b.color },
        line: { type: "none" },
        rectRadius: 0.05,
      });
      s.addText(`${b.pct}%`, {
        x: barTrackX,
        y,
        w: fillW - 0.1,
        h: rowH,
        fontFace: fonts.body,
        fontSize: 10,
        bold: true,
        color: brand.white,
        align: "right",
        valign: "middle",
      });
    });
  };
  renderBars(beforeBars, startX, "Today — Fragmented");
  renderBars(afterBars, startX + colW + colGap, "Connected — Transformed");

  // Decision velocity row
  const velY = 4.8;
  s.addText(
    [
      { text: "Decision velocity: ", options: { color: brand.textMuted } },
      { text: "6–8 weeks", options: { color: brand.destructive, strike: true, bold: true } },
      { text: "    →    ", options: { color: brand.primary, bold: true } },
      { text: "Hours", options: { color: brand.primary, bold: true } },
    ],
    {
      x: PAGE_PAD,
      y: velY,
      w: SLIDE_W - PAGE_PAD * 2,
      h: 0.5,
      fontFace: fonts.body,
      fontSize: 16,
      align: "center",
    },
  );

  // 3 KPI cards
  const cards = [
    { metric: "7.5×", title: "Time Reclaimed", desc: "75% of time on strategy — not searching, reconciling, or reporting." },
    { metric: "Same-day", title: "Decisions Accelerated", desc: "From 6–8 week cycles to evidence-backed decisions in hours." },
    { metric: "2×", title: "Launch Success", desc: "Double your innovation hit rate. Kill bad ideas faster, back winners with evidence." },
  ];
  const kW = 3.6;
  const kGap = 0.3;
  const kStartX = (SLIDE_W - (kW * 3 + kGap * 2)) / 2;
  const kStartY = 5.5;
  const kH = 1.4;
  cards.forEach((c, i) => {
    const x = kStartX + i * (kW + kGap);
    addCard(s, x, kStartY, kW, kH, { fill: brand.primary, transparency: 88, border: brand.primary });
    s.addText(c.metric, {
      x,
      y: kStartY + 0.15,
      w: kW,
      h: 0.45,
      fontFace: fonts.heading,
      fontSize: 22,
      bold: true,
      color: brand.primary,
      align: "center",
    });
    s.addText(c.title, {
      x,
      y: kStartY + 0.6,
      w: kW,
      h: 0.3,
      fontFace: fonts.body,
      fontSize: 11,
      bold: true,
      color: brand.text,
      align: "center",
    });
    s.addText(c.desc, {
      x: x + 0.15,
      y: kStartY + 0.9,
      w: kW - 0.3,
      h: 0.5,
      fontFace: fonts.body,
      fontSize: 9,
      color: brand.textMuted,
      align: "center",
    });
  });

  addFooter(s, 8, TOTAL);
}

/* ────────────────────────  Slide 9 — Proof  ─────────────────────────── */

function buildSlide9(pptx: PptxGenJS) {
  const s = pptx.addSlide();
  addBackground(s);
  addAccentBar(s);

  // badge
  s.addText("🛡  TRUSTED BY THE BEST", {
    x: PAGE_PAD,
    y: 0.6,
    w: SLIDE_W - PAGE_PAD * 2,
    h: 0.3,
    fontFace: fonts.body,
    fontSize: 10,
    bold: true,
    color: brand.primary,
    align: "center",
    charSpacing: 5,
  });

  // headline
  s.addText(
    [
      { text: "8 of the top 10", options: { color: brand.primary, bold: true } },
      { text: " FMCG companies", options: { color: brand.text, bold: true } },
    ],
    {
      x: PAGE_PAD,
      y: 1.0,
      w: SLIDE_W - PAGE_PAD * 2,
      h: 0.7,
      fontFace: fonts.heading,
      fontSize: 32,
      align: "center",
    },
  );
  s.addText("have already transformed how they work.", {
    x: PAGE_PAD,
    y: 1.7,
    w: SLIDE_W - PAGE_PAD * 2,
    h: 0.4,
    fontFace: fonts.body,
    fontSize: 14,
    color: brand.textMuted,
    align: "center",
  });

  // 3 pillars
  const pillars = [
    { metric: "70%", label: "reduction in time to insight", tag: "Hours, not weeks" },
    { metric: "3×", label: "faster decisions", tag: "Evidence, not debate" },
    { metric: "2×", label: "launch success rate", tag: "Winners, not guesses" },
  ];
  const pW = 3.0;
  const pGap = 0.3;
  const pStartX = (SLIDE_W - (pW * 3 + pGap * 2)) / 2;
  const pStartY = 2.3;
  const pH = 1.4;
  pillars.forEach((p, i) => {
    const x = pStartX + i * (pW + pGap);
    addCard(s, x, pStartY, pW, pH, { fill: brand.primary, transparency: 88, border: brand.primary });
    s.addText(p.metric, {
      x,
      y: pStartY + 0.15,
      w: pW,
      h: 0.5,
      fontFace: fonts.heading,
      fontSize: 26,
      bold: true,
      color: brand.primary,
      align: "center",
    });
    s.addText(p.label, {
      x: x + 0.1,
      y: pStartY + 0.65,
      w: pW - 0.2,
      h: 0.35,
      fontFace: fonts.body,
      fontSize: 10.5,
      color: brand.textMuted,
      align: "center",
    });
    s.addText(`"${p.tag}"`, {
      x,
      y: pStartY + 1.0,
      w: pW,
      h: 0.3,
      fontFace: fonts.body,
      fontSize: 10,
      bold: true,
      italic: true,
      color: brand.primary,
      align: "center",
    });
  });

  // logo grid 4x2
  const logos = ["Ferrero", "Mondelez", "Danone", "Reckitt", "Colgate-Palmolive", "Henkel", "Church & Dwight", "Haleon"];
  const lW = 1.9;
  const lH = 0.55;
  const lGap = 0.15;
  const gridW = lW * 4 + lGap * 3;
  const lStartX = (SLIDE_W - gridW) / 2;
  const lStartY = 4.0;
  logos.forEach((name, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const x = lStartX + col * (lW + lGap);
    const y = lStartY + row * (lH + lGap);
    addCard(s, x, y, lW, lH, { fill: brand.bgCard, border: brand.border, radius: 0.06 });
    s.addText(name, {
      x,
      y,
      w: lW,
      h: lH,
      fontFace: fonts.body,
      fontSize: 11,
      bold: true,
      color: brand.textMuted,
      align: "center",
      valign: "middle",
    });
  });

  // testimonial
  const tY = 5.55;
  const tW = 9.5;
  const tX = (SLIDE_W - tW) / 2;
  addCard(s, tX, tY, tW, 1.4, { fill: brand.primary, transparency: 90, border: brand.primary });
  s.addText('"', {
    x: tX + 0.15,
    y: tY,
    w: 0.4,
    h: 0.6,
    fontFace: fonts.heading,
    fontSize: 36,
    bold: true,
    color: brand.primary,
  });
  s.addText(
    '"We went from seven disconnected data vendors to a single connected platform in 90 days. For the first time, our strategy, innovation, and commercial teams are working from the same intelligence."',
    {
      x: tX + 0.6,
      y: tY + 0.1,
      w: tW - 0.8,
      h: 0.7,
      fontFace: fonts.body,
      fontSize: 12,
      italic: true,
      color: brand.text,
    },
  );
  s.addShape("ellipse", {
    x: tX + 0.6,
    y: tY + 0.95,
    w: 0.3,
    h: 0.3,
    fill: { color: brand.primary },
    line: { type: "none" },
  });
  s.addText("VP", {
    x: tX + 0.6,
    y: tY + 0.95,
    w: 0.3,
    h: 0.3,
    fontFace: fonts.body,
    fontSize: 9,
    bold: true,
    color: brand.white,
    align: "center",
    valign: "middle",
  });
  s.addText(
    [
      { text: "VP of Consumer Insights", options: { bold: true, color: brand.text, fontSize: 11 } },
      { text: "   Top 5 Global FMCG Company", options: { color: brand.textMuted, fontSize: 10 } },
    ],
    {
      x: tX + 1.0,
      y: tY + 0.95,
      w: tW - 1.2,
      h: 0.3,
      fontFace: fonts.body,
      valign: "middle",
    },
  );

  addFooter(s, 10, TOTAL);
}

/* ────────────────────  Slide 10 — Why Not DIY?  ─────────────────────── */

function buildSlide10(pptx: PptxGenJS) {
  const s = pptx.addSlide();
  addBackground(s);
  addAccentBar(s);

  // Eyebrow + title
  addEyebrow(s, "THE #1 OBJECTION", 0.6);
  s.addText(
    [
      { text: '"Can\'t we just ', options: { color: brand.text } },
      { text: "integrate", options: { color: brand.destructive, bold: true } },
      { text: ' what we have?"', options: { color: brand.text } },
    ],
    {
      x: PAGE_PAD,
      y: 1.0,
      w: SLIDE_W - PAGE_PAD * 2,
      h: 0.7,
      fontFace: fonts.heading,
      fontSize: 28,
      bold: true,
      align: "center",
    },
  );

  const diy = [
    { label: "18+ months integration", detail: "Custom APIs, data mapping, ongoing maintenance" },
    { label: "14 separate contracts", detail: "Overlapping coverage, no volume leverage" },
    { label: "No shared taxonomy", detail: "Every tool uses different categories and definitions" },
    { label: "No cross-pollination", detail: "Insights stay siloed in the tool that created them" },
  ];
  const connected = [
    { label: "90-day deployment", detail: "Pre-built on 40+ years of analyst-validated intelligence" },
    { label: "1 platform, 1 contract", detail: "40% TCO reduction through consolidation" },
    { label: "One consumer taxonomy", detail: "Unified across 50+ markets · 95% global GDP coverage" },
    { label: "Intelligence flows", detail: "Agentic AI + domain experts accelerate every layer" },
  ];

  const colW = 5.9;
  const colGap = 0.4;
  const colsX = (SLIDE_W - (colW * 2 + colGap)) / 2;
  const colY = 2.0;
  const colH = 4.1;

  // DIY column
  addCard(s, colsX, colY, colW, colH, { fill: brand.destructive, transparency: 92, border: brand.destructive });
  s.addText("✕   DIY INTEGRATION", {
    x: colsX + 0.3,
    y: colY + 0.2,
    w: colW - 0.6,
    h: 0.4,
    fontFace: fonts.heading,
    fontSize: 13,
    bold: true,
    color: brand.destructive,
    charSpacing: 3,
  });
  diy.forEach((p, i) => {
    const y = colY + 0.75 + i * 0.78;
    s.addText(p.label, {
      x: colsX + 0.4,
      y,
      w: colW - 0.6,
      h: 0.3,
      fontFace: fonts.body,
      fontSize: 12,
      bold: true,
      color: brand.text,
    });
    s.addText(p.detail, {
      x: colsX + 0.4,
      y: y + 0.32,
      w: colW - 0.6,
      h: 0.4,
      fontFace: fonts.body,
      fontSize: 10,
      color: brand.textMuted,
    });
  });

  // Connected column
  const cx = colsX + colW + colGap;
  addCard(s, cx, colY, colW, colH, { fill: brand.primary, transparency: 92, border: brand.primary });
  s.addText("✓   CONNECTED INTELLIGENCE", {
    x: cx + 0.3,
    y: colY + 0.2,
    w: colW - 0.6,
    h: 0.4,
    fontFace: fonts.heading,
    fontSize: 13,
    bold: true,
    color: brand.primary,
    charSpacing: 3,
  });
  connected.forEach((p, i) => {
    const y = colY + 0.75 + i * 0.78;
    s.addText(p.label, {
      x: cx + 0.4,
      y,
      w: colW - 0.6,
      h: 0.3,
      fontFace: fonts.body,
      fontSize: 12,
      bold: true,
      color: brand.text,
    });
    s.addText(p.detail, {
      x: cx + 0.4,
      y: y + 0.32,
      w: colW - 0.6,
      h: 0.4,
      fontFace: fonts.body,
      fontSize: 10,
      color: brand.textMuted,
    });
  });

  // Infrastructure callout
  addCard(s, PAGE_PAD, 6.25, SLIDE_W - PAGE_PAD * 2, 0.4, {
    fill: brand.primary,
    transparency: 92,
    border: brand.primary,
    radius: 0.08,
  });
  s.addText(
    "Built on 40+ years of market intelligence  ·  95% global GDP coverage  ·  Analyst-validated  ·  Real-time",
    {
      x: PAGE_PAD,
      y: 6.25,
      w: SLIDE_W - PAGE_PAD * 2,
      h: 0.4,
      fontFace: fonts.body,
      fontSize: 11,
      bold: true,
      color: brand.primary,
      align: "center",
      valign: "middle",
    },
  );

  s.addText(
    [
      { text: "\"Integration connects pipes. GlobalData connects ", options: { color: brand.text } },
      { text: "meaning", options: { color: brand.primary, bold: true } },
      { text: " — with the world's deepest consumer intelligence infrastructure behind it.\"", options: { color: brand.text } },
    ],
    {
      x: PAGE_PAD,
      y: 6.75,
      w: SLIDE_W - PAGE_PAD * 2,
      h: 0.4,
      fontFace: fonts.heading,
      fontSize: 12,
      italic: true,
      align: "center",
    },
  );

  addFooter(s, 11, TOTAL);
}

/* ──────────────────────  Slide 11 — CTA  ────────────────────────────── */

function buildSlide11(pptx: PptxGenJS) {
  const s = pptx.addSlide();
  addBackground(s);
  addAccentBar(s);

  // headline
  s.addText(
    [
      { text: "Your competitors already see ", options: { color: brand.text, bold: true } },
      { text: "the full picture.", options: { color: brand.primary, bold: true } },
    ],
    {
      x: PAGE_PAD,
      y: 1.0,
      w: SLIDE_W - PAGE_PAD * 2,
      h: 1.4,
      fontFace: fonts.heading,
      fontSize: 38,
      align: "center",
      valign: "top",
    },
  );
  s.addText("Let's make sure you do too.", {
    x: PAGE_PAD,
    y: 2.4,
    w: SLIDE_W - PAGE_PAD * 2,
    h: 0.5,
    fontFace: fonts.body,
    fontSize: 16,
    color: brand.textMuted,
    align: "center",
  });

  // social proof pill
  s.addShape("roundRect", {
    x: SLIDE_W / 2 - 3.5,
    y: 3.05,
    w: 7,
    h: 0.5,
    fill: { color: brand.bgCard },
    line: { color: brand.primary, width: 0.5 },
    rectRadius: 0.25,
  });
  s.addText("8 of the top 10 FMCG companies already trust this platform.", {
    x: SLIDE_W / 2 - 3.5,
    y: 3.05,
    w: 7,
    h: 0.5,
    fontFace: fonts.body,
    fontSize: 12,
    color: brand.text,
    align: "center",
    valign: "middle",
  });

  // 3 CTA cards
  const ctas = [
    { title: "30-min Discovery Call", description: "Understand how connected intelligence applies to your specific category challenges.", cta: "Book a call" },
    { title: "Intelligence Maturity Assessment", description: "Score your current setup across all five intelligence layers. Identify the biggest gaps.", cta: "Get assessed" },
    { title: "90-Day Pilot", description: "Deploy connected intelligence in one category. Measurable impact within a quarter.", cta: "Start a pilot" },
  ];
  const cW = 3.5;
  const cGap = 0.3;
  const cStartX = (SLIDE_W - (cW * 3 + cGap * 2)) / 2;
  const cStartY = 4.0;
  const cH = 2.1;
  ctas.forEach((c, i) => {
    const x = cStartX + i * (cW + cGap);
    addCard(s, x, cStartY, cW, cH, { fill: brand.primary, transparency: 90, border: brand.primary });
    // icon stand-in
    s.addShape("roundRect", {
      x: x + 0.3,
      y: cStartY + 0.3,
      w: 0.5,
      h: 0.5,
      fill: { color: brand.primary, transparency: 70 },
      line: { color: brand.primary, width: 0.5 },
      rectRadius: 0.06,
    });
    s.addText(c.title, {
      x: x + 0.3,
      y: cStartY + 0.95,
      w: cW - 0.6,
      h: 0.4,
      fontFace: fonts.heading,
      fontSize: 14,
      bold: true,
      color: brand.text,
    });
    s.addText(c.description, {
      x: x + 0.3,
      y: cStartY + 1.35,
      w: cW - 0.6,
      h: 0.55,
      fontFace: fonts.body,
      fontSize: 10,
      color: brand.textMuted,
    });
    s.addText(`${c.cta}  →`, {
      x: x + 0.3,
      y: cStartY + cH - 0.4,
      w: cW - 0.6,
      h: 0.3,
      fontFace: fonts.body,
      fontSize: 11,
      bold: true,
      color: brand.primary,
    });
  });

  s.addText("No commitment. No procurement. Just clarity.", {
    x: PAGE_PAD,
    y: 6.4,
    w: SLIDE_W - PAGE_PAD * 2,
    h: 0.4,
    fontFace: fonts.heading,
    fontSize: 13,
    italic: true,
    color: brand.textMuted,
    align: "center",
  });

  addFooter(s, 12, TOTAL);
}

/* ─────────  Image fallback for SVG-heavy slides 5, 6, 8  ────────────── */

async function buildImageSlide(
  pptx: PptxGenJS,
  domId: string,
  fallbackTitle: string,
  slideNumber: number,
) {
  const s = pptx.addSlide();
  addBackground(s);
  addAccentBar(s);
  try {
    const data = await renderToImage(domId);
    s.addImage({
      data,
      x: PAGE_PAD,
      y: 0.4,
      w: SLIDE_W - PAGE_PAD * 2,
      h: SLIDE_H - 0.9,
    });
  } catch (e) {
    console.error("[pptx] image fallback failed", domId, e);
    addTitle(s, fallbackTitle, { subtitle: "(could not capture live slide)" });
  }
  addFooter(s, slideNumber, TOTAL);
}

/* ────────────────────  Orchestrator  ────────────────────────────────── */

export async function buildConsumerJourneyDeck(opts: BuildOpts = {}): Promise<Blob> {
  const pptxgen = (await import("pptxgenjs")).default;
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";
  pptx.title = "Connected Consumer Intelligence";
  pptx.company = "GlobalData";

  const steps: { label: string; run: () => void | Promise<void> }[] = [
    { label: "Title", run: () => buildSlide0(pptx) },
    { label: "The Pressure", run: () => buildSlide1(pptx) },
    { label: "Your Monday", run: () => buildSlide2(pptx) },
    { label: "Seven Sources", run: () => buildSlide3(pptx) },
    { label: "The Cost", run: () => buildSlide4(pptx) },
    { label: "One Lens Hub", run: () => buildImageSlide(pptx, "cj-slide-5", "One Lens, One New Way", 6) },
    { label: "Connected Decision", run: () => buildImageSlide(pptx, "cj-slide-6", "The Connected Decision", 7) },
    { label: "Teams Transformed", run: () => buildSlide7(pptx) },
    { label: "Maturity Journey", run: () => buildImageSlide(pptx, "cj-slide-8", "Maturity Journey", 9) },
    { label: "Proof", run: () => buildSlide9(pptx) },
    { label: "Why Not DIY", run: () => buildSlide10(pptx) },
    { label: "Next Steps", run: () => buildSlide11(pptx) },
  ];

  for (let i = 0; i < steps.length; i++) {
    opts.onProgress?.(i + 1, TOTAL, steps[i].label);
    await steps[i].run();
    // Yield to browser so the progress UI repaints
    await new Promise((r) => setTimeout(r, 0));
  }

  const blob = (await pptx.write({ outputType: "blob" })) as Blob;
  return blob;
}
