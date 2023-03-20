import { defineConfig, UserConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  return {
    plugins: [preact()],
    publicDir: mode === 'production' ? '' : 'public',
    server: {
      port: 5174,
    },
    build: {
      lib: {
        entry: 'src/main.tsx',
        name: 'footer-widget',
        fileName: 'footer-widget.min',
        formats: ['umd'],
      },
      rollupOptions: {
        external: ['preact'],
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'footer-widget.css';
            return assetInfo.name;
          },
        },
      },
    },
  };
});
