import fs from 'fs';
import path from 'path';
import packageJson from '../package.json' assert { type: 'json' };
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.resolve(__dirname, '../src/components');
const distDir = './dist';
const packageJsonPath = path.resolve(__dirname, '../package.json');

function findComponents(dir) {
  const components = fs.readdirSync(dir).flatMap((fileOrDir) => {
    const fullPath = path.resolve(dir, fileOrDir);
    const isDirectory = fs.statSync(fullPath).isDirectory();
    if (isDirectory) {
      return findComponents(fullPath).map((subComponent) => path.join(fileOrDir, subComponent));
    }
    if (fileOrDir === 'index.ts' || fileOrDir === 'index.tsx') {
      return '';
    }
    return [];
  });

  return components;
}

const components = findComponents(componentsDir).filter((component) => Boolean(component));
components.unshift('index.ts');

const exports = components.reduce((exports, component) => {
  const isMainIndex = component === 'index.ts';
  const componentPath = `${distDir}${isMainIndex ? '' : `/${component.replace(/\\/g, '/')}`}`;

  exports[isMainIndex ? '.' : `./${component.replace(/\\/g, '/')}`] = {
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

const packageJsonEntries = Object.entries(packageJson);
const typesIndex = packageJsonEntries.findIndex(([key]) => key === 'types');
packageJsonEntries.splice(typesIndex + 1, 1, ['exports', exports]);
const updatedPackageJson = Object.fromEntries(packageJsonEntries);

// Write the updated package.json back
fs.writeFileSync(packageJsonPath, JSON.stringify(updatedPackageJson, null, 2));
