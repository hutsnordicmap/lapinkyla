import type { ArticleCopy } from "@/app/articles";
import { Frame } from "@/app/components/Frame";

export function ArticlePage({ copy }: { copy: ArticleCopy }) {
  return (
    <Frame locale={copy.locale} otherHref={copy.otherHref}>
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
                  className="block py-4 font-semibold text-pine underline decoration-transparent underline-offset-4 hover:decoration-pine/40"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </Frame>
  );
}
