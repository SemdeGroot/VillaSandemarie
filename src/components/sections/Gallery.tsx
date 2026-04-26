import Image from "next/image";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villaGallery } from "@/lib/gallery";

export function Gallery() {
  const items = villaGallery;
  const featured = items[0];
  const secondary = items[1];
  const thumbs = items.slice(2, 10);

  return (
    <Section className="bg-background py-20 sm:py-24 lg:py-28">
      <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-xl">
          <Eyebrow>Galerij</Eyebrow>
          <Display as="h2" className="mt-5">
            Beeld zegt meer dan een listing.
          </Display>
        </div>
        <p className="max-w-md text-[15px] leading-7 text-primary/72">
          Een doorsnee van de villa: drone, zwembad, slaapkamers en de plekken
          waar je vanzelf blijft hangen. Eigen foto&apos;s, geen stockbeeld.
        </p>
      </Reveal>

      <Reveal
        delay={120}
        className="mt-10 grid grid-cols-12 gap-3 sm:gap-4"
      >
        {featured && (
          <figure className="relative col-span-12 aspect-[16/10] overflow-hidden rounded-3xl shadow-soft md:col-span-7 md:aspect-[5/4]">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover"
            />
            {featured.tag && (
              <figcaption className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {featured.tag}
              </figcaption>
            )}
          </figure>
        )}
        {secondary && (
          <figure className="relative col-span-12 aspect-[5/4] overflow-hidden rounded-3xl shadow-soft md:col-span-5 md:aspect-[5/4]">
            <Image
              src={secondary.src}
              alt={secondary.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            {secondary.tag && (
              <figcaption className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {secondary.tag}
              </figcaption>
            )}
          </figure>
        )}
      </Reveal>

      <Reveal
        delay={180}
        className="mt-3 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
      >
        {thumbs.map((img) => (
          <figure
            key={img.src}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 22vw"
              className="object-cover transition duration-700 hover:scale-[1.04]"
            />
            {img.tag && (
              <figcaption className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-paper/85 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                {img.tag}
              </figcaption>
            )}
          </figure>
        ))}
      </Reveal>
    </Section>
  );
}
