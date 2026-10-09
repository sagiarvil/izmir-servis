import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://izmiryagdegisimi.web.app',
  output: 'static',
  build: {
    format: 'directory'
  }
});
