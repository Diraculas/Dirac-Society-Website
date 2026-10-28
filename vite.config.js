import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Supports deployment under a GitHub Pages repository path.
  base: './',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.loca.lt', '.lhr.life', '.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app'],
  },
});
