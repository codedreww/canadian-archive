/*
  FILE: src/game/GameRoot.js

  PURPOSE:
  Main runtime wrapper for the Pixi game inside an era page.
  Owns global game state: event modal selection + node focus overlay.
*/

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import EraScene from "./scenes/EraScene";
import HUD from "@/ui/HUD";
import NodeInfoCard from "@/ui/NodeInfoCard";
import OpenEventModal from "@/ui/OpenEventModal";
import { ERAS } from "@/game/data/eras";
import { EVENTS_BY_ERA } from "@/game/data/events";

export default function GameRoot({ era }) {
  const router = useRouter();
  const wrapperRef = useRef(null);

  // Responsive size state (null until client measures wrapper).
  const [size, setSize] = useState({ width: null, height: null });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const update = () => {
      const rect = wrapper.getBoundingClientRect();
      const nextWidth = Math.floor(rect.width);
      const nextHeight = Math.floor(rect.height);

      if (nextWidth <= 0 || nextHeight <= 0) return;

      setSize({
        width: nextWidth,
        height: nextHeight,
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(wrapper);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const [activeSelection, setActiveSelection] = useState(null);
  const [nodeFocus, setNodeFocus] = useState(null);
  const [visibleNodeFocus, setVisibleNodeFocus] = useState(null);
  const paused = Boolean(activeSelection);

  useEffect(() => {
    let timeoutId = null;
    const nextId = nodeFocus?.event?.id ?? null;
    const currentId = visibleNodeFocus?.event?.id ?? null;

    if (nodeFocus) {
      // Delay first reveal to avoid card flicker while crossing trigger edges.
      const delay = !visibleNodeFocus || nextId !== currentId ? 140 : 0;
      timeoutId = window.setTimeout(() => setVisibleNodeFocus(nodeFocus), delay);
    } else if (visibleNodeFocus) {
      // Keep card briefly when leaving node radius to avoid rapid hide/show jitter.
      timeoutId = window.setTimeout(() => setVisibleNodeFocus(null), 220);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [nodeFocus, visibleNodeFocus]);

  const displayedNodeFocus = paused ? null : visibleNodeFocus;
  const hasMeasuredSize =
    Number.isFinite(size.width) &&
    Number.isFinite(size.height) &&
    size.width > 0 &&
    size.height > 0;

  useEffect(() => {
    const onKeyDown = (keyboardEvent) => {
      if (keyboardEvent.key !== "Escape") return;
      // Keep Escape dedicated to closing event modal while one is open.
      if (activeSelection) return;
      keyboardEvent.preventDefault();
      router.push("/");
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSelection, router]);

  return (
    <div
      ref={wrapperRef}
      className="relative h-screen w-screen overflow-hidden"
      style={{
        backgroundImage: `url(${era?.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {hasMeasuredSize && (
        <EraScene
          width={size.width}
          height={size.height}
          eraId={era?.id}
          eras={ERAS}
          eventsByEra={EVENTS_BY_ERA}
          paused={paused}
          onNodeFocusChange={setNodeFocus}
          onOpenEvent={setActiveSelection}
        />
      )}

      <HUD era={era} />
      <NodeInfoCard focus={displayedNodeFocus} />
      <div className="pointer-events-none absolute right-4 top-4 z-40">
        <button
          type="button"
          className="retro-close-btn pointer-events-auto px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em]"
          onClick={() => router.push("/")}
        >
          Exit [Esc]
        </button>
      </div>

      <OpenEventModal
        era={activeSelection?.era ?? era}
        event={activeSelection?.event ?? null}
        onClose={() => setActiveSelection(null)}
      />
    </div>
  );
}
