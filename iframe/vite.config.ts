import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173, 
    watch: {
      usePolling: true
    }
  },
  build: {
    rollupOptions: {
        output: {
            dir: 'dist',
            entryFileNames: 'assets/chat.js',
            assetFileNames: 'assets/chat.css',
            chunkFileNames: "assets/chunk.js",
            manualChunks: undefined,
        }
    }
}
})
