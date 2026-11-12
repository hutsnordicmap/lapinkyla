import { museumPhoto, shot, type StoryCopy } from "@/app/story";

const finna = (id: string) => `https://www.finna.fi/Record/${id}`;
const siidaFi = "Saamelaismuseo Siida";
const siidaEn = "Sámi Museum Siida";

const placesFi: StoryCopy["places"] = [
  {
    id: "oulu",
    name: "Oulu",
    about: "Hopeinen risku. Valmistuspaikka on Oulu.",
    shots: [
      shot(
        "1863",
        "1863",
        "Kuudesta silmukasta viidessä on jäljellä vinoneliön muotoinen, pistelyöttein koristettu laukkanen.",
        museumPhoto("/risku/oulu-1863.jpg", 1200, 902, finna("siida.sda-26356"), siidaFi),
      ),
    ],
  },
  {
    id: "kemi",
    name: "Kemi",
    about: "Risku. Valmistuspaikka on Kemi. Runko on uushopeaa.",
    shots: [
      shot(
        "1909",
        "1909",
        "Koristeena on riippunut kuusi pyöreää hopealevyä. Yksi on jäljellä.",
        museumPhoto("/risku/kemi-1909.jpg", 1200, 1062, finna("siida.sda-29227"), siidaFi),
      ),
    ],
  },
  {
    id: "kiiruna",
    name: "Kiiruna",
    about: "Naisen rengassolki. Valmistuspaikka on Kiiruna.",
    shots: [
      shot(
        "1988",
        "1988",
        "Aineisiin kuuluu hopea.",
        museumPhoto("/risku/kiiruna-1988.jpg", 640, 435, finna("siida.sda-28269"), siidaFi),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "Hopeinen risku. Valmistuspaikka on Inari.",
    shots: [
      shot(
        "1993",
        "1993",
        "Kahdeksan kullattua laukkasta. Keskellä on sahalaitakuvioinen hopealista.",
        museumPhoto("/risku/inari-1993.jpg", 1200, 822, finna("siida.sda-28306"), siidaFi),
      ),
    ],
  },
  {
    id: "karasjok",
    name: "Karasjok",
    about: "Rengassolki. Valmistaja on Sápmi-senter. Valmistuspaikka on Karasjok.",
    shots: [
      shot(
        "1996",
        "1996",
        "Aineisiin kuuluu hopea. Luettelo kuvaa ulompien lehdyköiden rubiininpunaista hohtolasia.",
        museumPhoto("/risku/karasjok-1996.jpg", 640, 424, finna("siida.sda-28323"), siidaFi),
      ),
    ],
  },
  {
    id: "kautokeino",
    name: "Kautokeino",
    about: "Risku. Valmistuspaikka on Kautokeino / Guovdageaidnu.",
    shots: [
      shot(
        "2005",
        "2005",
        "Hopeaa, ja kullatut laukkaset kahdessa kehässä. Kummassakin kehässä on 16 laukkasta.",
        museumPhoto("/risku/kautokeino-2005.jpg", 1059, 1080, finna("siida.sda-24815"), siidaFi),
      ),
    ],
  },
  {
    id: "varangerbotn",
    name: "Varangerbotn",
    about: "Hopealevystä tehty risku. Valmistaja on Anu Forselius. Valmistuspaikka on Varangerbotn.",
    shots: [
      shot(
        "2005b",
        "2005",
        "Kahdeksan laukkasta. Keskiosaan on sahattu neljä sydämenmuotoista reikää.",
        museumPhoto("/risku/varangerbotn-2005.jpg", 1200, 1188, finna("siida.sda-24066"), siidaFi),
      ),
    ],
  },
];

const placesEn: StoryCopy["places"] = [
  {
    id: "oulu",
    name: "Oulu",
    about: "A silver brooch. The making place is Oulu.",
    shots: [
      shot(
        "1863",
        "1863",
        "Of six loops, five still have a diamond-shaped boss decorated with dot work.",
        museumPhoto("/risku/oulu-1863.jpg", 1200, 902, finna("siida.sda-26356"), siidaEn),
      ),
    ],
  },
  {
    id: "kemi",
    name: "Kemi",
    about: "A brooch. The making place is Kemi. The body is nickel silver.",
    shots: [
      shot(
        "1909",
        "1909",
        "Six round silver discs hung on it. One remains.",
        museumPhoto("/risku/kemi-1909.jpg", 1200, 1062, finna("siida.sda-29227"), siidaEn),
      ),
    ],
  },
  {
    id: "kiiruna",
    name: "Kiruna",
    about: "A woman’s ring brooch. The making place is Kiiruna.",
    shots: [
      shot(
        "1988",
        "1988",
        "The materials include silver.",
        museumPhoto("/risku/kiiruna-1988.jpg", 640, 435, finna("siida.sda-28269"), siidaEn),
      ),
    ],
  },
  {
    id: "inari",
    name: "Inari",
    about: "A silver brooch. The making place is Inari.",
    shots: [
      shot(
        "1993",
        "1993",
        "Eight gilded bosses. A serrated silver strip runs across the center.",
        museumPhoto("/risku/inari-1993.jpg", 1200, 822, finna("siida.sda-28306"), siidaEn),
      ),
    ],
  },
  {
    id: "karasjok",
    name: "Karasjok",
    about: "A ring brooch. The maker is Sápmi-senter. The making place is Karasjok.",
    shots: [
      shot(
        "1996",
        "1996",
        "The materials include silver. The catalog describes ruby-red glass in the outer bosses.",
        museumPhoto("/risku/karasjok-1996.jpg", 640, 424, finna("siida.sda-28323"), siidaEn),
      ),
    ],
  },
  {
    id: "kautokeino",
    name: "Kautokeino",
    about: "A brooch. The making place is Kautokeino / Guovdageaidnu.",
    shots: [
      shot(
        "2005",
        "2005",
        "Silver, with gilded bosses in two rings. Each ring has 16 bosses.",
        museumPhoto("/risku/kautokeino-2005.jpg", 1059, 1080, finna("siida.sda-24815"), siidaEn),
      ),
    ],
  },
  {
    id: "varangerbotn",
    name: "Varangerbotn",
    about: "A brooch made from a sheet of silver. The maker is Anu Forselius. The making place is Varangerbotn.",
    shots: [
      shot(
        "2005b",
        "2005",
        "Eight bosses. Four heart-shaped holes are sawn in the center.",
        museumPhoto("/risku/varangerbotn-2005.jpg", 1200, 1188, finna("siida.sda-24066"), siidaEn),
      ),
    ],
  },
];

export const brooches: Record<"fi" | "en", StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/risku",
    otherHref: "/en/brooch",
    title: "Risku",
    description:
      "Riskuja Oulusta, Kemistä, Kiirunasta, Inarista, Karasjoelta, Kautokeinosta ja Varangerbotnista. Vuosi ja paikka ovat Saamelaismuseo Siidan luettelosta.",
    heading: "Risku",
    places: placesFi,
  },
  en: {
    locale: "en",
    path: "/en/brooch",
    otherHref: "/risku",
    title: "Brooch",
    description:
      "Brooches from Oulu, Kemi, Kiruna, Inari, Karasjok, Kautokeino, and Varangerbotn. The year and the place are from the Sámi Museum Siida catalog.",
    heading: "Brooch",
    places: placesEn,
  },
};
