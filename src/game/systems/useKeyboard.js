/*
  FILE: src/game/systems/useKeyboard.js

  PURPOSE:
  Centralized keyboard input handler for the game.

  RESPONSIBILITIES:
  - Track WASD keys.
  - Track arrow keys.
  - Track interaction key (Space).
  - Provide a stable reference object that scenes can read every frame.

  IMPORTANT:
  - Should not cause React re-renders every key press.
  - Used by EraScene to move player and detect interaction.
*/

// src/game/systems/useKeyboard.js
"use client";

import { useEffect, useRef } from "react";

export default function useKeyboard() {
  const keys = useRef({
    w: false,
    a: false,
    s: false,
    d: false,
    arrowup: false,
    arrowleft: false,
    arrowdown: false,
    arrowright: false,
    space: false,
  });

  useEffect(() => {
    const down = (ev) => {
      const k = ev.key.toLowerCase();
      const normalized = k === " " ? "space" : k;
      if (normalized in keys.current) keys.current[normalized] = true;
    };

    const up = (ev) => {
      const k = ev.key.toLowerCase();
      const normalized = k === " " ? "space" : k;
      if (normalized in keys.current) keys.current[normalized] = false;
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return keys;
}
