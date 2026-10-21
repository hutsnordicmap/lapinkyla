import type { Metadata } from "next";
import { HomePage } from "@/app/components/HomePage";
import { site } from "@/app/content";

const copy = site.en;

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  alternates: {
    canonical: "/en",
    languages: {
      fi: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: copy.title,
    description: copy.description,
    url: "https://lapinkyla.fi/en",
    locale: "en_GB",
    type: "website",
  },
};

export default function EnglishPage() {
  return <HomePage copy={copy} />;
}
