import type { Locale } from "./locales";

export type Dict = {
  nav: {
    villa: string;
    amenities: string;
    about: string;
    curacao: string;
    gallery: string;
    booking: string;
  };
  cta: {
    book: string;
    bookRequest: string;
    seeAvailability: string;
    exploreVilla: string;
    readMore: string;
    moreAboutUs: string;
    seeCuracaoTips: string;
    planStay: string;
    sendInquiry: string;
    whatsapp: string;
    email: string;
  };
  hero: {
    eyebrow: string;
    locationCountry: string;
    locationWater: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    lead: string;
  };
  intro: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    body: string;
    statsGuests: string;
    statsBedrooms: string;
    statsBathrooms: string;
  };
  amenities: {
    eyebrow: string;
    title: string;
    body: string;
  };
  rooms: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
  };
  outdoor: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    body: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    body: string;
  };
  audiences: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    body: string;
    diveLine: (link: string) => string;
  };
  aboutTeaser: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    body: string;
  };
  curacaoTeaser: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    body: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    body: string;
    pricingHeading: string;
    formTitle: string;
    formSub: string;
    formCheckin: string;
    formCheckout: string;
    formCheckinHint: string;
    formCheckoutHint: string;
    formGuests: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formMessagePh: string;
    selectArrival: string;
    arrivalSelected: (d: string) => string;
    rangeSummary: (a: string, b: string, n: number) => string;
    legendAvailable: string;
    legendBooked: string;
    legendSelected: string;
    nightSingular: string;
    nightPlural: string;
    submitDisabled: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    errorTitle: string;
    errorBody: string;
  };
  footer: {
    explore: string;
    contact: string;
    whatsapp: string;
    chatNl: string;
    chatEn: string;
    intro: string;
    rights: string;
    gallery: string;
  };
  about: {
    pageTitle: string;
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
  };
  curacao: {
    pageTitle: string;
    metaTitle: string;
    metaDesc: string;
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    lead: string;
    storiesHeading: string;
    quickTipsHeading: string;
    insiderBy: (name: string) => string;
  };
  language: {
    label: string;
  };
  content: {
    amenities: Record<
      | "guests" | "bedrooms" | "bathrooms" | "pool" | "view" | "balcony"
      | "location" | "parking" | "wifi" | "kitchen" | "bbq" | "ac"
      | "laundry" | "groups",
      string
    >;
    rooms: Record<
      "bedrooms" | "bathrooms" | "living" | "kitchen",
      { title: string; points: string[] }
    >;
    outdoor: string[];
    audiences: Record<
      "families" | "friends" | "divers" | "celebration",
      { title: string; text: string }
    >;
    pricing: { bullets: string[]; notes: string };
    galleryTags: Record<string, string>;
    galleryCaptions: Record<string, string>;
  };
};

