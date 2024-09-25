const fs = require('fs');
const path = require('path');

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
const packageJson = require(packageJsonPath);

// Update the exports field
packageJson.exports = components.reduce((exports, component) => {
  const isMainIndex = component === 'index.ts';
  const componentPath = `${distDir}${isMainIndex ? '' : `/${component}`}`;

  exports[isMainIndex ? '.' : `./${component}`] = {
    import: {
      default: `${componentPath}/index.js`,
      types: `${componentPath}/index.d.ts`,
    },
    require: {
      default: `${componentPath}/index.cjs`,
      types: `${componentPath}/index.d.ts`,
    },
  };
  return exports;
}, {});

// Write the updated package.json back
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
