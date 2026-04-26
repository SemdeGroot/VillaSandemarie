export const villa = {
  facts: {
    maxGuests: 11,
    bedrooms: 5,
    bathrooms: 2,
    extraToilet: true,
    privatePool: true,
    view: "Spaanse Water & Tafelberg",
  },
  highlights: [
    "Tot 11 gasten",
    "5 slaapkamers",
    "2 badkamers + extra toilet",
    "Privézwembad",
    "180° uitzicht over het Spaanse Water",
    "Cas Grandi, vlak bij Jan Thiel",
  ],
  amenities: [
    { icon: "Users", label: "Tot 11 personen" },
    { icon: "BedDouble", label: "5 slaapkamers" },
    { icon: "Bath", label: "2 badkamers + extra toilet" },
    { icon: "Waves", label: "Privézwembad" },
    { icon: "Mountain", label: "180° uitzicht" },
    { icon: "Wind", label: "Balkon op de wind" },
    { icon: "MapPin", label: "Cas Grandi · Jan Thiel" },
    { icon: "Car", label: "Eigen parkeerplek" },
    { icon: "Wifi", label: "Snelle wifi" },
    { icon: "ChefHat", label: "Volledig uitgeruste keuken" },
    { icon: "Flame", label: "BBQ" },
    { icon: "Snowflake", label: "Airco in alle slaapkamers" },
    { icon: "WashingMachine", label: "Wasmachine" },
    { icon: "HeartHandshake", label: "Voor families & groepen" },
  ],
  rooms: [
    {
      title: "Slaapkamers",
      points: [
        "5 slaapkamers, samen plek voor maximaal 11 personen",
        "4 slaapkamers met twee losse 1-persoonsbedden, los of als 2-persoonsbed",
        "5e slaapkamer met stapelbed en extra 1-persoonsbed, ideaal voor kinderen",
        "Airco in elke slaapkamer",
      ],
    },
    {
      title: "Badkamers",
      points: [
        "2 badkamers, beide met douche, toilet en twee wastafels",
        "Extra apart toilet boven, handig voor grotere groepen",
      ],
    },
    {
      title: "Woonkamer",
      points: [
        "Gezellige woonkamer met comfortabele bank",
        "Smart-tv waarop je makkelijk je eigen series en films streamt",
      ],
    },
    {
      title: "Keuken",
      points: [
        "Volledig uitgeruste keuken voor de hele groep",
        "Koelkast met ijsblokjesmachine, vaatwasser, oven & magnetron",
        "Nespresso én filterkoffie, blender, tosti-apparaat, broodrooster",
      ],
    },
  ],
  outdoor: {
    intro:
      "Villa Sandemarie draait om buiten leven. Op het balkon zit je op de wind met uitzicht over het Spaanse Water en de Tafelberg. Bij het privézwembad kun je de hele dag zwemmen, lezen, borrelen en hangen, precies zoals een eilandvakantie hoort te voelen.",
    points: [
      "Privézwembad met ligbedden en zitjes",
      "180° uitzicht over Spaanse Water & Tafelberg",
      "Ruim balkon op de wind",
      "BBQ voor avonden thuis",
      "Buitenverlichting voor lange avonden",
    ],
  },
  audiences: [
    {
      title: "Families",
      text: "Meerdere slaapkamers, eigen zwembad en een huis dat voelt als gezamenlijke thuisbasis.",
    },
    {
      title: "Vriendengroepen",
      text: "Samen koken, borrelen en zwemmen zonder hotelgedoe of gedeelde ruimtes met vreemden.",
    },
    {
      title: "Duik- & snorkelgroepen",
      text: "Een fijne uitvalsbasis met ruimte voor spullen. 10% korting bij Scuba Do Curaçao voor gasten.",
    },
    {
      title: "Bijzondere momenten",
      text: "Jubileum, verjaardag of een rustige werkretraite met een klein team. Iedereen onder één dak, met het eiland naast de deur.",
    },
  ],
  pricing: {
    nightlyFrom: 275,
    extraGuest: 25,
    taxRate: 0.07,
    cleaningFee: 195,
    deposit: 500,
    baseGuests: 4,
    notes:
      "De €500 borg is een voorschot voor water en elektra en wordt aan het einde van het verblijf verrekend.",
    bullets: [
      "Vanaf €275 per nacht (4 personen)",
      "€25 per extra persoon",
      "7% belasting",
      "€195 schoonmaak",
      "€500 borg/voorschot voor water en elektra",
    ],
  },
} as const;

export type Villa = typeof villa;
