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
  imageFrameClassName?: string;
  imageClassName?: string;
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
    image: "/media/curacao/duiken-diver-blauw.webp",
    imageFrameClassName: "aspect-[4/5]",
    imageAlt: {
      nl: "Duiker in helder blauw water bij Curaçao",
      en: "Diver in clear blue water near Curaçao",
      de: "Taucher in klarem blauem Wasser bei Curaçao",
      es: "Buceador en agua azul clara cerca de Curazao",
    },
    by: "Lisa-Marie",
    content: {
      nl: {
        category: "Onder water",
        title: "Duiken op Curaçao, de mooiste manier om het eiland te leren kennen",
        intro:
          "Het water op Curaçao is helder en warm. Elke keer dat ik erin ga, voelt het alsof ik even alles achter me laat.",
        body: [
          "Mijn eerste duiken op het eiland maakte ik bij Scuba Do, op Jan Thiel Beach. De sfeer daar is ontspannen, maar zodra je onder water bent begint het avontuur. Een leuk extraatje is dat je, als je bij Villa Sandemarie verblijft, 10% korting krijgt op je duiken bij Scuba Do – even vermelden bij je boeking.",
          "Mijn favoriete duikplekken liggen aan de oostkant van het eiland. De riffen zijn er ongerept en vaak is het er heerlijk rustig. Als ik die kant op ga om te duiken, ga ik het liefst met Sea Natives mee – zij brengen je met de boot naar de mooiste duikspots.",
          "Ook kantduiken blijft iets wat ik graag doe. Directors Bay is zo’n plek waar je zo het water in loopt en meteen bij het rif bent. Mooi om te duiken, maar ook perfect om te snorkelen of freediven.",
          "Soms kom ik schildpadden tegen, soms zwem ik tussen scholen vissen en soms geniet ik gewoon van de stilte. Maar elke keer kom ik boven met zout in mijn haar en een glimlach op mijn gezicht – en weet ik weer waarom ik hier woon.",
        ],
        link: { label: "Meer over duiken bij Scuba Do", url: "https://scubadocuracao.com/" },
      },
      en: {
        category: "Under water",
        title: "Diving on Curaçao, the best way to get to know the island",
        intro:
          "The water on Curaçao is clear and warm. Every time I get in, it feels like I'm leaving everything behind for a moment.",
        body: [
          "My first dives on the island were with Scuba Do, at Jan Thiel Beach. The atmosphere there is relaxed, but as soon as you're underwater the adventure begins. A nice extra is that if you stay at Villa Sandemarie, you get a 10% discount on your dives at Scuba Do – just mention it when booking.",
          "My favourite dive spots are on the east side of the island. The reefs there are pristine and it's often wonderfully quiet. When I head that way to dive, I prefer going with Sea Natives – they take you by boat to the most beautiful dive spots.",
          "Shore diving also remains something I love to do. Directors Bay is one of those places where you walk straight into the water and are immediately at the reef. Beautiful for diving, but also perfect for snorkelling or freediving.",
          "Sometimes I encounter turtles, sometimes I swim among schools of fish and sometimes I just enjoy the silence. But every time I come up with salt in my hair and a smile on my face – and I know again why I live here.",
        ],
        link: { label: "More about diving at Scuba Do", url: "https://scubadocuracao.com/" },
      },
      de: {
        category: "Unter Wasser",
        title: "Tauchen auf Curaçao, der schönste Weg, die Insel kennenzulernen",
        intro:
          "Das Wasser auf Curaçao ist klar und warm. Jedes Mal, wenn ich hineingehe, fühlt es sich an, als würde ich für einen Moment alles hinter mir lassen.",
        body: [
          "Meine ersten Tauchgänge auf der Insel habe ich bei Scuba Do am Jan Thiel Beach gemacht. Die Atmosphäre dort ist entspannt, aber sobald man unter Wasser ist, beginnt das Abenteuer. Ein schönes Extra ist, dass man bei einem Aufenthalt in der Villa Sandemarie 10 % Rabatt auf Tauchgänge bei Scuba Do erhält – einfach bei der Buchung angeben.",
          "Meine Lieblingstauchplätze liegen an der Ostseite der Insel. Die Riffe dort sind unberührt und oft ist es herrlich ruhig. Wenn ich zum Tauchen in diese Richtung fahre, gehe ich am liebsten mit Sea Natives – sie bringen einen mit dem Boot zu den schönsten Tauchplätzen.",
          "Auch das Tauchen von der Küste aus mache ich immer noch sehr gerne. Directors Bay ist so ein Ort, an dem man direkt ins Wasser geht und sofort am Riff ist. Wunderschön zum Tauchen, aber auch perfekt zum Schnorcheln oder Freitauchen.",
          "Manchmal treffe ich auf Schildkröten, manchmal schwimme ich zwischen Fischschwärmen und manchmal genieße ich einfach die Stille. Aber jedes Mal komme ich mit Salz im Haar und einem Lächeln im Gesicht wieder nach oben – und weiß wieder, warum ich hier lebe.",
        ],
        link: { label: "Mehr über Tauchen bei Scuba Do", url: "https://scubadocuracao.com/" },
      },
      es: {
        category: "Bajo el agua",
        title: "Buceo en Curazao, la mejor manera de conocer la isla",
        intro:
          "El agua en Curazao es clara y cálida. Cada vez que entro, siento que dejo todo atrás por un momento.",
        body: [
          "Mis primeras inmersiones en la isla las hice en Scuba Do, en Jan Thiel Beach. El ambiente allí es relajado, pero en cuanto estás bajo el agua comienza la aventura. Un detalle extra es que si te alojas en Villa Sandemarie, obtienes un 10% de descuento en tus inmersiones en Scuba Do; solo menciónalo al hacer tu reserva.",
          "Mis puntos de buceo favoritos están en el lado este de la isla. Los arrecifes allí están vírgenes y a menudo es maravillosamente tranquilo. Cuando voy para allá a bucear, prefiero ir con Sea Natives: te llevan en barco a los puntos de buceo más hermosos.",
          "El buceo desde la costa también sigue siendo algo que me encanta hacer. Directors Bay es uno de esos lugares donde entras directamente al agua y estás de inmediato en el arrecife. Precioso para bucear, pero también perfecto para hacer snorkel o apnea.",
          "A veces me encuentro con tortugas, a veces nado entre bancos de peces y a veces simplemente disfruto del silencio. Pero cada vez salgo con sal en el pelo y una sonrisa en la cara, y vuelvo a saber por qué vivo aquí.",
        ],
        link: { label: "Más sobre bucear con Scuba Do", url: "https://scubadocuracao.com/" },
      },
    },
  },
  {
    id: "stranden",
    image: "/media/curacao/playa-kenepa-panorama.webp",
    imageFrameClassName: "aspect-[3/4]",
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
          "Vanaf Villa Sandemarie ben je snel bij Jan Thiel en Mambo. Dit zijn fijne stranden als je gemak zoekt: strandbedjes, restaurants, beachclubs en alles dichtbij.",
        body: [
          "Voor een echte stranddag rijden we zelf liever iets verder. Cas Abao is een van de mooiste baaien van het eiland, met wit zand, helder water en genoeg voorzieningen voor een lange dag. Grote Knip is wat eenvoudiger, maar juist daardoor bijzonder: het uitzicht vanaf boven is prachtig en het water is vaak felblauw. Porto Mari is een goede keuze als je wilt zwemmen of snorkelen, maar ook gewoon comfortabel wilt liggen.",
          "Ga vroeg op pad, vooral in het weekend. Dan is het rustiger, de zon staat mooi en je hebt de beste plekken nog voor het uitkiezen.",
        ],
      },
      en: {
        category: "Beaches",
        title: "Our favourite bays and beaches",
        intro:
          "From Villa Sandemarie, you're quickly at Jan Thiel and Mambo. These are great beaches if you're looking for convenience: sunbeds, restaurants, beach clubs and everything close by.",
        body: [
          "For a real beach day, we prefer driving a bit further ourselves. Cas Abao is one of the island's most beautiful bays, with white sand, crystal-clear water and plenty of amenities for a long day. Grote Knip is somewhat simpler, but special because of it: the view from above is stunning and the water is often bright blue. Porto Mari is a good choice if you want to swim or snorkel, but also just want to lie comfortably.",
          "Head out early, especially on weekends. It's quieter then, the sun is at a beautiful angle and you'll have the best spots to choose from.",
        ],
      },
      de: {
        category: "Strände",
        title: "Unsere liebsten Buchten und Strände",
        intro:
          "Von der Villa Sandemarie aus sind Sie schnell am Jan Thiel und am Mambo Beach. Dies sind tolle Strände, wenn Sie es bequem mögen: Liegen, Restaurants, Beachclubs und alles in der Nähe.",
        body: [
          "Für einen echten Stranddag fahren wir selbst lieber etwas weiter. Cas Abao ist eine der schönsten Buchten der Insel, mit weißem Sand, kristallklarem Wasser und vielen Annehmlichkeiten für einen langen Tag. Grote Knip ist etwas einfacher, aber gerade deshalb besonders: Die Aussicht von oben ist atemberaubend und das Wasser oft strahlend blau. Porto Mari ist eine gute Wahl, wenn man schwimmen oder schnorcheln möchte, aber auch einfach nur bequem liegen will.",
          "Machen Sie sich früh auf den Weg, besonders am Wochenende. Dann ist es ruhiger, die Sonne steht in einem schönen Winkel und Sie haben die besten Plätze zur Auswahl.",
        ],
      },
      es: {
        category: "Playas",
        title: "Nuestras calas y playas favoritas",
        intro:
          "Desde Villa Sandemarie, llegas rápidamente a Jan Thiel y Mambo. Estas son playas excelentes si buscas comodidad: tumbonas, restaurantes, clubes de playa y todo cerca.",
        body: [
          "Para un día de playa de verdad, preferimos conducir un poco más lejos. Cas Abao es una de las bahías más hermosas de la isla, con arena blanca, agua cristalina y muchos servicios para pasar un día largo. Grote Knip es algo más sencilla, pero especial por ello: la vista desde arriba es impresionante y el agua suele ser de un azul intenso. Porto Mari es una buena opción si quieres nadar o hacer snorkel, pero también si solo quieres estar cómodo.",
          "Sal temprano, especialmente los fines de semana. Hay más tranquilidad, el sol está en un ángulo precioso y tendrás los mejores sitios para elegir.",
        ],
      },
    },
  },
  {
    id: "willemstad",
    image: "/media/curacao/willemstad-handelskade-gekleurde-gevels.webp",
    imageFrameClassName: "aspect-[1/1]",
    imageAlt: {
      nl: "Gekleurde gevels van Willemstad aan de Handelskade",
      en: "Coloured façades of Willemstad along the Handelskade",
      de: "Bunte Fassaden von Willemstad an der Handelskade",
      es: "Fachadas de colores de Willemstad en la Handelskade",
    },
    content: {
      nl: {
        category: "Stad",
        title: "Een ochtend door Willemstad",
        intro:
          "Willemstad is leuk om rustig doorheen te wandelen, zeker als je vroeg op pad gaat. Begin bijvoorbeeld in Pietermaai met koffie en loop daarna richting Punda. Vanaf daar wandel je langs de Handelskade en steek je via de Pontjesbrug over naar Otrobanda.",
        body: [
          "Onderweg kom je genoeg leuke plekken tegen: kleine winkels, street art, oude panden en fijne koffietentjes. Niet omdat je overal naar binnen moet, maar juist omdat het leuk is om zonder strak plan rond te lopen.",
          "Wie nog wat extra tijd heeft, kan doorlopen richting de Rif Fort-buurt of Otrobanda verder ontdekken. Eindig met een koud drankje aan het water en kijk hoe de stad rustig aan je voorbijgaat.",
          "Tip: ga in de ochtend. Dan is het vaak nog wat minder warm en rustiger.",
        ],
      },
      en: {
        category: "City",
        title: "A morning through Willemstad",
        intro:
          "Willemstad is lovely for a leisurely walk, especially if you head out early. Start, for example, in Pietermaai with coffee and then walk towards Punda. From there, stroll along the Handelskade and cross the Pontoon Bridge to Otrobanda.",
        body: [
          "Along the way, you'll encounter plenty of charming spots: small shops, street art, old buildings and nice coffee shops. Not because you have to go inside everywhere, but precisely because it's fun to walk around without a strict plan.",
          "If you have some extra time, you can continue towards the Rif Fort area or explore Otrobanda further. End with a cold drink by the water and watch the city slowly pass you by.",
          "Tip: go in the morning. It's often less hot and quieter then.",
        ],
      },
      de: {
        category: "Stadt",
        title: "Ein Vormittag in Willemstad",
        intro:
          "Willemstad eignet sich hervorragend für einen gemütlichen Spaziergang, besonders wenn man früh losgeht. Beginnen Sie zum Beispiel in Pietermaai mit einem Kaffee und gehen Sie dann in Richtung Punda. Von dort aus schlendern Sie entlang der Handelskade und überqueren die Pontonbrücke nach Otrobanda.",
        body: [
          "Unterwegs stoßen Sie auf viele charmante Orte: kleine Läden, Street Art, alte Gebäude und nette Cafés. Nicht, weil man überall hineingehen muss, sondern gerade weil es Spaß macht, ohne festen Plan herumzulaufen.",
          "Wer noch etwas Zeit hat, kann in Richtung Rif Fort weitergehen oder Otrobanda weiter erkunden. Beenden Sie den Spaziergang mit einem kühlen Getränk am Wasser und beobachten Sie, wie die Stadt langsam an Ihnen vorbeizieht.",
          "Tipp: Gehen Sie am Vormittag. Dann ist es oft weniger heiß und ruhiger.",
        ],
      },
      es: {
        category: "Ciudad",
        title: "Una mañana por Willemstad",
        intro:
          "Willemstad es ideal para un paseo tranquilo, especialmente si sales temprano. Empieza, por ejemplo, en Pietermaai con un café y luego camina hacia Punda. Desde allí, pasea por la Handelskade y cruza el Puente de los Pontones hacia Otrobanda.",
        body: [
          "Por el camino encontrarás muchos rincones encantadores: tiendas pequeñas, arte callejero, edificios antiguos y cafeterías agradables. No porque tengas que entrar en todas partes, sino precisamente porque es divertido caminar sin un plan estricto.",
          "Si tienes algo de tiempo extra, puedes continuar hacia la zona de Rif Fort o explorar más a fondo Otrobanda. Termina con una bebida fría junto al agua y observa cómo la ciudad pasa lentamente ante ti.",
          "Consejo: ve por la mañana. Suele hacer menos calor y hay más tranquilidad.",
        ],
      },
    },
  },
  {
    id: "natuur",
    image: "/media/curacao/klein-curacao-strand-vuurtoren.webp",
    imageFrameClassName: "aspect-[4/5]",
    imageAlt: {
      nl: "Klein Curaçao met helderblauw water, wit strand en de oude vuurtoren",
      en: "Klein Curaçao with clear blue water, white beach and the old lighthouse",
      de: "Klein Curaçao mit klarem blauem Wasser, weißem Strand und altem Leuchtturm",
      es: "Klein Curazao con agua azul clara, playa blanca y el antiguo faro",
    },
    content: {
      nl: {
        category: "Natuur",
        title: "Van Christoffelberg tot Klein Curaçao",
        intro:
          "Curaçao is meer dan alleen strand. Je vindt er ruige kust, zoutpannen, flamingo’s en wandelroutes met mooie uitzichten.",
        body: [
          "De Christoffelberg is de bekendste hike van het eiland. Het is even klimmen, maar boven word je beloond met een prachtig uitzicht. Ook de minder bekende Tafelberg is een aanrader. Deze kun je beklimmen met Curaçao Rock Climbing.",
          "Aan de noordkust liggen verschillende boca’s, waar de zee hard tegen de rotsen slaat. Mooi om even te stoppen tijdens een rondje over het eiland.",
          "Bij de zoutpannen kun je vaak flamingo’s zien. Geen groot uitje, maar wel leuk om mee te pakken als je toch die kant op rijdt.",
          "En dan is er nog Klein Curaçao. Een dagtrip met de boot naar dit onbewoonde eiland is echt een van de leukste uitjes op Curaçao. Denk aan helderblauw water, een breed wit strand, snorkelen, de oude vuurtoren en onderweg gewoon lekker op zee zijn.",
        ],
      },
      en: {
        category: "Nature",
        title: "From Christoffelberg to Klein Curaçao",
        intro:
          "Curaçao is more than just beaches. You'll find rugged coastlines, salt pans, flamingos and hiking trails with beautiful views.",
        body: [
          "The Christoffelberg is the island's most famous hike. It's a bit of a climb, but at the top you're rewarded with a magnificent view. The lesser-known Tafelberg is also recommended; you can climb it with Curaçao Rock Climbing.",
          "Along the north coast lie several 'bocas', where the sea crashes hard against the rocks. A nice place to stop for a moment during a tour of the island.",
          "At the salt pans, you can often see flamingos. Not a major excursion, but nice to catch if you're driving that way anyway.",
          "And then there's Klein Curaçao. A day trip by boat to this uninhabited island is truly one of the best outings on Curaçao. Think crystal-clear blue water, a wide white beach, snorkelling, the old lighthouse and just being out at sea.",
        ],
      },
      de: {
        category: "Natur",
        title: "Vom Christoffelberg nach Klein Curaçao",
        intro:
          "Curaçao ist mehr als nur Strände. Sie finden hier schroffe Küsten, Salzpfannen, Flamingos und Wanderwege mit schöner Aussicht.",
        body: [
          "Der Christoffelberg ist die berühmteste Wanderung der Insel. Es ist ein kleiner Aufstieg, aber oben wird man mit einer herrlichen Aussicht belohnt. Auch der weniger bekannte Tafelberg ist zu empfehlen; man kann ihn mit Curaçao Rock Climbing besteigen.",
          "Entlang der Nordküste liegen mehrere 'Bocas', wo das Meer hart gegen die Felsen schlägt. Ein schöner Ort für einen kurzen Stopp während einer Inselrundfahrt.",
          "An den Salzpfannen kann man oft Flamingos sehen. Kein großer Ausflug, aber schön mitzunehmen, wenn man ohnehin in diese Richtung fährt.",
          "Und dann ist da noch Klein Curaçao. Ein Tagesausflug mit dem Boot zu dieser unbewohnten Insel ist wirklich einer der schönsten Ausflüge auf Curaçao. Denken Sie an kristallklares blaues Wasser, einen breiten weißen Strand, Schnorcheln, den alten Leuchtturm und einfach das Gefühl, auf dem Meer zu sein.",
        ],
      },
      es: {
        category: "Naturaleza",
        title: "Del Christoffelberg a Klein Curazao",
        intro:
          "Curazao es más que solo playas. Encontrarás costas escarpadas, salinas, flamencos y rutas de senderismo con hermosas vistas.",
        body: [
          "El Christoffelberg es la caminata más famosa de la isla. Es un poco de subida, pero en la cima te recompensa una vista magnífica. También se recomienda el Tafelberg, menos conocido; puedes escalarlo con Curaçao Rock Climbing.",
          "A lo largo de la costa norte se encuentran varias 'bocas', donde el mar rompe con fuerza contra las rocas. Un lugar agradable para detenerse un momento durante un recorrido por la isla.",
          "En las salinas, a menudo se pueden ver flamencos. No es una gran excursión, pero es agradable de ver si de todos modos pasas por allí.",
          "Y luego está Klein Curaçao. Un viaje de un día en barco a esta isla deshabitada es realmente una de las mejores excursiones en Curazao. Piensa en aguas azul cristalino, una amplia playa de arena blanca, snorkel, el antiguo faro y simplemente estar en el mar.",
        ],
      },
    },
  },
  {
    id: "eten",
    image: "/media/curacao/zonsondergang-golven-roze.webp",
    imageFrameClassName: "aspect-[4/5]",
    imageAlt: {
      nl: "Roze zonsondergang boven zee op Curaçao",
      en: "Pink sunset over the sea on Curaçao",
      de: "Rosa Sonnenuntergang über dem Meer auf Curaçao",
      es: "Atardecer rosa sobre el mar en Curazao",
    },
    content: {
      nl: {
        category: "Eten en drinken",
        title: "Waar we zelf eten",
        intro:
          "Curaçao heeft genoeg fijne plekken voor koffie, lunch, diner of een borrel aan het water. Dit zijn een paar plekken waar wij zelf graag komen.",
        body: [
          "Voor koffie of iets zoets is Number Ten altijd een goed idee. Bij Chill Beach Bar haal je een frozen cappuccino aan zee en bij Koko’s zit je lekker voor ontbijt of lunch met je voeten bijna in het zand.",
          "Ook Hofi Cas Cora is een leuke aanrader voor ontbijt of lunch. Het ligt op een boerderij en veel producten komen vers van het eiland. Extra leuk met kinderen, omdat je er ook even langs de dieren kunt lopen. De Heeren at Sea is juist fijn voor lunch of diner, met mooi uitzicht over zee.",
          "’s Avonds kun je naar Villa Vis voor verse vis, De Gouverneur voor diner met uitzicht op de Pontjesbrug of Mosa Caña voor shared dining in een relaxte setting.",
          "En voor happy hour? Dat hoort er op Curaçao gewoon bij. Een koud drankje, zonsondergang en geen haast. Onze favorieten zijn Zanzibar Beach, Mambo Beach en Kokomo Beach.",
        ],
      },
      en: {
        category: "Food & drink",
        title: "Where we eat ourselves",
        intro:
          "Curaçao has plenty of lovely spots for coffee, lunch, dinner or a drink by the water. These are a few places we love to visit ourselves.",
        body: [
          "For coffee or something sweet, Number Ten is always a good idea. At Chill Beach Bar, you can get a frozen cappuccino by the sea, and at Koko’s, you can enjoy breakfast or lunch with your feet almost in the sand.",
          "Hofi Cas Cora is also a great recommendation for breakfast or lunch. It's located on a farm and many products come fresh from the island. Extra fun with kids, as you can also stop by the animals. De Heeren at Sea is especially nice for lunch or dinner, with a beautiful view over the sea.",
          "In the evening, you can go to Villa Vis for fresh fish, De Gouverneur for dinner with a view of the Pontoon Bridge, or Mosa Caña for shared dining in a relaxed setting.",
          "And for happy hour? That's simply part of life on Curaçao. A cold drink, sunset and no rush. Our favourites are Zanzibar Beach, Mambo Beach and Kokomo Beach.",
        ],
      },
      de: {
        category: "Essen und Trinken",
        title: "Wo wir selbst essen",
        intro:
          "Curaçao bietet viele schöne Orte für Kaffee, Mittagessen, Abendessen oder einen Drink am Wasser. Hier sind ein paar Orte, die wir selbst gerne besuchen.",
        body: [
          "Für Kaffee oder etwas Süßes ist Number Ten immer eine gute Idee. In der Chill Beach Bar bekommt man einen Frozen Cappuccino am Meer, und im Koko’s kann man Frühstück oder Mittagessen mit den Füßen fast im Sand genießen.",
          "Hofi Cas Cora ist ebenfalls eine tolle Empfehlung für Frühstück oder Mittagessen. Es liegt auf einem Bauernhof und viele Produkte kommen frisch von der Insel. Besonders schön mit Kindern, da man auch bei den Tieren vorbeischauen kann. De Heeren at Sea ist besonders fein zum Mittag- oder Abendessen, mit einem herrlichen Blick über das Meer.",
          "Abends können Sie ins Villa Vis für frischen Fisch gehen, ins De Gouverneur für ein Abendessen mit Blick auf die Pontonbrücke oder ins Mosa Caña für Shared Dining in entspannter Atmosphäre.",
          "Und zur Happy Hour? Das gehört auf Curaçao einfach dazu. Ein kühles Getränk, der Sonnenuntergang und keine Eile. Unsere Favoriten sind Zanzibar Beach, Mambo Beach und Kokomo Beach.",
        ],
      },
      es: {
        category: "Comer y beber",
        title: "Dónde comemos nosotros",
        intro:
          "Curazao tiene muchos lugares encantadores para tomar un café, almorzar, cenar o tomar una copa junto al agua. Estos son algunos de los sitios que nos encanta visitar.",
        body: [
          "Para un café o algo dulce, Number Ten siempre es una buena idea. En Chill Beach Bar puedes tomar un cappuccino helado frente al mar, y en Koko’s puedes disfrutar del desayuno o el almuerzo con los pies casi en la arena.",
          "Hofi Cas Cora también es una gran recomendación para desayunar o almorzar. Está ubicado en una granja y muchos productos son frescos de la isla. Especialmente divertido con niños, ya que también puedes visitar a los animales. De Heeren at Sea es ideal para almorzar o cenar, con una hermosa vista sobre el mar.",
          "Por la noche, puedes ir a Villa Vis para comer pescado fresco, a De Gouverneur para cenar con vistas al Puente de los Pontones, o a Mosa Caña para una cena compartida en un ambiente relajado.",
          "¿Y el happy hour? Eso es simplemente parte de la vida en Curazao. Una bebida fría, el atardecer y sin prisas. Nuestros favoritos son Zanzibar Beach, Mambo Beach y el bar de Jan Thiel.",
        ],
      },
    },
  },
];

