import type { Metadata } from "next";
import { HomePage } from "@/app/components/HomePage";
import { site } from "@/app/content";

const copy = site.fi;

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  alternates: {
    canonical: "/",
    languages: {
      fi: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: copy.title,
    description: copy.description,
    url: "https://lapinkyla.fi/",
    locale: "fi_FI",
    type: "website",
  },
};

export default function Page() {
  return <HomePage copy={copy} />;
}
