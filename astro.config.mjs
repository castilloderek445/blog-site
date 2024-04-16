import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const LIVE_URL = "https://unspokenswag.github.io"
const BASE_URL = LIVE_URL 

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
  site: BASE_URL
});