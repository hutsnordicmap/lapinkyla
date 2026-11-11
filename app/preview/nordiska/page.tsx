import { AskPage } from "@/app/components/AskPage";

export const metadata = {
  title: "Nordiska museets bilder",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AskPage
      linkLabel="källa"
      title="Får lapinkyla.fi använda de här bilderna?"
      intro="Det räcker att svara med bokstäver, till exempel: A går, B går inte. Bilderna skulle ligga oförändrade på lapinkyla.fi. Under varje bild står fotografen och Nordiska museet."
      items={[
        {
          letter: "A",
          src: "/preview/nordiska/jokkmokk.webp",
          caption:
            "NM.0244945. Mansdräkt av renskinn från Sirkas, Jokkmokk. Till museet 1952. Foto: Elisabeth Eriksson.",
          href: "https://digitaltmuseum.se/011023750104/drakt",
        },
        {
          letter: "B",
          src: "/preview/nordiska/jukkasjarvi.webp",
          caption:
            "NM.0231760. Kolt från Talma, Jukkasjärvi. Till museet 1945. Foto: Mona-Lisa Djerf.",
          href: "https://digitaltmuseum.se/011023736537/kolt",
        },
      ]}
    />
  );
}
