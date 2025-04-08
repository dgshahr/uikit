import { j as s } from './jsx-runtime-D_zvdyIk.js';
import { c as e } from './clsx-B-dksMZM.js';
import './index-CTzypqlY.js';
/* empty css               */ const a = (o) => {
  const { title: n, progress: t, color: r = 'primary', className: d } = o;
  return s.jsxs('div', {
    className: e('dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-2', d),
    children: [
      s.jsxs('div', {
        className: e(
          'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-between dgs-ui-kit-font-p2-regular',
          {
            'dgs-ui-kit-text-primary-500': r === 'primary',
            'dgs-ui-kit-text-secondary-500': r === 'secondary',
          },
        ),
        children: [
          s.jsx('span', { children: n }),
          s.jsxs('span', { className: 'ss02', children: [t, ' %'] }),
        ],
      }),
      s.jsx('div', {
        className: e('dgs-ui-kit-h-1 dgs-ui-kit-rounded-sm dgs-ui-kit-relative', {
          'dgs-ui-kit-bg-primary-100': r === 'primary',
          'dgs-ui-kit-bg-secondary-100': r === 'secondary',
        }),
        children: s.jsx('div', {
          className: e(
            'dgs-ui-kit-rounded-sm dgs-ui-kit-absolute dgs-ui-kit-right-0 dgs-ui-kit-h-full dgs-ui-kit-top-0',
            {
              'dgs-ui-kit-bg-primary-500': r === 'primary',
              'dgs-ui-kit-bg-secondary-500': r === 'secondary',
            },
          ),
          style: { width: t > 100 ? '100%' : `${t}%` },
        }),
      }),
    ],
  });
};
a.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ProgressBar',
  props: {
    title: { required: !0, tsType: { name: 'string' }, description: '' },
    color: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'secondary'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'secondary'" },
        ],
      },
      description: '',
    },
    progress: { required: !0, tsType: { name: 'number' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const u = {
    title: 'Components/Progress/Bar',
    component: a,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport ProgressBar from '@dgshahr/ui-kit/Progress/Bar';\nOr\nimport { ProgressBar } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      title: { control: { type: 'text' }, table: { type: { summary: 'string' } } },
      progress: { control: { type: 'number' }, table: { type: { summary: 'number' } } },
      color: {
        options: ['primary', 'secondary'],
        control: { type: 'select' },
        table: { type: { summary: 'primary, secondary' }, defaultValue: { summary: 'primary' } },
      },
    },
  },
  i = {
    args: { title: 'عنوان', progress: 50, color: 'primary', className: 'dgs-ui-kit-w-[400px]' },
  };
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    title: 'عنوان',
    progress: 50,
    color: 'primary',
    className: 'dgs-ui-kit-w-[400px]'
  }
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
const g = ['Default'];
export { i as Default, g as __namedExportsOrder, u as default };
