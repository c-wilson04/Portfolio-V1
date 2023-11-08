import { defineConfig, resolveBaseUrl } from 'vite';
import { resolve } from 'path'

export default defineConfig({
    assetsInclude: ['**/*.gltf'],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          contact: resolve(__dirname, 'contact.html')
        }
      }
    }
  });