import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/seo";

const LAST_MODIFIED = "2026-06-19";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" as const },
          { path: "/about", priority: "0.8", changefreq: "monthly" as const },
          { path: "/services", priority: "0.9", changefreq: "monthly" as const },
          { path: "/projects", priority: "0.9", changefreq: "monthly" as const },
          { path: "/contact", priority: "0.7", changefreq: "monthly" as const },
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            (e) =>
              `  <url><loc>${SITE_URL}${e.path === "/" ? "" : e.path}</loc><lastmod>${LAST_MODIFIED}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
