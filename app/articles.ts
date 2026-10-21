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
  sections: { id: string; heading: string; paragraphs: string[] }[];
  sourcesHeading: string;
  sources: { href: string; label: string }[];
};

export const articles: Record<"history" | "association", Record<Locale, ArticleCopy>> = {
  history: {
    fi: {
      locale: "fi",
      path: "/historia",
      otherHref: "/en/history",
      title: "Kittilän lapinkylän historia",
      description:
        "Kittilän lapinkylä oli metsäsaamelainen siida Kemin Lapissa. Lyhyt alku talvikylästä, kotakäräjistä ja lapinveromaista.",
      kicker: "Historia",
      heading: "Kittilän lapinkylä",
      lede: "Kittilän lapinkylä oli siida Kemin Lapissa. Sen asukkaat olivat metsäsaamelaisia. Tämä on lyhyt alku, ei valmis tutkimus.",
      sections: [
        {
          id: "vuosi",
          heading: "Vuodenkierto",
          paragraphs: [
            "Metsäsaamelainen vuosi ei ollut sama asia kuin tuntureiden poropaimentolaisuus. Perheet liikkuivat omilla nautinta-alueillaan metsästyksen, kalastuksen ja pyynnin mukaan. Pimeimpänä talvena kokoonnuttiin yhteiseen talvikylään.",
          ],
        },
        {
          id: "talvikyla",
          heading: "Talvikylä ja kotakäräjät",
          paragraphs: [
            "Talvikylässä tavattiin, käytiin kauppaa ja hoidettiin sukujen yhteiset asiat. Kotakäräjät oli sukujen päiden kokous. Siellä jaettiin pyyntialueita ja ratkottiin riitoja. Siidalla oli oma hallintonsa jo ennen kruunun käräjiä.",
          ],
        },
        {
          id: "veromaat",
          heading: "Veromaat",
          paragraphs: [
            "1500- ja 1600-luvun käräjillä lapinveromaita käsiteltiin alueina, jotka periytyivät suvuissa. Myöhemmin kruunu houkutteli pohjoiseen maanviljelijöitä verohelpotuksin. Vanha veromaa jäi uuden kylä- ja tilajärjestelmän alle.",
            "Kirkon ja veroluetteloiden kirjoissa ihmiset merkittiin usein pelkästään lappalaisiksi. Metsäsaamelainen tarkennus katosi merkinnästä, vaikka suvut jatkuivat.",
          ],
        },
      ],
      sourcesHeading: "Lähteet",
      sources: [
        {
          href: "https://www.kittilanlapinkyla.net/lapinkylan-historia/",
          label: "Kittilän Lapinkylä ry: lapinkylän historia",
        },
        {
          href: "https://julkaisut.valtioneuvosto.fi/bitstream/handle/10024/161677/VNTEAS_2019_43_Metsalappalainen_kulttuuri.pdf",
          label: "Valtioneuvoston selvitys: Metsälappalaisen kulttuuri ja sen edistäminen (2019)",
        },
      ],
    },
    en: {
      locale: "en",
      path: "/en/history",
      otherHref: "/historia",
      title: "History of the Kittilä siida",
      description:
        "The Kittilä lapinkylä was a Forest Sámi siida in Kemi Lappmark. A short start on the winter village, the siida assembly, and the family tax lands.",
      kicker: "History",
      heading: "The Kittilä siida",
      lede: "The Kittilä lapinkylä was a siida in Kemi Lappmark. Its people were Forest Sámi. This is a short start, not a finished study.",
      sections: [
        {
          id: "year",
          heading: "The year",
          paragraphs: [
            "A Forest Sámi year was not the same thing as mountain reindeer nomadism. Families moved on their own inherited grounds to hunt, fish, and trap. In the darkest part of winter they gathered in a shared winter village, the talvikylä.",
          ],
        },
        {
          id: "village",
          heading: "The winter village and the kotakäräjät",
          paragraphs: [
            "The winter village was where people met, traded, and settled matters between families. The kotakäräjät was the meeting of family heads. They divided hunting grounds and resolved disputes. The siida had its own government before the Crown’s courts.",
          ],
        },
        {
          id: "tax",
          heading: "Tax lands",
          paragraphs: [
            "In 16th- and 17th-century court records, Lapp tax lands were treated as areas that passed down in families. Later the Crown drew farmers north with tax relief. The old tax lands were left under a new system of farming villages and farms.",
            "In church books and tax lists, people were often written down simply as Lapp. The Forest Sámi detail disappeared from the record, even where the families continued.",
          ],
        },
      ],
      sourcesHeading: "Sources",
      sources: [
        {
          href: "https://www.kittilanlapinkyla.net/lapinkylan-historia/",
          label: "Kittilän Lapinkylä ry: history of the siida (in Finnish)",
        },
        {
          href: "https://julkaisut.valtioneuvosto.fi/bitstream/handle/10024/161677/VNTEAS_2019_43_Metsalappalainen_kulttuuri.pdf",
          label: "Finnish government report: Forest Sámi culture and how to support it (2019, in Finnish)",
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
            "Yhdistys on toiminut nimellä Kuivasalmen Lapinkyläyhdistys ry. Se kertoo, että nimi vaihtuu vuoden 2026 aikana muotoon Kittilän Lapinkylä ry. Sama nimi oli käytössä jo vanhojen lapinkylien aikana.",
          ],
        },
        {
          id: "tyo",
          heading: "Mitä yhdistys tekee",
          paragraphs: [
            "Yhdistys sanoo lisäävänsä tietoisuutta siitä, että Kittilän lapinkylä on ollut olemassa, ja toimivansa alueen metsäsaamelaisten yhdyssiteenä. Se kertoo olevansa perustajajäsen Lapinkylien parlamentissa, jota se kutsuu Suomen alkuperäisten saamelaisten yhteistyöjärjestön päättäväksi kokoukseksi.",
          ],
        },
        {
          id: "kirja",
          heading: "Historiakirja",
          paragraphs: [
            "Yhdistys kokoaa kirjaa Kittilän lapinkylästä ja lappalaishistoriasta. Sukujen vaiheet kootaan arkistoista, työpajoista ja muistitiedosta. Aloitustyöpaja pidettiin 11.4.2026 Kittilän Ylärissä. Kittilän kunta oli merkinnyt tilaisuuden kulttuuriviikon ohjelmaan, ja yhdistys on julkaissut tallenteen.",
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
            "The association has operated as Kuivasalmen Lapinkyläyhdistys ry. They say the name is changing during 2026 to Kittilän Lapinkylä ry. That name was already used in the time of the old siidas.",
          ],
        },
        {
          id: "work",
          heading: "What they do",
          paragraphs: [
            "They say they make the Kittilä siida better known, and that they are a link for Forest Sámi people in the area. They describe themselves as a founding member of the Lapinkylien parlamentti, the decision meeting of the cooperation organization for what they call Finland’s original Sámi.",
          ],
        },
        {
          id: "book",
          heading: "The history book",
          paragraphs: [
            "They are gathering a book on the Kittilä siida and on Lapp history. Family lines are being collected from archives, workshops, and remembered accounts. The opening workshop was held on 11 April 2026 at Yläri in Kittilä. The municipality listed it in the culture-week program, and the association has published a recording.",
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
