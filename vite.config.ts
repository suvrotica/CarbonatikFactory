import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: ['.']  // This allows reading files from the project root
    }
  },
  optimizeDeps: {
    exclude: ['fsevents']
  }
});