const nl: Dict = {
  nav: {
    villa: "De villa",
    amenities: "Voorzieningen",
    about: "Over ons",
    curacao: "Curaçao",
    gallery: "Foto's",
    booking: "Beschikbaarheid",
  },
  cta: {
    book: "Boekingsaanvraag",
    bookRequest: "Doe een aanvraag",
    seeAvailability: "Bekijk de beschikbaarheid",
    exploreVilla: "Verken de villa",
    readMore: "Lees meer",
    moreAboutUs: "Lees meer over ons",
    seeCuracaoTips: "Bekijk onze Curaçao-tips",
    planStay: "Plan jullie verblijf",
    sendInquiry: "Verstuur aanvraag",
    whatsapp: "WhatsApp",
    email: "E-mail",
  },
  hero: {
    eyebrow: "Curaçao · Cas Grandi · Spaanse Water",
    locationCountry: "Curaçao",
    locationWater: "Spaanse Water",
    titlePre: "Bon Bini na",
    titleHighlight: "Villa Sandemarie",
    titlePost: "",
    lead: "Jullie eilandhuis op Curaçao. Ruime, gezellige vakantievilla voor families en vriendengroepen tot 11 personen, met privézwembad en uitzicht over het Spaanse Water.",
  },
  intro: {
    eyebrow: "De villa",
    titlePre: "Jullie eilandhuis op Curaçao,",
    titleHighlight: "ruimte voor iedereen",
    body: "Villa Sandemarie is een ruime vakantievilla in Cas Grandi, vlakbij Jan Thiel. Met 5 slaapkamers, een gezellig leefgedeelte en een balkon op de wind heb je alle ruimte om met z'n allen te landen. Buiten wachten het privézwembad en het uitzicht over het Spaanse Water op je.",
    statsGuests: "Gasten",
    statsBedrooms: "Slaapkamers",
    statsBathrooms: "Badkamers",
  },
  amenities: {
    eyebrow: "Voorzieningen",
    title: "Alles wat je nodig hebt, niets wat je niet wilt",
    body: "We hebben de villa ingericht zoals we zelf graag op vakantie zijn: comfortabel, ontspannen en gewoon goed voor elkaar. Een fijne keuken, airco in elke slaapkamer, snelle wifi en een ligstoel waar je niet vanaf wilt komen.",
  },
  rooms: {
    eyebrow: "Indeling en kamers",
    titlePre: "Helder ingedeeld,",
    titleHighlight: "gemaakt om met velen te zijn",
  },
  outdoor: {
    eyebrow: "Buitenleven in de tropen",
    titlePre: "Het",
    titleHighlight: "balkon op de wind",
    titlePost: ", het zwembad, de zonsondergang",
    body: "Bij Villa Sandemarie speelt het meeste leven zich buiten af. Op het balkon zit je heerlijk op de wind, met uitzicht over het Spaanse Water en de Tafelberg. Beneden bij het zwembad zwem je, lees je, borrel je of doe je gewoon helemaal niets.",
  },
  gallery: {
    eyebrow: "Galerij",
    title: "Een rondje door de villa",
    body: "De villa van buiten en van binnen. Van het zwembad tot de hoekjes waar je vanzelf neerploft.",
  },
  audiences: {
    eyebrow: "Voor wie",
    titlePre: "Voor groepen die",
    titleHighlight: "samen weg willen",
    body: "Genoeg ruimte voor iedereen, en de rust om je af en toe even terug te trekken.",
    diveLine: (link) =>
      `Liever onder water? We werken samen met ${link}: 10% korting op duiken voor onze gasten.`,
  },
  aboutTeaser: {
    eyebrow: "Over ons",
    titlePre: "Wie er achter Villa Sandemarie",
    titleHighlight: "zitten",
    body: "Geen onpersoonlijk bedrijf, gewoon onze familie. Lisa-Marie woont op Curaçao en zorgt ter plekke voor de villa, de rest van ons denkt vanuit Nederland mee. Direct contact, van je eerste vraag tot na je verblijf.",
  },
  curacaoTeaser: {
    eyebrow: "Curaçao",
    titlePre: "Curaçao ontdekken vanuit",
    titleHighlight: "Villa Sandemarie",
    body: "Vanuit Cas Grandi sta je zo bij Jan Thiel, Mambo en de bekende stranden, en de rustigere baaitjes liggen er net achter. We delen graag onze favoriete plekken: stranden, duikspots, restaurantjes en de Willemstad-loops die wij zelf doen.",
  },
  booking: {
    eyebrow: "Beschikbaarheid en boeken",
    title: "Stuur een aanvraag, wij reageren persoonlijk",
    body: "Selecteer jullie data en aantal personen. We bevestigen altijd zelf, sturen je persoonlijk een reactie en zetten de boeking voor je klaar.",
    pricingHeading: "Prijsindicatie",
    formTitle: "Boekingsaanvraag",
    formSub: "Klik je aankomst en vertrek in de kalender of typ ze hieronder. Vul de rest aan en we reageren persoonlijk binnen 24 uur.",
    formCheckin: "Aankomstdatum",
    formCheckout: "Vertrekdatum",
    formCheckinHint: "Bijv. 12-07-2026",
    formCheckoutHint: "Bijv. 19-07-2026",
    formGuests: "Aantal personen",
    formName: "Naam",
    formEmail: "E-mail",
    formPhone: "Telefoon / WhatsApp",
    formMessage: "Bericht (optioneel)",
    formMessagePh: "",
    selectArrival: "Selecteer je aankomstdatum",
    arrivalSelected: (d) => `Aankomst: ${d}, selecteer nu vertrek`,
    rangeSummary: (a, b, n) => `${a} → ${b} · ${n} ${n === 1 ? "nacht" : "nachten"}`,
    legendAvailable: "Beschikbaar",
    legendBooked: "Geboekt",
    legendSelected: "Aankomst/vertrek",
    nightSingular: "nacht",
    nightPlural: "nachten",
    submitDisabled: "Selecteer eerst je data",
    submitting: "Versturen...",
    successTitle: "Aanvraag verstuurd",
    successBody: "Bedankt! We nemen binnen 24 uur persoonlijk contact met je op.",
    errorTitle: "Versturen mislukt",
    errorBody: "Er ging iets mis. Probeer het opnieuw of stuur ons een bericht.",
  },
  footer: {
    explore: "Verkennen",
    contact: "Contact",
    whatsapp: "WhatsApp",
    chatNl: "Chat in het Nederlands",
    chatEn: "Chat in English",
    intro: "Een familievilla op Curaçao, gemaakt voor samen zijn. Cas Grandi, vlak bij Jan Thiel, met privézwembad en directe lijn met de familie.",
    rights: "",
    gallery: "Foto's",
  },
  about: {
    pageTitle: "Over ons",
    metaTitle: "Over ons · Familie achter Villa Sandemarie",
    metaDesc: "Maak kennis met de familie Azier. Een echt familiebedrijf, met Lisa-Marie ter plekke op Curaçao en de rest van ons betrokken vanuit Nederland.",
    eyebrow: "Over ons",
    titlePre: "Wie er achter Villa Sandemarie",
    titleHighlight: "zit",
  },
  curacao: {
    pageTitle: "Curaçao",
    metaTitle: "Curaçao tips · Onze favoriete plekken op het eiland",
    metaDesc: "Stranden, duikspots, restaurants en stadswandelingen op Curaçao, geschreven door de familie van Villa Sandemarie. Geen toeristenlijstje, gewoon onze favorieten.",
    eyebrow: "Curaçao",
    titlePre: "Curaçao",
    titleHighlight: "zoals wij het kennen",
    lead: "Curaçao is voor ons geen vakantiebestemming, het is thuis. We delen graag de plekken waar we zelf het liefst komen.",
    storiesHeading: "Onze verhalen",
    quickTipsHeading: "Praktisch",
    insiderBy: (name) => `Geschreven door ${name}`,
  },
  language: {
    label: "Taal",
  },
  content: {
    amenities: {
      guests: "Tot 11 personen",
      bedrooms: "5 slaapkamers",
      bathrooms: "2 badkamers",
      pool: "Privézwembad",
      view: "180° uitzicht",
      balcony: "Balkon op de wind",
      location: "Cas Grandi, vlak bij Jan Thiel",
      parking: "Eigen parkeerplek",
      wifi: "Snelle wifi",
      kitchen: "Volledig uitgeruste keuken",
      bbq: "BBQ",
      ac: "Airco in alle slaapkamers",
      laundry: "Wasmachine",
      groups: "Voor families & groepen",
    },
    rooms: {
      bedrooms: {
        title: "Slaapkamers",
        points: [
          "5 slaapkamers voor maximaal 11 personen",
          "4 kamers met flexibele 1- of 2-persoonsbedden",
          "5e kamer met stapelbed en 1-persoonsbed",
          "Airco in elke slaapkamer",
        ],
      },
      bathrooms: {
        title: "Badkamers",
        points: [
          "2 badkamers in totaal, beide met douche, toilet en twee wastafels",
          "Plus een apart toilet boven, fijn met een grote groep",
        ],
      },
      living: {
        title: "Woonkamer",
        points: [
          "Gezellige woonkamer met een lekkere bank waar iedereen op past",
          "Smart-tv om je eigen series en films te streamen",
        ],
      },
      kitchen: {
        title: "Keuken",
        points: [
          "Volledig uitgeruste keuken voor de hele groep",
          "Koelkast met ijsblokjesmachine, vaatwasser, oven en magnetron",
          "Nespresso én filterkoffie, blender, tosti-apparaat, broodrooster",
        ],
      },
    },
    outdoor: [
      "Privézwembad met ligbedden en zitjes",
      "180° uitzicht over Spaanse Water en Tafelberg",
      "Ruim balkon op de wind, fijn voor ontbijt of borrel",
      "BBQ voor avonden thuis",
      "Buitenverlichting voor lange avonden buiten",
    ],
    audiences: {
      families: {
        title: "Families",
        text: "Genoeg slaapkamers, een eigen zwembad en een huis dat aanvoelt als gezamenlijke thuisbasis. Ook met opa en oma erbij blijft het ruim.",
      },
      friends: {
        title: "Vriendengroepen",
        text: "Samen koken, borrelen en zwemmen, zonder hotelgedoe en zonder gedeelde ruimtes met onbekenden.",
      },
      divers: {
        title: "Duik- en snorkelgroepen",
        text: "Goede uitvalsbasis met ruimte voor je spullen. Voor onze gasten regelen we 10% korting bij Scuba Do Curaçao.",
      },
      celebration: {
        title: "Iets te vieren",
        text: "Verjaardag, jubileum of een bijzondere trip met de hele familie. Iedereen onder één dak, zonder dat het hokkerig wordt.",
      },
    },
    pricing: {
      bullets: [
        "Vanaf €275 per nacht (4 personen)",
        "€25 per extra persoon per nacht",
        "7% belasting",
        "€195 schoonmaak",
        "€500 borg/voorschot voor water en elektra",
      ],
      notes:
        "De €500 borg is een voorschot voor water en elektra en wordt aan het einde van het verblijf met je verrekend.",
    },
    galleryTags: {
      Drone: "Villa",
      Zwembad: "Zwembad",
      Balkon: "Balkon",
      Woonkamer: "Woonkamer",
      Keuken: "Keuken",
      Slaapkamer: "Slaapkamer",
      Badkamer: "Badkamer",
      Avond: "Avond",
      Tuin: "Tuin",
      BBQ: "BBQ",
    },
    galleryCaptions: {
      "villa-drone-1": "",
      "villa-drone-2": "Vanuit de lucht",
      "villa-drone-3": "Overzicht van de villa",
      "villa-drone-4": "Zicht op Spaanse Water",
      "zwembad-1": "Heerlijk overdag",
      "zwembad-2": "Loungehoek bij het water",
      "zwembad-4": "Zicht op de villa",
      "zwembad-5": "Sfeervolle avondverlichting",
      "balkon-1": "Grote eettafel",
      "balkon-2": "Ontspannen loungeplek",
      "balkon-3": "Uitzicht over het Spaanse Water",
      "balkon-4": "Sfeervol detail",
      "balkon-5": "Gezellig hoekje",
      "woonkamer-1": "Comfortabele zithoek",
      "woonkamer-2": "Ruim overzicht",
      "keuken-1": "Kookeiland",
      "keuken-2": "Inbouwapparatuur",
      "master-bedroom-l1": "Slaapkamer 1",
      "master-bedroom-l2": "Detail slaapkamer 1",
      "master-bedroom-r1": "Slaapkamer 2",
      "master-bedroom-r2": "Overzicht slaapkamer 2",
      "master-bedroom-r3": "Slaapkamer 3",
      "master-bedroom-r4": "Slaapkamer 4",
      "master-en-badkamer": "Directe toegang tot badkamer",
      "badkamer-1": "Badkamer",
      "bbq": "Complete buitenkeuken",
    },
  },
};

