import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as L } from './index-CTzypqlY.js';
import { f as U } from './helpers-BLnSDN_K.js';
import { c as v } from './clsx-B-dksMZM.js';
import { I as q } from './IconArrowLeft2-DI3fgQDw.js';
import { I as z } from './IconArrowRight2-C2yC-io_.js';
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
  B = RegExp(`[${Object.keys(_).join()}]`, 'gu');
function O(i) {
  return i.replace(B, (t) => _[t]);
}
function V(i) {
  let t = typeof i == 'number' ? i.toString() : i;
  return (
    (t = t.toString()),
    (t = O(t)),
    (t = t.replace(/[^-.\d]/g, '')),
    (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, ',')),
    t
  );
}
function F(i, t) {
  return t
    ? 'dgsuikit:bg-gray-300'
    : i === 'primary'
      ? 'dgsuikit:bg-primary-500 dgsuikit:group-hover:bg-primary-400 dgsuikit:group-active:bg-primary-600'
      : 'dgsuikit:bg-secondary-600 dgsuikit:group-hover:bg-secondary-500 dgsuikit:group-active:bg-secondary-700';
}
const N = (i) => {
  const { percent: t, disabled: a, icon: p, tooltip: n, value: k, color: g } = i;
  return e.jsxs('div', {
    className: v(
      'dgsuikit:rounded-full dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:text-white dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center',
      F(g, a),
      a &&
        'dgsuikit:group-hover:ring-4 dgsuikit:ring-gray-300 dgsuikit:group-active:ring-0 dgsuikit:transition-[background-color,box-shadow]',
    ),
    style: { right: `${t}%`, width: m, height: m },
    children: [
      p,
      n &&
        e.jsxs('div', {
          className:
            'dgsuikit:absolute dgsuikit:bottom-full dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100 dgsuikit:transition-opacity dgsuikit:z-10 dgsuikit:mb-2.5',
          children: [
            e.jsx('div', {
              className:
                'dgsuikit:flex dgsuikit:py-3 dgsuikit:px-4 dgsuikit:rounded-lg dgsuikit:bg-gray-700 dgsuikit:shadow-md dgsuikit:text-white dgsuikit:font-p2-regular dgsuikit:border dgsuikit:border-gray-300 dgsuikit:ss02',
              children: typeof n == 'boolean' ? V(k) : n,
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
      wrapperClassName: a,
      min: p,
      max: n,
      color: k = 'primary',
      step: g = 1,
      onChange: j,
      disabled: o,
      endTitle: y,
      startTitle: h,
      tooltip: M = !0,
    } = i,
    s = Array.isArray(t),
    [r = 0, u = 0] = s ? t : [0, 0],
    l = (d) => ((d - p) / (n - p)) * 100,
    P = (d) => {
      j(Number(d.target.value));
    },
    A = (d) => {
      const w = Math.min(Number(d.target.value), u - g);
      j([w, u]);
    },
    D = (d) => {
      const w = Math.max(Number(d.target.value), r + g);
      j([r, w]);
    },
    C = l(s ? r : t),
    I = l(u),
    R = { color: k, tooltip: M, disabled: o };
  return e.jsxs('div', {
    ...(a ? { className: a } : {}),
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
                  { 'dgsuikit:bg-gray-300': o },
                  { 'dgsuikit:bg-primary-500': k === 'primary' && !o },
                  { 'dgsuikit:bg-secondary-600': k === 'secondary' && !o },
                ),
                style: { right: s ? `${l(r)}%` : '0%', width: s ? `${l(u) - l(r)}%` : `${l(t)}%` },
              }),
              e.jsx('input', {
                type: 'range',
                min: p,
                max: s ? u : n,
                step: g,
                value: s ? r : t,
                onChange: s ? A : P,
                disabled: o,
                className: v(S, s && `${E} dgsuikit:right-0`),
                style: { width: s ? `calc(${I}% - ${m}px)` : '100%' },
              }),
              s &&
                e.jsx('input', {
                  type: 'range',
                  min: r,
                  max: n,
                  step: g,
                  value: u,
                  onChange: D,
                  disabled: o,
                  className: `${S} ${E} dgsuikit:left-0`,
                  style: { width: `calc(${100 - C}% - ${m}px)` },
                }),
            ],
          }),
          e.jsxs('div', {
            className: 'dgsuikit:absolute dgsuikit:inset-0',
            style: { width: `calc(100% - ${m}px)` },
            children: [
              e.jsx(N, {
                ...R,
                percent: C,
                value: s ? r : t,
                icon: s && e.jsx(q, { width: b, height: b }),
              }),
              s &&
                e.jsx(N, { ...R, percent: I, value: u, icon: e.jsx(z, { width: b, height: b }) }),
            ],
          }),
        ],
      }),
      !!(h ?? y) &&
        e.jsxs('div', {
          className: v(
            'dgsuikit:mt-4 dgsuikit:w-full dgsuikit:flex dgsuikit:items-center dgsuikit:font-p2-medium',
            o ? 'dgsuikit:text-gray-300' : 'dgsuikit:text-gray-500',
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
const Q = {
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
    beforeEach: () => U({ height: '150px' }),
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
      tooltip: {
        control: 'boolean',
        description: 'If true, the tooltip content will be input value.',
        table: { type: { summary: 'boolean | ReactNode' }, defaultValue: { summary: 'true' } },
      },
      wrapperClassName: { control: 'text', table: { type: { summary: 'string' } } },
    },
  },
  $ = (i) => {
    const [t, a] = L.useState(i.value);
    return e.jsx(T, { ...i, value: t, onChange: a });
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
const X = ['Default', 'Secondary', 'Multiple'];
export { c as Default, f as Multiple, x as Secondary, X as __namedExportsOrder, Q as default };
