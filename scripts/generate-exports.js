import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const packageJson = JSON.parse(
  fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);

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

const privatePaths = {
  Form: ['Wrappers', 'Common'],
};
let exploredDirectories = [];
const exports = components.reduce((exports, component) => {
  const directoryDivider = /\\/g;
  const isMainIndex = component === 'index.ts';
  const componentPath = `${distDir}${isMainIndex ? '' : `/${component.replace(directoryDivider, '/')}`}`;
  const isComponentInDirectory = component.includes('\\');

  if (isComponentInDirectory) {
    const directoryName = component.slice(0, component.search(directoryDivider));
    if (!exploredDirectories.includes(directoryName)) {
      exports[`./${directoryName}/`] = `${distDir}/${directoryName}/`;
      exploredDirectories.push(directoryName);

      if (Object.keys(privatePaths).includes(directoryName)) {
        privatePaths[directoryName].forEach(
          (directory) => (exports[`./${directoryName}/${directory}/*`] = null),
        );
      }
    }
    exports[`./${component.replace(directoryDivider, '/')}/*`] = null;
  }

  exports[isMainIndex ? '.' : `./${component.replace(directoryDivider, '/')}`] = {
    types: `${componentPath}/index.d.ts`,
    import: `${componentPath}/index.mjs`,
    require: `${componentPath}/index.cjs`,
  };
  return exports;
}, {});

const packageJsonEntries = Object.entries(packageJson);
const typesIndex = packageJsonEntries.findIndex(([key]) => key === 'types');
packageJsonEntries.splice(typesIndex + 1, 1, ['exports', exports]);
const updatedPackageJson = Object.fromEntries(packageJsonEntries);

// Write the updated package.json back
fs.writeFileSync(packageJsonPath, JSON.stringify(updatedPackageJson, null, 2) + '\n', {
  encoding: 'utf-8',
});
