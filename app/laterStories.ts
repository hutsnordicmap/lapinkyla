import type { Locale } from "@/app/content";
import { shot, type StoryCopy } from "@/app/story";

const book =
  "https://commons.wikimedia.org/wiki/File:The_History_of_Lapland_Wherein_Are_shewed_the_Original,_Manners,_Habits,_Marriages,_Conjurations,_etc._of_that_people._Written_by_John_Scheffer_(IA_SchefferHistoryofLaplandOxford1674Nbo).pdf";

const plate = {
  width: 706,
  height: 1119,
  kind: "drawing" as const,
  href: book,
  credit: "Johannes Schefferus",
  licence: "pdm" as const,
  licenceLabel: "Public domain",
};

const religion: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/uskonto",
    otherHref: "/en/religion",
    title: "Uskonto",
    description:
      "Schefferus 1674: nimet Thor, Storjunkare, aurinko ja Seita, ja puinen kuva vasaroineen. Hänen kertomuksensa, ei tämän sivun päätös.",
    heading: "Uskonto",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Esipuhe sanoo, että Ruotsin kansleri pani Schefferuksen kirjoittamaan kirjan. Hän ei käynyt Lapissa. Tässä luvussa hän sanoo, että Piitimen ja Luulajan lapinmaassa palvottiin kolmea: Thoria, Storjunkarea ja aurinkoa. Tulta hän pitää auringon merkkinä, ei omana jumalana, ja puuta ei hänen mukaansa palvottu puuna. Tornion ja Kemin lapinmaassa hän sanoo käytetyn yhtä nimeä, Seita. Luulajassa suurempaa kutsuttiin Tiermes tai Aijeke, pienempää Storjunkar. Se, että nimet tarkoittaisivat samoja, on hänen päätelmänsä. Tämä on kirjan kertomus Ruotsin lapinmaista vuonna 1674. (Schefferus 1674)",
        shots: [
          shot("names", "1674", "Sivu, joka nimeää Thorin, Storjunkaren, auringon ja Seitan.", {
            ...plate,
            src: "/uskonto/schefferus-1674-names.jpg",
          }),
        ],
      },
      {
        id: "image",
        name: "Kuva",
        about:
          "Thorin kuvan kirja sanoo olevan puuta, vasara oikeassa kädessä, pöydällä. Auringosta ei ole kuvaa. Storjunkare on kivi, joskus linnun, joskus ihmisen näköinen, ja sille annettu nimi on sivulla. Kiveä ei ole hiottu. Kirja kuvaa myös uhria. Sitä ei kerrota tässä askelittain. (Schefferus 1674)",
        shots: [
          shot("idol", "1674", "Puinen kuva vasaroineen, ja kivi, jota kirja kutsuu Storjunkareksi.", {
            ...plate,
            src: "/uskonto/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "stone",
        name: "Kivi",
        about: "Kivi, jonka kuva on vapaasti käytettävissä, puuttuu. Pyydämme sen Siidasta.",
        shots: [{ id: "ask", line: "Saamelaismuseo Siida" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/religion",
    otherHref: "/uskonto",
    title: "Religion",
    description:
      "Schefferus in 1674: the names Thor, Storjunkare, the Sun, and Seita, and a wooden image with a hammer. His account, not a conclusion of this page.",
    heading: "Religion",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "The preface says the Chancellor of Sweden set Schefferus to write the book. He did not travel in Lapland. In this chapter he says that in the Pite and Lule lappmarks three were worshipped: Thor, Storjunkare, and the Sun. He takes fire for an emblem of the Sun, not a god of its own, and says wood was not worshipped as wood. In the Torne and Kemi lappmarks he says one name was used, Seita. In Lule the greater was called Tiermes or Aijeke, and the lesser Storjunkar. That the names meant the same is his conclusion. This is the book’s account of the Swedish lappmarks in 1674. (Schefferus 1674)",
        shots: [
          shot("names", "1674", "The page that names Thor, Storjunkare, the Sun, and Seita.", {
            ...plate,
            src: "/uskonto/schefferus-1674-names.jpg",
          }),
        ],
      },
      {
        id: "image",
        name: "The image",
        about:
          "The book says Thor’s image was wood, with a hammer in the right hand, set on a table. There is no image of the Sun. Storjunkare is a stone, sometimes like a bird and sometimes like a man, and the name given to it is printed on the page. The stone is not polished. The book also describes a sacrifice. It is not set out here as steps. (Schefferus 1674)",
        shots: [
          shot("idol", "1674", "A wooden image with a hammer, and a stone the book calls Storjunkare.", {
            ...plate,
            src: "/uskonto/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "stone",
        name: "A stone",
        about: "A stone whose picture we may use is missing. We are asking Siida.",
        shots: [{ id: "ask", line: "Sámi Museum Siida" }],
      },
    ],
  },
};

const drum: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/rumpu",
    otherHref: "/en/drum",
    title: "Rumpu",
    description:
      "Schefferuksen rummut vuodelta 1674. Kirja kutsuu niitä nimillä Kannus ja Quobdas, ja painaa useamman rummun kuvan.",
    heading: "Rumpu",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Nimilehti luettelee loitsut kirjan aiheiksi. Rumpua kirja sanoo kutsuttavan nimillä Kannus ja Quobdas. Se tehdään männyn, kuusen tai koivun juuresta, joka halkaistaan ja koverretaan. Nahka kiinnitetään tapeilla, joskus poron jänteellä. Kuvat värjätään lepän kuorella. Olaus Magnus kutsui rumpua alasimeksi. Schefferus sanoo sen virheeksi, ja että kaiverrukseen piirretty sepän vasara on väärä. Lyöntiväline on poronsarvea. Nahalle pannaan vaskirenkaita, joita kirja kutsuu osoittimeksi. Samuel Rheenin mukaan viivojen yläpuolelle piirretään Thor ja Storjunkare, ja aurinko keskelle. Kirja sanoo rummulla kysytyn metsästyksestä, taudista ja kaukaisista asioista. Se kirjoittaa myös hengistä ja pirusta. Se on hänen kielensä. Menettelyä ja lauluja ei toisteta tässä. (Schefferus 1674)",
        shots: [
          shot("ab", "1674", "Rummut A ja B, poronsarvesta tehty vasara ja renkaat. Kirjan selitys on sivulla.", {
            ...plate,
            src: "/rumpu/schefferus-1674.jpg",
          }),
          shot("cd", "1674", "Rummut C ja D, yläpuoli ja alapuoli.", {
            ...plate,
            src: "/rumpu/schefferus-1674-more.jpg",
          }),
          shot("f", "1674", "Rumpu F, ja kirjan kuvaus renkaista ja vasarasta.", {
            ...plate,
            src: "/rumpu/schefferus-1674-f.jpg",
          }),
        ],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/drum",
    otherHref: "/rumpu",
    title: "The drum",
    description:
      "Schefferus in 1674 on the drum. The book calls it Kannus and Quobdas, and prints several of them.",
    heading: "The drum",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "The title page lists conjurations among the subjects of the book. It says the drum is called Kannus, or Quobdas. It is made from a root of pine, fir, or birch, cleft and hollowed. The skin is fastened with pegs, and he has seen some sewn with reindeer sinew. The pictures are stained with the bark of an alder. Olaus Magnus called the drum an anvil. Schefferus says that was a mistake, and that the smith’s hammer in an engraving is the wrong tool. The hammer is of reindeer horn. A bunch of brass rings, which the book calls the index, is laid on the skin. According to Samuel Rheen, Thor and Storjunkare are drawn above the lines, and the sun in the middle. The book says the drum was used to ask about hunting, illness, and things at a distance. It also writes of spirits and a devil. That is his language. The manner of the ceremony, and the songs, are not repeated here. (Schefferus 1674)",
        shots: [
          shot("ab", "1674", "Drums A and B, with the horn hammer and the rings. The book’s key is on the page.", {
            ...plate,
            src: "/rumpu/schefferus-1674.jpg",
          }),
          shot("cd", "1674", "Drums C and D, the upper side and the lower.", {
            ...plate,
            src: "/rumpu/schefferus-1674-more.jpg",
          }),
          shot("f", "1674", "Drum F, and the book’s account of the rings and the hammer.", {
            ...plate,
            src: "/rumpu/schefferus-1674-f.jpg",
          }),
        ],
      },
    ],
  },
};

const games: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/leikit",
    otherHref: "/en/games",
    title: "Leikit",
    description:
      "Schefferus 1674 leikeistä: hyppy lumessa, pallo, paini vyötäisistä, jousi, kortit ja puinen noppa.",
    heading: "Leikit",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Kirja kertoo leikeistä, joita pelattiin talvella ja markkinoilla. Lumeen vedetään viiva. Sen takaa otetaan vauhti ja hypätään pituutta. Kaksi miestä pitää köyttä tai seivästä, tavallisesti miehen korkeudella, ja yli hypätään. Pieni maali ammutaan jousella. Palkinnot ovat harvoin rahaa, tavallisesti oravannahkoja. Nahkapallo on heinillä täytetty, nyrkin kokoinen. Kaksi joukkuetta lyö sitä mailalla. Jos pallo kopataan ennen maata, lyöntivuoro vaihtuu. Toisessa pelissä kovaksi jäätyneeseen lumeen vedetään kaksi viivaa, ja maali tehdään mailalla. Kädellä heittäminen on kielletty. Miehet painivat vyötäisistä. Vyö kiertää kirjan mukaan kuudesti. Lukot ja vilppi ovat kiellettyjä. Kortit ostetaan kauppiailta. Nopat tehdään puusta, ja X on vain yhdellä sivulla. Kaksi noppaa voittaa, kun molemmissa näkyy X. Panoksena on oravannahka tai luoti. Kuvassa ei ole leikkiä. Pyydämme puista noppaa Norsk Folkemuseumilta. (Schefferus 1674)",
        shots: [{ id: "ask", line: "Norsk Folkemuseum" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/games",
    otherHref: "/leikit",
    title: "Games",
    description:
      "Schefferus in 1674 on games: a leap in the snow, a ball, wrestling by the girdle, the bow, cards, and a wooden die.",
    heading: "Games",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "The book tells of games played in winter and at the fairs. A line is drawn in the snow. From a mark behind it each person runs and leaps for distance. Two men hold a rope or a pole, usually at the height of a man, and the leap is for height. A small mark is shot at with a bow. The prizes are seldom money, usually squirrel skins. The ball is leather stuffed with hay, about the size of a fist. Two sides strike it with a club. If it is caught before it touches the ground, the sides change. In another game two lines are drawn in the frozen snow, and the goal is taken with a bandy. Throwing by hand is foul. The men wrestle by the girdle. The book says the girdle goes six times round. Locks and deceit are forbidden. Cards are bought from the merchants. The dice are wood, with an X on one side only. Two dice win when each shows the X. The stake is a squirrel skin, or a bullet. The book has no picture of a game. We are asking Norsk Folkemuseum for a wooden die. (Schefferus 1674)",
        shots: [{ id: "ask", line: "Norsk Folkemuseum" }],
      },
    ],
  },
};

