/*
  FILE: src/ui/HUD.js

  PURPOSE:
  HTML overlay displayed on top of the Pixi canvas.

  RESPONSIBILITIES:
  - Display instructions (WASD, E to interact).
  - Show current era name.
  - Show "Press E" prompts.
  - Provide "Return to Home" button.
  - Display minimal UI while playing.

  IMPORTANT:
  - This is normal React HTML UI.
  - Not part of Pixi canvas rendering.
*/

// src/ui/HUD.js
"use client";

export default function HUD({ era }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-4 top-4 rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white backdrop-blur">
        <div className="text-xs text-white/60">Canadian Archive</div>
        <div className="text-sm font-semibold">{era.title}</div>
        <div className="mt-1 text-xs text-white/70">
          WASD / Arrow Keys to move
        </div>
      </div>
    </div>
  );
}
