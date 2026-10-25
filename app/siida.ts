import type { ArticleCopy } from "@/app/articles";

const sourcesFi: ArticleCopy["sources"] = [
  {
    href: "https://www.saamelaisensyklopedia.fi/wiki/Siida.html",
    label: "Saamelaiskulttuurin ensyklopedia. Siida.",
    note: "Sanasta siida. Artikkelia ei ole kopioitu. Virke on oma tiivistelmä.",
  },
  {
    href: "https://www.saamelaisensyklopedia.fi/wiki/Lapinkyl%C3%A4t_ja_veromaat.html",
    label: "Saamelaiskulttuurin ensyklopedia. Lapinkylät ja veromaat.",
    note: "Kuusi lappia, kolmetoista kylää, veromaa ja vuoden 1695 uudistus. Artikkelia ei ole kopioitu.",
  },
  {
    href: "https://www.saamelaisensyklopedia.fi/wiki/Lapinverotus.html",
    label: "Saamelaiskulttuurin ensyklopedia. Lapinverotus.",
    note: "Kuka verotti ja milloin yhteisverotus päättyi. Artikkelia ei ole kopioitu.",
  },
];

const sourcesEn: ArticleCopy["sources"] = [
  {
    href: "https://www.saamelaisensyklopedia.fi/wiki/Siida.html",
    label: "Encyclopaedia of Saami Culture. Siida (in Finnish).",
    note: "On the word siida. The article is not copied. The sentence is our summary.",
  },
  {
    href: "https://www.saamelaisensyklopedia.fi/wiki/Lapinkyl%C3%A4t_ja_veromaat.html",
    label: "Encyclopaedia of Saami Culture. Lapp villages and tax lands (in Finnish).",
    note: "The six Lapp regions, the thirteen villages, the tax land, and the 1695 reform. The article is not copied.",
  },
  {
    href: "https://www.saamelaisensyklopedia.fi/wiki/Lapinverotus.html",
    label: "Encyclopaedia of Saami Culture. Taxation of the Lapp villages (in Finnish).",
    note: "Who taxed the villages, and when the joint taxation ended. The article is not copied.",
  },
];

