import type { Locale } from "@/app/content";
import { museumPhoto, shot, type StoryCopy } from "@/app/story";

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

const name: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/nimi",
    otherHref: "/en/name",
    title: "Nimi",
    description:
      "Mitä Schefferus kirjoittaa vuonna 1674 nimistä Sabmi ja Lapp, ja miten hän jakaa Ruotsin alaisen Lapinmaan.",
    heading: "Nimi",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus käy läpi selityksiä nimelle ja hylkää tylsyyden, nahat ja juoksemisen. Hän kirjoittaa, että Uumajan lapinmaan ihmiset kutsuvat itseään nimellä Sabmieladtz ja Tornion lapinmaan ihmiset nimellä Sameednam, sanasta Sabmi tai Same. Nimeä Lapp hän sanoo pidetyn loukkaavana: kukaan säätyläinen ei suostunut siihen. Oman selityksensä hän antaa näin, että sana olisi tullut Suomesta lähteneistä. Se on hänen mielipiteensä, ei tämän sivun päätös. Nimeä hän ei löydä antiikin kirjoittajilta. Ensimmäinen, johon hän luottaa, on Saxo noin vuonna 1190. (Schefferus 1674)",
        shots: [
          shot("name", "1674", "Sivu, jossa kirja painaa nimet Sabmieladtz ja Sameednam.", {
            ...plate,
            src: "/nimi/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "jako",
        name: "Jako",
        about:
          "Kirja seuraa Anders Burea. Se antaa etelän ja sisämaan Ruotsille, rannikon, jota se kutsuu nimellä Findmark, Norjalle, ja osan linnasta nimeltä Warhuis Vienanmeren suulle Venäjälle. Ruotsin alaista osaa se sanoo ensin kuudeksi lapinmaaksi, ja laskee sitten Ångermanlandin Uumajan alle, koska niillä oli sama käskynhaltija. Muut viisi on nimetty jokien mukaan: Uumaja, Piitime, Luulaja, Tornio ja Kemi. Pienempiä osia se sanoo ruotsalaisten kutsuvan byareiksi. Luulajan lapinmaassa se nimeää Jochmochin, Tornion lapinmaassa Kithilabyn. Suvulla, jota ruotsalaiset kutsuvat sanalla rakar, oli kirjan mukaan oma alue, jossa oli jokia, järviä ja metsiä. Tämä on jako vuonna 1674, ei viiva kartalla. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/name",
    otherHref: "/nimi",
    title: "The name",
    description:
      "What Schefferus writes in 1674 about the names Sabmi and Lapp, and how he divides the part of Lapland under Sweden.",
    heading: "The name",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus goes through explanations of the name and rejects dullness, skins, and running. He writes that the people of Lappia Umensis call themselves Sabmieladtz, and those of Lappia Tornensis Sameednam, from the word Sabmi or Same. He says the name Lapp was resented, and that no person of quality would endure it. His own explanation is that the word came from people who had left Finland. That is his opinion, not a conclusion of this page. He does not find the name in the ancient writers. The first he trusts is Saxo, about 1190. (Schefferus 1674)",
        shots: [
          shot("name", "1674", "The page on which the book prints Sabmieladtz and Sameednam.", {
            ...plate,
            src: "/nimi/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "division",
        name: "The division",
        about:
          "The book follows Anders Bure. It gives the south and the inland to Sweden, the coast it calls Findmark to Norway, and the part from the castle it calls Warhuis to the mouth of the White Sea to Russia. It first names six lappmarks under Sweden, then counts Ångermanland with Ume, because one lieutenant governed both. The other five are named from rivers: Ume, Pite, Lule, Torne, and Kemi. It says the Swedes call the smaller parts byar. In the Lule lappmark it names Jochmoch, and in the Torne lappmark Kithilaby. A family, which the Swedes call a rakar, had in the book’s account its own ground, with rivers, lakes, and woods. This is the division in 1674, not a line on a map. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const food: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/ruoka",
    otherHref: "/en/food",
    title: "Ruoka",
    description:
      "Schefferuksen kuvaus ruoasta vuonna 1674: poro tunturissa, kala ja riista metsissä, ja kaksi ruokarukousta.",
    heading: "Ruoka",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Kirja sanoo, ettei ruoka ollut sama kaikkialla. Tunturissa elettiin lähes kokonaan porosta: talvella keitettyä lihaa, kesällä maitoa, juustoa ja kuivattua lihaa. Kieltä ja luuydintä tarjottiin papille. Poron veri keitettiin vedessä puuroksi. Norjasta ostettiin joskus muutama lammas, vuohi ja härkä, lypsettiin kesällä ja teurastettiin talvella, koska laidunta ja navettaa ei ollut. Metsissä syötiin kalaa, lintuja ja riistaa, useimmin kalaa, ja karhun lihaa pidettiin parhaana. Leipä ja suola olivat lähes tuntemattomia. Leivän sijaan jauhettiin kuivattua kalaa. Suolan sijaan männyn nila kuivattiin, haudattiin ja punattiin tulella. Perjantaina ei syöty lihaa. Mansikat keitettiin omassa liemessään ja säilöttiin tuoheen. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "juoma",
        name: "Juoma",
        about:
          "Juoma oli tavallisesti vettä, talvella kuumana padasta lusikalla. Lientä lihasta ja kalasta kirja kutsuu nimellä Læbma. He joivat myös heraa. Olut oli tuntematon. Viinaa ostettiin markkinoilta. Kirja painaa kaksi ruokarukousta. Piitimen lapinmaan rukouksen se kääntää näin: kiitos Jumalalle, joka antoi tämän ruoan. Tornion lapinmaan rukouksen se painaa heidän kielellään ja kääntää: hyvä Jumala, kiitos tästä ruoasta, anna syödyn vahvistaa ruumista. Sanoja ei kirjoiteta tässä uudelleen. Tuohiastia on Siidan kokoelmasta. Luettelon aiheissa ovat koltat. (Schefferus 1674; Saamelaismuseo Siida)",
        shots: [
          shot(
            "vessel",
            "",
            "Tuohiastia. Luettelon aiheissa ovat koltat.",
            museumPhoto(
              "/ruoka/siida-tuohiastia.jpg",
              348,
              400,
              "https://www.finna.fi/Record/siida.sda-27583",
              "Saamelaismuseo Siida",
            ),
          ),
        ],
      },

    ],
  },
  en: {
    locale: "en",
    path: "/en/food",
    otherHref: "/ruoka",
    title: "Food",
    description:
      "Schefferus in 1674 on food: reindeer in the mountains, fish and game in the woods, and two graces.",
    heading: "Food",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "The book says the food was not the same everywhere. In the mountains people lived almost wholly on the reindeer: boiled meat in winter, and milk, cheese, and dried meat in summer. The tongue and the marrow were offered to the priest. Reindeer blood was boiled in water to a pudding. From Norway they sometimes bought a few sheep, goats, and oxen, milked them in summer, and killed them in winter, because there was neither pasture nor a stable. In the woods they ate fish, birds, and game, most often fish, and preferred bear above the rest. Bread and salt were almost unknown. Dried fish was ground instead of bread. Instead of salt, the inner rind of the pine was dried, buried, and reddened over a fire. On Fridays they ate no meat. Strawberries were boiled in their own juice and kept in birch bark. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "drink",
        name: "Drink",
        about:
          "The drink was ordinarily water, and in winter it was taken hot from the kettle with a spoon. The book calls the broth of meat and fish Læbma. They also drank whey. Ale and beer were unknown. Brandy was bought at the fairs. The book prints two graces. For Pite lappmark it translates: all thanks be given to God, who hath provided this meat. For Torne lappmark it prints the grace in their tongue and translates: good God, praised be thou for this meat, and let what we have eaten give strength to our bodies. The words are not retyped here. The birch-bark vessel is from Siida’s collection. The catalog subjects include the Skolt. (Schefferus 1674; Sámi Museum Siida)",
        shots: [
          shot(
            "vessel",
            "",
            "A birch-bark vessel. The catalog subjects include the Skolt.",
            museumPhoto(
              "/ruoka/siida-tuohiastia.jpg",
              348,
              400,
              "https://www.finna.fi/Record/siida.sda-27583",
              "Sámi Museum Siida",
            ),
          ),
        ],
      },
    ],
  },
};

