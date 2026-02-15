"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const AudioCtx = createContext(null);

export function AudioProvider({ children }) {
  const audioRef = useRef(null);

  // default ON (but won't play until user interacts once)
  const [enabled, setEnabled] = useState(true);

  // load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("musicEnabled");
    if (saved !== null) setEnabled(saved === "true");
  }, []);

  // persist preference
  useEffect(() => {
    localStorage.setItem("musicEnabled", String(enabled));
  }, [enabled]);

  // start music after first user interaction if enabled
  useEffect(() => {
    const start = async () => {
      if (!enabled) return;
      const a = audioRef.current;
      if (!a) return;
      try {
        a.volume = 0.25;
        await a.play();
      } catch (e) {
        console.log("Autoplay blocked:", e);
      }
    };

    window.addEventListener("pointerdown", start, { once: true });
    window.addEventListener("keydown", start, { once: true });

    return () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
    };
  }, [enabled]);

  const turnOn = async () => {
    const a = audioRef.current;
    setEnabled(true);
    if (!a) return;
    try {
      a.volume = 0.45;
      await a.play();
    } catch (e) {
      console.log("Play blocked until interaction:", e);
    }
  };

  const turnOff = () => {
    const a = audioRef.current;
    setEnabled(false);
    if (a) a.pause();
  };

  const toggle = () => (enabled ? turnOff() : turnOn());

  return (
    <AudioCtx.Provider value={{ enabled, toggle, turnOn, turnOff }}>
      <audio ref={audioRef} src="/audio/bgm.mp3" loop preload="auto" />
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  return useContext(AudioCtx);
}
