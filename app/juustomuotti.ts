import { museumPhoto, shot, type StoryCopy } from "@/app/story";

const finna = (id: string) => `https://www.finna.fi/Record/${id}`;
const siidaFi = "Saamelaismuseo Siida";
const siidaEn = "Sámi Museum Siida";

const placesFi: StoryCopy["places"] = [
  {
    id: "utsjoki",
    name: "Utsjoki",
    about: "Kaksi esinettä. Valmistuspaikka on Utsjoki.",
    shots: [
      shot(
        "1800-1899",
        "1800–1899",
        "Juustomuotin kansi eli painin. Pyöreä, litteä ja koristekuvioitu. Aine on puuta.",
        museumPhoto("/juustomuotti/utsjoki-1800-1899.jpg", 1200, 779, finna("siida.sda-29338"), siidaFi),
      ),
      shot(
        "1900-1939",
        "1900–1939",
        "Pyöreä juustomuotti. Pohjalevy on yhtä puuta, ja laita on kiinnitetty puutapeilla. Laidan päät on liitetty lomittain ompeleilla ja myöhemmin tuettu naulatulla metallilevyllä. Pohjalevyn sisäpinta on koristeltu.",
        museumPhoto("/juustomuotti/utsjoki-1900-1939.jpg", 900, 511, finna("siida.sda-29337"), siidaFi),
      ),
    ],
  },
  {
    id: "muonio",
    name: "Muonio",
    about: "Kaksi juustomuottia.",
    shots: [
      shot(
        "1860-1870",
        "1860–1870",
        "Valmistuspaikka on Muonio. Pyöreä muotti. Pohjalevy on yhtä puuta. Ohut laita on ommeltu kiinni neljästä kohdasta jänne- tai kasvikuitunarulla, ja laidan päät on liitetty samalla narulla. Pohjalevyn sisäpinta on koristeuritettu ja koristeellisesti rei'itetty.",
        museumPhoto("/juustomuotti/muonio-1860-1870.jpg", 1200, 923, finna("siida.sda-29161"), siidaFi),
      ),
      shot(
        "1878",
        "1878",
        "Valmistuspaikat ovat Muonio ja Salmijärvi. Pyöreä muotti. Pohjalevy on yhtä puuta. Ohut laita on kiinnitetty vitsaksilla neljästä kohdasta, ja laidan päät on liitetty lomittain vitsaksella. Pohjalevyn sisäpinta on koristeltu ja koristeellisesti rei'itetty. Pohjaan on kaiverrettu nimikirjaimet.",
        museumPhoto("/juustomuotti/muonio-1878.jpg", 1200, 916, finna("siida.sda-29450"), siidaFi),
      ),
    ],
  },
];

const placesEn: StoryCopy["places"] = [
  {
    id: "utsjoki",
    name: "Utsjoki",
    about: "Two objects. The making place is Utsjoki.",
    shots: [
      shot(
        "1800-1899",
        "1800–1899",
        "The lid of a cheese mold, also called the press. Round, flat, and ornamented. The material is wood.",
        museumPhoto("/juustomuotti/utsjoki-1800-1899.jpg", 1200, 779, finna("siida.sda-29338"), siidaEn),
      ),
      shot(
        "1900-1939",
        "1900–1939",
        "A round cheese mold. The base is one piece of wood, and the side is fastened with wooden pegs. The ends overlap, are joined with stitches, and were later supported with a nailed metal plate. The inner surface of the base is decorated.",
        museumPhoto("/juustomuotti/utsjoki-1900-1939.jpg", 900, 511, finna("siida.sda-29337"), siidaEn),
      ),
    ],
  },
  {
    id: "muonio",
    name: "Muonio",
    about: "Two cheese molds.",
    shots: [
      shot(
        "1860-1870",
        "1860–1870",
        "The making place is Muonio. A round mold. The base is one piece of wood. A thin side is sewn on in four places with sinew or plant-fiber cord, and the ends are joined with the same cord. The inner surface is ornamentally grooved and ornamentally perforated.",
        museumPhoto("/juustomuotti/muonio-1860-1870.jpg", 1200, 923, finna("siida.sda-29161"), siidaEn),
      ),
      shot(
        "1878",
        "1878",
        "The making places are Muonio and Salmijärvi. A round mold. The base is one piece of wood. A thin side is fastened with withes in four places, and the ends overlap and are joined with a withe. The inner surface is decorated and ornamentally perforated. Initials are carved in the base.",
        museumPhoto("/juustomuotti/muonio-1878.jpg", 1200, 916, finna("siida.sda-29450"), siidaEn),
      ),
    ],
  },
];

export const cheeseMolds: Record<"fi" | "en", StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/juustomuotti",
    otherHref: "/en/cheese-mold",
    title: "Juustomuotti",
    description:
      "Juustomuotteja Utsjoelta ja Muoniosta. Vuosi ja paikka ovat Saamelaismuseo Siidan luettelosta.",
    heading: "Juustomuotti",
    places: placesFi,
  },
  en: {
    locale: "en",
    path: "/en/cheese-mold",
    otherHref: "/juustomuotti",
    title: "Cheese mold",
    description:
      "Cheese molds from Utsjoki and Muonio. The year and the place are from the Sámi Museum Siida catalog.",
    heading: "Cheese mold",
    places: placesEn,
  },
};
