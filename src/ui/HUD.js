"use client";

export default function HUD({ era }) {
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
          <div className="retro-copy retro-meta text-[10px] font-bold uppercase tracking-[0.08em] sm:text-[11px]">
            Controls
          </div>
          <div className="retro-copy mt-1 text-[11px] leading-relaxed sm:text-xs">
            A/D: move on timeline | W/S: move on branch | Space: open event
          </div>
        </div>
      </div>
    </div>
  );
}
