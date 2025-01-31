import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: '0.0.0.0',  // Адрес Django-сервера
        changeOrigin: true,
        secure: false,
      },
    },
  },
});