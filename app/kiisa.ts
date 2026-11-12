import { museumPhoto, shot, type StoryCopy } from "@/app/story";

const finna = (id: string) => `https://www.finna.fi/Record/${id}`;
const siidaFi = "Saamelaismuseo Siida";
const siidaEn = "Sámi Museum Siida";

const placesFi: StoryCopy["places"] = [
  {
    id: "karesuando",
    name: "Karesuando",
    about: "Kaksi kiisaa. Molemmat on tehty vakkatekniikalla.",
    shots: [
      shot(
        "1810",
        "1810",
        "Morsiuskiisa. Valmistuspaikat ovat Karesuando ja Enontekiö. Aineina ovat mänty ja koivu. Soikea ja kuperakantinen, koristeltu puukaiverruksin. Ulkopinta ja sisäpohja on kuultomaalattu punertavaksi. Kyljen keskellä on vihertävän musta vaakaraita, samoin kannen päällä reunassa ja kapeasti laidan ala- ja yläreunoissa. Kannen sisäpuolella on merkintöjä.",
        museumPhoto("/kiisa/karesuando-1810.jpg", 1200, 750, finna("siida.sda-29255"), siidaFi),
      ),
      shot(
        "1850",
        "1850",
        "Pieni kiisa. Valmistuspaikka on Karesuando. Pohja ja kansi ovat mäntyä. Soikea kuperakantinen puurasia. Kansi ja pohjaosan laidat on koristeltu puukaiverruksin. Käsitelty punertavaksi. Luettelo sanoo, että kannen laidan vitsas on luultavasti uusittu käytön aikana.",
        museumPhoto("/kiisa/karesuando-1850.jpg", 1200, 800, finna("siida.sda-29253"), siidaFi),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "Kiisa. Valmistuspaikka on Inari. Aine on puuta.",
    shots: [
      shot(
        "1998",
        "1998",
        "Kuperakantinen kiisa. Soikea alaosa on taivutettu laudasta, ja laudan päät menevät takana päällekkäin. Kansi on sisältä koverrettu kulhomaiseksi. Kiisaan kuuluu avain, joka on poronnahkaisessa nyörilenkissä. Pinta on hionnan jälkeen vahattu.",
        museumPhoto("/kiisa/inari-1998.jpg", 637, 436, finna("siida.sda-28331"), siidaFi),
      ),
    ],
  },
];

const placesEn: StoryCopy["places"] = [
  {
    id: "karesuando",
    name: "Karesuando",
    about: "Two kiisa chests. Both are made in the bentwood technique.",
    shots: [
      shot(
        "1810",
        "1810",
        "A bridal kiisa. The making places are Karesuando and Enontekiö. The materials are pine and birch. Oval, with a domed lid, decorated with wood carving. The outside and the inner base are translucent-painted reddish. A greenish-black horizontal band runs across the middle of the side, along the edge on top of the lid, and narrowly along the lower and upper edges of the side. The inside of the lid has markings.",
        museumPhoto("/kiisa/karesuando-1810.jpg", 1200, 750, finna("siida.sda-29255"), siidaEn),
      ),
      shot(
        "1850",
        "1850",
        "A small kiisa. The making place is Karesuando. The bottom and the lid are pine. An oval wooden box with a domed lid. The lid and the sides of the base are decorated with wood carving. It is treated reddish. The catalog says the withe on the lid’s side was probably renewed during use.",
        museumPhoto("/kiisa/karesuando-1850.jpg", 1200, 800, finna("siida.sda-29253"), siidaEn),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "A kiisa. The making place is Inari. The material is wood.",
    shots: [
      shot(
        "1998",
        "1998",
        "A kiisa with a domed lid. The oval lower part is bent from a board, and the ends of the board overlap at the back. The lid is hollowed bowl-shaped on the inside. A key belongs with it, on a reindeer-leather cord. The surface was waxed after sanding.",
        museumPhoto("/kiisa/inari-1998.jpg", 637, 436, finna("siida.sda-28331"), siidaEn),
      ),
    ],
  },
];

export const chests: Record<"fi" | "en", StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/kiisa",
    otherHref: "/en/chest",
    title: "Kiisa",
    description:
      "Kiisoja Karesuandosta, Enontekiöltä ja Inarista. Vuosi ja paikka ovat Saamelaismuseo Siidan luettelosta.",
    heading: "Kiisa",
    places: placesFi,
  },
  en: {
    locale: "en",
    path: "/en/chest",
    otherHref: "/kiisa",
    title: "Chest",
    description:
      "Kiisa chests from Karesuando, Enontekiö, and Inari. The year and the place are from the Sámi Museum Siida catalog.",
    heading: "Chest",
    places: placesEn,
  },
};
