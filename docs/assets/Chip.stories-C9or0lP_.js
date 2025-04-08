import { j as i } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { I as m } from './IconArrowDown2-BBhufJ55.js';
import { c as p } from './clsx-B-dksMZM.js';
/* empty css               */ import { B as g } from './index-CLrConxc.js';
const u = (e) =>
  i.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: i.jsx('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d: 'M9.592 13.957c3.259 0 7.592.367 7.592 3.542 0 3.345-5.049 3.545-7.215 3.557h-.786C6.873 21.044 2 20.845 2 17.52c0-3.348 5.049-3.55 7.215-3.561l.26-.001zm0 1.5c-2.779 0-6.092.357-6.092 2.062 0 1.352 2.05 2.038 6.092 2.038s6.092-.693 6.092-2.058c0-1.355-2.05-2.042-6.092-2.042m9.115-1.967c2.706.405 3.273 1.658 3.273 2.637 0 .729-.315 1.716-1.818 2.285a.75.75 0 1 1-.532-1.402c.85-.322.85-.715.85-.883 0-.567-.671-.955-1.994-1.152a.75.75 0 0 1-.632-.853.76.76 0 0 1 .853-.632M9.592 2a5.14 5.14 0 0 1 5.135 5.135 5.08 5.08 0 0 1-1.487 3.622 5.08 5.08 0 0 1-3.614 1.513h-.034a5.14 5.14 0 0 1-5.136-5.135A5.14 5.14 0 0 1 9.592 2m7.088 1.124a4.03 4.03 0 0 1 3.39 3.996 4.07 4.07 0 0 1-3.482 4.005.75.75 0 0 1-.209-1.486 2.56 2.56 0 0 0 2.192-2.52 2.54 2.54 0 0 0-2.133-2.514.75.75 0 0 1 .242-1.481M9.592 3.5a3.64 3.64 0 0 0-3.636 3.635 3.64 3.64 0 0 0 3.636 3.635h.031a3.6 3.6 0 0 0 2.553-1.07 3.59 3.59 0 0 0 1.051-2.562A3.64 3.64 0 0 0 9.592 3.5',
      clipRule: 'evenodd',
    }),
  });
u.__docgenInfo = { description: '', methods: [], displayName: 'IconUser' };
function f({ size: e = 'small', filled: r, className: a, disabled: o, isActive: t }) {
  const l =
      'dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-rounded-full dgs-ui-kit-transition hover:dgs-ui-kit-ring-4 dgs-ui-kit-ring-gray-100 dgs-ui-kit-flex dgs-ui-kit-items-center',
    n = {
      small:
        'dgs-ui-kit-gap-1 dgs-ui-kit-py-1 dgs-ui-kit-px-3 dgs-ui-kit-font-p2-medium [&_svg]:dgs-ui-kit-size-4',
      large:
        'dgs-ui-kit-gap-2 dgs-ui-kit-py-2.5 dgs-ui-kit-px-5 dgs-ui-kit-font-p1-medium [&_svg]:dgs-ui-kit-size-5',
    },
    d = {
      default:
        'dgs-ui-kit-text-gray-700 hover:dgs-ui-kit-text-primary-500 dgs-ui-kit-border-gray-200 hover:dgs-ui-kit-border-gray-300',
      filled: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-500 dgs-ui-kit-border-primary-100',
    };
  return p(
    l,
    n[e],
    d[r ? 'filled' : 'default'],
    o && 'dgs-ui-kit-opacity-40 dgs-ui-kit-cursor-not-allowed',
    t && '!dgs-ui-kit-border-primary-500 !dgs-ui-kit-text-primary-500',
    a,
  );
}
const c = (e) => {
  const {
      label: r,
      rightIcon: a = null,
      leftIcon: o = null,
      badgeNumber: t,
      clickable: l,
      ...n
    } = e,
    d = l ? 'button' : 'div';
  return i.jsxs(d, {
    className: f(e),
    ...n,
    children: [a, r, t && i.jsx(g, { value: t, valueType: 'number' }), o],
  });
};
c.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Chip',
  props: {
    label: {
      required: !0,
      tsType: {
        name: 'union',
        raw: 'string | ReactNode',
        elements: [{ name: 'string' }, { name: 'ReactNode' }],
      },
      description: '',
    },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'small' | 'large'",
        elements: [
          { name: 'literal', value: "'small'" },
          { name: 'literal', value: "'large'" },
        ],
      },
      description: '',
    },
    rightIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    leftIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    filled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    badgeNumber: { required: !1, tsType: { name: 'number' }, description: '' },
    isActive: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
const w = {
    title: 'Components/Chip',
    component: c,
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
  s = { args: { label: 'برچسب', rightIcon: i.jsx(u, {}), leftIcon: i.jsx(m, {}) } };
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    label: 'برچسب',
    rightIcon: <IconUser />,
    leftIcon: <IconArrowDown2 />
  }
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
const N = ['Default'];
export { s as Default, N as __namedExportsOrder, w as default };
