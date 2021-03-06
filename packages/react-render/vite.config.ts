import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import Path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: Path.join(__dirname, './src/index.ts'),
      name: 'lefe-react-render'
    }
  },
  resolve: {
    alias: {
      '@': Path.join(__dirname, './src')
    }
  }
})
