import type { Locale } from "@/app/content";
import { museumPhoto, shot, type StoryCopy } from "@/app/story";

const book =
  "https://commons.wikimedia.org/wiki/File:The_History_of_Lapland_Wherein_Are_shewed_the_Original,_Manners,_Habits,_Marriages,_Conjurations,_etc._of_that_people._Written_by_John_Scheffer_(IA_SchefferHistoryofLaplandOxford1674Nbo).pdf";

const schefferus = {
  kind: "drawing" as const,
  href: book,
  credit: "Johannes Schefferus",
  licence: "pdm" as const,
  licenceLabel: "Public domain",
  width: 706,
  height: 1119,
};

const boats: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/vene",
    otherHref: "/en/boats",
    title: "Vene",
    description:
      "Saamelainen vene: Schefferuksen kuvaus ommellusta veneestä 1674, ja vene airoineen Ålloluoktasta 1948.",
    heading: "Vene",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus kirjoittaa, että veneenveistäjät tekivät veneitä mänty- tai kuusilaudoista ja ompelivat ne yhteen vitsaksilla. Olaus Magnus ja Johannes Tornaeus sanovat juurilla, ja kirja sanoo useimmiten poronjänteillä. Raot tilkittiin sammaleella. Airoja oli kaksi tai neljä, kiinnitettyinä niin, että yksi mies saattoi soutaa kahdella. Kirjassa ei ole veneen kuvaa. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "alloluokta",
        name: "Ålloluokta",
        about:
          "Vene airoineen Ålloluoktassa, Jokkmokissa, vuonna 1948. Kuvassa näkyy metallikiinnikkeitä. Tämä ei ole vuoden 1674 ommeltu vene. (Norsk Folkemuseum)",
        shots: [
          shot("boat", "1948", "Vene airoineen. Kuvassa on metallikiinnikkeitä.", {
            src: "/vene/alloluokta-1948.jpg",
            width: 1529,
            height: 1205,
            kind: "photo",
            href: "https://digitaltmuseum.no/011013360607/bat-med-arer-alloluokta-1948",
            credit: "Asbjørn Nesheim, Norsk Folkemuseum",
            licence: "by-sa-4",
            licenceLabel: "CC BY-SA 4.0",
          }),
        ],
      },
      {
        id: "kolttat",
        name: "Kolttat",
        about:
          "Nuoravene Siidan kokoelmasta. Luettelo sanoo sen kolttalaiseksi, ja että pohjalautoja ommeltiin usein, koska veneitä vedettiin porolla. Koko venettä ei sanota tässä ommelluksi. (Saamelaismuseo Siida)",
        shots: [
          shot(
            "boat",
            "",
            "Nuoravene. Luettelo sanoo sen kolttalaiseksi.",
            museumPhoto(
              "/vene/siida-nuoravene.jpg",
              640,
              198,
              "https://www.finna.fi/Record/siida.sda-26934",
              "Saamelaismuseo Siida",
            ),
          ),
        ],
      },
      {
        id: "lovozero",
        name: "Lovozero",
        about: "Vene Kuolan puolelta puuttuu. Pyydämme kuvan Lovozeron museolta.",
        shots: [{ id: "ask", line: "Lovozero museum" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/boats",
    otherHref: "/vene",
    title: "Boats",
    description:
      "A Sámi boat: Schefferus’s account of a sewn boat in 1674, and a boat with oars at Ålloluokta in 1948.",
    heading: "Boats",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus writes that the boat-makers made boats of pine or deal boards and sewed them with twigs. Olaus Magnus and Johannes Tornaeus say with roots of trees, and the book says most commonly with reindeer sinews. They caulked them with moss. They used two or four oars, fastened so that one man could row with two. The book has no picture of the boat. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "alloluokta",
        name: "Ålloluokta",
        about:
          "A boat with oars at Ålloluokta, in Jokkmokk, in 1948. Metal fastenings are visible. This is not the sewn boat of 1674. (Norsk Folkemuseum)",
        shots: [
          shot("boat", "1948", "A boat with oars. Metal fastenings are visible.", {
            src: "/vene/alloluokta-1948.jpg",
            width: 1529,
            height: 1205,
            kind: "photo",
            href: "https://digitaltmuseum.no/011013360607/bat-med-arer-alloluokta-1948",
            credit: "Asbjørn Nesheim, Norsk Folkemuseum",
            licence: "by-sa-4",
            licenceLabel: "CC BY-SA 4.0",
          }),
        ],
      },
      {
        id: "skolt",
        name: "Skolt",
        about:
          "A rope-boat from Siida’s collection. The catalog calls it Skolt, and says the bottom boards were often sewn because the boats were dragged by reindeer. The whole boat is not called sewn here. (Sámi Museum Siida)",
        shots: [
          shot(
            "boat",
            "",
            "A rope-boat. The catalog calls it Skolt.",
            museumPhoto(
              "/vene/siida-nuoravene.jpg",
              640,
              198,
              "https://www.finna.fi/Record/siida.sda-26934",
              "Sámi Museum Siida",
            ),
          ),
        ],
      },
      {
        id: "lovozero",
        name: "Lovozero",
        about: "A boat from the Kola side is missing. We are asking the Lovozero museum.",
        shots: [{ id: "ask", line: "Lovozero museum" }],
      },
    ],
  },
};

