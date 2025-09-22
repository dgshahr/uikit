'use client';
import { j as o } from './jsx-runtime-D_zvdyIk.js';
import { c as x } from './clsx-B-dksMZM.js';
import { r as P } from './index-CTzypqlY.js';
import { I } from './IconArrowLeft2-DI3fgQDw.js';
import { I as j } from './IconArrowRight2-C2yC-io_.js';
import { B as y } from './index-PtbI40vT.js';
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
      defaultCurrent: k = 1,
      navigationButtonsWithText: i = !0,
      hideOnSinglePage: l,
      className: c,
    } = a,
    [s, f] = P.useState(k),
    u = C({ totalCount: g, pageSize: n, siblingCount: t, currentPage: s }),
    h = u[u.length - 1];
  if (l && u.length < 2) return null;
  function r(e) {
    typeof d == 'function' && d(e), f(e);
  }
  return o.jsxs('div', {
    className: x(
      'dgsuikit:flex dgsuikit:justify-between dgsuikit:w-full dgsuikit:px-4 dgsuikit:text-gray-600',
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
        className: 'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:md:gap-x-4',
        children: u.map((e, b) =>
          typeof e == 'string'
            ? o.jsx('div', { children: m }, `${e}-${b}`)
            : o.jsx(
                'button',
                {
                  className: x(
                    'dgsuikit:ss02 dgsuikit:w-9 dgsuikit:h-9 dgsuikit:md:w-11 dgsuikit:md:h-11 dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center dgsuikit:font-h6-bold dgsuikit:md:font-h5-bold dgsuikit:transition dgsuikit:border dgsuikit:border-solid dgsuikit:border-transparent dgsuikit:rounded-lg',
                    e === s
                      ? 'dgsuikit:bg-primary-500 dgsuikit:text-white'
                      : 'dgsuikit:hover:text-primary-500 dgsuikit:hover:border-primary-200',
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
