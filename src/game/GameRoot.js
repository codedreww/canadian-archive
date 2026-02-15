/*
  FILE: src/game/GameRoot.js

  PURPOSE:
  Main runtime wrapper for the Pixi game inside an era page.
  Owns global game state: prompt, which event is open, pause state.
*/

"use client";

import { Application, extend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import { useEffect, useRef, useState } from "react";
import EraScene from "./scenes/EraScene";
import HUD from "@/ui/HUD";
import OpenEventModal from "@/ui/OpenEventModal";
import { ERAS } from "@/game/data/eras";
import { EVENTS_BY_ERA } from "@/game/data/events";

extend({ Container, Graphics });

export default function GameRoot({ era }) {
  const wrapperRef = useRef(null);

  // Responsive size state
  const [size, setSize] = useState({ width: null, height: null });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const nextWidth = Math.floor(rect.width);
      const nextHeight = Math.floor(rect.height);

      // Ignore transient invalid measurements that can happen during overlay/layout shifts.
      if (nextWidth < 200 || nextHeight < 200) return;

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

  const [appInstanceKey] = useState(
    () =>
      `${era?.id ?? "era"}-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}`,
  );
  const hasMeasuredSize = Number.isFinite(size.width) && Number.isFinite(size.height);
  const appKey = hasMeasuredSize
    ? `${appInstanceKey}-${size.width}x${size.height}`
    : appInstanceKey;

  return (
    
    <div 
      ref={wrapperRef} 
      className="relative h-full w-full overflow-hidden"
      style={{
        backgroundImage: `url(${era?.background})`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundColor: '#0a0f18',
        backgroundRepeat: 'no-repeat',
        
      }}
    >
      {hasMeasuredSize && (
        <Application
          key={appKey}
          className="block"
          width={size.width}
          height={size.height}
          resolution={1}
          antialias
          autoStart
          sharedTicker={false}
          preference="webgl"
          background={0x000000}
          backgroundAlpha={0}
        >
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
        </Application>
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
