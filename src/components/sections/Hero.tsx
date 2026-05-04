"use client";

import * as React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { villa } from "@/lib/villa";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Hero() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { t } = useLocale();

  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Critical for Safari
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    const attemptPlay = () => {
      if (!v.paused) return;
      v.play().catch(() => {
        // Silently fail if blocked by OS (e.g. Low Power Mode)
      });
    };

    // Initial attempt
    attemptPlay();

    // Triggers that don't feel like "manual interaction" but count as user gestures
    const triggers = ["touchstart", "mousedown", "scroll", "keydown"];
    const handleTrigger = () => {
      attemptPlay();
      triggers.forEach((t) => window.removeEventListener(t, handleTrigger));
    };

    triggers.forEach((t) =>
      window.addEventListener(t, handleTrigger, { passive: true })
    );

    // Visibility change (switching tabs/apps)
    const onVisibility = () => {
      if (!document.hidden) attemptPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      triggers.forEach((t) => window.removeEventListener(t, handleTrigger));
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  const stats = [
    { n: String(villa.facts.maxGuests), l: t.intro.statsGuests },
    { n: String(villa.facts.bedrooms), l: t.intro.statsBedrooms },
    { n: String(villa.facts.bathrooms), l: t.intro.statsBathrooms },
  ];

  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-black text-white"
    >
      <video
        ref={videoRef}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        onPlaying={() => setIsPlaying(true)}
        onTimeUpdate={(e) => {
          if (e.currentTarget.currentTime > 0) setIsPlaying(true);
        }}
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      >
        <source src="/media/home/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 lg:from-black/10 lg:via-black/25 lg:to-black/55"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 lg:opacity-60"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 60%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)",
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
              {t.hero.locationCountry} · {site.address.street},{" "}
              {site.address.neighborhood} · {t.hero.locationWater}
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
        <p className="sr-only">{villa.highlights.join(", ")}</p>
      </div>
    </section>
  );
}
