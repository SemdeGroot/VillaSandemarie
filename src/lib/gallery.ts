export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
  wide?: boolean;
};

export const heroPoster = "/media/villa/Villa drone 1.webp";

export const villaGallery: GalleryImage[] = [
  {
    src: "/media/villa/Villa drone 1.webp",
    alt: "Luchtfoto van Villa Sandemarie met privézwembad en zicht op Spaanse Water",
    caption: "Cas Grandi · Spaanse Water",
  },
  {
    src: "/media/villa/Zwembad 5.webp",
    alt: "Zwembad in de avond, sfeerverlichting",
  },
  {
    src: "/media/villa/Balkon3.webp",
    alt: "Balkon van de villa met uitzicht over het Spaanse Water",
    tag: "Balkon",
  },
  {
    src: "/media/villa/Woonkamer 1.webp",
    alt: "Woonkamer met comfortabele bank en smart-tv",
    tag: "Woonkamer",
  },
  {
    src: "/media/villa/Keuken1.webp",
    alt: "Volledig uitgeruste keuken met eiland",
    tag: "Keuken",
  },
  {
    src: "/media/villa/Badkamer 1.webp",
    alt: "Badkamer met inloopdouche en twee wastafels",
    tag: "Badkamer",
  },
  {
    src: "/media/villa/BBQ.webp",
    alt: "BBQ-plek voor avonden thuis",
    tag: "BBQ",
    wide: true,
  },
  {
    src: "/media/villa/Master bedroom L1.webp",
    alt: "Slaapkamer met twee 1-persoonsbedden en airco",
    tag: "Slaapkamer",
  },
  {
    src: "/media/villa/Master bedroom R1.webp",
    alt: "Tweede slaapkamer met houten plafond en airco",
    tag: "Slaapkamer",
  },
];

export const curacaoGallery: GalleryImage[] = [
  {
    src: "/media/curacao/curacao-beach.webp",
    alt: "Helder turquoise strand op Curaçao",
  },
  {
    src: "/media/curacao/curacao-coast-1.webp",
    alt: "Kustlijn van Curaçao met rotsen en zee",
  },
  {
    src: "/media/curacao/curacao-jan-thiel.webp",
    alt: "Strand bij Jan Thiel",
  },
  {
    src: "/media/curacao/curacao-water.webp",
    alt: "Caribisch water voor de kust van Curaçao",
  },
  {
    src: "/media/curacao/curacao-willemstad.webp",
    alt: "Gekleurde gevels in Willemstad",
  },
  {
    src: "/media/curacao/curacao-lighthouse.webp",
    alt: "Vuurtoren aan de kust van Curaçao",
  },
];
