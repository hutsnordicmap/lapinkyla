import type { Locale } from "@/app/content";
import type { StoryCopy, StoryPlace, StoryShot } from "@/app/story";

export type { StoryCopy, StoryPlace, StoryShot } from "@/app/story";

const schefferus = {
  src: "/puku/schefferus-1674.jpg",
  width: 706,
  height: 1119,
  kind: "drawing" as const,
  href: "https://commons.wikimedia.org/wiki/File:The_History_of_Lapland_Wherein_Are_shewed_the_Original,_Manners,_Habits,_Marriages,_Conjurations,_etc._of_that_people._Written_by_John_Scheffer_(IA_SchefferHistoryofLaplandOxford1674Nbo).pdf",
  credit: "Johannes Schefferus",
  licence: "pdm" as const,
  licenceLabel: "Public domain",
};

const kautokeino = {
  src: "/puku/kautokeino.jpg",
  width: 997,
  height: 1270,
  kind: "photo" as const,
  href: "https://digitaltmuseum.no/011023295807/kofte",
  credit: "Anne-Lise Reinsfelt, Norsk Folkemuseum",
  licence: "by-sa-4" as const,
  licenceLabel: "CC BY-SA 4.0",
};

const karasjok = {
  src: "/puku/karasjok.jpg",
  width: 973,
  height: 1402,
  kind: "photo" as const,
  href: "https://digitaltmuseum.no/011023296616/kofte",
  credit: "Anne-Lise Reinsfelt, Norsk Folkemuseum",
  licence: "by-sa-4" as const,
  licenceLabel: "CC BY-SA 4.0",
};

const nervei = {
  src: "/puku/nervei.jpg",
  width: 2668,
  height: 4000,
  kind: "photo" as const,
  href: "https://digitaltmuseum.no/011023293793/kofte",
  credit: "Stian Nybru, Norsk Folkemuseum",
  licence: "by-sa-4" as const,
  licenceLabel: "CC BY-SA 4.0",
};

const sorsele = {
  src: "/puku/sorsele.jpg",
  width: 313,
  height: 550,
  kind: "photo" as const,
  href: "https://samlingar.vbm.se/objects/c57-48078/",
  credit: "Västerbottens museum",
  licence: "by-4" as const,
  licenceLabel: "CC BY 4.0",
};

function ncnd(src: string, width: number, height: number, href: string, credit: string) {
  return {
    src,
    width,
    height,
    kind: "photo" as const,
    href,
    credit,
    licence: "by-nc-nd-4" as const,
    licenceLabel: "CC BY-NC-ND 4.0",
  };
}

const finna = (id: string) => `https://www.finna.fi/Record/${id}`;

function blanks(ask: string, ids: string[]): StoryShot[] {
  return ids.map((id) => ({ id, line: ask }));
}

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

const fiAsk = {
  siida: "Saamelaismuseo Siida",
  folkemuseum: "Norsk Folkemuseum",
  ajtte: "Ájtte",
  vbm: "Västerbottens museum",
  lovozero: "Lovozero museum",
};

const enAsk = {
  siida: "Sámi Museum Siida",
  folkemuseum: "Norsk Folkemuseum",
  ajtte: "Ájtte",
  vbm: "Västerbottens museum",
  lovozero: "Lovozero museum",
};

