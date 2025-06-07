import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { useMDXComponents as l } from './index-Syj0H2O1.js';
import { T as c, e as n, f as i, h as d } from './index-DEpczEfQ.js';
import { D as s } from './constants-DXQArO81.js';
/* empty css               */ import './index-CTzypqlY.js';
import './iframe-w4wiPbPv.js';
import './index-BRSOB10J.js';
import './index-X_f_OX5J.js';
import './index-CFeRKNTJ.js';
import './index-DrFu-skq.js';
const a = () =>
  e.jsxs(e.Fragment, {
    children: [
      e.jsx(c, { children: '🚀 Introductions' }),
      e.jsxs('p', {
        className: s,
        children: [
          'The ',
          e.jsx('strong', { children: 'DGS UI Kit' }),
          ' is a modern, accessible, and themeable component library built for React applications. It offers a comprehensive set of pre-styled, reusable components designed to speed up development and ensure visual consistency across projects.',
          e.jsx('br', {}),
          'All components come with built-in styles, design token support (via CSS variables), and full RTL compatibility. No additional configuration like Tailwind, PostCSS, or global CSS setup is required—just install and start building.',
        ],
      }),
      e.jsx(n, { children: 'Installation' }),
      e.jsxs('p', {
        className: s,
        children: [
          'To start using the ',
          e.jsx('strong', { children: 'DGS UI Kit' }),
          ', simply install the package using your preferred package manager.',
        ],
      }),
      e.jsx(i, {
        language: 'bash',
        code: `npm install @dgshahr/ui-kit

# or with yarn
yarn add @dgshahr/ui-kit

# or with pnpm
pnpm add @dgshahr/ui-kit`,
      }),
      e.jsx(n, { children: 'Peer Dependencies' }),
      e.jsxs('p', {
        className: s,
        children: [
          'The only required peer dependency is ',
          e.jsx('code', { children: 'react' }),
          '. Please make sure React 18.2.0 or newer is installed in your project.',
        ],
      }),
      e.jsx(i, {
        language: 'json',
        code: `"peerDependencies": {
"react": ">=18.2.0"
}`,
      }),
      e.jsx(n, { children: 'Usage' }),
      e.jsx('p', {
        className: s,
        children: 'After installing the package, you can use components in two ways:',
      }),
      e.jsx(i, {
        language: 'tsx',
        code: `// Named import
import { Button } from '@dgshahr/ui-kit';

// OR direct module import
import Button from '@dgshahr/ui-kit/Button';`,
      }),
      e.jsx('p', {
        className: s,
        children:
          'Direct module imports are useful for optimizing bundle size in large-scale apps or when using a custom tree-shaking strategy.',
      }),
      e.jsx(n, { children: 'Styles' }),
      e.jsx('p', {
        className: s,
        children:
          'All required styles are bundled with the package. No additional configuration (e.g., Tailwind setup, PostCSS, or global CSS import) is necessary.',
      }),
    ],
  });
a.__docgenInfo = { description: '', methods: [], displayName: 'IntroductionsDocument' };
function o(t) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { title: 'Getting Started/Introductions' }),
      `
`,
      e.jsx(a, {}),
    ],
  });
}
function k(t = {}) {
  const { wrapper: r } = { ...l(), ...t.components };
  return r ? e.jsx(r, { ...t, children: e.jsx(o, { ...t }) }) : o();
}
export { k as default };
