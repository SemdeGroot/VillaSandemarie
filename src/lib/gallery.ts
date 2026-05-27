export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
  wide?: boolean;
};

export const heroPoster = "/media/villa/villa-drone-1.webp";

export const villaGallery: GalleryImage[] = [
  {
    src: "/media/villa/villa-drone-1.webp",
    alt: "Luchtfoto van Villa Sandemarie met privézwembad en zicht op Spaanse Water",
    caption: "Cas Grandi · Spaanse Water",
    tag: "Drone",
  },
  {
    src: "/media/villa/zwembad-5.webp",
    alt: "Zwembad in de avond met sfeerverlichting",
    tag: "Zwembad",
  },
  {
    src: "/media/villa/balkon-3.webp",
    alt: "Balkon van de villa met uitzicht over het Spaanse Water",
    tag: "Balkon",
  },
  {
    src: "/media/villa/woonkamer-1.webp",
    alt: "Woonkamer met comfortabele bank en smart tv",
    tag: "Woonkamer",
  },
  {
    src: "/media/villa/keuken-1.webp",
    alt: "Volledig uitgeruste keuken met kookeiland",
    tag: "Keuken",
  },
  {
    src: "/media/villa/badkamer-1.webp",
    alt: "Badkamer met inloopdouche en twee wastafels",
    tag: "Badkamer",
  },
  {
    src: "/media/villa/bbq.webp",
    alt: "BBQ plek voor avonden thuis",
    tag: "BBQ",
    wide: true,
  },
  {
    src: "/media/villa/master-bedroom-l1.webp",
    alt: "Slaapkamer met twee 1 persoonsbedden en airco",
    tag: "Slaapkamer",
  },
  {
    src: "/media/villa/master-bedroom-r1.webp",
    alt: "Tweede slaapkamer met houten plafond en airco",
    tag: "Slaapkamer",
  },
];

export const allVillaImages: GalleryImage[] = [
  // Exterior & Drone
  { src: "/media/villa/villa-drone-1.webp", alt: "Luchtfoto van Villa Sandemarie", tag: "Drone" },
  { src: "/media/villa/villa-drone-2.webp", alt: "Villa Sandemarie vanuit de lucht", tag: "Drone" },
  { src: "/media/villa/villa-drone-3.webp", alt: "Overzicht van de villa", tag: "Drone" },
  { src: "/media/villa/villa-drone-4.webp", alt: "Villa Sandemarie met Spaanse Water", tag: "Drone" },

  // Pool
  { src: "/media/villa/zwembad-1.webp", alt: "Privézwembad overdag", tag: "Zwembad" },
  { src: "/media/villa/zwembad-2.webp", alt: "Loungegedeelte bij het zwembad", tag: "Zwembad" },
  { src: "/media/villa/zwembad-4.webp", alt: "Overzicht van het zwembad", tag: "Zwembad" },
  { src: "/media/villa/zwembad-5.webp", alt: "Zwembad met avondverlichting", tag: "Zwembad" },

  // Balcony & View
  { src: "/media/villa/balkon-1.webp", alt: "Groot balkon met eethoek", tag: "Balkon" },
  { src: "/media/villa/balkon-2.webp", alt: "Balkon met loungestoelen", tag: "Balkon" },
  { src: "/media/villa/balkon-3.webp", alt: "Uitzicht over het Spaanse Water", tag: "Balkon" },
  { src: "/media/villa/balkon-4.webp", alt: "Detail van het balkon", tag: "Balkon" },
  { src: "/media/villa/balkon-5.webp", alt: "Gezellig hoekje op het balkon", tag: "Balkon" },

  // Interior
  { src: "/media/villa/woonkamer-1.webp", alt: "Woonkamer met zithoek", tag: "Woonkamer" },
  { src: "/media/villa/woonkamer-2.webp", alt: "Overzicht van de woonkamer", tag: "Woonkamer" },
  { src: "/media/villa/keuken-1.webp", alt: "Keuken met kookeiland", tag: "Keuken" },
  { src: "/media/villa/keuken-2.webp", alt: "Keuken met inbouwapparatuur", tag: "Keuken" },

  // Bedrooms & Bathrooms
  { src: "/media/villa/master-bedroom-l1.webp", alt: "Slaapkamer 1 met twee bedden", tag: "Slaapkamer" },
  { src: "/media/villa/master-bedroom-l2.webp", alt: "Detail van slaapkamer 1", tag: "Slaapkamer" },
  { src: "/media/villa/master-bedroom-r1.webp", alt: "Slaapkamer 2 met houten plafond", tag: "Slaapkamer" },
  { src: "/media/villa/master-bedroom-r2.webp", alt: "Overzicht van slaapkamer 2", tag: "Slaapkamer" },
  { src: "/media/villa/master-bedroom-r3.webp", alt: "Slaapkamer 3", tag: "Slaapkamer" },
  { src: "/media/villa/master-bedroom-r4.webp", alt: "Slaapkamer 3", tag: "Slaapkamer" },
  { src: "/media/villa/master-en-badkamer.webp", alt: "Slaapkamer met badkamer en suite", tag: "Slaapkamer" },
  { src: "/media/villa/badkamer-1.webp", alt: "Badkamer met inloopdouche", tag: "Badkamer" },

  // Garden & BBQ
  { src: "/media/villa/bbq.webp", alt: "BBQ en buitenkeuken", tag: "BBQ" },
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
