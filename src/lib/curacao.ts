import type { Locale } from "./i18n/locales";

type Localized<T> = Record<Locale, T>;

export type CuracaoStoryContent = {
  category: string;
  title: string;
  intro: string;
  body: string[];
  link?: { label: string; url: string };
};

export type CuracaoStory = {
  id: string;
  image: string;
  imageAlt: Localized<string>;
  by?: string;
  content: Localized<CuracaoStoryContent>;
};

export type CuracaoTipContent = {
  category: string;
  title: string;
  text: string;
};

export type CuracaoTip = {
  content: Localized<CuracaoTipContent>;
};

export const curacaoStories: CuracaoStory[] = [
  {
    id: "duiken",
    image: "/media/curacao/duiken-boot-onderwater-seanatives.webp",
    imageAlt: {
      nl: "Duikers stappen het water in vanaf de Sea Natives boot op Curaçao",
      en: "Divers entering the water from the Sea Natives boat on Curaçao",
      de: "Taucher steigen vom Sea Natives Boot ins Wasser bei Curaçao",
      es: "Buceadores entrando al agua desde el barco de Sea Natives en Curazao",
    },
    by: "Lisa-Marie",
    content: {
      nl: {
        category: "Onder water",
        title: "Duiken op Curaçao, de mooiste manier om het eiland te leren kennen",
        intro:
          "Het water op Curaçao is helder, warm en zit vol leven. Elke keer dat ik er in stap, voelt het alsof ik een nieuwe wereld binnenloop.",
        body: [
          "Mijn eerste duiken op het eiland maakte ik bij Scuba Do, een duikschool op Jan Thiel Beach. De sfeer is daar ontspannen, maar zodra je onder water bent begint het avontuur. Voor mij is duiken meer dan een sport. Het is vrijheid, verwondering en een beetje adrenaline tegelijk.",
          "Voor wie bij Villa Sandemarie verblijft is er een leuk extraatje: 10% korting op duiken bij Scuba Do, gewoon noemen bij je boeking.",
          "Mijn favoriete plek om te duiken is de oostkant van het eiland. De riffen zijn er ongerept en levendig, en vaak ben je er zo goed als alleen. Met Sea Natives ga ik regelmatig met de boot mee. Elke duik daar voelt als een klein avontuur.",
          "Ook kantduiken blijf ik heerlijk vinden. Een van mijn favorieten is Directors Bay. Vanaf het strand loop je zo het water in en bijna meteen begint het rif. Prachtig om te duiken, maar ook ideaal om te freediven of snorkelen. Het water is hier kraakhelder en je zwemt zo langs een mooie wand vol leven.",
          "Soms kom ik schildpadden tegen, soms zwem ik door scholen vissen, soms geniet ik gewoon van de stilte. Wat er ook gebeurt: zout in mijn haar en een glimlach op mijn gezicht, en ik weet weer waarom ik hier woon.",
        ],
        link: { label: "Meer over duiken bij Scuba Do", url: "https://scubadocuracao.com/" },
      },
      en: {
        category: "Under water",
        title: "Diving on Curaçao, the best way to get to know the island",
        intro:
          "The water on Curaçao is clear, warm and full of life. Every time I step in it feels like walking into a new world.",
        body: [
          "My first dives on the island were with Scuba Do, a dive school on Jan Thiel Beach. The vibe there is relaxed, but the moment you're underwater the adventure starts. For me diving is more than a sport. It's freedom, wonder and a bit of adrenaline at once.",
          "If you stay at Villa Sandemarie there's a small bonus: 10% off at Scuba Do, just mention it when you book.",
          "My favourite place to dive is the east side of the island. The reefs there are pristine and alive, and you often have them almost to yourself. I head out by boat with Sea Natives quite often. Every dive there feels like a little adventure.",
          "I also love shore dives. One of my favourites is Directors Bay. You walk in from the beach and the reef starts almost immediately. Beautiful for scuba, perfect for freediving or snorkelling too. The water is glass-clear and you're soon swimming along a wall full of life.",
          "Sometimes I bump into turtles, sometimes I swim through schools of fish, sometimes I just enjoy the silence. Whatever happens, salt in my hair and a smile on my face, and I'm reminded why I live here.",
        ],
        link: { label: "More about diving at Scuba Do", url: "https://scubadocuracao.com/" },
      },
      de: {
        category: "Unter Wasser",
        title: "Tauchen auf Curaçao, der schönste Weg, die Insel kennenzulernen",
        intro:
          "Das Wasser auf Curaçao ist klar, warm und voller Leben. Jedes Mal, wenn ich reingehe, fühlt es sich an, als würde ich eine neue Welt betreten.",
        body: [
          "Meine ersten Tauchgänge auf der Insel habe ich bei Scuba Do gemacht, einer Tauchschule am Jan Thiel Beach. Die Stimmung ist dort entspannt, aber sobald man unter Wasser ist beginnt das Abenteuer. Für mich ist Tauchen mehr als ein Sport. Es ist Freiheit, Staunen und ein bisschen Adrenalin zugleich.",
          "Für Gäste der Villa Sandemarie gibt es ein nettes Extra: 10% Rabatt auf Tauchgänge bei Scuba Do, einfach bei der Buchung erwähnen.",
          "Mein liebster Tauchplatz ist die Ostseite der Insel. Die Riffe sind dort unberührt und lebendig, und oft hat man sie fast für sich allein. Mit Sea Natives fahre ich regelmäßig mit dem Boot raus. Jeder Tauchgang dort fühlt sich an wie ein kleines Abenteuer.",
          "Auch Land- bzw. Küstentauchen liebe ich. Einer meiner Favoriten ist Directors Bay. Vom Strand läuft man direkt ins Wasser und das Riff beginnt fast sofort. Super zum Tauchen, aber auch perfekt zum Freediven oder Schnorcheln. Das Wasser ist glasklar und schon bald gleitet man an einer Wand voller Leben entlang.",
          "Manchmal treffe ich Schildkröten, manchmal schwimme ich durch Fischschwärme, manchmal genieße ich einfach die Stille. Was auch passiert: Salz im Haar, Lächeln im Gesicht, und ich weiß wieder, warum ich hier lebe.",
        ],
        link: { label: "Mehr über Tauchen bei Scuba Do", url: "https://scubadocuracao.com/" },
      },
      es: {
        category: "Bajo el agua",
        title: "Buceo en Curazao, la mejor manera de conocer la isla",
        intro:
          "El agua en Curazao es transparente, cálida y está llena de vida. Cada vez que me meto siento que entro en un mundo nuevo.",
        body: [
          "Mis primeras inmersiones en la isla las hice con Scuba Do, un centro de buceo en Jan Thiel Beach. El ambiente es relajado, pero la aventura empieza en el momento en que estás bajo el agua. Para mí bucear es más que un deporte. Es libertad, asombro y algo de adrenalina a la vez.",
          "Si te alojas en Villa Sandemarie hay un pequeño plus: 10% de descuento en Scuba Do, basta con mencionarlo al reservar.",
          "Mi sitio favorito para bucear es el lado este de la isla. Los arrecifes están vírgenes y llenos de vida, y muchas veces los tienes casi para ti solo. Con Sea Natives salgo a menudo en barco. Cada inmersión allí se siente como una pequeña aventura.",
          "También me encantan las inmersiones desde costa. Una de mis favoritas es Directors Bay. Desde la playa entras al agua y el arrecife empieza casi enseguida. Precioso para bucear, perfecto también para apnea o snorkel. El agua es cristalina y enseguida nadas junto a una pared llena de vida.",
          "A veces me cruzo con tortugas, a veces nado entre bancos de peces, a veces solo disfruto del silencio. Pase lo que pase, sal en el pelo, sonrisa en la cara, y recuerdo por qué vivo aquí.",
        ],
        link: { label: "Más sobre bucear con Scuba Do", url: "https://scubadocuracao.com/" },
      },
    },
  },
  {
    id: "stranden",
    image: "/media/curacao/playa-kenepa-panorama.webp",
    imageAlt: {
      nl: "Panorama van Playa Kenepa op Curaçao met turquoise zee",
      en: "Panorama of Playa Kenepa on Curaçao with turquoise sea",
      de: "Panorama von Playa Kenepa auf Curaçao mit türkisem Meer",
      es: "Panorama de Playa Kenepa en Curazao con mar turquesa",
    },
    content: {
      nl: {
        category: "Stranden",
        title: "Onze favoriete baaitjes en stranden",
        intro:
          "Vanuit Cas Grandi sta je binnen een paar minuten op Jan Thiel of Mambo, maar de mooiste baaitjes liggen iets verder.",
        body: [
          "Voor een lange luie dag gaan we vaak naar Cas Abao of Playa Kenepa. Allebei klassiekers, allebei terecht: kraakhelder water, witte stranden en genoeg plek. Ga vroeg, dan heb je het mooie zicht en de palmplek voor jezelf.",
          "Voor snorkelen zonder gedoe is Playa Piskado fijn: vanaf de kant zwem je tussen de zeeschildpadden. Een van die plekken die je altijd wel onthoudt.",
          "Dichterbij huis: Jan Thiel voor strandbedjes en een drankje, Cas Grandi voor de zonsondergang en een stille avondduik bij Caracasbaai voor wie van een avontuurtje houdt.",
        ],
      },
      en: {
        category: "Beaches",
        title: "Our favourite bays and beaches",
        intro:
          "From Cas Grandi you're at Jan Thiel or Mambo within minutes, but the best little bays sit slightly further out.",
        body: [
          "For a long lazy day we often head to Cas Abao or Playa Kenepa. Both classics, both deservedly so: glass-clear water, white sand and enough space. Go early and you'll have the view and a palm spot to yourself.",
          "For easy snorkelling, Playa Piskado is great: you swim with the sea turtles straight from the beach. One of those spots you always remember.",
          "Closer to home: Jan Thiel for sun beds and a drink, Cas Grandi for the sunset, and a quiet evening dive at Caracasbaai for anyone after a small adventure.",
        ],
      },
      de: {
        category: "Strände",
        title: "Unsere liebsten Buchten und Strände",
        intro:
          "Von Cas Grandi seid ihr in ein paar Minuten am Jan Thiel oder Mambo, aber die schönsten Buchten liegen etwas weiter draußen.",
        body: [
          "Für einen langen, faulen Tag fahren wir oft nach Cas Abao oder Playa Kenepa. Beides Klassiker und beides zu Recht: glasklares Wasser, weißer Sand und genug Platz. Früh hin, dann habt ihr Aussicht und Palmenplatz für euch.",
          "Zum entspannten Schnorcheln ist Playa Piskado super: vom Strand aus schwimmt ihr direkt mit den Meeresschildkröten. Einer dieser Orte, an die man sich immer erinnert.",
          "Näher dran: Jan Thiel für Liegen und einen Drink, Cas Grandi für den Sonnenuntergang und ein ruhiger Abendtauchgang in Caracasbaai für alle, die ein kleines Abenteuer mögen.",
        ],
      },
      es: {
        category: "Playas",
        title: "Nuestras calas y playas favoritas",
        intro:
          "Desde Cas Grandi llegáis en pocos minutos a Jan Thiel o Mambo, pero las mejores calas están un poco más lejos.",
        body: [
          "Para un día largo y tranquilo solemos ir a Cas Abao o Playa Kenepa. Ambas son clásicos, y con razón: agua cristalina, arena blanca y sitio de sobra. Id temprano y tendréis las vistas y el sitio bajo la palmera para vosotros.",
          "Para snorkel sin complicaciones, Playa Piskado es genial: desde la orilla nadáis junto a las tortugas marinas. Uno de esos sitios que se quedan en la memoria.",
          "Más cerca de casa: Jan Thiel para tumbonas y una copa, Cas Grandi para el atardecer, y una inmersión nocturna tranquila en Caracasbaai para quien busque pequeña aventura.",
        ],
      },
    },
  },
  {
    id: "willemstad",
    image: "/media/curacao/willemstad-handelskade-gekleurde-gevels.webp",
    imageAlt: {
      nl: "Gekleurde gevels van Willemstad aan de Handelskade",
      en: "Coloured façades of Willemstad along the Handelskade",
      de: "Bunte Fassaden von Willemstad an der Handelskade",
      es: "Fachadas de colores de Willemstad en la Handelskade",
    },
    by: "Margriet",
    content: {
      nl: {
        category: "Stad",
        title: "Een ochtend door Willemstad",
        intro:
          "De gekleurde gevels, de Pontjesbrug, de geur van vers brood. Willemstad voelt voor onze hele familie altijd als even thuiskomen.",
        body: [
          "We beginnen meestal in Pietermaai voor koffie, lopen via Punda over de Handelskade en steken de zwaaibrug over naar Otrobanda. De boetiekjes en kleine galerietjes zijn de moeite waard, niet voor souvenirs maar voor de sfeer.",
          "Lunch bij Mosa Caña of een vers broodje en een Antilliaanse koffie. Wie nog energie over heeft loopt door naar het Curaçao Museum of de Floating Market. Eindigen doen we met een koud drankje aan het water, kijken hoe de Pontjesbrug opengaat voor een binnenvarend schip.",
        ],
      },
      en: {
        category: "City",
        title: "A morning through Willemstad",
        intro:
          "The painted façades, the Pontoon Bridge, the smell of fresh bread. Willemstad always feels a bit like coming home for our whole family.",
        body: [
          "We usually start in Pietermaai for coffee, walk through Punda along the Handelskade and cross the swing bridge to Otrobanda. The little boutiques and galleries are worth a stop, not for souvenirs but for the atmosphere.",
          "Lunch at Mosa Caña or a fresh sandwich with an Antillean coffee. If you still have energy, walk on to the Curaçao Museum or the Floating Market. We end with a cold drink at the water, watching the Pontoon Bridge swing open for a passing ship.",
        ],
      },
      de: {
        category: "Stadt",
        title: "Ein Vormittag in Willemstad",
        intro:
          "Die bunten Fassaden, die Pontonbrücke, der Duft von frischem Brot. Willemstad fühlt sich für uns als Familie immer ein bisschen wie nach Hause kommen an.",
        body: [
          "Wir starten meistens in Pietermaai mit einem Kaffee, laufen durch Punda über die Handelskade und gehen über die Drehbrücke nach Otrobanda. Die kleinen Boutiquen und Galerien lohnen sich, nicht wegen der Souvenirs, sondern wegen der Atmosphäre.",
          "Mittagessen bei Mosa Caña oder ein frisches Sandwich mit einem antillianischen Kaffee. Wer noch Energie hat, läuft weiter zum Curaçao Museum oder zum schwimmenden Markt. Wir lassen den Vormittag mit einem kühlen Drink am Wasser ausklingen und schauen zu, wie die Pontonbrücke für ein einlaufendes Schiff aufschwingt.",
        ],
      },
      es: {
        category: "Ciudad",
        title: "Una mañana por Willemstad",
        intro:
          "Las fachadas de colores, el Puente de los Pontones, el olor a pan recién hecho. A toda nuestra familia Willemstad siempre le sabe un poco a volver a casa.",
        body: [
          "Solemos empezar en Pietermaai con un café, atravesamos Punda por la Handelskade y cruzamos el puente giratorio hasta Otrobanda. Las pequeñas tiendas y galerías merecen una parada, no por los souvenirs sino por el ambiente.",
          "Comemos en Mosa Caña o un bocadillo recién hecho con un café antillano. Si aún os queda energía, seguid hasta el Museo de Curazao o el Floating Market. Cerramos la mañana con una bebida fría junto al agua, viendo cómo el puente se abre para dejar pasar un barco.",
        ],
      },
    },
  },
  {
    id: "natuur",
    image: "/media/curacao/klein-curacao-vuurtoren-pad.webp",
    imageAlt: {
      nl: "Vuurtoren van Klein Curaçao met pad",
      en: "Klein Curaçao lighthouse with path",
      de: "Leuchtturm von Klein Curaçao mit Pfad",
      es: "Faro de Klein Curazao con sendero",
    },
    content: {
      nl: {
        category: "Natuur",
        title: "Wandelen, vuurtorens en flamingo's",
        intro:
          "Curaçao is meer dan strand. Wie het cactuslandschap induikt komt vuurtorens, salina's en flamingo's tegen.",
        body: [
          "De Christoffelberg is een serieus klimmetje, maar het uitzicht boven is overweldigend. Liever rustig: het Shete Boka park heeft prachtige paadjes langs de ruige noordkust, perfect voor een ochtendwandeling.",
          "De vuurtoren bij Klein Curaçao is een dagtripje op zich. En als je vroeg in de ochtend langs de salina's bij Sint Willibrordus rijdt, sta je oog in oog met flamingo's. Geen attractie, gewoon ze zelf in het wild.",
        ],
      },
      en: {
        category: "Nature",
        title: "Hikes, lighthouses and flamingos",
        intro:
          "Curaçao is more than beach. Step into the cactus landscape and you'll find lighthouses, salt pans and flamingos.",
        body: [
          "The Christoffel mountain is a proper climb, but the view at the top is worth every step. Prefer easy: Shete Boka park has lovely paths along the rugged north coast, perfect for a morning walk.",
          "The lighthouse on Klein Curaçao is a day trip in itself. And if you drive past the salt flats at Sint Willibrordus early in the morning, you'll be face to face with flamingos. Not a show, just them in the wild.",
        ],
      },
      de: {
        category: "Natur",
        title: "Wanderungen, Leuchttürme und Flamingos",
        intro:
          "Curaçao ist mehr als Strand. Wer ins Kakteenland eintaucht, findet Leuchttürme, Salinen und Flamingos.",
        body: [
          "Der Christoffelberg ist ein ordentlicher Aufstieg, aber die Aussicht oben ist jeden Schritt wert. Lieber gemütlich: der Shete Boka Park hat schöne Pfade entlang der rauen Nordküste, perfekt für eine Morgenwanderung.",
          "Der Leuchtturm auf Klein Curaçao ist ein eigener Tagesausflug. Und wer am frühen Morgen an den Salinen von Sint Willibrordus vorbeifährt, steht Aug in Aug mit Flamingos. Keine Attraktion, einfach in freier Wildbahn.",
        ],
      },
      es: {
        category: "Naturaleza",
        title: "Caminatas, faros y flamencos",
        intro:
          "Curazao es mucho más que playa. Si te adentras en el paisaje de cactus encontrarás faros, salinas y flamencos.",
        body: [
          "El monte Christoffel es una subida en serio, pero la vista desde arriba lo compensa. Si prefieres algo tranquilo, el parque Shete Boka tiene preciosos senderos por la costa norte, perfectos para un paseo matinal.",
          "El faro de Klein Curazao da para una excursión de día entero. Y si pasas temprano por las salinas de Sint Willibrordus, te encuentras cara a cara con flamencos. No es atracción, son ellos en libertad.",
        ],
      },
    },
  },
  {
    id: "eten",
    image: "/media/curacao/muurschildering-smoothies-playa-kanoa.webp",
    imageAlt: {
      nl: "Kleurrijke muurschildering 'Curaçao Playa Kanoa Smoothies'",
      en: "Colourful 'Curaçao Playa Kanoa Smoothies' wall mural",
      de: "Buntes Wandbild 'Curaçao Playa Kanoa Smoothies'",
      es: "Mural colorido 'Curaçao Playa Kanoa Smoothies'",
    },
    content: {
      nl: {
        category: "Eten en drinken",
        title: "Waar we zelf eten",
        intro:
          "Curaçao zit vol verrassend goede tentjes. Onze vaste plekken, van koffie en lunch tot diner en happy hour.",
        body: [
          "Ochtend en lunch: koffie en zoetigheid bij Number Ten, een frozen cappuccino bij Chill Beach Bar of een ontbijt bij Koko's. Voor lunch met uitzicht doen we Mosa Caña of De Heeren at Sea.",
          "Diner: Villa Vis voor verse vis, De Gouverneur voor een speciale avond aan het water in Punda, en Mosa Caña als we lekker willen eten zonder gedoe.",
          "Happy hour is heilig. Een Polar of een ijskoude Brasa op het strand, voeten in het zand, zonsondergang. Onze favorieten: Zanzibar Beach, Kokomo Beach en de bar bij Jan Thiel.",
        ],
      },
      en: {
        category: "Food & drink",
        title: "Where we eat ourselves",
        intro:
          "Curaçao is full of surprisingly good little places. Our regulars, from coffee and lunch to dinner and happy hour.",
        body: [
          "Mornings and lunch: coffee and something sweet at Number Ten, a frozen cappuccino at Chill Beach Bar, or breakfast at Koko's. For a lunch with a view it's Mosa Caña or De Heeren at Sea.",
          "Dinner: Villa Vis for fresh fish, De Gouverneur for a special evening on the water in Punda, and Mosa Caña when we just want to eat well, no fuss.",
          "Happy hour is sacred. A Polar or an ice-cold Brasa on the beach, feet in the sand, sunset. Our favourites: Zanzibar Beach, Kokomo Beach and the bar at Jan Thiel.",
        ],
      },
      de: {
        category: "Essen und Trinken",
        title: "Wo wir selbst essen",
        intro:
          "Curaçao steckt voller überraschend guter Lokale. Unsere Stammplätze, von Kaffee und Mittagessen bis Dinner und Happy Hour.",
        body: [
          "Morgens und mittags: Kaffee und etwas Süßes bei Number Ten, ein Frozen Cappuccino in der Chill Beach Bar, oder Frühstück bei Koko's. Für ein Mittagessen mit Blick gehen wir zu Mosa Caña oder De Heeren at Sea.",
          "Abendessen: Villa Vis für frischen Fisch, De Gouverneur für einen besonderen Abend am Wasser in Punda, und Mosa Caña, wenn wir einfach gut essen wollen, ohne Drumherum.",
          "Happy Hour ist heilig. Ein Polar oder ein eiskalter Brasa am Strand, die Füße im Sand, Sonnenuntergang. Unsere Favoriten: Zanzibar Beach, Kokomo Beach und die Bar am Jan Thiel.",
        ],
      },
      es: {
        category: "Comer y beber",
        title: "Dónde comemos nosotros",
        intro:
          "Curazao está lleno de sitios sorprendentemente buenos. Nuestros habituales, del café al almuerzo, de la cena al happy hour.",
        body: [
          "Mañana y almuerzo: café y algo dulce en Number Ten, un frozen cappuccino en Chill Beach Bar, o desayuno en Koko's. Para comer con vistas vamos a Mosa Caña o De Heeren at Sea.",
          "Cena: Villa Vis para pescado fresco, De Gouverneur para una noche especial junto al agua en Punda, y Mosa Caña cuando solo queremos comer bien, sin complicaciones.",
          "El happy hour es sagrado. Una Polar o una Brasa bien fría en la playa, los pies en la arena, atardecer. Nuestros favoritos: Zanzibar Beach, Kokomo Beach y el bar de Jan Thiel.",
        ],
      },
    },
  },
];

