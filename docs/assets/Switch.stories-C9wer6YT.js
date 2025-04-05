import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as k } from './index-DatCARk7.js';
import { c as t } from './clsx-B-dksMZM.js';
/* empty css               */ const d = {
    large: {
      switch: 'dgs-ui-kit-w-11 dgs-ui-kit-h-6',
      label: 'dgs-ui-kit-font-p1-medium',
      toggler: 'dgs-ui-kit-size-5',
    },
    small: {
      switch: 'dgs-ui-kit-w-9 dgs-ui-kit-h-5',
      label: 'dgs-ui-kit-font-p2-medium',
      toggler: 'dgs-ui-kit-size-4',
    },
  },
  o = (s) => {
    const {
      checked: i,
      onChange: a,
      isIntermediate: g,
      label: u,
      description: l,
      disabled: c,
      size: n = 'large',
      className: p,
      containerClassName: m,
    } = s;
    return e.jsxs('button', {
      type: 'button',
      className: t(
        'dgs-ui-kit-flex dgs-ui-kit-gap-x-2 dgs-ui-kit-group',
        c && 'dgs-ui-kit-opacity-50',
        m,
      ),
      onClick: () => a(!i),
      children: [
        e.jsx('div', {
          className: t(
            'dgs-ui-kit-relative dgs-ui-kit-rounded-xl dgs-ui-kit-transition',
            'group-hover:dgs-ui-kit-ring-4 group-hover:dgs-ui-kit-ring-gray-100',
            'group-focus:dgs-ui-kit-ring-offset-1 group-focus:dgs-ui-kit-ring-offset-white group-focus:dgs-ui-kit-ring-4 group-focus:dgs-ui-kit-ring-primary-300',
            i ? 'dgs-ui-kit-bg-primary-500' : 'dgs-ui-kit-bg-gray-300',
            d[n].switch,
            p,
          ),
          children: e.jsx('div', {
            className: t(
              'dgs-ui-kit-bg-white dgs-ui-kit-rounded-full dgs-ui-kit-transition-all dgs-ui-kit-absolute dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-right-0.5 dgs-ui-kit-left-0.5',
              {
                'dgs-ui-kit-left-[calc(100%-2px)]': !i,
                '!dgs-ui-kit-w-3 !dgs-ui-kit-h-0.5 dgs-ui-kit-left-1/2 dgs-ui-kit-right-1/2 dgs-ui-kit-translate-x-1/2':
                  i && g,
                'dgs-ui-kit-right-[calc(100%-2px)] dgs-ui-kit-translate-x-full': i && !g,
              },
              d[n].toggler,
            ),
          }),
        }),
        e.jsxs('div', {
          className: 'dgs-ui-kit-space-y-1 -dgs-ui-kit-mt-1',
          children: [
            e.jsx('div', {
              className: t(
                d[n].label,
                'dgs-ui-kit-text-gray-700 group-hover:dgs-ui-kit-text-primary-500 dgs-ui-kit-transition-colors',
              ),
              children: u,
            }),
            e.jsx('div', {
              className: 'dgs-ui-kit-font-p3-regular dgs-ui-kit-text-gray-500',
              children: l,
            }),
          ],
        }),
      ],
    });
  };
o.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Switch',
  props: {
    checked: { required: !0, tsType: { name: 'boolean' }, description: '' },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: "(checked: SwitchProps['checked']) => void",
        signature: {
          arguments: [
            {
              type: { name: "SwitchProps['checked']", raw: "SwitchProps['checked']" },
              name: 'checked',
            },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    isIntermediate: { required: !1, tsType: { name: 'boolean' }, description: '' },
    label: { required: !1, tsType: { name: 'string' }, description: '' },
    description: { required: !1, tsType: { name: 'string' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'large' | 'small'",
        elements: [
          { name: 'literal', value: "'large'" },
          { name: 'literal', value: "'small'" },
        ],
      },
      description: '',
    },
    containerClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const b = {
    title: 'Components/Form/Switch',
    component: o,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Switch from '@dgshahr/ui-kit/Form/Switch';\nOr\nimport { Switch } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: { size: { table: { defaultValue: { summary: 'large' } } } },
  },
  h = (s) => {
    const [i, a] = k.useState(!1);
    return e.jsx(o, { ...s, checked: i, onChange: a });
  },
  r = {
    args: {
      checked: !1,
      onChange: () => {},
      size: 'large',
      label: 'عنوان',
      description: 'متن کمکی',
    },
    render: (s) => e.jsx(h, { ...s }),
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    checked: false,
    onChange: () => {},
    size: 'large',
    label: 'عنوان',
    description: 'متن کمکی'
  },
  render: args => <SwitchExample {...args} />
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
const S = ['Default'];
export { r as Default, S as __namedExportsOrder, b as default };
