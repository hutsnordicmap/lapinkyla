export type AskItem = {
  letter: string;
  src: string;
  caption: string;
  href: string;
};

export function AskPage({
  title,
  intro,
  items,
  note,
  linkLabel = "lähde",
}: {
  title: string;
  intro: string;
  items: AskItem[];
  note?: string;
  linkLabel?: string;
}) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="font-serif text-3xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed">{intro}</p>
      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <li key={item.letter} className="border border-line bg-white p-2">
            <img
              src={item.src}
              alt=""
              className="h-36 w-full object-contain"
            />
            <p className="mt-2 text-sm leading-snug">
              <span className="font-medium">{item.letter}.</span> {item.caption}
            </p>
            <a
              href={item.href}
              className="mt-1 inline-block text-sm text-pine underline decoration-pine/40 underline-offset-4"
            >
              {linkLabel}
            </a>
          </li>
        ))}
      </ul>
      {note ? <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">{note}</p> : null}
    </main>
  );
}
