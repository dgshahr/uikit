import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as A } from './index-CTzypqlY.js';
import { f as P } from './helpers-jvLsOI0h.js';
import { c as y } from './clsx-B-dksMZM.js';
import { I as L } from './IconArrowLeft2-DI3fgQDw.js';
import { I as U } from './IconArrowRight2-C2yC-io_.js';
const l = 24,
  h = l / 2,
  I = 'dgs-ui-kit-appearance-none dgs-ui-kit-bg-transparent dgs-ui-kit-opacity-0 dgs-ui-kit-z-10',
  R = 'dgs-ui-kit-absolute dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2',
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
      'dgs-ui-kit-bg-primary-500 dgs-ui-kit-rounded-full dgs-ui-kit-absolute dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-text-white dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center',
      u
        ? '!dgs-ui-kit-bg-gray-300'
        : 'group-hover:dgs-ui-kit-bg-primary-400 group-hover:dgs-ui-kit-ring-4 dgs-ui-kit-ring-gray-300 group-active:dgs-ui-kit-ring-0 group-active:dgs-ui-kit-bg-primary-600 dgs-ui-kit-transition-[background-color,box-shadow]',
    ),
    style: { right: `${t}%`, width: l, height: l },
    children: [
      c,
      m &&
        e.jsxs('div', {
          className:
            'dgs-ui-kit-absolute dgs-ui-kit-bottom-full dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-items-center dgs-ui-kit-opacity-0 group-hover:dgs-ui-kit-opacity-100 dgs-ui-kit-transition-opacity dgs-ui-kit-z-10 dgs-ui-kit-mb-2.5',
          children: [
            e.jsx('div', {
              className:
                'dgs-ui-kit-flex dgs-ui-kit-py-3 dgs-ui-kit-px-4 dgs-ui-kit-rounded-lg dgs-ui-kit-bg-gray-700 dgs-ui-kit-shadow-md dgs-ui-kit-text-white dgs-ui-kit-font-p2-regular dgs-ui-kit-border dgs-ui-kit-border-gray-300 ss02',
              children: B(d),
            }),
            e.jsx('div', {
              className:
                'dgs-ui-kit-w-4 dgs-ui-kit-h-4 dgs-ui-kit-bg-gray-700 dgs-ui-kit-border-gray-300 dgs-ui-kit-absolute dgs-ui-kit-rotate-45 dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
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
        className: 'dgs-ui-kit-relative dgs-ui-kit-group',
        children: [
          e.jsxs('div', {
            className:
              'dgs-ui-kit-w-full dgs-ui-kit-relative dgs-ui-kit-bg-primary-50 dgs-ui-kit-h-1 dgs-ui-kit-rounded-sm dgs-ui-kit-flex dgs-ui-kit-items-center',
            children: [
              e.jsx('div', {
                className: y(
                  'dgs-ui-kit-h-full dgs-ui-kit-absolute dgs-ui-kit-top-0 dgs-ui-kit-rounded-sm',
                  o ? 'dgs-ui-kit-bg-gray-300' : 'dgs-ui-kit-bg-primary-500',
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
                className: y(I, s && `${R} dgs-ui-kit-right-0`),
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
                  className: `${I} ${R} dgs-ui-kit-left-0`,
                  style: { width: `calc(${100 - T}% - ${l}px)` },
                }),
            ],
          }),
          e.jsxs('div', {
            className: 'dgs-ui-kit-absolute dgs-ui-kit-inset-0',
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
            'dgs-ui-kit-mt-4 dgs-ui-kit-w-full dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-font-p2-medium',
            o ? 'dgs-ui-kit-text-gray-300' : 'dgs-ui-kit-text-gray-500',
            { 'dgs-ui-kit-justify-between': k && p },
            { 'dgs-ui-kit-justify-start': k && !p },
            { 'dgs-ui-kit-justify-end': !k && p },
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
      wrapperClassName: 'dgs-ui-kit-w-[200px]',
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
    wrapperClassName: 'dgs-ui-kit-w-[200px]',
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
