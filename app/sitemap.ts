import type { MetadataRoute } from "next";
import { blogPosts, businessInfo, services } from "@/data/site";

export const dynamic = "force-static";

const staticLastModified = new Date("2026-05-29");
const serviceLastModified = new Date("2026-05-29");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/hakkimizda",
    "/hizmetler",
    "/iletisim",
    "/blog",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${businessInfo.baseUrl}${route === "/" ? "" : route}`,
    lastModified: staticLastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const serviceEntries = services.map((service) => ({
    url: `${businessInfo.baseUrl}/hizmetler/${service.slug}`,
    lastModified: serviceLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const blogEntries = blogPosts.map((post) => ({
    url: `${businessInfo.baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
