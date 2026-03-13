import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Full access allowed for all pages to ensure SEO visibility
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
