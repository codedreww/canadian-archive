import Link from "next/link";
import { Press_Start_2P } from "next/font/google";
import { ERAS } from "@/game/data/eras";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

const HOME_DATA = {
  era1: {
    title: "Indigenous Foundations",
    dates: "Pre-1500s",
    image: "/home/cards/era1.svg",
  },
  era2: {
    title: "Contact & Colonization",
    dates: "1500s-1763",
    image: "/home/cards/era2.svg",
  },
  era3: {
    title: "British North America",
    dates: "1763-1867",
    image: "/home/cards/era3.svg",
  },
  era4: {
    title: "Confederation & Nation-Building",
    dates: "1867-1914",
    image: "/home/cards/era4.svg",
  },
  era5: {
    title: "The World Wars Era",
    dates: "1914-1945",
    image: "/home/cards/era5.svg",
  },
  era6: {
    title: "Modern Canada & Reconciliation",
    dates: "1945-Present",
    image: "/home/cards/era6.svg",
  },
};

function MapleLeaf({ className = "h-7 w-7 text-[#dc3b32]" }) {
  return (
    <svg viewBox="0 0 512 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M256 8l-36 118-103-52 24 118-117 29 86 88-67 95 116-20 6 120h91l6-120 116 20-67-95 86-88-117-29 24-118-103 52z" />
    </svg>
  );
}

function EraCard({ era }) {
  const home = HOME_DATA[era.id] ?? {
    title: era.title,
    dates: era.years,
    image: "/home/cards/era1.svg",
  };

  return (
    <Link
      href={`/era/${era.id}`}
      className="group block overflow-hidden border-[6px] border-[#6e3d2e] bg-[#f4ead8] shadow-[0_0_0_4px_#aa4434] transition duration-150 hover:scale-[1.02] hover:shadow-[0_0_0_4px_#e25c48,0_0_18px_2px_rgba(226,92,72,0.55)]"
    >
      <div className="h-[15.5rem] border-b-[6px] border-[#6e3d2e] bg-[#b9c9d4]">
        <img src={home.image} alt={home.title} className="h-full w-full object-cover [image-rendering:pixelated]" />
      </div>
      <div className="bg-[#f6eee1] px-4 py-4">
        <h2 className={`${pixel.className} text-sm leading-relaxed text-[#16213b]`}>{home.title}</h2>
        <p className={`${pixel.className} mt-2 text-xs text-[#3b4d66]`}>{home.dates}</p>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className={`${pixel.className} relative min-h-screen overflow-hidden bg-[#f7e7cf] text-[#12203d]`}>
      <div
        className="home-bg-scroll pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: "url('/home/bg-landscape.svg')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "1600px auto",
          backgroundPosition: "center bottom",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(247,231,207,0.65)_0%,rgba(247,231,207,0.3)_40%,rgba(247,231,207,0.8)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-6 pt-8 md:px-8">
        <header className="py-7 text-center">
          <h1 className="mx-auto inline-flex items-center gap-3 border-[6px] border-[#6e3d2e] bg-[#f7efe2] px-4 py-3 text-xl text-[#101c3a] shadow-[0_0_0_4px_#aa4434] md:text-3xl">
            <MapleLeaf />
            Canadian Archive
            <MapleLeaf />
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-[10px] leading-loose text-[#33445d] md:text-xs">
            A cozy pixel journey through our nation's history. Select an era to begin.
          </p>
        </header>

        <main className="flex-1">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ERAS.map((era) => (
              <EraCard key={era.id} era={era} />
            ))}
          </div>
        </main>

        <footer className="mt-7 border-[6px] border-[#6e3d2e] bg-[#f7efe2] px-4 py-3 text-[10px] text-[#33445d] shadow-[0_0_0_4px_#aa4434] md:text-xs">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <span>(c) 2026 Canadian Archive</span>
            <Link href="/team" className="text-[#bf3a32] hover:underline">
              Developers: Andrew, Sagesse, Namy, Chris, Cellou
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
