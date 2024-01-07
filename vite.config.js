import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://Gabriela29BG.github.io/TodoListReact'
  // Establece las extensiones de archivo que Vite debería reconocer para JSX o TSX
  extensions: ['.js', '.ts', '.jsx', '.tsx'],
})
