/*
  FILE: src/ui/OpenEentModal.js

  PURPOSE:
  Event content overlay that appears when player interacts with a hotspot.

  RESPONSIBILITIES:
  - Display event article.
  - Display images.
  - Display "Why this matters".
  - Display archive links.
  - Close button to return to gameplay.

  BEHAVIOR:
  - When open → player movement should pause.
  - When closed → return to exploration mode.

  STYLE:
  - Designed to look like a parchment / Skyrim-style menu.
*/

"use client";

export default function OpenEventModal({ era, event, onClose }) {
  if (!event) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-6">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0b0f17] p-6 text-white shadow-2xl">
        <div className="text-xs text-white/60">
          {era?.title} • {era?.years}
        </div>

        <h2 className="mt-2 text-2xl font-semibold">{event.title}</h2>

        <p className="mt-3 text-white/80">{event.summary}</p>

        {/* Placeholder area for future: images, why it matters, archives links */}
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          <div className="font-semibold text-white/85">Next additions</div>
          <ul className="mt-2 list-disc pl-5">
            <li>Artifact image carousel</li>
            <li>Why this matters</li>
            <li>Sources & Archives links</li>
            <li>Mini-game (quiz/match)</li>
          </ul>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
          >
            Close (Esc later)
          </button>
        </div>
      </div>
    </div>
  );
}
