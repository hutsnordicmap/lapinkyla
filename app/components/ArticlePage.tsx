import type { ArticleCopy } from "@/app/articles";
import { Frame } from "@/app/components/Frame";

const artistHref = "https://commons.wikimedia.org/wiki/User:Ximfel1";

function licenceHref(locale: ArticleCopy["locale"]) {
  return locale === "fi"
    ? "https://creativecommons.org/licenses/by-sa/4.0/deed.fi"
    : "https://creativecommons.org/licenses/by-sa/4.0/deed.en";
}

function MapCredit({
  locale,
  fileHref,
  fileLabel,
}: {
  locale: ArticleCopy["locale"];
  fileHref: string;
  fileLabel: string;
}) {
  const link =
    "underline decoration-line underline-offset-4 hover:text-ink";
  const licence = (
    <a href={licenceHref(locale)} target="_blank" rel="noopener noreferrer" className={link}>
      CC BY-SA 4.0
    </a>
  );
  const artist = (
    <a href={artistHref} target="_blank" rel="noopener noreferrer" className={link}>
      Ximfel1
    </a>
  );
  const file = (
    <a href={fileHref} target="_blank" rel="noopener noreferrer" className={link}>
      {fileLabel}
    </a>
  );

  if (locale === "fi") {
    return (
      <>
        Piirros: {artist}. Tiedosto: {file}. Lisenssi: {licence}. Kuvaa ei ole muutettu.
      </>
    );
  }

  return (
    <>
      Drawing by {artist}. File: {file}. Licence: {licence}. The image is unchanged.
    </>
  );
}

export function ArticlePage({ copy }: { copy: ArticleCopy }) {
  const wide = copy.sections.some((section) => section.figures && section.figures.length > 0);

  return (
    <Frame locale={copy.locale} otherHref={copy.otherHref} wide={wide}>
      <article className="flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <p className="text-sm tracking-wide text-muted uppercase">{copy.kicker}</p>
          <h1 className="font-serif text-5xl leading-none text-ink sm:text-6xl">
            {copy.heading}
          </h1>
          <p className="max-w-xl text-lg leading-8">{copy.lede}</p>
        </header>

        {copy.sections.map((section) => (
          <section key={section.id} className="flex flex-col gap-3" aria-labelledby={section.id}>
            <h2 id={section.id} className="font-serif text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-xl leading-7">
                {paragraph}
              </p>
            ))}
            {section.figures?.map((figure) => (
              <figure key={figure.src} className="mt-2 flex flex-col gap-2">
                <img
                  src={figure.src}
                  alt={figure.alt}
                  width={1200}
                  height={734}
                  className="w-full border border-line bg-white"
                />
                <figcaption className="max-w-xl text-sm leading-6 text-muted">
                  <span className="block">{figure.caption}</span>
                  <MapCredit
                    locale={copy.locale}
                    fileHref={figure.fileHref}
                    fileLabel={figure.fileLabel}
                  />
                </figcaption>
              </figure>
            ))}
            {section.more ? (
              <a
                href={section.more.href}
                className="font-semibold text-pine underline decoration-pine/40 underline-offset-4"
              >
                {section.more.label}
              </a>
            ) : null}
          </section>
        ))}

        <section aria-labelledby="sources">
          <h2 id="sources" className="font-serif text-2xl">
            {copy.sourcesHeading}
          </h2>
          <ul className="mt-2 border-b border-line">
            {copy.sources.map((source) => (
              <li key={source.href} className="border-t border-line">
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-4"
                >
                  <span className="font-semibold text-pine underline decoration-transparent underline-offset-4 hover:decoration-pine/40">
                    {source.label}
                  </span>
                  {source.note ? (
                    <span className="mt-1 block font-normal text-muted">{source.note}</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Frame>
  );
}
