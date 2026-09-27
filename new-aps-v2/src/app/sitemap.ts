import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.newapsinteriors.com";

  return [
    {
      url: `${base}/`,
      priority: 1,
    },
    {
      url: `${base}/about`,
      priority: 0.9,
    },
    {
      url: `${base}/products`,
      priority: 0.9,
    },
    {
      url: `${base}/services`,
      priority: 0.9,
    },
    {
      url: `${base}/gallery`,
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      priority: 0.8,
    },
  ];
}