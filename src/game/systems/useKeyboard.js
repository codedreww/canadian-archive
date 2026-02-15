/*
  FILE: src/game/systems/useKeyboard.js

  PURPOSE:
  Centralized keyboard input handler for the game.

  RESPONSIBILITIES:
  - Track WASD keys.
  - Track arrow keys.
  - Track interaction key (E).
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
    e: false,
  });

  useEffect(() => {
    const down = (ev) => {
      const k = ev.key.toLowerCase();
      if (k in keys.current) keys.current[k] = true;
    };

    const up = (ev) => {
      const k = ev.key.toLowerCase();
      if (k in keys.current) keys.current[k] = false;
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
