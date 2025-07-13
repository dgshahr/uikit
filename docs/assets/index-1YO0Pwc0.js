'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as i } from './clsx-B-dksMZM.js';
import { r as l } from './index-CTzypqlY.js';
import { u as T } from './useFlipPosition-D78LAv0q.js';
/* empty css               */ const v = {
    'bottom-right':
      'dgsuikit:left-4 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
    'bottom-center':
      'dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
    'bottom-left':
      'dgsuikit:right-4 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
    'top-right':
      'dgsuikit:left-4 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
    'top-center':
      'dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
    'top-left':
      'dgsuikit:right-4 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
  },
  S = {
    'bottom-right': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-0',
    'bottom-center':
      'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
    'bottom-left': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:right-0',
    'top-right': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-0',
    'top-center':
      'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
    'top-left': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:right-0',
  },
  j = (k) => {
    const {
        children: p,
        content: c,
        className: m,
        wrapperClassName: b,
        footer: f,
        icon: e,
        position: s = 'top-center',
        title: o,
      } = k,
      [h, r] = l.useState(!1),
      [d, x] = l.useState(s),
      { anchorRef: y, popperRef: N } = T({
        initialPosition: s,
        onPositionChange(n) {
          x((g) => (g === n ? g : n));
        },
      });
    function a() {
      r(!0);
    }
    function u() {
      r(!1);
    }
    return t.jsxs('div', {
      ref: y,
      className: i('dgsuikit:relative', b),
      onMouseEnter: a,
      onTouchStart: a,
      onMouseLeave: u,
      onTouchEnd: u,
      children: [
        p,
        t.jsxs('div', {
          ref: N,
          className: i(
            m,
            'dgsuikit:absolute dgsuikit:p-4 dgsuikit:flex dgsuikit:gap-2 dgsuikit:max-w-[400px] dgsuikit:bg-gray-700 dgsuikit:text-white dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-gray-300 dgsuikit:shadow-md dgsuikit:transition dgsuikit:duration-300 dgsuikit:w-max',
            h ? 'dgsuikit:opacity-100 dgsuikit:scale-100' : 'dgsuikit:opacity-0 dgsuikit:scale-0',
            S[d],
          ),
          children: [
            e &&
              t.jsx('span', {
                className: 'dgsuikit:shrink-0 dgsuikit:[&_svg]:size-5 dgsuikit:pt-1',
                children: e,
              }),
            t.jsxs('div', {
              className: 'dgsuikit:flex dgsuikit:flex-col dgsuikit:gap-1 dgsuikit:font-p2-regular',
              children: [
                o && t.jsx('div', { className: 'dgsuikit:font-h5-bold', children: o }),
                c,
                f,
              ],
            }),
            t.jsx('div', {
              className: i(
                'dgsuikit:w-4 dgsuikit:h-4 dgsuikit:bg-gray-700 dgsuikit:border-gray-300 dgsuikit:absolute dgsuikit:rotate-45',
                v[d],
              ),
            }),
          ],
        }),
      ],
    });
  };
j.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Tooltip',
  props: {
    position: {
      required: !1,
      tsType: {
        name: 'union',
        raw: `| 'top-left'
| 'top-center'
| 'top-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'`,
        elements: [
          { name: 'literal', value: "'top-left'" },
          { name: 'literal', value: "'top-center'" },
          { name: 'literal', value: "'top-right'" },
          { name: 'literal', value: "'bottom-left'" },
          { name: 'literal', value: "'bottom-center'" },
          { name: 'literal', value: "'bottom-right'" },
        ],
      },
      description: '',
    },
    title: { required: !1, tsType: { name: 'string' }, description: '' },
    icon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    content: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    footer: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
  },
};
export { j as T };
