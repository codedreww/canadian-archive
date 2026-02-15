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

function isTypingTarget(event) {
  const target = event?.target;
  if (!target || !(target instanceof Element)) return false;

  if (target.closest('[data-disable-game-keys="true"]')) return true;

  const tagName = target.tagName?.toLowerCase();
  if (tagName === "textarea" || tagName === "select") return true;
  if (tagName === "input") {
    const input = target;
    const type = (input.getAttribute("type") || "text").toLowerCase();
    return !["checkbox", "radio", "button", "submit", "reset", "range"].includes(
      type,
    );
  }

  return target.isContentEditable;
}

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
    const resetTrackedKeys = () => {
      for (const key of Object.keys(keys.current)) {
        keys.current[key] = false;
      }
    };

    const down = (ev) => {
      if (isTypingTarget(ev)) {
        resetTrackedKeys();
        return;
      }

      const k = ev.key.toLowerCase();
      const normalized = k === " " ? "space" : k;
      if (normalized in keys.current) keys.current[normalized] = true;
    };

    const up = (ev) => {
      if (isTypingTarget(ev)) return;

      const k = ev.key.toLowerCase();
      const normalized = k === " " ? "space" : k;
      if (normalized in keys.current) keys.current[normalized] = false;
    };

    const onFocusIn = (ev) => {
      if (isTypingTarget(ev)) resetTrackedKeys();
    };

    const onWindowBlur = () => resetTrackedKeys();

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    document.addEventListener("focusin", onFocusIn);
    window.addEventListener("blur", onWindowBlur);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      document.removeEventListener("focusin", onFocusIn);
      window.removeEventListener("blur", onWindowBlur);
    };
  }, []);

  return keys;
}
