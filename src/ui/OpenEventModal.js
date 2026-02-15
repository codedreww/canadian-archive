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

// src/game/scenes/EraScene.js
"use client";

import { Container, Graphics, useTick } from "@pixi/react";
import { useRef, useState } from "react";
import useKeyboard from "../systems/useKeyboard";

export default function EraScene({ width, height }) {
  const keys = useKeyboard();

  // player lives in a ref so it can update smoothly every frame
  const player = useRef({ x: width / 2, y: height / 2 });

  // this state is only for rendering position in React
  const [pos, setPos] = useState(() => ({ x: width / 2, y: height / 2 }));

  useTick((delta) => {
    const speed = 2.8 * delta;

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

      // bounds (keep in frame)
      player.current.x = Math.max(20, Math.min(width - 20, player.current.x));
      player.current.y = Math.max(20, Math.min(height - 20, player.current.y));

      setPos({ x: player.current.x, y: player.current.y });
    }
  });

  const drawBackground = (g) => {
    g.clear();
    g.rect(0, 0, width, height).fill(0x0b0f17); // dark base
    g.roundRect(18, 18, width - 36, height - 36, 16).fill({
      color: 0x111827,
      alpha: 1,
    });
    // subtle “light”
    g.circle(width * 0.25, height * 0.25, 140).fill({
      color: 0xf59e0b,
      alpha: 0.05,
    });
    g.circle(width * 0.75, height * 0.3, 160).fill({
      color: 0x60a5fa,
      alpha: 0.04,
    });
  };

  const drawPlayer = (g) => {
    g.clear();
    g.circle(0, 0, 12).fill(0xffffff);
    g.circle(0, 0, 16).stroke({ width: 2, color: 0x38bdf8, alpha: 0.25 });
  };

  return (
    <Container>
      <Graphics draw={drawBackground} />
      <Container x={pos.x} y={pos.y}>
        <Graphics draw={drawPlayer} />
      </Container>
    </Container>
  );
}