const en: Dict = {
  nav: {
    villa: "The villa",
    amenities: "Amenities",
    about: "About us",
    curacao: "Curaçao",
    gallery: "Photos",
    booking: "Availability",
  },
  cta: {
    book: "Booking request",
    bookRequest: "Send a request",
    seeAvailability: "Check availability",
    exploreVilla: "Explore the villa",
    readMore: "Read more",
    moreAboutUs: "More about us",
    seeCuracaoTips: "See our Curaçao tips",
    planStay: "Plan your stay",
    sendInquiry: "Send request",
    whatsapp: "WhatsApp",
    email: "Email",
  },
  hero: {
    eyebrow: "Curaçao · Cas Grandi · Spanish Water",
    locationCountry: "Curaçao",
    locationWater: "Spanish Water",
    titlePre: "Bon Bini na",
    titleHighlight: "Villa Sandemarie",
    titlePost: "",
    lead: "Your home on Curaçao. A spacious, easy-going holiday villa for families and groups of friends up to 11 people, with private pool and views over the Spanish Water.",
  },
  intro: {
    eyebrow: "The villa",
    titlePre: "Your island home on Curaçao,",
    titleHighlight: "room for everyone",
    body: "Villa Sandemarie is a spacious detached villa in Cas Grandi, close to Jan Thiel. Five bedrooms, two bathrooms, a generous living area and a balcony catching the trade winds, plenty of space to land together. Outside, the private pool, loungers and views across the Spanish Water are waiting.",
    statsGuests: "Guests",
    statsBedrooms: "Bedrooms",
    statsBathrooms: "Bathrooms",
  },
  amenities: {
    eyebrow: "Amenities",
    title: "Everything you need, nothing you don't",
    body: "We've set up the villa the way we like to be on holiday ourselves: comfortable, relaxed and just right. A proper kitchen, AC in every bedroom, fast wifi and loungers you won't want to leave.",
  },
  rooms: {
    eyebrow: "Layout and rooms",
    titlePre: "Clearly laid out,",
    titleHighlight: "made to share",
  },
  outdoor: {
    eyebrow: "Outdoor living",
    titlePre: "The",
    titleHighlight: "balcony in the breeze",
    titlePost: ", the pool, the sunset",
    body: "Most of life at Villa Sandemarie happens outside. The balcony catches the trade winds with a view across the Spanish Water and the Tafelberg. Down by the pool you swim, read, drink, or just do absolutely nothing.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A walk through the villa",
    body: "The villa from outside and inside. From the pool to the corners where you end up sitting for hours.",
  },
  audiences: {
    eyebrow: "Who it's for",
    titlePre: "For groups who want to",
    titleHighlight: "travel together",
    body: "Plenty of space for everyone, and the quiet to step back when you need to.",
    diveLine: (link) =>
      `Prefer life under water? We partner with ${link}: 10% off diving for our guests.`,
  },
  aboutTeaser: {
    eyebrow: "About us",
    titlePre: "The family behind",
    titleHighlight: "Villa Sandemarie",
    body: "No faceless company, just our family. Lisa-Marie lives on Curaçao and takes care of the villa on the spot, the rest of us think along from the Netherlands. Direct contact, from your first question to after your stay.",
  },
  curacaoTeaser: {
    eyebrow: "Curaçao",
    titlePre: "Discover Curaçao from",
    titleHighlight: "Villa Sandemarie",
    body: "From Cas Grandi you're at Jan Thiel, Mambo and the well-known beaches in minutes, and the quieter bays sit just behind them. We're happy to share our own favourites: beaches, dive sites, restaurants and the Willemstad walks we do ourselves.",
  },
  booking: {
    eyebrow: "Availability and booking",
    title: "Send a request, we reply personally",
    body: "Select your dates and group size. We always confirm ourselves, write back personally and set the booking up for you.",
    pricingHeading: "Indicative pricing",
    formTitle: "Booking request",
    formSub: "Click your arrival and departure in the calendar or type them below. Fill in the rest and we'll reply within 24 hours.",
    formCheckin: "Check-in",
    formCheckout: "Check-out",
    formCheckinHint: "e.g. 12-07-2026",
    formCheckoutHint: "e.g. 19-07-2026",
    formGuests: "Number of guests",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone / WhatsApp",
    formMessage: "Message (optional)",
    formMessagePh: "",
    selectArrival: "Select your arrival date",
    arrivalSelected: (d) => `Arrival: ${d}, now pick your departure`,
    rangeSummary: (a, b, n) => `${a} → ${b} · ${n} ${n === 1 ? "night" : "nights"}`,
    legendAvailable: "Available",
    legendBooked: "Booked",
    legendSelected: "Arrival/departure",
    nightSingular: "night",
    nightPlural: "nights",
    submitDisabled: "Pick your dates first",
    submitting: "Sending...",
    successTitle: "Request sent",
    successBody: "Thanks! We'll get back to you personally within 24 hours.",
    errorTitle: "Could not send",
    errorBody: "Something went wrong. Please try again or send us a message.",
  },
  footer: {
    explore: "Explore",
    contact: "Contact",
    whatsapp: "WhatsApp",
    chatNl: "Chat in Dutch",
    chatEn: "Chat in English",
    intro: "A family villa on Curaçao, made for being together. Cas Grandi, close to Jan Thiel, with private pool and a direct line to the family.",
    rights: "",
    gallery: "Photos",
  },
  about: {
    pageTitle: "About us",
    metaTitle: "About us · The family behind Villa Sandemarie",
    metaDesc: "Meet the Azier family. A real family business, with Lisa-Marie on Curaçao and the rest of us involved from the Netherlands.",
    eyebrow: "About us",
    titlePre: "The family behind",
    titleHighlight: "Villa Sandemarie",
  },
  curacao: {
    pageTitle: "Curaçao",
    metaTitle: "Curaçao tips · Our favourite spots on the island",
    metaDesc: "Beaches, dive sites, restaurants and city walks on Curaçao, written by the family behind Villa Sandemarie. No tourist list, just our favourites.",
    eyebrow: "Curaçao",
    titlePre: "Curaçao,",
    titleHighlight: "the way we know it",
    lead: "Curaçao isn't a holiday spot for us, it's home. We're happy to share the places we go ourselves.",
    storiesHeading: "Our stories",
    quickTipsHeading: "Practical",
    insiderBy: (name) => `Written by ${name}`,
  },
  language: {
    label: "Language",
  },
  content: {
    amenities: {
      guests: "Up to 11 guests",
      bedrooms: "5 bedrooms",
      bathrooms: "2 bathrooms",
      pool: "Private pool",
      view: "180° view",
      balcony: "Balcony in the breeze",
      location: "Cas Grandi, close to Jan Thiel",
      parking: "Private parking",
      wifi: "Fast wifi",
      kitchen: "Fully equipped kitchen",
      bbq: "BBQ",
      ac: "AC in every bedroom",
      laundry: "Washing machine",
      groups: "For families & groups",
    },
    rooms: {
      bedrooms: {
        title: "Bedrooms",
        points: [
          "5 bedrooms sleeping up to 11 people",
          "4 rooms with flexible twin or double setups",
          "5th room with bunk bed and single bed",
          "AC in every bedroom",
        ],
      },
      bathrooms: {
        title: "Bathrooms",
        points: [
          "2 bathrooms in total, both with shower, toilet and two sinks",
          "Plus a separate toilet upstairs, handy with a larger group",
        ],
      },
      living: {
        title: "Living room",
        points: [
          "Cosy living room with a sofa big enough for everyone",
          "Smart TV to stream your own series and films",
        ],
      },
      kitchen: {
        title: "Kitchen",
        points: [
          "Fully equipped kitchen for the whole group",
          "Fridge with ice maker, dishwasher, oven and microwave",
          "Nespresso and filter coffee, blender, sandwich press, toaster",
        ],
      },
    },
    outdoor: [
      "Private pool with loungers and seating",
      "180° view across Spanish Water and the Tafelberg",
      "Spacious balcony in the breeze, perfect for breakfast or sundowners",
      "BBQ for evenings in",
      "Outdoor lighting for long evenings outside",
    ],
    audiences: {
      families: {
        title: "Families",
        text: "Plenty of bedrooms, your own pool and a house that feels like a shared home base. Even with grandparents along, there's room for everyone.",
      },
      friends: {
        title: "Groups of friends",
        text: "Cook, drink and swim together, no hotel hassle and no shared spaces with strangers.",
      },
      divers: {
        title: "Dive and snorkel groups",
        text: "A great base with room for your gear. Our guests get 10% off diving with Scuba Do Curaçao.",
      },
      celebration: {
        title: "Something to celebrate",
        text: "Birthday, anniversary or a special trip with the whole family. Everyone under one roof, without it feeling cramped.",
      },
    },
    pricing: {
      bullets: [
        "From €275 per night (4 guests)",
        "€25 per extra guest per night",
        "7% tax",
        "€195 cleaning fee",
        "€500 deposit / advance for water and electricity",
      ],
      notes:
        "The €500 deposit is an advance for water and electricity and is settled at the end of your stay.",
    },
    galleryTags: {
      Drone: "Villa",
      Zwembad: "Pool",
      Balkon: "Balcony",
      Woonkamer: "Living room",
      Keuken: "Kitchen",
      Slaapkamer: "Bedroom",
      Badkamer: "Bathroom",
      Avond: "Evening",
      Tuin: "Garden",
      BBQ: "BBQ",
    },
    galleryCaptions: {
      "villa-drone-1": "",
      "villa-drone-2": "Aerial view",
      "villa-drone-3": "Villa overview",
      "villa-drone-4": "View over Spanish Water",
      "zwembad-1": "Perfect day",
      "zwembad-2": "Lounge area by the pool",
      "zwembad-4": "View of the villa",
      "zwembad-5": "Atmospheric evening lighting",
      "balkon-1": "Large dining table",
      "balkon-2": "Relaxing lounge spot",
      "balkon-3": "View over Spanish Water",
      "balkon-4": "Atmospheric detail",
      "balkon-5": "Cozy corner",
      "woonkamer-1": "Comfortable seating area",
      "woonkamer-2": "Spacious overview",
      "keuken-1": "Kitchen island",
      "keuken-2": "Built-in appliances",
      "master-bedroom-l1": "Bedroom 1",
      "master-bedroom-l2": "Bedroom 1 detail",
      "master-bedroom-r1": "Bedroom 2",
      "master-bedroom-r2": "Bedroom 2 overview",
      "master-bedroom-r3": "Bedroom 3",
      "master-bedroom-r4": "Bedroom 4",
      "master-en-badkamer": "En-suite bathroom access",
      "badkamer-1": "Bathroom",
      "bbq": "Outdoor kitchen",
    },
  },
};