const fishing: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/kalastus",
    otherHref: "/en/fishing",
    title: "Kalastus",
    description:
      "Kalastus: Schefferus 1674, ja Kautokeinon puinen verkonkudinväline, joka tuli kokoelmaan 1950.",
    heading: "Kalastus",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus kirjoittaa, että ruokaa saatiin kalastamalla tai metsästämällä, ja että miehet perkasivat kalan. Myöhemmin hän sanoo naisten kalastaneen miesten poissa ollessa: verkoilla, kahden veneen väliin vedetyllä nuotalla, atraimella ja talvella verkoilla jään alla. Koukut olivat katajaa. Kirjassa ei ole kuvaa. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "kautokeino",
        name: "Kautokeino",
        about:
          "Puinen verkonkudinväline Kautokeinosta. Museo antaa sille pohjoissaamen nimet fierbmesággi ja buik(k)ár. Se tuli kokoelmaan 1950. Saamelaiskäräjät lukevat kalastuksen perinteisiin elinkeinoihin. (Norsk Folkemuseum; Saamelaiskäräjät)",
        shots: [
          shot("needle", "1950", "Puinen verkonkudinväline. Tämä ei ole verkko.", {
            src: "/kalastus/kautokeino.jpg",
            width: 1513,
            height: 928,
            kind: "photo",
            href: "https://digitaltmuseum.no/011023294933/fiskegarn-garnpinne-til",
            credit: "Norsk Folkemuseum",
            licence: "by-sa-4",
            licenceLabel: "CC BY-SA 4.0",
          }),
        ],
      },
      {
        id: "kolttat",
        name: "Kolttat",
        about:
          "Verkko Siidan kokoelmasta. Luettelo kutsuu sitä nimellä tintasilmä ja sanoo sen kolttalaiseksi, pientä lohta varten. (Saamelaismuseo Siida)",
        shots: [
          shot(
            "net",
            "",
            "Verkko, tintasilmä. Luettelo sanoo sen kolttalaiseksi.",
            museumPhoto(
              "/kalastus/siida-verkko.jpg",
              1200,
              902,
              "https://www.finna.fi/Record/siida.sda-27325",
              "Saamelaismuseo Siida",
            ),
          ),
        ],
      },
      {
        id: "jokkmokk",
        name: "Jokkmokk",
        about: "Kalastusväline Jokkmokista puuttuu. Pyydämme kuvan Ájttesta.",
        shots: [{ id: "ask", line: "Ájtte" }],
      },
      {
        id: "lovozero",
        name: "Lovozero",
        about: "Kalastusväline Kuolan puolelta puuttuu. Pyydämme kuvan Lovozeron museolta.",
        shots: [{ id: "ask", line: "Lovozero museum" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/fishing",
    otherHref: "/kalastus",
    title: "Fishing",
    description:
      "Fishing: Schefferus in 1674, and a wooden netting needle from Kautokeino that entered the collection in 1950.",
    heading: "Fishing",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus writes that they got food by fishing or hunting, and that the men dressed the fish. Later he says the women fished when the men were away: with nets, with a drag net between two boats, with a spear, and in winter with nets under the ice. The hooks were juniper. The book has no picture of this. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "kautokeino",
        name: "Kautokeino",
        about:
          "A wooden netting needle from Kautokeino. The museum gives it the North Sámi names fierbmesággi and buik(k)ár. It entered the collection in 1950. The Sámi Parliament counts fishing among the traditional livelihoods. (Norsk Folkemuseum; Sámi Parliament of Finland)",
        shots: [
          shot("needle", "1950", "A wooden netting needle. This is not a net.", {
            src: "/kalastus/kautokeino.jpg",
            width: 1513,
            height: 928,
            kind: "photo",
            href: "https://digitaltmuseum.no/011023294933/fiskegarn-garnpinne-til",
            credit: "Norsk Folkemuseum",
            licence: "by-sa-4",
            licenceLabel: "CC BY-SA 4.0",
          }),
        ],
      },
      {
        id: "skolt",
        name: "Skolt",
        about:
          "A net from Siida’s collection. The catalog calls it tintasilmä and says it is Skolt, for small salmon. (Sámi Museum Siida)",
        shots: [
          shot(
            "net",
            "",
            "A net, tintasilmä. The catalog calls it Skolt.",
            museumPhoto(
              "/kalastus/siida-verkko.jpg",
              1200,
              902,
              "https://www.finna.fi/Record/siida.sda-27325",
              "Sámi Museum Siida",
            ),
          ),
        ],
      },
      {
        id: "jokkmokk",
        name: "Jokkmokk",
        about: "A fishing implement from Jokkmokk is missing. We are asking Ájtte.",
        shots: [{ id: "ask", line: "Ájtte" }],
      },
      {
        id: "lovozero",
        name: "Lovozero",
        about: "A fishing implement from the Kola side is missing. We are asking the Lovozero museum.",
        shots: [{ id: "ask", line: "Lovozero museum" }],
      },
    ],
  },
};

