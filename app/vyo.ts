import { museumPhoto, shot, type StoryCopy } from "@/app/story";

const finna = (id: string) => `https://www.finna.fi/Record/${id}`;
const siidaFi = "Saamelaismuseo Siida";
const siidaEn = "Sámi Museum Siida";

const placesFi: StoryCopy["places"] = [
  {
    id: "utsjoki",
    name: "Utsjoki",
    about:
      "Kaksi lankavyötä. Valmistuspaikka on Utsjoki. Vuosien 1900–1920 vyön paikkoina ovat myös Teno. Luettelon vuodet ovat jaksoja.",
    shots: [
      shot(
        "1930-1950",
        "1930–1950",
        "Miehen lankavyö. Pohja on vaalea ja kuviointi puna-sininen. Taustakangas on pellavaa. Malli on Ohcejohka.",
        museumPhoto("/vyo/utsjoki-1930-1950.jpg", 1200, 960, finna("siida.sda-29319"), siidaFi),
      ),
      shot(
        "1900-1920",
        "1900–1920",
        "Naisen lankavyö. Pohja on valkoinen ja kuvio puna-sininen. Vyö on koottu kolmesta nauhasta. Mallirivi on Ohcejohka, ja tiivistelmä sanoo myös Karasjoen malli. Valmistuspaikat ovat Utsjoki ja Teno.",
        museumPhoto("/vyo/teno-1900-1920.jpg", 1200, 952, finna("siida.sda-29439"), siidaFi),
      ),
    ],
  },
  {
    id: "enontekio",
    name: "Enontekiö",
    about: "Kaksi vyötä. Toinen on Näkkälästä, toinen Nunnasesta.",
    shots: [
      shot(
        "1953",
        "1953",
        "Naisen musta nahkavyö, punainen reunus, valkoiset koristeniitit ja pyöreät kupariset napit. Malli on Eanodat. Valmistuspaikat ovat Enontekiö ja Näkkälä.",
        museumPhoto("/vyo/nakkala-1953.jpg", 1200, 678, finna("siida.sda-29249"), siidaFi),
      ),
      shot(
        "1990",
        "1990",
        "Niisivyö, kudottu pirralla. Luettelo sanoo esineen olevan käyttämätön. Pohjalangat ovat valkeaa puuvillaa, kuviolangat punaista ja sinistä villaa. Valmistuspaikat ovat Enontekiö ja Nunnanen.",
        museumPhoto("/vyo/nunnanen-1990.jpg", 1200, 930, finna("siida.sda-28284"), siidaFi),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "Yksi vyö. Valmistuspaikat ovat Inari, Sevettijärvi ja Supru.",
    shots: [
      shot(
        "1978",
        "1978",
        "Naisen pukuun kuuluva vyö. Kangas on punaista verkaa ja koriste lasihelmiä. Luettelo sanoo kuviomallin perinteiseksi ja mallin kolttasaamelaiseksi.",
        museumPhoto("/vyo/inari-1978.jpg", 1200, 889, finna("siida.sda-28195"), siidaFi),
      ),
    ],
  },
  {
    id: "tornio",
    name: "Tornio",
    about: "Vyö. Valmistuspaikka on Tornio.",
    shots: [
      shot(
        "1841",
        "1841",
        "Nahkavyö. Punaverkaiseen kaistaleeseen on kiinnitetty kullan- ja hopeanvärisiä heloja. Neliömäisissä heloissa on renessanssiajalta periytyvä kolmen pyhimyksen aihe. Pyöreissä on nuorapunos.",
        museumPhoto("/vyo/tornio-1841.jpg", 1200, 876, finna("siida.sda-27221"), siidaFi),
      ),
    ],
  },
];

const placesEn: StoryCopy["places"] = [
  {
    id: "utsjoki",
    name: "Utsjoki",
    about:
      "Two woven belts. The making place is Utsjoki. The 1900–1920 belt also names Teno. The catalog dates are ranges.",
    shots: [
      shot(
        "1930-1950",
        "1930–1950",
        "A man’s woven belt. The ground is light and the pattern is red and blue. The backing is linen. The model is Ohcejohka.",
        museumPhoto("/vyo/utsjoki-1930-1950.jpg", 1200, 960, finna("siida.sda-29319"), siidaEn),
      ),
      shot(
        "1900-1920",
        "1900–1920",
        "A woman’s woven belt. The ground is white and the pattern is red and blue. It is made of three bands. The model line is Ohcejohka, and the summary also says a Karasjok model. The making places are Utsjoki and Teno.",
        museumPhoto("/vyo/teno-1900-1920.jpg", 1200, 952, finna("siida.sda-29439"), siidaEn),
      ),
    ],
  },
  {
    id: "enontekio",
    name: "Enontekiö",
    about: "Two belts. One is from Näkkälä, the other from Nunnanen.",
    shots: [
      shot(
        "1953",
        "1953",
        "A woman’s black leather belt, with a red edge, white decorative rivets, and round copper buttons. The model is Eanodat. The making places are Enontekiö and Näkkälä.",
        museumPhoto("/vyo/nakkala-1953.jpg", 1200, 678, finna("siida.sda-29249"), siidaEn),
      ),
      shot(
        "1990",
        "1990",
        "A niisivyö, woven with a pirta. The catalog calls the object unused. The ground threads are white cotton, and the pattern threads are red and blue wool. The making places are Enontekiö and Nunnanen.",
        museumPhoto("/vyo/nunnanen-1990.jpg", 1200, 930, finna("siida.sda-28284"), siidaEn),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "One belt. The making places are Inari, Sevettijärvi, and Supru.",
    shots: [
      shot(
        "1978",
        "1978",
        "A woman’s belt belonging to a dress. The cloth is red broadcloth and the decoration is glass beads. The catalog calls the pattern traditional and the model Skolt.",
        museumPhoto("/vyo/inari-1978.jpg", 1200, 889, finna("siida.sda-28195"), siidaEn),
      ),
    ],
  },
  {
    id: "tornio",
    name: "Tornio",
    about: "A belt. The making place is Tornio.",
    shots: [
      shot(
        "1841",
        "1841",
        "A leather belt. Gold-colored and silver-colored mounts are fixed to a strip of red broadcloth. On the square mounts, the catalog describes a motif of three saints inherited from the Renaissance. The round mounts have a rope braid.",
        museumPhoto("/vyo/tornio-1841.jpg", 1200, 876, finna("siida.sda-27221"), siidaEn),
      ),
    ],
  },
];

export const belts: Record<"fi" | "en", StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/vyo",
    otherHref: "/en/belt",
    title: "Vyö",
    description:
      "Vöitä Utsjoelta, Enontekiöltä, Inarista ja Torniosta. Vuosi ja paikka ovat Saamelaismuseo Siidan luettelosta.",
    heading: "Vyö",
    places: placesFi,
  },
  en: {
    locale: "en",
    path: "/en/belt",
    otherHref: "/vyo",
    title: "Belt",
    description:
      "Belts from Utsjoki, Enontekiö, Inari, and Tornio. The year and the place are from the Sámi Museum Siida catalog.",
    heading: "Belt",
    places: placesEn,
  },
};
