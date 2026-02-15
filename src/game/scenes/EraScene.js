// src/game/scenes/EraScene.js
"use client";

import { useTick } from "@pixi/react";
import { useCallback, useRef, useState } from "react";
import useKeyboard from "../systems/useKeyboard";

export default function EraScene({ width, height }) {
  const keys = useKeyboard();
  const player = useRef({ x: width / 2, y: height / 2 });
  const [pos, setPos] = useState(() => ({ x: width / 2, y: height / 2 }));

  useTick((tick) => {
    const delta = typeof tick === "number" ? tick : tick?.deltaTime ?? 1;
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
      player.current.x = Math.max(20, Math.min(width - 20, player.current.x + dx));
      player.current.y = Math.max(20, Math.min(height - 20, player.current.y + dy));
      setPos({ x: player.current.x, y: player.current.y });
    }
  });

  const drawBackground = useCallback(
    (g) => {
      g.clear();
      g.rect(0, 0, width, height).fill(0x0b0f17);
      g.roundRect(18, 18, width - 36, height - 36, 16).fill({
        color: 0x111827,
        alpha: 1,
      });
      g.circle(width * 0.25, height * 0.25, 140).fill({
        color: 0xf59e0b,
        alpha: 0.05,
      });
      g.circle(width * 0.75, height * 0.3, 160).fill({
        color: 0x60a5fa,
        alpha: 0.04,
      });
    },
    [height, width]
  );

  const drawPlayer = useCallback((g) => {
    g.clear();
    g.circle(0, 0, 12).fill(0xffffff);
    g.circle(0, 0, 16).stroke({ width: 2, color: 0x38bdf8, alpha: 0.25 });
  }, []);

  return (
    <pixiContainer>
      <pixiGraphics draw={drawBackground} />
      <pixiContainer x={pos.x} y={pos.y}>
        <pixiGraphics draw={drawPlayer} />
      </pixiContainer>
    </pixiContainer>
  );
}
