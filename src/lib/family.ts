import type { Locale } from "@/lib/i18n/locales";

export const familyIntro: Record<Locale, string> = {
  nl: `Soms kom je op een plek waar alles klopt. Voor ons is dat Curaçao. Ruim twintig jaar geleden werden we als familie verliefd op het eiland. We hebben er acht jaar gewoond, onze villa gebouwd en een thuis gemaakt waar zon, zee en samenzijn vanzelfsprekend zijn.

Inmiddels woont Lisa-Marie weer fulltime op Curaçao en is het eiland meer dan ooit deel van ons dagelijks leven. We hebben de villa gebouwd zoals we zelf graag op vakantie gaan: comfortabel, ontspannen en gewoon goed voor elkaar. Boxspringbedden, airco in elke slaapkamer, snelle wifi en een keuken waar je echt mee kunt koken. We wilden een plek maken waar gasten zich meteen thuis voelen, net zoals wij dat hier ook doen.`,
  en: `Sometimes you arrive somewhere and everything just clicks. For us, that's Curaçao. More than twenty years ago we fell in love with the island as a family. We lived here for eight years, built our villa and made a home where sun, sea and being together are simply a given.

Lisa-Marie now lives on Curaçao full-time again, so the island is more than ever part of our daily life. We built the villa the way we like to be on holiday ourselves: comfortable, relaxed and just well taken care of. Boxspring beds, AC in every bedroom, fast wifi and a kitchen you can actually cook in. We wanted a place where guests feel at home immediately, the way we do here.`,
  de: `Manchmal kommt man irgendwo an, und alles passt einfach. Für uns ist das Curaçao. Vor mehr als zwanzig Jahren haben wir uns als Familie in die Insel verliebt. Wir haben acht Jahre hier gewohnt, unsere Villa gebaut und ein Zuhause geschaffen, in dem Sonne, Meer und Zusammensein selbstverständlich sind.

Lisa-Marie lebt inzwischen wieder ganz auf Curaçao, und die Insel ist mehr denn je Teil unseres Alltags. Wir haben die Villa so gebaut, wie wir selbst gerne Urlaub machen: bequem, entspannt und einfach gut versorgt. Boxspringbetten, Klimaanlage in jedem Schlafzimmer, schnelles WLAN und eine Küche, in der man wirklich kochen kann. Wir wollten einen Ort schaffen, an dem sich Gäste sofort zu Hause fühlen, so wie wir hier.`,
  es: `A veces llegas a un sitio y todo cuadra. Para nosotros, ese sitio es Curazao. Hace más de veinte años nos enamoramos de la isla como familia. Vivimos aquí ocho años, construimos nuestra villa y creamos un hogar donde el sol, el mar y estar juntos son lo más natural.

Hoy Lisa-Marie vuelve a vivir en Curazao a tiempo completo, y la isla forma parte más que nunca de nuestro día a día. Construimos la villa como nos gusta estar a nosotros de vacaciones: cómoda, relajada y bien cuidada. Camas con boxspring, aire acondicionado en cada habitación, wifi rápido y una cocina con la que de verdad se puede cocinar. Queríamos un sitio donde los huéspedes se sientan en casa al instante, igual que nosotros aquí.`,
};

export type FamilyMember = {
  name: string;
  role: Record<Locale, string>;
  bio: Record<Locale, string>;
  favorites: Record<Locale, string[]>;
};

