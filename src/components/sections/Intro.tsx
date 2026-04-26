import Image from "next/image";
import { Display, Eyebrow, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <Section id="villa" className="bg-paper py-20 sm:py-28 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-24">
        <Reveal className="max-w-xl">
          <Eyebrow>De Villa</Eyebrow>
          <Display as="h2" className="mt-5">
            Jullie eilandhuis op Curaçao,{" "}
            <span className="text-warm font-medium">ruimte voor iedereen</span>.
          </Display>
          <p className="mt-7 text-base leading-8 text-primary/78 sm:text-lg sm:leading-9">
            Villa Sandemarie is een ruime, vrijstaande vakantievilla in de
            wijk Cas Grandi, dichtbij Jan Thiel. Met 5 slaapkamers, 2 badkamers,
            een gezellig leefgedeelte en een balkon op de wind heb je alle
            ruimte om met z&apos;n allen te landen. Buiten liggen het
            privézwembad, de ligstoelen en het uitzicht over het Spaanse Water
            op je te wachten.
          </p>

          <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-line pt-7">
            <div>
              <dt className="eyebrow text-warm">Gasten</dt>
              <dd className="font-display mt-2 text-3xl text-primary">11</dd>
            </div>
            <div>
              <dt className="eyebrow text-warm">Slaapkamers</dt>
              <dd className="font-display mt-2 text-3xl text-primary">5</dd>
            </div>
            <div>
              <dt className="eyebrow text-warm">Badkamers</dt>
              <dd className="font-display mt-2 text-3xl text-primary">
                2<span className="text-base text-primary/60">+1</span>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-6 gap-3 sm:gap-4">
          <div className="relative col-span-6 aspect-[5/4] overflow-hidden rounded-2xl shadow-soft sm:col-span-4">
            <Image
              src="/media/villa/villa-drone-1.webp"
              alt="Luchtfoto van Villa Sandemarie met privézwembad"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-2xl shadow-soft sm:col-span-2 sm:translate-y-6">
            <Image
              src="/media/villa/balcony-view.webp"
              alt="Uitzicht vanaf het balkon over Spaanse Water"
              fill
              sizes="(max-width: 1024px) 50vw, 22vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-2xl shadow-soft sm:col-span-2 sm:-translate-y-2">
            <Image
              src="/media/villa/pool-loungers.webp"
              alt="Zwembad met ligbedden"
              fill
              sizes="(max-width: 1024px) 50vw, 22vw"
              className="object-cover"
            />
          </div>
          <div className="relative col-span-6 aspect-[5/3] overflow-hidden rounded-2xl shadow-soft sm:col-span-4">
            <Image
              src="/media/villa/living-room.webp"
              alt="Woonkamer van Villa Sandemarie met comfortabele bank"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
