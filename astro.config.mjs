// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

/**
 * `site` debe apuntar siempre al dominio canónico (usado en sitemap, RSS,
 * canonical URLs y Open Graph), independientemente de dónde se despliegue.
 *
 * `base` solo es necesario cuando el sitio se sirve desde una subruta, como
 * un GitHub Pages de proyecto sin dominio propio (usuario.github.io/repo).
 * Con un dominio propio (siscodex.com) o en Vercel/Netlify/CloudFront,
 * `base` debe permanecer en "/". Se controla vía variable de entorno para
 * no tocar código al cambiar de plataforma.
 */
export default defineConfig({
  site: "https://siscodex.com",
  base: process.env.PUBLIC_BASE_PATH ?? "/",
  trailingSlash: "never",
  output: "static",
  compressHTML: true,

  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
    }),
    icon({
      include: {
        lucide: ["*"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: "auto",
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
