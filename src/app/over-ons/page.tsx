import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/sections/Footer";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Maak kennis met de familie achter Villa Sandemarie. Een echt familiebedrijf, met Lisa-Marie ter plekke op Curaçao en de rest van ons betrokken vanuit Nederland.",
  alternates: { canonical: "/over-ons" },
};

export default function Page() {
  return (
    <>
      <Header variant="solid" />
      <main className="bg-paper text-primary">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