function finnishPlaces(): StoryPlace[] {
  const open = ["early", "garment", "now"];
  return [
    {
      id: "1674",
      name: "1674",
      about:
        "Piirros näyttää miehen, naisen lapsi komsassa ja lapsen. Schefferus kirjoittaa, että kesä- ja talvivaate olivat eri vaatteet ja että talvitakki tehtiin peurannahasta. Tämä ei ole yhden paikan puku. (Schefferus 1674)",
      shots: [
        photo(
          "plate",
          "1674",
          "Hupulliset takit. Mies, nainen lapsi komsassa ja lapsi.",
          schefferus,
        ),
      ],
    },
    {
      id: "enontekio",
      name: "Enontekiö",
      about:
        "Yksi viidestä Suomessa käytetystä saamenpuvusta. Ensyklopedia lukee sen samaan pohjoissaamen pukuun kuin Kautokeinon: naisilla hapsuhuivi, miehillä kaulaliina. Siidan kokoelmasta on miehen luhkka ja nutukkaat. Nutukkaiden luettelopaikka on Näkkälä. Nykyinen puku puuttuu yhä. (Saamelaiskäräjät; Ensyklopedia; Saamelaismuseo Siida)",
      shots: [
        photo("luhkka", "1900", "Miehen luhkka. Luettelon paikka on Enontekiö.", ncnd("/puku/enontekio-luhkka.jpg", 923, 1080, finna("siida.sda-29234"), "Saamelaismuseo Siida")),
        photo("shoes", "1953", "Nutukkaat. Luettelon paikka on Enontekiö, Näkkälä.", ncnd("/puku/enontekio-nutukkaat.jpg", 1200, 811, finna("siida.sda-29244"), "Saamelaismuseo Siida")),
        { id: "now", line: fiAsk.siida },
      ],
    },
    {
      id: "utsjoki",
      name: "Utsjoki",
      about:
        "Yksi viidestä puvusta. Siidan kokoelmasivu kertoo, että Utsjoella naisten karvasäärystimet vaihtuivat varhain neulottuihin. Siidan kokoelmasta on naisen verkalakki, luettelon malli Ohcejohka. (Saamelaiskäräjät; Siida)",
      shots: [
        photo("cap", "1930", "Naisen verkalakki. Luettelon malli on Ohcejohka.", ncnd("/puku/utsjoki-lakki.jpg", 651, 1080, finna("siida.sda-29318"), "Saamelaismuseo Siida")),
        { id: "now", line: fiAsk.siida },
      ],
    },
    {
      id: "inari",
      name: "Inari",
      about:
        "Pohja on musta tai tummansininen. Koristeissa on punaista, keltaista ja vihreää, suvun malli tai kantajan oma. Siida sanoo koristelun olevan samankaltainen kuin Vuotsossa. Kokoelmasta on naisen kesäpuku, jonka luettelo sanoo valmistetun Inarissa. (Siida, Anaras)",
      shots: [
        photo("dress", "", "Naisen kesäpuku. Luettelo sanoo valmistuspaikaksi Inarin.", ncnd("/puku/inari-kesapuku.jpg", 720, 1080, finna("siida.sda-21510"), "Saamelaismuseo Siida")),
      ],
    },
    {
      id: "vuotso",
      name: "Vuotso",
      about:
        "Yksi viidestä puvusta. Inarin pukusivu sanoo Inarin koristelun olevan samankaltainen kuin Vuotson. Siidan kokoelmasta on miehen talvipäähine, luettelon malli Vuohčču. (Saamelaiskäräjät; Siida)",
      shots: [
        photo("hat", "1991", "Miehen talvipäähine. Luettelon malli on Vuohčču.", ncnd("/puku/vuotso-paahine.jpg", 740, 1080, finna("siida.sda-28285"), "Saamelaismuseo Siida")),
      ],
    },
    {
      id: "kolttat",
      name: "Kolttat",
      about:
        "Kolttien pukuun kuuluvat sarafani ja paita. Naisen päähineestä näki, oliko hän naimisissa. Siidan kokoelmasta on lesken päähine ja miehen puku. (Siida)",
      shots: [
        photo("widow", "", "Kolttasaamelainen lesken päähine.", ncnd("/puku/koltta-leski.jpg", 900, 608, finna("siida.sda-24325"), "Saamelaismuseo Siida")),
        photo("man", "", "Kolttasaamelainen miehen puku.", ncnd("/puku/koltta-mies.jpg", 720, 1080, finna("siida.sda-31699"), "Saamelaismuseo Siida")),
      ],
    },
    {
      id: "kautokeino",
      name: "Kautokeino",
      about:
        "Pohjoissaamen puku, samaa ryhmää kuin Enontekiön. Naisilla hapsuhuivi, miehillä kaulaliina. (Ensyklopedia)",
      shots: [
        { id: "early", line: fiAsk.folkemuseum },
        photo(
          "garment",
          "1957",
          "Pojan gákti tummasta kankaasta. Punaiset raidat kaulassa, hihoissa ja helmassa, metallisoljet kaulassa. Ommeltu Kautokeinossa.",
          kautokeino,
        ),
        { id: "now", line: fiAsk.folkemuseum },
      ],
    },
    {
      id: "karasjok",
      name: "Karasjok",
      about:
        "Naisen gákti, pohjoissaamen puku. Tämä tehtiin Karasjoella ja sitä käytettiin Tenossa noin vuonna 1929.",
      shots: [
        { id: "early", line: fiAsk.folkemuseum },
        photo(
          "garment",
          "1929",
          "Tumma kangas, punainen kaula-aukko ja hihansuut, punainen helmareuna.",
          karasjok,
        ),
        { id: "now", line: fiAsk.folkemuseum },
      ],
    },
    {
      id: "nervei",
      name: "Nervei",
      about:
        "Nervei on Gamvikissa, Tanafjordenilla. Gákti ostettiin vuonna 1909, ja sitä sanottiin silloin hyvin vanhaksi.",
      shots: [
        { id: "early", line: fiAsk.folkemuseum },
        photo(
          "garment",
          "1909",
          "Tumma kangas, punaiset ja keltaiset raidat kaulassa ja helmassa.",
          nervei,
        ),
        { id: "now", line: fiAsk.folkemuseum },
      ],
    },
    {
      id: "jokkmokk",
      name: "Jokkmokk",
      about:
        "Nordiska museossa on miehen peurannahkapuku Sirkasista, Jokkmokista. Sen myi museolle Mattias Kuoljok 20. kesäkuuta 1952. Ájttessa on naisen nahkakolt, jonka esinekuvaa ei ole julkaistu. (Nordiska museet)",
      shots: [
        photo("hide", "1952", "Miehen peurannahkapuku Sirkasista. Museoon 1952.", ncnd("/puku/jokkmokk-nordiska.webp", 1200, 1045, "https://digitaltmuseum.se/011023750104/drakt", "Elisabeth Eriksson, Nordiska museet")),
        { id: "ajtte", line: fiAsk.ajtte },
      ],
    },
    {
      id: "jukkasjarvi",
      name: "Jukkasjärvi",
      about:
        "Nordiska museossa on villakoltta Talmasta, Jukkasjärveltä. Sen myi museolle Thomas Thuuri 30. lokakuuta 1945. (Nordiska museet)",
      shots: [
        photo("kolt", "1945", "Villakoltta Talmasta, Jukkasjärveltä. Museoon 1945.", ncnd("/puku/jukkasjarvi-nordiska.webp", 1175, 1200, "https://digitaltmuseum.se/011023736537/kolt", "Mona-Lisa Djerf, Nordiska museet")),
      ],
    },
    {
      id: "sorsele",
      name: "Sorsele",
      about:
        "Sorsele on Västerbottenissa. Puku on naisen verkapuku vaaleasta sarkasta. Se oli museon kokoelmassa jo ennen vuotta 1904.",
      shots: [
        { id: "early", line: fiAsk.vbm },
        photo(
          "garment",
          "1800-luku",
          "Vaalea sarka, punainen reuna kaula-aukossa, kudottu nauha helmassa.",
          sorsele,
        ),
        { id: "now", line: fiAsk.vbm },
      ],
    },
    {
      id: "lovozero",
      name: "Lovozero",
      about:
        "Luujärven museossa on Kuolan saamelaisten vaatteita. Kuvaa ei ole vielä saatu.",
      shots: blanks(fiAsk.lovozero, open),
    },
  ];
}

