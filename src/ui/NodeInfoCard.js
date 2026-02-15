"use client";

function toSingleLine(value) {
  if (!value) return "";

  const text = Array.isArray(value)
    ? value.filter(Boolean).join(" ")
    : String(value);

  return text.replace(/\s+/g, " ").trim();
}

function toShortSummary(value, limit = 150) {
  const text = toSingleLine(value);
  if (!text) return "";

  const firstSentenceMatch = text.match(/[^.!?]+[.!?]/);
  const firstSentence = firstSentenceMatch?.[0]?.trim();
  if (firstSentence && firstSentence.length <= limit) return firstSentence;

  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 3).trimEnd()}...`;
}

export default function NodeInfoCard({ focus }) {
  if (!focus?.event) return null;

  const title = focus.event.title || "Untitled event";
  const summary = toShortSummary(focus.event.summary);

  return (
    <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 w-[min(92vw,740px)] -translate-x-1/2">
      <div className="retro-panel overflow-hidden">
        <div className="retro-bar px-4 py-2">
          <div className="retro-copy text-xs font-bold uppercase tracking-[0.1em]">
            {focus.atNode ? "Event Node Reached" : "Approaching Event Node"}
          </div>
        </div>

        <div className="px-4 py-3">
          <div className="retro-copy text-sm font-bold leading-snug sm:text-base">
            {title}
          </div>

          {summary && (
            <div className="retro-copy retro-meta mt-1 text-xs leading-relaxed sm:text-sm">
              {summary}
            </div>
          )}

          {focus.atNode && (
            <div className="retro-copy mt-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] sm:text-sm">
              <span>Press</span>
              <span className="retro-close-btn inline-block px-2 py-0.5 text-[11px] leading-none sm:text-xs">
                Space
              </span>
              <span>to open event</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
