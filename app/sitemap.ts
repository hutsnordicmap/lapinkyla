import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-21");
  return [
    { url: "https://lapinkyla.fi/", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://lapinkyla.fi/historia", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://lapinkyla.fi/kylat", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://lapinkyla.fi/yhdistys", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://lapinkyla.fi/en", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://lapinkyla.fi/en/history", lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lapinkyla.fi/en/villages", lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://lapinkyla.fi/en/association", lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