function mitten(
  src: string,
  width: number,
  height: number,
  href: string,
) {
  return {
    src,
    width,
    height,
    kind: "photo" as const,
    href,
    credit: "Lars Sørli, Norsk Folkemuseum",
    licence: "by-sa-4" as const,
    licenceLabel: "CC BY-SA 4.0",
  };
}

const knitting: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/neulonta",
    otherHref: "/en/knitting",
    title: "Neulonta",
    description:
      "Neulotut lapaset Kautokeinosta, Karasjoelta ja Tenosta. Museon kuvat ovat vuodelta 1980.",
    heading: "Neulonta",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus kirjoittaa, että naiset neuloivat jäniksen karvasta lakkeja ja lapasia neljällä puikolla, ja kehräsivät lankaa poron jänteestä. Piirros tinlangan vedosta on sivulla Naisten työ. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "kautokeino",
        name: "Kautokeino",
        about:
          "Neulotut lapaset Kautokeinosta. Museo kuvasi ne 1980. Luettelo ei selitä kuvioita, joten niitä ei selitetä tässä. (Norsk Folkemuseum)",
        shots: [
          shot(
            "mittens",
            "1980",
            "Neulotut lapaset Kautokeinosta.",
            mitten(
              "/neulonta/kautokeino.jpg",
              3940,
              3179,
              "https://digitaltmuseum.no/0210116429027/vott-fra-kautokeino",
            ),
          ),
        ],
      },
      {
        id: "karasjok",
        name: "Karasjok",
        about: "Museo kutsuu näitä miehen lapasiksi Karasjoelta. Kuvattu 1980. (Norsk Folkemuseum)",
        shots: [
          shot(
            "mittens",
            "1980",
            "Miehen lapaset Karasjoelta.",
            mitten(
              "/neulonta/karasjok.jpg",
              3917,
              3068,
              "https://digitaltmuseum.no/0210116429028/vott-fra-karasjok-mannsvott",
            ),
          ),
        ],
      },
      {
        id: "tana",
        name: "Tana",
        about: "Museo kutsuu näitä naisen lapasiksi Tenosta. Kuvattu 1980. (Norsk Folkemuseum)",
        shots: [
          shot(
            "mittens",
            "1980",
            "Naisen lapaset Tenosta.",
            mitten(
              "/neulonta/tana.jpg",
              4000,
              3072,
              "https://digitaltmuseum.no/0210116429008/vott-fra-tana-kvinnevott",
            ),
          ),
        ],
      },
      {
        id: "siida",
        name: "Siida",
        about: "Naisen lapaset Siidan kokoelmasta. Luettelon vuosi on 1979. Kuviota ei kuvailla. (Saamelaismuseo Siida)",
        shots: [
          shot(
            "mittens",
            "1979",
            "Naisen lapaset. Luettelon vuosi on 1979.",
            museumPhoto(
              "/neulonta/siida-lapaset.jpg",
              900,
              652,
              "https://www.finna.fi/Record/siida.sda-21716",
              "Saamelaismuseo Siida",
            ),
          ),
        ],
      },
      {
        id: "utsjoki",
        name: "Utsjoki",
        about:
          "Siidan vaatesivu sanoo, että Utsjoella naisten turkiskintaat vaihtuivat varhain neulottuihin. Utsjoeksi merkittyä lapaskuvaa ei ole tällä sivulla. (Siida)",
        shots: [{ id: "ask", line: "Saamelaismuseo Siida" }],
      },
      {
        id: "jokkmokk",
        name: "Jokkmokk",
        about: "Neule Jokkmokista puuttuu. Pyydämme kuvan Ájttesta.",
        shots: [{ id: "ask", line: "Ájtte" }],
      },
      {
        id: "lovozero",
        name: "Lovozero",
        about: "Neule Kuolan puolelta puuttuu. Pyydämme kuvan Lovozeron museolta.",
        shots: [{ id: "ask", line: "Lovozero museum" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/knitting",
    otherHref: "/neulonta",
    title: "Knitting",
    description: "Knitted mittens from Kautokeino, Karasjok, and Tana. The museum photographed them in 1980.",
    heading: "Knitting",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus writes that the women knitted caps of hare’s fur, and gloves, with four needles, and spun thread from reindeer sinew. The drawing of the tin wire is on the women’s work page. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "kautokeino",
        name: "Kautokeino",
        about:
          "Knitted mittens from Kautokeino. The museum photographed them in 1980. The record does not explain the patterns, so they are not explained here. (Norsk Folkemuseum)",
        shots: [
          shot(
            "mittens",
            "1980",
            "Knitted mittens from Kautokeino.",
            mitten(
              "/neulonta/kautokeino.jpg",
              3940,
              3179,
              "https://digitaltmuseum.no/0210116429027/vott-fra-kautokeino",
            ),
          ),
        ],
      },
      {
        id: "karasjok",
        name: "Karasjok",
        about: "The museum calls these a man’s mittens from Karasjok. Photographed in 1980. (Norsk Folkemuseum)",
        shots: [
          shot(
            "mittens",
            "1980",
            "A man’s mittens from Karasjok.",
            mitten(
              "/neulonta/karasjok.jpg",
              3917,
              3068,
              "https://digitaltmuseum.no/0210116429028/vott-fra-karasjok-mannsvott",
            ),
          ),
        ],
      },
      {
        id: "tana",
        name: "Tana",
        about: "The museum calls these a woman’s mittens from Tana. Photographed in 1980. (Norsk Folkemuseum)",
        shots: [
          shot(
            "mittens",
            "1980",
            "A woman’s mittens from Tana.",
            mitten(
              "/neulonta/tana.jpg",
              4000,
              3072,
              "https://digitaltmuseum.no/0210116429008/vott-fra-tana-kvinnevott",
            ),
          ),
        ],
      },
      {
        id: "siida",
        name: "Siida",
        about:
          "A woman’s mittens from Siida’s collection. The catalog year is 1979. The pattern is not described. (Sámi Museum Siida)",
        shots: [
          shot(
            "mittens",
            "1979",
            "A woman’s mittens. The catalog year is 1979.",
            museumPhoto(
              "/neulonta/siida-lapaset.jpg",
              900,
              652,
              "https://www.finna.fi/Record/siida.sda-21716",
              "Sámi Museum Siida",
            ),
          ),
        ],
      },
      {
        id: "utsjoki",
        name: "Utsjoki",
        about:
          "Siida’s clothing page says that in Utsjoki, women’s fur gaiters were replaced early with knitted ones. A mitten photograph marked Utsjoki is not on this page. (Siida)",
        shots: [{ id: "ask", line: "Sámi Museum Siida" }],
      },
      {
        id: "jokkmokk",
        name: "Jokkmokk",
        about: "A knitted piece from Jokkmokk is missing. We are asking Ájtte.",
        shots: [{ id: "ask", line: "Ájtte" }],
      },
      {
        id: "lovozero",
        name: "Lovozero",
        about: "A knitted piece from the Kola side is missing. We are asking the Lovozero museum.",
        shots: [{ id: "ask", line: "Lovozero museum" }],
      },
    ],
  },
};

