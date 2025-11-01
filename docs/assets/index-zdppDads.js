'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as k } from './clsx-B-dksMZM.js';
import { r as c } from './index-CTzypqlY.js';
import { r as R } from './index-BRSOB10J.js';
import { u as _ } from './useFlipPosition-D78LAv0q.js';
/* empty css               */ const C = {
    bottom:
      'dgsuikit:right-4 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
    'bottom-right':
      'dgsuikit:left-4 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
    'bottom-center':
      'dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
    'bottom-left':
      'dgsuikit:right-4 dgsuikit:top-0 dgsuikit:-translate-y-1/2 dgsuikit:border-t dgsuikit:border-l dgsuikit:rounded-tl',
    top: 'dgsuikit:right-4 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
    'top-right':
      'dgsuikit:left-4 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
    'top-center':
      'dgsuikit:left-1/2 dgsuikit:-translate-x-1/2 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
    'top-left':
      'dgsuikit:right-4 dgsuikit:bottom-0 dgsuikit:translate-y-1/2 dgsuikit:border-b dgsuikit:border-r dgsuikit:rounded-br',
  },
  P = {
    bottom: 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:right-0',
    'bottom-right': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-0',
    'bottom-center':
      'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
    'bottom-left': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:right-0',
    top: 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:right-0',
    'top-right': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-0',
    'top-center':
      'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
    'top-left': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:right-0',
  },
  T = (n) => {
    const {
      content: a,
      footer: u,
      title: i,
      icon: e,
      className: l,
      position: s = 'top-center',
      open: o,
      ref: g,
    } = n;
    return t.jsxs('div', {
      ref: g,
      className: k(
        l,
        'dgsuikit:absolute dgsuikit:p-4 dgsuikit:flex dgsuikit:gap-2 dgsuikit:max-w-[400px] dgsuikit:bg-gray-700 dgsuikit:text-white dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-gray-300 dgsuikit:shadow-md dgsuikit:transition dgsuikit:duration-300 dgsuikit:w-max dgsuikit:z-50',
        o ? 'dgsuikit:opacity-100 dgsuikit:scale-100' : 'dgsuikit:opacity-0 dgsuikit:scale-0',
        P[s],
      ),
      children: [
        e &&
          t.jsx('span', {
            className: 'dgsuikit:shrink-0 dgsuikit:[&_svg]:size-5 dgsuikit:pt-1',
            children: e,
          }),
        t.jsxs('div', {
          className: 'dgsuikit:flex dgsuikit:flex-col dgsuikit:gap-1 dgsuikit:font-p2-regular',
          children: [i && t.jsx('div', { className: 'dgsuikit:font-h5-bold', children: i }), a, u],
        }),
        t.jsx('div', {
          className: k(
            'dgsuikit:w-4 dgsuikit:h-4 dgsuikit:bg-gray-700 dgsuikit:border-gray-300 dgsuikit:absolute dgsuikit:rotate-45',
            C[s],
          ),
        }),
      ],
    });
  };
T.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TooltipContent',
  props: {
    open: { required: !0, tsType: { name: 'boolean' }, description: '' },
    ref: {
      required: !0,
      tsType: {
        name: 'RefObject',
        elements: [
          {
            name: 'union',
            raw: 'HTMLDivElement | null',
            elements: [{ name: 'HTMLDivElement' }, { name: 'null' }],
          },
        ],
        raw: 'RefObject<HTMLDivElement | null>',
      },
      description: '',
    },
  },
  composes: ['Pick'],
};
const I = (n) => {
  const {
      children: a,
      content: u,
      className: i,
      wrapperClassName: e,
      footer: l,
      icon: s,
      position: o = 'top-center',
      title: g,
      disabled: N,
      attachToBody: m,
    } = n,
    [b, f] = c.useState(!1),
    [v, w] = c.useState(o),
    { anchorRef: p, popperRef: j } = _({
      initialPosition: o,
      onPositionChange(r) {
        w((d) => (d === r ? d : r));
      },
    });
  function h() {
    N || f(!0);
  }
  function y() {
    f(!1);
  }
  const x = t.jsx(T, {
      ref: j,
      open: b,
      title: g,
      icon: s,
      footer: l,
      className: i,
      position: v,
      content: u,
    }),
    q = c.useMemo(() => {
      if (!p.current || !m) return {};
      const { top: r, left: d, width: S, height: E } = p.current.getBoundingClientRect();
      return {
        top: `${r + window.scrollY}px`,
        left: `${d + window.scrollX}px`,
        width: `${S}px`,
        height: `${E}px`,
      };
    }, [b]);
  return t.jsxs('div', {
    ref: p,
    className: k('dgsuikit:relative', e),
    onMouseEnter: h,
    onTouchStart: h,
    onMouseLeave: y,
    onTouchEnd: y,
    children: [
      a,
      m
        ? R.createPortal(
            t.jsx('div', { className: 'dgsuikit:absolute', style: { ...q }, children: x }),
            document.body,
          )
        : x,
    ],
  });
};
I.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Tooltip',
  props: {
    position: {
      required: !1,
      tsType: {
        name: 'union',
        raw: `| 'top'
| 'bottom'
| 'top-left'
| 'top-center'
| 'top-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'`,
        elements: [
          { name: 'literal', value: "'top'" },
          { name: 'literal', value: "'bottom'" },
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
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    attachToBody: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
export { I as T };
