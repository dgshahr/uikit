import fs from 'fs';
import path from 'path';
import packageJson from '../package.json' assert { type: 'json' };
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE_EXT_REG = /\.(js|mjs|jsx|ts|tsx)$/;
const componentsDir = path.resolve(__dirname, '../src/components');
const distDir = './dist';
const packageJsonPath = path.resolve(__dirname, '../package.json');

// Read the component directories
const components = fs.readdirSync(componentsDir).filter((dir) => {
  const fullPath = path.resolve(componentsDir, dir, FILE_EXT_REG.test(dir) ? '' : 'index.tsx');
  return fs.existsSync(fullPath);
});

// Read the existing package.json

// Update the exports field
packageJson.exports = components.reduce((exports, component) => {
  const isMainIndex = component === 'index.ts';
  const componentPath = `${distDir}${isMainIndex ? '' : `/${component}`}`;

  exports[isMainIndex ? '.' : `./${component}`] = {
    import: {
      types: `${componentPath}/index.d.ts`,
      default: `${componentPath}/index.js`,
    },
    require: {
      types: `${componentPath}/index.d.ts`,
      default: `${componentPath}/index.cjs`,
    },
  };
  return exports;
}, {});

// Write the updated package.json back
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
