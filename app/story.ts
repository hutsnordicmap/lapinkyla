import type { Locale } from "@/app/content";

export type StoryShot = {
  id: string;
  year?: string;
  line: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    kind: "photo" | "drawing";
    href: string;
    credit: string;
    licence: "by-sa-4" | "by-4" | "by-nc-nd-4" | "pdm";
    licenceLabel: string;
  };
};

export type StoryPlace = {
  id: string;
  name: string;
  about: string;
  shots: StoryShot[];
};

export type StoryCopy = {
  locale: Locale;
  path: string;
  otherHref: string;
  title: string;
  description: string;
  heading: string;
  places: StoryPlace[];
};

export function museumPhoto(
  src: string,
  width: number,
  height: number,
  href: string,
  credit: string,
): Omit<NonNullable<StoryShot["image"]>, "alt"> {
  return {
    src,
    width,
    height,
    kind: "photo",
    href,
    credit,
    licence: "by-nc-nd-4",
    licenceLabel: "CC BY-NC-ND 4.0",
  };
}

export function shot(
  id: string,
  year: string,
  line: string,
  image: Omit<NonNullable<StoryShot["image"]>, "alt">,
): StoryShot {
  return {
    id,
    year,
    line,
    image: { ...image, alt: year ? `${year}. ${line}` : line },
  };
}
