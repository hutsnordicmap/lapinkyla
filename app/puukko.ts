import { museumPhoto, shot, type StoryCopy } from "@/app/story";

const finna = (id: string) => `https://www.finna.fi/Record/${id}`;

const placesFi: StoryCopy["places"] = [
  {
    id: "utsjoki",
    name: "Utsjoki",
    about:
      "Kaksi leukua. Valmistuspaikka on Utsjoki. Vuoden 1974 puukon luettelo nimeää myös Outakosken. Se on yksi esine.",
    shots: [
      shot(
        "1909",
        "1909",
        "Leu'u ja nahkatuppi. Terään on kaiverrettu vuosiluku 1909 ja nimikirjaimet A.S. Kahva on puuta ja terä terästä. Malli on Ohcejohka. Tupen kärki on muotoiltu kalanpyrstöksi.",
        museumPhoto(
          "/puukko/utsjoki-1909.jpg",
          1200,
          538,
          finna("siida.sda-29346"),
          "Saamelaismuseo Siida",
        ),
      ),
      shot(
        "1974",
        "1974",
        "8 tuuman leuku ja nahkatuppi. Luettelossa esine on uusi, malli perinteinen ja silloin yleisessä käytössä. Valmistuspaikat ovat Utsjoki ja Outakoski.",
        museumPhoto(
          "/puukko/outakoski-1974.jpg",
          900,
          448,
          finna("siida.sda-28096"),
          "Saamelaismuseo Siida",
        ),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "Puukko ja tuppi. Valmistaja on nimetty luettelossa.",
    shots: [
      shot(
        "1979",
        "1979",
        "Puukko ja tuppi. Valmistaja on Birit-Anni Lehtola (os. Pieski). Kahvassa on poronluuta ja poronsarvea. Tupen yläosa on nahkaa ja alaosa poronsarvea.",
        museumPhoto(
          "/puukko/inari-1979.jpg",
          900,
          476,
          finna("siida.sda-24018"),
          "Saamelaismuseo Siida",
        ),
      ),
    ],
  },
  {
    id: "rovaniemi",
    name: "Rovaniemi",
    about: "Leuku. Luettelon valmistusaika on 1924–1969 ja paikka Rovaniemi.",
    shots: [
      shot(
        "1924-1969",
        "1924–1969",
        "Luukahvainen leuku. Kahvan luu on poroa, ja kaiverruksessa on kuva porosta sekä geometrisia vinoneliöitä. Terässä on piirros ja omistuskirjoitus. Luettelo ei kirjoita kirjoitusta auki.",
        museumPhoto(
          "/puukko/rovaniemi.jpg",
          1200,
          354,
          finna("siida.sda-29475"),
          "Saamelaismuseo Siida",
        ),
      ),
    ],
  },
];

const placesEn: StoryCopy["places"] = [
  {
    id: "utsjoki",
    name: "Utsjoki",
    about:
      "Two leukus. The making place is Utsjoki. The 1974 record also names Outakoski. That is one object.",
    shots: [
      shot(
        "1909",
        "1909",
        "A leuku and a leather sheath. The year 1909 and the initials A.S. are engraved on the blade. The handle is wood and the blade is steel. The catalog’s model is Ohcejohka. The sheath tip is shaped as a fish tail.",
        museumPhoto(
          "/puukko/utsjoki-1909.jpg",
          1200,
          538,
          finna("siida.sda-29346"),
          "Sámi Museum Siida",
        ),
      ),
      shot(
        "1974",
        "1974",
        "An 8-inch leuku and a leather sheath. The catalog calls the object new, the model traditional, and then in general use. The making places are Utsjoki and Outakoski.",
        museumPhoto(
          "/puukko/outakoski-1974.jpg",
          900,
          448,
          finna("siida.sda-28096"),
          "Sámi Museum Siida",
        ),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "A knife and a sheath. The catalog names the maker.",
    shots: [
      shot(
        "1979",
        "1979",
        "A knife and a sheath. The maker is Birit-Anni Lehtola (née Pieski). The handle has reindeer bone and reindeer horn. The sheath is leather above and reindeer horn below.",
        museumPhoto(
          "/puukko/inari-1979.jpg",
          900,
          476,
          finna("siida.sda-24018"),
          "Sámi Museum Siida",
        ),
      ),
    ],
  },
  {
    id: "rovaniemi",
    name: "Rovaniemi",
    about: "A leuku. The catalog dates the making to 1924–1969 and the place to Rovaniemi.",
    shots: [
      shot(
        "1924-1969",
        "1924–1969",
        "A leuku with a bone handle. The bone is reindeer bone. The engraving is a picture of a reindeer and geometric diamonds. The blade has a drawing and an owner’s inscription. The catalog does not write the inscription out.",
        museumPhoto(
          "/puukko/rovaniemi.jpg",
          1200,
          354,
          finna("siida.sda-29475"),
          "Sámi Museum Siida",
        ),
      ),
    ],
  },
];

export const knives: Record<"fi" | "en", StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/puukko",
    otherHref: "/en/knife",
    title: "Puukko",
    description:
      "Leukupuukkoja Utsjoelta, Inarista ja Rovaniemeltä. Vuosi ja paikka ovat Saamelaismuseo Siidan luettelosta.",
    heading: "Puukko",
    places: placesFi,
  },
  en: {
    locale: "en",
    path: "/en/knife",
    otherHref: "/puukko",
    title: "Knife",
    description:
      "Knives from Utsjoki, Inari, and Rovaniemi. The year and the place are from the Sámi Museum Siida catalog.",
    heading: "Knife",
    places: placesEn,
  },
};
