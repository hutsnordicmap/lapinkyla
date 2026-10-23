import type { ArticleCopy } from "@/app/articles";

const treskSourcesFi: ArticleCopy["sources"] = [
  {
    href: "https://lapinkavijat.rovaniemi.fi/vanhatkartat/pages/1642.html",
    label: "Tresk 1642. Kemin Lapinmaan kartta. Rovaniemen kaupunginkirjasto, Lapinkävijät.",
    note: "Jokainen kylä tällä sivulla on tiivistetty kartan omista kyläteksteistä. Kartan kuvaa ei julkaista tässä.",
  },
  {
    href: "https://sok.riksarkivet.se/arkiv/jbOjn1yETY3Oza00DGeaZ1",
    label: "Tresk 1642–1643. Kartor över Kemi & Torne lappmarker. Ruotsin valtionarkisto.",
    note: "Arkiston luettelotieto. Kuvan käyttöoikeus tarkistetaan ennen kuin kuva laitetaan sivulle.",
  },
];

const treskSourcesEn: ArticleCopy["sources"] = [
  {
    href: "https://lapinkavijat.rovaniemi.fi/vanhatkartat/pages/1642.html",
    label: "Tresk 1642. Map of Kemi Lappmark. Rovaniemi City Library (in Finnish).",
    note: "Each village on this page is summarized from the map’s own village notes. The map image is not published here.",
  },
  {
    href: "https://sok.riksarkivet.se/arkiv/jbOjn1yETY3Oza00DGeaZ1",
    label: "Tresk 1642–1643. Maps of Kemi and Torne lappmarks. Swedish National Archives.",
    note: "Catalog entry. The license on the image is still to be checked before we show the picture.",
  },
];

