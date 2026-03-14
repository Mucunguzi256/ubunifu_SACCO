import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ubunifu-sacco-docs/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
