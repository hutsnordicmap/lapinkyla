import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lapinkyla.fi"),
  title: {
    default: "Lapinkylä",
    template: "%s",
  },
  applicationName: "Lapinkylä",
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const lang = headerList.get("x-locale") === "en" ? "en" : "fi";

  return (
    <html
      lang={lang}
      className={`${sourceSans.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
