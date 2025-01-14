import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../../backend/static', // Указываем папку для сборки
    emptyOutDir: true, // Очищать папку перед сборкой
  },
});