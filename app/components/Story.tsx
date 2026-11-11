import type { StoryCopy, StoryShot } from "@/app/story";
import { Frame } from "@/app/components/Frame";
import { JsonLd } from "@/app/components/JsonLd";

function deed(licence: NonNullable<StoryShot["image"]>["licence"], locale: StoryCopy["locale"]) {
  if (licence === "pdm") return "https://creativecommons.org/publicdomain/mark/1.0/";
  const slug =
    licence === "by-sa-4" ? "by-sa" : licence === "by-nc-nd-4" ? "by-nc-nd" : "by";
  return `https://creativecommons.org/licenses/${slug}/4.0/deed.${locale === "fi" ? "fi" : "en"}`;
}

function Credit({ shot, locale }: { shot: StoryShot; locale: StoryCopy["locale"] }) {
  if (!shot.image) return null;
  const link = "underline decoration-line underline-offset-4 hover:text-ink";
  const image = shot.image;
  const who = (
    <a href={image.href} target="_blank" rel="noopener noreferrer" className={link}>
      {image.credit}
    </a>
  );
  const licence = (
    <a href={deed(image.licence, locale)} target="_blank" rel="noopener noreferrer" className={link}>
      {image.licenceLabel}
    </a>
  );
  if (locale === "fi") {
    const lead = image.kind === "drawing" ? "Piirros" : "Kuva";
    return (
      <>
        {lead}: {who}. Lisenssi: {licence}. Kuvaa ei ole muutettu.
      </>
    );
  }
  const lead = image.kind === "drawing" ? "Drawing" : "Photo";
  return (
    <>
      {lead}: {who}. Licence: {licence}. The image is unchanged.
    </>
  );
}

export function Story({ copy }: { copy: StoryCopy }) {
  const home = copy.locale === "fi" ? "Lapinkylä" : "Lapinkylä";
  const homeHref = copy.locale === "fi" ? "/" : "/en";
  const pageUrl = `https://lapinkyla.fi${copy.path}`;

  return (
    <Frame locale={copy.locale} otherHref={copy.otherHref} wide>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: home, item: `https://lapinkyla.fi${homeHref}` },
                { "@type": "ListItem", position: 2, name: copy.heading, item: pageUrl },
              ],
            },
            {
              "@type": "Article",
              headline: copy.heading,
              description: copy.description,
              inLanguage: copy.locale,
              mainEntityOfPage: pageUrl,
              author: { "@type": "Organization", name: "Lapinkylä", url: "https://lapinkyla.fi" },
              publisher: { "@type": "Organization", name: "Lapinkylä", url: "https://lapinkyla.fi" },
            },
          ],
        }}
      />
      <article className="flex flex-col gap-10">
        <header className="flex flex-col gap-6">
          <nav aria-label={copy.locale === "fi" ? "Polku" : "Breadcrumb"} className="text-sm text-muted">
            <a href={homeHref} className="underline decoration-line underline-offset-4 hover:text-ink">
              {home}
            </a>
            <span aria-hidden="true"> / </span>
            <span className="text-ink">{copy.heading}</span>
          </nav>
          <h1 className="font-serif text-5xl leading-none text-ink sm:text-6xl">{copy.heading}</h1>
          <nav aria-label={copy.heading} className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {copy.places.map((place) => (
              <a
                key={place.id}
                href={`#${place.id}`}
                className="text-pine underline decoration-pine/40 underline-offset-4"
              >
                {place.name}
              </a>
            ))}
          </nav>
        </header>

        {copy.places.map((place) => (
          <section key={place.id} id={place.id} className="flex flex-col gap-6" aria-labelledby={`${place.id}-title`}>
            <h2 id={`${place.id}-title`} className="font-serif text-2xl">
              {place.name}
            </h2>
            <p className="max-w-xl leading-7">{place.about}</p>
            {place.shots.map((shot) => (
              <figure key={shot.id} className="flex flex-col gap-2">
                {shot.image ? (
                  <img
                    src={shot.image.src}
                    alt={shot.image.alt}
                    width={shot.image.width}
                    height={shot.image.height}
                    className="h-auto max-w-full border border-line bg-white"
                  />
                ) : (
                  <div className="flex aspect-[4/5] items-start border border-line bg-white p-4">
                    <p className="text-sm text-muted">{shot.line}</p>
                  </div>
                )}
                {shot.image ? (
                  <figcaption className="max-w-xl text-sm leading-6 text-muted">
                    <span className="block text-ink">
                      {shot.year ? `${shot.year}. ` : null}
                      {shot.line}
                    </span>
                    <Credit shot={shot} locale={copy.locale} />
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </section>
        ))}
      </article>
    </Frame>
  );
}
