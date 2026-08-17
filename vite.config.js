import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        specifikacije: resolve(__dirname, 'specifikacije.html'),
        kontakt: resolve(__dirname, 'kontakt.html'),
        certifikati: resolve(__dirname, 'certifikati.html')
      }
    }
  }
});
