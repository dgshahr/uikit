import { j as o } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { I as a } from './IconArrowDown2-BBhufJ55.js';
import { C as s } from './index-BSh32SNf.js';
import './clsx-B-dksMZM.js';
import './index-CtPsmfai.js';
/* empty css               */ const t = (r) =>
  o.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...r,
    children: o.jsx('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d: 'M9.592 13.957c3.259 0 7.592.367 7.592 3.542 0 3.345-5.049 3.545-7.215 3.557h-.786C6.873 21.044 2 20.845 2 17.52c0-3.348 5.049-3.55 7.215-3.561l.26-.001zm0 1.5c-2.779 0-6.092.357-6.092 2.062 0 1.352 2.05 2.038 6.092 2.038s6.092-.693 6.092-2.058c0-1.355-2.05-2.042-6.092-2.042m9.115-1.967c2.706.405 3.273 1.658 3.273 2.637 0 .729-.315 1.716-1.818 2.285a.75.75 0 1 1-.532-1.402c.85-.322.85-.715.85-.883 0-.567-.671-.955-1.994-1.152a.75.75 0 0 1-.632-.853.76.76 0 0 1 .853-.632M9.592 2a5.14 5.14 0 0 1 5.135 5.135 5.08 5.08 0 0 1-1.487 3.622 5.08 5.08 0 0 1-3.614 1.513h-.034a5.14 5.14 0 0 1-5.136-5.135A5.14 5.14 0 0 1 9.592 2m7.088 1.124a4.03 4.03 0 0 1 3.39 3.996 4.07 4.07 0 0 1-3.482 4.005.75.75 0 0 1-.209-1.486 2.56 2.56 0 0 0 2.192-2.52 2.54 2.54 0 0 0-2.133-2.514.75.75 0 0 1 .242-1.481M9.592 3.5a3.64 3.64 0 0 0-3.636 3.635 3.64 3.64 0 0 0 3.636 3.635h.031a3.6 3.6 0 0 0 2.553-1.07 3.59 3.59 0 0 0 1.051-2.562A3.64 3.64 0 0 0 9.592 3.5',
      clipRule: 'evenodd',
    }),
  });
t.__docgenInfo = { description: '', methods: [], displayName: 'IconUser' };
const h = {
    title: 'Components/Chip',
    component: s,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Chip from '@dgshahr/ui-kit/Chip';\nOr\nimport { Chip } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      label: { control: 'text', table: { type: { summary: 'string | ReactNode' } } },
      size: {
        control: 'select',
        options: ['small', 'large'],
        table: { type: { summary: 'small, large' }, defaultValue: { summary: 'small' } },
      },
      clickable: {
        control: 'boolean',
        table: {
          type: { summary: 'boolean', detail: 'if set to true changes element to "button"' },
        },
      },
    },
  },
  e = { args: { label: 'برچسب', rightIcon: o.jsx(t, {}), leftIcon: o.jsx(a, {}) } };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    label: 'برچسب',
    rightIcon: <IconUser />,
    leftIcon: <IconArrowDown2 />
  }
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
const u = ['Default'];
export { e as Default, u as __namedExportsOrder, h as default };
