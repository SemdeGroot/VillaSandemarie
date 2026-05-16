import type { Locale } from "@/lib/i18n/locales";

export const familyIntro: Record<Locale, string> = {
  nl: `Soms kom je op een plek waar alles klopt. Voor ons is die plek Curaçao. Ruim twintig jaar geleden werd onze familie verliefd op het eiland. We woonden er acht jaar lang, bouwden hier onze vakantievilla en creëerden een thuis waar zon, zee en samenzijn centraal staan. Inmiddels wonen we weer in Nederland, maar Curaçao is nooit uit ons hart verdwenen.

Elke zomer keren we met de hele familie terug naar “ons eiland” – naar de plek waar we kunnen ontspannen, ontdekken en herinneringen maken. Inmiddels woont Lisa-Marie weer op Curaçao en is het eiland meer dan ooit onderdeel van ons dagelijks leven.

Onze villa is gebouwd en ingericht zoals wij zelf graag vakantie vieren: comfortabel, ontspannen en praktisch. Boxspringbedden, airco in elke slaapkamer, snelle wifi en een goed uitgeruste keuken zijn voor ons vanzelfsprekend. We wilden een plek creëren waar gasten zich meteen thuis voelen, net zoals wij dat doen zodra we hier voet op de stoep zetten.`,
  en: `Sometimes you come to a place where everything is right. For us, that place is Curaçao. More than twenty years ago, our family fell in love with the island. We lived there for eight years, built our holiday villa here and created a home where sun, sea and togetherness are central. We now live in the Netherlands again, but Curaçao has never left our hearts.

Every summer we return with the whole family to “our island” – to the place where we can relax, explore and make memories. Lisa-Marie now lives on Curaçao again and the island is more than ever part of our daily life.

Our villa is built and furnished exactly the way we like to vacation ourselves: comfortable, relaxed and practical. Boxspring beds, AC in every bedroom, fast wifi and a well-equipped kitchen are a given for us. We wanted to create a place where guests feel right at home – just as we do as soon as we step onto the pavement here.`,
  de: `Manchmal kommt man an einen Ort, an dem einfach alles stimmt. Für uns ist dieser Ort Curaçao. Vor mehr als zwanzig Jahren hat sich unsere Familie in die Insel verliebt. Wir haben dort acht Jahre lang gelebt, unsere Ferienvilla hier gebaut und ein Zuhause geschaffen, in dem Sonne, Meer und das Zusammensein im Mittelpunkt stehen. Inzwischen leben wir wieder in den Niederlanden, aber Curaçao ist nie aus unseren Herzen verschwunden.

Jeden Sommer kehren wir mit der ganzen Familie auf „unsere Insel“ zurück – an den Ort, an dem wir uns entspannen, Neues entdecken und Erinnerungen sammeln können. Inzwischen lebt Lisa-Marie wieder auf Curaçao, und die Insel ist mehr denn je Teil unseres täglichen Lebens.

Unsere Villa ist so gebaut und eingerichtet, wie wir selbst gerne Urlaub machen: komfortabel, entspannt und praktisch. Boxspringbetten, Klimaanlage in jedem Schlafzimmer, schnelles WLAN und eine gut ausgestattete Küche sind für uns selbstverständlich. Wir wollten einen Ort schaffen, an dem sich die Gäste sofort wie zu Hause fühlen – genau wie wir, sobald wir hier den Fuß auf den Gehweg setzen.`,
  es: `A veces llegas a un lugar donde todo encaja. Para nosotros, ese lugar es Curazao. Hace más de veinte años, nuestra familia se enamoró de la isla. Vivimos allí durante ocho años, construimos nuestra villa de vacaciones aquí y creamos un hogar donde el sol, el mar y la convivencia son lo principal. Ahora vivimos de nuevo en los Países Bajos, pero Curazao nunca ha salido de nuestros corazones.

Cada verano regresamos con toda la familia a “nuestra isla”, al lugar donde podemos relajarnos, explorar y crear recuerdos. Actualmente, Lisa-Marie vive de nuevo en Curazao y la isla forma parte de nuestra vida diaria más que nunca.

Nuestra villa está construida y amueblada tal como nos gusta pasar las vacaciones a nosotros mismos: cómoda, relajada y práctica. Camas boxspring, aire acondicionado en cada habitación, wifi rápido y una cocina bien equipada son algo natural para nosotros. Queríamos crear un lugar donde los huéspedes se sientan como en casa, tal como nos sentimos nosotros en cuanto ponemos un pie en la acera.`,
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
      nl: "Voor mij betekent Curaçao ultiem ontspannen. Geef me een fijn strandbedje, een goed boek en de zachte bries van de zee en ik ben gelukkig. Ik hou van de charme van Willemstad en struin graag door de leuke boetiekjes. Mijn ideale dag op het eiland bestaat uit strand, lezen, puzzelen en afsluiten met een lekker diner bij een van onze favoriete restaurants.",
      en: "For me, Curaçao means ultimate relaxation. Give me a comfortable beach bed, a good book and the soft sea breeze and I'm happy. I love the charm of Willemstad and enjoy browsing the lovely boutiques. My ideal day on the island consists of the beach, reading, puzzling and ending with a delicious dinner at one of our favourite restaurants.",
      de: "Für mich bedeutet Curaçao ultimative Entspannung. Geben Sie mir eine bequeme Strandliege, ein gutes Buch und die sanfte Meeresbrise, und ich bin glücklich. Ich liebe den Charme von Willemstad und stöbere gerne durch die hübschen Boutiquen. Mein idealer Tag auf der Insel besteht aus Strand, Lesen, Puzzeln und einem leckeren Abendessen in einem unserer Lieblingsrestaurants zum Abschluss.",
      es: "Para mí, Curazao significa relajación total. Dame una buena tumbona, un buen libro y la suave brisa del mar y soy feliz. Me encanta el encanto de Willemstad y disfruto paseando por las bonitas boutiques. Mi día ideal en la isla consiste en playa, lectura, rompecabezas y terminar con una deliciosa cena en uno de nuestros restaurantes favoritos.",
    },
    favorites: {
      nl: [
        "Frozen cappuccino bij Chill Beach Bar & Grill",
        "Struinen langs boetiekjes in Punda & Otrobanda",
        "Uiteten bij Mosa Caña",
      ],
      en: [
        "Frozen cappuccino at Chill Beach Bar & Grill",
        "Strolling past boutiques in Punda & Otrobanda",
        "Dinner at Mosa Caña",
      ],
      de: [
        "Frozen Cappuccino in der Chill Beach Bar & Grill",
        "Stöbern in Boutiquen in Punda & Otrobanda",
        "Abendessen im Mosa Caña",
      ],
      es: [
        "Cappuccino helado en Chill Beach Bar & Grill",
        "Pasear por las boutiques de Punda y Otrobanda",
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
      nl: "Alex is onze klussende vader: zodra hij op Curaçao landt, borrelen er nieuwe ideeën op. Je vindt hem meestal met een kwast, boormachine of rolmaat in zijn hand. Hij geniet ervan om de villa steeds weer een beetje mooier en comfortabeler te maken. Maar zodra het kluswerk erop zit, is het tijd voor ontspanning: een goed boek, een koud biertje bij happy hour of een gezellig diner bij een van zijn favoriete restaurants.",
      en: "Alex is our handy dad: as soon as he lands on Curaçao, new ideas bubble up. You'll usually find him with a brush, drill or measuring tape in his hand. He enjoys making the villa a little more beautiful and comfortable time and again. But as soon as the DIY work is done, it's time for relaxation: a good book, a cold beer at happy hour or a cozy dinner at one of his favourite restaurants.",
      de: "Alex ist unser heimwerkelnder Vater – sobald er auf Curaçao landet, sprudeln neue Ideen hervor. Meistens findet man ihn mit Pinsel, Bohrmaschine oder Maßband in der Hand. Er genießt es, die Villa immer wieder ein Stück schöner und komfortabler zu machen. Aber sobald die handwerkliche Arbeit getan ist, ist Zeit für Entspannung: ein gutes Buch, ein kaltes Bier zur Happy Hour oder ein gemütliches Abendessen in einem seiner Lieblingsrestaurants.",
      es: "Alex es nuestro padre manitas: en cuanto aterriza en Curazao, le surgen nuevas ideas. Normalmente lo encontrarás con un pincel, un taladro o una cinta métrica en la mano. Disfruta haciendo la villa cada vez un poco más bonita y cómoda. Pero en cuanto termina el trabajo de bricolaje, llega el momento de relajarse: un buen libro, una cerveza fría en el happy hour o una cena acogedora en uno de sus restaurantes favoritos.",
    },
    favorites: {
      nl: [
        "Polar bij happy hour",
        "Boek lezen bij Koko’s",
        "Uiteten bij de Heeren at Sea",
      ],
      en: [
        "Polar at happy hour",
        "Reading a book at Koko’s",
        "Dinner at De Heeren at Sea",
      ],
      de: [
        "Polar zur Happy Hour",
        "Buch lesen im Koko’s",
        "Abendessen im De Heeren at Sea",
      ],
      es: [
        "Polar en el happy hour",
        "Leer un libro en Koko’s",
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
      nl: "In 2022 liep ik stage op Curaçao en raakte ik opnieuw verliefd op het eiland waar ik ooit een deel van mijn jeugd doorbracht. Na mijn studie ben ik in 2024 definitief terugverhuisd, dit keer niet voor vakantie, maar om hier echt mijn leven op te bouwen. Je vindt me het liefst in of op het water: duikend of freedivend tussen de kleurrijke riffen. Daarnaast ben ik gek op gezellige koffietentjes en nieuwe hotspots ontdekken.",
      en: "In 2022 I did an internship on Curaçao and fell in love all over again with the island where I once spent part of my youth. After my studies, I moved back permanently in 2024. Not for a holiday, but to truly build my life here. You'll most often find me in or on the water: diving or freediving among the colourful reefs. In addition, I love cozy coffee shops and discovering new hotspots.",
      de: "2022 habe ich ein Praktikum auf Curaçao gemacht und mich erneut in die Insel verliebt, auf der ich einen Teil meiner Kindheit verbracht habe. Nach meinem Studium bin ich 2024 endgültig zurückgezogen – diesmal nicht für den Urlaub, sondern um mir hier wirklich mein Leben aufzubauen. Am liebsten bin ich im oder auf dem Wasser: beim Tauchen oder Freitauchen zwischen den farbenfrohen Riffen. Außerdem liebe ich gemütliche Cafés und das Entdecken neuer Hotspots.",
      es: "En 2022 hice unas prácticas en Curazao y me volví a enamorar de la isla donde pasé parte de mi juventud. Después de mis estudios, regresé definitivamente en 2024, esta vez no por vacaciones, sino para construir realmente mi vida aquí. Lo que más me gusta es estar en el agua: buceando o haciendo apnea entre los coloridos arrecifes. Además, me encantan las cafeterías acogedoras y descubrir nuevos lugares de moda.",
    },
    favorites: {
      nl: [
        "Awa di Lamunchi bij Number Ten Curacao",
        "Duiken bij Oostpunt",
        "Uiteten bij Villa Vis",
      ],
      en: [
        "Awa di Lamunchi at Number Ten Curacao",
        "Diving at East Point",
        "Dinner at Villa Vis",
      ],
      de: [
        "Awa di Lamunchi im Number Ten Curacao",
        "Tauchen am East Point",
        "Abendessen im Villa Vis",
      ],
      es: [
        "Awa di Lamunchi en Number Ten Curacao",
        "Buceo en East Point",
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
      nl: "Ik ben geboren op Curaçao en dat blijft een bijzonder gevoel. Wanneer ik terug ben, begint mijn dag vaak met iets actiefs: de Christoffelberg beklimmen of zwemmen in zee. Maar ik geniet net zo veel van de relaxte happy hour sfeer op het eiland. De combinatie van muziek, zonsondergang en een koude Brasa is voor mij pure Curaçao-vibe.",
      en: "I was born on Curaçao and that remains a special feeling. Whenever I'm back, my day often starts with something active: climbing Mount Christoffel or swimming in the sea. But I enjoy the relaxed happy hour atmosphere on the island just as much. The combination of music, sunset and a cold Brasa is pure Curaçao vibe for me.",
      de: "Ich wurde auf Curaçao geboren, und das ist immer noch ein besonderes Gefühl. Wenn ich zurück bin, beginnt mein Tag oft mit etwas Aktivem – den Christoffelberg besteigen oder im Meer schwimmen. Aber ich genieße die entspannte Happy-Hour-Atmosphäre auf der Insel genauso sehr. Die Kombination aus Musik, Sonnenuntergang und einem kühlen Brasa ist für mich das pure Curaçao-Gefühl.",
      es: "Nací en Curazao y eso sigue siendo un sentimiento especial. Cuando vuelvo, mi día suele empezar con algo activo: subir al monte Christoffel o nadar en el mar. Pero disfruto igual del ambiente relajado del happy hour en la isla. La combinación de música, atardecer y una Brasa fría es para mí la pura esencia de Curazao.",
    },
    favorites: {
      nl: [
        "Brasa bij Zanzibar Beach",
        "Chillen bij Kokomo Beach",
        "Uiteten bij de Gouverneur",
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
