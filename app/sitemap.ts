import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.runtimeguru.com";
  const pages = ["/", "/services", "/about", "/portfolio", "/pricing", "/contact", "/privacy", "/terms"];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/pricing" || path === "/contact" ? 0.9 : path === "/privacy" || path === "/terms" ? 0.3 : 0.8,
  }));
}
