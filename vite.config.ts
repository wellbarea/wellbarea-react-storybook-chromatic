import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Importando o arquivo de configuração do Storybook
      '@storybook/react': path.resolve(__dirname, '.storybook'),
    },
  },
});