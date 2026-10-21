import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-21");
  return [
    { url: "https://lapinkyla.fi/", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://lapinkyla.fi/en", lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
