export const site = {
  name: "Villa Sandemarie",
  tagline: "Een ruime familievilla op Curaçao, gemaakt voor samen zijn.",
  description:
    "Vakantievilla op Curaçao tot 11 personen, met privézwembad en uitzicht over het Spaanse Water. Rustig gelegen in Cas Grandi, vlak bij Jan Thiel.",
  url: "https://villasandemarie.com",
  locale: "nl-NL",
  address: {
    street: "Kaya Strauss 25",
    neighborhood: "Cas Grandi",
    region: "Jan Thiel",
    country: "Curaçao",
    full: "Kaya Strauss 25, Cas Grandi, Curaçao",
  },
  contact: {
    email: "villa.sandemarie@gmail.com",
    phone: "+5999 527 0268",
    phoneIntl: "+59995270268",
  },
  social: {
    instagram: "https://www.instagram.com/villasandemarie",
    facebook: "https://www.facebook.com/curacaovillasandemarie/",
    tiktok: "https://www.tiktok.com/@villasandemarie",
  },
  whatsapp: {
    nl: "https://api.whatsapp.com/send/?phone=59995270268&text=Hi+ik+ben+ge%C3%AFnteresseerd+in+het+huis.+Voor+%28dd-mm-jjjj%29+tot+%28dd-mm-jjjj%29%2C+voor+%28x+personen%29.&type=phone_number&app_absent=0",
    en: "https://api.whatsapp.com/send/?phone=59995270268&text=Hi%2C+I%E2%80%99m+interested+in+the+house.+From+%28dd-mm-yyyy%29+to+%28dd-mm-yyyy%29%2C+for+%28x+people%29.&type=phone_number&app_absent=0",
  },
  airbnbIcal:
    "https://www.airbnb.nl/calendar/ical/5579009.ics?t=1aaa301e9d6e4dbe912ab408263b6b27",
  partners: {
    scubaDo: {
      name: "Scuba Do Curaçao",
      url: "https://scubadocuracao.com/",
      perk: "10% korting op duiken voor gasten van Villa Sandemarie",
    },
  },
  nav: [
    { href: "/#villa", label: "De villa" },
    { href: "/#voorzieningen", label: "Voorzieningen" },
    { href: "/over-ons", label: "Over ons" },
    { href: "/curacao", label: "Curaçao" },
    { href: "/#beschikbaarheid", label: "Beschikbaarheid" },
  ],
} as const;

export type Site = typeof site;
