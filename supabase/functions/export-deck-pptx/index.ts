// Edge function: render every slide of the deck via headless Chromium
// (Astral, Deno-native) at 1920x1080 @2x, then assemble a .pptx with each
// PNG full-bleed on a 16:9 widescreen slide.
import { corsHeaders } from "@supabase/supabase-js/cors";
import { launch } from "https://deno.land/x/astral@0.5.2/mod.ts";
import PptxGenJS from "npm:pptxgenjs@3.12.0";

interface ExportBody {
  deckUrl: string;
  slideCount: number;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  let body: ExportBody;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const { deckUrl, slideCount } = body;
  if (!deckUrl || !slideCount || slideCount < 1 || slideCount > 50) {
    return new Response(JSON.stringify({ error: "deckUrl and slideCount (1-50) required" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  console.log(`[export-deck-pptx] Starting export of ${slideCount} slides from ${deckUrl}`);

  let browser;
  try {
    browser = await launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
    });

    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    const pptx = new PptxGenJS();
    pptx.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 in (16:9)
    pptx.title = "GlobalData Connected Intelligence";

    for (let i = 0; i < slideCount; i++) {
      const url = `${deckUrl}?capture=1&slide=${i}`;
      console.log(`[export-deck-pptx] Slide ${i + 1}/${slideCount} → ${url}`);

      await page.goto(url, { waitUntil: "networkidle2" });
      // Wait for fonts and any settle/layout
      await page.evaluate(`(async () => {
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
        await new Promise(r => setTimeout(r, 1000));
      })()`);

      const screenshot = await page.screenshot({
        format: "png",
        // Astral does not yet expose deviceScaleFactor; viewport screenshot at 1920x1080
      });

      const base64 = btoa(String.fromCharCode(...new Uint8Array(screenshot)));
      const dataUrl = `data:image/png;base64,${base64}`;

      const pSlide = pptx.addSlide();
      pSlide.background = { color: "FFFFFF" };
      pSlide.addImage({ data: dataUrl, x: 0, y: 0, w: 13.333, h: 7.5 });
    }

    await browser.close();
    browser = undefined;

    console.log(`[export-deck-pptx] Assembling pptx…`);
    const arrayBuffer = (await pptx.write({ outputType: "arraybuffer" })) as ArrayBuffer;

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "Content-Disposition": `attachment; filename="GlobalData-Connected-Intelligence.pptx"`,
      },
    });
  } catch (err) {
    console.error("[export-deck-pptx] Failed:", err);
    if (browser) {
      try { await browser.close(); } catch { /* ignore */ }
    }
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : String(err) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
