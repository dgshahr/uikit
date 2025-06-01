import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as k } from './index-CTzypqlY.js';
import { c as t } from './clsx-B-dksMZM.js';
/* empty css               */ const d = {
    large: {
      switch: 'dgsuikit:w-11 dgsuikit:h-6',
      label: 'dgsuikit:font-p1-medium',
      toggler: 'dgsuikit:size-5',
    },
    small: {
      switch: 'dgsuikit:w-9 dgsuikit:h-5',
      label: 'dgsuikit:font-p2-medium',
      toggler: 'dgsuikit:size-4',
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
      className: t('dgsuikit:flex dgsuikit:gap-x-2 dgsuikit:group', c && 'dgsuikit:opacity-50', m),
      onClick: () => a(!i),
      children: [
        e.jsx('div', {
          className: t(
            'dgsuikit:relative dgsuikit:rounded-xl dgsuikit:transition',
            'dgsuikit:group-hover:ring-4 dgsuikit:group-hover:ring-gray-100',
            'dgsuikit:group-focus:ring-offset-1 dgsuikit:group-focus:ring-offset-white dgsuikit:group-focus:ring-4 dgsuikit:group-focus:ring-primary-300',
            i ? 'dgsuikit:bg-primary-500' : 'dgsuikit:bg-gray-300',
            d[n].switch,
            p,
          ),
          children: e.jsx('div', {
            className: t(
              'dgsuikit:bg-white dgsuikit:rounded-full dgsuikit:transition-all dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:right-0.5 dgsuikit:left-0.5',
              {
                'dgsuikit:left-[calc(100%-2px)]': !i,
                'dgsuikit:!w-3 dgsuikit:!h-0.5 dgsuikit:left-1/2 dgsuikit:right-1/2 dgsuikit:translate-x-1/2':
                  i && g,
                'dgsuikit:right-[calc(100%-2px)] dgsuikit:translate-x-full': i && !g,
              },
              d[n].toggler,
            ),
          }),
        }),
        e.jsxs('div', {
          className: 'dgsuikit:space-y-1 dgsuikit:-mt-1',
          children: [
            e.jsx('div', {
              className: t(
                d[n].label,
                'dgsuikit:text-gray-700 dgsuikit:group-hover:text-primary-500 dgsuikit:transition-colors',
              ),
              children: u,
            }),
            e.jsx('div', {
              className: 'dgsuikit:font-p3-regular dgsuikit:text-gray-500',
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
