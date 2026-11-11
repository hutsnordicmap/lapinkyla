import type { PageCopy } from "@/app/content";
import { Frame } from "@/app/components/Frame";
import { JsonLd } from "@/app/components/JsonLd";
import { bookGroups, menuLabel, pictureNav, placeLinks } from "@/app/nav";

export function HomePage({ copy }: { copy: PageCopy }) {
  const tiles = pictureNav[copy.locale];
  const books = bookGroups[copy.locale];
  const places = placeLinks[copy.locale];
  const labels = menuLabel[copy.locale];

  return (
    <Frame locale={copy.locale} otherHref={copy.otherHref} wide>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: "Lapinkylä",
              url: "https://lapinkyla.fi/",
              description: copy.description,
              inLanguage: ["fi", "en"],
            },
            {
              "@type": "ItemList",
              name: copy.topicsHeading,
              itemListElement: copy.topics.map((topic, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: topic.title,
                url: `https://lapinkyla.fi${topic.href}`,
              })),
            },
          ],
        }}
      />

      <section className="grid items-center gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-sm tracking-[0.14em] text-muted uppercase">{copy.place}</p>
          <h1 className="font-serif text-5xl leading-none sm:text-6xl">{copy.heading}</h1>
          <p className="max-w-xl text-lg leading-8">{copy.intro}</p>
          <p className="max-w-xl text-sm leading-6 text-muted">{copy.history}</p>
        </div>
        <img
          src="/puku/schefferus-1674.jpg"
          alt={
            copy.locale === "fi"
              ? "Vuoden 1674 kirjan vaatepiirros: mies, nainen lapsi komsassa ja lapsi."
              : "The clothing plate from the book of 1674: a man, a woman with a child in a cradle, and a child."
          }
          width={706}
          height={1119}
          className="mx-auto h-auto max-h-[70vh] w-auto max-w-full"
        />
      </section>

      <section aria-labelledby="pictures-heading">
        <h2 id="pictures-heading" className="font-serif text-3xl">
          {labels.pictures}
        </h2>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {tiles.map((tile) => (
            <li key={tile.href}>
              <a href={tile.href} className="group relative block">
                <img src={tile.src} alt={tile.alt} width={tile.width} height={tile.height} className="h-auto w-full" />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-night/70 to-transparent md:bg-night/0 md:opacity-0 md:transition md:group-hover:bg-night/50 md:group-hover:opacity-100 md:group-focus-visible:bg-night/50 md:group-focus-visible:opacity-100">
                  <span className="p-4 font-serif text-3xl text-white">{tile.title}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-5 text-muted">
          {copy.locale === "fi" ? (
            <>
              Valokuvat: Saamelaismuseo Siida,{" "}
              <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fi" className="underline underline-offset-2">
                CC BY-NC-ND 4.0
              </a>
              , kokonaan ja muuttamatta. Sukset ovat vuoden 1674 kirjasta.
            </>
          ) : (
            <>
              Photographs: Sámi Museum Siida,{" "}
              <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en" className="underline underline-offset-2">
                CC BY-NC-ND 4.0
              </a>
              , whole and unchanged. The skis are from the book of 1674.
            </>
          )}
        </p>
      </section>

      <section aria-labelledby="book-heading">
        <h2 id="book-heading" className="font-serif text-3xl">
          {labels.book}
        </h2>
        <ul className="mt-5 grid gap-3 lg:grid-cols-3">
          {books.map((group) => (
            <li key={group.title} className="group relative">
              <img src={group.src} alt={group.alt} width={group.width} height={group.height} className="h-auto w-full" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-night/80 to-transparent p-5 text-white md:bg-night/0 md:opacity-0 md:transition md:group-hover:bg-night/55 md:group-hover:opacity-100 md:group-focus-within:bg-night/55 md:group-focus-within:opacity-100">
                <h3 className="font-serif text-3xl">{group.title}</h3>
                <ul className="mt-3 columns-2 gap-x-6">
                  {group.items.map((item) => (
                    <li key={item.href} className="mb-1 break-inside-avoid">
                      <a href={item.href} className="text-sm text-white/90 hover:text-white">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-5 text-muted">
          {copy.locale === "fi"
            ? "Kuvalaatat ovat Schefferuksen kirjasta The History of Lapland, Oxford 1674."
            : "The plates are from Schefferus, The History of Lapland, Oxford 1674."}
        </p>
      </section>

      <section aria-labelledby="place-heading">
        <h2 id="place-heading" className="font-serif text-3xl">
          {labels.place}
        </h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {places.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="group relative block">
                <img src={item.src ?? ""} alt={item.alt ?? ""} width={item.width} height={item.height} className="h-auto w-full" />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-night/70 to-transparent md:bg-night/0 md:opacity-0 md:transition md:group-hover:bg-night/50 md:group-hover:opacity-100 md:group-focus-visible:bg-night/50 md:group-focus-visible:opacity-100">
                  <span className="p-4 font-serif text-3xl text-white">{item.title}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-5 text-muted">
          {copy.locale === "fi" ? (
            <>
              Kartat: Ximfel1,{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fi" className="underline underline-offset-2">
                CC BY-SA 4.0
              </a>
              , muuttamatta. Sama piirros on sivulla Siida. Kota: Saamelaismuseo Siida, CC BY-NC-ND 4.0.
            </>
          ) : (
            <>
              Drawings: Ximfel1,{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" className="underline underline-offset-2">
                CC BY-SA 4.0
              </a>
              , unchanged. The same drawings are on the siida page. The kota: Sámi Museum Siida, CC BY-NC-ND 4.0.
            </>
          )}
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]" aria-labelledby="map-heading">
        <div>
          <h2 id="map-heading" className="font-serif text-3xl">
            {copy.mapHeading}
          </h2>
          <p className="mt-2 text-muted">{copy.mapIntro}</p>
          <iframe
            src={copy.embedSrc}
            title={copy.embedTitle}
            className="mt-4 h-80 w-full rounded-xl border border-line bg-white sm:h-[420px]"
            loading="lazy"
            allowFullScreen
          />
          <p className="mt-2 text-sm">
            {copy.mapCreditBefore}
            <a href={copy.mapCreditHref} className="font-semibold text-pine underline decoration-pine/40 underline-offset-4">
              Huts.fi
            </a>
          </p>
        </div>
        <div>
          <h2 id="around-heading" className="font-serif text-3xl">
            {copy.aroundHeading}
          </h2>
          <ul className="mt-4 space-y-3">
            {copy.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="block rounded-xl border border-line bg-white p-4 hover:border-pine">
                  <span className="font-semibold text-pine">{link.title}</span>
                  <span className="mt-1 block text-sm text-muted">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Frame>
  );
}
