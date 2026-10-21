export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-full w-full max-w-2xl flex-col gap-4 px-5 py-16">
      <p className="font-serif text-3xl">Sivua ei löydy</p>
      <p className="text-muted">Page not found.</p>
      <a href="/" className="text-pine underline underline-offset-4">
        Lapinkylä
      </a>
    </main>
  );
}
