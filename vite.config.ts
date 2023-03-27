import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, "src/") }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [vue()],
})
