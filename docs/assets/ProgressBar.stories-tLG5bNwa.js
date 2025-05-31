import { j as r } from './jsx-runtime-D_zvdyIk.js';
import { c as t } from './clsx-B-dksMZM.js';
import './index-CTzypqlY.js';
/* empty css               */ const o = (c) => {
  const {
      title: p,
      current: a,
      total: i = 100,
      color: e = 'primary',
      currentShowType: u = 'percentage',
      className: l,
    } = c,
    n = (a / i) * 100;
  return r.jsxs('div', {
    className: t('dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-2', l),
    children: [
      r.jsxs('div', {
        className: t(
          'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-between dgs-ui-kit-font-p2-regular',
          {
            'dgs-ui-kit-text-primary-500': e === 'primary',
            'dgs-ui-kit-text-secondary-500': e === 'secondary',
          },
        ),
        children: [
          r.jsx('span', { children: p }),
          r.jsx('span', {
            className: 'ss02',
            children: u === 'percentage' ? `${Math.floor(n)}%` : `${a} از ${i}`,
          }),
        ],
      }),
      r.jsx('div', {
        className: t('dgs-ui-kit-h-1 dgs-ui-kit-rounded-sm dgs-ui-kit-relative', {
          'dgs-ui-kit-bg-primary-100': e === 'primary',
          'dgs-ui-kit-bg-secondary-100': e === 'secondary',
        }),
        children: r.jsx('div', {
          className: t(
            'dgs-ui-kit-rounded-sm dgs-ui-kit-absolute dgs-ui-kit-right-0 dgs-ui-kit-h-full dgs-ui-kit-top-0',
            {
              'dgs-ui-kit-bg-primary-500': e === 'primary',
              'dgs-ui-kit-bg-secondary-500': e === 'secondary',
            },
          ),
          style: { width: a > i ? '100%' : `${n}%` },
        }),
      }),
    ],
  });
};
o.__docgenInfo = {
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
    current: { required: !0, tsType: { name: 'number' }, description: '' },
    total: { required: !0, tsType: { name: 'number' }, description: '' },
    currentShowType: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'percentage' | 'value'",
        elements: [
          { name: 'literal', value: "'percentage'" },
          { name: 'literal', value: "'value'" },
        ],
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const k = {
    title: 'Components/Progress/Bar',
    component: o,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport ProgressBar from '@dgshahr/ui-kit/Progress/Bar';\nOr\nimport { ProgressBar } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      color: {
        options: ['primary', 'secondary'],
        control: { type: 'select' },
        table: { type: { summary: 'primary, secondary' }, defaultValue: { summary: 'primary' } },
      },
      currentShowType: {
        options: ['percentage', 'value'],
        control: { type: 'select' },
        table: { type: { summary: 'percentage, value' }, defaultValue: { summary: 'percentage' } },
      },
    },
  },
  s = {
    args: {
      title: 'عنوان',
      current: 50,
      total: 100,
      color: 'primary',
      currentShowType: 'percentage',
      className: 'dgs-ui-kit-w-[400px]',
    },
  };
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    title: 'عنوان',
    current: 50,
    total: 100,
    color: 'primary',
    currentShowType: 'percentage',
    className: 'dgs-ui-kit-w-[400px]'
  }
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
const f = ['Default'];
export { s as Default, f as __namedExportsOrder, k as default };
