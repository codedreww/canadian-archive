/*
  FILE: src/game/GameRoot.js

  PURPOSE:
  Main runtime wrapper for the Pixi game inside an era page.
  Owns global game state: events, prompt, which event is open, pause state.
*/

"use client";

import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite, Texture } from "pixi.js";
import { useEffect, useMemo, useRef, useState } from "react";
import EraScene from "./scenes/EraScene";
import HUD from "@/ui/HUD";
import OpenEventModal from "@/ui/OpenEventModal";
import { EVENTS_BY_ERA } from "@/game/data/events";
import { getEraBackgroundPath } from "@/game/data/eras";

extend({ Container, Graphics, Sprite });

export default function GameRoot({ era }) {
  const wrapperRef = useRef(null);

  // Responsive size state
  const [size, setSize] = useState({ width: 960, height: 540 });

  useEffect(() => {
    const update = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      setSize({
        width: Math.floor(rect.width),
        height: Math.floor(rect.height),
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const events = useMemo(() => {
    const id = era?.id;
    return id && EVENTS_BY_ERA[id] ? EVENTS_BY_ERA[id] : [];
  }, [era]);

  const [activeEvent, setActiveEvent] = useState(null);
  const [prompt, setPrompt] = useState(null);
  const paused = Boolean(activeEvent);

  // Per-era background placeholder
  const backgroundPath = getEraBackgroundPath(era?.id);

  const [appInstanceKey] = useState(
    () =>
      `${era?.id ?? "era"}-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}`,
  );

  return (
    // Fullscreen wrapper
    <div ref={wrapperRef} className="relative h-[calc(100vh-160px)] w-full">
      {/* If you want true fullscreen with no margins, use: h-screen w-screen in the parent page */}
      <Application
        key={appInstanceKey}
        className="h-full w-full"
        width={size.width}
        height={size.height}
        antialias
        autoStart
        sharedTicker={false}
        preference="webgl"
        background={0x0b0f17}
      >
        <EraScene
          width={size.width}
          height={size.height}
          eraId={era?.id}
          backgroundPath={backgroundPath}
          events={events}
          paused={paused}
          onNearEventChange={(ev) => setPrompt(ev ? ev.title : null)}
          onOpenEvent={(ev) => setActiveEvent(ev)}
        />
      </Application>

      <HUD era={era} prompt={prompt} />

      <OpenEventModal
        era={era}
        event={activeEvent}
        onClose={() => setActiveEvent(null)}
      />
    </div>
  );
}
