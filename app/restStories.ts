import type { Locale } from "@/app/content";
import type { StoryCopy } from "@/app/story";

const trees: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/puut",
    otherHref: "/en/trees",
    title: "Puut",
    description:
      "Schefferus 1674 puista ja kasveista: kataja, hilla, väinönputki ja ruoho, jota pantiin kenkiin.",
    heading: "Puut",
    places: [
      {
        id: "wood",
        name: "Metsä",
        about:
          "Metsät ovat kirjan mukaan suuria, etenkin Norjaa kohti, mutta eivät tiheitä. Katajat kasvavat korkeiksi. Petäjän kuori, jota käytettiin suolan sijaan, on ruoan sivulla. Valkoinen maajäkälä, jolla poro elää talvella, on poron sivulla. Hienoa sammalta, joka pantiin vastasyntyneen alle, on lasten sivulla. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "plants",
        name: "Kasvit",
        about:
          "Hillaa kirja kutsuu ruotsalaisella nimellä Hiortron. Se kasvaa soilla, maata myöten, ja sitä syötiin lihan kanssa. Väinönputkea tämä luku kutsuu Lapin yrtiksi, Samigraes. Hautauksen sivulla sama kasvi on Fadno. Kukan, jota kirja kutsuu nimellä Calceolum Lapponicum, se sanoo kengän näköiseksi. Yksikään eläin ei maista sitä. Ruohoa, joka kasvaa laaksoissa tunturien lähellä, pantiin kenkiin ja lapasiin. Ketunpyynnin syöttiä ei selitetä. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/trees",
    otherHref: "/puut",
    title: "Trees",
    description:
      "Schefferus in 1674 on the trees and plants: juniper, cloudberries, angelica, and the grass put into shoes.",
    heading: "Trees",
    places: [
      {
        id: "wood",
        name: "The woods",
        about:
          "The woods, the book says, are large, especially toward Norway, but not thick. The junipers grow tall. The inner rind of the pine, used in place of salt, is on the food page. The white ground moss the reindeer live on in winter is on the reindeer page. The fine moss laid under a newborn is on the children page. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "plants",
        name: "The plants",
        about:
          "The cloudberry the book calls by the Swedish name Hiortron. It grows on marshes, along the ground, and it was eaten with meat. Angelica in this chapter is called the Lapland herb, Samigraes. On the burial page the same plant is Fadno. A flower the book calls Calceolum Lapponicum it says is shaped like a shoe. No animal will taste it. Grass that grows in the valleys near the fells was put into shoes and gloves. The bait for foxes is not set out. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const stones: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/kivet",
    otherHref: "/en/stones",
    title: "Kivet",
    description:
      "Schefferus 1674 kivistä ja jokien helmistä. Rannan kivi, jota kirja kutsuu nimellä Stoorjuncare, on uskonnon sivulla.",
    heading: "Kivet",
    places: [
      {
        id: "stone",
        name: "Kivet",
        about:
          "Kiviä on paljon, tuhkanvärisiä, ja kirja sanoo niitä liian koviksi muotoiltaviksi. Rannalta löytyy kiviä, jotka ovat eläimen näköisiä. Niitä pidetään suuressa arvossa, ja kirja antaa niille nimen Stoorjuncare. Palvonta on uskonnon sivulla. Kaivoksen luona, jota kirja kutsuu nimellä Junesuando, joella jota se kutsuu nimellä Torno, on keltaisia pyöreitä kiviä, puolikruunun kokoisia ja piikiven kovia. Hän piirtää ne. Kuvaa ei ole tässä. Magneettikivestä hän ei ole varma. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "crystal",
        name: "Kristalli ja helmet",
        about:
          "Bure mainitsee timantin, ametistin ja topaasin. Timantilla kirja tarkoittaa kirkasta kiveä, kristallia, kuusisivuista. Sitä käytettiin tuluksena, ja se antoi enemmän tulta kuin piikivi. Ametisti, jonka hän näki, oli kalpea. Topaasi hänen työhuoneessaan on keltaisen kristallin näköinen. Helmiä löytyy joista, ei merestä, ja simpukan kuoresta, ei osterista. Rheen nimeää miehen, John Peterson, joka sukelsi niitä ja joka tämän luvun mukaan löysi hopeakaivoksen paikasta, jota kirja kutsuu nimellä Nasafiæl. Metallien sivu kirjoittaa löytäjän ja paikan toisin. Molemmat jäävät niin kuin kirja ne painaa. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/stones",
    otherHref: "/kivet",
    title: "Stones",
    description:
      "Schefferus in 1674 on the stones and the river pearls. The shore stone he calls Stoorjuncare is on the religion page.",
    heading: "Stones",
    places: [
      {
        id: "stone",
        name: "The stones",
        about:
          "Stones are many, the colour of ash, and the book says they are too hard to shape. On the shores are stones in the shape of an animal. They are much esteemed, and the book gives them the name Stoorjuncare. The worship is on the religion page. Near a mine the book calls Junesuando, on the river it calls Torno, are yellow round stones, the size of a half crown and as hard as flint. He draws them. The drawing is not here. Of the loadstone he is not sure. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "crystal",
        name: "Crystal and pearls",
        about:
          "Bure mentions diamond, amethyst, and topaz. By diamond the book means a clear stone, crystal, with six sides. It was used as a flint, and it gave more fire than flint itself. An amethyst he saw was pale. A topaz in his study looks like a yellow crystal. Pearls are found in rivers, not in the sea, and in a mussel shell, not an oyster. Rheen names a man, John Peterson, who dived for them and who, in this chapter, found the silver mine at the place the book calls Nasafiæl. The metals page spells the finder and the place differently. Both stay as the book prints them. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const rivers: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/joet",
    otherHref: "/en/rivers",
    title: "Joet",
    description:
      "Schefferus 1674 joista. Viisi suurta jokea saa nimensä lapinmailta. Järvien luetteloa ei kopioida.",
    heading: "Joet",
    places: [
      {
        id: "rivers",
        name: "Joet",
        about:
          "Kirja nimeää huomatuimmiksi joiksi ne, joista lapinmaat on nimetty: Umeao, Pitheao, Luhleao, Torneao ja Kimeao. Ne alkavat Norjan vuorilta ja laskevat Pohjanlahteen. Koskissa ne eivät ole kuljettavia. Yhtä koskea Luulajan joella kirja kutsuu nimellä Niometsaski, jäniksen hyppy, koska joki kulkee kahden vuoren välissä niin kapeana, että jänis voisi hypätä yli. Pitempää koskien ja järvien luetteloa ei kopioida. Kirjoitusasut ovat kirjan omia. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "lakes",
        name: "Järvet",
        about:
          "Kemin luona kirja nimeää Enarefræskin. Tornæus sanoo, ettei kukaan asukas elänyt kyllin kauan kartoittaakseen sen saaria. Joissakin pienissä kalaisissa soissa on kirjan mukaan kaksi uomaa, ja niitä kutsutaan nimellä Suino, pyhä. Niiden likaamista pidettiin syntinä. Kirjan puhe hengestä jää pois. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/rivers",
    otherHref: "/joet",
    title: "Rivers",
    description:
      "Schefferus in 1674 on the rivers. Five great rivers take their names from the lappmarks. The list of lakes is not copied.",
    heading: "Rivers",
    places: [
      {
        id: "rivers",
        name: "The rivers",
        about:
          "The book names as the most noted rivers those from which the lappmarks are named: Umeao, Pitheao, Luhleao, Torneao, and Kimeao. They rise in the mountains of Norway and run into the Bothnian Sea. At the falls they are not navigable. One fall on the Lule river the book calls Niometsaski, a hare’s leap, because the river runs between two mountains so narrowly that a hare might leap over. The longer list of falls and lakes is not copied. The spellings are the book’s own. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "lakes",
        name: "The lakes",
        about:
          "Near Kemi the book names Enarefræsk. Tornæus says no inhabitant lived long enough to survey its islands. Some small marshes full of fish have, the book says, two channels, and they are called Suino, holy. Fouling them was counted a sin. The book’s talk of a spirit stays off this page. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const mountains: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/tunturit",
    otherHref: "/en/mountains",
    title: "Tunturit",
    description:
      "Schefferus 1674 vuorista. Ruotsalaiset kutsuvat niitä nimellä Fiæl ja lapinmaalaiset nimellä Tudderi. Nimiluetteloa ei kopioida.",
    heading: "Tunturit",
    places: [
      {
        id: "range",
        name: "Selänne",
        about:
          "Norjaa kohti vuoret ovat korkeat. Ruotsalaiset kutsuvat niitä nimellä Fiæl, lapinmaalaiset nimellä Tudderi. Huippu on aina lumen peitossa. Petrus Nevren sanoo vuoren, joka erottaa Norjan Lapista, alkavan nousta Zemptlandin tienoilta ja jatkuvan sata mailia pohjoiseen, niin kuin kirja laskee, lahteen, jota kirja kutsuu nimellä Titusfiord. Se on luonnon muuri Ruotsin ja Norjan välillä. Paljaat huiput, joita vuoden sivu kutsuu nimellä Doffrini, ovat siellä. Samuel Rheen luettelee pitkän rivin nimiä. Sitä ei kopioida. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "sand",
        name: "Hiekka ja puutarha",
        about:
          "Norjan vuorten lähellä hiekka leviää tuulessa kuin lumi. Lumen alla kulkija ei näe, mitä väistää, ja voi vajota. Pohjanlahden lähellä maa on puutarhalle suotuisampi. Siellä on kasvatettu kaalia, naurista, palsternakkaa ja retiisiä. Muualla kivi, kosteus ja hiekka tekevät maan toisenlaiseksi. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/mountains",
    otherHref: "/tunturit",
    title: "Mountains",
    description:
      "Schefferus in 1674 on the mountains. The Swedes call them Fiæl and the Laplanders Tudderi. The list of names is not copied.",
    heading: "Mountains",
    places: [
      {
        id: "range",
        name: "The range",
        about:
          "Toward Norway the mountains are high. The Swedes call them Fiæl, and the Laplanders Tudderi. The top is always under snow. Petrus Nevren says the mountain that separates Norway from Lappia begins to rise about Zemptland and continues a hundred miles north to a bay the book calls Titusfiord. It is a wall, by nature, between Sweden and Norway. The bare tops the year page calls Doffrini are there. Samuel Rheen gives a long row of names. It is not copied. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "sand",
        name: "Sand and gardens",
        about:
          "Near the mountains of Norway the sand is blown like snow. Under snow a traveller cannot see what to avoid, and may sink in. Near the Bothnian Sea the ground is kinder to a garden. Coleworts, turnips, parsnips, and radishes have been grown there. Elsewhere stone, wet, and sand make the ground otherwise. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

export const restStories = { trees, stones, rivers, mountains };
