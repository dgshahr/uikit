import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as k } from './index-CTzypqlY.js';
import { c as u } from './clsx-B-dksMZM.js';
/* empty css               */ const p = (t) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: e.jsx('path', {
      fill: 'currentColor',
      d: 'M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798 5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z',
    }),
  });
p.__docgenInfo = { description: '', methods: [], displayName: 'IconStarFill' };
const f = (t) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: e.jsx('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d: 'M13.08 2.868a1.25 1.25 0 0 0-2.16 0L8.126 7.665 2.697 8.842a1.25 1.25 0 0 0-.667 2.054l3.7 4.141-.56 5.525a1.25 1.25 0 0 0 1.748 1.27L12 19.592l5.082 2.24a1.25 1.25 0 0 0 1.748-1.27l-.56-5.525 3.7-4.14a1.25 1.25 0 0 0-.667-2.055l-5.428-1.176zM12 17.523c.172 0 .344.035.504.106l4.206 1.854-.463-4.573a1.25 1.25 0 0 1 .312-.959l3.062-3.427-4.492-.973a1.25 1.25 0 0 1-.816-.592L12 4.987z',
      clipRule: 'evenodd',
    }),
  });
f.__docgenInfo = { description: '', methods: [], displayName: 'IconStarHalfFill' };
const h = (t) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: e.jsx('path', {
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1.5,
      d: 'm13.103 3.67 1.828 3.652c.18.36.528.608.927.664l4.09.59a1.211 1.211 0 0 1 .682 2.071l-2.958 2.842c-.291.277-.424.68-.354 1.076l.7 4.012a1.228 1.228 0 0 1-1.788 1.28l-3.654-1.894a1.25 1.25 0 0 0-1.147 0l-3.656 1.895a1.228 1.228 0 0 1-1.787-1.28l.7-4.013a1.2 1.2 0 0 0-.354-1.075L3.37 10.648a1.211 1.211 0 0 1 .682-2.072l4.09-.589c.399-.056.746-.304.928-.664L10.9 3.67a1.24 1.24 0 0 1 2.202 0',
      clipRule: 'evenodd',
    }),
  });
h.__docgenInfo = { description: '', methods: [], displayName: 'IconStarOutline' };
const m = (t) => {
  const { size: a, state: s, onClick: i } = t;
  let l = h;
  return (
    s === 'fill' ? (l = p) : s === 'half-fill' && (l = f),
    e.jsx(l, {
      className: u(
        'dgsuikit:hover:scale-110 dgsuikit:transition-transform',
        { 'dgsuikit:size-6': a === 'large', 'dgsuikit:size-5': a === 'small' },
        s === 'empty' ? 'dgsuikit:text-gray-200' : 'dgsuikit:text-warning-500',
        typeof i == 'function' && 'dgsuikit:cursor-pointer',
      ),
      onClick: i,
    })
  );
};
m.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'RateStar',
  props: {
    size: {
      required: !0,
      tsType: { name: "intersection['size']", raw: "RateProps['size']" },
      description: '',
    },
    state: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "'empty' | 'half-fill' | 'fill'",
        elements: [
          { name: 'literal', value: "'empty'" },
          { name: 'literal', value: "'half-fill'" },
          { name: 'literal', value: "'fill'" },
        ],
      },
      description: '',
    },
    onClick: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
  },
};
function x(t, a) {
  const s = Math.floor(a);
  return t <= s ? 'fill' : t - 1 === s && a % 1 >= 0.5 ? 'half-fill' : 'empty';
}
const d = (t) => {
  const {
    value: a,
    total: s,
    onChange: i,
    showRateNumber: l = !0,
    showStarsNumber: c,
    showTotalStars: g,
    size: r = 'large',
    className: y,
  } = t;
  return e.jsxs('div', {
    className: u(
      'dgsuikit:flex dgsuikit:gap-2',
      g && c ? 'dgsuikit:items-start' : 'dgsuikit:items-center',
      y,
    ),
    children: [
      g
        ? e.jsx('div', {
            className:
              'dgsuikit:flex dgsuikit:flex-row-reverse dgsuikit:items-center dgsuikit:gap-1',
            children: Array(s)
              .keys()
              .map((n) =>
                e.jsxs(
                  'div',
                  {
                    className:
                      'dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:justify-center',
                    children: [
                      e.jsx(m, { size: r, state: x(n + 1, a), onClick: () => i && i(n + 1) }),
                      c &&
                        e.jsx('span', {
                          className:
                            'dgsuikit:mt-0.5 dgsuikit:font-caption-regular dgsuikit:ss02 dgsuikit:text-gray-500',
                          children: n + 1,
                        }),
                    ],
                  },
                  n,
                ),
              ),
          })
        : e.jsx(m, { size: r, state: 'fill' }),
      l &&
        e.jsxs('div', {
          className: 'dgsuikit:flex dgsuikit:items-center dgsuikit:ss02',
          children: [
            e.jsx('span', {
              className: u('dgsuikit:text-primary-400 dgsuikit:ml-1', {
                'dgsuikit:font-h2-bold dgsuikit:leading-7': r === 'large',
                'dgsuikit:font-h5-bold dgsuikit:leading-6': r === 'small',
              }),
              children: a <= s ? a : s,
            }),
            e.jsxs('span', {
              className: u('dgsuikit:text-gray-400', {
                'dgsuikit:font-h5-bold': r === 'large',
                'dgsuikit:font-h6-bold': r === 'small',
              }),
              children: ['از ', s],
            }),
          ],
        }),
    ],
  });
};
d.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Rate',
  props: {
    value: { required: !0, tsType: { name: 'number' }, description: '' },
    total: { required: !0, tsType: { name: 'number' }, description: '' },
    onChange: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: number) => void',
        signature: {
          arguments: [{ type: { name: 'number' }, name: 'value' }],
          return: { name: 'void' },
        },
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
    showStarsNumber: { required: !1, tsType: { name: 'boolean' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const R = {
    title: 'Components/Rate',
    component: d,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Rate from '@dgshahr/ui-kit/Rate';\nOr\nimport { Rate } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      size: {
        control: 'select',
        options: ['large', 'small'],
        table: { type: { summary: 'large, small' }, defaultValue: { summary: 'large' } },
      },
      showRateNumber: {
        control: 'boolean',
        description: "should be true if 'showTotalStars' is false",
        table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
      },
      showTotalStars: {
        control: 'boolean',
        description: "should be true if 'showRateNumber' is false",
        table: { type: { summary: 'boolean' } },
      },
      total: { control: 'number', table: { type: { summary: 'number' } } },
      value: {
        control: 'number',
        description: 'Accepts integer numbers and numbers with a decimal part bigger than 0.5.',
        table: { type: { summary: 'number' } },
      },
      showStarsNumber: { control: 'boolean', table: { type: { summary: 'boolean' } } },
      onChange: { table: { type: { summary: '(value: number) => void' } } },
      className: { control: 'text', table: { type: { summary: 'string' } } },
    },
  },
  b = (t) => {
    const [a, s] = k.useState(t.value);
    return e.jsx(d, { ...t, value: a, onChange: (i) => s(i) });
  },
  o = {
    args: { total: 5, value: 3, showRateNumber: !0, showTotalStars: !0, size: 'large' },
    render: (t) => e.jsx(b, { ...t }),
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    total: 5,
    value: 3,
    showRateNumber: true,
    showTotalStars: true,
    size: 'large'
  },
  render: args => <DefaultRateExample {...args} />
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const S = ['Default'];
export { o as Default, S as __namedExportsOrder, R as default };
