import { defineConfig, UserConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
  return {
    plugins: [preact()],
    publicDir: false,
    server: {
      port: 5175,
    },
    build: {
      lib: {
        entry: 'src/main.tsx',
        name: 'calculator-widget',
        fileName: 'calculator-widget.min',
        formats: ['umd'],
      },
      rollupOptions: {
        external: ['preact'],
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'calculator-widget.css';
            return assetInfo.name;
          },
        },
      },
    },
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      },
    },
  };
});
