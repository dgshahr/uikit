import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as A } from './index-CTzypqlY.js';
import { f as P } from './helpers-BLnSDN_K.js';
import { c as y } from './clsx-B-dksMZM.js';
import { I as L } from './IconArrowLeft2-DI3fgQDw.js';
import { I as U } from './IconArrowRight2-C2yC-io_.js';
const l = 24,
  h = l / 2,
  I = 'dgsuikit:appearance-none dgsuikit:bg-transparent dgsuikit:opacity-0 dgsuikit:z-10',
  R = 'dgsuikit:absolute dgsuikit:top-0 dgsuikit:-translate-y-1/2',
  S = {
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
  q = RegExp(`[${Object.keys(S).join()}]`, 'gu');
function z(i) {
  return i.replace(q, (t) => S[t]);
}
function B(i) {
  let t = typeof i == 'number' ? i.toString() : i;
  return (
    (t = t.toString()),
    (t = z(t)),
    (t = t.replace(/[^-.\d]/g, '')),
    (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, ',')),
    t
  );
}
const j = (i) => {
  const { percent: t, disabled: u, icon: c, showTooltip: m, value: d } = i;
  return e.jsxs('div', {
    className: y(
      'dgsuikit:bg-primary-500 dgsuikit:rounded-full dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:text-white dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center',
      u
        ? 'dgsuikit:!bg-gray-300'
        : 'dgsuikit:group-hover:bg-primary-400 dgsuikit:group-hover:ring-4 dgsuikit:ring-gray-300 dgsuikit:group-active:ring-0 dgsuikit:group-active:bg-primary-600 dgsuikit:transition-[background-color,box-shadow]',
    ),
    style: { right: `${t}%`, width: l, height: l },
    children: [
      c,
      m &&
        e.jsxs('div', {
          className:
            'dgsuikit:absolute dgsuikit:bottom-full dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100 dgsuikit:transition-opacity dgsuikit:z-10 dgsuikit:mb-2.5',
          children: [
            e.jsx('div', {
              className:
                'dgsuikit:flex dgsuikit:py-3 dgsuikit:px-4 dgsuikit:rounded-lg dgsuikit:bg-gray-700 dgsuikit:shadow-md dgsuikit:text-white dgsuikit:font-p2-regular dgsuikit:border dgsuikit:border-gray-300 dgsuikit:ss02',
              children: B(d),
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
j.__docgenInfo = {
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
function w(i) {
  const {
      value: t,
      wrapperClassName: u,
      min: c,
      max: m,
      step: d = 1,
      onChange: f,
      disabled: o,
      endTitle: p,
      startTitle: k,
      showTooltip: N = !0,
    } = i,
    s = Array.isArray(t),
    [a = 0, r = 0] = s ? t : [0, 0],
    g = (n) => ((n - c) / (m - c)) * 100,
    _ = (n) => {
      f(Number(n.target.value));
    },
    $ = (n) => {
      const v = Math.min(Number(n.target.value), r - d);
      f([v, r]);
    },
    M = (n) => {
      const v = Math.max(Number(n.target.value), a + d);
      f([a, v]);
    },
    T = g(s ? a : t),
    C = g(r);
  return e.jsxs('div', {
    ...(u ? { className: u } : {}),
    children: [
      e.jsxs('div', {
        className: 'dgsuikit:relative dgsuikit:group',
        children: [
          e.jsxs('div', {
            className:
              'dgsuikit:w-full dgsuikit:relative dgsuikit:bg-primary-50 dgsuikit:h-1 dgsuikit:rounded-sm dgsuikit:flex dgsuikit:items-center',
            children: [
              e.jsx('div', {
                className: y(
                  'dgsuikit:h-full dgsuikit:absolute dgsuikit:top-0 dgsuikit:rounded-sm',
                  o ? 'dgsuikit:bg-gray-300' : 'dgsuikit:bg-primary-500',
                ),
                style: { right: s ? `${g(a)}%` : '0%', width: s ? `${g(r) - g(a)}%` : `${g(t)}%` },
              }),
              e.jsx('input', {
                type: 'range',
                min: c,
                max: s ? r : m,
                step: d,
                value: s ? a : t,
                onChange: s ? $ : _,
                disabled: o,
                className: y(I, s && `${R} dgsuikit:right-0`),
                style: { width: s ? `calc(${C}% - ${l}px)` : '100%' },
              }),
              s &&
                e.jsx('input', {
                  type: 'range',
                  min: a,
                  max: m,
                  step: d,
                  value: r,
                  onChange: M,
                  disabled: o,
                  className: `${I} ${R} dgsuikit:left-0`,
                  style: { width: `calc(${100 - T}% - ${l}px)` },
                }),
            ],
          }),
          e.jsxs('div', {
            className: 'dgsuikit:absolute dgsuikit:inset-0',
            style: { width: `calc(100% - ${l}px)` },
            children: [
              e.jsx(j, {
                percent: T,
                disabled: o,
                showTooltip: N,
                value: s ? a : t,
                icon: s && e.jsx(L, { width: h, height: h }),
              }),
              s &&
                e.jsx(j, {
                  percent: C,
                  disabled: o,
                  showTooltip: N,
                  value: r,
                  icon: e.jsx(U, { width: h, height: h }),
                }),
            ],
          }),
        ],
      }),
      !!(k ?? p) &&
        e.jsxs('div', {
          className: y(
            'dgsuikit:mt-4 dgsuikit:w-full dgsuikit:flex dgsuikit:items-center dgsuikit:font-p2-medium',
            o ? 'dgsuikit:text-gray-300' : 'dgsuikit:text-gray-500',
            { 'dgsuikit:justify-between': k && p },
            { 'dgsuikit:justify-start': k && !p },
            { 'dgsuikit:justify-end': !k && p },
          ),
          children: [e.jsx('span', { children: k }), e.jsx('span', { children: p })],
        }),
    ],
  });
}
w.__docgenInfo = { description: '', methods: [], displayName: 'RangeInput' };
const W = {
    title: 'Components/Form/RangeInput',
    component: w,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport RangeInput from '@dgshahr/ui-kit/Form/RangeInput';\nOr\nimport { RangeInput } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    beforeEach: () => P({ height: '150px' }),
    argTypes: {
      value: { control: 'number', table: { type: { summary: 'number | number[]' } } },
      step: { table: { defaultValue: { summary: '1' } } },
      onChange: { table: { type: { summary: '(value: number | number[]) => void' } } },
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
  E = (i) => {
    const [t, u] = A.useState(i.value);
    return e.jsx(w, { ...i, value: t, onChange: u });
  },
  x = {
    args: { max: 100, min: 0, onChange() {}, value: 50, step: 20 },
    render: (i) => e.jsx(E, { ...i }),
  },
  b = {
    args: {
      max: 1e4,
      min: 0,
      onChange() {},
      value: [2e3, 8e3],
      wrapperClassName: 'dgsuikit:w-[200px]',
      startTitle: 'عنوان',
      endTitle: 'عنوان',
    },
    render: (i) => e.jsx(E, { ...i }),
  };
x.parameters = {
  ...x.parameters,
  docs: {
    ...x.parameters?.docs,
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
      ...x.parameters?.docs?.source,
    },
  },
};
b.parameters = {
  ...b.parameters,
  docs: {
    ...b.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    max: 10000,
    min: 0,
    onChange() {},
    value: [2000, 8000],
    wrapperClassName: 'dgsuikit:w-[200px]',
    startTitle: 'عنوان',
    endTitle: 'عنوان'
  },
  render: args => <RangeInputExample {...args} />
}`,
      ...b.parameters?.docs?.source,
    },
  },
};
const G = ['Default', 'Multiple'];
export { x as Default, b as Multiple, G as __namedExportsOrder, W as default };
