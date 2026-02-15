/*
  FILE: src/ui/HUD.js

  PURPOSE:
  HTML overlay displayed on top of the Pixi canvas.
  Shows instructions + proximity prompt.

  RESPONSIBILITIES:
  - Display instructions (WASD, E to interact).
  - Show current era name.
  - Show "Press Space" prompts.
  - Provide "Return to Home" button.
  - Display minimal UI while playing.

  IMPORTANT:
  - This is normal React HTML UI.
  - Not part of Pixi canvas rendering.
*/

// src/ui/HUD.js
"use client";

export default function HUD({ era, prompt }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <div className="retro-panel absolute left-4 top-4 w-[min(92vw,460px)] overflow-hidden">
        <div className="retro-bar px-3 py-2">
          <div className="retro-meta text-[10px] uppercase tracking-[0.14em]">
            Canadian Archive
          </div>
          <div className="retro-copy mt-1 text-xs font-bold uppercase leading-tight sm:text-sm">
            {era?.title}
          </div>
          {era?.years && (
            <div className="retro-copy retro-meta mt-1 text-[10px] uppercase tracking-[0.08em]">
              {era.years}
            </div>
          )}
        </div>
        <div className="px-3 py-2">
          <div className="retro-copy retro-meta text-[11px] sm:text-xs">
            A/D on baseline, W/S on vertical branch
          </div>
        </div>
      </div>

      {prompt && (
        <div className="retro-panel absolute bottom-6 left-1/2 w-[min(92vw,720px)] -translate-x-1/2 overflow-hidden">
          <div className="retro-bar px-4 py-2">
            <div className="retro-copy text-xs font-bold uppercase tracking-[0.1em]">
              Action Prompt
            </div>
          </div>
          <div className="px-4 py-2">
            <div className="retro-copy text-sm leading-relaxed">{prompt}</div>
          </div>
        </div>
      )}
    </div>
  );
}
