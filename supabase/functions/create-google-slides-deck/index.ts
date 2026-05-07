import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_slides/v1";

interface SlideInput {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  footer?: string;
}

interface RequestBody {
  presentationTitle: string;
  slides: SlideInput[];
}

// Brand colour: Comply365 blue #0066FF
const PRIMARY = { red: 0.0, green: 0.4, blue: 1.0 };
const TEXT_DARK = { red: 0.07, green: 0.09, blue: 0.15 };
const TEXT_MUTED = { red: 0.36, green: 0.42, blue: 0.5 };

function gw(path: string, init: RequestInit, lovableKey: string, gKey: string) {
  return fetch(`${GATEWAY_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${lovableKey}`,
      "X-Connection-Api-Key": gKey,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
}

let elementCounter = 0;
const nextId = (prefix: string) => `${prefix}_${++elementCounter}_${Date.now().toString(36)}`;

function buildSlideRequests(slide: SlideInput, slideId: string) {
  const requests: any[] = [];

  // Create blank slide
  requests.push({
    createSlide: {
      objectId: slideId,
      slideLayoutReference: { predefinedLayout: "BLANK" },
    },
  });

  // Background bar (left primary stripe)
  const stripeId = nextId("stripe");
  requests.push({
    createShape: {
      objectId: stripeId,
      shapeType: "RECTANGLE",
      elementProperties: {
        pageObjectId: slideId,
        size: { width: { magnitude: 12, unit: "PT" }, height: { magnitude: 540, unit: "PT" } },
        transform: { scaleX: 1, scaleY: 1, translateX: 30, translateY: 0, unit: "PT" },
      },
    },
  });
  requests.push({
    updateShapeProperties: {
      objectId: stripeId,
      shapeProperties: {
        shapeBackgroundFill: { solidFill: { color: { rgbColor: PRIMARY } } },
        outline: { outlineFill: { solidFill: { color: { rgbColor: PRIMARY } } }, weight: { magnitude: 0, unit: "PT" } },
      },
      fields: "shapeBackgroundFill,outline.outlineFill,outline.weight",
    },
  });

  let cursorY = 60;

  // Eyebrow
  if (slide.eyebrow) {
    const id = nextId("eb");
    requests.push({
      createShape: {
        objectId: id, shapeType: "TEXT_BOX",
        elementProperties: {
          pageObjectId: slideId,
          size: { width: { magnitude: 600, unit: "PT" }, height: { magnitude: 24, unit: "PT" } },
          transform: { scaleX: 1, scaleY: 1, translateX: 70, translateY: cursorY, unit: "PT" },
        },
      },
    });
    requests.push({ insertText: { objectId: id, text: slide.eyebrow.toUpperCase() } });
    requests.push({
      updateTextStyle: {
        objectId: id,
        style: {
          fontFamily: "Inter", fontSize: { magnitude: 11, unit: "PT" }, bold: true,
          foregroundColor: { opaqueColor: { rgbColor: PRIMARY } },
        },
        fields: "fontFamily,fontSize,bold,foregroundColor",
        textRange: { type: "ALL" },
      },
    });
    cursorY += 30;
  }

  // Title
  {
    const id = nextId("title");
    requests.push({
      createShape: {
        objectId: id, shapeType: "TEXT_BOX",
        elementProperties: {
          pageObjectId: slideId,
          size: { width: { magnitude: 620, unit: "PT" }, height: { magnitude: 90, unit: "PT" } },
          transform: { scaleX: 1, scaleY: 1, translateX: 70, translateY: cursorY, unit: "PT" },
        },
      },
    });
    requests.push({ insertText: { objectId: id, text: slide.title } });
    requests.push({
      updateTextStyle: {
        objectId: id,
        style: {
          fontFamily: "Inter", fontSize: { magnitude: 32, unit: "PT" }, bold: true,
          foregroundColor: { opaqueColor: { rgbColor: TEXT_DARK } },
        },
        fields: "fontFamily,fontSize,bold,foregroundColor",
        textRange: { type: "ALL" },
      },
    });
    cursorY += 100;
  }

  // Subtitle
  if (slide.subtitle) {
    const id = nextId("sub");
    requests.push({
      createShape: {
        objectId: id, shapeType: "TEXT_BOX",
        elementProperties: {
          pageObjectId: slideId,
          size: { width: { magnitude: 620, unit: "PT" }, height: { magnitude: 50, unit: "PT" } },
          transform: { scaleX: 1, scaleY: 1, translateX: 70, translateY: cursorY, unit: "PT" },
        },
      },
    });
    requests.push({ insertText: { objectId: id, text: slide.subtitle } });
    requests.push({
      updateTextStyle: {
        objectId: id,
        style: {
          fontFamily: "Inter", fontSize: { magnitude: 16, unit: "PT" },
          foregroundColor: { opaqueColor: { rgbColor: TEXT_MUTED } },
        },
        fields: "fontFamily,fontSize,foregroundColor",
        textRange: { type: "ALL" },
      },
    });
    cursorY += 60;
  }

  // Bullets
  if (slide.bullets && slide.bullets.length) {
    const id = nextId("bul");
    const text = slide.bullets.join("\n");
    requests.push({
      createShape: {
        objectId: id, shapeType: "TEXT_BOX",
        elementProperties: {
          pageObjectId: slideId,
          size: { width: { magnitude: 620, unit: "PT" }, height: { magnitude: 280, unit: "PT" } },
          transform: { scaleX: 1, scaleY: 1, translateX: 70, translateY: cursorY, unit: "PT" },
        },
      },
    });
    requests.push({ insertText: { objectId: id, text } });
    requests.push({
      updateTextStyle: {
        objectId: id,
        style: {
          fontFamily: "Inter", fontSize: { magnitude: 14, unit: "PT" },
          foregroundColor: { opaqueColor: { rgbColor: TEXT_DARK } },
        },
        fields: "fontFamily,fontSize,foregroundColor",
        textRange: { type: "ALL" },
      },
    });
    requests.push({
      createParagraphBullets: {
        objectId: id,
        textRange: { type: "ALL" },
        bulletPreset: "BULLET_DISC_CIRCLE_SQUARE",
      },
    });
  }

  // Footer
  if (slide.footer) {
    const id = nextId("ft");
    requests.push({
      createShape: {
        objectId: id, shapeType: "TEXT_BOX",
        elementProperties: {
          pageObjectId: slideId,
          size: { width: { magnitude: 620, unit: "PT" }, height: { magnitude: 24, unit: "PT" } },
          transform: { scaleX: 1, scaleY: 1, translateX: 70, translateY: 500, unit: "PT" },
        },
      },
    });
    requests.push({ insertText: { objectId: id, text: slide.footer } });
    requests.push({
      updateTextStyle: {
        objectId: id,
        style: {
          fontFamily: "Inter", fontSize: { magnitude: 11, unit: "PT" }, italic: true,
          foregroundColor: { opaqueColor: { rgbColor: TEXT_MUTED } },
        },
        fields: "fontFamily,fontSize,italic,foregroundColor",
        textRange: { type: "ALL" },
      },
    });
  }

  return requests;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    const GOOGLE_SLIDES_API_KEY = Deno.env.get("GOOGLE_SLIDES_API_KEY");
    if (!GOOGLE_SLIDES_API_KEY) throw new Error("GOOGLE_SLIDES_API_KEY is not configured");

    const body = (await req.json()) as RequestBody;
    if (!body?.slides?.length) throw new Error("slides[] is required");

    // 1. Create presentation
    const createRes = await gw("/presentations", {
      method: "POST",
      body: JSON.stringify({ title: body.presentationTitle || "Connected Consumer Intelligence" }),
    }, LOVABLE_API_KEY, GOOGLE_SLIDES_API_KEY);
    const created = await createRes.json();
    if (!createRes.ok) throw new Error(`createPresentation failed [${createRes.status}]: ${JSON.stringify(created)}`);

    const presentationId = created.presentationId as string;
    const defaultSlideId = created.slides?.[0]?.objectId as string | undefined;

    // 2. Build all requests for slides
    elementCounter = 0;
    const allRequests: any[] = [];
    const slideIds: string[] = [];
    body.slides.forEach((s, i) => {
      const sid = `slide_${i}_${Date.now().toString(36)}`;
      slideIds.push(sid);
      allRequests.push(...buildSlideRequests(s, sid));
    });

    // 3. Delete the default slide that was auto-created
    if (defaultSlideId) {
      allRequests.push({ deleteObject: { objectId: defaultSlideId } });
    }

    // 4. batchUpdate (chunk to stay under request limits)
    const chunkSize = 200;
    for (let i = 0; i < allRequests.length; i += chunkSize) {
      const chunk = allRequests.slice(i, i + chunkSize);
      const updateRes = await gw(`/presentations/${presentationId}:batchUpdate`, {
        method: "POST",
        body: JSON.stringify({ requests: chunk }),
      }, LOVABLE_API_KEY, GOOGLE_SLIDES_API_KEY);
      const updateData = await updateRes.json();
      if (!updateRes.ok) {
        throw new Error(`batchUpdate failed [${updateRes.status}]: ${JSON.stringify(updateData)}`);
      }
    }

    const url = `https://docs.google.com/presentation/d/${presentationId}/edit`;
    return new Response(JSON.stringify({ presentationId, url }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("create-google-slides-deck error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
