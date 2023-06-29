import { defineConfig } from "astro/config";

console.log(
  "environment variables directly on astro.config.mjs",
  import.meta.env
);

/**
 * @see  https://astro.build/config
 */
export default defineConfig({
  site: import.meta.env.SITE_URL,
  base: import.meta.env.SITE_BASE,
});
