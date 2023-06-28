import { defineConfig } from "astro/config";

/**
 * @see  https://astro.build/config
 */
export default defineConfig({
  site: import.meta.env.SITE_URL,
  base: import.meta.env.SITE_BASE,
});
