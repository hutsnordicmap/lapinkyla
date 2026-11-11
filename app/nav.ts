import type { Locale } from "@/app/content";

export type LinkItem = { href: string; title: string; text?: string; src?: string; alt?: string; width?: number; height?: number };
export type LinkGroup = {
  title: string;
  items: LinkItem[];
  src: string;
  alt: string;
  width: number;
  height: number;
};

function chapter(href: string, title: string, src: string, width = 706, height = 1119): LinkItem {
  return { href, title, src, width, height };
}

export type NavTile = {
  href: string;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const pictureNav: Record<Locale, NavTile[]> = {
  fi: [
    {
      href: "/puku",
      title: "Puku",
      src: "/puku/enontekio-luhkka.jpg",
      alt: "Miehen luhkka Enontekiöstä, Saamelaismuseo Siida.",
      width: 923,
      height: 1080,
    },
    {
      href: "/asumus",
      title: "Asumus",
      src: "/asumus/siida-kota-1959.jpg",
      alt: "Kota Inarissa vuonna 1959, Saamelaismuseo Siida.",
      width: 1200,
      height: 896,
    },
    {
      href: "/vene",
      title: "Vene",
      src: "/vene/siida-nuoravene.jpg",
      alt: "Kolttalainen nuoravene, Saamelaismuseo Siida.",
      width: 640,
      height: 198,
    },
    {
      href: "/kalastus",
      title: "Kalastus",
      src: "/kalastus/siida-verkko.jpg",
      alt: "Verkko, tintasilmä, Saamelaismuseo Siida.",
      width: 1200,
      height: 902,
    },
    {
      href: "/neulonta",
      title: "Neulonta",
      src: "/neulonta/siida-lapaset.jpg",
      alt: "Naisen lapaset vuodelta 1979, Saamelaismuseo Siida.",
      width: 900,
      height: 652,
    },
    {
      href: "/ruoka",
      title: "Ruoka",
      src: "/ruoka/siida-tuohiastia.jpg",
      alt: "Tuohiastia, Saamelaismuseo Siida.",
      width: 348,
      height: 400,
    },
    {
      href: "/lapset",
      title: "Lapset",
      src: "/lapset/siida-komsio.jpg",
      alt: "Komsio, Saamelaismuseo Siida.",
      width: 1000,
      height: 543,
    },
    {
      href: "/valineet",
      title: "Välineet",
      src: "/valineet/schefferus-1674-skis.jpg",
      alt: "Sukset vuoden 1674 kirjasta.",
      width: 706,
      height: 1119,
    },
  ],
  en: [
    {
      href: "/en/dress",
      title: "Dress",
      src: "/puku/enontekio-luhkka.jpg",
      alt: "A man’s luhkka from Enontekiö, Sámi Museum Siida.",
      width: 923,
      height: 1080,
    },
    {
      href: "/en/houses",
      title: "Dwellings",
      src: "/asumus/siida-kota-1959.jpg",
      alt: "A kota in Inari in 1959, Sámi Museum Siida.",
      width: 1200,
      height: 896,
    },
    {
      href: "/en/boats",
      title: "Boats",
      src: "/vene/siida-nuoravene.jpg",
      alt: "A Skolt rope-boat, Sámi Museum Siida.",
      width: 640,
      height: 198,
    },
    {
      href: "/en/fishing",
      title: "Fishing",
      src: "/kalastus/siida-verkko.jpg",
      alt: "A net, tintasilmä, Sámi Museum Siida.",
      width: 1200,
      height: 902,
    },
    {
      href: "/en/knitting",
      title: "Knitting",
      src: "/neulonta/siida-lapaset.jpg",
      alt: "A woman’s mittens from 1979, Sámi Museum Siida.",
      width: 900,
      height: 652,
    },
    {
      href: "/en/food",
      title: "Food",
      src: "/ruoka/siida-tuohiastia.jpg",
      alt: "A birch-bark vessel, Sámi Museum Siida.",
      width: 348,
      height: 400,
    },
    {
      href: "/en/children",
      title: "Children",
      src: "/lapset/siida-komsio.jpg",
      alt: "A cradle, Sámi Museum Siida.",
      width: 1000,
      height: 543,
    },
    {
      href: "/en/tools",
      title: "Tools",
      src: "/valineet/schefferus-1674-skis.jpg",
      alt: "Skis from the book of 1674.",
      width: 706,
      height: 1119,
    },
  ],
};

export const cardLine: Record<string, string> = {
  "/puku": "Enontekiö, Utsjoki, Inari, Vuotso ja kolttat.",
  "/asumus": "Kota Inarissa vuonna 1959.",
  "/vene": "Kolttalainen nuoravene.",
  "/kalastus": "Kolttalainen verkko, tintasilmä.",
  "/neulonta": "Naisen lapaset vuodelta 1979.",
  "/ruoka": "Tuohiastia Siidan kokoelmasta.",
  "/lapset": "Komsio Siidan kokoelmasta.",
  "/valineet": "Sukset vuoden 1674 kirjasta.",
  "/en/dress": "Enontekiö, Utsjoki, Inari, Vuotso, and Skolt.",
  "/en/houses": "A kota in Inari in 1959.",
  "/en/boats": "A Skolt rope-boat.",
  "/en/fishing": "A Skolt net, tintasilmä.",
  "/en/knitting": "A woman’s mittens from 1979.",
  "/en/food": "A birch-bark vessel from Siida.",
  "/en/children": "A cradle from Siida.",
  "/en/tools": "Skis from the book of 1674.",
};

export const bookGroups: Record<Locale, LinkGroup[]> = {
  fi: [
    {
      title: "Elämä",
      src: "/tyo/schefferus-1674.jpg",
      alt: "Poro vetää ahkiota vuoden 1674 kirjassa.",
      width: 706,
      height: 1119,
      items: [
        chapter("/nimi", "Nimi", "/nimi/schefferus-1674.jpg"),
        chapter("/kielet", "Kielet", "/kielet/schefferus-1674-words.jpg"),
        chapter("/tyo", "Työ", "/tyo/schefferus-1674.jpg"),
        chapter("/poro", "Poro", "/poro/schefferus-1674.jpg"),
        chapter("/metsastys", "Metsästys", "/valineet/schefferus-1674-skis.jpg"),
        chapter("/naiset", "Naisten työ", "/naiset/schefferus-1674.jpg"),
        chapter("/haat", "Häät", "/haat/schefferus-1674.jpg"),
        chapter("/hautaus", "Hautaus", "/puku/schefferus-1674.jpg"),
        chapter("/koulu", "Koulu", "/kielet/schefferus-1674-more.jpg"),
        chapter("/vero", "Vero", "/maps/lappi-keskiaika.png", 1200, 734),
        chapter("/markkinat", "Markkinat", "/asumus/mageroya.jpg", 4000, 2830),
      ],
    },
    {
      title: "Usko",
      src: "/rumpu/schefferus-1674.jpg",
      alt: "Kaksi rumpua vuoden 1674 kirjassa.",
      width: 706,
      height: 1119,
      items: [
        chapter("/uskonto", "Uskonto", "/uskonto/schefferus-1674.jpg"),
        chapter("/rumpu", "Rumpu", "/rumpu/schefferus-1674.jpg"),
        chapter("/leikit", "Leikit", "/valineet/schefferus-1674.jpg"),
      ],
    },
    {
      title: "Maa",
      src: "/poro/schefferus-1674.jpg",
      alt: "Poro vuoden 1674 kirjassa.",
      width: 706,
      height: 1119,
      items: [
        chapter("/vuosi", "Vuosi", "/asumus/siida-kota-1959.jpg", 1200, 896),
        chapter("/aseet", "Aseet", "/valineet/schefferus-1674-skis.jpg"),
        chapter("/elaimet", "Eläimet", "/poro/schefferus-1674.jpg"),
        chapter("/linnut", "Linnut", "/rumpu/schefferus-1674-f.jpg"),
        chapter("/metallit", "Metallit", "/rumpu/schefferus-1674-more.jpg"),
        chapter("/puut", "Puut", "/asumus/schefferus-1674.jpg"),
        chapter("/kivet", "Kivet", "/uskonto/schefferus-1674.jpg"),
        chapter("/joet", "Joet", "/vene/alloluokta-1948.jpg", 1529, 1205),
        chapter("/tunturit", "Tunturit", "/asumus/mageroya.jpg", 4000, 2830),
      ],
    },
  ],
  en: [
    {
      title: "Life",
      src: "/tyo/schefferus-1674.jpg",
      alt: "A reindeer pulling a sled in the book of 1674.",
      width: 706,
      height: 1119,
      items: [
        chapter("/en/name", "The name", "/nimi/schefferus-1674.jpg"),
        chapter("/en/languages", "Languages", "/kielet/schefferus-1674-words.jpg"),
        chapter("/en/work", "Work", "/tyo/schefferus-1674.jpg"),
        chapter("/en/reindeer", "The reindeer", "/poro/schefferus-1674.jpg"),
        chapter("/en/hunting", "Hunting", "/valineet/schefferus-1674-skis.jpg"),
        chapter("/en/women", "Women’s work", "/naiset/schefferus-1674.jpg"),
        chapter("/en/marriage", "Marriage", "/haat/schefferus-1674.jpg"),
        chapter("/en/burial", "Burial", "/puku/schefferus-1674.jpg"),
        chapter("/en/school", "The school", "/kielet/schefferus-1674-more.jpg"),
        chapter("/en/tax", "Tax", "/maps/lappi-keskiaika.png", 1200, 734),
        chapter("/en/fairs", "Fairs", "/asumus/mageroya.jpg", 4000, 2830),
      ],
    },
    {
      title: "Belief",
      src: "/rumpu/schefferus-1674.jpg",
      alt: "Two drums in the book of 1674.",
      width: 706,
      height: 1119,
      items: [
        chapter("/en/religion", "Religion", "/uskonto/schefferus-1674.jpg"),
        chapter("/en/drum", "The drum", "/rumpu/schefferus-1674.jpg"),
        chapter("/en/games", "Games", "/valineet/schefferus-1674.jpg"),
      ],
    },
    {
      title: "The land",
      src: "/poro/schefferus-1674.jpg",
      alt: "A reindeer in the book of 1674.",
      width: 706,
      height: 1119,
      items: [
        chapter("/en/year", "The year", "/asumus/siida-kota-1959.jpg", 1200, 896),
        chapter("/en/weapons", "Weapons", "/valineet/schefferus-1674-skis.jpg"),
        chapter("/en/beasts", "Beasts", "/poro/schefferus-1674.jpg"),
        chapter("/en/birds", "Birds", "/rumpu/schefferus-1674-f.jpg"),
        chapter("/en/metals", "Metals", "/rumpu/schefferus-1674-more.jpg"),
        chapter("/en/trees", "Trees", "/asumus/schefferus-1674.jpg"),
        chapter("/en/stones", "Stones", "/uskonto/schefferus-1674.jpg"),
        chapter("/en/rivers", "Rivers", "/vene/alloluokta-1948.jpg", 1529, 1205),
        chapter("/en/mountains", "Mountains", "/asumus/mageroya.jpg", 4000, 2830),
      ],
    },
  ],
};

export const placeLinks: Record<Locale, LinkItem[]> = {
  fi: [
    {
      href: "/siida",
      title: "Siida",
      text: "Kolmetoista kylää, veromaa ja verotus.",
      src: "/maps/lapinmaat.png",
      alt: "Kaaviokartta, jossa Lapin alueet on väritetty kylittäin.",
      width: 1200,
      height: 734,
    },
    {
      href: "/historia",
      title: "Historia",
      text: "Kittilä vuoden 1642 kartassa.",
      src: "/maps/lappi-1600-luku.png",
      alt: "Kaaviokartta Ruotsin, Norjan ja Venäjän alueista Lapissa vuosina 1613–1751. Piirtäjän viivat, ei mitattu raja.",
      width: 1200,
      height: 734,
    },
    {
      href: "/kylat",
      title: "Kylät vuonna 1642",
      text: "Kemin Lapin kylät, ilman rajoja.",
      src: "/maps/lapinkylat.jpg",
      alt: "Kaaviokartta 1600-luvun lapinkylistä. Piirtäjän viivat, ei mitattu raja.",
      width: 1200,
      height: 734,
    },
    {
      href: "/yhdistys",
      title: "Yhdistys",
      text: "Kittilän Lapinkylä ry.",
      src: "/asumus/siida-kota-1959.jpg",
      alt: "Kota Inarissa vuonna 1959, Saamelaismuseo Siida.",
      width: 1200,
      height: 896,
    },
  ],
  en: [
    {
      href: "/en/siida",
      title: "Siida",
      text: "Thirteen villages, tax land, and the tax.",
      src: "/maps/lapinmaat.png",
      alt: "A diagram of the Lapp regions, coloured by village. The artist’s lines, not a surveyed border.",
      width: 1200,
      height: 734,
    },
    {
      href: "/en/history",
      title: "History",
      text: "Kittilä on the map of 1642.",
      src: "/maps/lappi-1600-luku.png",
      alt: "A diagram of Swedish, Norwegian, and Russian areas in Lapland, 1613–1751. The artist’s lines, not a surveyed border.",
      width: 1200,
      height: 734,
    },
    {
      href: "/en/villages",
      title: "Villages in 1642",
      text: "The villages of Kemi Lappmark, with no borders.",
      src: "/maps/lapinkylat.jpg",
      alt: "A diagram of the 17th-century siidas. The artist’s lines, not a surveyed border.",
      width: 1200,
      height: 734,
    },
    {
      href: "/en/association",
      title: "The association",
      text: "Kittilän Lapinkylä ry.",
      src: "/asumus/siida-kota-1959.jpg",
      alt: "A kota in Inari in 1959, Sámi Museum Siida.",
      width: 1200,
      height: 896,
    },
  ],
};

export const menuLabel = {
  fi: { pictures: "Kuvat", book: "Kirja", place: "Paikka" },
  en: { pictures: "Pictures", book: "The book", place: "Place" },
} as const;
