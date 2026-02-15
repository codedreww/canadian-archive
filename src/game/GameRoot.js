/*
  FILE: src/game/GameRoot.js

  PURPOSE:
  Main runtime wrapper for the Pixi game inside an era page.
  Owns global game state: events, prompt, which event is open, pause state.
*/

"use client";

import { Application, extend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import { useMemo, useState } from "react";
import EraScene from "./scenes/EraScene";
import HUD from "@/ui/HUD";
import OpenEventModal from "@/ui/OpenEventModal";
import { EVENTS_BY_ERA } from "@/game/data/events";

extend({ Container, Graphics });

export default function GameRoot({ era }) {
  const width = 960;
  const height = 540;

  // Load events for the chosen era
  const events = useMemo(() => {
    const id = era?.id;
    return id && EVENTS_BY_ERA[id] ? EVENTS_BY_ERA[id] : [];
  }, [era]);

  // Modal state
  const [activeEvent, setActiveEvent] = useState(null);

  // HUD prompt state
  const [prompt, setPrompt] = useState(null);

  // Pause game when modal is open
  const paused = Boolean(activeEvent);

  // Your remount key (keeps Pixi stable across era changes)
  const [appInstanceKey] = useState(
    () =>
      `${era?.id ?? "era"}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
  );

  return (
    <div className="relative h-[540px] w-[960px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
      <Application
        key={appInstanceKey}
        className="h-full w-full"
        width={width}
        height={height}
        antialias
        autoStart
        sharedTicker={false}
        preference="webgl"
        background={0x0b0f17}
      >
        <EraScene
          width={width}
          height={height}
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
