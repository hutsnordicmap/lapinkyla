import type { Locale } from "@/app/content";
import { museumPhoto, type StoryCopy, type StoryShot } from "@/app/story";

const schefferus = {
  src: "/asumus/schefferus-1674.jpg",
  width: 706,
  height: 1119,
  kind: "drawing" as const,
  href: "https://commons.wikimedia.org/wiki/File:The_History_of_Lapland_Wherein_Are_shewed_the_Original,_Manners,_Habits,_Marriages,_Conjurations,_etc._of_that_people._Written_by_John_Scheffer_(IA_SchefferHistoryofLaplandOxford1674Nbo).pdf",
  credit: "Johannes Schefferus",
  licence: "pdm" as const,
  licenceLabel: "Public domain",
};

const mageroya = {
  src: "/asumus/mageroya.jpg",
  width: 4000,
  height: 2830,
  kind: "drawing" as const,
  href: "https://digitaltmuseum.no/0210415038236/lavvo-pa-mageroya-grafikk",
  credit: "Adolphe Bayot, valokuva Andreas Harvik, Nasjonalmuseet",
  licence: "by-4" as const,
  licenceLabel: "CC BY 4.0",
};

const arvidsjaur = {
  src: "/asumus/arvidsjaur-1948.jpg",
  width: 1642,
  height: 1209,
  kind: "photo" as const,
  href: "https://digitaltmuseum.no/011013360580/",
  credit: "Asbjørn Nesheim, Norsk Folkemuseum",
  licence: "by-sa-4" as const,
  licenceLabel: "CC BY-SA 4.0",
};

const malselv = {
  src: "/asumus/malselv-1958.jpg",
  width: 4000,
  height: 3919,
  kind: "photo" as const,
  href: "https://digitaltmuseum.no/021017785805/samisk-lavvo-fra-malselv",
  credit: "Dagfinn Grønoset, Anno Glomdalsmuseet",
  licence: "by-sa-4" as const,
  licenceLabel: "CC BY-SA 4.0",
};

function photo(
  id: string,
  year: string,
  line: string,
  image: Omit<NonNullable<StoryShot["image"]>, "alt">,
): StoryShot {
  return {
    id,
    year,
    line,
    image: { ...image, alt: year ? `${year}. ${line}` : line },
  };
}

const fi: StoryCopy = {
  locale: "fi",
  path: "/asumus",
  otherHref: "/en/houses",
  title: "Asumus",
  description:
    "Saamelainen kota ja laavu: vuoden 1674 piirros, Magerøya, Arvidsjaur, Målselv ja Inarin kota vuodelta 1959. Tyhjät kohdat: Kautokeino, Jokkmokk ja Lovozero.",
  heading: "Asumus",
  places: [
    {
      id: "y1674",
      name: "1674",
      about:
        "Schefferuksen kirja vuodelta 1674 piirtää teltan ja varaston. Kirja sanoo varastoa nallaksi ja kertoo, että se nostettiin katkaistun puun päälle. Tämä ei ole yhden paikan mitattu talo. (Schefferus 1674)",
      shots: [
        photo("schefferus", "1674", "Teltta ja nallaksi kutsuttu varasto.", schefferus),
      ],
    },
    {
      id: "mageroya",
      name: "Magerøya",
      about:
        "Käsin väritetty kivipiirros vuosilta 1842–1856. Museo nimeää sen laavuksi Magerøyalla. Painokuvan oma ranskankielinen nimi käyttää sanaa lappalainen. Tämä on painokuva, ei valokuva yhdestä laavusta. (Nasjonalmuseet)",
      shots: [
        photo(
          "print",
          "1842–1856",
          "Painokuva, jonka museo nimeää laavuksi Magerøyalla.",
          mageroya,
        ),
      ],
    },
    {
      id: "arvidsjaur",
      name: "Arvidsjaur",
      about:
        "Anton Norsan gamme Abrauressa, Arvidsjaurissa. Museo sanoo, että se rakennettiin 1915 ja kuvattiin 1948. Se on puuta. Saamelaiskäräjien sanasto kuvaa kodan pidemmän oleskelun asumukseksi, jonka rungossa on neljä kaaripuuta, ja mainitsee myös hirsikodan. (Norsk Folkemuseum; Saamelaiskäräjät)",
      shots: [
        photo("gamme", "1948", "Puinen gamme. Museo sanoo sen rakennetun 1915.", arvidsjaur),
      ],
    },
    {
      id: "malselv",
      name: "Målselv",
      about:
        "Laavu Målselvissä vuonna 1958. Saamelaiskäräjien sanaston mukaan laavussa ei ole kodan kaaripuita: seipäät risteävät ylhäällä. Se on kevyt ja tilapäinen. Suomen kielen avoin laavu on eri rakennus. (Anno Glomdalsmuseet; Saamelaiskäräjät)",
      shots: [
        photo("lavvu", "1958", "Laavu lumessa. Seipäät risteävät ylhäällä.", malselv),
      ],
    },
    {
      id: "kautokeino",
      name: "Kautokeino",
      about:
        "Norsk Folkemuseumin vuoden 1953 kuva Vuorasvarresta on kalastusgammesta, mutta kuvassa ei näy rakennusta. Turvekota tältä seudulta puuttuu, kunnes museo antaa kuvan.",
      shots: [{ id: "ask", line: "Norsk Folkemuseum" }],
    },
    {
      id: "inari",
      name: "Inari",
      about:
        "Kota Inarissa. Valokuva on vuodelta 1959. Luettelo nimeää sen kodaksi. (Saamelaismuseo Siida)",
      shots: [
        photo(
          "kota",
          "1959",
          "Kota. Valokuva vuodelta 1959.",
          museumPhoto(
            "/asumus/siida-kota-1959.jpg",
            1200,
            896,
            "https://www.finna.fi/Record/siida.sda-30687",
            "Saamelaismuseo Siida",
          ),
        ),
      ],
    },
    {
      id: "jokkmokk",
      name: "Jokkmokk",
      about: "Kuva Jokkmokin kodasta tai laavusta puuttuu. Pyydämme sen Ájttesta.",
      shots: [{ id: "ask", line: "Ájtte" }],
    },
    {
      id: "lovozero",
      name: "Lovozero",
      about: "Kuva Kuolan puolen kodasta tai laavusta puuttuu. Pyydämme sen Lovozeron museolta.",
      shots: [{ id: "ask", line: "Lovozero museum" }],
    },
  ],
};

