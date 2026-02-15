/*
  FILE: src/app/page.js

  PURPOSE:
  This is the main homepage of the website.
  It is NOT part of the game engine.

  RESPONSIBILITIES:
  - Display all available eras (7 eras total).
  - Show title, introduction, and branding.
  - Allow the user to click/select an era.
  - Navigate to `/era/[eraId]` when an era is selected.

  NOTES:
  - This is regular Next.js UI.
  - No PixiJS or canvas rendering here.
  - Styling handled with Tailwind (or CSS).
  - Era list should come from shared data (e.g., src/game/data/eras.js).

  FLOW:
  User clicks era → router.push("/era/[eraId]") → game launches.
*/
// src/app/page.js
import Link from "next/link";
import { ERAS } from "@/game/data/eras";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#05070b] px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-wide">
          Canadian Archive
        </h1>
        <p className="mt-2 max-w-2xl text-white/70">
          Explore Canadian history by era. Pick an era to enter the interactive
          experience.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ERAS.map((era) => (
            <Link
              key={era.id}
              href={`/era/${era.id}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur
                         transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="text-xs text-white/60">{era.years}</div>
              <div className="mt-1 text-lg font-semibold">{era.title}</div>
              <div className="mt-3 text-sm text-white/70 group-hover:text-white/85">
                Enter era →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