export const curacaoQuickTips: CuracaoTip[] = [
  {
    content: {
      nl: { category: "Praktisch", title: "Huur een auto", text: "Een eigen auto maakt het eiland kleiner en de baaitjes bereikbaar. Bij de villa is een eigen parkeerplek." },
      en: { category: "Practical", title: "Rent a car", text: "Your own car shrinks the island and makes the bays reachable. The villa has its own parking spot." },
      de: { category: "Praktisch", title: "Mietet ein Auto", text: "Ein eigenes Auto macht die Insel kleiner und die Buchten erreichbar. An der Villa gibt es einen eigenen Parkplatz." },
      es: { category: "Práctico", title: "Alquila un coche", text: "Un coche propio hace la isla más pequeña y las calas accesibles. La villa tiene plaza de aparcamiento." },
    },
  },
  {
    content: {
      nl: { category: "Praktisch", title: "Geld en betalen", text: "Bijna overal kun je pinnen en met creditcard betalen. Voor lokale snackjes is wat contant geld (NAf of USD) handig." },
      en: { category: "Practical", title: "Money and payment", text: "You can use card almost everywhere. A bit of cash (NAf or USD) is handy for local snacks." },
      de: { category: "Praktisch", title: "Geld und Bezahlen", text: "Fast überall könnt ihr mit Karte bezahlen. Etwas Bargeld (NAf oder USD) ist für lokale Snacks nützlich." },
      es: { category: "Práctico", title: "Dinero y pagos", text: "Se paga con tarjeta casi en todas partes. Algo de efectivo (NAf o USD) viene bien para los snacks locales." },
    },
  },
  {
    content: {
      nl: { category: "Praktisch", title: "Wanneer te gaan", text: "Curaçao is jaarrond warm en droog. December tot april is hoogseizoen, mei en juni zijn heerlijk rustig." },
      en: { category: "Practical", title: "When to go", text: "Curaçao is warm and dry year-round. December to April is high season; May and June are wonderfully quiet." },
      de: { category: "Praktisch", title: "Wann es geht", text: "Curaçao ist ganzjährig warm und trocken. Dezember bis April ist Hochsaison, Mai und Juni sind herrlich ruhig." },
      es: { category: "Práctico", title: "Cuándo ir", text: "Curazao es cálido y seco todo el año. De diciembre a abril es temporada alta; mayo y junio son maravillosamente tranquilos." },
    },
  },
  {
    content: {
      nl: { category: "Veilig", title: "Zwemmen en stroming", text: "Het meeste water is rustig, maar bij Boka's en de noordkust kan stroming staan. Vraag het ons gewoon." },
      en: { category: "Safe", title: "Swimming and currents", text: "Most water is calm, but at the Boka's and along the north coast there can be current. Just ask us." },
      de: { category: "Sicher", title: "Schwimmen und Strömung", text: "Das meiste Wasser ist ruhig, aber bei den Bokas und an der Nordküste kann es Strömung geben. Fragt uns einfach." },
      es: { category: "Seguro", title: "Nadar y corrientes", text: "La mayor parte del agua está tranquila, pero en las Bokas y en la costa norte puede haber corriente. Preguntadnos sin problema." },
    },
  },
];

export function getStory(story: CuracaoStory, locale: Locale): CuracaoStoryContent {
  return story.content[locale] ?? story.content.en;
}

export function getStoryAlt(story: CuracaoStory, locale: Locale): string {
  return story.imageAlt[locale] ?? story.imageAlt.en;
}

export function getTip(tip: CuracaoTip, locale: Locale): CuracaoTipContent {
  return tip.content[locale] ?? tip.content.en;
}
