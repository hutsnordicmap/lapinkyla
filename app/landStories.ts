import type { Locale } from "@/app/content";
import type { StoryCopy } from "@/app/story";

const year: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/vuosi",
    otherHref: "/en/year",
    title: "Vuosi",
    description:
      "Schefferus 1674 valosta, lumesta ja maasta: kesän aurinko, talven hämärä, ja kesä, joka kirjan mukaan tuli viikossa.",
    heading: "Vuosi",
    places: [
      {
        id: "sun",
        name: "Aurinko",
        about:
          "Kirja sanoo, että kesällä aurinko ei laske muutamaan kuukauteen, ja talvella se ei nouse. Herbersten sanoo pimeän kestävän neljäkymmentä päivää. Sama luku ei kirjan mukaan päde koko maahan, koska osa on lähempänä napaa ja osa idempänä tai lännempänä. Talvellakin aurinko tulee joka päivä niin lähelle, että on hämärä. Kun kuu paistaa, Petrus Claudiuksen mukaan kalastetaan ja tehdään ulkotyöt. Jos kuu ei paista ja ilma on kirkas, tähdet ja lumen valkeus riittävät. Kesällä aurinko kulkee matalalla, mutta niin kauan, että lämpö kasvaa. Kevättä ja syksyä kirja sanoo vieraiden laskevan, ei heidän. Olaus Petri Nieuren näki 24. kesäkuuta 1616, matkalla kirkkoon jota kirja kutsuu nimellä Thor, puiden silmut ja vihreän ruohon. Kahden viikon päästä lehdet olivat täysiä ja kasvit kukassa. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "snow",
        name: "Lumi",
        about:
          "Ilma on kirjan mukaan kylmä, kirkas ja terveellinen, ja tuulet ovat kovia. Silminnäkijä kertoi hänelle mereltä nousevasta tuulesta. Kesällä se nostaa pilven, joka peittää näön. Talvella se ajaa lumen. Jos ihminen jää siihen ulos, hän paneutuu maahan vaatteen alle ja odottaa, kunnes myrsky on ohi. Polut ovat silloin kadonneet. Vuorilla tuuli vie tavaran mukanaan. Suoja on luola. Lunta on niin paljon, että talvella koko maa on sen peitossa. Kuutamo heijastuu lumesta, ja yöllä näkee kuopat, jyrkänteet ja eläimet. Tallaantuneella lumella kaksi poroa vetää kirjan mukaan suuremman kuorman kuin kärryt ja kymmenen hevosta muulloin. Korkeimpien vuorten lumi ei sula. Muualla kevään vesi tulvii maan yli. Joet jäätyvät niin, että jää on paksumpi kuin kolme tai neljä kyynärää. Järvet ja meri kantavat kuorman. Sumu voi olla niin sakea, ettei vastaantulijaa erota, vaikka hän on vieressä. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "ground",
        name: "Maa",
        about:
          "Maa on kirjan mukaan kivinen ja kallioinen, ja järvien ja jokien tulvien pehmentämä. Olaus Petri sanoo eteläosan kelpaavan viljalle yhtä hyvin kuin Länsi-Pohjanmaan. Kirja vastaa, että kivi, hiekka, suot ja seisova vesi eivät ole viljamaan merkkejä. Ruohoa on paljon, ja karja lihoo sillä halvemmalla ja nopeammin kuin muulla. Metsät ovat suuria, etenkin Norjaa kohti, mutta eivät tiheitä. Korkeita vuoria kirja kutsuu nimellä Doffrini. Niiden paljailla huipuilla ei kasva puuta. Alhaalla laaksoissa on lähteitä, ja vesi on kirkasta. Metsissä on seisovia lampia. Pedoista, linnuista ja kaloista kirja lupaa puhua omissa luvuissaan. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/year",
    otherHref: "/vuosi",
    title: "The year",
    description:
      "Schefferus in 1674 on the light, the snow, and the ground: the summer sun, the winter twilight, and a summer the book says came in a week.",
    heading: "The year",
    places: [
      {
        id: "sun",
        name: "The sun",
        about:
          "The book says that for some months in summer the sun does not set, and in winter it does not rise. Herbersten says the dark lasts forty days. The book says the same count does not hold for the whole country, because part lies nearer the pole, and part further east or west. Even in winter the sun comes so near each day that there is a twilight. When the moon shines, Petrus Claudius says, they fish and do the work out of doors. If the moon does not shine and the air is clear, the stars and the whiteness of the snow are enough. In summer the sun travels low, but for so long that the heat grows. Spring and autumn, the book says, are what strangers count, not what they know. On 24 June 1616, going to the church the book calls Thor, Olaus Petri Nieuren saw the trees budding and the grass green. A fortnight later the leaves were full and the plants in flower. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "snow",
        name: "The snow",
        about:
          "The air, the book says, is cold, clear, and wholesome, and the winds are hard. An eyewitness told him of a wind off the sea. In summer it raises a cloud that hides the sight. In winter it drives the snow. A person caught in it lies down under a garment and waits until the storm has passed. The paths are then gone. On the mountains the wind carries things away. The shelter is a cave. There is so much snow that in winter the whole country is covered. Moonlight thrown back from the snow shows the pits, the cliffs, and the animals. On trodden snow two reindeer, the book says, draw a greater load than a cart and ten horses at another time. The snow on the highest mountains does not melt. Elsewhere the meltwater floods the land. Rivers freeze so that the ice is more than three or four cubits thick. The lakes and the sea bear a load. A mist can be so thick that a person close by cannot be told apart. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "ground",
        name: "The ground",
        about:
          "The ground, the book says, is stony and rocky, and softened by the floods of the lakes and rivers. Olaus Petri says the southern part is as fit for grain as Western Bothnia. The book answers that stone, sand, moors, and standing water are not the marks of corn land. There is plenty of grass, and the cattle are fattened on it more cheaply and sooner than on anything else. The woods are large, especially toward Norway, but not thick. High mountains the book calls Doffrini. No tree grows on their bare tops. In the valleys below there are springs, and the water is clear. The forests have standing pools. Of the beasts, the birds, and the fish, the book promises to speak in their own chapters. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const weapons: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/aseet",
    otherHref: "/en/weapons",
    title: "Aseet",
    description:
      "Schefferus 1674 jousesta, pyssystä ja sukista. Puujousi on metsästyksen sivulla, ja sukset on piirretty välineiden sivulle.",
    heading: "Aseet",
    places: [
      {
        id: "bow",
        name: "Jousi ja pyssy",
        about:
          "Puujousi, tuohesta tehty päällys ja ahvenen nahasta keitetty liima ovat metsästyksen sivulla. Tässä luvussa kirja lisää teräsjousen. Se on niin jäykkä, että jalka pannaan renkaaseen jousen päässä, ja jänne vedetään luiseen loveen rautakoukulla vyöltä. Nuolen kärki on rautaa tai luuta, isoa eläintä varten terävä ja pientä varten tylppä. Karhua varten on keihäs, jonka kirja sanoo olevan niin oman keihäänsä kaltainen, ettei sitä tarvitse kuvailla. Pyssyt tehtiin Soederhambnissa, maakunnassa jota kirja kutsuu nimellä Helsingia. Pohjalaiset ostivat ne ja myivät eteenpäin. Ruuti ja lyijy tulivat sieltä, joskus Norjasta. Kirja sanoo, että pyssyä loitsittiin niin kuin muutkin metsästäjät, jotta se ei pettäisi. Sitä ei selitetä tässä. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "skis",
        name: "Sukset",
        about:
          "Suksia kirja kutsuu nimillä Skider, Skier, Andrer, Ondrur ja Skiidh. Olaus Magnus sanoo niiden olevan viisi tai kuusi kyynärää ja aina jalan verran eri pituiset. Schefferus ei usko tätä säännöksi. Leidenissä oleva pari on samanmittainen. Hänen omistaan pidempi on päällystetty piellä, lyhyempi on paljas. Lauta ei ole aivan suora, vaan kohoaa hieman jalan kohdalta. Kärki nousee edestä, ei takaa. Side on vitsas sivuilla, ei pohjan läpi, ja se sidotaan säären taakse. Kuvan, jossa suksi on terävä puukenkä ja jalka menee sisään takaa, hän hylkää piirtäjän keksintönä. Kahden suksen piirros on sivulla Välineet. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/weapons",
    otherHref: "/aseet",
    title: "Weapons",
    description:
      "Schefferus in 1674 on the bow, the gun, and the skis. The wooden bow is on the hunting page, and the skis are drawn on the tools page.",
    heading: "Weapons",
    places: [
      {
        id: "bow",
        name: "Bow and gun",
        about:
          "The wooden bow, the birch-bark cover, and the glue of perch skin are on the hunting page. In this chapter the book adds a steel bow. It is so stiff that the foot is put into a ring at the head, and the string is drawn to a bone nut with an iron hook from the girdle. The arrowhead is iron or bone, sharp for a large animal and blunt for a small one. For the bear there is a spear, which the book says is so like the spears he knew that it needs no description. The guns were made at Soederhambn, in Helsingia. The Bothnians bought them and sold them on. Powder and lead came from there, and sometimes from Norway. The book says the gun was enchanted, as other hunters did, so that it should not miss. That is not set out here. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "skis",
        name: "The skis",
        about:
          "The book calls the skis Skider, Skier, Andrer, Ondrur, and Skiidh. Olaus Magnus says they are five or six ells long, and that one is always a foot longer than the other. Schefferus does not believe this as a rule. The pair at Leiden is of one length. Of his own, the longer is covered with pitch, and the shorter is plain. The board is not quite straight, but rises a little where the foot is placed. The point turns up in front, not behind. The binding is a withe at the sides, not through the bottom, and it is tied to the back of the leg. A picture in which the ski is a pointed wooden shoe, and the foot enters from behind, he rejects as the painter’s fancy. The drawing of the two skis is on the tools page. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const beasts: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/elaimet",
    otherHref: "/en/beasts",
    title: "Eläimet",
    description:
      "Schefferus 1674 karhusta, hirvestä ja sudesta. Kettu ja ahma mainitaan. Värien luetteloa ei kopioida.",
    heading: "Eläimet",
    places: [
      {
        id: "bear",
        name: "Karhu",
        about:
          "Karhu on kirjan mukaan metsän eläimistä ensimmäinen. Samuel Rheen kutsuu sitä metsien kuninkaaksi, koska se on voimakkaampi ja rajumpi kuin muut. Niitä on paljon. Ne, joilla on valkoinen seppele kaulassa, ovat rajumpia, ja niitä on paljon pohjoisessa. Ne käyvät karjan kimppuun ja kaatavat aittaan kootun ruoan. Aitta on puun latvassa, lihaa ja kalaa varten. Yhtenä yönä karhu voi hävittää sen, mitä on säästetty. Puuhun salvettu aitta on piirretty sivulle Asumus. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "elk",
        name: "Hirvi",
        about:
          "Hirvi ei ole poro. Sen kirja erottaa porosta koon, lyhyemmät sarvet, riippuvat huulet ja tumman keltaisen ja tuhkan värin. Kaviot eivät kolise, niin kuin poron. Lapissa sitä ei kirjan mukaan ole suurta sukua. Niitä tuodaan muualta, etenkin Liettuasta. Olaus sanoo niiden pysyvän etelässä ja tulevan juostuksi kiinni. Kirja sanoo, että kahdesti vuodessa suuret laumat uivat joen, jota se kutsuu nimellä Niva, keväällä Karjalaan ja syksyllä takaisin Venäjälle. Kaarle IX otti tapettujen nahat kruunulle. Se on sama määräys kuin markkinoiden sivulla. Muutamia peuroja on nähty. Kirja nimeää ne ja siirtyy eteenpäin. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "wolf",
        name: "Susi",
        about:
          "Susia on paljon. Ne ovat vaaleampia kuin muualla, ja karva on paksumpi. Ne ahdistavat poroja eniten. Miehen papereista, jota kirja kutsuu nimellä Euræus, se sanoo, ettei susi käynyt seipääseen sidotun poron kimppuun. Syyn hän arvaa itse. Se on hänen arvauksensa. Kirja sanoo susien käyneen myös ihmisten kimppuun, ja erityisesti naisen, jonka aika oli lähellä. Hän ei matkustanut ilman opasta. Ahmaa ruotsalaiset kutsuvat nimellä Jerff. Se käy vedessä, mutta ei ole saukko. Majavia on paljon, kalan ja hiljaisten vesien tähden. Kettuja on useaa väriä. Musta on arvokkain, koska se on harvinainen. Värien tarkempaa luetteloa ei kopioida. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/beasts",
    otherHref: "/elaimet",
    title: "Beasts",
    description:
      "Schefferus in 1674 on the bear, the elk, and the wolf. The fox and the glutton are named. The list of colours is not copied.",
    heading: "Beasts",
    places: [
      {
        id: "bear",
        name: "The bear",
        about:
          "The bear, the book says, is the first of the beasts of the woods. Samuel Rheen calls it king of the woods, because it is stronger and fiercer than the rest. They are many. Those with a white wreath about the neck are fiercer, and many of them are in the north. They go for the cattle and overturn the food laid up in the store. The store is fixed in the top of a tree, for meat and fish. In one night a bear can destroy what has been kept. The store on a cut tree is drawn on the dwellings page. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "elk",
        name: "The elk",
        about:
          "The elk is not the reindeer. The book parts them by size, by shorter horns, by hanging lips, and by a dark yellow and ash colour. The hoofs make no noise, as a reindeer’s do. The book says there is no great breed of them in Lapland. They are brought from elsewhere, especially Lithuania. Olaus says they stay in the south and are run down. The book says that twice a year great herds swim the river it calls Niva, in spring into Karelia and in autumn back to Russia. Charles IX took the skins of those that were killed for the crown. That is the same order as on the fairs page. A few stags have been seen. The book names them and goes on. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "wolf",
        name: "The wolf",
        about:
          "Wolves are many. They are paler than elsewhere, and the hair is thicker. They trouble the reindeer most. From the papers of a man the book calls Euræus, it says a wolf did not go for a reindeer tied to a stake. The reason he gives is his own guess. The book says wolves also went for people, and especially for a woman whose time was near. She did not travel without a guide. The glutton the Swedes call Jerff. It goes in the water, and it is not the otter. Beavers are many, because of the fish and the quiet water. Foxes are of several colours. The black is the most valued, because it is rare. The closer list of colours is not copied. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const birds: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/linnut",
    otherHref: "/en/birds",
    title: "Linnut",
    description:
      "Schefferus 1674 linnuista. Valkoinen riekko pysyy lumella. Kalat ovat kalastuksen sivulla.",
    heading: "Linnut",
    places: [
      {
        id: "water",
        name: "Tulijat",
        about:
          "Samuel Rheen nimeää joutsenet, hanhet, sorsat ja veden sekä metsän linnut. Kesyjä sorsia ei ole. Kirja sanoo huomionarvoiseksi sen, että ne tulevat etelästä pohjoiseen, tekevät pesän ja kasvattavat poikaset. Metsäkanalintujen väreistä hän väittelee pitkään. Sitä väittelyä ei kopioida. Ruotsalaisten Jærpe elää metsässä, ja se kelpaa ruoaksi. Kirja epäilee, onko se sama lintu kuin lehtokurppa. Kalat ovat sivulla Kalastus. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "ptarmigan",
        name: "Riekko",
        about:
          "Mikään lintu ei ole kirjan mukaan runsaampi kuin valkoinen riekko. Sitä on metsissä ja korkeimmilla vuorilla silloinkin, kun vuoret ovat lumen peitossa. Talvella se on lumenvalkoinen. Kanan siiven alla on yksi musta sulka. Keväällä se harmaantuu ja pysyy harmaana talveen. Kirja kutsuu sitä nimellä Lagopus, ja Samuel Rheen nimillä Fialriipor ja Snioeripor. Lapsen sivulla sama lintu on se, jonka siivet, jalat ja nokka pannaan tytön komsioon. Kuva puuttuu. Pyydämme sen Siidasta. (Schefferus 1674)",
        shots: [{ id: "ask", line: "Saamelaismuseo Siida" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/birds",
    otherHref: "/linnut",
    title: "Birds",
    description:
      "Schefferus in 1674 on the birds. The white partridge stays on the snow. The fish are on the fishing page.",
    heading: "Birds",
    places: [
      {
        id: "water",
        name: "Those that come",
        about:
          "Samuel Rheen names swans, geese, ducks, and the birds of the water and of the woods. There are no tame ducks. The book says it is remarkable that they come from the south into the north, make a nest, and raise the young. He argues at length about the colours of the heathcock. That argument is not copied. The bird the Swedes call Jærpe lives in the woods, and it serves as food. The book doubts whether it is the same bird as the woodcock. The fish are on the fishing page. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "ptarmigan",
        name: "The white partridge",
        about:
          "No bird, the book says, is more numerous than the white partridge. It is in the woods and on the highest mountains, even when the mountains are covered with snow. In winter it is as white as the snow. Under the hen’s wing there is one black feather. In spring it turns grey, and stays grey until winter. The book calls it Lagopus, and Samuel Rheen calls it Fialriipor and Snioeripor. On the children page the same bird is the one whose wings, feet, and beak are hung on a girl’s cradle. A picture is missing. We are asking Siida. (Schefferus 1674)",
        shots: [{ id: "ask", line: "Sámi Museum Siida" }],
      },
    ],
  },
};

const metals: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/metallit",
    otherHref: "/en/metals",
    title: "Metallit",
    description:
      "Schefferus 1674 ensimmäisestä hopeakaivoksesta Kristiinan aikana, ja siitä että hän ei vahvista kuulemaansa kultakaivosta.",
    heading: "Metallit",
    places: [
      {
        id: "silver",
        name: "Hopea",
        about:
          "Vanhat kirjoittajat arvelivat metalleja. Olaus Magnus sanoo, ettei hänen aikaansa ollut rauta-, kupari- eikä hopeakaivosta, ja että veneet sidottiin ilman nauloja. Veneen sidos on sivulla Veneet. Ensimmäisen hopeakaivoksen kirja sijoittaa Kristiinan aikaan, sen ajan 35. vuoteen. Sen löysivät Piitimen asukkaat, vuorten läheltä, jotka jakavat Ruotsin Norjasta. Löytäjän kirja nimeää Loens Person, ja paikan Nasafialo. Vuonna 1645 Ericus Flemming, Laisin vapaaherra, avasi kaivoksen ja rakennutti sulaton. Lyijysuoni on kirjan mukaan rikkaampi kuin hopea ja helpompi työstää. Kivi rikottiin ruudilla, ei hakulla. Tapaa ei selitetä. Noin vuonna 1658, Kaarle Kustaan sodassa Tanskaa vastaan, sen hävitti käskynhaltija, jota kirja kutsuu nimellä Van Anen. Sen jälkeen kukaan ei maksanut kaivoksen puhdistamista. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "others",
        name: "Muut",
        about:
          "Kirja nimeää myöhempiä kaivoksia Luulajassa ja Torniossa, rautaa ja toisen hopean. Kirjoitusasut eivät pysy samoina, joten luetteloa ei kopioida. Vuonna 1671 hän kuuli kultakaivoksesta. Varmuutta ei ollut, eikä hän jää siihen. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/metals",
    otherHref: "/metallit",
    title: "Metals",
    description:
      "Schefferus in 1674 on the first silver mine, in the reign of Christina, and on a gold mine he heard of and would not insist on.",
    heading: "Metals",
    places: [
      {
        id: "silver",
        name: "Silver",
        about:
          "The older writers guessed at metals. Olaus Magnus says there was in his time no mine of iron, copper, or silver, and that the boats were fastened without nails. The fastening of the boat is on the boats page. The book puts the first silver mine in the reign of Christina, in the thirty-fifth year of the age. The inhabitants of Pite found it, near the mountains that divide Sweden from Norway. The finder the book names Loens Person, and the place Nasafialo. In 1645 Ericus Flemming, baron of Lais, opened the mine and had a melting-house built. A vein of lead, the book says, is richer than the silver and easier to work. The rock was broken with gunpowder, not with pickaxes. The manner of it is not set out. About 1658, in the war of Carolus Gustavus against Denmark, it was spoiled by the governor the book calls Van Anen. After that no one would pay to clear the mine. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "others",
        name: "The others",
        about:
          "The book names later mines in Lule and in Torne, of iron and of a second silver. The spellings do not stay the same, so the list is not copied. In 1671 he heard of a gold mine. There was no certainty, and he does not insist on it. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

export const landStories = { year, weapons, beasts, birds, metals };
