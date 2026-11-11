"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/app/content";
import { bookGroups, menuLabel, pictureNav, placeLinks, type LinkItem } from "@/app/nav";

type MenuId = "pictures" | "book" | "place";

const copy = {
  fi: { menu: "Valikko", close: "Sulje", back: "Takaisin" },
  en: { menu: "Menu", close: "Close", back: "Back" },
} as const;

export function SiteNav({
  locale,
  homeHref,
  currentLabel,
  otherHref,
  otherLabel,
  languageName,
}: {
  locale: Locale;
  homeHref: string;
  currentLabel: string;
  otherHref: string;
  otherLabel: string;
  languageName: string;
}) {
  const labels = menuLabel[locale];
  const words = copy[locale];
  const tiles = pictureNav[locale];
  const books = bookGroups[locale];
  const places = placeLinks[locale];
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<MenuId | null>(null);
  const [mobile, setMobile] = useState(false);
  const [panel, setPanel] = useState<MenuId | null>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
    };
    const onFocus = (event: FocusEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("focusin", onFocus);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("focusin", onFocus);
    };
  }, [open]);

  useEffect(() => {
    if (!mobile) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobile(false);
        setPanel(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobile]);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const close = () => {
      if (wide.matches) {
        setMobile(false);
        setPanel(null);
      }
    };
    wide.addEventListener("change", close);
    return () => wide.removeEventListener("change", close);
  }, []);

  function canHover() {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function show(id: MenuId) {
    if (canHover()) setOpen(id);
  }

  const items: { id: MenuId; label: string }[] = [
    { id: "pictures", label: labels.pictures },
    { id: "book", label: labels.book },
    { id: "place", label: labels.place },
  ];

  return (
    <header ref={headerRef} className="sticky top-0 z-20 border-b border-line bg-paper text-ink" onMouseLeave={() => setOpen(null)}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href={homeHref} className="font-serif text-2xl tracking-tight">
          Lapinkylä
        </a>
        <nav aria-label={locale === "fi" ? "Päävalikko" : "Main"} className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`rounded-md px-3 py-2 text-sm hover:bg-moss ${open === item.id ? "bg-moss" : ""}`}
              aria-expanded={open === item.id}
              aria-controls={menuId}
              onMouseEnter={() => show(item.id)}
              onFocus={() => show(item.id)}
              onClick={() => {
                if (canHover()) return;
                setOpen((current) => (current === item.id ? null : item.id));
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <nav aria-label={languageName} className="flex gap-3 text-sm">
            <span aria-current="page">{currentLabel}</span>
            <a href={otherHref} className="text-muted hover:text-ink">
              {otherLabel}
            </a>
          </nav>
          <button
            type="button"
            className="md:hidden"
            aria-label={words.menu}
            aria-expanded={mobile}
            onClick={() => {
              setPanel(null);
              setMobile(true);
            }}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open ? (
        <div id={menuId} className="absolute inset-x-0 top-full hidden border-t border-line bg-white text-ink shadow-xl md:block">
          <div className="mx-auto w-full max-w-6xl px-5 py-3">
            {open === "pictures" ? <PictureList tiles={tiles} /> : null}
            {open === "book" ? <BookColumns groups={books} /> : null}
            {open === "place" ? <PlaceList items={places} /> : null}
          </div>
        </div>
      ) : null}

      {mobile ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white text-ink md:hidden">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <a href={homeHref} className="font-serif text-2xl tracking-tight">
              Lapinkylä
            </a>
            <button type="button" aria-label={words.close} onClick={() => { setMobile(false); setPanel(null); }}>
              <CloseIcon />
            </button>
          </div>
          {panel ? (
            <div className="px-5 pb-10">
              <button type="button" className="py-3 text-sm text-pine" onClick={() => setPanel(null)}>
                ‹ {words.back}
              </button>
              <h2 className="py-3 text-base font-semibold">{items.find((item) => item.id === panel)?.label}</h2>
              {panel === "pictures" ? (
                <ul>
                  {tiles.map((tile) => (
                    <li key={tile.href} className="border-b border-line">
                      <a href={tile.href} className="flex items-center gap-4 py-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                          <img src={tile.src} alt="" width={tile.width} height={tile.height} className="max-h-10 max-w-10 object-contain" />
                        </span>
                        <span className="text-base text-ink/80">{tile.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
              {panel === "book" ? (
                <div>
                  {books.map((group) => (
                    <div key={group.title}>
                      <p className="pt-6 pb-1 text-sm font-semibold">{group.title}</p>
                      <ThumbList items={group.items} roomy />
                    </div>
                  ))}
                </div>
              ) : null}
              {panel === "place" ? <ThumbList items={places} roomy /> : null}
            </div>
          ) : (
            <ul className="px-5">
              {items.map((item) => (
                <li key={item.id} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-base font-semibold"
                    onClick={() => setPanel(item.id)}
                  >
                    {item.label}
                    <Chevron />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </header>
  );
}

function PictureList({ tiles }: { tiles: (typeof pictureNav)["fi"] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-10">
      {tiles.map((tile) => (
        <li key={tile.href} className="border-b border-line">
          <a href={tile.href} className="flex items-center gap-3 py-2.5 hover:text-pine">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center">
              <img src={tile.src} alt="" width={tile.width} height={tile.height} className="max-h-11 max-w-11 object-contain" />
            </span>
            <span className="text-sm">{tile.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function BookColumns({ groups }: { groups: { title: string; items: LinkItem[] }[] }) {
  return (
    <div className="grid grid-cols-3 gap-10 py-2">
      {groups.map((group) => (
        <div key={group.title}>
          <p className="text-xs font-semibold tracking-wide text-pine uppercase">{group.title}</p>
          <ThumbList items={group.items} />
        </div>
      ))}
    </div>
  );
}

function PlaceList({ items }: { items: LinkItem[] }) {
  return <ThumbList items={items} />;
}

function ThumbList({ items, roomy = false }: { items: LinkItem[]; roomy?: boolean }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.href} className="border-b border-line">
          <a href={item.href} className={`flex items-center hover:text-pine ${roomy ? "gap-4 py-4" : "gap-3 py-2"}`}>
            <span className={`flex shrink-0 items-center justify-center ${roomy ? "h-10 w-10" : "h-11 w-11"}`}>
              <img
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                className={roomy ? "max-h-10 max-w-10 object-contain" : "max-h-11 max-w-11 object-contain"}
              />
            </span>
            <span className={roomy ? "text-base text-ink/80" : "text-sm"}>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 text-muted" aria-hidden="true">
      <path d="M7 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
