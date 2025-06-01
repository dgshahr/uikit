import { j as r } from './jsx-runtime-D_zvdyIk.js';
import { c as l } from './clsx-B-dksMZM.js';
const d = {
    primary: { empty: 'dgsuikit:stroke-primary-100', filled: 'dgsuikit:stroke-primary-500' },
    secondary: { empty: 'dgsuikit:stroke-secondary-100', filled: 'dgsuikit:stroke-secondary-600' },
    gray: { empty: 'dgsuikit:stroke-gray-400', filled: 'dgsuikit:stroke-gray-50' },
  },
  f = (c) => {
    const {
        color: o = 'primary',
        current: m,
        total: s,
        size: e = 48,
        showText: p,
        strokeSize: t = 6,
        svgProps: u,
        textClassName: y,
      } = c,
      a = Math.min(Math.max(m, 0), s),
      g = (a / s) * 100,
      i = (e - t) / 2,
      n = 2 * Math.PI * i,
      k = n * (1 - g / 100);
    return r.jsxs('svg', {
      width: e,
      height: e,
      viewBox: `0 0 ${e} ${e}`,
      ...u,
      children: [
        r.jsx('circle', {
          cx: e / 2,
          cy: e / 2,
          r: i,
          className: d[o].empty,
          strokeWidth: t,
          fill: 'none',
        }),
        r.jsx('circle', {
          cx: e / 2,
          cy: e / 2,
          r: i,
          className: l(d[o].filled, 'dgsuikit:transition-all'),
          strokeWidth: t,
          fill: 'none',
          strokeDasharray: n,
          strokeDashoffset: k,
          strokeLinecap: 'round',
          transform: `rotate(-90 ${e / 2} ${e / 2})`,
        }),
        p &&
          r.jsxs('text', {
            x: '50%',
            y: '50%',
            dominantBaseline: 'middle',
            textAnchor: 'middle',
            className: l('dgsuikit:font-caption-regular dgsuikit:text-gray-600 dgsuikit:ss02', y),
            children: [a, ' از ', s],
          }),
      ],
    });
  };
f.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ProgressDoughnut',
  props: {
    color: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'secondary' | 'gray'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'secondary'" },
          { name: 'literal', value: "'gray'" },
        ],
      },
      description: '',
    },
    current: { required: !0, tsType: { name: 'number' }, description: '' },
    total: { required: !0, tsType: { name: 'number' }, description: '' },
    size: { required: !1, tsType: { name: 'number' }, description: '' },
    showText: { required: !1, tsType: { name: 'boolean' }, description: '' },
    strokeSize: { required: !1, tsType: { name: 'number' }, description: '' },
    svgProps: {
      required: !1,
      tsType: {
        name: 'SVGProps',
        elements: [{ name: 'SVGSVGElement' }],
        raw: 'SVGProps<SVGSVGElement>',
      },
      description: '',
    },
  },
};
export { f as P };
