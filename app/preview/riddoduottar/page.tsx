import { AskPage } from "@/app/components/AskPage";

export const metadata = {
  title: "RiddoDuottarMuseat",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <AskPage
      linkLabel="kilde"
      title="Kan lapinkyla.fi bruke dette bildet?"
      intro="Det holder å svare med bokstaven. Bildet skal ligge uendret på lapinkyla.fi. Under bildet står RiddoDuottarMuseat."
      items={[
        {
          letter: "A",
          src: "/preview/riddoduottar/suohpan.webp",
          caption: "GG0050. Suohpan, med čoarvegiella. Katalogens merknad er: ta kontakt med eieren.",
          href: "https://digitaltmuseum.no/021028031004/suohpan",
        },
      ]}
    />
  );
}
