import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const MODE = process.env.NODE_ENV;
const isDevelopment = MODE === "development";
const { SITE_URL, SITE_BASE } = loadEnv(MODE, process.cwd(), "");

/**
 * @see  https://astro.build/config
 */
export default defineConfig({
  site: isDevelopment ? undefined : SITE_URL,
  base: isDevelopment ? "/" : SITE_BASE,
});
