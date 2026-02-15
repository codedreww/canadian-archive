import Link from "next/link";
import { ERAS } from "@/game/data/eras";
import GameRoot from "@/game/GameRoot";

export default async function EraPage({ params }) {
  const { eraId } = await params;
  const era = ERAS.find((e) => e.id === eraId);

  if (!era) {
    return (
      <main className="min-h-screen bg-[#05070b] p-10 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-white/70">Unknown era: {eraId}</p>
          <Link className="mt-4 inline-block text-white underline" href="/">
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#05070b] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs text-white/60">{era.years}</div>
            <h2 className="text-2xl font-semibold">{era.title}</h2>
          </div>
          <Link className="text-sm text-white/80 underline" href="/">
            ← Back to era selection
          </Link>
        </div>

        {/* Game Frame */}
        <GameRoot era={era} />
      </div>
    </main>
  );
}
