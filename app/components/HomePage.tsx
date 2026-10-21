import type { PageCopy } from "@/app/content";

export function HomePage({ copy }: { copy: PageCopy }) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-8 sm:py-14">
      <header className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
        <a href={copy.path} className="font-serif text-xl text-ink">
          Lapinkylä
        </a>
        <nav aria-label={copy.languageName} className="flex gap-3 text-sm">
          <span aria-current="page" className="text-ink">
            {copy.currentLabel}
          </span>
          <a href={copy.otherHref} className="text-muted hover:text-ink">
            {copy.otherLabel}
          </a>
        </nav>
      </header>

      <main className="flex flex-col gap-10 py-10">
        <section className="flex flex-col gap-4">
          <p className="text-sm tracking-wide text-muted uppercase">
            {copy.place}
          </p>
          <h1 className="font-serif text-5xl leading-none text-ink sm:text-6xl">
            {copy.heading}
          </h1>
          <p className="max-w-xl text-lg leading-8 text-ink">{copy.intro}</p>
          <p className="max-w-xl leading-7 text-muted">{copy.history}</p>
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
                <a
                  href={link.href}
                  className="block py-4 hover:bg-white/40"
                >
                  <span className="font-semibold text-pine underline decoration-transparent underline-offset-4 hover:decoration-pine/40">
                    {link.title}
                  </span>
                  <span className="mt-1 block text-muted">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mt-auto border-t border-line pt-6 text-sm leading-6 text-muted">
        <p>
          {copy.footnoteBefore}
          <a
            href={copy.tripAdvisor}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="underline decoration-line underline-offset-4 hover:text-ink"
          >
            {copy.footnoteLink}
          </a>
          {copy.footnoteAfter}
        </p>
      </footer>
    </div>
  );
}
