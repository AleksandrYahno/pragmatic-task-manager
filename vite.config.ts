import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
// Chunk split: vendor libs in separate cacheable chunks; BoardModule is lazy so pragmatic-dnd/zustand load on first visit.
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'react-router';
            }
            if (id.includes('@atlaskit/pragmatic-drag-and-drop')) {
              return 'pragmatic-dnd';
            }
            if (id.includes('zustand') || id.includes('immer')) {
              return 'zustand';
            }
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n';
            }
            if (id.includes('notistack')) {
              return 'notistack';
            }

            return 'vendor';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    chunkSizeWarningLimit: 400,
  },
  test: {
    environment: 'node',
    globals: true,
    include: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
  },
});
