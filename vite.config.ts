import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      sitemap: {
        enabled: false,
        host: "https://trustable.rw",
        outputPath: "sitemap.xml",
      },
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
      pages: [
        { path: "/", sitemap: { priority: 1, changefreq: "weekly", lastmod: "2026-06-19" } },
        {
          path: "/about",
          sitemap: { priority: 0.8, changefreq: "monthly", lastmod: "2026-06-19" },
        },
        {
          path: "/services",
          sitemap: { priority: 0.9, changefreq: "monthly", lastmod: "2026-06-19" },
        },
        {
          path: "/projects",
          sitemap: { priority: 0.9, changefreq: "monthly", lastmod: "2026-06-19" },
        },
        {
          path: "/contact",
          sitemap: { priority: 0.7, changefreq: "monthly", lastmod: "2026-06-19" },
        },
        { path: "/sitemap.xml", sitemap: { exclude: true } },
      ],
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
