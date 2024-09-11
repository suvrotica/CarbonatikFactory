import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  kit: {
    alias: {
      "@/*": "./path/to/lib/*",
      $lib: './src/lib'
    },
    adapter: adapter()
  },
  preprocess: [
    vitePreprocess(),
    mdsvex(mdsvexConfig)
  ]
};
export default config;