import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const LIVE_URL = "https://unspokenswag.github.io"
const BASE_URL = 'my-repo' 

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://unspokenswag.github.io",
  base: "my-repo",
  output: "static"
});