const hunting: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/metsastys",
    otherHref: "/en/hunting",
    title: "Metsästys",
    description:
      "Schefferus 1674 metsästyksestä: koirat, sukset, jousi koivusta ja männystä, ja karhun pyynti sellaisena kuin kirja sen kertoo.",
    heading: "Metsästys",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Kirja sanoo metsästyksen olleen miesten työtä. Olaus Magnus väitti naistenkin metsästäneen. Schefferus ei usko sitä, ja kirjoittaa, ettei nainen saanut koskea aseisiin eikä tuotuun saaliiseen. Kesällä mentiin jalan koirien kanssa, talvella suksilla. Pienriista kaadettiin jousella ja nuolella, isompi keihäällä ja pyssyllä. Jousi oli koivua ja mäntyä, noin kolmen kyynärän mittainen, tuohella päällystetty, ja osat liimattiin ahvenen nahasta tehdyllä liimalla. Nuolen kärki oli rautaa tai luuta, pienriistalle tylppä. Kärppiä otettiin puisiin loukkuihin. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "bear",
        name: "Karhu",
        about:
          "Pisimmän kertomuksensa kirja antaa karhusta. Se sanoo, että pyynti aloitettiin rummulla, liha jaettiin, talja ripustettiin seipääseen naisten ammuttavaksi silmät peitettyinä, ja naiset ompelivat langasta ristin jokaista karhua kohti metsästäjien kaulaan. Kirja kutsuu näitä taikauskoksi. Tämä on kirjan kertomus, ei jokaisen paikan kuvaus. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "bow",
        name: "Jousi",
        about: "Jousi, jonka kuva on vapaasti käytettävissä, puuttuu. Pyydämme sen Norsk Folkemuseumilta.",
        shots: [{ id: "ask", line: "Norsk Folkemuseum" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/hunting",
    otherHref: "/metsastys",
    title: "Hunting",
    description:
      "Schefferus in 1674 on hunting: dogs, skis, a bow of birch and pine, and the bear hunt as the book tells it.",
    heading: "Hunting",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "The book says hunting was men’s work. Olaus Magnus wrote that the women hunted too. Schefferus does not believe him, and writes that a woman was not permitted to touch the weapons or the animals brought home. In summer they went on foot with dogs, in winter on skis. Small animals were taken with bow and arrow, larger ones with spears and guns. The bow was birch and pine, about three ells long, covered with birch bark, and the two pieces were glued with a glue of perch skin. The arrowhead was iron or bone, and blunt for the smaller game. Ermines were taken in wooden traps. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "bear",
        name: "The bear",
        about:
          "The book’s longest account is of the bear. It says a hunt began with the drum, the meat was shared, the skin was hung on a pole for the women to shoot at blindfolded, and the women worked a cross of wire for each bear and hung it on the hunters’ necks. The book calls these observances superstition. This is the book’s report, not a description of every place. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "bow",
        name: "A bow",
        about: "A bow whose picture we may use is missing. We are asking Norsk Folkemuseum.",
        shots: [{ id: "ask", line: "Norsk Folkemuseum" }],
      },
    ],
  },
};

