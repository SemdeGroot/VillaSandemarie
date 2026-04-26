import Image from "next/image";
import { Check } from "lucide-react";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";
import { villa } from "@/lib/villa";

const roomMedia: Record<string, { src: string; alt: string }> = {
  Slaapkamers: {
    src: "/media/villa/bedroom-master-l.webp",
    alt: "Slaapkamer met twee bedden en airco",
  },
  Badkamers: {
    src: "/media/villa/bathroom.webp",
    alt: "Badkamer met inloopdouche",
  },
  Woonkamer: {
    src: "/media/villa/living-room-2.webp",
    alt: "Woonkamer met bank en smart-tv",
  },
  Keuken: {
    src: "/media/villa/kitchen-2.webp",
    alt: "Volledig uitgeruste keuken",
  },
};

export function Rooms() {
  return (
    <Section className="bg-paper py-20 sm:py-24 lg:py-28">
      <Reveal className="max-w-2xl">
        <Eyebrow>Indeling & kamers</Eyebrow>
        <Display as="h2" className="mt-5">
          Helder ingedeeld,{" "}
          <span className="italic text-warm">gemaakt om met velen te zijn</span>.
        </Display>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-12">
        {villa.rooms.map((room, i) => {
          const media = roomMedia[room.title];
          return (
            <Reveal
              as="article"
              delay={80 + i * 60}
              key={room.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-background shadow-soft sm:flex-row"
            >
              {media && (
                <div className="relative aspect-[5/4] w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-2/5">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-center space-y-3 px-6 py-6 sm:px-7 sm:py-8">
                <h3 className="font-display text-2xl text-primary sm:text-3xl">
                  {room.title}
                </h3>
                <ul className="space-y-2.5 text-[14.5px] leading-7 text-primary/78">
                  {room.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Check
                        size={15}
                        className="mt-1.5 shrink-0 text-warm"
                        strokeWidth={2}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