const de: Dict = {
  nav: {
    villa: "Die Villa",
    amenities: "Ausstattung",
    about: "Über uns",
    curacao: "Curaçao",
    gallery: "Fotos",
    booking: "Verfügbarkeit",
  },
  cta: {
    book: "Buchungsanfrage",
    bookRequest: "Anfrage senden",
    seeAvailability: "Verfügbarkeit prüfen",
    exploreVilla: "Villa entdecken",
    readMore: "Mehr lesen",
    moreAboutUs: "Mehr über uns",
    seeCuracaoTips: "Unsere Curaçao-Tipps",
    planStay: "Aufenthalt planen",
    sendInquiry: "Anfrage senden",
    whatsapp: "WhatsApp",
    email: "E-Mail",
  },
  hero: {
    eyebrow: "Curaçao · Cas Grandi · Spanisches Wasser",
    locationCountry: "Curaçao",
    locationWater: "Spanisches Wasser",
    titlePre: "Bon Bini na",
    titleHighlight: "Villa Sandemarie",
    titlePost: "",
    lead: "Euer Inselzuhause auf Curaçao. Eine geräumige, gemütliche Ferienvilla für Familien und Freundesgruppen bis 11 Personen, mit privatem Pool und Blick über das Spanische Wasser.",
  },
  intro: {
    eyebrow: "Die Villa",
    titlePre: "Euer Inselzuhause auf Curaçao,",
    titleHighlight: "Platz für alle",
    body: "Villa Sandemarie ist eine geräumige freistehende Ferienvilla in Cas Grandi, ganz in der Nähe von Jan Thiel. 5 Schlafzimmer, 2 Badezimmer, ein gemütlicher Wohnbereich und ein Balkon im Wind, ihr habt jede Menge Platz, um zusammen anzukommen. Draußen warten der private Pool, die Liegen und der Blick auf das Spanische Wasser.",
    statsGuests: "Gäste",
    statsBedrooms: "Schlafzimmer",
    statsBathrooms: "Badezimmer",
  },
  amenities: {
    eyebrow: "Ausstattung",
    title: "Alles was ihr braucht, nichts was nervt",
    body: "Wir haben die Villa so eingerichtet, wie wir selbst gerne Urlaub machen: bequem, entspannt und einfach gut. Eine richtige Küche, Klimaanlage in jedem Schlafzimmer, schnelles WLAN und Liegen, von denen ihr nicht mehr aufstehen wollt.",
  },
  rooms: {
    eyebrow: "Aufteilung und Zimmer",
    titlePre: "Klar aufgeteilt,",
    titleHighlight: "gemacht für viele",
  },
  outdoor: {
    eyebrow: "Tropisches Draußenleben",
    titlePre: "Der",
    titleHighlight: "Balkon im Wind",
    titlePost: ", der Pool, der Sonnenuntergang",
    body: "In der Villa Sandemarie spielt sich das meiste draußen ab. Auf dem Balkon sitzt ihr im Wind, mit Blick auf das Spanische Wasser und den Tafelberg. Unten am Pool wird geschwommen, gelesen, ein Drink genommen oder einfach gar nichts gemacht.",
  },
  gallery: {
    eyebrow: "Fotos",
    title: "Ein Rundgang durch die Villa",
    body: "Die Villa von außen und innen. Vom Pool bis zu den Ecken, in denen man einfach sitzen bleibt.",
  },
  audiences: {
    eyebrow: "Für wen",
    titlePre: "Für Gruppen, die",
    titleHighlight: "zusammen verreisen wollen",
    body: "Genug Platz für alle und genug Ruhe, um sich auch mal zurückzuziehen.",
    diveLine: (link) =>
      `Lieber unter Wasser? Wir arbeiten mit ${link} zusammen: 10% Rabatt auf Tauchgänge für unsere Gäste.`,
  },
  aboutTeaser: {
    eyebrow: "Über uns",
    titlePre: "Die Familie hinter",
    titleHighlight: "Villa Sandemarie",
    body: "Keine anonyme Firma, einfach unsere Familie. Lisa-Marie lebt auf Curaçao und kümmert sich vor Ort um die Villa, der Rest denkt aus den Niederlanden mit. Direkter Kontakt, von der ersten Frage bis nach dem Aufenthalt.",
  },
  curacaoTeaser: {
    eyebrow: "Curaçao",
    titlePre: "Curaçao entdecken von",
    titleHighlight: "Villa Sandemarie",
    body: "Von Cas Grandi seid ihr in wenigen Minuten in Jan Thiel, Mambo und an den bekannten Stränden, und die ruhigen Buchten liegen direkt dahinter. Wir teilen unsere eigenen Lieblingsplätze: Strände, Tauchspots, Restaurants und unsere Willemstad-Runden.",
  },
  booking: {
    eyebrow: "Verfügbarkeit und Buchung",
    title: "Schickt eine Anfrage, wir antworten persönlich",
    body: "Wählt eure Daten und die Gruppengröße. Wir bestätigen immer selbst, schreiben persönlich zurück und richten die Buchung für euch ein.",
    pricingHeading: "Preisangabe",
    formTitle: "Buchungsanfrage",
    formSub: "Klickt Ankunft und Abreise im Kalender oder tippt sie unten ein. Den Rest ausfüllen und wir antworten innerhalb von 24 Stunden.",
    formCheckin: "Anreise",
    formCheckout: "Abreise",
    formCheckinHint: "z.B. 12-07-2026",
    formCheckoutHint: "z.B. 19-07-2026",
    formGuests: "Anzahl Gäste",
    formName: "Name",
    formEmail: "E-Mail",
    formPhone: "Telefon / WhatsApp",
    formMessage: "Nachricht (optional)",
    formMessagePh: "",
    selectArrival: "Wählt euer Ankunftsdatum",
    arrivalSelected: (d) => `Ankunft: ${d}, wählt jetzt die Abreise`,
    rangeSummary: (a, b, n) => `${a} → ${b} · ${n} ${n === 1 ? "Nacht" : "Nächte"}`,
    legendAvailable: "Verfügbar",
    legendBooked: "Belegt",
    legendSelected: "Anreise/Abreise",
    nightSingular: "Nacht",
    nightPlural: "Nächte",
    submitDisabled: "Wählt zuerst eure Daten",
    submitting: "Wird gesendet...",
    successTitle: "Anfrage gesendet",
    successBody: "Danke! Wir melden uns innerhalb von 24 Stunden persönlich.",
    errorTitle: "Senden fehlgeschlagen",
    errorBody: "Etwas ist schiefgelaufen. Bitte versucht es erneut oder schreibt uns eine Nachricht.",
  },
  footer: {
    explore: "Entdecken",
    contact: "Kontakt",
    whatsapp: "WhatsApp",
    chatNl: "Chat auf Niederländisch",
    chatEn: "Chat in English",
    intro: "Eine Familienvilla auf Curaçao, gemacht zum Zusammensein. Cas Grandi, nahe Jan Thiel, mit privatem Pool und direktem Draht zur Familie.",
    rights: "",
    gallery: "Fotos",
  },
  about: {
    pageTitle: "Über uns",
    metaTitle: "Über uns · Die Familie hinter Villa Sandemarie",
    metaDesc: "Lernt die Familie Azier kennen. Ein echtes Familienunternehmen, mit Lisa-Marie vor Ort auf Curaçao und dem Rest von uns aus den Niederlanden.",
    eyebrow: "Über uns",
    titlePre: "Die Familie hinter",
    titleHighlight: "Villa Sandemarie",
  },
  curacao: {
    pageTitle: "Curaçao",
    metaTitle: "Curaçao Tipps · Unsere Lieblingsorte auf der Insel",
    metaDesc: "Strände, Tauchplätze, Restaurants und Stadtspaziergänge auf Curaçao, geschrieben von der Familie hinter der Villa Sandemarie. Keine Touristenliste, einfach unsere Favoriten.",
    eyebrow: "Curaçao",
    titlePre: "Curaçao,",
    titleHighlight: "wie wir es kennen",
    lead: "Curaçao ist für uns kein Urlaubsort, es ist Zuhause. Wir teilen gerne die Plätze, an die wir selbst am liebsten gehen.",
    storiesHeading: "Unsere Geschichten",
    quickTipsHeading: "Praktisch",
    insiderBy: (name) => `Geschrieben von ${name}`,
  },
  language: {
    label: "Taal",
  },
  content: {
    amenities: {
      guests: "Bis zu 11 Personen",
      bedrooms: "5 Schlafzimmer",
      bathrooms: "2 Badezimmer",
      pool: "Privater Pool",
      view: "180° Blick",
      balcony: "Balkon im Wind",
      location: "Cas Grandi, nahe Jan Thiel",
      parking: "Eigener Parkplatz",
      wifi: "Schnelles WLAN",
      kitchen: "Voll ausgestattete Küche",
      bbq: "BBQ",
      ac: "Klimaanlage in allen Schlafzimmern",
      laundry: "Waschmaschine",
      groups: "Für Familien & Gruppen",
    },
    rooms: {
      bedrooms: {
        title: "Schlafzimmer",
        points: [
          "5 Schlafzimmer für bis zu 11 Personen",
          "4 Zimmer mit flexiblen Einzel- oder Doppelbetten",
          "5. Zimmer mit Etagenbett und Einzelbett",
          "Klimaanlage in jedem Schlafzimmer",
        ],
      },
      bathrooms: {
        title: "Badezimmer",
        points: [
          "2 Badezimmer insgesamt, beide mit Dusche, WC und zwei Waschbecken",
          "Plus ein separates WC oben, praktisch für größere Gruppen",
        ],
      },
      living: {
        title: "Wohnzimmer",
        points: [
          "Gemütliches Wohnzimmer mit einem Sofa, das alle aufnimmt",
          "Smart-TV, um eigene Serien und Filme zu streamen",
        ],
      },
      kitchen: {
        title: "Küche",
        points: [
          "Voll ausgestattete Küche für die ganze Gruppe",
          "Kühlschrank mit Eiswürfelmaschine, Spülmaschine, Ofen und Mikrowelle",
          "Nespresso und Filterkaffee, Mixer, Sandwichmaker, Toaster",
        ],
      },
    },
    outdoor: [
      "Privater Pool mit Liegen und Sitzgelegenheiten",
      "180° Blick über das Spanische Wasser und den Tafelberg",
      "Großzügiger Balkon im Wind, ideal für Frühstück oder Aperitif",
      "BBQ für Abende zu Hause",
      "Außenbeleuchtung für lange Abende draußen",
    ],
    audiences: {
      families: {
        title: "Familien",
        text: "Genug Schlafzimmer, ein eigener Pool und ein Haus, das sich wie eine gemeinsame Basis anfühlt. Auch mit Oma und Opa bleibt genug Platz.",
      },
      friends: {
        title: "Freundesgruppen",
        text: "Zusammen kochen, trinken und schwimmen, ohne Hotel-Trubel und ohne geteilte Räume mit Fremden.",
      },
      divers: {
        title: "Tauch- und Schnorchelgruppen",
        text: "Gute Basis mit Platz für die Ausrüstung. Unsere Gäste bekommen 10% Rabatt auf Tauchgänge bei Scuba Do Curaçao.",
      },
      celebration: {
        title: "Etwas zu feiern",
        text: "Geburtstag, Jubiläum oder eine besondere Reise mit der ganzen Familie. Alle unter einem Dach, ohne dass es eng wird.",
      },
    },
    pricing: {
      bullets: [
        "Ab 275 € pro Nacht (4 Personen)",
        "25 € pro zusätzlicher Person pro Nacht",
        "7% Steuer",
        "195 € Endreinigung",
        "500 € Kaution / Vorschuss für Wasser und Strom",
      ],
      notes:
        "Die Kaution von 500 € ist ein Vorschuss für Wasser und Strom und wird am Ende des Aufenthalts mit euch verrechnet.",
    },
    galleryTags: {
      Drone: "Villa",
      Zwembad: "Pool",
      Balkon: "Balkon",
      Woonkamer: "Wohnzimmer",
      Keuken: "Küche",
      Slaapkamer: "Schlafzimmer",
      Badkamer: "Badezimmer",
      Avond: "Abend",
      Tuin: "Garten",
      BBQ: "BBQ",
    },
    galleryCaptions: {
      "villa-drone-1": "",
      "villa-drone-2": "Luftaufnahme",
      "villa-drone-3": "Überblick über die Villa",
      "villa-drone-4": "Blick auf das Spanische Wasser",
      "zwembad-1": "Herrlicher Tag",
      "zwembad-2": "Loungebereich am Pool",
      "zwembad-4": "Blick auf die Villa",
      "zwembad-5": "Stimmungsvolle Abendbeleuchtung",
      "balkon-1": "Großer Esstisch",
      "balkon-2": "Entspannter Loungebereich",
      "balkon-3": "Blick über das Spanische Wasser",
      "balkon-4": "Stimmungsvolles Detail",
      "balkon-5": "Gemütliche Ecke",
      "woonkamer-1": "Komfortable Sitzecke",
      "woonkamer-2": "Großzügiger Überblick",
      "keuken-1": "Kochinsel",
      "keuken-2": "Einbaugeräte",
      "master-bedroom-l1": "Schlafzimmer 1",
      "master-bedroom-l2": "Detail Schlafzimmer 1",
      "master-bedroom-r1": "Schlafzimmer 2",
      "master-bedroom-r2": "Überblick Schlafzimmer 2",
      "master-bedroom-r3": "Schlafzimmer 3",
      "master-bedroom-r4": "Schlafzimmer 4",
      "master-en-badkamer": "Direkter Zugang zum Badezimmer",
      "badkamer-1": "Badezimmer",
      "bbq": "Außenküche",
    },
  },
};