const enMageroya = {
  ...mageroya,
  credit: "Adolphe Bayot, photograph Andreas Harvik, Nasjonalmuseet",
};

const en: StoryCopy = {
  locale: "en",
  path: "/en/houses",
  otherHref: "/asumus",
  title: "Dwellings",
  description:
    "A Sámi kota and a lavvu: the 1674 drawing, Magerøya, Arvidsjaur, Målselv, and a kota in Inari from 1959. Empty frames: Kautokeino, Jokkmokk, and Lovozero.",
  heading: "Dwellings",
  places: [
    {
      id: "y1674",
      name: "1674",
      about:
        "Schefferus’s book of 1674 draws a tent and a storehouse. The book calls the storehouse a nalla and says it was raised on a cut tree. This is not a measured house from one place. (Schefferus 1674)",
      shots: [
        photo("schefferus", "1674", "A tent and a storehouse the book calls a nalla.", schefferus),
      ],
    },
    {
      id: "mageroya",
      name: "Magerøya",
      about:
        "A hand-coloured lithograph from 1842–1856. The museum titles it a lavvu on Magerøya. The print’s own French title uses the word Lapons. This is a print, not a photograph of one lavvu. (Nasjonalmuseet)",
      shots: [
        photo(
          "print",
          "1842–1856",
          "A print the museum titles as a lavvu on Magerøya.",
          enMageroya,
        ),
      ],
    },
    {
      id: "arvidsjaur",
      name: "Arvidsjaur",
      about:
        "Anton Norsa’s gamme at Abraure, in Arvidsjaur. The museum says it was built in 1915 and photographed in 1948. It is wood. The Sámi Parliament glossary describes a kota as a longer-stay dwelling with four curved poles, and also names a log form of the kota. (Norsk Folkemuseum; Sámi Parliament of Finland)",
      shots: [
        photo("gamme", "1948", "A wooden gamme. The museum says it was built in 1915.", arvidsjaur),
      ],
    },
    {
      id: "malselv",
      name: "Målselv",
      about:
        "A lavvu in Målselv in 1958. In the Sámi Parliament glossary a lavvu has no curved kota poles: the poles cross at the top. It is light and temporary. The Finnish open shelter called a laavu is a different building. (Anno Glomdalsmuseet; Sámi Parliament of Finland)",
      shots: [
        photo("lavvu", "1958", "A lavvu in snow. The poles cross at the top.", malselv),
      ],
    },
    {
      id: "kautokeino",
      name: "Kautokeino",
      about:
        "Norsk Folkemuseum’s 1953 photograph from Vuorasvarre is of a fishing gamme, but the building is not in the picture. A turf kota from this district is missing until the museum provides one.",
      shots: [{ id: "ask", line: "Norsk Folkemuseum" }],
    },
    {
      id: "inari",
      name: "Inari",
      about: "A kota in Inari. The photograph is from 1959. The catalog names it a kota. (Sámi Museum Siida)",
      shots: [
        photo(
          "kota",
          "1959",
          "A kota. Photograph from 1959.",
          museumPhoto(
            "/asumus/siida-kota-1959.jpg",
            1200,
            896,
            "https://www.finna.fi/Record/siida.sda-30687",
            "Sámi Museum Siida",
          ),
        ),
      ],
    },
    {
      id: "jokkmokk",
      name: "Jokkmokk",
      about: "A photograph of a kota or a lavvu from Jokkmokk is missing. We are asking Ájtte.",
      shots: [{ id: "ask", line: "Ájtte" }],
    },
    {
      id: "lovozero",
      name: "Lovozero",
      about: "A photograph of a kota or a lavvu on the Kola side is missing. We are asking the Lovozero museum.",
      shots: [{ id: "ask", line: "Lovozero museum" }],
    },
  ],
};

export const dwellings: Record<Locale, StoryCopy> = { fi, en };
