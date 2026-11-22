import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://raumausstattung-franke.com", lastModified: new Date() },
    {
      url: "https://raumausstattung-franke.com/impressum",
      lastModified: new Date(),
    },
    {
      url: "https://raumausstattung-franke.com/privacy",
      lastModified: new Date(),
    },
  ];
}