export const villages: Record<"fi" | "en", ArticleCopy> = {
  fi: {
    locale: "fi",
    path: "/kylat",
    otherHref: "/en/villages",
    title: "Kemin Lapin kylät vuonna 1642",
    description:
      "Olof Treskin vuoden 1642 kartan kylät: Kittilä, Peltojärvi, Inari, Sompio, Sodankylä, Keminkylä, Kuolajärvi, Kitkajärvi ja Maanselkä.",
    kicker: "1642",
    heading: "Kemin Lapin kylät",
    lede: "Nämä ovat kylät, jotka Olof Treskin kartta nimeää Kemin Lapissa vuonna 1642. Tämä ei ole rajakartta. Viiva kylien väliin tulee myöhemmin, jos sille on lähde.",
    sections: [
      {
        id: "kittila",
        heading: "Kittilä",
        paragraphs: [
          "Kartassa Kittilä on kylä ja markkinapaikka. Kalavedet, villipeurat, muu riista ja majavajoet olivat vähäiset. (Tresk 1642)",
        ],
        more: { href: "/historia", label: "Pidempi sivu Kittilän lapinkylästä" },
      },
      {
        id: "peltojarvi",
        heading: "Peltojärvi",
        paragraphs: [
          "Kylässä aiemmin asuneet ja markkinoitaan pitäneet maksoivat veronsa kartan mukaan jo Tornion Lapin Markkinassa. Metsästys ja kalastus jatkuivat yhä näillä mailla. (Tresk 1642)",
        ],
      },
      {
        id: "inari",
        heading: "Inari",
        paragraphs: [
          "Kylä oli Inarijärven selänteen pohjoispuolella. Kartta kertoo sen siirtyvän noin peninkulman, koska polttopuu ja poronjäkälä olivat loppumassa. Kalavedet olivat erinomaiset, villipeuramaat hyvät ja majavajoet keskinkertaiset. Veroa maksettiin Ruotsille, Norjalle ja Venäjälle. Kartta pitää kylää yhtenä Ruotsin Lapin isoimmista. Asukkaat halusivat siirtää kylän niemelle, jota teksti pitää hyvänä kirkonpaikkana. (Tresk 1642)",
        ],
      },
      {
        id: "sompio",
        heading: "Sompio",
        paragraphs: [
          "Sompio maksoi veroa Ruotsille ja Venäjälle. Majavajoet ja villipeurat olivat hyvät, kalavedet vähäiset. Kala ostettiin enimmäkseen inarilaisilta. (Tresk 1642)",
        ],
      },
      {
        id: "sodankyla",
        heading: "Sodankylä",
        paragraphs: [
          "Sodankylä maksoi veroa Ruotsille ja Venäjälle. Kalavedet ja villipeuramaat olivat hyvät. Kartta sanoo majavakannan olleen paras kaikista Ruotsin lapinkylistä, Sompio mukaan lukien. (Tresk 1642)",
        ],
      },
      {
        id: "keminkyla",
        heading: "Keminkylä",
        paragraphs: [
          "Keminkylä maksoi veroa Ruotsille ja Venäjälle. Villipeuramaat ja kalavedet olivat hyvät, majavia oli vähän. (Tresk 1642)",
        ],
      },
      {
        id: "kuolajarvi",
        heading: "Kuolajärvi",
        paragraphs: [
          "Kuolajärvi maksoi veroa Ruotsille ja Venäjälle. Metsästysmaat ja kalavedet olivat hyvät, majavia oli vähän. (Tresk 1642)",
        ],
      },
      {
        id: "kitkajarvi",
        heading: "Kitkajärvi",
        paragraphs: [
          "Kitkajärvi oli kartan mukaan pieni ja köyhä kylä. Veroa maksettiin Ruotsille ja Venäjälle. Elanto tuli enimmäkseen kalasta. Villipeuroja oli vähän, majavia ei lainkaan. (Tresk 1642)",
        ],
      },
      {
        id: "maanselka",
        heading: "Maanselkä",
        paragraphs: [
          "Maanselkä oli kartan mukaan pieni ja köyhä kylä. Elanto tuli enimmäkseen kalasta. Villipeuroja oli vähän, majavia ei lainkaan. (Tresk 1642)",
        ],
      },
    ],
    sourcesHeading: "Lähteet",
    sources: treskSourcesFi,
  },
  en: {
    locale: "en",
    path: "/en/villages",
    otherHref: "/kylat",
    title: "The Kemi Lappmark villages in 1642",
    description:
      "The villages on Olof Tresk’s 1642 map: Kittilä, Peltojärvi, Inari, Sompio, Sodankylä, Keminkylä, Kuolajärvi, Kitkajärvi, and Maanselkä.",
    kicker: "1642",
    heading: "The villages of Kemi Lappmark",
    lede: "These are the villages Olof Tresk’s map names in Kemi Lappmark in 1642. This is not a border map. A line between villages comes later, if a source supports it.",
    sections: [
      {
        id: "kittila",
        heading: "Kittilä",
        paragraphs: [
          "On the map, Kittilä is the village and market place. Fishing waters, wild reindeer, other game, and beaver rivers were modest. (Tresk 1642)",
        ],
        more: { href: "/en/history", label: "Longer page on the Kittilä siida" },
      },
      {
        id: "peltojarvi",
        heading: "Peltojärvi",
        paragraphs: [
          "The people who had lived in the village and held their market there paid tax, the map says, at Markkina in Torne Lappmark. Hunting and fishing still went on here. (Tresk 1642)",
        ],
      },
      {
        id: "inari",
        heading: "Inari",
        paragraphs: [
          "The village lay north of the fell ridge by Lake Inari. The map says it was to move about one Swedish mile, roughly ten kilometres, because firewood and reindeer lichen were running out. The fishing waters were excellent, the wild-reindeer grounds good, and the beaver rivers moderate. Tax was paid to Sweden, Norway, and Russia. The map calls it one of the largest villages in Swedish Lapland. The people wanted to move the village onto a point the text calls a good place for a church. (Tresk 1642)",
        ],
      },
      {
        id: "sompio",
        heading: "Sompio",
        paragraphs: [
          "Sompio paid tax to Sweden and Russia. The beaver rivers and wild reindeer were good, and the fishing waters were few. Fish was mostly bought from the Inari people. (Tresk 1642)",
        ],
      },
      {
        id: "sodankyla",
        heading: "Sodankylä",
        paragraphs: [
          "Sodankylä paid tax to Sweden and Russia. The fishing waters and wild-reindeer grounds were good. The map says the beaver stock was the best of all the Swedish siidas, Sompio included. (Tresk 1642)",
        ],
      },
      {
        id: "keminkyla",
        heading: "Keminkylä",
        paragraphs: [
          "Keminkylä paid tax to Sweden and Russia. The wild-reindeer grounds and fishing waters were good, and beaver were few. (Tresk 1642)",
        ],
      },
      {
        id: "kuolajarvi",
        heading: "Kuolajärvi",
        paragraphs: [
          "Kuolajärvi paid tax to Sweden and Russia. The hunting grounds and fishing waters were good, and beaver were few. (Tresk 1642)",
        ],
      },
      {
        id: "kitkajarvi",
        heading: "Kitkajärvi",
        paragraphs: [
          "Kitkajärvi was, the map says, a small and poor village. Tax was paid to Sweden and Russia. People lived mostly by fishing. Wild reindeer were few, and there were no beaver. (Tresk 1642)",
        ],
      },
      {
        id: "maanselka",
        heading: "Maanselkä",
        paragraphs: [
          "Maanselkä was, the map says, a small and poor village. People lived mostly by fishing. Wild reindeer were few, and there were no beaver. (Tresk 1642)",
        ],
      },
    ],
    sourcesHeading: "Sources",
    sources: treskSourcesEn,
  },
};
