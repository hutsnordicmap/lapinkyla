import type { Metadata } from "next";
import type { ArticleCopy } from "@/app/articles";

export function pageMetadata(copy: ArticleCopy): Metadata {
  const fi = copy.locale === "fi" ? copy.path : copy.otherHref;
  const en = copy.locale === "en" ? copy.path : copy.otherHref;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: copy.path,
      languages: { fi, en, "x-default": fi },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: copy.path,
      locale: copy.locale === "fi" ? "fi_FI" : "en_GB",
      type: "article",
    },
  };
}
