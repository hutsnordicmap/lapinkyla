import { museumPhoto, shot, type StoryCopy } from "@/app/story";

const finna = (id: string) => `https://www.finna.fi/Record/${id}`;
const siidaFi = "Saamelaismuseo Siida";
const siidaEn = "Sámi Museum Siida";

const placesFi: StoryCopy["places"] = [
  {
    id: "utsjoki",
    name: "Utsjoki",
    about:
      "Kolme ajoahkiota. Kahden valmistuspaikkoina ovat myös Tenojoki, ja yhden myös Nuvvus. Vain yhdellä on aika, ja se on jakso 1940–1949.",
    shots: [
      shot(
        "1940-1949",
        "1940–1949",
        "Sininen ajoahkio. Se oli sininen jo ostettaessa 1940-luvulla. Luettelo sanoo, että Oula Aikio on myöhemmin uusinut sinisen maalauksen. Valmistuspaikat ovat Utsjoki ja Tenojoki.",
        museumPhoto("/ahkio/utsjoki-1940-1949.jpg", 640, 328, finna("siida.sda-28162"), siidaFi),
      ),
      shot(
        "nainen",
        "",
        "Naisen ajoahkio. Luettelo ei anna valmistusvuotta. Paikka on Utsjoki. Luettelo sanoo ahkion lahjoitetun Unkarin kansatieteelliselle museolle.",
        museumPhoto("/ahkio/utsjoki-nainen.jpg", 640, 410, finna("siida.sda-26205"), siidaFi),
      ),
      shot(
        "nuvvus",
        "",
        "Vihreälaitainen ajoahkio. Luettelo ei anna valmistusvuotta. Valmistuspaikat ovat Utsjoki, Nuvvus ja Tenojoki.",
        museumPhoto("/ahkio/nuvvus.jpg", 400, 370, finna("siida.sda-28163"), siidaFi),
      ),
    ],
  },
  {
    id: "kainuu",
    name: "Kainuu",
    about: "Ajoahkio. Valmistuspaikka on Kainuu ja aika 1850–1899.",
    shots: [
      shot(
        "1850-1899",
        "1850–1899",
        "Pitkittäisistä kylkilaudoista tehty ajoahkio, osittain keltainen. Aineet ovat puu ja rauta.",
        museumPhoto("/ahkio/kainuu-1850-1899.jpg", 1200, 405, finna("siida.sda-29215"), siidaFi),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about:
      "Luettelo sanoo tätä saniksi ja pororeeksi. Valmistuspaikat ovat Inari ja Sevettijärvi. Vuotta ei ole.",
    shots: [
      shot(
        "reki",
        "",
        "Sani, pororeki. Aine on puu. Luettelo ei anna valmistusvuotta.",
        museumPhoto("/ahkio/sevetti-reki.jpg", 1200, 645, finna("siida.sda-28182"), siidaFi),
      ),
    ],
  },
];

const placesEn: StoryCopy["places"] = [
  {
    id: "utsjoki",
    name: "Utsjoki",
    about:
      "Three driving sleds. Two also name the Teno river, and one also names Nuvvus. Only one has a date, and it is the range 1940–1949.",
    shots: [
      shot(
        "1940-1949",
        "1940–1949",
        "A blue driving sled. It was already blue when it was bought in the 1940s. The catalog says Oula Aikio later renewed the blue paint. The making places are Utsjoki and the Teno river.",
        museumPhoto("/ahkio/utsjoki-1940-1949.jpg", 640, 328, finna("siida.sda-28162"), siidaEn),
      ),
      shot(
        "nainen",
        "",
        "A woman’s driving sled. The catalog gives no making year. The place is Utsjoki. The catalog says the sled was given to the ethnographic museum in Hungary.",
        museumPhoto("/ahkio/utsjoki-nainen.jpg", 640, 410, finna("siida.sda-26205"), siidaEn),
      ),
      shot(
        "nuvvus",
        "",
        "A driving sled with green sides. The catalog gives no making year. The making places are Utsjoki, Nuvvus, and the Teno river.",
        museumPhoto("/ahkio/nuvvus.jpg", 400, 370, finna("siida.sda-28163"), siidaEn),
      ),
    ],
  },
  {
    id: "kainuu",
    name: "Kainuu",
    about: "A driving sled. The making place is Kainuu and the date is 1850–1899.",
    shots: [
      shot(
        "1850-1899",
        "1850–1899",
        "A driving sled built from lengthwise side planks, partly yellow. The materials are wood and iron.",
        museumPhoto("/ahkio/kainuu-1850-1899.jpg", 1200, 405, finna("siida.sda-29215"), siidaEn),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about:
      "The catalog calls this a sani, a reindeer sled with runners. The making places are Inari and Sevettijärvi. There is no year.",
    shots: [
      shot(
        "reki",
        "",
        "A sani, a reindeer sled. The material is wood. The catalog gives no making year.",
        museumPhoto("/ahkio/sevetti-reki.jpg", 1200, 645, finna("siida.sda-28182"), siidaEn),
      ),
    ],
  },
];

export const sleds: Record<"fi" | "en", StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/ahkio",
    otherHref: "/en/sled",
    title: "Ahkio",
    description:
      "Ajoahkioita Utsjoelta ja Kainuusta, ja yksi pororeki Inarista. Vuosi ja paikka ovat Saamelaismuseo Siidan luettelosta.",
    heading: "Ahkio",
    places: placesFi,
  },
  en: {
    locale: "en",
    path: "/en/sled",
    otherHref: "/ahkio",
    title: "Sled",
    description:
      "Driving sleds from Utsjoki and Kainuu, and one reindeer sled from Inari. The year and the place are from the Sámi Museum Siida catalog.",
    heading: "Sled",
    places: placesEn,
  },
};
