import Link from "next/link";
import { Geist_Mono } from "next/font/google";
import { ERAS } from "@/game/data/eras";

const pixel = Geist_Mono({
  weight: "400",
  subsets: ["latin"],
});

const HOME_DATA = {
  era1: {
    title: "Indigenous Foundations",
    dates: "Pre-1500s",
    image: "/home/cards/era1.png",
  },
  era2: {
    title: "Contact & Colonization",
    dates: "1500s-1763",
    image: "/home/cards/era2.png",
  },
  era3: {
    title: "British North America",
    dates: "1763-1867",
    image: "/home/cards/era3.png",
  },
  era4: {
    title: "Confederation & Nation-Building",
    dates: "1867-1914",
    image: "/home/cards/era4.png",
  },
  era5: {
    title: "The World Wars Era",
    dates: "1914-1945",
    image: "/home/cards/era5.png",
  },
  era6: {
    title: "Modern Canada & Reconciliation",
    dates: "1945-Present",
    image: "/home/cards/era6.png",
  },
};

const ERA_ACCENTS = {
  era1: "#2b8a6e",
  era2: "#33658a",
  era3: "#5d4e89",
  era4: "#9b6b2f",
  era5: "#9b2f2f",
  era6: "#2f6f9b",
};

function MapleLeaf({ className = "h-7 w-7" }) {
  return (
    <img
      src="/home/maple-leaf.png"
      alt="Maple leaf"
      className={`${className} [image-rendering:pixelated]`}
      draggable={false}
    />
  );
}

function EraCard({ era }) {
  const home = HOME_DATA[era.id] ?? {
    title: era.title,
    dates: era.years,
    image: "/home/cards/era1.png",
  };
  const accent = ERA_ACCENTS[era.id] ?? "#364152";

  return (
    <Link
      href={`/era/${era.id}`}
      className="group retro-panel retro-copy block overflow-hidden transition duration-150"
      style={{ borderColor: accent }}
    >
      <p className="px-4 py-2 text-left text-base font-bold leading-relaxed text-[#1c1f26]">{home.dates}</p>
      <div className="retro-frame border-0 border-b-4 p-0" style={{ borderBottomColor: accent }}>
        <img
          src={home.image}
          alt={home.title}
          className="retro-pixel-image h-[15.5rem] w-full object-cover"
        />
      </div>
      <div className="relative overflow-hidden px-4 py-4">
        <div className="retro-scanlines pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative">
          
          <h2 className="text-lg font-bold leading-relaxed text-[#1c1f26]">{home.title}</h2>
          {/* <p className="retro-meta mt-2 text-xs font-semibold">Enter Era</p> */}
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className={`${pixel.className} relative min-h-screen bg-[#ececec] text-[#171717]`}>
      <div
        className="home-bg-scroll pointer-events-none fixed inset-0"
        style={{
          backgroundImage: "url('/home/homepage_bg.png')",
          
        }}
      />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(236,236,236,0.55)_0%,rgba(236,236,236,0.25)_45%,rgba(236,236,236,0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-6 pt-8 md:px-8">
        <header className="py-7 text-center">
          <h1 className="mx-auto inline-flex items-center gap-3 border-[4px] border-[#dc3b32] bg-[#ececec]/90 px-4 py-3 text-2xl font-semibold tracking-wide text-[#171717] md:text-4xl">
            <MapleLeaf />
            Canadian Archive
            <MapleLeaf />
          </h1>
          <p className="mx-auto mt-5 inline-block max-w-4xl border-[2px] border-[#dc3b32] bg-[#ececec]/90 px-4 py-2 text-sm font-semibold leading-relaxed text-[#1c1f26] md:text-base">
            Step through Canada's defining eras and uncover the stories that shaped a nation
          </p>
        </header>

        <main className="flex-1">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ERAS.map((era) => (
              <EraCard key={era.id} era={era} />
            ))}
          </div>
        </main>

        <footer className="mt-7 border-[4px] border-[#dc3b32] bg-[#ececec]/90 px-4 py-3 text-[12px] text-[#364152] md:text-sm">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <span>(c) 2026 Canadian Archive</span>
            <Link href="/team" className="text-[#dc3b32]">
              Developers: Andrew, Sagesse, Namy, Chris, Cellou
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
