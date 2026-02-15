/*
  FILE: src/game/GameRoot.js

  PURPOSE:
  Main runtime wrapper for the Pixi game inside an era page.
*/

"use client";

import { Application, extend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import { useState } from "react";
import EraScene from "./scenes/EraScene";
import HUD from "@/ui/HUD";

extend({ Container, Graphics });

export default function GameRoot({ era }) {
  const width = 960;
  const height = 540;
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
        <EraScene width={width} height={height} />
      </Application>
      <HUD era={era} />
    </div>
  );
}