const languages: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/kielet",
    otherHref: "/en/languages",
    title: "Kielet",
    description:
      "Saamen kielet: Schefferuksen sanasivut vuodelta 1674, ja Saamelaiskäräjien luettelo Suomessa puhutuista kielistä.",
    heading: "Kielet",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus painaa sanoja, jotka hänen mukaansa ovat saamessa ja suomessa samat, ja toisella sivulla sanoja, jotka eivät ole. Kirjoitusasu on hänen omansa vuodelta 1674. Hän päättelee, että kieli olisi saanut alkunsa suomesta. Se on hänen päätelmänsä. Sanoja ei kirjoiteta tässä uudelleen. (Schefferus 1674)",
        shots: [
          shot("words", "1674", "Sivu, jolla kirja painaa sanoja, jotka sen mukaan ovat kahdessa kielessä samat.", {
            ...schefferus,
            src: "/kielet/schefferus-1674-words.jpg",
          }),
          shot("more", "1674", "Sivu, jolla kirja painaa sanoja, jotka sen mukaan eivät ole samat.", {
            ...schefferus,
            src: "/kielet/schefferus-1674-more.jpg",
          }),
        ],
      },
      {
        id: "dialects",
        name: "Murteet",
        about:
          "Kirja sanoo, että kieli vaihteli niin, että yhden seudun ihmiset tuskin ymmärsivät toista. Se erottaa kolme murretta: Uumajan ja Piitimen lännessä, Luulajan pohjoisessa, Tornion ja Kemin idässä. Piitimessä Jumalaa kutsuttiin Jubmel, Torniossa Immel. Suomen Jumala on sivulla rinnalla. (Schefferus 1674)",
        shots: [
          shot("immel", "1674", "Sivu, jolla kirja taivuttaa Tornion Immel-sanan ja suomen Jumalan.", {
            ...schefferus,
            src: "/kielet/schefferus-1674-immel.jpg",
          }),
        ],
      },
      {
        id: "north",
        name: "Pohjoissaame",
        about:
          "Pohjoissaamea puhutaan Suomessa, Norjassa ja Ruotsissa. Käräjät arvioivat puhujia olevan kaikkiaan noin 20 000–25 000, ja Suomessa noin 2 000. Aluetta kutsutaan pohjoissaameksi Sápmi. Painettu sivu puuttuu. (Saamelaiskäräjät)",
        shots: [{ id: "ask", line: "Saamelaiskäräjät" }],
      },
      {
        id: "inari",
        name: "Inarinsaame",
        about:
          "Inarinsaamea on puhuttu Inarijärven seudulla. Käräjät arvioivat puhujia olevan noin 400, ja määrä on kasvanut. Se on ainoa saamen kieli, jota puhutaan vain Suomessa. Aluetta kutsutaan inarinsaameksi Säämi. Painettu sivu puuttuu. (Saamelaiskäräjät)",
        shots: [{ id: "ask", line: "Saamelaiskäräjät" }],
      },
      {
        id: "skolt",
        name: "Koltansaame",
        about:
          "Koltansaamea puhuttiin Kuolan niemimaalla ja sen lähiseudulla Suomessa ja Norjassa. Nykyisin suurin osa puhujista asuu Suomessa, Inarissa. Käräjät arvioivat puhujia olevan Suomessa noin 300. Aluetta kutsutaan koltansaameksi Sääʹmm. Painettu sivu puuttuu. (Saamelaiskäräjät)",
        shots: [{ id: "ask", line: "Saamelaiskäräjät" }],
      },
      {
        id: "nine",
        name: "Yhdeksän kieltä",
        about:
          "Käräjät luettelevat yhdeksän nykyisin puhuttua saamen kieltä: turjansaame, kildininsaame, koltansaame, inarinsaame, pohjoissaame, luulajansaame, piitimensaame, uumajansaame ja eteläsaame. Akkalansaame, jota puhuttiin Venäjällä, katsotaan sammuneeksi vuodesta 2003. Kaikki Suomessa puhutut saamen kielet ovat uhanalaisia. (Saamelaiskäräjät)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/languages",
    otherHref: "/kielet",
    title: "Languages",
    description:
      "The Sámi languages: Schefferus’s word pages from 1674, and the Sámi Parliament’s list of the languages spoken in Finland.",
    heading: "Languages",
    places: [
      {
        id: "y1674",
        name: "1674",
        about:
          "Schefferus prints words he says are the same in the Sámi language and in Finnish, and on the next page words he says are not. The spellings are his own, from 1674. He concludes that the language took its rise from the Finlanders. That is his conclusion. The words are not retyped here. (Schefferus 1674)",
        shots: [
          shot("words", "1674", "The page of words the book says the two languages share.", {
            ...schefferus,
            src: "/kielet/schefferus-1674-words.jpg",
          }),
          shot("more", "1674", "The page of words the book says do not agree.", {
            ...schefferus,
            src: "/kielet/schefferus-1674-more.jpg",
          }),
        ],
      },
      {
        id: "dialects",
        name: "Dialects",
        about:
          "The book says the language varied so much that people of one part could scarcely understand those of another. It distinguishes three dialects: Ume and Pite in the west, Lule in the north, and Torne and Kemi in the east. In Pite, God was called Jubmel, and in Torne, Immel. Finnish Jumala is set beside it on the page. (Schefferus 1674)",
        shots: [
          shot("immel", "1674", "The page on which the book declines Torne Immel beside Finnish Jumala.", {
            ...schefferus,
            src: "/kielet/schefferus-1674-immel.jpg",
          }),
        ],
      },
      {
        id: "north",
        name: "Northern Sámi",
        about:
          "Northern Sámi is spoken in Finland, Norway, and Sweden. The parliament estimates about 20,000–25,000 speakers in all, and about 2,000 in Finland. In Northern Sámi the region is called Sápmi. A printed page is missing. (Sámi Parliament of Finland)",
        shots: [{ id: "ask", line: "Sámi Parliament of Finland" }],
      },
      {
        id: "inari",
        name: "Inari Sámi",
        about:
          "Inari Sámi has been spoken around Lake Inari. The parliament estimates about 400 speakers, and the number has been rising. It is the only Sámi language spoken only in Finland. In Inari Sámi the region is called Säämi. A printed page is missing. (Sámi Parliament of Finland)",
        shots: [{ id: "ask", line: "Sámi Parliament of Finland" }],
      },
      {
        id: "skolt",
        name: "Skolt Sámi",
        about:
          "Skolt Sámi was spoken on the Kola Peninsula and in neighbouring parts of Finland and Norway. Today most speakers live in Finland, in Inari. The parliament estimates about 300 speakers in Finland. In Skolt Sámi the region is called Sääʹmm. A printed page is missing. (Sámi Parliament of Finland)",
        shots: [{ id: "ask", line: "Sámi Parliament of Finland" }],
      },
      {
        id: "nine",
        name: "Nine languages",
        about:
          "The parliament lists nine Sámi languages spoken today: Ter Sámi, Kildin Sámi, Skolt Sámi, Inari Sámi, Northern Sámi, Lule Sámi, Pite Sámi, Ume Sámi, and Southern Sámi. Akkala Sámi, spoken in Russia, is regarded as extinct as of 2003. Every Sámi language spoken in Finland is endangered. (Sámi Parliament of Finland)",
        shots: [],
      },
    ],
  },
};

