import type { ReactNode } from "react";
import { chrome, type Locale } from "@/app/content";
import { bookGroups, menuLabel, pictureNav, placeLinks } from "@/app/nav";
import { SiteNav } from "@/app/components/SiteNav";

export async function Frame({
  locale,
  otherHref,
  wide = false,
  children,
}: {
  locale: Locale;
  otherHref: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const bar = chrome[locale];
  const labels = menuLabel[locale];
  const tiles = pictureNav[locale];
  const books = bookGroups[locale];
  const places = placeLinks[locale];

  return (
    <div className="flex min-h-full w-full flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-30 focus:bg-white focus:p-3 focus:text-ink"
      >
        {locale === "fi" ? "Siirry sisältöön" : "Skip to content"}
      </a>
      <SiteNav
        locale={locale}
        homeHref={bar.homeHref}
        currentLabel={bar.currentLabel}
        otherHref={otherHref}
        otherLabel={bar.otherLabel}
        languageName={bar.languageName}
      />

      <main
        id="content"
        className={`mx-auto flex w-full flex-col gap-14 px-5 py-10 ${wide ? "max-w-6xl" : "max-w-3xl"}`}
      >
        {children}
      </main>

      <footer className="mt-auto border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-10">
          <div>
            <h2 className="text-sm tracking-[0.14em] text-muted uppercase">{labels.pictures}</h2>
            <ul className="mt-4 grid grid-cols-4 gap-x-3 gap-y-4 sm:grid-cols-8">
              {tiles.map((tile) => (
                <li key={tile.href}>
                  <a href={tile.href} className="block text-center">
                    <img
                      src={tile.src}
                      alt=""
                      width={tile.width}
                      height={tile.height}
                      className="mx-auto h-16 w-full object-contain"
                    />
                    <span className="mt-1 block text-xs">{tile.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm tracking-[0.14em] text-muted uppercase">{labels.book}</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-3">
              {books.map((group) => (
                <div key={group.title}>
                  <div className="flex items-center gap-3">
                    <img
                      src={group.src}
                      alt=""
                      width={group.width}
                      height={group.height}
                      className="h-14 w-10 object-contain"
                    />
                    <h3 className="font-serif text-lg">{group.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-7">
                    {group.items.map((item, index) => (
                      <span key={item.href}>
                        {index > 0 ? <span className="text-muted"> · </span> : null}
                        <a href={item.href} className="hover:text-pine">
                          {item.title}
                        </a>
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm tracking-[0.14em] text-muted uppercase">{labels.place}</h2>
            <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {places.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="block">
                    <img
                      src={item.src}
                      alt=""
                      width={item.width}
                      height={item.height}
                      className="h-20 w-full object-contain"
                    />
                    <span className="mt-1 block text-sm">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto w-full max-w-6xl border-t border-line px-5 py-4 text-sm leading-6 text-muted">
          {bar.footnoteBefore}
          <a
            href={bar.tripAdvisor}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="underline underline-offset-4"
          >
            {bar.footnoteLink}
          </a>
          {bar.footnoteAfter}
        </p>
      </footer>
    </div>
  );
}
