import { j as r } from './jsx-runtime-DEdD30eg.js';
import { c as l } from './clsx-B-dksMZM.js';
const c = {
    primary: { empty: 'dgs-ui-kit-stroke-primary-100', filled: 'dgs-ui-kit-stroke-primary-500' },
    secondary: {
      empty: 'dgs-ui-kit-stroke-secondary-100',
      filled: 'dgs-ui-kit-stroke-secondary-600',
    },
    gray: { empty: 'dgs-ui-kit-stroke-gray-400', filled: 'dgs-ui-kit-stroke-gray-50' },
  },
  f = (d) => {
    const {
        color: o = 'primary',
        current: m,
        total: s,
        size: e = 48,
        showText: p,
        strokeSize: t = 6,
        svgProps: u,
        textClassName: y,
      } = d,
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
          className: c[o].empty,
          strokeWidth: t,
          fill: 'none',
        }),
        r.jsx('circle', {
          cx: e / 2,
          cy: e / 2,
          r: i,
          className: l(c[o].filled, 'dgs-ui-kit-transition-all'),
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
            className: l('dgs-ui-kit-font-caption-regular dgs-ui-kit-text-gray-600 ss02', y),
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