const marriage: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/haat",
    otherHref: "/en/marriage",
    title: "Häät",
    description:
      "Schefferus 1674 häistä: porot myötäjäisinä, kosinta vanhemmille, ja morsian kahden taluttajan välissä.",
    heading: "Häät",
    places: [
      {
        id: "suit",
        name: "Kosinta",
        about:
          "Kirja sanoo, että vaimoksi haettiin naista, jolla oli poroja. Lapselle annettiin pian syntymän jälkeen poroja, ja niiden karttuma oli lapsen osuus. Kosinta tehtiin veronmaksussa tai markkinoilla. Mies toi isänsä ja puhemiehen, ja jäi itse ovelle pilkkomaan puita, kunnes hänet kutsuttiin. Asia sanottiin ensin vanhemmille, ei naiselle. Tervehdys oli suudelma, jossa myös nenät koskettivat, muuten se ei kirjan mukaan ollut tervehdys. Lahjana oli poron kieli ja muita harvinaisuuksia. Jos nainen kieltäytyi, hän heitti ne maahan miehen jalkoihin. Kosinta saattoi kestää kaksi tai kolme vuotta, koska lahjat piti antaa vanhemmille ja läheisille. Matkalauluja kirja painaa. Niitä ei kirjoiteta tässä uudelleen. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "y1674",
        name: "1674",
        about:
          "Vihkiminen tehtiin kirkossa. Miehet kulkivat ensin, naiset perässä. Morsian kulki kahden taluttajan välissä, ja kirja sanoo häntä vietävän kuin vastahakoisena. Johannes Tornaeus sanoo taluttajiksi isän ja veljen. Olauksen kertomuksen piikivestä ja tulesta Schefferus hylkää. Pidot olivat vanhempien kodassa. Vieraat toivat raa’an lihan edellisenä päivänä, ja yksi mies keitti ja paloitteli. Tila ei riittänyt lapsille: he nousivat katolle ja laskivat koukun narussa. Kiitettiin ja käteltiin. Mies jäi vuodeksi isänsä palvelukseen. Myötäjäisinä kirja sanoo sata poroa tai enemmän, sekä hopeaa, kuparia, kodan ja vuoteen. Kahta vaimoa tai eroa se sanoo tuntemattomaksi. Vanhemman väitteen, että vaimo annettiin vieraalle, se kertoo ja epäilee. (Schefferus 1674)",
        shots: [
          shot("bride", "1674", "Morsian kahden taluttajan välissä, niin kuin kirja piirtää saattueen.", {
            ...plate,
            src: "/haat/schefferus-1674.jpg",
          }),
        ],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/marriage",
    otherHref: "/haat",
    title: "Marriage",
    description:
      "Schefferus in 1674 on marriage: reindeer as the portion, the suit put to the parents, and the bride between two leaders.",
    heading: "Marriage",
    places: [
      {
        id: "suit",
        name: "The suit",
        about:
          "The book says a wife was sought among women who had reindeer. Soon after birth a child was given reindeer, and their increase was the child’s portion. The suit was made at the paying of tax, or at a fair. The man brought his father and a spokesman, and waited at the door chopping wood until he was called in. The matter was put first to the parents, not to the woman. The greeting was a kiss in which the noses also touched, or else, the book says, it was no greeting. The gift was a reindeer tongue and other rarities. If she refused, she threw them down at his feet. The suit could last two or three years, because gifts had to be given to the parents and the near kin. The book prints songs for the journey. They are not retyped here. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "y1674",
        name: "1674",
        about:
          "The marriage was made in church. The men walked first, and the women after. The bride was led between two people, and the book says she was drawn along as if unwilling. Johannes Tornaeus says the two were her father and her brother. Schefferus rejects Olaus Magnus on a joining by flint and steel. The feast was in the parents’ hut. The guests brought the meat raw the day before, and one man boiled it and carved it. There was no room for the children: they climbed onto the roof and let down a hook on a thread. Thanks were given, and hands taken. The husband stayed a year in his father’s service. For the dowry the book says a hundred reindeer or more, and silver, copper, a tent, and bedding. It says two wives, and divorce, were unknown. An older claim, that a wife was offered to a guest, it reports and doubts. (Schefferus 1674)",
        shots: [
          shot("bride", "1674", "The bride between two leaders, as the book draws the procession.", {
            ...plate,
            src: "/haat/schefferus-1674.jpg",
          }),
        ],
      },
    ],
  },
};

