import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      pages: path.resolve(__dirname, './src/pages'),
      components: path.resolve(__dirname, './src/components'),
      styles: path.resolve(__dirname, './src/styles'),
      types: path.resolve(__dirname, './src/types'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  plugins: [react(), tsconfigPaths()],
});
