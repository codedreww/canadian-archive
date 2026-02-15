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
    <main className="fixed inset-0 overflow-hidden bg-[#05070b] text-white">
      <GameRoot era={era} />
    </main>
  );
}
