import { defineConfig, UserConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
  return {
    plugins: [preact()],
    publicDir: false,
    server: {
      port: 5173,
    },
    build: {
      lib: {
        entry: 'src/main.tsx',
        name: 'contact-widget',
        fileName: 'contact-widget.min',
        formats: ['es'],
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'contact-widget.css';
            return assetInfo.name;
          },
        },
      },
      minify: 'esbuild',
    },
  };
});
