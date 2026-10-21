import type { PageCopy } from "@/app/content";
import { Frame } from "@/app/components/Frame";

export function HomePage({ copy }: { copy: PageCopy }) {
  return (
    <Frame locale={copy.locale} otherHref={copy.otherHref}>
      <section className="flex flex-col gap-4">
        <p className="text-sm tracking-wide text-muted uppercase">{copy.place}</p>
        <h1 className="font-serif text-5xl leading-none text-ink sm:text-6xl">
          {copy.heading}
        </h1>
        <p className="max-w-xl text-lg leading-8 text-ink">{copy.intro}</p>
        <p className="max-w-xl leading-7 text-muted">{copy.history}</p>
      </section>

      <section aria-labelledby="topics-heading">
        <h2 id="topics-heading" className="font-serif text-2xl">
          {copy.topicsHeading}
        </h2>
        <ul className="mt-2 border-b border-line">
          {copy.topics.map((topic) => (
            <li key={topic.href} className="border-t border-line">
              <a href={topic.href} className="block py-4 hover:bg-white/40">
                <span className="font-semibold text-pine underline decoration-transparent underline-offset-4 hover:decoration-pine/40">
                  {topic.title}
                </span>
                <span className="mt-1 block text-muted">{topic.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3" aria-labelledby="map-heading">
        <h2 id="map-heading" className="font-serif text-2xl">
          {copy.mapHeading}
        </h2>
        <p className="text-muted">{copy.mapIntro}</p>
        <iframe
          src={copy.embedSrc}
          title={copy.embedTitle}
          className="h-80 w-full rounded-xl bg-white sm:h-[420px]"
          loading="lazy"
          allowFullScreen
        />
        <p className="text-right text-sm">
          {copy.mapCreditBefore}
          <a
            href={copy.mapCreditHref}
            className="font-semibold text-pine underline decoration-pine/40 underline-offset-4"
          >
            Huts.fi
          </a>
        </p>
      </section>

      <section aria-labelledby="around-heading">
        <h2 id="around-heading" className="font-serif text-2xl">
          {copy.aroundHeading}
        </h2>
        <ul className="mt-2 border-b border-line">
          {copy.links.map((link) => (
            <li key={link.href} className="border-t border-line">
              <a href={link.href} className="block py-4 hover:bg-white/40">
                <span className="font-semibold text-pine underline decoration-transparent underline-offset-4 hover:decoration-pine/40">
                  {link.title}
                </span>
                <span className="mt-1 block text-muted">{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Frame>
  );
}
