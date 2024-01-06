import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@redux': '/src/redux',
      '@pages': '/src/pages',
      '@constants': '/src/constants',
      '@Axios':'/src/Axios'
      // Add more aliases as needed
    },
  },
})
