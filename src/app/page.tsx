import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Amenities } from "@/components/sections/Amenities";
import { Rooms } from "@/components/sections/Rooms";
import { Outdoor } from "@/components/sections/Outdoor";
import { Gallery } from "@/components/sections/Gallery";
import { Audiences } from "@/components/sections/Audiences";
import { About } from "@/components/sections/About";
import { Curacao } from "@/components/sections/Curacao";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/site/Header";
import { LodgingJsonLd, FaqJsonLd } from "@/components/site/JsonLd";

export default function Home() {
  return (
    <>
      <LodgingJsonLd />
      <FaqJsonLd />
      <Header />
      <main className="bg-background text-primary">
        <Hero />
        <Intro />
        <Amenities />
        <Rooms />
        <Outdoor />
        <Gallery />
        <Audiences />
        <About />
        <Curacao />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
