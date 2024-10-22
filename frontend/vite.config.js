import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the backend server
      '/api': {
        target: 'http://https://cocomelonkids.onrender.com/', // URL of your backend
        changeOrigin: true,
        secure: false, // Set to true if using HTTPS
      },
    },
  },
});