const reindeer: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/poro",
    otherHref: "/en/reindeer",
    title: "Poro",
    description:
      "Schefferus 1674 porosta: kuva, jonka hän sanoo piirretyn elävästä, sekä lypsy, juusto ja korvamerkki.",
    heading: "Poro",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Kirja sanoo, ettei hevosia, aaseja, härkiä, lampaita eikä vuohia pidetty omina. Lampaita, vuohia ja härkiä ostettiin naapureilta yhdeksi kesäksi ja teurastettiin ennen talvea. Poron se erottaa Pliniuksen taranduksesta ja Lomeniuksen neljästä sarvesta. Kuva on hänen korjauksensa. Sarvista kaksi on suuremmat. Sorkka on paksu, ja kävellessä nivelet pitävät ääntä. Väri on lähempänä tuhkanväriä kuin hirven. Eläin on luonnostaan villi, ja kesyjä on paljon. Kolmas laji syntyy villin ja kesyn välille. Se on suurempi ja vetää pulkkaa, ja on joskus päistelevä. Silloin ajaja kääntää pulkan ja menee sen alle. Kiima on Matteuksen päivän tienoissa. Silloin kaadetun hirvaan liha haisee, eikä niitä kaadeta. Vaadin vasoo kirjan mukaan toukokuussa, yhden vasan. Sadasta ei kymmenen ole maho. Täyteen mittaan kasvetaan neljässä vuodessa. Työhön valitut kuohitaan vuoden iässä. (Schefferus 1674)",
        shots: [
          shot("deer", "1674", "Poro, jonka kirja sanoo piirretyn elävästä.", {
            ...plate,
            src: "/poro/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "milk",
        name: "Lypsy",
        about:
          "Vaadinta on kirjan mukaan noin sata kahtakymmentä hirvasta kohti. Lypsy tehdään polvillaan, kerran päivässä illalla. Loppu jää vasalle. Enimmillään tulee ruotsalainen tuoppi ja puoli. Maito on rasvaista. Juusto tehdään kymmenen poron maidosta, pyöreä ja kahden sormen paksuinen, eikä sitä paineta käsin. Voita ei tule. Kesällä ruoka on ruohoa ja lehtiä, talvella valkoista jäkälaa lumen alta. Merkki pannaan korvaan, ei sarveen, koska sarvi putoaa. Sutta vastaan käytetään etujalkoja enemmän kuin sarvia. Kirja sanoo, ettei poro elä yli kymmentä vuotta. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/reindeer",
    otherHref: "/poro",
    title: "The reindeer",
    description:
      "Schefferus in 1674 on the reindeer: a picture he says is drawn to the life, and the milking, the cheese, and the ear mark.",
    heading: "The reindeer",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "The book says horses, asses, oxen, sheep, and goats were not kept as their own. Sheep, goats, and oxen were bought from neighbours for one summer and killed before winter. It separates the reindeer from Pliny’s tarandus, and from the four horns in Lomenius. The picture is his correction. Two of the horns are larger. The hoof is thick, and the joints make a noise in walking. The colour is nearer ash than a stag’s. The animal is naturally wild, and many are tame. A third kind is bred of the wild and the tame. It is larger, draws the sledge, and is sometimes headstrong. Then the driver turns the sledge and lies under it. The rut is about St Matthew’s day. A buck killed then stinks, and they are not killed. The book says the doe calves in May, one calf. Of a hundred, not ten are barren. They are full grown in four years. Those kept for work are gelded at a year. (Schefferus 1674)",
        shots: [
          shot("deer", "1674", "The reindeer the book says is drawn to the life.", {
            ...plate,
            src: "/poro/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "milk",
        name: "Milking",
        about:
          "The book says there are about a hundred does to twenty bucks. They are milked kneeling, once a day, in the evening. The rest is left for the calf. The most at one time is a Swedish pint and a half. The milk is fat. A cheese takes the milk of ten reindeer. It is round and two fingers thick, and it is not pressed by hand. There is no butter. In summer the food is grass and leaves, in winter a white moss scraped from under the snow. The mark is put on the ear, not the horn, because the horn is cast. Against the wolf the forefeet are used more than the horns. The book says a reindeer never lives above ten years. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

export const laterStories = { religion, drum, games, marriage, reindeer };
