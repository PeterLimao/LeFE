import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import Path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': Path.join(__dirname, './src')
    }
  }
})
