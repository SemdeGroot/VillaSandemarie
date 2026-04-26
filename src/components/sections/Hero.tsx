import { ArrowRight, MapPin } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { villa } from "@/lib/villa";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0d1410] text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/villa/villa-drone-1.webp"
        aria-hidden="true"
      >
        <source src="/media/home/villa-sandemarie-hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/85"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 60%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 60%)",
        }}
        aria-hidden="true"
      />

      <div
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 sm:px-8 lg:px-12"
        style={{
          paddingTop: "calc(7.5rem + env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(3rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <div className="fade-up max-w-3xl">
          <p className="eyebrow flex items-center gap-2 text-white/85">
            <MapPin size={14} className="text-[#fee7a9]" /> Curaçao · Cas Grandi
            · Spaanse Water
          </p>
          <h1 className="font-display mt-6 text-[2.05rem] font-light leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[5.2rem]">
            Bon Bini na{" "}
            <span style={{ color: "#fee7a9" }}>Villa Sandemarie</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/82 sm:mt-6 sm:text-lg sm:leading-9">
            Jullie eilandhuis op Curaçao. Een ruime, gezellige vakantievilla
            voor families en vriendengroepen tot 11 personen, met privézwembad
            en uitzicht over het Spaanse Water.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <LinkButton href="#beschikbaarheid" variant="highlight" size="lg">
              Bekijk de beschikbaarheid <ArrowRight size={18} />
            </LinkButton>
            <LinkButton href="#villa" variant="onDark" size="lg">
              Verken de villa
            </LinkButton>
          </div>
        </div>

        <div className="mt-auto flex flex-col items-start justify-between gap-8 pt-12 sm:flex-row sm:items-end sm:pt-16">
          <div className="grid w-full grid-cols-3 gap-x-4 gap-y-3 sm:max-w-md sm:gap-x-6">
            {villa.highlights.slice(0, 3).map((item) => (
              <div key={item} className="border-l border-white/30 pl-3 sm:pl-4">
                <p className="font-display text-2xl text-white sm:text-3xl">
                  {item.split(" ")[0]}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/65 sm:text-xs">
                  {item.split(" ").slice(1).join(" ") || " "}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
