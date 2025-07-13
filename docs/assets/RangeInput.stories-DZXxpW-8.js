import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as D } from './index-CTzypqlY.js';
import { f as L } from './helpers-BLnSDN_K.js';
import { c as v } from './clsx-B-dksMZM.js';
import { I as U } from './IconArrowLeft2-DI3fgQDw.js';
import { I as q } from './IconArrowRight2-C2yC-io_.js';
const m = 24,
  b = m / 2,
  S = 'dgsuikit:appearance-none dgsuikit:bg-transparent dgsuikit:opacity-0 dgsuikit:z-10',
  E = 'dgsuikit:absolute dgsuikit:top-0 dgsuikit:-translate-y-1/2',
  _ = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '٠': '0',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '𝟎': '0',
    '𝟏': '1',
    '𝟐': '2',
    '𝟑': '3',
    '𝟒': '4',
    '𝟓': '5',
    '𝟔': '6',
    '𝟕': '7',
    '𝟖': '8',
    '𝟗': '9',
  },
  z = RegExp(`[${Object.keys(_).join()}]`, 'gu');
function B(i) {
  return i.replace(z, (t) => _[t]);
}
function O(i) {
  let t = typeof i == 'number' ? i.toString() : i;
  return (
    (t = t.toString()),
    (t = B(t)),
    (t = t.replace(/[^-.\d]/g, '')),
    (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, ',')),
    t
  );
}
function V(i, t) {
  return t
    ? 'dgsuikit:bg-gray-300'
    : i === 'primary'
      ? 'dgsuikit:bg-primary-500 dgsuikit:group-hover:bg-primary-400 dgsuikit:group-active:bg-primary-600'
      : 'dgsuikit:bg-secondary-600 dgsuikit:group-hover:bg-secondary-500 dgsuikit:group-active:bg-secondary-700';
}
const N = (i) => {
  const { percent: t, disabled: n, icon: p, showTooltip: k, value: d, color: g } = i;
  return e.jsxs('div', {
    className: v(
      'dgsuikit:rounded-full dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:text-white dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center',
      V(g, n),
      n &&
        'dgsuikit:group-hover:ring-4 dgsuikit:ring-gray-300 dgsuikit:group-active:ring-0 dgsuikit:transition-[background-color,box-shadow]',
    ),
    style: { right: `${t}%`, width: m, height: m },
    children: [
      p,
      k &&
        e.jsxs('div', {
          className:
            'dgsuikit:absolute dgsuikit:bottom-full dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100 dgsuikit:transition-opacity dgsuikit:z-10 dgsuikit:mb-2.5',
          children: [
            e.jsx('div', {
              className:
                'dgsuikit:flex dgsuikit:py-3 dgsuikit:px-4 dgsuikit:rounded-lg dgsuikit:bg-gray-700 dgsuikit:shadow-md dgsuikit:text-white dgsuikit:font-p2-regular dgsuikit:border dgsuikit:border-gray-300 dgsuikit:ss02',
              children: O(d),
            }),
            e.jsx('div', {
              className:
                'dgsuikit:w-4 dgsuikit:h-4 dgsuikit:bg-gray-700 dgsuikit:border-gray-300 dgsuikit:absolute dgsuikit:rotate-45 dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
            }),
          ],
        }),
    ],
  });
};
N.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'RangeThumb',
  props: {
    percent: { required: !0, tsType: { name: 'number' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    icon: {
      required: !1,
      tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
      description: '',
    },
    value: { required: !0, tsType: { name: 'number' }, description: '' },
  },
  composes: ['Pick'],
};
function T(i) {
  const {
      value: t,
      wrapperClassName: n,
      min: p,
      max: k,
      color: d = 'primary',
      step: g = 1,
      onChange: j,
      disabled: r,
      endTitle: y,
      startTitle: h,
      showTooltip: C = !0,
    } = i,
    s = Array.isArray(t),
    [a = 0, o = 0] = s ? t : [0, 0],
    l = (u) => ((u - p) / (k - p)) * 100,
    M = (u) => {
      j(Number(u.target.value));
    },
    A = (u) => {
      const w = Math.min(Number(u.target.value), o - g);
      j([w, o]);
    },
    P = (u) => {
      const w = Math.max(Number(u.target.value), a + g);
      j([a, w]);
    },
    I = l(s ? a : t),
    R = l(o);
  return e.jsxs('div', {
    ...(n ? { className: n } : {}),
    children: [
      e.jsxs('div', {
        className: 'dgsuikit:relative dgsuikit:group',
        children: [
          e.jsxs('div', {
            className:
              'dgsuikit:w-full dgsuikit:relative dgsuikit:bg-primary-50 dgsuikit:h-1 dgsuikit:rounded-sm dgsuikit:flex dgsuikit:items-center',
            children: [
              e.jsx('div', {
                className: v(
                  'dgsuikit:h-full dgsuikit:absolute dgsuikit:top-0 dgsuikit:rounded-sm',
                  { 'dgsuikit:bg-gray-300': r },
                  { 'dgsuikit:bg-primary-500': d === 'primary' && !r },
                  { 'dgsuikit:bg-secondary-600': d === 'secondary' && !r },
                ),
                style: { right: s ? `${l(a)}%` : '0%', width: s ? `${l(o) - l(a)}%` : `${l(t)}%` },
              }),
              e.jsx('input', {
                type: 'range',
                min: p,
                max: s ? o : k,
                step: g,
                value: s ? a : t,
                onChange: s ? A : M,
                disabled: r,
                className: v(S, s && `${E} dgsuikit:right-0`),
                style: { width: s ? `calc(${R}% - ${m}px)` : '100%' },
              }),
              s &&
                e.jsx('input', {
                  type: 'range',
                  min: a,
                  max: k,
                  step: g,
                  value: o,
                  onChange: P,
                  disabled: r,
                  className: `${S} ${E} dgsuikit:left-0`,
                  style: { width: `calc(${100 - I}% - ${m}px)` },
                }),
            ],
          }),
          e.jsxs('div', {
            className: 'dgsuikit:absolute dgsuikit:inset-0',
            style: { width: `calc(100% - ${m}px)` },
            children: [
              e.jsx(N, {
                color: d,
                percent: I,
                disabled: r,
                showTooltip: C,
                value: s ? a : t,
                icon: s && e.jsx(U, { width: b, height: b }),
              }),
              s &&
                e.jsx(N, {
                  color: d,
                  percent: R,
                  disabled: r,
                  showTooltip: C,
                  value: o,
                  icon: e.jsx(q, { width: b, height: b }),
                }),
            ],
          }),
        ],
      }),
      !!(h ?? y) &&
        e.jsxs('div', {
          className: v(
            'dgsuikit:mt-4 dgsuikit:w-full dgsuikit:flex dgsuikit:items-center dgsuikit:font-p2-medium',
            r ? 'dgsuikit:text-gray-300' : 'dgsuikit:text-gray-500',
            { 'dgsuikit:justify-between': h && y },
            { 'dgsuikit:justify-start': h && !y },
            { 'dgsuikit:justify-end': !h && y },
          ),
          children: [e.jsx('span', { children: h }), e.jsx('span', { children: y })],
        }),
    ],
  });
}
T.__docgenInfo = { description: '', methods: [], displayName: 'RangeInput' };
const K = {
    title: 'Components/Form/RangeInput',
    component: T,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport RangeInput from '@dgshahr/ui-kit/Form/RangeInput';\nOr\nimport { RangeInput } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    beforeEach: () => L({ height: '150px' }),
    argTypes: {
      value: { control: 'number', table: { type: { summary: 'number | number[]' } } },
      step: { table: { defaultValue: { summary: '1' } } },
      onChange: { table: { type: { summary: '(value: number | number[]) => void' } } },
      color: {
        control: 'select',
        options: ['primary', 'secondary'],
        table: {
          type: { summary: "'primary' | 'secondary'" },
          defaultValue: { summary: 'primary' },
        },
      },
      disabled: { control: 'boolean', table: { type: { summary: 'boolean' } } },
      endTitle: { control: 'text', table: { type: { summary: 'string' } } },
      startTitle: { control: 'text', table: { type: { summary: 'string' } } },
      showTooltip: {
        control: 'boolean',
        table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
      },
      wrapperClassName: { control: 'text', table: { type: { summary: 'string' } } },
    },
  },
  $ = (i) => {
    const [t, n] = D.useState(i.value);
    return e.jsx(T, { ...i, value: t, onChange: n });
  },
  c = {
    args: { max: 100, min: 0, onChange() {}, value: 50, step: 20 },
    render: (i) => e.jsx($, { ...i }),
  },
  x = { ...c, args: { ...c.args, color: 'secondary' } },
  f = {
    args: {
      max: 1e4,
      min: 0,
      onChange() {},
      value: [2e3, 8e3],
      wrapperClassName: 'dgsuikit:w-[200px]',
      startTitle: 'عنوان',
      endTitle: 'عنوان',
      color: 'primary',
    },
    render: (i) => e.jsx($, { ...i }),
  };
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    max: 100,
    min: 0,
    onChange() {},
    value: 50,
    step: 20
  },
  render: args => <RangeInputExample {...args} />
}`,
      ...c.parameters?.docs?.source,
    },
  },
};
x.parameters = {
  ...x.parameters,
  docs: {
    ...x.parameters?.docs,
    source: {
      originalSource: `{
  ...Default,
  args: {
    ...Default.args,
    color: 'secondary'
  }
}`,
      ...x.parameters?.docs?.source,
    },
  },
};
f.parameters = {
  ...f.parameters,
  docs: {
    ...f.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    max: 10000,
    min: 0,
    onChange() {},
    value: [2000, 8000],
    wrapperClassName: 'dgsuikit:w-[200px]',
    startTitle: 'عنوان',
    endTitle: 'عنوان',
    color: 'primary'
  },
  render: args => <RangeInputExample {...args} />
}`,
      ...f.parameters?.docs?.source,
    },
  },
};
const Q = ['Default', 'Secondary', 'Multiple'];
export { c as Default, f as Multiple, x as Secondary, Q as __namedExportsOrder, K as default };
