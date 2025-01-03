import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Explicitly define the output directory
    outDir: 'dist',

    // Enable manual chunks to split large libraries into separate files
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules into a separate chunk to reduce main file size
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },

    // Increase chunk size limit if needed
    chunkSizeWarningLimit: 1500, // default is 500 KB, increase to avoid warnings

    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB into the build, adjust as needed
  }
});