function englishPlaces(): StoryPlace[] {
  const open = ["early", "garment", "now"];
  return [
    {
      id: "1674",
      name: "1674",
      about:
        "The plate shows a man, a woman with a child in a cradle, and a child. Schefferus writes that summer and winter clothes were different garments, and that the winter coat was made of reindeer skin. This is not the dress of one place. (Schefferus 1674)",
      shots: [
        photo(
          "plate",
          "1674",
          "Hooded coats. A man, a woman with a child in a cradle, and a child.",
          schefferus,
        ),
      ],
    },
    {
      id: "enontekio",
      name: "Enontekiö",
      about:
        "One of the five main Sámi dresses in Finland. The encyclopaedia groups it with the Kautokeino dress, as a North Sámi costume: a fringed shawl for the women, a scarf for the men. From Siida’s collection: a man’s luhkka, and fur shoes. The catalog place of the shoes is Näkkälä. A current garment is still missing. (Sámi Parliament of Finland; Encyclopaedia; Sámi Museum Siida)",
      shots: [
        photo("luhkka", "1900", "A man’s luhkka. The catalog place is Enontekiö.", ncnd("/puku/enontekio-luhkka.jpg", 923, 1080, finna("siida.sda-29234"), "Sámi Museum Siida")),
        photo("shoes", "1953", "Fur shoes. The catalog place is Enontekiö, Näkkälä.", ncnd("/puku/enontekio-nutukkaat.jpg", 1200, 811, finna("siida.sda-29244"), "Sámi Museum Siida")),
        { id: "now", line: enAsk.siida },
      ],
    },
    {
      id: "utsjoki",
      name: "Utsjoki",
      about:
        "One of the five dresses. Siida’s collection page says that in Utsjoki, women’s fur gaiters were replaced early with knitted ones. From the collection: a woman’s cloth cap, catalog model Ohcejohka. (Sámi Parliament of Finland; Siida)",
      shots: [
        photo("cap", "1930", "A woman’s cloth cap. The catalog model is Ohcejohka.", ncnd("/puku/utsjoki-lakki.jpg", 651, 1080, finna("siida.sda-29318"), "Sámi Museum Siida")),
        { id: "now", line: enAsk.siida },
      ],
    },
    {
      id: "inari",
      name: "Inari",
      about:
        "The ground is black or dark blue. The decoration is red, yellow, and green, a family pattern or the wearer’s own. Siida says the decoration is similar to Vuotso. From the collection: a woman’s summer dress the catalog says was made in Inari. (Siida, Anaras)",
      shots: [
        photo("dress", "", "A woman’s summer dress. The catalog gives Inari as the place it was made.", ncnd("/puku/inari-kesapuku.jpg", 720, 1080, finna("siida.sda-21510"), "Sámi Museum Siida")),
      ],
    },
    {
      id: "vuotso",
      name: "Vuotso",
      about:
        "One of the five dresses. The Inari dress page says the Inari decoration is similar to Vuotso. From Siida’s collection: a man’s winter hat, catalog model Vuohčču. (Sámi Parliament of Finland; Siida)",
      shots: [
        photo("hat", "1991", "A man’s winter hat. The catalog model is Vuohčču.", ncnd("/puku/vuotso-paahine.jpg", 740, 1080, finna("siida.sda-28285"), "Sámi Museum Siida")),
      ],
    },
    {
      id: "skolt",
      name: "Skolt",
      about:
        "Skolt dress includes the sarafan and the shirt. A woman’s headgear showed whether she was married. From Siida’s collection: a widow’s headdress and a man’s dress. (Siida)",
      shots: [
        photo("widow", "", "A Skolt widow’s headdress.", ncnd("/puku/koltta-leski.jpg", 900, 608, finna("siida.sda-24325"), "Sámi Museum Siida")),
        photo("man", "", "A Skolt man’s dress.", ncnd("/puku/koltta-mies.jpg", 720, 1080, finna("siida.sda-31699"), "Sámi Museum Siida")),
      ],
    },
    {
      id: "kautokeino",
      name: "Kautokeino",
      about:
        "A North Sámi dress, grouped with Enontekiö. A fringed shawl for the women, a scarf for the men. (Encyclopaedia)",
      shots: [
        { id: "early", line: enAsk.folkemuseum },
        photo(
          "garment",
          "1957",
          "A boy’s gákti of dark cloth. Red bands at the neck, cuffs, and hem, and metal clasps at the neck. Sewn in Kautokeino.",
          kautokeino,
        ),
        { id: "now", line: enAsk.folkemuseum },
      ],
    },
    {
      id: "karasjok",
      name: "Karasjok",
      about:
        "A woman’s gákti, a North Sámi dress. This one was made in Karasjok and worn in Tana about 1929.",
      shots: [
        { id: "early", line: enAsk.folkemuseum },
        photo(
          "garment",
          "1929",
          "Dark cloth, a red neck opening and cuffs, and a red band at the hem.",
          karasjok,
        ),
        { id: "now", line: enAsk.folkemuseum },
      ],
    },
    {
      id: "nervei",
      name: "Nervei",
      about:
        "Nervei is in Gamvik, on the Tanafjord. The gákti was bought in 1909 and was already called very old.",
      shots: [
        { id: "early", line: enAsk.folkemuseum },
        photo(
          "garment",
          "1909",
          "Dark cloth, with red and yellow bands at the neck and the hem.",
          nervei,
        ),
        { id: "now", line: enAsk.folkemuseum },
      ],
    },
    {
      id: "jokkmokk",
      name: "Jokkmokk",
      about:
        "Nordiska museet holds a man’s reindeer-hide dress from Sirkas, Jokkmokk. Mattias Kuoljok sold it to the museum on 20 June 1952. Ájtte holds a woman’s hide kolt whose object photograph is not published. (Nordiska museet)",
      shots: [
        photo("hide", "1952", "A man’s reindeer-hide dress from Sirkas. Acquired in 1952.", ncnd("/puku/jokkmokk-nordiska.webp", 1200, 1045, "https://digitaltmuseum.se/011023750104/drakt", "Elisabeth Eriksson, Nordiska museet")),
        { id: "ajtte", line: enAsk.ajtte },
      ],
    },
    {
      id: "jukkasjarvi",
      name: "Jukkasjärvi",
      about:
        "Nordiska museet holds a wool kolt from Talma, Jukkasjärvi. Thomas Thuuri sold it to the museum on 30 October 1945. (Nordiska museet)",
      shots: [
        photo("kolt", "1945", "A wool kolt from Talma, Jukkasjärvi. Acquired in 1945.", ncnd("/puku/jukkasjarvi-nordiska.webp", 1175, 1200, "https://digitaltmuseum.se/011023736537/kolt", "Mona-Lisa Djerf, Nordiska museet")),
      ],
    },
    {
      id: "sorsele",
      name: "Sorsele",
      about:
        "Sorsele is in Västerbotten. This is a woman’s cloth kolt of light wadmal. It was already in the museum before 1904.",
      shots: [
        { id: "early", line: enAsk.vbm },
        photo(
          "garment",
          "1800s",
          "Light wadmal, a red edge at the neck, and a woven band at the hem.",
          sorsele,
        ),
        { id: "now", line: enAsk.vbm },
      ],
    },
    {
      id: "lovozero",
      name: "Lovozero",
      about:
        "The museum in Lovozero holds clothing of the Kola Sámi. No photograph has been given yet.",
      shots: blanks(enAsk.lovozero, open),
    },
  ];
}

export const dress: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/puku",
    otherHref: "/en/dress",
    title: "Saamenpuku",
    description:
      "Saamenpuku vuodesta ja paikasta toiseen: Enontekiö, Utsjoki, Inari, Vuotso, kolttat, Kautokeino, Karasjok, Nervei, Jokkmokk, Jukkasjärvi, Sorsele ja Lovozero.",
    heading: "Saamenpuku",
    places: finnishPlaces(),
  },
  en: {
    locale: "en",
    path: "/en/dress",
    otherHref: "/puku",
    title: "Sámi dress",
    description:
      "Sámi dress by year and place: Enontekiö, Utsjoki, Inari, Vuotso, Skolt, Kautokeino, Karasjok, Nervei, Jokkmokk, Jukkasjärvi, Sorsele, and Lovozero.",
    heading: "Sámi dress",
    places: englishPlaces(),
  },
};
