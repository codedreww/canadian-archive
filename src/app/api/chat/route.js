import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Hard limit on reply length to keep answers short and fast.
const MAX_REPLY_WORDS = 20;

// Optional: simple GET so visiting /api/chat in the browser works.
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "POST a JSON body with { message: string } to this endpoint.",
  });
}

// Simple stateless chat endpoint using the minimal GoogleGenAI example.
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { message } = body || {};

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing 'message' in request body" },
        { status: 400 },
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Chat route: GEMINI_API_KEY is missing. Check your .env.");
      return NextResponse.json(
        { error: "Server configuration error: missing GEMINI_API_KEY." },
        { status: 500 },
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    // Keep the call shape as in the official example, which was working before.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents:
        message +
        "\n\nReply with one short, logical sentence."
    });

    const rawText =
      typeof response?.text === "function" ? response.text() : response?.text;

    let reply = "";

    if (typeof rawText === "string" && rawText.trim().length > 0) {
      const clean = rawText.replace(/\s+/g, " ").trim();
      if (clean) {
        const words = clean.split(" ");
        const limitedWords =
          words.length > MAX_REPLY_WORDS
            ? words.slice(0, MAX_REPLY_WORDS)
            : words;
        reply = limitedWords.join(" ");
      }
    }

    if (!reply) {
      reply =
        "I couldn't find a clear answer. Please try asking in a simpler way.";
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat route error", error);
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 },
    );
  }
}
