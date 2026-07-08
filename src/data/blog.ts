// Blog posts migrated 1:1 from the old WordPress site, keeping the EXACT
// same URL slugs so existing Google rankings / backlinks carry over.
// Body is authored as lightweight blocks rendered by the post page.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'map'; src: string; title: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  cover: string;
  coverAlt: string;
  readingMinutes: number;
  body: Block[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'sokobanja-sta-videti-lista-popularnih-atrakcija-saveti-i-plan-izleta',
    title: 'Sokobanja: Šta videti? — Lista popularnih atrakcija, saveti i plan izleta',
    description:
      'Vodič kroz najlepše atrakcije Sokobanje — Lepterija i Sokograd, vodopad Ripaljka, Bovansko jezero, Sesalačka pećina i planovi izleta za 1 i 3 dana.',
    date: '2025-09-15',
    cover: '/blog-images/sokobanja-centar.webp',
    coverAlt: 'Pogled na centar Sokobanje',
    readingMinutes: 9,
    body: [
      { type: 'p', text: 'Sokobanja je jedan od najlepših banjskih i prirodnih centara u istočnoj Srbiji. Na malom prostoru smenjuju se klisura Moravice, srednjovekovni Sokograd, vodopad Ripaljka, uređeni parkovi i termalni izvori. Idealna je za porodični odmor, opuštanje i lagane planinarske šetnje.' },
      { type: 'h2', text: 'Brzi vodič: 10 najvećih atrakcija Sokobanje' },
      { type: 'ul', items: ['[Lepterija](https://share.google/6wVFBVj6IKHKDCY3I) i uspon do [Sokograda](https://share.google/FFNuUFliLQimCR5d9)', 'Vodopad [Ripaljka](https://share.google/dD3RKSJkcAtm9ZEbq)', '[Župan plaža](https://share.google/xlub5QJPNSAm08nhw) i Park [Banjica](https://maps.app.goo.gl/GQGgRWxQrBYLTvdMA)', '[Tursko kupatilo Amam](https://share.google/4A1hTIAb3DKdM1vxN)', '[Bovansko jezero](https://maps.app.goo.gl/XRARUf8jfAm78543A)', '[Sesalačka pećina](https://maps.app.goo.gl/2eB9QSJ3SenWxhia9)', '[Očno](https://share.google/ZiVTTeIQXDXhtO592) i [Kalinovica](https://share.google/43qkzMYxRz8TW0Lmp)', '[Čuka 2 park](https://share.google/vXjnfaFhoLjeu90qH)', '[Selo Vrmdža](https://maps.app.goo.gl/BuDa7iGtxzKy58hN8)', '[Planina Rtanj](https://maps.app.goo.gl/NDKeDAaUnweCSwr59)'] },
      { type: 'h2', text: 'Atrakcije u centru Sokobanje' },
      { type: 'h3', text: 'Centralno šetalište i park' },
      { type: 'p', text: 'Mermerno šetalište sa drvoredima, letnjim baštama i večernjim programima. U neposrednoj blizini su park, gradske plaže i istorijske znamenitosti Sokobanje.' },
      { type: 'h3', text: 'Tursko kupatilo Amam' },
      { type: 'p', text: 'Istorijsko kupatilo na rimskim temeljima sa termalnom vodom i wellness ponudom. Preporuka je da termin rezervišete unapred u špicu sezone.' },
      { type: 'h3', text: 'Park Banjica i Župan plaža' },
      { type: 'p', text: 'Najpopularnija šetnja pored Moravice, sa igralištima i više kupališta. Župan ima pliće delove za decu i mesta za skokove za iskusne plivače.' },
      { type: 'h2', text: 'Priroda i izletišta' },
      { type: 'h3', text: 'Lepterija i Sokograd' },
      { type: 'p', text: 'Najpoznatija gradska tura uz drvene mostiće i staze pored reke. Od Lepterije vodi uspon do ostataka Sokograda sa panoramskim pogledom na kotlinu. Ponesite udobnu obuću i vodu.' },
      { type: 'h3', text: 'Vodopad Ripaljka' },
      { type: 'p', text: 'Sistem kaskada u hladovini bukove šume. Tokom leta i rane jeseni vodopad zna da presuši, pa je proleće posle kiša idealno vreme.' },
      { type: 'h3', text: 'Bovansko jezero' },
      { type: 'p', text: 'Dugo veštačko jezero pogodno za kupanje na uređenim mestima, vožnju pedalina, jedrenje i ribolov. Bez benzinskih motora na vodi zbog vodosnabdevanja okolnih mesta.' },
      { type: 'h3', text: 'Sesalačka pećina' },
      { type: 'p', text: 'Uređen ulazni deo sa osvetljenjem, stalaktitima i stalagmitima, plus lepo izletište uz pećinu. Prijatna temperatura tokom cele godine.' },
      { type: 'h3', text: 'Očno i Kalinovica' },
      { type: 'p', text: 'Prostrane livade, izvor hladne vode, sprave za vežbanje i staze kroz šumu. Dobra baza za lagane šetnje po Ozrenu.' },
      { type: 'h3', text: 'Park-šuma Čuka 2' },
      { type: 'p', text: 'Velika uređena površina sa stazama, klupama i prostorima za piknik. Uvek nekoliko stepeni hladnije nego u centru, prijatno za šetnju sa decom i kućnim ljubimcima.' },
      { type: 'h2', text: 'Kultura i istorija' },
      { type: 'h3', text: 'Zavičajni muzej' },
      { type: 'p', text: 'Postavke arheologije, etnologije i lokalne istorije u kući iz 19. veka. U dvorištu se leti održavaju kulturni programi.' },
      { type: 'h3', text: 'Manastir Jermenčić' },
      { type: 'p', text: 'Manastir na Ozrenu, oko 8 km od centra, posvećen Arhanđelima Gavrilu i Mihailu. Mesto okupljanja vernika i planinara.' },
      { type: 'h2', text: 'Aktivnosti sa decom' },
      { type: 'ul', items: ['Akva park Podina sa bazenima i toboganima, često organizuje večernje programe.', 'Park Banjica i Čuka 2 sa igralištima i dugim stazama za trotinet ili bicikl.', 'Sesalačka pećina i izletište kod ulaza, kratke i jasne rute.', 'Župan i plići delovi Moravice, uvek uz nadzor odraslih.'] },
      { type: 'h2', text: 'Sezonski saveti' },
      { type: 'ul', items: ['Proleće: idealno za Ripaljku, Lepteriju i duže staze po Ozrenu.', 'Leto: jutra i kasna popodneva za klisuru i gradske plaže, podne za Akva park i Amam.', 'Jesen: stabilno vreme, manje gužve, topli dani i zlatne šume.', 'Zima: kraće šetnje po suvom vremenu, Amam i muzeji.'] },
      { type: 'h2', text: 'Mini izleti: jednodnevni i trodnevni' },
      { type: 'h3', text: '1 dan u Sokobanji' },
      { type: 'ul', items: ['Jutro: šetnja Lepterija i uspon do Sokograda.', 'Podne: pauza u centru, šetnja kroz Banjicu.', 'Popodne: kupanje na Županu ili poseta Amamu.'] },
      { type: 'h3', text: '3 dana u Sokobanji' },
      { type: 'ul', items: ['Dan 1: Lepterija, Sokograd, centralno šetalište i veče u parku.', 'Dan 2: Ripaljka i Ozren (Očno, Kalinovica), predveče Akva park Podina.', 'Dan 3: Bovansko jezero ili Sesalačka pećina, zatim mirna šetnja Čukom 2.'] },
      { type: 'h2', text: 'Golden View kompleks' },
      { type: 'p', text: '[Golden View](/apartmani) je novosagrađeni kompleks modernih apartmana sa restoranom i bazenom na svega 300 metara od akva parka i 10 minuta hoda od centra grada.' },
      { type: 'p', text: 'Naši apartmani su idealni za porodice i parove — novi i veoma komforni, sa pogledom na Rtanj, a ponuda našeg [restorana](/restoran) je krojena za prave hedoniste: specijaliteti sa roštilja od junećeg mesa, kremaste paste i deserti koji se pamte. Room service je takođe dostupan, kao i parking i brz besplatan Wi-Fi za sve goste kompleksa. Za rezervaciju nas [kontaktirajte](/kontakt).' },
      { type: 'h2', text: 'Praktične informacije i česta pitanja' },
      { type: 'h3', text: 'Kako doći i gde parkirati?' },
      { type: 'p', text: 'Glavni prilaz je preko Aleksinca, koji je povezan sa autoputem E75 (A1). U sezoni računajte na gužvu u centru i kod Banjice. Ka Lepteriji i vodopadu Ripaljka uglavnom nema velikih gužvi (osim za 1. maj).' },
      { type: 'h3', text: 'Kada je najbolje posetiti vodopad Ripaljka?' },
      { type: 'p', text: 'U proleće i posle kišnih perioda. Tokom leta i rane jeseni često presušuje.' },
      { type: 'h3', text: 'Da li su staze pogodne za decu?' },
      { type: 'p', text: 'Lepterija, Banjica i Čuka 2 jesu. Uspon ka Sokogradu i Golemom kamenu je strmiji, pa birajte bolju obuću i obavezno nosite vodu.' },
      { type: 'h3', text: 'Može li kupanje u Moravici?' },
      { type: 'p', text: 'Da, na uređenim i bezbednim delovima poput Župana i obližnjih prirodnih kada poput kupališta Šest kaca. Voda je bistra, ali kamenje klizavo — budite oprezni.' },
    ],
  },
  {
    slug: 'akva-park-sokobanja-smestaj-i-restoran-u-blizini-akva-parka',
    title: 'Akva Park Sokobanja: Smeštaj i Restoran u Blizini Akva Parka',
    description:
      'Akva park Podina i najbliži smeštaj — Golden View apartmani na 400m, sa bazenom i restoranom. Saveti za posetu, radno vreme i idealan plan dana.',
    date: '2025-08-20',
    cover: '/spa-images/new/bazen-otvoreni.webp',
    coverAlt: 'Bazen Golden View u blizini Akva Parka Sokobanja',
    readingMinutes: 6,
    body: [
      { type: 'p', text: '[Akva park „Podina”](https://share.google/iCrCJBC6IRdiPv8Pc) jedno je od najposećenijih mesta u Sokobanji tokom leta. Smešten u okviru sportskog kompleksa [Podina](https://share.google/M1GJEA35wSPXo6Hap), na oko 1.500 m od centra grada, park pruža kombinaciju zabave i relaksacije za sve generacije.' },
      { type: 'p', text: 'Kompleks obuhvata:' },
      { type: 'ul', items: ['poluolimpijski bazen za plivanje', 'rekreativni bazen sa vodenim pečurkama', 'vodene tobogane za decu i odrasle', 'dečiji bazen sa atrakcijama', 'bar i zelene površine za sunčanje'] },
      { type: 'p', text: 'U letnjoj sezoni park može primiti oko 2.000 posetilaca dnevno, a tokom vikenda se često organizuju koncerti i noćno kupanje pod reflektorima. Sezona traje od juna do septembra, a ulaznice se kupuju na blagajni kompleksa.' },
      { type: 'h2', text: 'Gde odsedati blizu Akva Parka?' },
      { type: 'p', text: 'Ako tražite smeštaj u blizini Akva Parka, možete odsedati u [Golden View Sokobanja](/apartmani) — modernom apartmanskom kompleksu koji kombinuje komfor, mir i odličnu lokaciju. Uz to, Golden View apartmani vam nude i bazen, ukoliko vas umori gužva u akva parku.' },
      { type: 'h3', text: 'Golden View Sokobanja — savršen spoj mira i gastronomije' },
      { type: 'p', text: 'Golden View nudi elegantne i prostrane apartmane, kao i moderno opremljen restoran u sastavu kompleksa. Udaljen je svega 400 m od Akva Parka, a gostima pruža idealan balans između pristupačnosti i privatnosti.' },
      { type: 'p', text: 'Šta naši gosti najviše ističu:' },
      { type: 'ul', items: ['moderno uređeni apartmani sa terasama', 'mirno okruženje i privatni parking', 'savršena lokacija između centra i Podine', 'porodična atmosfera i prijatan ambijent'] },
      { type: 'p', text: 'Idealno za porodični odmor, vikend beg ili letnje opuštanje posle dana provedenog na bazenima.' },
      { type: 'h2', text: 'Gde ručati posle dana provedenog na bazenu?' },
      { type: 'p', text: 'U neposrednoj blizini apartmana nalazi se [Restoran Golden View](/restoran), jedno od najlepših mesta za ručak ili večeru u Sokobanji. Restoran kombinuje tradicionalnu kuhinju sa modernim ambijentom, a na meniju se nalaze jela domaće kuhinje i roštilj, sveže salate i lokalni specijaliteti, kao i kolači i poslastice uz kafu ili vino.' },
      { type: 'h2', text: 'Kako doći do Akva Parka?' },
      { type: 'p', text: 'Akva Park se nalazi na Podini, oko 400 m od Golden View apartmana, u okviru sportskog kompleksa. Naša topla preporuka je da zbog česte gužve svoja vozila ostavite na parkingu, pa do akva parka prošetate.' },
      { type: 'ul', items: ['od centra Sokobanje: oko 1.500 m', 'od Golden View apartmana: 400 m'] },
      { type: 'h2', text: 'Idealna kombinacija — Akva Park + Golden View' },
      { type: 'p', text: 'Savršen dan u Sokobanji izgleda ovako: jutro u Akva Parku uz tobogane i bazene, popodne odmor u udobnim apartmanima Golden View-a, a veče uz večeru u našem restoranu. Ujutru — bazeni i sunce, uveče — mir i dobra hrana. To je kombinacija zbog koje se gosti vraćaju svake godine.' },
      { type: 'h2', text: 'Kratki vodič za posetioce Akva Parka' },
      { type: 'ul', items: ['Radno vreme: svakog dana od 10 do 19h (jun–septembar)', 'Parking: dostupan ispred kompleksa', 'Ulaznice: kupuju se na licu mesta', 'Ponesite: papuče, peškire, kremu za sunčanje i šešir', 'Najbolje vreme za posetu: radnim danima pre 12h, zbog manjih gužvi'] },
      { type: 'h2', text: 'Česta pitanja' },
      { type: 'h3', text: 'Koliko je Golden View udaljen od Akva Parka?' },
      { type: 'p', text: 'Golden View Sokobanja nalazi se na svega nekoliko minuta šetnje od Akva Parka Podina (oko 400 m).' },
      { type: 'h3', text: 'Da li Akva Park radi tokom cele godine?' },
      { type: 'p', text: 'Ne. Akva Park Podina radi sezonski, najčešće od početka juna do kraja septembra, u zavisnosti od vremenskih uslova.' },
      { type: 'h3', text: 'Da li je Golden View pogodan za porodice sa decom?' },
      { type: 'p', text: 'Apsolutno. Apartmani su prostrani, mirni i idealni za porodični boravak, sa lakim pristupom do Akva Parka i centra Sokobanje.' },
    ],
  },
  {
    slug: 'top-5-restorana-u-sokobanji',
    title: 'Top 5 Restorana u Sokobanji – Mesta Koja Vredi Posetiti',
    description:
      'Pet restorana koji su obeležili gastronomsku scenu Sokobanje — od kafane Zelengora do restorana Golden View. Saveti za parove, porodice i najlepši pogled.',
    date: '2025-07-10',
    cover: '/rest-images/restoran-1.webp',
    coverAlt: 'Restoran Golden View Sokobanja',
    readingMinutes: 7,
    body: [
      { type: 'p', text: 'Sokobanja je već decenijama jedno od najlepših turističkih mesta u Srbiji. Okružena planinama, bogata termalnim izvorima i poznata po miru koji donosi svakom posetiocu, ova banja je pravo utočište za one koji žele da se odmore i uživaju u prirodi. Ali ono što često iznenadi posetioce jeste koliko su restorani u Sokobanji postali važan deo njenog identiteta.' },
      { type: 'p', text: 'Restorani u Sokobanji nisu samo mesta gde se jede. Oni su prostor za druženje, opuštanje i stvaranje uspomena. Predstavljamo pet restorana koji su obeležili ugostiteljsku scenu Sokobanje.' },
      { type: 'h2', text: '1. Kafana Zelengora' },
      { type: 'p', text: '[Kafana Zelengora](https://share.google/kNhEROJZpkBZvrBDA) je simbol Sokobanje i jedno od onih mesta koje svi preporučuju. Ovde se oseća duh starog juga, onaj topli, neposredni pristup koji podseća na neka starija vremena. Unutrašnji prostor odiše tradicijom, a u večernjim satima kafana oživi uz muziku, smeh i druženje.' },
      { type: 'h2', text: '2. Župan Restoran' },
      { type: 'p', text: 'Restoran Župan nalazi se nadomak [reke Moravice](https://sr.wikipedia.org/wiki/Sokobanjska_Moravica) u naselju [Jabukar](https://maps.app.goo.gl/rmvapEh7eS7NoLUu8) i predstavlja elegantan spoj udobnosti i tradicije. Ambijent je klasičan, uređen sa pažnjom i stilom, a atmosfera mirna i prijatna — popularan među poslovnim gostima i porodicama.' },
      { type: 'h2', text: '3. Restoran Golden View' },
      { type: 'p', text: '[Restoran Golden View](/restoran) je mesto koje osvaja već na prvi pogled. Nalazi se u naselju Palilula i pruža posetiocima predivan ambijent. Enterijer je moderan ali prijatan, a atmosfera smirena i elegantna — spoj autentičnih ukusa juga Srbije i udobnosti. Radno vreme je svaki dan od 08:30 do 00:00, a za rezervaciju pozovite 063/661-263.' },
      { type: 'map', src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.978511333303!2d21.85758832617656!3d43.64861542110235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47543b1197bf3281%3A0x8c3b7338d75499c7!2sRestoran%20Golden%20View!5e0!3m2!1ssr!2srs!4v1780992288860!5m2!1ssr!2srs', title: 'Restoran Golden View — lokacija na mapi' },
      { type: 'p', text: 'Tokom dana restoran pruža osećaj otvorenosti i mira, dok se uveče prostor pretvara u romantično okruženje idealno za parove ili mirnu porodičnu večeru. Golden View je više od restorana — to je prostor u kojem se uživa u svakom trenutku, bilo da pijete kafu pored bazena ili posmatrate zalazak sunca nad Sokobanjom.' },
      { type: 'h2', text: '4. Restoran Zaplet' },
      { type: 'p', text: 'Zaplet unosi dašak modernog duha u Sokobanju. Enterijer je savremen, bašta prostrana i osvetljena, a pogled na centar Sokobanje i [zavičajni muzej](https://share.google/9A2eVr5wepHoC6w1v) posebno lep u večernjim satima. Mesto koje privlači mlađe goste, parove i grupe prijatelja.' },
      { type: 'h2', text: '5. Vidikovac' },
      { type: 'p', text: 'Vidikovac je restoran koji svojim imenom otkriva ono što ga čini posebnim. Smešten je na uzvišenju iznad Sokobanje i pruža jedan od najlepših pogleda na čitavu dolinu. Uveče, pogled na svetla Sokobanje i planinu Rtanj pruža prizor koji ostaje u sećanju.' },
      { type: 'h2', text: 'Zašto posetiti restorane u Sokobanji?' },
      { type: 'p', text: 'Sokobanja zna da spoji jednostavnost i eleganciju, tradiciju i savremenost. U njenim restoranima oseća se toplina doma, ali i pažnja prema gostu koja čini da se ljudi vraćaju. Ovih pet restorana nisu samo preporuke, već deo priče o tome zašto se Sokobanja već decenijama smatra mestom gde se zaista uživa.' },
      { type: 'h2', text: 'Česta pitanja' },
      { type: 'h3', text: 'Najbolji restoran za parove u Sokobanji?' },
      { type: 'p', text: 'Golden View je idealna opcija za parove — lep i moderan ambijent, nacionalna i internacionalna ponuda jela i vinska karta za svačiji ukus.' },
      { type: 'h3', text: 'Koji restoran je najbolji za miran porodični ručak?' },
      { type: 'p', text: 'Golden View i restoran Župan su odličan izbor za porodice koje žele udobnost i mir.' },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