const es: Dict = {
  nav: {
    villa: "La villa",
    amenities: "Servicios",
    about: "Sobre nosotros",
    curacao: "Curazao",
    booking: "Disponibilidad",
    gallery: "Fotos",
  },
  cta: {
    book: "Solicitar reserva",
    bookRequest: "Enviar solicitud",
    seeAvailability: "Ver disponibilidad",
    exploreVilla: "Explorar la villa",
    readMore: "Leer más",
    moreAboutUs: "Más sobre nosotros",
    seeCuracaoTips: "Nuestros consejos de Curazao",
    planStay: "Planifica tu estancia",
    sendInquiry: "Enviar solicitud",
    whatsapp: "WhatsApp",
    email: "Email",
  },
  hero: {
    eyebrow: "Curazao · Cas Grandi · Aguas Españolas",
    locationCountry: "Curazao",
    locationWater: "Aguas Españolas",
    titlePre: "Bon Bini na",
    titleHighlight: "Villa Sandemarie",
    titlePost: "",
    lead: "Vuestra casa en Curazao. Una villa de vacaciones amplia y acogedora para familias y grupos de amigos hasta 11 personas, con piscina privada y vistas a Aguas Españolas.",
  },
  intro: {
    eyebrow: "La villa",
    titlePre: "Vuestra casa en la isla,",
    titleHighlight: "espacio para todos",
    body: "Villa Sandemarie es una villa amplia e independiente en Cas Grandi, cerca de Jan Thiel. Cinco habitaciones, dos baños, una sala generosa y un balcón al viento, hay sitio de sobra para aterrizar todos juntos. Fuera os esperan la piscina privada, las tumbonas y las vistas a Aguas Españolas.",
    statsGuests: "Personas",
    statsBedrooms: "Habitaciones",
    statsBathrooms: "Baños",
  },
  amenities: {
    eyebrow: "Servicios",
    title: "Todo lo que necesitas, nada que sobre",
    body: "Hemos preparado la villa como nos gusta estar a nosotros de vacaciones: cómoda, relajada y bien pensada. Una buena cocina, aire acondicionado en cada habitación, wifi rápido y tumbonas que no querrás dejar.",
  },
  rooms: {
    eyebrow: "Distribución y habitaciones",
    titlePre: "Bien distribuida,",
    titleHighlight: "pensada para grupos",
  },
  outdoor: {
    eyebrow: "Vida al aire libre",
    titlePre: "El",
    titleHighlight: "balcón al viento",
    titlePost: ", la piscina, el atardecer",
    body: "En Villa Sandemarie casi todo pasa fuera. En el balcón sopla la brisa, con vistas a Aguas Españolas y al Tafelberg. Abajo en la piscina se nada, se lee, se toma algo o no se hace absolutamente nada.",
  },
  gallery: {
    eyebrow: "Galería",
    title: "Una vuelta por la villa",
    body: "La villa por fuera y por dentro. Desde la piscina hasta los rincones donde uno simplemente se queda.",
  },
  audiences: {
    eyebrow: "Para quién",
    titlePre: "Para grupos que quieren",
    titleHighlight: "viajar juntos",
    body: "Sitio de sobra para todos y la calma para retirarse de vez en cuando.",
    diveLine: (link) =>
      `¿Más bien bajo el agua? Colaboramos con ${link}: 10% de descuento en buceo para nuestros huéspedes.`,
  },
  aboutTeaser: {
    eyebrow: "Sobre nosotros",
    titlePre: "Una auténtica",
    titleHighlight: "empresa familiar",
    body: "Nada de empresa anónima, somos nuestra familia. Lisa-Marie vive en Curazao y cuida de la villa en persona, el resto pensamos juntos desde los Países Bajos. Trato directo, desde la primera pregunta hasta después de la estancia.",
  },
  curacaoTeaser: {
    eyebrow: "Curazao",
    titlePre: "La isla como",
    titleHighlight: "la conocemos",
    body: "Desde Cas Grandi llegáis en minutos a Jan Thiel, Mambo y las playas conocidas, y las calas tranquilas están justo detrás. Compartimos nuestros sitios favoritos: playas, puntos de buceo, restaurantes y nuestras rutas por Willemstad.",
  },
  booking: {
    eyebrow: "Disponibilidad y reserva",
    title: "Envíanos una solicitud, te responderemos en persona",
    body: "Elige tus fechas y el número de personas. Siempre confirmamos nosotros, te respondemos en persona y dejamos la reserva lista.",
    pricingHeading: "Precio orientativo",
    formTitle: "Solicitud de reserva",
    formSub: "Marca llegada y salida en el calendario o escríbelas abajo. Rellena el resto y te respondemos en 24 horas.",
    formCheckin: "Llegada",
    formCheckout: "Salida",
    formCheckinHint: "Ej. 12-07-2026",
    formCheckoutHint: "Ej. 19-07-2026",
    formGuests: "Número de personas",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Teléfono / WhatsApp",
    formMessage: "Mensaje (opcional)",
    formMessagePh: "",
    selectArrival: "Elige tu fecha de llegada",
    arrivalSelected: (d) => `Llegada: ${d}, ahora elige la salida`,
    rangeSummary: (a, b, n) => `${a} → ${b} · ${n} ${n === 1 ? "noche" : "noches"}`,
    legendAvailable: "Libre",
    legendBooked: "Reservado",
    legendSelected: "Llegada/salida",
    nightSingular: "noche",
    nightPlural: "noches",
    submitDisabled: "Elige primero tus fechas",
    submitting: "Enviando...",
    successTitle: "Solicitud enviada",
    successBody: "¡Gracias! Te responderemos en persona en 24 horas.",
    errorTitle: "No se pudo enviar",
    errorBody: "Algo ha fallado. Inténtalo de nuevo o envíanos un mensaje.",
  },
  footer: {
    explore: "Explorar",
    contact: "Contacto",
    whatsapp: "WhatsApp",
    chatNl: "Chatea en neerlandés",
    chatEn: "Chat in English",
    intro: "Una villa familiar en Curazao, hecha para estar juntos. Cas Grandi, cerca de Jan Thiel, con piscina privada y trato directo con la familia.",
    rights: "",
    gallery: "Fotos",
  },
  about: {
    pageTitle: "Sobre nosotros",
    metaTitle: "Sobre nosotros · La familia detrás de Villa Sandemarie",
    metaDesc: "Conoce a la familia Azier. Una auténtica empresa familiar, con Lisa-Marie en Curazao y el resto desde los Países Bajos.",
    eyebrow: "Sobre nosotros",
    titlePre: "La familia detrás de",
    titleHighlight: "Villa Sandemarie",
  },
  curacao: {
    pageTitle: "Curazao",
    metaTitle: "Consejos de Curazao · Nuestros lugares favoritos",
    metaDesc: "Playas, puntos de buceo, restaurantes y paseos por la ciudad en Curazao, escritos por la familia detrás de Villa Sandemarie. Sin lista turística, solo nuestros favoritos.",
    eyebrow: "Curazao",
    titlePre: "Curazao,",
    titleHighlight: "como la conocemos",
    lead: "Curazao no es para nosotros un destino, es nuestra casa. Compartimos con gusto los sitios donde vamos.",
    storiesHeading: "Nuestras historias",
    quickTipsHeading: "Práctico",
    insiderBy: (name) => `Escrito por ${name}`,
  },
  language: {
    label: "Idioma",
  },
  content: {
    amenities: {
      guests: "Hasta 11 personas",
      bedrooms: "5 habitaciones",
      bathrooms: "2 baños",
      pool: "Piscina privada",
      view: "Vista de 180°",
      balcony: "Balcón al viento",
      location: "Cas Grandi, cerca de Jan Thiel",
      parking: "Aparcamiento privado",
      wifi: "Wifi rápido",
      kitchen: "Cocina totalmente equipada",
      bbq: "Barbacoa",
      ac: "Aire acondicionado en todas las habitaciones",
      laundry: "Lavadora",
      groups: "Para familias y grupos",
    },
    rooms: {
      bedrooms: {
        title: "Habitaciones",
        points: [
          "5 habitaciones para hasta 11 personas",
          "4 habitaciones con camas flexibles (dobles o individuales)",
          "5ª habitación con litera y cama individual",
          "Aire acondicionado en cada habitación",
        ],
      },
      bathrooms: {
        title: "Baños",
        points: [
          "2 baños en total, ambos con ducha, inodoro y dos lavabos",
          "Más un aseo separado arriba, práctico con un grupo grande",
        ],
      },
      living: {
        title: "Salón",
        points: [
          "Salón acogedor con un sofá donde cabe todo el mundo",
          "Smart TV para ver tus propias series y películas",
        ],
      },
      kitchen: {
        title: "Cocina",
        points: [
          "Cocina totalmente equipada para todo el grupo",
          "Nevera con máquina de hielo, lavavajillas, horno y microondas",
          "Nespresso y café de filtro, batidora, sandwichera y tostadora",
        ],
      },
    },
    outdoor: [
      "Piscina privada con tumbonas y zona de descanso",
      "Vista de 180° sobre Aguas Españolas y el Tafelberg",
      "Amplio balcón al viento, perfecto para desayunar o tomar algo",
      "Barbacoa para las noches en casa",
      "Iluminación exterior para largas noches al aire libre",
    ],
    audiences: {
      families: {
        title: "Familias",
        text: "Habitaciones de sobra, piscina propia y una casa que se siente como una base común. También con los abuelos sigue habiendo espacio.",
      },
      friends: {
        title: "Grupos de amigos",
        text: "Cocinar, tomar algo y nadar juntos, sin líos de hotel y sin compartir zonas con desconocidos.",
      },
      divers: {
        title: "Grupos de buceo y snorkel",
        text: "Buena base con sitio para el equipo. Nuestros huéspedes tienen 10% de descuento en buceo con Scuba Do Curaçao.",
      },
      celebration: {
        title: "Algo que celebrar",
        text: "Cumpleaños, aniversario o un viaje especial con toda la familia. Todos bajo el mismo techo, sin agobios.",
      },
    },
    pricing: {
      bullets: [
        "Desde 275 € por noche (4 personas)",
        "25 € por persona extra por noche",
        "7% de impuestos",
        "195 € de limpieza",
        "500 € de fianza / adelanto para agua y electricidad",
      ],
      notes:
        "La fianza de 500 € es un adelanto para agua y electricidad y se ajusta al final de la estancia.",
    },
    galleryTags: {
      Drone: "Villa",
      Zwembad: "Piscina",
      Balkon: "Balcón",
      Woonkamer: "Salón",
      Keuken: "Cocina",
      Slaapkamer: "Habitación",
      Badkamer: "Baño",
      Avond: "Noche",
      Tuin: "Jardín",
      BBQ: "Barbacoa",
    },
    galleryCaptions: {
      "villa-drone-1": "",
      "villa-drone-2": "Vista aérea",
      "villa-drone-3": "Vista general",
      "villa-drone-4": "Vista de Aguas Españolas",
      "zwembad-1": "Día perfecto",
      "zwembad-2": "Zona de relax junto a la piscina",
      "zwembad-4": "Vista de la villa",
      "zwembad-5": "Iluminación nocturna",
      "balkon-1": "Mesa de comedor",
      "balkon-2": "Zona de lounge",
      "balkon-3": "Vista sobre Aguas Españolas",
      "balkon-4": "Detalle",
      "balkon-5": "Rincón acogedor",
      "woonkamer-1": "Zona de estar",
      "woonkamer-2": "Vista amplia",
      "keuken-1": "Isla de cocina",
      "keuken-2": "Electrodomésticos",
      "master-bedroom-l1": "Habitación 1",
      "master-bedroom-l2": "Detalle habitación 1",
      "master-bedroom-r1": "Habitación 2",
      "master-bedroom-r2": "Vista habitación 2",
      "master-bedroom-r3": "Habitación 3",
      "master-bedroom-r4": "Habitación 4",
      "master-en-badkamer": "Acceso directo al baño",
      "badkamer-1": "Baño",
      "bbq": "Cocina exterior",
    },
  },
};

export const dictionaries: Record<Locale, Dict> = { nl, en, de, es };
