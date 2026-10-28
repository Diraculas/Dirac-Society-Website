import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Actions sets this to the repository path when building for Pages.
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.loca.lt', '.lhr.life', '.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app'],
  },
});