const tools: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/valineet",
    otherHref: "/en/tools",
    title: "Välineet",
    description:
      "Sukset, juurikori ja lusikka Schefferuksen kirjasta 1674, ja suopunki saamelaisensyklopedian mukaan.",
    heading: "Välineet",
    places: [
      {
        id: "skis",
        name: "Sukset",
        about:
          "Schefferus piirtää sukset vuonna 1674. Kirja sanoo niiden olevan sileitä lautoja, usein eri pituisia, ja siteen olevan vitsas. Sauvan päässä on pyöreä levy, jotta se ei uppoa lumeen. Tämä ei ole yhden paikan suksi. (Schefferus 1674)",
        shots: [
          shot("skis", "1674", "Sukset ja sauva, jonka päässä on levy.", {
            ...schefferus,
            src: "/valineet/schefferus-1674-skis.jpg",
          }),
        ],
      },
      {
        id: "basket",
        name: "Kori ja lusikka",
        about:
          "Sama kirja piirtää korin, lusikan, lippaan, kengän ja suksen. Kirja sanoo, että korit tehdään puun juurista. (Schefferus 1674)",
        shots: [
          shot("tools", "1674", "Kori, lusikka, lipas ja muita välineitä.", {
            ...schefferus,
            src: "/valineet/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "suohpan",
        name: "Suopunki",
        about:
          "Ensyklopedia sanoo suopunkia poronhoidon työvälineeksi. Se on tavallisesti noin 20–25 metrin köysi, ja siinä on kaksireikäinen, poronsarvesta vuoltu kiela. Pohjoissaameksi se on suohpan. Kuva puuttuu. Pyydämme sen RiddoDuottarMuseatilta. (Saamelaisensyklopedia)",
        shots: [{ id: "ask", line: "RiddoDuottarMuseat" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/tools",
    otherHref: "/valineet",
    title: "Tools",
    description:
      "Skis, a root basket, and a spoon from Schefferus in 1674, and the lasso as the encyclopaedia describes it.",
    heading: "Tools",
    places: [
      {
        id: "skis",
        name: "Skis",
        about:
          "Schefferus draws the skis in 1674. The book says they are smooth planks, often of different lengths, and that the binding is a withe. The staff ends in a round disc so that it does not sink into the snow. These are not the skis of one place. (Schefferus 1674)",
        shots: [
          shot("skis", "1674", "Skis and a staff with a disc at the end.", {
            ...schefferus,
            src: "/valineet/schefferus-1674-skis.jpg",
          }),
        ],
      },
      {
        id: "basket",
        name: "Basket and spoon",
        about:
          "The same book draws a basket, a spoon, a chest, a shoe, and a ski. The book says the baskets are made of the roots of trees. (Schefferus 1674)",
        shots: [
          shot("tools", "1674", "A basket, a spoon, a chest, and other tools.", {
            ...schefferus,
            src: "/valineet/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "suohpan",
        name: "Lasso",
        about:
          "The encyclopaedia calls the lasso a tool of reindeer herding. It is usually a rope of about 20–25 metres, with a two-hole toggle carved from reindeer horn. In North Sámi it is suohpan. The photograph is missing. We are asking RiddoDuottarMuseat. (Encyclopaedia of Saami Culture)",
        shots: [{ id: "ask", line: "RiddoDuottarMuseat" }],
      },
    ],
  },
};

const work: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/tyo",
    otherHref: "/en/work",
    title: "Työ",
    description:
      "Saamelaiskäräjien luettelemat elinkeinot, käsityö duodji, ja Schefferuksen pulkka vuodelta 1674.",
    heading: "Työ",
    places: [
      {
        id: "livelihoods",
        name: "Elinkeinot",
        about:
          "Saamelaiskäräjät luettelevat perinteisiksi elinkeinoiksi kalastuksen, poronhoidon, metsästyksen, keräilyn ja saamelaisen käsityön, sekä näiden nykyiset muodot. Kieltä käytetään työssä, ja taito siirtyy sukupolvelta toiselle. (Saamelaiskäräjät)",
        shots: [],
      },
      {
        id: "duodji",
        name: "Duodji",
        about:
          "Käsityö on pohjoissaameksi duodji, inarinsaameksi tyeji ja koltansaameksi tuejj. Käräjien sanasto sanoo, että sitä on tehty arkeen: vaatteisiin, kenkiin, veneisiin, kelkkoihin, komsioihin ja pahkakuppeihin. (Saamelaiskäräjät)",
        shots: [],
      },
      {
        id: "pulk",
        name: "Pulkka",
        about:
          "Schefferus kutsuu matkapulkkaa nimellä pulca. Se on kuin puoli venettä, keula ylöspäin, ja se sidotaan poroon. Tämä on kirjan piirros, ei yhden paikan pulkka. (Schefferus 1674)",
        shots: [
          shot("pulk", "1674", "Pulkka, jonka kirja sanoo sidottavan poroon.", {
            ...schefferus,
            src: "/tyo/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "now",
        name: "Nyt",
        about: "Nykyinen kuva poronhoidosta puuttuu. Pyydämme sen Siidasta.",
        shots: [{ id: "ask", line: "Saamelaismuseo Siida" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/work",
    otherHref: "/tyo",
    title: "Work",
    description:
      "The livelihoods named by the Sámi Parliament, the handicraft duodji, and Schefferus’s pulk of 1674.",
    heading: "Work",
    places: [
      {
        id: "livelihoods",
        name: "Livelihoods",
        about:
          "The Sámi Parliament lists fishing, reindeer herding, hunting, gathering, and Sámi handicraft as traditional livelihoods, together with their present forms. The language is used in the work, and the skill passes from one generation to the next. (Sámi Parliament of Finland)",
        shots: [],
      },
      {
        id: "duodji",
        name: "Duodji",
        about:
          "Handicraft is duodji in North Sámi, tyeji in Inari Sámi, and tuejj in Skolt Sámi. The parliament’s glossary says it was made for everyday needs: clothes, shoes, boats, sleds, cradles, and wooden burl cups. (Sámi Parliament of Finland)",
        shots: [],
      },
      {
        id: "pulk",
        name: "Pulk",
        about:
          "Schefferus calls the travelling sledge a pulca. It is made in the fashion of half a boat, with the prow turned up, and it is fastened to a reindeer. This is the book’s drawing, not a pulk from one place. (Schefferus 1674)",
        shots: [
          shot("pulk", "1674", "A pulk the book says is fastened to a reindeer.", {
            ...schefferus,
            src: "/tyo/schefferus-1674.jpg",
          }),
        ],
      },
      {
        id: "now",
        name: "Now",
        about: "A current photograph of reindeer herding is missing. We are asking Siida.",
        shots: [{ id: "ask", line: "Sámi Museum Siida" }],
      },
    ],
  },
};

export const stories = { boats, fishing, knitting, languages, tools, work };
