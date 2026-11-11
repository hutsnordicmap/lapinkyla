import { AskPage } from "@/app/components/AskPage";

const finna = (id: string) => `https://www.finna.fi/Record/${id}`;
const file = (id: string) => `/preview/siida/${id}.jpg`;

export const metadata = {
  title: "Siidan kuvat",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AskPage
      title="Saako lapinkyla.fi käyttää näitä Siidan kuvia?"
      intro="Riittää vastata kirjaimilla, esimerkiksi: A–G käy, N ei. Kuvat tulisivat lapinkyla.fi:hin muuttamattomina. Kuvan alla lukisi kuvaaja ja Saamelaismuseo Siida."
      note="Seitakiveä ja valkoista riekkoa emme löytäneet luettelosta kuvana, joten niitä ei ole tällä sivulla. Kuvassa N näkyy ihmisiä. Jos joku heistä on tunnistettavissa, tarvitaan myös hänen lupansa."
      items={[
        {
          letter: "A",
          src: file("siida.sda-29234"),
          caption: "Enontekiö. Miehen luhkka.",
          href: finna("siida.sda-29234"),
        },
        {
          letter: "B",
          src: file("siida.sda-29244"),
          caption: "Enontekiö, Näkkälä. Nutukkaat.",
          href: finna("siida.sda-29244"),
        },
        {
          letter: "C",
          src: file("siida.sda-29318"),
          caption: "Utsjoki. Naisen verkalakki. Luettelon malli on Ohcejohka.",
          href: finna("siida.sda-29318"),
        },
        {
          letter: "D",
          src: file("siida.sda-21510"),
          caption: "Inari. Naisen kesäpuku. Luettelo sanoo valmistuspaikaksi Inarin.",
          href: finna("siida.sda-21510"),
        },
        {
          letter: "E",
          src: file("siida.sda-28285"),
          caption: "Vuotso. Miehen talvipäähine. Luettelon malli on Vuohčču.",
          href: finna("siida.sda-28285"),
        },
        {
          letter: "F",
          src: file("siida.sda-24325"),
          caption: "Kolttasaamelainen lesken päähine.",
          href: finna("siida.sda-24325"),
        },
        {
          letter: "G",
          src: file("siida.sda-31699"),
          caption: "Kolttasaamelainen miehen puku.",
          href: finna("siida.sda-31699"),
        },
        {
          letter: "H",
          src: file("siida.sda-25755"),
          caption: "Komsio.",
          href: finna("siida.sda-25755"),
        },
        {
          letter: "I",
          src: file("siida.sda-27583"),
          caption: "Tuohiastia.",
          href: finna("siida.sda-27583"),
        },
        {
          letter: "J",
          src: file("siida.sda-30687"),
          caption: "Kota. Valokuva vuodelta 1959.",
          href: finna("siida.sda-30687"),
        },
        {
          letter: "K",
          src: file("siida.sda-26934"),
          caption: "Nuoravene. Luettelo sanoo sen kolttalaiseksi.",
          href: finna("siida.sda-26934"),
        },
        {
          letter: "L",
          src: file("siida.sda-27325"),
          caption: "Verkko, tintasilmä.",
          href: finna("siida.sda-27325"),
        },
        {
          letter: "M",
          src: file("siida.sda-21716"),
          caption: "Naisen lapaset. Luettelon vuosi on 1979.",
          href: finna("siida.sda-21716"),
        },
        {
          letter: "N",
          src: file("siida.sda-31464"),
          caption: "Poroja Vanhapäällä, Inarissa. Valokuva vuodelta 2002. Kuvassa näkyy ihmisiä.",
          href: finna("siida.sda-31464"),
        },
      ]}
    />
  );
}
