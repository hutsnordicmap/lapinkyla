import { museumPhoto, shot, type StoryCopy } from "@/app/story";

const finna = (id: string) => `https://www.finna.fi/Record/${id}`;
const siidaFi = "Saamelaismuseo Siida";
const siidaEn = "Sámi Museum Siida";

const placesFi: StoryCopy["places"] = [
  {
    id: "utsjoki-1800",
    name: "Utsjoki",
    about: "Kuksa. Valmistuspaikka on Utsjoki. Aine on pahkaa.",
    shots: [
      shot(
        "1800-1899",
        "1800–1899",
        "Pyöreä, syvä puuastia. Pohja on tasainen, ja toisella sivulla on pieni kädensija.",
        museumPhoto("/kuksa/utsjoki-1800-1899.jpg", 1200, 723, finna("siida.sda-29145"), siidaFi),
      ),
    ],
  },
  {
    id: "kittila",
    name: "Kittilä",
    about: "Kuksa. Valmistuspaikka on Kittilä. Aine on pahkaa.",
    shots: [
      shot(
        "1800-1899",
        "1800–1899",
        "Syvä kuksa. Pyöreän kuppiosan ulkoreuna on tasainen. Kahva levenee, ja sen päässä on pyöreä reikä.",
        museumPhoto("/kuksa/kittila-1800-1899.jpg", 1200, 750, finna("siida.sda-29458"), siidaFi),
      ),
    ],
  },
  {
    id: "enontekio",
    name: "Enontekiö",
    about: "Kaksi kuksaa. Valmistuspaikka on Enontekiö.",
    shots: [
      shot(
        "1900-1949",
        "1900–1949",
        "Suorakaiteen muotoisesta koivun pahkasta koverrettu kuksa. Se kaartuu pyöreästi tasaista pohjaa kohti. Samasta puusta veistetyssä korvassa on reikä. Ulkopinnan kolmiomainen palojälki on veistetty pois, ja veiston reunoja on tasoitettu laajemmiksi, jolloin vaaleaa puuta on tullut esiin.",
        museumPhoto("/kuksa/enontekio-1900-1949.jpg", 1200, 732, finna("siida.sda-29282"), siidaFi),
      ),
      shot(
        "1940-1944",
        "1940–1944",
        "Aineina ovat pahka ja koivu. Kädensijassa yhdistyvät kauhan varsi ja kupin korva. Varteen on kaiverrettu kukka varsineen. Etureunassa on terävä nokka. Ulkopinta on ohuesti lakattu.",
        museumPhoto("/kuksa/enontekio-1940-1944.jpg", 1200, 800, finna("siida.sda-28079"), siidaFi),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "Kuksa. Valmistaja on Birit-Anni Lehtola (os. Pieski). Valmistuspaikka on Inari.",
    shots: [
      shot(
        "1979",
        "1979",
        "Puinen pahkakuppi. Kahvaan on upotettu sarviosa, jonka reunat ja keskusta on koristeltu. Kahvan päässä on kolmion muotoinen reikä, ja sen läpi on punottu sisnanauha. Nauhan päät on solmittu yhteen. Kuppiosa on soikea. Ulkoreuna on kahvaa vastapäätä terävämpi ja muutoin tasainen.",
        museumPhoto("/kuksa/inari-1979.jpg", 1000, 658, finna("siida.sda-24027"), siidaFi),
      ),
    ],
  },
  {
    id: "utsjoki-2007",
    name: "Utsjoki",
    about: "Kuksa. Valmistuspaikka on Utsjoki. Aineina ovat puu, poronnahka ja poronsarvi.",
    shots: [
      shot(
        "2007",
        "2007",
        "Ulkopuoli on käsitelty tummemmaksi kuin sisäpuoli. Kuppiosa on soikea, ja pohja on pyöreä. Kahvan sarviosan keskellä on kuva-aihe, ja tyvessä on niitin ympärillä aurinko. Sarviosa on kiinnitetty rautaniitein tai -nauloin. Kahvan alla olevaan reikään on pujotettu sisnanyöri, jonka päät on solmittu yhteen.",
        museumPhoto("/kuksa/utsjoki-2007.jpg", 1000, 690, finna("siida.sda-24562"), siidaFi),
      ),
    ],
  },
];

const placesEn: StoryCopy["places"] = [
  {
    id: "utsjoki-1800",
    name: "Utsjoki",
    about: "A kuksa. The making place is Utsjoki. The material is burl.",
    shots: [
      shot(
        "1800-1899",
        "1800–1899",
        "A round, deep wooden vessel. The base is flat, and one side has a small handle.",
        museumPhoto("/kuksa/utsjoki-1800-1899.jpg", 1200, 723, finna("siida.sda-29145"), siidaEn),
      ),
    ],
  },
  {
    id: "kittila",
    name: "Kittilä",
    about: "A kuksa. The making place is Kittilä. The material is burl.",
    shots: [
      shot(
        "1800-1899",
        "1800–1899",
        "A deep kuksa. The round bowl has an even outer edge. The handle widens and has a round hole at the end.",
        museumPhoto("/kuksa/kittila-1800-1899.jpg", 1200, 750, finna("siida.sda-29458"), siidaEn),
      ),
    ],
  },
  {
    id: "enontekio",
    name: "Enontekiö",
    about: "Two kuksas. The making place is Enontekiö.",
    shots: [
      shot(
        "1900-1949",
        "1900–1949",
        "Hollowed from a rectangular piece of birch burl. It curves roundly toward a flat base. An ear carved from the same wood has a hole. A triangular burn mark on the outside was carved away, and the edges of that cut were smoothed wider, so pale wood shows.",
        museumPhoto("/kuksa/enontekio-1900-1949.jpg", 1200, 732, finna("siida.sda-29282"), siidaEn),
      ),
      shot(
        "1940-1944",
        "1940–1944",
        "The materials are burl and birch. The handle combines a ladle shaft and a cup ear. A flower with its stem is carved on the shaft. The front edge has a sharp spout. The outside is thinly lacquered.",
        museumPhoto("/kuksa/enontekio-1940-1944.jpg", 1200, 800, finna("siida.sda-28079"), siidaEn),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "A kuksa. The maker is Birit-Anni Lehtola (née Pieski). The making place is Inari.",
    shots: [
      shot(
        "1979",
        "1979",
        "A wooden burl cup. A horn piece is inlaid in the handle, and its edges and center are decorated. A braided sisna thong passes through a triangular hole at the end of the handle. The ends are tied together. The bowl is oval. The outer edge is sharper opposite the handle and otherwise even.",
        museumPhoto("/kuksa/inari-1979.jpg", 1000, 658, finna("siida.sda-24027"), siidaEn),
      ),
    ],
  },
  {
    id: "utsjoki-2007",
    name: "Utsjoki",
    about: "A kuksa. The making place is Utsjoki. The materials are wood, reindeer leather, and reindeer horn.",
    shots: [
      shot(
        "2007",
        "2007",
        "The outside is treated darker than the inside. The bowl is oval, and the base is round. The horn on the handle has a pictorial ornament in the center and a sun around a rivet at the base. The horn is fastened with iron rivets or nails. A sisna cord passes through a hole under the handle, and its ends are tied together.",
        museumPhoto("/kuksa/utsjoki-2007.jpg", 1000, 690, finna("siida.sda-24562"), siidaEn),
      ),
    ],
  },
];

export const cups: Record<"fi" | "en", StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/kuksa",
    otherHref: "/en/cup",
    title: "Kuksa",
    description:
      "Kuksia Utsjoelta, Kittilästä, Enontekiöltä ja Inarista. Vuosi ja paikka ovat Saamelaismuseo Siidan luettelosta.",
    heading: "Kuksa",
    places: placesFi,
  },
  en: {
    locale: "en",
    path: "/en/cup",
    otherHref: "/kuksa",
    title: "Cup",
    description:
      "Kuksa cups from Utsjoki, Kittilä, Enontekiö, and Inari. The year and the place are from the Sámi Museum Siida catalog.",
    heading: "Cup",
    places: placesEn,
  },
};