export const family: readonly FamilyMember[] = [
  {
    name: "Margriet",
    role: {
      nl: "Boeken, strand en stad",
      en: "Books, beach and town",
      de: "Bücher, Strand und Stadt",
      es: "Libros, playa y ciudad",
    },
    bio: {
      nl: "Curaçao is voor mij ultiem ontspannen: een fijn strandbedje, een goed boek en de zachte bries van zee. Ik hou van de charme van Willemstad en struin graag door de boetiekjes in Punda en Otrobanda.",
      en: "For me, Curaçao is the ultimate way to unwind: a comfortable beach bed, a good book and the soft sea breeze. I love the charm of Willemstad and like wandering through the boutiques in Punda and Otrobanda.",
      de: "Curaçao bedeutet für mich pure Entspannung: eine bequeme Strandliege, ein gutes Buch und die sanfte Meeresbrise. Ich liebe den Charme von Willemstad und stöbere gerne durch die Boutiquen in Punda und Otrobanda.",
      es: "Para mí, Curazao es desconectar de verdad: una buena tumbona, un buen libro y la brisa del mar. Me encanta el encanto de Willemstad y me gusta perderme por las tiendas de Punda y Otrobanda.",
    },
    favorites: {
      nl: [
        "Frozen cappuccino bij Chill Beach Bar & Grill",
        "Boetiekjes in Punda en Otrobanda",
        "Diner bij Mosa Caña",
      ],
      en: [
        "Frozen cappuccino at Chill Beach Bar & Grill",
        "Boutiques in Punda and Otrobanda",
        "Dinner at Mosa Caña",
      ],
      de: [
        "Frozen Cappuccino in Chill Beach Bar & Grill",
        "Boutiquen in Punda und Otrobanda",
        "Abendessen im Mosa Caña",
      ],
      es: [
        "Frozen cappuccino en Chill Beach Bar & Grill",
        "Tiendas en Punda y Otrobanda",
        "Cena en Mosa Caña",
      ],
    },
  },
  {
    name: "Alex",
    role: {
      nl: "Klusvader",
      en: "The handy dad",
      de: "Der Bastel-Papa",
      es: "El manitas de la casa",
    },
    bio: {
      nl: "Zodra Alex op Curaçao landt, beginnen de ideeën te borrelen. Je vindt hem met kwast, boormachine of rolmaat in de hand, altijd bezig de villa weer wat fijner te maken. En als het werk klaar is: een goed boek, een koud biertje en uit eten.",
      en: "The moment Alex lands on Curaçao, the ideas start bubbling up. You'll find him with a brush, drill or tape measure in hand, always making the villa a little nicer. And once the work is done: a good book, a cold beer and dinner out.",
      de: "Sobald Alex auf Curaçao landet, sprudeln die Ideen. Man findet ihn mit Pinsel, Bohrer oder Zollstock in der Hand, immer dabei, die Villa noch ein bisschen schöner zu machen. Und wenn die Arbeit getan ist: ein gutes Buch, ein kaltes Bier und essen gehen.",
      es: "En cuanto Alex aterriza en Curazao, las ideas empiezan a salir. Lo encuentras con pincel, taladro o metro en la mano, siempre dejando la villa un poquito mejor. Y cuando termina: un buen libro, una cerveza fría y a cenar fuera.",
    },
    favorites: {
      nl: [
        "Polar bij happy hour",
        "Lezen bij Koko's",
        "Diner bij De Heeren at Sea",
      ],
      en: [
        "Polar at happy hour",
        "Reading at Koko's",
        "Dinner at De Heeren at Sea",
      ],
      de: [
        "Polar zur Happy Hour",
        "Lesen bei Koko's",
        "Abendessen im De Heeren at Sea",
      ],
      es: [
        "Polar en el happy hour",
        "Leer en Koko's",
        "Cena en De Heeren at Sea",
      ],
    },
  },
  {
    name: "Lisa-Marie",
    role: {
      nl: "Op het eiland zelf",
      en: "On the island itself",
      de: "Vor Ort auf der Insel",
      es: "En la isla misma",
    },
    bio: {
      nl: "In 2022 liep ik stage op Curaçao en raakte opnieuw verliefd op de plek waar ik een deel van mijn jeugd doorbracht. Sinds 2024 woon ik er weer permanent. Het liefst ben ik in of op het water, duikend of freedivend tussen de riffen. Of nieuwe koffietentjes ontdekken.",
      en: "In 2022 I did an internship on Curaçao and fell in love all over again with the place where I spent part of my childhood. Since 2024 I've been living here permanently again. I'm happiest in or on the water, diving or freediving along the reefs. Or discovering new coffee spots.",
      de: "2022 habe ich auf Curaçao ein Praktikum gemacht und mich erneut in den Ort verliebt, an dem ich einen Teil meiner Kindheit verbracht habe. Seit 2024 lebe ich wieder fest hier. Am liebsten bin ich im oder auf dem Wasser, beim Tauchen oder Freediven an den Riffen. Oder ich entdecke neue Cafés.",
      es: "En 2022 hice una pasantía en Curazao y volví a enamorarme del lugar donde pasé parte de mi infancia. Desde 2024 vivo aquí de forma permanente otra vez. Lo que más disfruto es estar en el agua, buceando o haciendo apnea por los arrecifes. O descubrir cafeterías nuevas.",
    },
    favorites: {
      nl: [
        "Awa di Lamunchi bij Number Ten",
        "Duiken bij Oostpunt",
        "Diner bij Villa Vis",
      ],
      en: [
        "Awa di Lamunchi at Number Ten",
        "Diving at Oostpunt",
        "Dinner at Villa Vis",
      ],
      de: [
        "Awa di Lamunchi im Number Ten",
        "Tauchen bei Oostpunt",
        "Abendessen im Villa Vis",
      ],
      es: [
        "Awa di Lamunchi en Number Ten",
        "Buceo en Oostpunt",
        "Cena en Villa Vis",
      ],
    },
  },
  {
    name: "Sander",
    role: {
      nl: "Geboren op het eiland",
      en: "Born on the island",
      de: "Auf der Insel geboren",
      es: "Nacido en la isla",
    },
    bio: {
      nl: "Geboren op Curaçao, dat blijft een bijzonder gevoel. Mijn dag begint vaak actief: de Christoffelberg op of de zee in. Daarna een relaxte happy hour, muziek, zonsondergang en een koude Brasa. Voor mij is dat pure Curaçao.",
      en: "Born on Curaçao, that's still a special feeling. My day often starts active: up the Christoffelberg or into the sea. After that a relaxed happy hour, music, sunset and a cold Brasa. To me, that's Curaçao at its purest.",
      de: "Auf Curaçao geboren, das bleibt ein besonderes Gefühl. Mein Tag beginnt oft aktiv: rauf auf den Christoffelberg oder rein ins Meer. Danach entspannte Happy Hour, Musik, Sonnenuntergang und ein kaltes Brasa. Für mich ist das Curaçao pur.",
      es: "Haber nacido en Curazao sigue siendo algo especial. Mi día suele empezar activo: subir el Christoffelberg o meterme en el mar. Después un happy hour tranquilo, música, atardecer y una Brasa fría. Para mí, eso es Curazao en estado puro.",
    },
    favorites: {
      nl: [
        "Brasa bij Zanzibar Beach",
        "Chillen bij Kokomo Beach",
        "Diner bij De Gouverneur",
      ],
      en: [
        "Brasa at Zanzibar Beach",
        "Chilling at Kokomo Beach",
        "Dinner at De Gouverneur",
      ],
      de: [
        "Brasa am Zanzibar Beach",
        "Chillen am Kokomo Beach",
        "Abendessen im De Gouverneur",
      ],
      es: [
        "Brasa en Zanzibar Beach",
        "Relax en Kokomo Beach",
        "Cena en De Gouverneur",
      ],
    },
  },
];
