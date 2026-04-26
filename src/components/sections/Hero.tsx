"use client";

import * as React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { villa } from "@/lib/villa";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { t } = useLocale();

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("webkit-playsinline", "true");
    v.setAttribute("playsinline", "true");

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {});
      }
    };

    tryPlay();
    v.addEventListener("loadedmetadata", tryPlay);
    v.addEventListener("canplay", tryPlay);

    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onFirstTouch = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstTouch);
      window.removeEventListener("click", onFirstTouch);
    };
    window.addEventListener("touchstart", onFirstTouch, { passive: true });
    window.addEventListener("click", onFirstTouch);

    return () => {
      v.removeEventListener("loadedmetadata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", onFirstTouch);
      window.removeEventListener("click", onFirstTouch);
    };
  }, []);

  const stats = [
    { n: "11", l: t.intro.statsGuests },
    { n: "5", l: t.intro.statsBedrooms },
    { n: "3", l: t.intro.statsBathrooms },
  ];

  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0d1410] text-white"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        {...({
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
        } as Record<string, string>)}
        preload="auto"
        poster="/media/villa/villa-drone-1.webp"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
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
          paddingTop: "calc(6.5rem + env(safe-area-inset-top, 0px))",
          paddingBottom: "calc(2.5rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <div className="fade-up max-w-3xl">
          <p className="eyebrow flex items-center gap-2 text-white/85">
            <MapPin size={14} className="shrink-0 text-[#fee7a9]" />
            <span>
              {site.address.country} · {site.address.street},{" "}
              {site.address.neighborhood} · Spaanse Water
            </span>
          </p>
          <h1 className="font-display mt-5 text-[1.8rem] font-medium leading-[1.08] tracking-tight text-white [text-wrap:balance] sm:text-5xl md:text-6xl lg:text-[4.8rem]">
            {t.hero.titlePre}{" "}
            <span style={{ color: "#fee7a9" }}>{t.hero.titleHighlight}</span>
            {t.hero.titlePost ? <>{t.hero.titlePost}</> : null}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/82 sm:mt-6 sm:text-lg sm:leading-9">
            {t.hero.lead}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <LinkButton href="/#beschikbaarheid" variant="highlight" size="lg">
              {t.cta.seeAvailability} <ArrowRight size={18} />
            </LinkButton>
            <LinkButton href="/#villa" variant="onDark" size="lg">
              {t.cta.exploreVilla}
            </LinkButton>
          </div>
        </div>

        <div className="mt-auto flex flex-col items-start justify-between gap-6 pt-10 sm:flex-row sm:items-end sm:pt-14">
          <div className="grid w-full grid-cols-3 gap-x-4 gap-y-3 sm:max-w-md sm:gap-x-6">
            {stats.map((item) => (
              <div key={item.l} className="border-l border-white/30 pl-3 sm:pl-4">
                <p className="font-display text-2xl text-white sm:text-3xl">
                  {item.n}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/65 sm:text-xs">
                  {item.l}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* villa.highlights kept for SEO crawlers */}
        <p className="sr-only">{villa.highlights.join(", ")}</p>
      </div>
    </section>
  );
}
