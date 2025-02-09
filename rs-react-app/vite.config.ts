import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
    }),
  ],
  build: {
    rollupOptions: {
      external: [/\.test\.(ts|tsx)$/, /\.spec\.(ts|tsx)$/, /__tests__\/.*/],
    },
  },
});
