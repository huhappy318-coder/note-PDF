import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        popup: resolve(rootDir, 'popup.html'),
        preview: resolve(rootDir, 'preview.html'),
        options: resolve(rootDir, 'options.html'),
        content: resolve(rootDir, 'src/content/index.ts'),
        'service-worker': resolve(rootDir, 'src/background/service-worker.ts')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? 'asset';
          if (name.endsWith('.css')) {
            return '[name].[ext]';
          }
          return 'assets/[name].[ext]';
        }
      }
    }
  }
});