export const curacaoQuickTips: CuracaoTip[] = [
  {
    content: {
      nl: { category: "Vervoer", title: "Huur een auto", text: "Een eigen auto maakt het eiland kleiner en de baaitjes bereikbaar. Bij de villa is een eigen parkeerplek." },
      en: { category: "Transport", title: "Rent a car", text: "Your own car shrinks the island and makes the bays reachable. The villa has its own parking spot." },
      de: { category: "Mobilität", title: "Mietet ein Auto", text: "Ein eigenes Auto macht die Insel kleiner und die Buchten erreichbar. An der Villa gibt es einen eigenen Parkplatz." },
      es: { category: "Transporte", title: "Alquila un coche", text: "Un coche propio hace la isla más pequeña y las calas accesibles. La villa tiene plaza de aparcamiento." },
    },
  },
  {
    content: {
      nl: { category: "Betalen", title: "Geld en betalen", text: "Bijna overal kun je pinnen en met creditcard betalen. Voor lokale snackjes is wat contant geld (NAf of USD) handig." },
      en: { category: "Payment", title: "Money and payment", text: "You can use card almost everywhere. A bit of cash (NAf or USD) is handy for local snacks." },
      de: { category: "Bezahlen", title: "Geld und Bezahlen", text: "Fast überall könnt ihr mit Karte bezahlen. Etwas Bargeld (NAf oder USD) ist für lokale Snacks nützlich." },
      es: { category: "Pagos", title: "Dinero y pagos", text: "Se paga con tarjeta casi en todas partes. Algo de efectivo (NAf o USD) viene bien para los snacks locales." },
    },
  },
  {
    content: {
      nl: { category: "Beste reistijd", title: "Wanneer te gaan", text: "Curaçao is jaarrond warm en droog. December tot april is hoogseizoen, mei en juni zijn heerlijk rustig." },
      en: { category: "Best season", title: "When to go", text: "Curaçao is warm and dry year-round. December to April is high season; May and June are wonderfully quiet." },
      de: { category: "Beste Reisezeit", title: "Wann es geht", text: "Curaçao ist ganzjährig warm und trocken. Dezember bis April ist Hochsaison, Mai und Juni sind herrlich ruhig." },
      es: { category: "Mejor época", title: "Cuándo ir", text: "Curazao es cálido y seco todo el año. De diciembre a abril es temporada alta; mayo y junio son maravillosamente tranquilos." },
    },
  },
  {
    content: {
      nl: { category: "Veilig zwemmen", title: "Zwemmen en stroming", text: "Het meeste water is rustig, maar bij Boka's en de noordkust kan stroming staan. Vraag het ons gewoon." },
      en: { category: "Safe swimming", title: "Swimming and currents", text: "Most water is calm, but at the Boka's and along the north coast there can be current. Just ask us." },
      de: { category: "Sicher schwimmen", title: "Schwimmen und Strömung", text: "Das meiste Wasser ist ruhig, aber bei den Bokas und an der Nordküste kann es Strömung geben. Fragt uns einfach." },
      es: { category: "Baño seguro", title: "Nadar y corrientes", text: "La mayor parte del agua está tranquila, pero en las Bokas y en la costa norte puede haber corriente. Preguntadnos sin problema." },
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
