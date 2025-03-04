'use client';
import { j as a } from './jsx-runtime-DEdD30eg.js';
import { c as y } from './clsx-B-dksMZM.js';
import { r as j } from './index-RYns6xqu.js';
import { A as S } from './ArrowLeft2-FpSjjEcJ.js';
import { A as T } from './ArrowRight2-CDwrWT4r.js';
import { B as b } from './index-CF7Sa1yP.js';
/* empty css               */ const c = '...';
function f(o, g) {
  const n = g - o + 1;
  return Array.from({ length: n }, (u, t) => t + o);
}
function v({ totalCount: o, pageSize: g, siblingCount: n, currentPage: u }) {
  const t = Math.ceil(o / g);
  if (n + 5 >= t) return f(1, t);
  const i = Math.max(u - n, 1),
    l = Math.min(u + n, t),
    m = i > 2,
    r = l < t - 1,
    p = 1,
    d = t;
  if (!m && r) {
    let s = 2 + n;
    return i > 1 && (s += 1), [...f(1, s), c, t];
  }
  if (m && !r) {
    let s = 2 + n;
    l < t && (s += 1);
    const e = f(t - s + 1, t);
    return [p, c, ...e];
  }
  const x = f(i, l);
  return [p, c, ...x, c, d];
}
const P = (o) => {
  const {
      totalCount: g,
      pageSize: n,
      onPageChange: u,
      siblingCount: t = 1,
      defaultCurrent: k = 1,
      navigationButtonsWithText: i = !0,
      hideOnSinglePage: l,
      className: m,
    } = o,
    [r, p] = j.useState(k),
    d = v({ totalCount: g, pageSize: n, siblingCount: t, currentPage: r }),
    x = d[d.length - 1];
  if (l && d.length < 2) return null;
  function s(e) {
    typeof u == 'function' && u(e), p(e);
  }
  return a.jsxs('div', {
    className: y(
      'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-w-full dgs-ui-kit-px-4 dgs-ui-kit-text-gray-600',
      m,
    ),
    children: [
      a.jsx(b, {
        disabled: r === 1,
        onClick: () => s(r - 1),
        rightIcon: a.jsx(T, {}),
        variant: i ? 'text' : 'secondary',
        size: i ? 'medium' : 'small',
        children: i && 'صفحه قبل',
      }),
      a.jsx('div', {
        className:
          'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 md:dgs-ui-kit-gap-x-4',
        children: d.map((e, C) =>
          typeof e == 'string'
            ? a.jsx('div', { children: c }, `${e}-${C}`)
            : a.jsx(
                'button',
                {
                  className: y(
                    'ss02 dgs-ui-kit-w-9 dgs-ui-kit-h-9 md:dgs-ui-kit-w-11 md:dgs-ui-kit-h-11 dgs-ui-kit-flex dgs-ui-kit-justify-center dgs-ui-kit-items-center dgs-ui-kit-font-h6-bold md:dgs-ui-kit-font-h5-bold dgs-ui-kit-transition dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-border-transparent dgs-ui-kit-rounded-lg',
                    e === r
                      ? 'dgs-ui-kit-bg-primary-500 dgs-ui-kit-text-white'
                      : 'hover:dgs-ui-kit-text-primary-500 hover:dgs-ui-kit-border-primary-200',
                    m,
                  ),
                  onClick: () => s(e),
                  children: e,
                },
                e,
              ),
        ),
      }),
      a.jsx(b, {
        disabled: r === x,
        onClick: () => s(r + 1),
        leftIcon: a.jsx(S, {}),
        variant: i ? 'text' : 'secondary',
        size: i ? 'medium' : 'small',
        children: i && 'صفحه بعد',
      }),
    ],
  });
};
P.__docgenInfo = {
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
const D = {
    title: 'Components/Pagination',
    component: P,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Pagination from '@dgshahr/ui-kit/Pagination';\nOr\nimport { Pagination } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      siblingCount: { table: { defaultValue: { summary: '1' } } },
      navigationButtonsWithText: { table: { defaultValue: { summary: 'true' } } },
      defaultCurrent: { table: { defaultValue: { summary: '1' } } },
    },
  },
  h = { args: { totalCount: 100, pageSize: 8 } };
h.parameters = {
  ...h.parameters,
  docs: {
    ...h.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    totalCount: 100,
    pageSize: 8
  }
}`,
      ...h.parameters?.docs?.source,
    },
  },
};
const O = ['Default'];
export { h as Default, O as __namedExportsOrder, D as default };
