import { site } from "@/lib/site";
import { villa } from "@/lib/villa";

const faqs = [
  {
    q: "Voor hoeveel personen is Villa Sandemarie geschikt?",
    a: "Villa Sandemarie biedt plek aan maximaal 11 gasten, verdeeld over 5 slaapkamers met airco, 2 badkamers (plus een apart toilet boven), een gezellige woonkamer, een volledig uitgeruste keuken en een balkon op de wind.",
  },
  {
    q: "Waar ligt de villa op Curaçao?",
    a: "De villa ligt aan Kaya Strauss 25 in de wijk Cas Grandi, vlakbij Jan Thiel en het Spaanse Water, aan de zuidoostkant van Curaçao.",
  },
  {
    q: "Wat kost een verblijf in Villa Sandemarie?",
    a: "De prijs start vanaf €275 per nacht voor 4 personen. Een extra persoon is €25 per nacht. Daarnaast wordt 7% belasting, €195 schoonmaak en een €500 borg voor water/elektra in rekening gebracht. De borg wordt aan het einde van het verblijf verrekend.",
  },
  {
    q: "Hoe boek ik de villa?",
    a: "Je stuurt een aanvraag via het formulier of via WhatsApp/e-mail. We bevestigen persoonlijk en zetten de boeking voor je klaar. Beschikbaarheid is gekoppeld aan onze Airbnb-kalender.",
  },
  {
    q: "Heeft de villa een privézwembad?",
    a: "Ja, Villa Sandemarie heeft een eigen privézwembad met ligbedden en zitjes, met 180° uitzicht over het Spaanse Water en de Tafelberg.",
  },
  {
    q: "Is de villa geschikt voor duikvakanties?",
    a: "Ja. Gasten van Villa Sandemarie krijgen 10% korting op duiken bij Scuba Do Curaçao. De ligging in Cas Grandi is een fijne uitvalsbasis voor zowel kant- als bootduiken aan de oostkant van het eiland.",
  },
];

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LodgingJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${site.url}/#villa`,
    name: site.name,
    url: site.url,
    description: site.description,
    image: [
      `${site.url}/media/villa/villa-drone-1.webp`,
      `${site.url}/media/villa/balkon-3.webp`,
      `${site.url}/media/villa/zwembad-1.webp`,
    ],
    telephone: site.contact.phoneIntl,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.region,
      addressRegion: site.address.neighborhood,
      addressCountry: "CW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.082,
      longitude: -68.881,
    },
    numberOfRooms: villa.facts.bedrooms,
    petsAllowed: false,
    amenityFeature: villa.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a.label,
      value: true,
    })),
    priceRange: "€€",
    starRating: { "@type": "Rating", ratingValue: "5" },
    sameAs: [site.social.instagram, site.social.facebook, site.social.tiktok],
    makesOffer: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: villa.pricing.nightlyFrom,
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        value: 1,
        unitCode: "DAY",
      },
      description: `Vanaf €${villa.pricing.nightlyFrom} per nacht voor ${villa.pricing.baseGuests} personen.`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
