// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  env: {
    schema: {
      GITHUB_AUTH_TOKEN: envField.string({ context: "server", access: "secret"})
    }
  },
  server: {
    allowedHosts: ["alexr.dev", "vaporescent-admonitorily-ramon.ngrok-free.dev"],
  },
  experimental: {
    fonts: [
      {
        name: "Roboto Mono",
        cssVariable: "--font-roboto-mono",
        provider: fontProviders.google(),
        weights: [800,700,600,500,400],
      },
    ],
  },
});