export const siida: Record<"fi" | "en", ArticleCopy> = {
  fi: {
    locale: "fi",
    path: "/siida",
    otherHref: "/en/siida",
    title: "Lapinkylä ja siida",
    description:
      "Mitä lapinkylä ja siida olivat: kuusi lappia, kolmetoista kylää nykyisen Suomen alueella, veromaa ja vuoden 1695 verouudistus.",
    kicker: "Siida",
    heading: "Lapinkylä ja siida",
    lede: "Lapinkylä on vanha hallinnon sana kylälle. Saameksi samaa yhteisöä kutsutaan siidaksi. Kittilä on yksi näistä kylistä, ei koko järjestelmä.",
    sections: [
      {
        id: "sana",
        heading: "Sana",
        paragraphs: [
          "Pohjoissaamen siida tarkoittaa lapinkylää tai porokylää. Sama sana on kaikissa saamelaiskielissä. Länsisaamelaisissa kielissä se on myöhemmin tarkoittanut poronhoitoyhteisöä laitumineen. Itäsaamelaisissa kielissä se on tarkoittanut kyläyhteisöä ja talvikylää. (Ensyklopedia, Siida)",
          "Suomen lapinkylä ja saamen siida tarkoittavat yleensä samaa. Itäisellä alueella siida on voinut tarkoittaa erityisesti yhteisöä, joka harjoitti elinkeinoja yhteiseen lukuun. (Ensyklopedia, Lapinkylät ja veromaat)",
          "Vanhat asiakirjat sanovat lappalainen, koska sen ajan lähteet käyttävät sitä sanaa. Tällä sivustolla ihmisistä puhutaan saamelaisina. Lapinkylä jää sen ajan nimeksi kylälle.",
        ],
      },
      {
        id: "kylat",
        heading: "Kuusi lappia, kolmetoista kylää",
        paragraphs: [
          "Historiallinen Lapinmaa oli jaettu kuuteen alueeseen: Ångermanlanti, Uumaja, Piitime, Luulaja, Tornio ja Kemi. Ne jakautuivat lapinkyliin, ja kylät sukujen tai perheiden veromaihin. (Ensyklopedia, Lapinkylät ja veromaat)",
          "Nykyisen Suomen alueella kokonaan tai osittain oli kolmetoista lapinkylää. Tornion Lapissa: Rounala, Suonttavaara, Peltojärvi, Teno ja Utsjoki. Kemin Lapissa: Maanselkä, Kitka, Kuolajärvi, Keminkylä, Sompio, Sodankylä, Kittilä ja Inari. (Ensyklopedia, Lapinkylät ja veromaat)",
          "Tutkijat ovat lähteneet siitä, että jako kyliin ja veromaihin oli alun perin saamelaisen yhteiskunnan oma maankäyttö. Valtiot ottivat saman jaon myöhemmin käyttöön käräjissä ja verotuksessa. (Ensyklopedia, Lapinkylät ja veromaat)",
        ],
      },
      {
        id: "vuosi",
        heading: "Vuosi ja veromaa",
        paragraphs: [
          "Käräjäpöytäkirjat noin 1600-luvun puolivälistä kertovat, että Kemin Lapin kylissä metsäsaamelaiset pyytivät peuraa ja majavaa ja kalastivat vuotuiskierron mukaan. He omistivat myös jonkin verran poroja. Peuranpyynti tapahtui kylän alueella yhteisesti. Veromaalla haltijalla oli yleensä yksinoikeus omiin elinkeinoihinsa. (Ensyklopedia, Lapinkylät ja veromaat)",
          "Kylillä oli toisiaan vastaan kiinteät rajat. Rajana oli maastonkohta tai tehty merkki. Jos kylät riitelivät metsästysalueesta, järvestä tai kalapaikasta eivätkä sopineet, asia meni tuomioistuimeen. (Ensyklopedia, Lapinkylät ja veromaat)",
          "Veromaa oli perheen tai suvun alue kylän sisällä. Aiemmin sitä kutsuttiin perintömaaksi. Vuoteen 1695 asti veron yksikkö oli veromaa. Uudistuksen jälkeen vastuu oli kylän alueella asuvilla. (Ensyklopedia, Lapinkylät ja veromaat)",
        ],
        more: { href: "/kylat", label: "Kemin Lapin kylät Treskin kartalla vuonna 1642" },
      },
      {
        id: "vero",
        heading: "Kuka verotti",
        paragraphs: [
          "Viimeistään keskiajalla samoja kyliä verottivat Ruotsi, Venäjä ja Norja. Norjan kuninkaan tiedetään verottaneen Jäämeren rannikon kalastajasaamelaisia jo 1100-luvulla. Ruotsi antoi 1200-luvulla verotuksen ja kaupan pirkkalaisille. (Ensyklopedia, Lapinverotus)",
          "Ruotsin verotusalueella Venäjälle maksoivat myös Sompio, Kuolajärvi, Kitka, Maanselkä, Keminkylä ja Sodankylä. Kolmelle valtiolle maksoivat Inari, Kautokeino, Aviovaara, Lappajärvi, Teno ja Utsjoki. (Ensyklopedia, Lapinverotus)",
          "Norjan ja Ruotsin yhteisverotus päättyi Strömstadin rauhaan vuonna 1751. Venäjän vero läntisemmissä Tornion Lapin kylissä lakkasi jo 1500-luvun lopulla. Kemin Lapissa Venäjän veroa maksettiin vuoteen 1814. (Ensyklopedia, Lapinverotus)",
        ],
        more: { href: "/historia", label: "Kittilän lapinkylä" },
      },
    ],
    sourcesHeading: "Lähteet",
    sources: sourcesFi,
  },
  en: {
    locale: "en",
    path: "/en/siida",
    otherHref: "/siida",
    title: "The lapinkylä and the siida",
    description:
      "What a lapinkylä and a siida were: six Lapp regions, thirteen villages in present-day Finland, the family tax land, and the tax reform of 1695.",
    kicker: "Siida",
    heading: "The lapinkylä and the siida",
    lede: "Lapinkylä is the old administrative name for a village. In Sámi the same community is called a siida. Kittilä is one of those villages, not the whole system.",
    sections: [
      {
        id: "word",
        heading: "The word",
        paragraphs: [
          "North Sámi siida means a Lapp village or a reindeer village. The word is in every Sámi language. In the western Sámi languages it later meant a reindeer-herding community and its pastures. In the eastern languages it meant the village community and the winter village. (Encyclopaedia, Siida)",
          "Finnish lapinkylä and Sámi siida usually mean the same thing. In the east, siida could mean in particular a community that practised its livelihoods in common. (Encyclopaedia, Lapp villages and tax lands)",
          "Old documents say Lapp, because that is the word in the records of the time. On this site the people are called Sámi. Lapinkylä stays as the old name of the village.",
        ],
      },
      {
        id: "villages",
        heading: "Six regions, thirteen villages",
        paragraphs: [
          "Historical Lapland was divided into six areas: Ångermanland, Umeå, Piteå, Luleå, Torne, and Kemi. Those were divided into villages, and the villages into family tax lands. (Encyclopaedia, Lapp villages and tax lands)",
          "Thirteen villages lay wholly or partly in present-day Finland. In Torne Lapp: Rounala, Suonttavaara, Peltojärvi, Teno, and Utsjoki. In Kemi Lapp: Maanselkä, Kitka, Kuolajärvi, Keminkylä, Sompio, Sodankylä, Kittilä, and Inari. (Encyclopaedia, Lapp villages and tax lands)",
          "Researchers have taken this division into villages and tax lands as originally the Sámi society’s own way of using the land. The states later used the same division for courts and for taxation. (Encyclopaedia, Lapp villages and tax lands)",
        ],
      },
      {
        id: "year",
        heading: "The year and the tax land",
        paragraphs: [
          "Court books from about the middle of the 1600s say that in the Kemi Lapp villages, Forest Sámi hunted wild reindeer and beaver and fished, on a yearly round. They also owned some reindeer. Wild-reindeer hunting was done in common on the village’s land. On a tax land, the holder generally had the exclusive right to their own livelihoods. (Encyclopaedia, Lapp villages and tax lands)",
          "The villages had fixed boundaries against each other. A boundary was a feature of the land, or a marker that had been made. If two villages disputed a hunting ground, a lake, or a fishing place and could not agree, the case went to court. (Encyclopaedia, Lapp villages and tax lands)",
          "A tax land was a family’s area inside the village. Earlier it was called an inherited land. Until 1695 the tax land was the unit that paid. After the reform, the liability sat with the people living in the village. (Encyclopaedia, Lapp villages and tax lands)",
        ],
        more: {
          href: "/en/villages",
          label: "The Kemi Lappmark villages on Tresk’s map in 1642",
        },
      },
      {
        id: "tax",
        heading: "Who taxed them",
        paragraphs: [
          "By the Middle Ages at the latest, the same villages were taxed by Sweden, Russia, and Norway. The king of Norway is known to have taxed the fishing Sámi of the Arctic coast already in the 1100s. In the 1200s Sweden gave the right to tax, and to trade, to the Birkarls. (Encyclopaedia, Taxation)",
          "On the Swedish tax area, Sompio, Kuolajärvi, Kitka, Maanselkä, Keminkylä, and Sodankylä also paid Russia. Inari, Kautokeino, Aviovaara, Lappajärvi, Teno, and Utsjoki paid all three states. (Encyclopaedia, Taxation)",
          "Joint Swedish and Norwegian taxation ended with the Peace of Strömstad in 1751. Russian tax in the more westerly Torne Lapp villages had already stopped at the end of the 1500s. In Kemi Lapp, tax to Russia was paid until 1814. (Encyclopaedia, Taxation)",
        ],
        more: { href: "/en/history", label: "The Kittilä siida" },
      },
    ],
    sourcesHeading: "Sources",
    sources: sourcesEn,
  },
};
