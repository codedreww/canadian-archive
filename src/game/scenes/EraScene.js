"use client";

/*
  PURPOSE:
  The playable top-down world for a selected era.
  - Renders background
  - Player movement (WASD)
  - Hotspots from data
  - Proximity detection + "Press E"
  - Calls GameRoot when an event is opened
*/

import { useCallback, useEffect, useRef, useState } from "react";
import useKeyboard from "../systems/useKeyboard";

export default function EraScene({
  width,
  height,
  events = [],
  paused = false,
  onOpenEvent,
  onNearEventChange,
}) {
  const keys = useKeyboard();

  const player = useRef({ x: width / 2, y: height / 2 });
  const [pos, setPos] = useState({ x: player.current.x, y: player.current.y });

  const nearEventRef = useRef(null);
  const eLatch = useRef(false);

  const PROXIMITY_RADIUS = 44;

  // Helper: find nearest event in range
  const computeNearEvent = useCallback(() => {
    let best = null;
    let bestDist = Infinity;

    for (const ev of events) {
      const d = Math.hypot(player.current.x - ev.x, player.current.y - ev.y);
      if (d < bestDist) {
        bestDist = d;
        best = ev;
      }
    }

    return best && bestDist <= PROXIMITY_RADIUS ? best : null;
  }, [events]);

  // main update loop (Pixi v8 style: we’ll manually animate via requestAnimationFrame)
  useEffect(() => {
    let raf = null;

    const loop = () => {
      const speed = 2.8;

      if (!paused) {
        const up = keys.current.w || keys.current.arrowup;
        const left = keys.current.a || keys.current.arrowleft;
        const down = keys.current.s || keys.current.arrowdown;
        const right = keys.current.d || keys.current.arrowright;

        let dx = 0;
        let dy = 0;
        if (up) dy -= speed;
        if (down) dy += speed;
        if (left) dx -= speed;
        if (right) dx += speed;

        if (dx !== 0 || dy !== 0) {
          player.current.x += dx;
          player.current.y += dy;

          // bounds
          player.current.x = Math.max(
            20,
            Math.min(width - 20, player.current.x),
          );
          player.current.y = Math.max(
            20,
            Math.min(height - 20, player.current.y),
          );

          setPos({ x: player.current.x, y: player.current.y });
        }
      }

      // proximity check (still runs even when paused)
      const near = computeNearEvent();
      const prev = nearEventRef.current;

      if ((near?.id ?? null) !== (prev?.id ?? null)) {
        nearEventRef.current = near;
        onNearEventChange?.(near);
      }

      // press E to open event (only if not paused)
      if (!paused && near && keys.current.e && !eLatch.current) {
        eLatch.current = true;
        onOpenEvent?.(near);
      }
      if (!keys.current.e) eLatch.current = false;

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [
    keys,
    width,
    height,
    paused,
    computeNearEvent,
    onOpenEvent,
    onNearEventChange,
  ]);

  // PIXI drawing via custom elements registered by extend()
  // Using pixiGraphics / pixiContainer tags (Pixi React v8)
  return (
    <pixiContainer>
      {/* Background */}
      <pixiGraphics
        draw={(g) => {
          g.clear();
          g.rect(0, 0, width, height).fill(0x0b0f17);
          g.roundRect(18, 18, width - 36, height - 36, 16).fill(0x111827);

          // subtle lighting
          g.circle(width * 0.25, height * 0.25, 150).fill({
            color: 0xf59e0b,
            alpha: 0.05,
          });
          g.circle(width * 0.75, height * 0.3, 170).fill({
            color: 0x60a5fa,
            alpha: 0.04,
          });
        }}
      />

      {/* Hotspots */}
      {events.map((ev) => (
        <pixiGraphics
          key={ev.id}
          x={ev.x}
          y={ev.y}
          draw={(g) => {
            g.clear();
            // outer glow
            g.circle(0, 0, 18).fill({ color: 0xfbbf24, alpha: 0.18 });
            // core marker
            g.circle(0, 0, 7).fill({ color: 0xfbbf24, alpha: 0.9 });
          }}
        />
      ))}

      {/* Player */}
      <pixiGraphics
        x={pos.x}
        y={pos.y}
        draw={(g) => {
          g.clear();
          g.circle(0, 0, 12).fill(0xffffff);
          g.circle(0, 0, 16).stroke({ width: 2, color: 0x38bdf8, alpha: 0.25 });
        }}
      />
    </pixiContainer>
  );
}
