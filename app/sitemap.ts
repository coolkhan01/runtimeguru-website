import type { MetadataRoute } from "next";

const BASE_URL = "https://www.runtimeguru.com";

const pages: Array<{
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/",          lastModified: "2026-08-22", changeFrequency: "weekly",  priority: 1.0 },
  { path: "/services",  lastModified: "2026-08-22", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about",     lastModified: "2026-08-22", changeFrequency: "monthly", priority: 0.8 },
  { path: "/portfolio", lastModified: "2026-08-22", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing",   lastModified: "2026-08-22", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact",   lastModified: "2026-08-22", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy",   lastModified: "2026-08-22", changeFrequency: "yearly",  priority: 0.3 },
  { path: "/terms",     lastModified: "2026-08-22", changeFrequency: "yearly",  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
