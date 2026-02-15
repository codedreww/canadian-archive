import { Geist_Mono } from "next/font/google";
import { ERAS } from "@/game/data/eras";
import HomeEraSelector from "@/ui/HomeEraSelector";

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

const DEVELOPERS = [
  { name: "Andrew", href: "https://www.linkedin.com/in/andrewtann/" },
  { name: "Sagesse", href: "https://www.linkedin.com/in/sagesseariyanto/" },
  { name: "Namys", href: "https://www.linkedin.com/in/namys-bukaraev/" },
  { name: "Chris", href: "https://www.linkedin.com/in/christopher-umukoro/" },
  {
    name: "Cellou",
    href: "https://linkedin.com/in/mamadou-cellou-diallo-990a85275",
  },
];

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

export default function HomePage() {
  return (
    <div className={`${pixel.className} relative min-h-screen bg-[#ececec] text-[#171717]`}>
      <div
        className="home-bg-scroll pointer-events-none fixed inset-0"
        style={{
          backgroundImage: "url('/home/homepage_bg1.png')",

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
            Step through Canada&apos;s defining eras and uncover the stories that
            shaped a nation
          </p>
        </header>

        <main className="flex-1">
          <HomeEraSelector
            eras={ERAS}
            homeData={HOME_DATA}
            eraAccents={ERA_ACCENTS}
          />
        </main>

        <footer className="mt-7 border-[4px] border-[#dc3b32] bg-[#ececec]/90 px-4 py-3 text-[12px] text-[#364152] md:text-sm">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
            <span>(c) 2026 Canadian Archive</span>
            <div className="flex flex-wrap items-center gap-1">
              <span>Developers:</span>
              {DEVELOPERS.map((developer, index) => (
                <span
                  key={developer.name}
                  className="inline-flex items-center gap-1"
                >
                  {index > 0 && <span>,</span>}
                  <a
                    href={developer.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block font-semibold text-[#7c3a00] bg-[#fff4df] px-2 py-0.5 rounded-full shadow-sm border border-[#f5cc4b] underline-offset-2 transition-all duration-150 hover:bg-[#ffe080] hover:text-[#b45309] focus-visible:underline"
                  >
                    {developer.name}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
