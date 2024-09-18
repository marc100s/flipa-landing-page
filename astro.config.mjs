import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import icon from "astro-icon";
import { defineConfig } from "astro/config";



export default defineConfig({
  site: "http://localhost:4321",
  integrations: [tailwind(), icon(), react()],
});