const women: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/naiset",
    otherHref: "/en/women",
    title: "Naisten työ",
    description:
      "Schefferus 1674 naisten töistä: vaatteet, poron valjaat, jännelanka, neulotut lakit ja tinalla päällystetty lanka.",
    heading: "Naisten työ",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Kirja sanoo naisten tehneen ja parsineen vaatteet, kengät, saappaat ja lapaset, sekä remmit, joilla poro sidotaan pulkkaan. Lankaa tehtiin poron jänteestä: se puhdistettiin, kuivattiin ja pehmennettiin kalan rasvalla. Jänne oli noin kolmen kyynärän mittainen. Villasta kehrättiin kääreitä, ja jäniksen karvasta neulottiin lakkeja ja lapasia neljällä puikolla. Neljäs työ oli langan päällystäminen tinalla. Tina vedettiin langaksi torven rei’istä hampailla. Kirja epäilee väitettä, että kulta ja hopea olisi kudottu kankaaseen: metalli ostettiin kauppiailta ja ommeltiin tinilangalla. Alle pantiin sinistä, vihreää tai punaista verkaa, ei suoraan karvalle. (Schefferus 1674)",
        shots: [
          shot("wire", "1674", "Nainen vetää tinalankaa, ja kirja piirtää myös tinalla ommellut taskut.", {
            ...plate,
            src: "/naiset/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "both",
        name: "Molemmat",
        about:
          "Matkan, lypsyn ja kalastuksen kirja sanoo kuuluneen molemmille. Mies lähti ensin kuormineen, vaimo perässä omineen. Talvella molemmat istuivat pulkassa, kesällä kulkivat jalan. Naiset lypsivät porot ja, miesten poissa ollessa, kalastivat viikkoja, perkasivat ja kuivasivat. Kalastettiin verkoilla, kahden veneen väliin vedetyllä nuotalla, monihaaraisella atraimella ja talvella verkoilla jään alla. Yöllä keulassa poltettiin puita, jotta kala tuli valoon. Koukut olivat katajaa, eivät rautaa. Pulkka on sivulla Työ. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/women",
    otherHref: "/naiset",
    title: "Women’s work",
    description:
      "Schefferus in 1674 on the women’s work: clothes, reindeer harness, sinew thread, knitted caps, and thread covered with tin.",
    heading: "Women’s work",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "The book says the women made and mended the clothes, shoes, boots, and gloves, and the harness that joins the reindeer to the sledge. Thread was made of reindeer sinew: cleaned, dried, and softened with fish fat. A sinew was about three ells long. They spun wool for swaddling clothes, and knitted caps of hare’s fur, and gloves, with four needles. The fourth trade was covering thread with tin. The tin was drawn into wire through holes in horn, with the teeth. The book does not believe that gold and silver were woven into the cloth: the metal was bought from merchants and sewn on as tin thread. Under it they put blue, green, or red woollen cloth, not the fur itself. (Schefferus 1674)",
        shots: [
          shot("wire", "1674", "A woman drawing tin wire, and pouches the book shows sewn with it.", {
            ...plate,
            src: "/naiset/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "both",
        name: "Both",
        about:
          "The book says travel, milking, and fishing belonged to both. The man set out first with his load, and his wife next with hers. In winter both sat in a pulk, in summer both walked. The women milked the reindeer and, when the men were away, fished for weeks, gutted the fish, and dried it. They fished with nets, with a drag net between two boats, with a spear of several teeth, and in winter with nets under the ice. At night they burned wood at the prow so the fish came to the light. The hooks were juniper, not iron. The pulk is on the work page. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

export const bookStories = { name, food, hunting, women };
