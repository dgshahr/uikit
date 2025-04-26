'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as i } from './clsx-B-dksMZM.js';
import { r as l } from './index-CTzypqlY.js';
import { u as T } from './useFlipPosition-Eiz29amO.js';
/* empty css               */ const v = {
    'bottom-right':
      'dgs-ui-kit-left-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
    'bottom-center':
      'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
    'bottom-left':
      'dgs-ui-kit-right-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
    'top-right':
      'dgs-ui-kit-left-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
    'top-center':
      'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
    'top-left':
      'dgs-ui-kit-right-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
  },
  S = {
    'bottom-right': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
    'bottom-center':
      'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
    'bottom-left': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
    'top-right': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
    'top-center':
      'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
    'top-left': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
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
      className: i('dgs-ui-kit-relative', b),
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
            'dgs-ui-kit-absolute dgs-ui-kit-p-4 dgs-ui-kit-flex dgs-ui-kit-gap-2 dgs-ui-kit-max-w-[400px] dgs-ui-kit-bg-gray-700 dgs-ui-kit-text-white dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-gray-300 dgs-ui-kit-shadow-md dgs-ui-kit-transition dgs-ui-kit-duration-300 dgs-ui-kit-w-max',
            h
              ? 'dgs-ui-kit-opacity-100 dgs-ui-kit-scale-100'
              : 'dgs-ui-kit-opacity-0 dgs-ui-kit-scale-0',
            S[d],
          ),
          children: [
            e &&
              t.jsx('span', {
                className: 'dgs-ui-kit-shrink-0 [&_svg]:dgs-ui-kit-size-5 dgs-ui-kit-pt-1',
                children: e,
              }),
            t.jsxs('div', {
              className:
                'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-1 dgs-ui-kit-font-p2-regular',
              children: [
                o && t.jsx('div', { className: 'dgs-ui-kit-font-h5-bold', children: o }),
                c,
                f,
              ],
            }),
            t.jsx('div', {
              className: i(
                'dgs-ui-kit-w-4 dgs-ui-kit-h-4 dgs-ui-kit-bg-gray-700 dgs-ui-kit-border-gray-300 dgs-ui-kit-absolute dgs-ui-kit-rotate-45',
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
