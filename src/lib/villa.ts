export const villa = {
  facts: {
    maxGuests: 11,
    bedrooms: 5,
    bathrooms: 3,
    privatePool: true,
    view: "Spaanse Water & Tafelberg",
  },
  highlights: [
    "Tot 11 gasten",
    "5 slaapkamers",
    "3 badkamers",
    "Privézwembad",
    "180° uitzicht over het Spaanse Water",
    "Cas Grandi, vlak bij Jan Thiel",
  ],
  amenities: [
    { icon: "Users", label: "Tot 11 personen" },
    { icon: "BedDouble", label: "5 slaapkamers" },
    { icon: "Bath", label: "3 badkamers" },
    { icon: "Waves", label: "Privézwembad" },
    { icon: "Mountain", label: "180° uitzicht" },
    { icon: "Wind", label: "Balkon op de wind" },
    { icon: "MapPin", label: "Cas Grandi, vlak bij Jan Thiel" },
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
        "4 slaapkamers met twee losse 1-persoonsbedden, los of tegen elkaar als 2-persoonsbed",
        "5e slaapkamer met stapelbed en extra 1-persoonsbed, leuk voor de kids",
        "Airco in elke slaapkamer",
      ],
    },
    {
      title: "Badkamers",
      points: [
        "3 badkamers in totaal: 2 met douche, toilet en twee wastafels",
        "Plus een apart toilet boven, fijn met een grote groep",
      ],
    },
    {
      title: "Woonkamer",
      points: [
        "Gezellige woonkamer met een lekkere bank waar iedereen op past",
        "Smart-tv om je eigen series en films te streamen",
      ],
    },
    {
      title: "Keuken",
      points: [
        "Volledig uitgeruste keuken voor de hele groep",
        "Koelkast met ijsblokjesmachine, vaatwasser, oven en magnetron",
        "Nespresso én filterkoffie, blender, tosti-apparaat, broodrooster",
      ],
    },
  ],
  outdoor: {
    intro:
      "Bij Villa Sandemarie speelt het meeste leven zich buiten af. Op het balkon zit je heerlijk op de wind, met uitzicht over het Spaanse Water en de Tafelberg. Beneden bij het zwembad zwem je, lees je, borrel je of doe je gewoon helemaal niets, precies wat een eilandvakantie hoort te zijn.",
    points: [
      "Privézwembad met ligbedden en zitjes",
      "180° uitzicht over Spaanse Water en Tafelberg",
      "Ruim balkon op de wind, fijn voor ontbijt of borrel",
      "BBQ voor avonden thuis",
      "Buitenverlichting voor lange avonden buiten",
    ],
  },
  audiences: [
    {
      title: "Families",
      text: "Genoeg slaapkamers, een eigen zwembad en een huis dat aanvoelt als gezamenlijke thuisbasis. Ook met opa en oma erbij blijft het ruim.",
    },
    {
      title: "Vriendengroepen",
      text: "Samen koken, borrelen en zwemmen, zonder hotelgedoe en zonder gedeelde ruimtes met onbekenden.",
    },
    {
      title: "Duik- en snorkelgroepen",
      text: "Goede uitvalsbasis met ruimte voor je spullen. Voor onze gasten regelen we 10% korting bij Scuba Do Curaçao.",
    },
    {
      title: "Iets te vieren",
      text: "Verjaardag, jubileum of een bijzondere trip met de hele familie. Iedereen onder één dak, zonder dat het hokkerig wordt.",
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
      "De €500 borg is een voorschot voor water en elektra en wordt aan het einde van het verblijf met je verrekend.",
    bullets: [
      "Vanaf €275 per nacht (4 personen)",
      "€25 per extra persoon per nacht",
      "7% belasting",
      "€195 schoonmaak",
      "€500 borg/voorschot voor water en elektra",
    ],
  },
} as const;

export type Villa = typeof villa;
