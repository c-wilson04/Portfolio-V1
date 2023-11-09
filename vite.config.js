import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
  assetsInclude: ['**/*.gltf'],
  // base: '/c-wilson04.github.io/Portfolio-V1',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          contact: resolve(__dirname, 'Contact.html')
        }
      }
    }
  });