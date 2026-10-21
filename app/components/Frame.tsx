import type { ReactNode } from "react";
import { chrome, type Locale } from "@/app/content";

export function Frame({
  locale,
  otherHref,
  children,
}: {
  locale: Locale;
  otherHref: string;
  children: ReactNode;
}) {
  const bar = chrome[locale];

  return (
    <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 py-8 sm:py-14">
      <header className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
        <a href={bar.homeHref} className="font-serif text-xl text-ink">
          Lapinkylä
        </a>
        <nav aria-label={bar.languageName} className="flex gap-3 text-sm">
          <span aria-current="page" className="text-ink">
            {bar.currentLabel}
          </span>
          <a href={otherHref} className="text-muted hover:text-ink">
            {bar.otherLabel}
          </a>
        </nav>
      </header>

      <main className="flex flex-col gap-10 py-10">{children}</main>

      <footer className="mt-auto border-t border-line pt-6 text-sm leading-6 text-muted">
        <p>
          {bar.footnoteBefore}
          <a
            href={bar.tripAdvisor}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="underline decoration-line underline-offset-4 hover:text-ink"
          >
            {bar.footnoteLink}
          </a>
          {bar.footnoteAfter}
        </p>
      </footer>
    </div>
  );
}
