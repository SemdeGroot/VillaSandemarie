"use client";

import Image from "next/image";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villaGallery, type GalleryImage } from "@/lib/gallery";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function Gallery() {
  const { t } = useLocale();
  const items = villaGallery;
  const featured = items[0];
  const secondary = items[1];
  const thumbs = items.slice(2, 10);

  return (
    <Section className="bg-background py-16 sm:py-24 lg:py-28">
      <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-xl">
          <Eyebrow>{t.gallery.eyebrow}</Eyebrow>
          <Display as="h2" className="mt-4">
            {t.gallery.title}
          </Display>
        </div>
        <p className="max-w-md text-[15px] leading-7 text-primary/72">
          {t.gallery.body}
        </p>
      </Reveal>

      <div className="mt-8 grid grid-cols-12 gap-3 sm:gap-4">
        {featured && (
          <Reveal
            as="figure"
            delay={0}
            className="relative col-span-12 aspect-[16/10] overflow-hidden rounded-3xl shadow-soft md:col-span-7 md:aspect-[5/4]"
          >
            <FigureImage img={featured} sizes="(max-width: 768px) 100vw, 55vw" />
          </Reveal>
        )}
        {secondary && (
          <Reveal
            as="figure"
            delay={90}
            className="relative col-span-12 aspect-[5/4] overflow-hidden rounded-3xl shadow-soft md:col-span-5 md:aspect-[5/4]"
          >
            <FigureImage img={secondary} sizes="(max-width: 768px) 100vw, 40vw" />
          </Reveal>
        )}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {thumbs.map((img, i) => (
          <Reveal
            as="figure"
            key={img.src}
            delay={120 + i * 70}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft"
          >
            <FigureImage img={img} sizes="(max-width: 768px) 50vw, 22vw" small />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FigureImage({
  img,
  sizes,
  small,
}: {
  img: GalleryImage;
  sizes: string;
  small?: boolean;
}) {
  return (
    <>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        className="object-cover transition duration-700 hover:scale-[1.04]"
      />
      {img.tag && (
        <figcaption
          className={
            small
              ? "absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-paper/85 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary"
              : "absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary"
          }
        >
          {img.tag}
        </figcaption>
      )}
    </>
  );
}
