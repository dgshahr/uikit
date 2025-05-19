import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { useMDXComponents as c } from './index-Syj0H2O1.js';
import { T as l, e as o, f as t, h as d } from './index-BGWonEDo.js';
import { D as n } from './constants-BybbdXaH.js';
/* empty css               */ import './index-CTzypqlY.js';
import './iframe-DinykyFm.js';
import './index-BRSOB10J.js';
import './index-X_f_OX5J.js';
import './index-CFeRKNTJ.js';
import './index-DrFu-skq.js';
const a = () =>
  e.jsxs(e.Fragment, {
    children: [
      e.jsx(l, { children: '🤝 Contributing' }),
      e.jsx('p', {
        className: n,
        children:
          'Thank you for your interest in contributing! This UI Kit is an open and growing library of reusable components. We welcome bug reports, improvements, new components, and documentation enhancements.',
      }),
      e.jsx(o, { children: 'Local Setup' }),
      e.jsx('p', {
        className: n,
        children: 'To get started, clone the repository and install dependencies:',
      }),
      e.jsx(t, {
        language: 'bash',
        code: `# Clone the proejct
git clone https://github.com/dgshahr/uikit.git

# navigate to project director
cd uikit

# install the dependencies
npm install`,
      }),
      e.jsx(o, { children: 'Project Structure' }),
      e.jsxs('p', {
        className: n,
        children: [
          'Each component must be placed in its own folder under ',
          e.jsx('code', { children: 'src/components' }),
          ', and',
          ' ',
          e.jsxs('strong', {
            children: [
              'must include an ',
              e.jsx('code', { children: 'index.ts' }),
              ' or ',
              e.jsx('code', { children: 'index.tsx' }),
              ' file',
            ],
          }),
          ' ',
          '. Vite is configured to treat each ',
          e.jsx('code', { children: 'index.ts' }),
          ' or ',
          e.jsx('code', { children: 'index.tsx' }),
          ' file in component folders as an entry point during the build process.',
          e.jsx('br', {}),
          'If a folder contains multiple components or exports, use ',
          e.jsx('strong', { children: 'named exports' }),
          ' from the index file.',
          e.jsx('br', {}),
          'Additionally, each component must have a corresponding Storybook file named:',
        ],
      }),
      e.jsx(t, { language: 'bash', code: '{component-name}-stories.tsx' }),
      e.jsxs('p', {
        className: n,
        children: [
          'This is required for automatic documentation generation in Storybook.',
          e.jsx('br', {}),
          e.jsx('br', {}),
          'Additionally, there is a root ',
          e.jsx('code', { children: 'index.ts' }),
          ' file inside the',
          ' ',
          e.jsx('code', { children: 'src/components' }),
          ' folder. This file serves as the',
          ' ',
          e.jsx('strong', { children: 'main entry point' }),
          ' for the library and is responsible for re-exporting all components:',
        ],
      }),
      e.jsx(t, {
        language: 'typescript',
        code: `export { AccordionGroup, AccordionItem } from './Accordion';
export { default as Alert } from './Alert';
export { default as Badge } from './Badge';
export { default as Breadcrumb } from './Breadcrumb';
export { default as Button } from './Button';
// ...and so on
`,
      }),
      e.jsx('p', {
        className: n,
        children:
          'This allows users to import components directly from the library without needing to specify the full path to each component.',
      }),
      e.jsx(t, { language: 'typescript', code: "import { Button, Alert } from '@dgshahr/uikit';" }),
      e.jsx('p', { className: n, children: 'Example component folder:' }),
      e.jsx(t, {
        language: 'text',
        code: `src/
├── components/
│   └── Button/
│       ├── Button.stories.tsx      # Required: Storybook file for documentation
│       ├── index.tsx               # Required: entry point for build (contains button component in this case)
│       └── variant.ts              # Optional: additional files for the component
│
│   └── index.ts                    # Required: main entry point for the library
`,
      }),
      e.jsx(o, { children: 'Running the UI Kit' }),
      e.jsx('p', { className: n, children: 'Start Storybook to view components locally:' }),
      e.jsx(t, { language: 'bash', code: 'npm run dev' }),
      e.jsx(o, { children: 'Committing Changes' }),
      e.jsxs('p', {
        className: n,
        children: [
          'When committing changes, please follow the',
          ' ',
          e.jsx('strong', {
            children: e.jsx('a', {
              href: 'https://www.conventionalcommits.org/en/v1.0.0/',
              children: 'Conventional Commits',
            }),
          }),
          ' ',
          'format. This helps in generating a changelog and understanding the nature of changes made.',
          e.jsx('br', {}),
          'Example commit messages:',
        ],
      }),
      e.jsx(t, {
        language: 'bash',
        code: `feat(button): add loading state
fix(alert): correct close button padding
docs(colors): update color override example`,
      }),
      e.jsx(o, { children: 'Building for Production' }),
      e.jsx('p', {
        className: n,
        children: 'To build the UI Kit for production, run the following command:',
      }),
      e.jsx(t, { language: 'bash', code: 'npm run build' }),
      e.jsxs('p', {
        className: n,
        children: [
          'This will create a ',
          e.jsx('code', { children: 'dist' }),
          ' folder containing the production-ready files.',
          e.jsx('br', {}),
          'This command will also check ',
          e.jsx('code', { children: 'exports' }),
          ' in the ',
          e.jsx('code', { children: 'package.json' }),
          ' file to ensure that all components are properly exported with their respective paths, and if any component is missing, it will add it to the ',
          e.jsx('code', { children: 'exports' }),
          ' section. This scrip is located in the ',
          e.jsx('code', { children: '/scripts/generate-exports.js' }),
        ],
      }),
      e.jsx(o, { children: 'Submitting a Pull Request' }),
      e.jsx('p', { className: n, children: "Once you're happy with your changes:" }),
      e.jsxs('ol', {
        className: n,
        children: [
          e.jsx('li', { children: '1. Push your branch to GitHub.' }),
          e.jsx('li', { children: '2. Open a Pull Request against the `develop` branch.' }),
          e.jsx('li', {
            children:
              '3. Provide a clear description of the changes, including source code if applicable.',
          }),
          e.jsx('li', { children: '4. Keep your PRs small and focused.' }),
        ],
      }),
      e.jsx(o, { children: 'Need Help?' }),
      e.jsx('p', {
        className: n,
        children:
          'If you have questions or ideas, feel free to open an issue or start a discussion.',
      }),
    ],
  });
a.__docgenInfo = { description: '', methods: [], displayName: 'ContributingDocument' };
function r(s) {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(d, { title: 'Getting Started/Contributing' }),
      `
`,
      e.jsx(a, {}),
    ],
  });
}
function N(s = {}) {
  const { wrapper: i } = { ...c(), ...s.components };
  return i ? e.jsx(i, { ...s, children: e.jsx(r, { ...s }) }) : r();
}
export { N as default };
