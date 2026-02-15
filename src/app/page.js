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

  return (
    <Link
      href={`/era/${era.id}`}
      className="group block overflow-hidden border-[4px] border-[#dc3b32] transition duration-150"
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
    <div className={`${pixel.className} relative min-h-screen bg-[#ececec] text-[#171717]`}>
      <div
        className="home-bg-scroll pointer-events-none fixed inset-0"
        style={{
          backgroundImage: "url('/home/homepage_bg.png')",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          backgroundPosition: "0% 50%",
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
