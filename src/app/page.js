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
    image: "/home/cards/era1.png",
  };

  return (
    <Link
      href={`/era/${era.id}`}
      className="group block overflow-hidden border-[4px] border-[#dc3b32] transition duration-150 hover:bg-[#f5cc4b] hover:border-[#f5cc4b]"
    >
      <div className="h-[15.5rem] bg-[#b9c9d4]">
        <img src={home.image} alt={home.title} className="h-full w-full object-cover [image-rendering:pixelated]" />
      </div>
      <div className="bg-[#ececec] px-4 py-4">
        <h2 className={`${pixel.className} text-sm leading-relaxed text-[#1c1f26]`}>{home.title}</h2>
        <p className={`${pixel.className} mt-2 text-xs text-[#364152]`}>{home.dates}</p>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className={`${pixel.className} relative min-h-screen overflow-hidden bg-[#ececec] text-[#171717]`}>
      <div
        className="home-bg-scroll pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url('/home/homepage_bg.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "1600px auto",
          backgroundPosition: "center bottom",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(236,236,236,0.7)_0%,rgba(236,236,236,0.4)_40%,rgba(236,236,236,0.85)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-6 pt-8 md:px-8">
        <header className="py-7 text-center">
          <h1 className="mx-auto inline-flex items-center gap-3 border-[4px] border-[#dc3b32] bg-[#ececec] px-4 py-3 text-xl text-[#171717] hover:bg-[#f5cc4b] transition duration-150 md:text-3xl">
            <MapleLeaf />
            Canadian Archive
            <MapleLeaf />
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-[12px] leading-loose text-[#364152] md:text-sm">
            Step through Canada's defining eras and uncover the stories that shaped a nation.
          </p>
        </header>

        <main className="flex-1">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ERAS.map((era) => (
              <EraCard key={era.id} era={era} />
            ))}
          </div>
        </main>

        <footer className="mt-7 border-[4px] border-[#dc3b32] bg-[#ececec] px-4 py-3 text-[12px] text-[#364152] hover:bg-[#f5cc4b] transition duration-150 md:text-sm">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <span>(c) 2026 Canadian Archive</span>
            <Link href="/team" className="text-[#dc3b32] hover:text-[#f5cc4b] transition">
              Developers: Andrew, Sagesse, Namy, Chris, Cellou
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
