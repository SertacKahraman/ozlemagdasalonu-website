import type { MetadataRoute } from "next";
import { businessInfo } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${businessInfo.baseUrl}/sitemap.xml`,
  };
}
