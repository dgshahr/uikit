/* eslint-disable no-undef */
/** @type {import('@svgr/core').Config} */

module.exports = {
  outDir: 'src/icons',
  typescript: true,
  replaceAttrValues: {
    '#737373': 'currentColor',
  },
  jsxRuntime: 'automatic',
  icon: true,
  index: false,
  template: require('./svgr-template.cjs'),
};
