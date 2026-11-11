import type { Locale } from "@/app/content";
import { museumPhoto, shot, type StoryCopy } from "@/app/story";

const tax: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/vero",
    otherHref: "/en/tax",
    title: "Vero",
    description:
      "Schefferus 1674: birkarlit, kolme käräjää, ja mitä Ruotsin kruunulle maksettiin poroina, kaloina ja nahkoina.",
    heading: "Vero",
    places: [
      {
        id: "birkarl",
        name: "Birkarlit",
        about:
          "Kirja sanoo, että lapinmaalaiset valitsivat ensin kuninkaan omistaan. Ruotsin kuningas Ladulaus, noin vuonna 1277, lupasi hallinnan sille, joka saisi heidät kruunun alle. Birkarlit, naapurit, ottivat tehtävän. Kirja kertoo Ericuksen ja Johannes Buren mukaan yhdestä birkarlista, jonka vaimo peitti lumeen Birkalan tielle. Mies laski viisitoista kulkijaa ja surmasi heidät yksi kerrallaan. Sen jälkeen muut alistuivat. Tämä on kirjan kertomus, ei tämän sivun päätös. Birkarlit tunnustivat riippuvansa Ruotsin kuninkaasta. Kustaa I otti heiltä hallinnan ja oli kirjan mukaan ensimmäinen kuningas, joka keräsi veron itse ja kokosi ihmiset talvella. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "courts",
        name: "Käräjät",
        about:
          "Kaarle IX käski 10. lokakuuta 1610 käskynhaltija Laurentius Laurentiita tuomitsemaan Uumajan, Piitimen ja Luulajan lapinmaata Ruotsin lain mukaan. Kirja laskee kolme käräjää: Ångermanlandin, sitten Uumajan, Piitimen ja Luulajan yhteiset, ja Tornion ja Kemin yhteiset. Tuomio annettiin kuninkaan nimissä käskynhaltijan suulla, tuomarin ja papin läsnä ollessa. Ne pidettiin markkinoiden aikaan, kirjan mukaan nykyisin tammikuussa ja helmikuussa. Alue, josta vero maksettiin, oli kirjan mukaan kruunun antama oikeus nauttia maata, ei tavara, joka jaettaisiin perillisille. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "tribute",
        name: "Vero",
        about:
          "Ensin nahoista maksoivat birkarlit, eivät lapinmaalaiset. Bure sanoo harmaata oravannahkaa, neljäkymmentä nipussa. Kustaa I:n sopimuksessa Luulaja ja Piitime maksoivat kahdeksan nippua, 360 nahkaa, ja kaksi näädännahkaa. Tornio saman. Vuonna 1528 määrä kaksinkertaistettiin. Vuonna 1602 Kaarle käski joka kymmenennen poron ja kymmenesosan kuivatusta kalasta. Vuonna 1606 seitsemästätoista ikävuodesta maksettiin kaksi hirvasta tai kolme vaadinta, kahdeksan naulaa kuivattua kalaa, joka kymmenes vasa ja joka kymmenes tynnyri kalaa. Kirjan aikana täysi vero oli kaksi patacoonia. Tätä veroa kirja kutsuu nimellä Skattadaler. Puolikas vero oli yksi patacoon. Nahkoina viisikymmentä oravaa, tai ketunnahka ja kenkäpari, tai kaksi naulaa kuivattua kalaa, vastasi yhtä patacoonia. Kirja sanoo, että suuri osa verosta annettiin papeille. Poro laskettiin kolmeksi taaleriksi, ja kymmenykset otettiin sadasta, ei jokaisesta perheestä. Kuljetuksesta annettiin vielä kenkäpari, jota kirja kutsuu nimellä Haxapalka. Tornion tunturien takaa kirja nimeää Koutokeine, Aujouara, Teno ja Utziocki. Ne maksoivat Tanskalle puolet Ruotsin verosta, kalastuksen ja laidun oikeudesta, ei alamaisuudesta. Kemin Enare maksoi saman Tanskalle ja kolmasosan Moskovalle. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/tax",
    otherHref: "/vero",
    title: "Tax",
    description:
      "Schefferus in 1674: the Birkarlar, three courts, and what was paid to the Swedish crown in reindeer, fish, and skins.",
    heading: "Tax",
    places: [
      {
        id: "birkarl",
        name: "The Birkarlar",
        about:
          "The book says the people first chose a king from among themselves. Ladulaus, king of Sweden, about the year 1277, promised the government to whoever would bring them under the crown. The Birkarlar, their neighbours, took it on. From Ericus and Johannes Bure the book tells of one Birkarl whose wife covered him with snow on the road from Birkala. He counted fifteen as they passed, and killed them one by one. After that the rest submitted. This is the book’s story, not a conclusion of this page. The Birkarlar acknowledged the king of Sweden. Gustavus I took the charge from them, and the book says he was the first king to take the tribute himself and to assemble the people in winter. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "courts",
        name: "The courts",
        about:
          "On 10 October 1610 Charles IX ordered the governor Laurentius Laurentii to govern the Ume, Pite, and Lule lappmarks by Swedish law. The book counts three courts: Ångermanland; Ume, Pite, and Lule together; and Torne and Kemi together. Sentence was given in the king’s name by the governor, with a judge and a priest present. They were held at the fair times, and the book says that was now January and February. The ground for which the tax was paid was, in the book, a grant from the crown to take the profits, not goods to be divided among the heirs. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "tribute",
        name: "The tribute",
        about:
          "At first the skins were paid by the Birkarlar, not by the Laplanders. Bure calls them grey squirrel skins, forty in a bundle. In the contract with Gustavus I, Lule and Pite paid eight bundles, 360 skins, and two marten skins. Torne paid the same. In 1528 the number was doubled. In 1602 Charles ordered every tenth reindeer and a tenth of the dried fish. In 1606, from the age of seventeen, the due was two bucks or three does, eight pounds of dried fish, every tenth fawn, and every tenth tun of fish. In the book’s own time a full tax was two patacoons, which the book calls a Skattadaler, and a half tax one. In skins, fifty squirrels, or a fox skin and a pair of shoes, or two pounds of dried fish, stood for one patacoon. The book says much of this tribute was allowed for the priests. A reindeer was counted at three dollars, and the tenths were taken from every hundred, not from each family. For the carriage they added a pair of shoes, which the book calls Haxapalka. Beyond the Torne mountains the book names Koutokeine, Aujouara, Teno, and Utziocki. They paid Denmark half the Swedish tax, for fishing and pasture, not as subjects. Enare in Kemi paid the same to Denmark, and a third to Muscovy. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const fairs: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/markkinat",
    otherHref: "/en/fairs",
    title: "Markkinat",
    description:
      "Schefferus 1674 markkinoista: vaihto, patacoon, nahat ja juusto, ja Kaarle IX:n sekä Kristiinan määräykset.",
    heading: "Markkinat",
    places: [
      {
        id: "exchange",
        name: "Vaihto",
        about:
          "Vanhemmasta kaupasta kirja kertoo kaksi selitystä. Paulus Jovius sanoo, että myyjä jätti tavaran ja ostaja jätti tilalle valkoisia nahkoja, koska ihmiset pelkäsivät vierasta. Toiset sanovat, ettei puhuttu, koska kieli ei ollut naapurien kieli. Rahaa ei ollut. Birkarlit maksoivat tavaralla. Kirjan aikana tunnettiin patacoon ja puolikas patacoon, kumpikin painon mukaan, kaksi unssia hopeaa. Muuta rahaa ei arvostettu. Rahaa tarvittiin lähinnä veroon. Naapureina kirja nimeää ruotsalaiset, norjalaiset, suomalaiset ja venäläiset. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "goods",
        name: "Tavara",
        about:
          "Samuel Rheen luettelee myytävän: porot ja niiden nahat, ketunnahat mustana, keltaisena, sinisenä ja valkoisena, saukko, ahma tai mäyrä, näätä, majava, orava, susi ja karhu, vaatteet, saappaat, kengät, lapaset, kuivattu hauki ja poronjuusto. Näillä ostettiin hopeaa, patacooneja, villaa ja pellavaa, kuparia, metallia jota kirja kutsuu nimellä alchymy, suolaa, viljaa, häränvuotia, tulikiveä, neuloja, veitsiä, viinaa ja tupakkaa. Tavallinen poro vastasi kahta patacoonia. Kesyn hirvaan nahka yhtä, kuohitun neljäsosaa, vaatimen puolta. Kettu yhtä, neljäkymmentä harmaata oravaa yhtä, näätä yhtä, kolme valkoista kettua yhtä. Karhu ja susi kahta. Vaate, jota kirja kutsuu nimellä Mudd, kolmea. Kyynärä kangasta vastasi yhtä patacoonia, kolme naulaa kuparia yhtä, tynnyri viljaa kahta ja puolta. Norjaan vietiin taljoja, poroja, juustoa ja linnunhöyheniä, ja sieltä tuotiin kupari- ja alchymy-astioita, kangasta sekä härkiä ja lehmiä. Rheen sanoo kauppiaita petollisiksi. Se on hänen sanansa. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "places",
        name: "Paikat",
        about:
          "Kaarle IX kielsi vuonna 1602 birkarleja kiertämästä nahkojen perässä. Nahat piti myydä käskynhaltijalle määrätyllä hinnalla. Hirvennahat otettiin vuonna 1610 kruunulle ilman maksua. Samana vuonna 1602 hän määräsi jokaiseen maakuntaan kahdet markkinat, talven ja kesän, kahdeksi tai kolmeksi viikoksi. Paikat hän jätti käskynhaltijoille. Kristiinan määräys vuodelta 1640 nimeää kahdet: Arfwisjerf tammikuussa ja Arieplog helmikuussa. Vero kannettiin samassa kokouksessa. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/fairs",
    otherHref: "/markkinat",
    title: "Fairs",
    description:
      "Schefferus in 1674 on the fairs: exchange, the patacoon, skins and cheese, and the orders of Charles IX and Christina.",
    heading: "Fairs",
    places: [
      {
        id: "exchange",
        name: "Exchange",
        about:
          "Of the older trade the book gives two accounts. Paulus Jovius says the seller left the goods and the buyer left white skins in their place, because the people feared a stranger. Others say they used no words because the language was not their neighbours’ language. There was no money. The Birkarlar paid in goods. In the book’s own time the patacoon and the half patacoon were known, each by weight, two ounces of silver. Other coins were little valued. Money was wanted chiefly for the tax. The neighbours the book names are the Swedes, the Norwegians, the Finlanders, and the Russians. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "goods",
        name: "The goods",
        about:
          "Samuel Rheen lists what was sold: reindeer and their skins, fox skins black, yellow, blue, and white, otter, glutton or badger, marten, beaver, squirrel, wolf, and bear, garments, boots, shoes, gloves, dried pike, and reindeer cheese. With these they bought silver, patacoons, wool and linen, copper, a metal the book calls alchymy, salt, corn, bull hides, sulphur, needles, knives, brandy, and tobacco. An ordinary reindeer stood for two patacoons. The skin of a tame buck for one, of a castrated buck for a quarter, of a doe for a half. A fox for one, forty grey squirrels for one, a marten for one, three white foxes for one. A bear and a wolf for two. A garment the book calls a Mudd for three. An ell of cloth stood for one patacoon, three pounds of copper for one, a tun of corn for two and a half. To Norway they carried hides, reindeer, cheese, and birds’ feathers, and brought back copper and alchymy vessels, cloth, and bulls and cows. Rheen calls the dealers cheats. That is his word. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "places",
        name: "The places",
        about:
          "In 1602 Charles IX forbade the Birkarlar to go about the country for skins. The skins were to be sold to the governor at a set rate. In 1610 the elk skins were taken for the crown without payment. In that same edict of 1602 he ordered two fairs a year in every province, one in winter and one in summer, each to last two or three weeks. He left the places to the governors. An edict of Queen Christina in 1640 names two: Arfwisjerf in January, and Arieplog in February. The tax was taken at the same meeting. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const children: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/lapset",
    otherHref: "/en/children",
    title: "Lapset",
    description:
      "Schefferus 1674 lapsista: synnytys kodassa, jäniksen talja, komsio, ja poro, jonka kirja sanoo annetun lapselle.",
    heading: "Lapset",
    places: [
      {
        id: "birth",
        name: "Syntymä",
        about:
          "Kirja sanoo synnytyksen tapahtuneen kodassa, myös talvella, tuli keskellä. Lapsi pestiin ensin kylmällä vedellä tai lumella ja pantiin sitten kuumaan veteen kaulaa myöten. Päähän ei päästetty vettä ennen papin kastetta. Kääre oli jäniksen talja, ei pellavaa. Äidin ensimmäinen juoma synnytyksen jälkeen oli valaanrasvaa Norjasta. Hänen paikkansa oli oven vieressä, vasemmalla. Vuoteessa ei kirjan mukaan viivytty kauan. Viikon tai kahden päästä lähdettiin matkaan. Kaste oli usein vain talvella, kun pappi tuli. Kustaa Aadolf kirjoittaa vuonna 1634, että jos lapsi kuoli ennen talvea, hän jäi kastamatta, ja että jotkut kastettiin vasta vartuttuaan. Nimi otettiin suvusta. Rheen sanoo, että haluttiin nimiä Thor, Guaarm, Finne ja Pagge, ja että papit estivät. Nimi vaihdettiin myös kuolleen sukulaisen muistoksi. Kuun katsomisen kirja kertoo. Sitä ei selitetä tässä. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "cradle",
        name: "Komsio",
        about:
          "Äiti imetti kaksi, kolme tai neljä vuotta. Jos ei voinut, annettiin poronmaitoa lusikalla. Suuhun pantiin myös pala poronlihaa, jotta lapsi imi liemen. Komsio tehtiin koverretusta puusta, veneen muotoon, nahkakannella ja nahkakaarella pään päällä. Alle pantiin kesällä kuivattua punaista sammalta, ei liinavaatteita. Komsio riippui kodan katosta ja sitä heilutettiin. Helinänä olivat renkaat metallista, jota kirja kutsuu nimellä alchymy. Pojalle pantiin pieni jousi, nuolia ja poronsarvesta tehty keihäs. Tytölle valkoisen riekon siivet, jalat ja nokka. Riekon kirja nimeää Smæripa ja Lagopus. Olaus Magnuksen selässä kannettavat korit Schefferus hylkää piirtäjän keksintönä. Isä opetti pojat, äiti tyttäret. Ensimmäinen, joka näki hampaan, antoi vasikan. Sen karttuma jäi lapselle. Toista poroa kirja kutsuu nimellä Waddom, annettu. Jos vanhemmat kuolivat, lähin suku hoiti osuuden. Komsio on Siidan kokoelmasta. (Schefferus 1674; Saamelaismuseo Siida)",
        shots: [
          shot(
            "cradle",
            "",
            "Komsio.",
            museumPhoto(
              "/lapset/siida-komsio.jpg",
              1000,
              543,
              "https://www.finna.fi/Record/siida.sda-25755",
              "Saamelaismuseo Siida",
            ),
          ),
        ],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/children",
    otherHref: "/lapset",
    title: "Children",
    description:
      "Schefferus in 1674 on children: a birth in the hut, a hare skin, the cradle, and the reindeer the book says was given to a child.",
    heading: "Children",
    places: [
      {
        id: "birth",
        name: "Birth",
        about:
          "The book says the birth was in the hut, in winter as well, with the fire in the middle. The child was washed first in cold water or snow, and then set in hot water up to the neck. No water was let onto the head before the priest’s baptism. The wrapping was a hare skin, not linen. The mother’s first drink after the birth was whale fat from Norway. Her place was by the door, on the left. The book says they seldom kept their beds long. In a week or two they travelled. Baptism was often only in winter, when the priest came. Gustavus Adolphus writes in 1634 that if a child died before winter, the child died unbaptized, and that some were grown before they were baptized. The name was taken from kin. Rheen says the names wanted were Thor, Guaarm, Finne, and Pagge, and that the priests turned them from it. A name was also changed in memory of a dead kinsman. The book tells of looking at the moon. That is not set out here. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "cradle",
        name: "The cradle",
        about:
          "The mother nursed the child for two, three, or four years. If she could not, reindeer milk was given with a spoon. A piece of reindeer meat was also put in the mouth, so the child sucked the gravy. The cradle was a hollowed tree, like a boat, with a leather cover and a leather arch over the head. Under the child they laid red moss dried in summer, not linen. The cradle hung from the roof of the hut and was swung. The rattles were rings of a metal the book calls alchymy. For a boy they hung a small bow, arrows, and a spear of reindeer horn. For a girl, the wings, feet, and beak of a white partridge. The book names the bird Smæripa, and Lagopus. Schefferus rejects the back-baskets in Olaus Magnus as the painter’s fancy. The father taught the boys, the mother the girls. The first person to see a tooth gave a calf. Its increase stayed with the child. A second reindeer the book calls Waddom, the given one. If the parents died, the nearest kin kept the portion. The cradle is from Siida’s collection. (Schefferus 1674; Sámi Museum Siida)",
        shots: [
          shot(
            "cradle",
            "",
            "A cradle.",
            museumPhoto(
              "/lapset/siida-komsio.jpg",
              1000,
              543,
              "https://www.finna.fi/Record/siida.sda-25755",
              "Sámi Museum Siida",
            ),
          ),
        ],
      },
    ],
  },
};

const burial: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/hautaus",
    otherHref: "/en/burial",
    title: "Hautaus",
    description:
      "Schefferus 1674 hautaamisesta: kirkkomaa, pulkka haudalle, ja pidot kolmantena päivänä sen poron lihasta, joka veti vainajan.",
    heading: "Hautaus",
    places: [
      {
        id: "death",
        name: "Kuolema",
        about:
          "Kirja sanoo tautien olleen harvinaisia, ja ruton sammuneen kylmään. Tavallinen vaiva oli silmät, savu kodassa, ja vanhuus päättyi usein sokeuteen. Lisäksi keuhkokuume ja joskus isorokko. Lääkkeeksi kirja nimeää sammalen juuren, jota se kutsuu Jereh, ja väinönputken, Fadno, keitettynä poronheran kanssa. Haavaan pantiin pihkaa. Kylmettynyt jäsen voideltiin poronjuustolla. Rheen sanoo joidenkin eläneen yli sata vuotta, ja useimpien seitsemänkymmenen, kahdeksankymmenen ja yhdeksänkymmenen. Rummulla kysymisestä kirja kertoo toisaalla. Sitä ei toisteta tässä. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "grave",
        name: "Hauta",
        about:
          "Kun joku kuoli, kirja sanoo kodan jätetyn. Rikas käärittiin pellavaan, köyhä kuluneeseen villaan, pääkin peitettynä. Jotkut pantiin luolaan, jonka suu suljettiin kivillä. Väitteen, että ruumis haudattiin lieden alle, kirja hylkää. Haudalle pantiin kirves sekä piikivi ja teräs niiden mukaan, jotka eivät kirjan sanoin seuranneet kristillisiä menoja. Selitys on heidän omansa: valo ja tie metsän läpi, jos noustaan. Schefferus pitää tapaa vanhempana. Hautaa ei kaivettu mielellään. Köyhälle maksettiin, tai työhön saatiin ruotsalainen. Kirkkomaalla hauta oli kristillisin menoin. Suruasu oli huonoin vaate. Pulkka, jolla vainaja tuotiin, ja sairauden aikaiset vaatteet jätettiin haudalle. Pidot olivat kolmantena päivänä. Ruoka oli sen poron lihaa, joka oli vetänyt vainajan. Luut koottiin arkkuun ja haudattiin. Arkkuun kiinnitettiin puinen kuva vainajasta. Viinaa kirja kutsuu nimellä Saligawiin, autuaan viini. Varakkaammat toistivat pidot joka vuosi. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/burial",
    otherHref: "/hautaus",
    title: "Burial",
    description:
      "Schefferus in 1674 on burial: the churchyard, the sledge left at the grave, and a feast on the third day from the reindeer that drew the dead.",
    heading: "Burial",
    places: [
      {
        id: "death",
        name: "Death",
        about:
          "The book says disease was rare, and that a plague lost its force in the cold. The ordinary trouble was the eyes, from the smoke in the hut, and old age often ended in blindness. Also a pleurisy, and sometimes the smallpox. For a medicine the book names the root of a moss, which it calls Jereh, and angelica, Fadno, boiled with reindeer whey. A wound was dressed with resin. A limb numbed by cold was anointed with reindeer cheese. Rheen says some lived above a hundred years, and that most reached seventy, eighty, and ninety. The book tells elsewhere of asking the drum. That is not repeated here. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "grave",
        name: "The grave",
        about:
          "When someone died, the book says the hut was left. A rich person was wrapped in linen, a poor one in worn wool, the head covered as well. Some were laid in a cave, and the mouth stopped with stones. The claim that the body was buried under the hearth the book rejects. A hatchet, and a flint and steel, were buried with those who, in the book’s words, were less observant of Christian rites. The reason given is their own: a light, and a way through the woods, if they rise. Schefferus takes the custom for an older one. A grave was not willingly dug. A poor man was paid, or a Swede was got to do it. At the churchyard the burial was by the Christian rite. The mourning clothes were the worst they had. The sledge that brought the dead, and the clothes of the sickness, were left at the grave. The feast was on the third day. The food was the flesh of the reindeer that had drawn the dead. The bones were gathered into a coffer and buried. A wooden image of the person was fastened to the coffer. The brandy the book calls Saligawiin, the wine of the blessed. Some of the richer sort repeated the feast every year. (Schefferus 1674)",
        shots: [],
      },
    ],
  },
};

const school: Record<Locale, StoryCopy> = {
  fi: {
    locale: "fi",
    path: "/koulu",
    otherHref: "/en/school",
    title: "Koulu",
    description:
      "Schefferus 1674 kouluista ja kirkoista: Kaarle IX:n kirkot, Kustaa Aadolfin kirjat, ja Lyksalan koulu vuonna 1631.",
    heading: "Koulu",
    places: [
      {
        id: "churches",
        name: "Kirkot",
        about:
          "Kustaa I kokosi ihmiset talvella verolle ja kuulemaan pappia. Kaarle IX rakennutti kirjan mukaan kirkon jokaiseen lapinmaahan omalla kustannuksellaan. Torniossa se nimeää Tenotekis ja Jukasjærff, toisen vuodelta 1600 ja toisen kolme vuotta myöhemmäksi. Kristiina määräsi vuonna 1640, hopeakaivoksen löydyttyä, neljä lisää. Kirja laskee kirkkoja kolmetoista, kahta palanutta lukuun ottamatta, ja sanoo niitä pidetyn kunnossa. Kirjoitusasut eivät pysy samoina samassakaan kappaleessa, joten koko luetteloa ei kopioida tähän. Luulajassa se nimeää Jochmoch ja Kemissä Enare. Yhden kirkon se kirjoittaa ensin Rounala ja sitten Kounala. Sen rakensivat kolme veljestä, ja ainekset tuotiin Norjasta poroilla. Tanskalaiset olivat polttaneet yhden, ja toinen paloi vahingossa. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "books",
        name: "Kirjat",
        about:
          "Koulut aloitti Kustaa Aadolf, kirjan mukaan Piitimessä ennen vuotta 1619. Niiden hoito annettiin Nicolaus Andreælle. Syy oli se, että ruotsinkielinen saarna ei tullut ymmärretyksi. Joskus saarnatuolin alla seisoi tulkki. Ennen tätä ei ollut kirjaa heidän kielellään. Ensimmäinen oli aapinen: kymmenen käskyä, uskontunnustus ja Isä meidän. Andreæ painatti myös messukirjan. Tukholmassa Ignatius Meurerin kirjapainossa sen nimi on Liber Cantionum quomodo sit celebranda Missa Sermone Lappico. Johannes Tornæus, Tornion pappi ja opettaja, käänsi ruotsista kirjan, jossa olivat Daavidin psalmit, Laulujen laulu, Sananlaskut ja Saarnaaja. Koululaisille annettiin ruoka ja vaatteet. Joitakin luettiin Uppsalassa, ja heistä tuli pappeja. Toinen koulu perustettiin Uumajan lapinmaahan, Lyksalan kirkon viereen. Kuninkaallinen kirje on päivätty vanhassa Stetinissä Pommerissa 20. kesäkuuta 1631. Koulun hoito jäi Joannes Skyttelle ja hänen suvulleen. Kuninkaallisessa kirjeessä nimi on John Skytt. Ylläpito tuli Uumajan kymmenyksistä, tavallisten maksujen jälkeen. Kruunu piti ylimmän valvonnan. Pappeja kirja laskee Uumajaan yhden, Piitimeen kolme ja Luulajaan yhden, enimmäkseen lapinmaalaisia tai kielen taitajia. Maa oli laaja ja asutus hajallaan. Aapinen puuttuu. Pyydämme sen Saamelaiskäräjiltä. (Schefferus 1674)",
        shots: [{ id: "ask", line: "Saamelaiskäräjät" }],
      },
    ],
  },
  en: {
    locale: "en",
    path: "/en/school",
    otherHref: "/koulu",
    title: "The school",
    description:
      "Schefferus in 1674 on the schools and the churches: the churches of Charles IX, the books of Gustavus Adolphus, and the school at Lyksala in 1631.",
    heading: "The school",
    places: [
      {
        id: "churches",
        name: "The churches",
        about:
          "Gustavus I assembled the people in winter to pay the tax and to hear a priest. Charles IX, the book says, had a church built in every lappmark, at his own charge. In Torne it names Tenotekis and Jukasjærff, one in 1600 and the other three years later. In 1640, after a silver mine was found, Christina ordered four more. The book counts thirteen churches, apart from two that had burnt, and says they were kept in repair. The spellings do not stay the same even inside that paragraph, so the whole list is not copied here. In Lule it names Jochmoch, and in Kemi, Enare. One church it spells first Rounala and then Kounala. Three brothers built it, and the materials were brought from Norway by reindeer. The book says the Danes burnt one, and that another burnt by accident. (Schefferus 1674)",
        shots: [],
      },
      {
        id: "books",
        name: "The books",
        about:
          "The schools were begun by Gustavus Adolphus, the book says at Pite, before 1619. They were put in the charge of Nicolaus Andreæ. The reason was that a sermon in Swedish was not understood. Sometimes an interpreter stood under the pulpit. Before this there was no book in their language. The first was a primer: the ten commandments, the creed, and the Lord’s prayer. Andreæ also had a service book printed. At Stockholm, by Ignatius Meurer, its title is Liber Cantionum quomodo sit celebranda Missa Sermone Lappico. Johannes Tornæus, minister and schoolmaster at Torne, translated a book from Swedish with the Psalms, the Song of Solomon, Proverbs, and Ecclesiastes. The scholars were given food and clothes. Some studied at Uppsala, and were made priests. A second school was set up in the Ume lappmark, by the church at Lyksala. The royal letter is dated at old Stetin in Pomerland, 20 June 1631. The care of the school was given to Joannes Skytte, whom the letter spells John Skytt, and to his family. Its keep was the tithe of Ume, after the ordinary payments. The crown kept the last oversight. The book counts one priest in Ume, three in Pite, and one in Lule, mostly Laplanders, or speakers of the language. The country was large, and the people scattered. A primer is missing. We are asking the Sámi Parliament. (Schefferus 1674)",
        shots: [{ id: "ask", line: "Sámi Parliament of Finland" }],
      },
    ],
  },
};

export const moreStories = { tax, fairs, children, burial, school };
