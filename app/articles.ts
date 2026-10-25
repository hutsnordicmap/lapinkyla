import type { Locale } from "@/app/content";

export type ArticleCopy = {
  locale: Locale;
  path: string;
  otherHref: string;
  title: string;
  description: string;
  kicker: string;
  heading: string;
  lede: string;
  sections: {
    id: string;
    heading: string;
    paragraphs: string[];
    more?: { href: string; label: string };
    figures?: { src: string; alt: string; caption: string; fileHref: string; fileLabel: string }[];
  }[];
  sourcesHeading: string;
  sources: { href: string; label: string; note?: string }[];
};

export const articles: Record<"history" | "association", Record<Locale, ArticleCopy>> = {
  history: {
    fi: {
      locale: "fi",
      path: "/historia",
      otherHref: "/en/history",
      title: "Kittilän lapinkylän historia",
      description:
        "Kittilän lapinkylä vuoden 1642 kartassa, ja mitä lapinveromaista on luettu käräjäkirjoista.",
      kicker: "Historia",
      heading: "Kittilän lapinkylä",
      lede: "Kittilän lapinkylä oli siida Kemin Lapissa. Sen asukkaat olivat metsäsaamelaisia. Tämä sivu nojaa vuoden 1642 karttaan ja nimettyihin tutkimuksiin.",
      sections: [
        {
          id: "kartta",
          heading: "Vuoden 1642 kartta",
          paragraphs: [
            "Olof Tresk laati kartan Kemin Lapista vuonna 1642. Kittilä on siinä kylä ja markkinapaikka. Kartan mukaan kylän kalavedet, villipeurat, muu riista ja majavajoet olivat vähäiset. (Tresk 1642)",
            "Peltojärven kylässä asuneet maksoivat kartan mukaan veronsa jo Tornion Lapin Markkinassa, mutta metsästivät ja kalastivat yhä vanhoilla mailla. Yksi kylä ei siis ollut yksi suljettu alue. (Tresk 1642)",
            "Samalla kartalla ovat myös Inari, Sompio, Sodankylä, Keminkylä, Kuolajärvi, Kitkajärvi ja Maanselkä. Ne on luettu kylittäin omalla sivullaan. (Tresk 1642)",
          ],
          more: { href: "/kylat", label: "Kemin Lapin kylät vuonna 1642" },
        },
        {
          id: "veromaat",
          heading: "Veromaat",
          paragraphs: [
            "Kaisa Korpijaakko-Labba on lukenut 1500- ja 1600-luvun käräjäpöytäkirjoja niin, että lapinveromaat periytyivät suvuissa. Tämä sivu nojaa siihen tutkimukseen. Emme ole itse käyneet niitä käräjäkirjoja läpi. (Korpijaakko-Labba 1989)",
            "Vuonna 1673 kuninkaan plakaatti lupasi uudisasukkaille viisitoista verovapaata vuotta maasta, jonka sanottiin olevan saamelaisille hyödytöntä. (Lapin plakaatti 1673)",
            "Kittilän Lapinkylä ry kertoo, että kirkon ja veroluetteloiden kirjoissa esi-isät merkittiin usein pelkästään lappalaisiksi. (Kittilän Lapinkylä ry)",
          ],
        },
      ],
      sourcesHeading: "Lähteet",
      sources: [
        {
          href: "https://lapinkavijat.rovaniemi.fi/vanhatkartat/pages/1642.html",
          label: "Tresk 1642. Kemin Lapinmaan kartta. Rovaniemen kaupunginkirjasto, Lapinkävijät.",
          note: "Suomenkielinen luku kartan kyläteksteistä. Tämän sivun virkkeet ovat oma tiivistelmä. Kartan kuvaa ei julkaista tässä.",
        },
        {
          href: "https://sok.riksarkivet.se/arkiv/jbOjn1yETY3Oza00DGeaZ1",
          label: "Tresk 1642–1643. Kartor över Kemi & Torne lappmarker. Ruotsin valtionarkisto.",
          note: "Arkiston luettelotieto. Kuvan käyttöoikeus tarkistetaan ennen kuin kuva laitetaan sivulle.",
        },
        {
          href: "https://www.finna.fi/Search/Results?lookfor=Saamelaisten+oikeusasemasta+Ruotsi-Suomessa&type=AllFields",
          label: "Korpijaakko-Labba, Kaisa 1989. Saamelaisten oikeusasemasta Ruotsi-Suomessa. Lakimiesliiton Kustannus.",
          note: "Viittaamme kirjaan. Sen karttoja ei jäljennetä.",
        },
        {
          href: "https://sv.wikipedia.org/wiki/Lappmarksplakatet",
          label: "Lapin plakaatti, 27.9.1673. Kaarle XI.",
          note: "Linkki on plakaatin tiivistelmä, ei alkuperäinen asiakirja.",
        },
        {
          href: "https://www.kittilanlapinkyla.net/lapinkylan-historia/",
          label: "Kittilän Lapinkylä ry. Lapinkylän historia.",
          note: "Yhdistyksen oma kertomus. Kirkonkirjoja koskeva virke on heidän sanomanaan.",
        },
      ],
    },
    en: {
      locale: "en",
      path: "/en/history",
      otherHref: "/historia",
      title: "History of the Kittilä siida",
      description:
        "The Kittilä siida on the 1642 map, and how the family tax lands have been read from the court books.",
      kicker: "History",
      heading: "The Kittilä siida",
      lede: "The Kittilä lapinkylä was a siida in Kemi Lappmark. Its people were Forest Sámi. This page rests on the 1642 map and on named studies.",
      sections: [
        {
          id: "map",
          heading: "The map of 1642",
          paragraphs: [
            "Olof Tresk made a map of Kemi Lappmark in 1642. On it, Kittilä is the village and market place. The map says the village had modest fishing waters, wild reindeer, other game, and beaver rivers. (Tresk 1642)",
            "The people of Peltojärvi, the map says, already paid their tax at Markkina in Torne Lappmark, and still hunted and fished on the old grounds. One village was not one closed area. (Tresk 1642)",
            "The same map also names Inari, Sompio, Sodankylä, Keminkylä, Kuolajärvi, Kitkajärvi, and Maanselkä. They are set out village by village on their own page. (Tresk 1642)",
          ],
          more: { href: "/en/villages", label: "The Kemi Lappmark villages in 1642" },
        },
        {
          id: "tax",
          heading: "Tax lands",
          paragraphs: [
            "Kaisa Korpijaakko-Labba read the 16th- and 17th-century court books as showing that the Lapp tax lands passed down in families. This page relies on that study. We have not gone through those court books ourselves. (Korpijaakko-Labba 1989)",
            "In 1673 a royal decree promised new settlers fifteen years free of taxes on land described as of no use to the Sámi. (Lappmark decree 1673)",
            "Kittilän Lapinkylä ry says that church books and tax lists often recorded their ancestors simply as Lapp. (Kittilän Lapinkylä ry)",
          ],
        },
      ],
      sourcesHeading: "Sources",
      sources: [
        {
          href: "https://lapinkavijat.rovaniemi.fi/vanhatkartat/pages/1642.html",
          label: "Tresk 1642. Map of Kemi Lappmark. Rovaniemi City Library (in Finnish).",
          note: "A Finnish reading of the village notes. Our sentences are a summary. The map image is not published here.",
        },
        {
          href: "https://sok.riksarkivet.se/arkiv/jbOjn1yETY3Oza00DGeaZ1",
          label: "Tresk 1642–1643. Maps of Kemi and Torne lappmarks. Swedish National Archives.",
          note: "Catalog entry. The license on the image is still to be checked before we show the picture.",
        },
        {
          href: "https://www.finna.fi/Search/Results?lookfor=Saamelaisten+oikeusasemasta+Ruotsi-Suomessa&type=AllFields",
          label: "Korpijaakko-Labba, Kaisa 1989. Saamelaisten oikeusasemasta Ruotsi-Suomessa. Lakimiesliiton Kustannus.",
          note: "We cite the book. We do not reproduce its maps.",
        },
        {
          href: "https://sv.wikipedia.org/wiki/Lappmarksplakatet",
          label: "Lappmark decree, 27 September 1673. Charles XI.",
          note: "The link is a summary of the decree, not the original sheet.",
        },
        {
          href: "https://www.kittilanlapinkyla.net/lapinkylan-historia/",
          label: "Kittilän Lapinkylä ry. History of the siida (in Finnish).",
          note: "The association’s own account. The sentence about church books is given as their statement.",
        },
      ],
    },
  },
  association: {
    fi: {
      locale: "fi",
      path: "/yhdistys",
      otherHref: "/en/association",
      title: "Kittilän Lapinkylä ry",
      description:
        "Kittilän Lapinkylä ry vaalii Kittilän lapinkylän historiaa. Yhdistys on entiseltä nimeltään Kuivasalmen Lapinkyläyhdistys, ja se kokoaa historiakirjaa.",
      kicker: "Yhdistys",
      heading: "Kittilän Lapinkylä ry",
      lede: "Yhdistys vaalii Kittilän lapinkylän historiaa ja paikkakunnan metsäsaamelaisia perinteitä. Tämä sivusto ei ole yhdistys. Yhdistyksen omat sivut ovat kittilanlapinkyla.net.",
      sections: [
        {
          id: "nimi",
          heading: "Nimi",
          paragraphs: [
            "Yhdistys on toiminut nimellä Kuivasalmen Lapinkyläyhdistys ry. Se kertoo, että nimi vaihtuu vuoden 2026 aikana muotoon Kittilän Lapinkylä ry. Sama nimi oli käytössä jo vanhojen lapinkylien aikana. (Kittilän Lapinkylä ry, Tietoa meistä)",
          ],
        },
        {
          id: "tyo",
          heading: "Mitä yhdistys tekee",
          paragraphs: [
            "Yhdistys sanoo lisäävänsä tietoisuutta siitä, että Kittilän lapinkylä on ollut olemassa, ja toimivansa alueen metsäsaamelaisten yhdyssiteenä. Se kertoo olevansa perustajajäsen Lapinkylien parlamentissa, jota se kutsuu Suomen alkuperäisten saamelaisten yhteistyöjärjestön päättäväksi kokoukseksi. (Kittilän Lapinkylä ry; Lapinkylien parlamentti)",
          ],
        },
        {
          id: "kirja",
          heading: "Historiakirja",
          paragraphs: [
            "Yhdistys kokoaa kirjaa Kittilän lapinkylästä ja lappalaishistoriasta. Sukujen vaiheet kootaan arkistoista, työpajoista ja muistitiedosta. (Kittilän Lapinkylä ry)",
            "Aloitustyöpaja pidettiin 11.4.2026 Kittilän Ylärissä. Kittilän kunta oli merkinnyt tilaisuuden kulttuuriviikon ohjelmaan, ja yhdistys on julkaissut tallenteen. (Kittilän kulttuuriviikko 2026)",
          ],
        },
      ],
      sourcesHeading: "Lähteet",
      sources: [
        { href: "https://www.kittilanlapinkyla.net/", label: "Kittilän Lapinkylä ry" },
        {
          href: "https://www.kittilanlapinkyla.net/tietoa-meista/",
          label: "Tietoa meistä, nimenvaihto",
        },
        {
          href: "https://www.metsasaamelaiset.fi/lapinkylien-parlamentti/",
          label: "Lapinkylien parlamentti",
        },
        {
          href: "https://kittila.fi/vapaa-aika-ja-hyvinvointi/kulttuuripalvelut/kittilan-kulttuuriviikko-10-2042026",
          label: "Kittilän kulttuuriviikko, 11.4.2026",
        },
        {
          href: "https://www.youtube.com/watch?v=G5Mv2xCMl1A",
          label: "Aloitustyöpajan tallenne",
        },
      ],
    },
    en: {
      locale: "en",
      path: "/en/association",
      otherHref: "/yhdistys",
      title: "Kittilän Lapinkylä ry",
      description:
        "Kittilän Lapinkylä ry works on the history of the Kittilä siida. It has operated as Kuivasalmen Lapinkyläyhdistys and is gathering a history book.",
      kicker: "Association",
      heading: "Kittilän Lapinkylä ry",
      lede: "The association looks after the history of the Kittilä siida and local Forest Sámi traditions. This website is not the association. Their own site is kittilanlapinkyla.net.",
      sections: [
        {
          id: "name",
          heading: "The name",
          paragraphs: [
            "The association has operated as Kuivasalmen Lapinkyläyhdistys ry. They say the name is changing during 2026 to Kittilän Lapinkylä ry. That name was already used in the time of the old siidas. (Kittilän Lapinkylä ry, about page)",
          ],
        },
        {
          id: "work",
          heading: "What they do",
          paragraphs: [
            "They say they make the Kittilä siida better known, and that they are a link for Forest Sámi people in the area. They describe themselves as a founding member of the Lapinkylien parlamentti, the decision meeting of the cooperation organization for what they call Finland’s original Sámi. (Kittilän Lapinkylä ry; Lapinkylien parlamentti)",
          ],
        },
        {
          id: "book",
          heading: "The history book",
          paragraphs: [
            "They are gathering a book on the Kittilä siida and on Lapp history. Family lines are being collected from archives, workshops, and remembered accounts. (Kittilän Lapinkylä ry)",
            "The opening workshop was held on 11 April 2026 at Yläri in Kittilä. The municipality listed it in the culture-week program, and the association has published a recording. (Kittilä culture week 2026)",
          ],
        },
      ],
      sourcesHeading: "Sources",
      sources: [
        { href: "https://www.kittilanlapinkyla.net/", label: "Kittilän Lapinkylä ry (in Finnish)" },
        {
          href: "https://www.kittilanlapinkyla.net/tietoa-meista/",
          label: "About the association, including the name change (in Finnish)",
        },
        {
          href: "https://www.metsasaamelaiset.fi/lapinkylien-parlamentti/",
          label: "Lapinkylien parlamentti (in Finnish)",
        },
        {
          href: "https://kittila.fi/vapaa-aika-ja-hyvinvointi/kulttuuripalvelut/kittilan-kulttuuriviikko-10-2042026",
          label: "Kittilä culture week, 11 April 2026 (in Finnish)",
        },
        {
          href: "https://www.youtube.com/watch?v=G5Mv2xCMl1A",
          label: "Recording of the opening workshop",
        },
      ],
    },
  },
};
