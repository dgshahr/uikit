import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as O } from './index-CTzypqlY.js';
import { f as U } from './helpers-BL3Yl0VC.js';
import { c as x } from './clsx-B-dksMZM.js';
import { I as V } from './IconArrowLeft2-DI3fgQDw.js';
import { I as q } from './IconArrowRight2-C2yC-io_.js';
const c = 24,
  f = c / 2,
  R = 'dgsuikit:appearance-none dgsuikit:bg-transparent dgsuikit:opacity-0 dgsuikit:z-10',
  E = 'dgsuikit:absolute dgsuikit:top-0 dgsuikit:-translate-y-1/2',
  B = {
    small: 'dgsuikit:py-2 dgsuikit:px-3 dgsuikit:text-xs',
    medium: 'dgsuikit:py-3 dgsuikit:px-4 dgsuikit:text-sm',
    large: 'dgsuikit:py-4 dgsuikit:px-5 dgsuikit:text-base',
    xLarge: 'dgsuikit:py-5 dgsuikit:px-6 dgsuikit:text-2xl',
  },
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
  F = RegExp(`[${Object.keys(_).join()}]`, 'gu');
function Z(i) {
  return i.replace(F, (t) => _[t]);
}
function H(i) {
  let t = typeof i == 'number' ? i.toString() : i;
  return (
    (t = t.toString()),
    (t = Z(t)),
    (t = t.replace(/[^-.\d]/g, '')),
    (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, ',')),
    t
  );
}
function W(i, t) {
  return t
    ? 'dgsuikit:bg-gray-300'
    : i === 'primary'
      ? 'dgsuikit:bg-primary-500 dgsuikit:group-hover:bg-primary-400 dgsuikit:group-active:bg-primary-600'
      : 'dgsuikit:bg-secondary-600 dgsuikit:group-hover:bg-secondary-500 dgsuikit:group-active:bg-secondary-700';
}
const w = (i) => {
  const {
    percent: t,
    disabled: n,
    icon: p,
    tooltip: o,
    value: k,
    color: g,
    tooltipSize: y = 'medium',
    tooltipClassName: r,
  } = i;
  return e.jsxs('div', {
    className: x(
      'dgsuikit:rounded-full dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:text-white dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center',
      W(g, n),
      n &&
        'dgsuikit:group-hover:ring-4 dgsuikit:ring-gray-300 dgsuikit:group-active:ring-0 dgsuikit:transition-[background-color,box-shadow]',
    ),
    style: { right: `${t}%`, width: c, height: c },
    children: [
      p,
      o &&
        e.jsxs('div', {
          className:
            'dgsuikit:absolute dgsuikit:bottom-full dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100 dgsuikit:transition-opacity dgsuikit:z-10 dgsuikit:mb-2.5',
          children: [
            e.jsx('div', {
              className: x(
                'dgsuikit:flex dgsuikit:rounded-lg dgsuikit:bg-gray-700 dgsuikit:shadow-md dgsuikit:text-white dgsuikit:font-p2-regular dgsuikit:border dgsuikit:border-gray-300 dgsuikit:ss02',
                B[y],
                r,
              ),
              children: typeof o == 'boolean' ? H(k) : o,
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
w.__docgenInfo = {
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
      max: o,
      color: k = 'primary',
      step: g = 1,
      onChange: y,
      disabled: r,
      endTitle: h,
      startTitle: b,
      tooltip: M = !0,
      tooltipSize: P = 'medium',
      tooltipClassName: z,
    } = i,
    s = Array.isArray(t),
    [a = 0, u = 0] = s ? t : [0, 0],
    l = (d) => ((d - p) / (o - p)) * 100,
    L = (d) => {
      y(Number(d.target.value));
    },
    A = (d) => {
      const N = Math.min(Number(d.target.value), u - g);
      y([N, u]);
    },
    D = (d) => {
      const N = Math.max(Number(d.target.value), a + g);
      y([a, N]);
    },
    C = l(s ? a : t),
    I = l(u),
    S = { color: k, tooltip: M, disabled: r, tooltipSize: P, tooltipClassName: z };
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
                className: x(
                  'dgsuikit:h-full dgsuikit:absolute dgsuikit:top-0 dgsuikit:rounded-sm',
                  { 'dgsuikit:bg-gray-300': r },
                  { 'dgsuikit:bg-primary-500': k === 'primary' && !r },
                  { 'dgsuikit:bg-secondary-600': k === 'secondary' && !r },
                ),
                style: { right: s ? `${l(a)}%` : '0%', width: s ? `${l(u) - l(a)}%` : `${l(t)}%` },
              }),
              e.jsx('input', {
                type: 'range',
                min: p,
                max: s ? u : o,
                step: g,
                value: s ? a : t,
                onChange: s ? A : L,
                disabled: r,
                className: x(R, s && `${E} dgsuikit:right-0`),
                style: { width: s ? `calc(${I}% - ${c}px)` : '100%' },
              }),
              s &&
                e.jsx('input', {
                  type: 'range',
                  min: a,
                  max: o,
                  step: g,
                  value: u,
                  onChange: D,
                  disabled: r,
                  className: `${R} ${E} dgsuikit:left-0`,
                  style: { width: `calc(${100 - C}% - ${c}px)` },
                }),
            ],
          }),
          e.jsxs('div', {
            className: 'dgsuikit:absolute dgsuikit:inset-0',
            style: { width: `calc(100% - ${c}px)` },
            children: [
              e.jsx(w, {
                ...S,
                percent: C,
                value: s ? a : t,
                icon: s && e.jsx(V, { width: f, height: f }),
              }),
              s &&
                e.jsx(w, { ...S, percent: I, value: u, icon: e.jsx(q, { width: f, height: f }) }),
            ],
          }),
        ],
      }),
      !!(b ?? h) &&
        e.jsxs('div', {
          className: x(
            'dgsuikit:mt-4 dgsuikit:w-full dgsuikit:flex dgsuikit:items-center dgsuikit:font-p2-medium',
            r ? 'dgsuikit:text-gray-300' : 'dgsuikit:text-gray-500',
            { 'dgsuikit:justify-between': b && h },
            { 'dgsuikit:justify-start': b && !h },
            { 'dgsuikit:justify-end': !b && h },
          ),
          children: [e.jsx('span', { children: b }), e.jsx('span', { children: h })],
        }),
    ],
  });
}
T.__docgenInfo = { description: '', methods: [], displayName: 'RangeInput' };
const tt = {
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
      tooltipSize: {
        control: 'select',
        options: ['small', 'medium', 'large'],
        description: 'Size of the tooltip',
        table: {
          type: { summary: "'small' | 'medium' | 'large'" },
          defaultValue: { summary: 'medium' },
        },
      },
      wrapperClassName: { control: 'text', table: { type: { summary: 'string' } } },
    },
  },
  $ = (i) => {
    const [t, n] = O.useState(i.value);
    return e.jsx(T, { ...i, value: t, onChange: n });
  },
  m = {
    args: { max: 100, min: 0, onChange() {}, value: 50, step: 20 },
    render: (i) => e.jsx($, { ...i }),
  },
  v = { ...m, args: { ...m.args, color: 'secondary' } },
  j = {
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
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
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
      ...m.parameters?.docs?.source,
    },
  },
};
v.parameters = {
  ...v.parameters,
  docs: {
    ...v.parameters?.docs,
    source: {
      originalSource: `{
  ...Default,
  args: {
    ...Default.args,
    color: 'secondary'
  }
}`,
      ...v.parameters?.docs?.source,
    },
  },
};
j.parameters = {
  ...j.parameters,
  docs: {
    ...j.parameters?.docs,
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
      ...j.parameters?.docs?.source,
    },
  },
};
const et = ['Default', 'Secondary', 'Multiple'];
export { m as Default, j as Multiple, v as Secondary, et as __namedExportsOrder, tt as default };
