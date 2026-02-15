"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function getGridColumns(viewportWidth) {
  if (viewportWidth >= 1024) return 3;
  if (viewportWidth >= 640) return 2;
  return 1;
}

function isTypingElement(element) {
  if (!(element instanceof Element)) return false;
  const tagName = element.tagName.toLowerCase();
  if (tagName === "input" || tagName === "textarea" || tagName === "select") {
    return true;
  }
  return element.isContentEditable;
}

function EraCard({
  era,
  home,
  accent,
  isSelected,
  onPointerSelect,
  onCardFocus,
}) {
  return (
    <Link
      href={`/era/${era.id}`}
      className={`home-era-card retro-panel retro-copy block overflow-hidden transition duration-150 ${
        isSelected ? "home-era-selected" : ""
      }`}
      style={{
        borderColor: accent,
        "--home-era-accent": accent,
      }}
      onMouseEnter={onPointerSelect}
      onFocus={onCardFocus}
      aria-current={isSelected ? "true" : undefined}
    >
      <p className="px-4 py-2 text-left text-base font-bold leading-relaxed text-[#1c1f26]">
        {home.dates}
      </p>
      <div
        className="retro-frame border-0 border-b-4 p-0"
        style={{ borderBottomColor: accent }}
      >
        <img
          src={home.image}
          alt={home.title}
          className="retro-pixel-image h-[15.5rem] w-full object-cover"
        />
      </div>
      <div className="relative overflow-hidden px-4 py-4">
        <div className="retro-scanlines pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative">
          <h2 className="text-lg font-bold leading-relaxed text-[#1c1f26]">
            {home.title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default function HomeEraSelector({ eras, homeData, eraAccents }) {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [gridColumns, setGridColumns] = useState(1);
  const [interactionMode, setInteractionMode] = useState("keyboard");

  useEffect(() => {
    const updateColumns = () => {
      setGridColumns(getGridColumns(window.innerWidth));
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const onKeyDown = (keyboardEvent) => {
      if (
        keyboardEvent.metaKey ||
        keyboardEvent.ctrlKey ||
        keyboardEvent.altKey ||
        isTypingElement(keyboardEvent.target)
      ) {
        return;
      }

      const normalized = keyboardEvent.key.toLowerCase();
      const maxIndex = eras.length - 1;

      if (normalized === "enter" || normalized === " ") {
        const selectedEra = eras[selectedIndex];
        if (!selectedEra) return;
        setInteractionMode("keyboard");
        keyboardEvent.preventDefault();
        router.push(`/era/${selectedEra.id}`);
        return;
      }

      let nextIndex = selectedIndex;
      if (normalized === "a" || normalized === "arrowleft") {
        nextIndex = Math.max(0, selectedIndex - 1);
      } else if (normalized === "d" || normalized === "arrowright") {
        nextIndex = Math.min(maxIndex, selectedIndex + 1);
      } else if (normalized === "w" || normalized === "arrowup") {
        nextIndex = Math.max(0, selectedIndex - gridColumns);
      } else if (normalized === "s" || normalized === "arrowdown") {
        nextIndex = Math.min(maxIndex, selectedIndex + gridColumns);
      } else {
        return;
      }

      if (nextIndex !== selectedIndex) {
        setInteractionMode("keyboard");
        keyboardEvent.preventDefault();
        setSelectedIndex(nextIndex);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [eras, gridColumns, router, selectedIndex]);

  return (
    <div className="space-y-3">
      <p className="retro-copy mx-auto max-w-5xl border-2 border-[#1c1f26] bg-[#ececec]/88 px-3 py-2 text-[11px] uppercase tracking-[0.08em] text-[#364152] sm:text-xs">
        Keyboard: WASD or Arrow Keys to move selection, Enter/Space to open era
      </p>
      <div
        className={`mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
          interactionMode === "keyboard" ? "home-keyboard-mode" : ""
        }`}
      >
        {eras.map((era, index) => {
          const home = homeData[era.id] ?? {
            title: era.title,
            dates: era.years,
            image: "/home/cards/era1.png",
          };
          const accent = eraAccents[era.id] ?? "#364152";
          return (
            <EraCard
              key={era.id}
              era={era}
              home={home}
              accent={accent}
              isSelected={index === selectedIndex}
              onPointerSelect={() => {
                setInteractionMode("pointer");
                setSelectedIndex(index);
              }}
              onCardFocus={() => setSelectedIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
