export type Locale = "fi" | "en";

const MAP_CENTER = "lat=67.766210&lng=24.857310&zoom=12.00";

const tripAdvisor =
  "https://www.tripadvisor.ie/Attraction_Review-g677549-d1646546-Reviews-Levin_Lapinkyla-Levi_Lapland.html";

export const chrome = {
  fi: {
    homeHref: "/",
    currentLabel: "Suomi",
    otherLabel: "English",
    languageName: "Kieli",
    footnoteBefore: "Lapinkylä.fi oli aiemmin Levin Lapinkylä Oy:n verkkosivusto (",
    footnoteLink: "entinen TripAdvisor-profiili",
    footnoteAfter: "). Verkkotunnus on nyt erillinen ja itsenäinen sivu.",
    tripAdvisor,
  },
  en: {
    homeHref: "/en",
    currentLabel: "English",
    otherLabel: "Suomi",
    languageName: "Language",
    footnoteBefore: "Lapinkylä.fi used to be the website of Levin Lapinkylä Oy (",
    footnoteLink: "former TripAdvisor profile",
    footnoteAfter: "). The domain is now a separate, independent page.",
    tripAdvisor,
  },
} as const;

export const site = {
  fi: {
    locale: "fi" as const,
    path: "/",
    otherHref: "/en",
    title: "Lapinkylä, Kittilän saamelaiskylä",
    description:
      "Kittilän lapinkylä Sirkassa, ja saamelainen historia kuvina: puku, asumus, veneet, työ ja vuoden 1674 kirja.",
    place: "Sirkka, Kittilä",
    heading: "Lapinkylä",
    intro:
      "Lapinkylä on paikka Levin eteläpuolella, Kittilän Sirkassa. Tämä sivusto on siitä erillinen. Se alkaa Kittilän lapinkylän historiasta ja yhdistyksestä, joka sitä vaalii. Myöhemmin siitä on tarkoitus tulla kartta Lapin vanhoista kylistä.",
    history:
      "Tämä verkkotunnus oli aiemmin Levin Lapinkylä Oy:n sivusto. Yritys tarjosi Sirkassa poroajeluja, kahvilaa ja mökkimajoitusta. Tämä sivu ei jatka sitä toimintaa, eikä täältä voi tehdä varauksia.",
    topicsHeading: "Sivustolla",
    topics: [
      {
        href: "/puku",
        title: "Puku",
        text: "",
      },
      {
        href: "/asumus",
        title: "Asumus",
        text: "",
      },
      {
        href: "/vene",
        title: "Vene",
        text: "",
      },
      {
        href: "/kalastus",
        title: "Kalastus",
        text: "",
      },
      {
        href: "/neulonta",
        title: "Neulonta",
        text: "",
      },
      {
        href: "/kielet",
        title: "Kielet",
        text: "",
      },
      {
        href: "/valineet",
        title: "Välineet",
        text: "",
      },
      {
        href: "/tyo",
        title: "Työ",
        text: "",
      },
      {
        href: "/nimi",
        title: "Nimi",
        text: "",
      },
      {
        href: "/ruoka",
        title: "Ruoka",
        text: "",
      },
      {
        href: "/metsastys",
        title: "Metsästys",
        text: "",
      },
      {
        href: "/naiset",
        title: "Naisten työ",
        text: "",
      },
      {
        href: "/uskonto",
        title: "Uskonto",
        text: "",
      },
      {
        href: "/rumpu",
        title: "Rumpu",
        text: "",
      },
      {
        href: "/leikit",
        title: "Leikit",
        text: "",
      },
      {
        href: "/haat",
        title: "Häät",
        text: "",
      },
      {
        href: "/poro",
        title: "Poro",
        text: "",
      },
      {
        href: "/vero",
        title: "Vero",
        text: "",
      },
      {
        href: "/markkinat",
        title: "Markkinat",
        text: "",
      },
      {
        href: "/lapset",
        title: "Lapset",
        text: "",
      },
      {
        href: "/hautaus",
        title: "Hautaus",
        text: "",
      },
      {
        href: "/koulu",
        title: "Koulu",
        text: "",
      },
      {
        href: "/vuosi",
        title: "Vuosi",
        text: "",
      },
      {
        href: "/aseet",
        title: "Aseet",
        text: "",
      },
      {
        href: "/elaimet",
        title: "Eläimet",
        text: "",
      },
      {
        href: "/linnut",
        title: "Linnut",
        text: "",
      },
      {
        href: "/metallit",
        title: "Metallit",
        text: "",
      },
      {
        href: "/puut",
        title: "Puut",
        text: "",
      },
      {
        href: "/kivet",
        title: "Kivet",
        text: "",
      },
      {
        href: "/joet",
        title: "Joet",
        text: "",
      },
      {
        href: "/tunturit",
        title: "Tunturit",
        text: "",
      },
      {
        href: "/siida",
        title: "Siida",
        text: "Mitä lapinkylä oli: kolmetoista kylää, veromaa ja verotus.",
      },
      {
        href: "/historia",
        title: "Historia",
        text: "Kittilä vuoden 1642 kartassa, ja mitä veromaista on luettu.",
      },
      {
        href: "/kylat",
        title: "Kylät vuonna 1642",
        text: "Kemin Lapin kylät Treskin kartalta, ilman rajoja.",
      },
      {
        href: "/yhdistys",
        title: "Yhdistys",
        text: "Kittilän Lapinkylä ry ja tekeillä oleva historiakirja.",
      },
    ],
    mapHeading: "Kartta",
    mapIntro: "Kittilä, Lapinkylän tienoo.",
    embedTitle: "Kittilän kartta, Lapinkylän tienoo",
    embedSrc: `https://www.huts.fi/embed/suomi/lappi/kittila?trails=1&address=1&${MAP_CENTER}`,
    mapCreditBefore: "Kittilän ulkoilukartta: ",
    mapCreditHref: "https://www.huts.fi/suomi/lappi/kittila",
    aroundHeading: "Tällä seudulla",
    links: [
      {
        href: "https://www.huts.fi/suomi/lappi/kittila/routes/hiihtoladut/levi-south-point-levin-lapynkyla-loopi",
        title: "Hiihtolatu Lapinkylään",
        text: "Levin etelärinteeltä Lapinkylän suuntaan kulkeva latulenkki.",
      },
      {
        href: "https://www.huts.fi/suomi/lappi/kittila",
        title: "Kittilä kartalla",
        text: "Laavut, reitit ja muut paikat koko kunnassa.",
      },
      {
        href: "https://www.huts.fi/suomi/lappi/kittila/lomamokit",
        title: "Mökkejä Kittilässä",
        text: "Vuokramökkejä Levin ja Kittilän alueella.",
      },
      {
        href: "https://www.huts.fi/suomi/lappi/kittila/saunat",
        title: "Saunoja Kittilässä",
        text: "Yleisiä ja vuokrattavia saunoja Kittilässä.",
      },
    ],
  },
  en: {
    locale: "en" as const,
    path: "/en",
    otherHref: "/",
    title: "Lapinkylä, the Kittilä siida",
    description:
      "The Kittilä siida in Sirkka, and a visual Sámi history: dress, dwellings, boats, work, and the book of 1674.",
    place: "Sirkka, Kittilä",
    heading: "Lapinkylä",
    intro:
      "Lapinkylä is a place south of Levi, in Sirkka, Kittilä. This is an independent page about that place. It starts with the history of the Kittilä siida and the association that looks after it. Over time it is meant to become a map of old villages in Lapland.",
    history:
      "This domain used to be the website of Levin Lapinkylä Oy, which offered reindeer rides, a café, and cabin stays in Sirkka. This page does not carry on that business, and you cannot make a booking here.",
    topicsHeading: "On this site",
    topics: [
      {
        href: "/en/dress",
        title: "Sámi dress",
        text: "",
      },
      {
        href: "/en/houses",
        title: "Dwellings",
        text: "",
      },
      {
        href: "/en/boats",
        title: "Boats",
        text: "",
      },
      {
        href: "/en/fishing",
        title: "Fishing",
        text: "",
      },
      {
        href: "/en/knitting",
        title: "Knitting",
        text: "",
      },
      {
        href: "/en/languages",
        title: "Languages",
        text: "",
      },
      {
        href: "/en/tools",
        title: "Tools",
        text: "",
      },
      {
        href: "/en/work",
        title: "Work",
        text: "",
      },
      {
        href: "/en/name",
        title: "The name",
        text: "",
      },
      {
        href: "/en/food",
        title: "Food",
        text: "",
      },
      {
        href: "/en/hunting",
        title: "Hunting",
        text: "",
      },
      {
        href: "/en/women",
        title: "Women’s work",
        text: "",
      },
      {
        href: "/en/religion",
        title: "Religion",
        text: "",
      },
      {
        href: "/en/drum",
        title: "The drum",
        text: "",
      },
      {
        href: "/en/games",
        title: "Games",
        text: "",
      },
      {
        href: "/en/marriage",
        title: "Marriage",
        text: "",
      },
      {
        href: "/en/reindeer",
        title: "The reindeer",
        text: "",
      },
      {
        href: "/en/tax",
        title: "Tax",
        text: "",
      },
      {
        href: "/en/fairs",
        title: "Fairs",
        text: "",
      },
      {
        href: "/en/children",
        title: "Children",
        text: "",
      },
      {
        href: "/en/burial",
        title: "Burial",
        text: "",
      },
      {
        href: "/en/school",
        title: "The school",
        text: "",
      },
      {
        href: "/en/year",
        title: "The year",
        text: "",
      },
      {
        href: "/en/weapons",
        title: "Weapons",
        text: "",
      },
      {
        href: "/en/beasts",
        title: "Beasts",
        text: "",
      },
      {
        href: "/en/birds",
        title: "Birds",
        text: "",
      },
      {
        href: "/en/metals",
        title: "Metals",
        text: "",
      },
      {
        href: "/en/trees",
        title: "Trees",
        text: "",
      },
      {
        href: "/en/stones",
        title: "Stones",
        text: "",
      },
      {
        href: "/en/rivers",
        title: "Rivers",
        text: "",
      },
      {
        href: "/en/mountains",
        title: "Mountains",
        text: "",
      },
      {
        href: "/en/siida",
        title: "Siida",
        text: "What a lapinkylä was: thirteen villages, the tax land, and taxation.",
      },
      {
        href: "/en/history",
        title: "History",
        text: "Kittilä on the 1642 map, and how the tax lands have been read.",
      },
      {
        href: "/en/villages",
        title: "Villages in 1642",
        text: "The Kemi Lappmark villages from Tresk’s map, without borders.",
      },
      {
        href: "/en/association",
        title: "The association",
        text: "Kittilän Lapinkylä ry and the history book they are writing.",
      },
    ],
    mapHeading: "Map",
    mapIntro: "Kittilä, around Lapinkylä.",
    embedTitle: "Map of Kittilä, around Lapinkylä",
    embedSrc: `https://www.huts.fi/embed/finland/lapland/kittila?trails=1&address=1&${MAP_CENTER}`,
    mapCreditBefore: "Outdoor map of Kittilä: ",
    mapCreditHref: "https://www.huts.fi/finland/lapland/kittila",
    aroundHeading: "Around this area",
    links: [
      {
        href: "https://www.huts.fi/finland/lapland/kittila/routes/ski-trails/levi-south-point-levin-lapynkyla-loopi",
        title: "Ski track to Lapinkylä",
        text: "A loop from Levi’s south slopes toward Lapinkylä.",
      },
      {
        href: "https://www.huts.fi/finland/lapland/kittila",
        title: "Kittilä on the map",
        text: "Shelters, trails, and other places in the municipality.",
      },
      {
        href: "https://www.huts.fi/finland/lapland/kittila/holiday-cabins",
        title: "Cabins in Kittilä",
        text: "Holiday cabins around Levi and Kittilä.",
      },
      {
        href: "https://www.huts.fi/finland/lapland/kittila/saunas",
        title: "Saunas in Kittilä",
        text: "Public and bookable saunas in Kittilä.",
      },
    ],
  },
} as const;

export type PageCopy = (typeof site)[Locale];
