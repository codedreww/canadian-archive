/*
  FILE: src/game/GameRoot.js

  PURPOSE:
  Main runtime wrapper for the Pixi game inside an era page.
  Owns global game state: prompt, which event is open, pause state.
*/

"use client";

import { useEffect, useRef, useState } from "react";
import EraScene from "./scenes/EraScene";
import HUD from "@/ui/HUD";
import OpenEventModal from "@/ui/OpenEventModal";
import { ERAS } from "@/game/data/eras";
import { EVENTS_BY_ERA } from "@/game/data/events";

export default function GameRoot({ era }) {
  const wrapperRef = useRef(null);

  // Responsive size state
  const [size, setSize] = useState(() => ({
    width: typeof window === "undefined" ? 1280 : Math.max(1, window.innerWidth),
    height: typeof window === "undefined" ? 720 : Math.max(1, window.innerHeight),
  }));

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const nextWidth = Math.floor(rect.width);
      const nextHeight = Math.floor(rect.height);

      if (nextWidth <= 0 || nextHeight <= 0) return;

      setSize({
        width: nextWidth,
        height: nextHeight,
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(wrapper);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const [activeSelection, setActiveSelection] = useState(null);
  const [prompt, setPrompt] = useState(null);
  const paused = Boolean(activeSelection);

  return (
    
    <div 
      ref={wrapperRef} 
      className="relative h-screen w-screen overflow-hidden"
      style={{
        backgroundImage: `url(${era?.background})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundColor: '#0a0f18',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {size.width > 0 && size.height > 0 && (
        <EraScene
          width={size.width}
          height={size.height}
          eraId={era?.id}
          eras={ERAS}
          eventsByEra={EVENTS_BY_ERA}
          paused={paused}
          onPromptChange={setPrompt}
          onOpenEvent={setActiveSelection}
        />
      )}

      <HUD era={era} prompt={prompt} />

      <OpenEventModal
        era={activeSelection?.era ?? era}
        event={activeSelection?.event ?? null}
        onClose={() => setActiveSelection(null)}
      />
    </div>
  );
}
