'use client';
import { j as o } from './jsx-runtime-D_zvdyIk.js';
import { c as k } from './clsx-B-dksMZM.js';
import { r as P } from './index-CTzypqlY.js';
import { I } from './IconArrowLeft2-DI3fgQDw.js';
import { I as j } from './IconArrowRight2-C2yC-io_.js';
import { B as y } from './index-CuufJE65.js';
/* empty css               */ const m = '...';
function p(a, g) {
  const n = g - a + 1;
  return Array.from({ length: n }, (d, t) => t + a);
}
function C({ totalCount: a, pageSize: g, siblingCount: n, currentPage: d }) {
  const t = Math.ceil(a / g);
  if (n + 5 >= t) return p(1, t);
  const i = Math.max(d - n, 1),
    l = Math.min(d + n, t),
    c = i > 2,
    s = l < t - 1,
    f = 1,
    u = t;
  if (!c && s) {
    let r = 2 + n;
    return i > 1 && (r += 1), [...p(1, r), m, t];
  }
  if (c && !s) {
    let r = 2 + n;
    l < t && (r += 1);
    const e = p(t - r + 1, t);
    return [f, m, ...e];
  }
  const h = p(i, l);
  return [f, m, ...h, m, u];
}
const v = (a) => {
  const {
      totalCount: g,
      pageSize: n,
      onPageChange: d,
      siblingCount: t = 1,
      defaultCurrent: x = 1,
      navigationButtonsWithText: i = !0,
      hideOnSinglePage: l,
      className: c,
    } = a,
    [s, f] = P.useState(x),
    u = C({ totalCount: g, pageSize: n, siblingCount: t, currentPage: s }),
    h = u[u.length - 1];
  if (l && u.length < 2) return null;
  function r(e) {
    typeof d == 'function' && d(e), f(e);
  }
  return o.jsxs('div', {
    className: k(
      'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-w-full dgs-ui-kit-px-4 dgs-ui-kit-text-gray-600',
      c,
    ),
    children: [
      o.jsx(y, {
        disabled: s === 1,
        onClick: () => r(s - 1),
        rightIcon: o.jsx(j, {}),
        variant: i ? 'text' : 'secondary',
        size: i ? 'medium' : 'small',
        children: i && 'صفحه قبل',
      }),
      o.jsx('div', {
        className:
          'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 md:dgs-ui-kit-gap-x-4',
        children: u.map((e, b) =>
          typeof e == 'string'
            ? o.jsx('div', { children: m }, `${e}-${b}`)
            : o.jsx(
                'button',
                {
                  className: k(
                    'ss02 dgs-ui-kit-w-9 dgs-ui-kit-h-9 md:dgs-ui-kit-w-11 md:dgs-ui-kit-h-11 dgs-ui-kit-flex dgs-ui-kit-justify-center dgs-ui-kit-items-center dgs-ui-kit-font-h6-bold md:dgs-ui-kit-font-h5-bold dgs-ui-kit-transition dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-border-transparent dgs-ui-kit-rounded-lg',
                    e === s
                      ? 'dgs-ui-kit-bg-primary-500 dgs-ui-kit-text-white'
                      : 'hover:dgs-ui-kit-text-primary-500 hover:dgs-ui-kit-border-primary-200',
                    c,
                  ),
                  onClick: () => r(e),
                  children: e,
                },
                e,
              ),
        ),
      }),
      o.jsx(y, {
        disabled: s === h,
        onClick: () => r(s + 1),
        leftIcon: o.jsx(I, {}),
        variant: i ? 'text' : 'secondary',
        size: i ? 'medium' : 'small',
        children: i && 'صفحه بعد',
      }),
    ],
  });
};
v.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Pagination',
  props: {
    totalCount: { required: !0, tsType: { name: 'number' }, description: '' },
    pageSize: { required: !0, tsType: { name: 'number' }, description: '' },
    onPageChange: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(page: number) => void',
        signature: {
          arguments: [{ type: { name: 'number' }, name: 'page' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    siblingCount: { required: !1, tsType: { name: 'number' }, description: '' },
    defaultCurrent: { required: !1, tsType: { name: 'number' }, description: '' },
    navigationButtonsWithText: { required: !1, tsType: { name: 'boolean' }, description: '' },
    hideOnSinglePage: { required: !1, tsType: { name: 'boolean' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { v as P };
