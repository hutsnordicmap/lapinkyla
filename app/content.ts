export type Locale = "fi" | "en";

const MAP_CENTER = "lat=67.766210&lng=24.857310&zoom=12.00";

export const site = {
  fi: {
    locale: "fi" as const,
    htmlLang: "fi",
    path: "/",
    otherHref: "/en",
    otherLabel: "English",
    currentLabel: "Suomi",
    languageName: "Kieli",
    title: "Lapinkylä, Sirkka",
    description:
      "Lapinkylä on paikka Levin eteläpuolella Kittilän Sirkassa. Sivu on itsenäinen, ja siitä on tarkoitus kasvaa kartta Lapin vanhoista kylistä.",
    place: "Sirkka, Kittilä",
    heading: "Lapinkylä",
    intro:
      "Lapinkylä on paikka Levin eteläpuolella, Kittilän Sirkassa. Tämä sivusto on siitä erillinen. Myöhemmin siitä on tarkoitus tulla kartta Lapin vanhoista kylistä ja saamelaisista paikoista.",
    history:
      "Tämä verkkotunnus oli aiemmin Levin Lapinkylä Oy:n sivusto. Yritys tarjosi Sirkassa poroajeluja, kahvilaa ja mökkimajoitusta. Tämä sivu ei jatka sitä toimintaa, eikä täältä voi tehdä varauksia.",
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
    footnoteBefore: "Lapinkylä.fi oli aiemmin Levin Lapinkylä Oy:n verkkosivusto (",
    footnoteLink: "entinen TripAdvisor-profiili",
    footnoteAfter:
      "). Verkkotunnus on nyt erillinen ja itsenäinen sivu.",
    tripAdvisor:
      "https://www.tripadvisor.ie/Attraction_Review-g677549-d1646546-Reviews-Levin_Lapinkyla-Levi_Lapland.html",
  },
  en: {
    locale: "en" as const,
    htmlLang: "en",
    path: "/en",
    otherHref: "/",
    otherLabel: "Suomi",
    currentLabel: "English",
    languageName: "Language",
    title: "Lapinkylä, Sirkka",
    description:
      "Lapinkylä is a place south of Levi, in Sirkka, Kittilä. This independent page is meant to grow into a map of old villages in Lapland.",
    place: "Sirkka, Kittilä",
    heading: "Lapinkylä",
    intro:
      "Lapinkylä is a place south of Levi, in Sirkka, Kittilä. This is an independent page about that place. Over time it is meant to become a map of old villages in Lapland and of Sámi places.",
    history:
      "This domain used to be the website of Levin Lapinkylä Oy, which offered reindeer rides, a café, and cabin stays in Sirkka. This page does not carry on that business, and you cannot make a booking here.",
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
    footnoteBefore:
      "Lapinkylä.fi used to be the website of Levin Lapinkylä Oy (",
    footnoteLink: "former TripAdvisor profile",
    footnoteAfter: "). The domain is now a separate, independent page.",
    tripAdvisor:
      "https://www.tripadvisor.ie/Attraction_Review-g677549-d1646546-Reviews-Levin_Lapinkyla-Levi_Lapland.html",
  },
} as const;

export type PageCopy = (typeof site)[Locale];
