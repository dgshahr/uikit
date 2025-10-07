import { j as r } from './jsx-runtime-D_zvdyIk.js';
import { c as l } from './clsx-B-dksMZM.js';
const d = {
    primary: { empty: 'dgsuikit:stroke-primary-100', filled: 'dgsuikit:stroke-primary-500' },
    secondary: { empty: 'dgsuikit:stroke-secondary-100', filled: 'dgsuikit:stroke-secondary-600' },
    gray: { empty: 'dgsuikit:stroke-gray-400', filled: 'dgsuikit:stroke-gray-50' },
    warning: { empty: 'dgsuikit:stroke-warning-100', filled: 'dgsuikit:stroke-warning-500' },
  },
  f = (c) => {
    const {
        color: a = 'primary',
        current: m,
        total: t,
        size: e = 48,
        showText: u,
        strokeSize: s = 6,
        svgProps: p,
        textClassName: g,
      } = c,
      n = Math.min(Math.max(m, 0), t),
      y = (n / t) * 100,
      i = (e - s) / 2,
      o = 2 * Math.PI * i,
      k = o * (1 - y / 100);
    return r.jsxs('svg', {
      width: e,
      height: e,
      viewBox: `0 0 ${e} ${e}`,
      ...p,
      children: [
        r.jsx('circle', {
          cx: e / 2,
          cy: e / 2,
          r: i,
          className: d[a].empty,
          strokeWidth: s,
          fill: 'none',
        }),
        r.jsx('circle', {
          cx: e / 2,
          cy: e / 2,
          r: i,
          className: l(d[a].filled, 'dgsuikit:transition-all'),
          strokeWidth: s,
          fill: 'none',
          strokeDasharray: o,
          strokeDashoffset: k,
          strokeLinecap: 'round',
          transform: `rotate(-90 ${e / 2} ${e / 2})`,
        }),
        u &&
          r.jsxs('text', {
            x: '50%',
            y: '50%',
            dominantBaseline: 'middle',
            textAnchor: 'middle',
            className: l('dgsuikit:font-caption-regular dgsuikit:text-gray-600 dgsuikit:ss02', g),
            children: [n, ' از ', t],
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
        raw: "'primary' | 'secondary' | 'gray' | 'warning'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'secondary'" },
          { name: 'literal', value: "'gray'" },
          { name: 'literal', value: "'warning'" },
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
