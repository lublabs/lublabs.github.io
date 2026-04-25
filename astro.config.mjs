import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.lublabs.com",
  output: "static",
  trailingSlash: "ignore",
  integrations: [react(), tailwind()],
});
