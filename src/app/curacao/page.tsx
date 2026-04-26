import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/sections/Footer";
import { CuracaoPage } from "./CuracaoPage";

export const metadata: Metadata = {
  title: "Curaçao tips",
  description:
    "Onze favoriete plekken op Curaçao: stranden, duikspots, restaurants, Willemstad-routes en praktische tips, geschreven door de familie achter Villa Sandemarie.",
  alternates: { canonical: "/curacao" },
};

export default function Page() {
  return (
    <>
      <Header variant="solid" />
      <main className="bg-paper text-primary">
        <CuracaoPage />
      </main>
      <Footer />
    </>
  );
}
