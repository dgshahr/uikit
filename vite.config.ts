import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { readdirSync, existsSync, statSync } from 'fs';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

import { peerDependencies } from './package.json';

const componentDir = resolve(__dirname, 'src/components');

const findEntries = (dir: string) => {
  const entries = {};
  readdirSync(dir).forEach((item) => {
    const itemPath = resolve(dir, item);
    if (statSync(itemPath).isDirectory()) {
      const indexPath = resolve(itemPath, 'index.tsx');
      if (existsSync(indexPath)) {
        const componentsName = itemPath.replace(`${componentDir}\\`, '');
        entries[componentsName] = indexPath;
      }
      Object.assign(entries, findEntries(itemPath));
    }
  });

  return entries;
};

const entries = findEntries(componentDir);

const componentsIndexRoute = resolve(componentDir, 'index.ts');
if (existsSync(componentsIndexRoute)) {
  entries['index'] = componentsIndexRoute;
}

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ entryRoot: 'src/components', exclude: ['src/icons', 'src/components/Form/Wrappers'] }),
  ],
  resolve: {
    alias: {
      '@/src': resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: entries,
      name: '@dgshahr/ui-kit',
      fileName: (format, entryName) => {
        const fileExt = format === 'es' || format === 'esm' || format === 'module' ? 'js' : format;
        if (entryName === 'index') return `index.${fileExt}`;
        return `${entryName}/index.${fileExt}`;
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react/jsx-runtime', ...Object.keys(peerDependencies)],
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
