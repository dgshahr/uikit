'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as f, R as Q } from './index-CTzypqlY.js';
import { B as H } from './index-BQiqmBN2.js';
import { c } from './clsx-B-dksMZM.js';
import { B as V } from './index-Hns_H_aV.js';
import { C as X } from './index-O5ykqROR.js';
import { T as O } from './index-DIhYQusJ.js';
import { I as ee } from './IconArrowDown2-BBhufJ55.js';
import { I as te } from './IconInfoCircleOutline-Dd1i2qLz.js';
import { D as R } from './index-C0ebrB-X.js';
import { P as ie } from './index-hSAnFV4o.js';
/* empty css               */ import './omitObjects-DTdUR98j.js';
import './RadioCheckboxWrapper-D-BsO4GR.js';
import './useFlipPosition-Eiz29amO.js';
import './index-GdYbSsJO.js';
import './IconArrowLeft2-DI3fgQDw.js';
import './IconArrowRight2-C2yC-io_.js';
const P = (t) =>
  e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: [
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M3.708 7.404a.75.75 0 0 1 .983.399l1.316 3.113L9.1 9.61a.75.75 0 0 1 .584 1.381L5.9 12.59a.75.75 0 0 1-.983-.399L3.309 8.387a.75.75 0 0 1 .4-.983',
        clipRule: 'evenodd',
      }),
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M12.915 5.664c-3.447 0-6.249 2.746-6.335 6.16a.75.75 0 0 1-1.5-.038c.108-4.228 3.575-7.622 7.835-7.622A7.84 7.84 0 0 1 20.75 12a7.833 7.833 0 0 1-7.835 7.835 7.84 7.84 0 0 1-6.457-3.384.75.75 0 1 1 1.232-.856 6.34 6.34 0 0 0 5.225 2.74 6.333 6.333 0 0 0 6.335-6.335 6.34 6.34 0 0 0-6.335-6.335',
        clipRule: 'evenodd',
      }),
    ],
  });
P.__docgenInfo = { description: '', methods: [], displayName: 'IconRefreshLeft' };
const K = f.createContext({ observer: null, columns: [], data: [], rowKey: '' }),
  z = 'after:!dgs-ui-kit-shadow-[rgba(0,0,0,0.06)]';
function _(t) {
  t.classList.add(z);
}
function se(t) {
  t.classList.remove(z);
}
function D(t) {
  const { children: i, ...r } = t,
    { columns: o, rowSelection: s } = r,
    [n, l] = f.useState(null);
  return (
    f.useEffect(() => {
      let a = o.some((u) => !!u.sticky);
      return (
        a || (a = !!s?.sticky),
        a &&
          l(
            new IntersectionObserver(
              (u) => {
                let d = !1;
                for (const m of u)
                  if (m.boundingClientRect.right > m.intersectionRect.right) {
                    document.querySelectorAll('#sticky-cell-right').forEach(_), (d = !0);
                    break;
                  } else if (m.boundingClientRect.left < m.intersectionRect.left) {
                    document.querySelectorAll('#sticky-cell-left').forEach(_), (d = !0);
                    break;
                  }
                d || document.querySelectorAll('[id^="sticky-cell-"]').forEach(se);
              },
              { threshold: 1, rootMargin: '0% 100% 0% 100%' },
            ),
          ),
        () => {
          n && n.disconnect();
        }
      );
    }, []),
    e.jsx(K.Provider, { value: { observer: n, ...r }, children: i })
  );
}
const k = () => f.useContext(K);
D.__docgenInfo = { description: '', methods: [], displayName: 'TableContextProvider' };
const M = (t) => {
  const { title: i, extraElement: r, showTotal: o, total: s, className: n } = t;
  return e.jsxs('div', {
    className: c(
      'dgs-ui-kit-p-4 dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200',
      n,
    ),
    children: [
      e.jsx('div', {
        className: 'dgs-ui-kit-font-h4-bold dgs-ui-kit-text-gray-700 dgs-ui-kit-w-full',
        children: i,
      }),
      o &&
        e.jsxs('div', {
          className: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-shrink-0',
          children: [
            e.jsx('span', {
              className: 'dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-700 dgs-ui-kit-ml-1',
              children: 'تعداد نتایج:',
            }),
            e.jsx(V, {
              value: s ?? 0,
              valueType: 'number',
              size: 'large',
              color: 'primary',
              type: 'twoTone',
            }),
          ],
        }),
      r,
    ],
  });
};
M.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TableHeader',
  props: {
    title: { required: !1, tsType: { name: 'string' }, description: '' },
    showTotal: { required: !1, tsType: { name: 'boolean' }, description: '' },
    extraElement: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    total: { required: !1, tsType: { name: 'number' }, description: '' },
  },
};
function N(t) {
  switch (t) {
    case 'center':
      return 'dgs-ui-kit-justify-center';
    case 'start':
      return 'dgs-ui-kit-justify-start';
    case 'end':
      return 'dgs-ui-kit-justify-end';
    default:
      return;
  }
}
function W(t, i) {
  return t || (Array.isArray(i) ? i[i.length - 1] : i);
}
function $(t) {
  return !!((t && t.selectedRowKeys.length > 1) || typeof t?.onSelectRow == 'function');
}
function C(t, i) {
  return e.jsx('div', {
    className: c('dgs-ui-kit-w-full dgs-ui-kit-flex dgs-ui-kit-items-centerd', N(t ?? 'center')),
    children: e.jsx(X, { ...i }),
  });
}
function re(t, i) {
  if (t)
    return c(
      'dgs-ui-kit-sticky dgs-ui-kit-z-10',
      'after:dgs-ui-kit-content[""] after:dgs-ui-kit-absolute after:dgs-ui-kit-top-0 after:dgs-ui-kit-h-full after:dgs-ui-kit-w-[30px] after:dgs-ui-kit-transition-shadow',
      {
        ' dgs-ui-kit-right-[-1px] dgs-ui-kit-pr-[calc(1em+1px)] after:dgs-ui-kit-left-0 after:-dgs-ui-kit-translate-x-full after:dgs-ui-kit-shadow-[inset_-10px_0_8px_-8px] after:dgs-ui-kit-shadow-transparent':
          t === 'right',
        ' dgs-ui-kit-left-[-1px] dgs-ui-kit-pl-[calc(1em+1px)] after:dgs-ui-kit-right-0 after:dgs-ui-kit-translate-x-full after:dgs-ui-kit-shadow-[inset_10px_0_8px_-8px] after:dgs-ui-kit-shadow-transparent':
          t === 'left',
        'before:dgs-ui-kit-content-[""] before:dgs-ui-kit-absolute before:dgs-ui-kit-top-0 before:dgs-ui-kit-right-0 before:dgs-ui-kit-w-full before:dgs-ui-kit-border-t before:md:dgs-ui-kit-border-t-0 before:dgs-ui-kit-border-solid before:dgs-ui-kit-border-gray-200':
          i,
      },
    );
}
C.__docgenInfo = { description: '', methods: [], displayName: 'renderRowSelectCheckbox' };
const h = (t) => {
  const { children: i, className: r, type: o, sticky: s, addBorderToSticky: n, stuckToTop: l } = t,
    a = f.useRef(null),
    u = o,
    { observer: d } = k();
  return (
    f.useEffect(() => {
      if (!(!a.current || !d))
        return (
          s && d.observe(a.current),
          () => {
            !a.current || !d || (s && d.unobserve(a.current));
          }
        );
    }, [a, d]),
    e.jsx(u, {
      ref: a,
      className: c(r, re(s, n), {
        'dgs-ui-kit-border-b-0 before:dgs-ui-kit-content[""] before:dgs-ui-kit-absolute before:dgs-ui-kit-bottom-0 before:dgs-ui-kit-left-0 before:dgs-ui-kit-w-full before:dgs-ui-kit-border-b before:dgs-ui-kit-border-solid before:dgs-ui-kit-border-gray-200':
          l,
        'dgs-ui-kit-top-0 dgs-ui-kit-z-20': l && s,
        'dgs-ui-kit-sticky dgs-ui-kit-top-0 dgs-ui-kit-z-10': l && !s,
      }),
      id: s && `sticky-cell-${s}`,
      children: i,
    })
  );
};
h.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TabelCell',
  props: {
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    type: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "'td' | 'th'",
        elements: [
          { name: 'literal', value: "'td'" },
          { name: 'literal', value: "'th'" },
        ],
      },
      description: '',
    },
    sticky: {
      required: !1,
      tsType: { name: "intersection['sticky']", raw: "ColumnsType['sticky']" },
      description: '',
    },
    addBorderToSticky: { required: !1, tsType: { name: 'boolean' }, description: '' },
    stuckToTop: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
const F = () => {
  const { columns: t, emptyContent: i } = k();
  return e.jsx('tbody', {
    children: e.jsx('tr', { children: e.jsx('td', { colSpan: t.length, children: i }) }),
  });
};
F.__docgenInfo = { description: '', methods: [], displayName: 'TBodyEmpty' };
const U = (t) => {
  const { className: i, ...r } = t;
  return e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '200px',
    height: '200px',
    viewBox: '0 0 100 100',
    preserveAspectRatio: 'xMidYMid',
    className: c(
      'dgs-ui-kit-m-auto dgs-ui-kit-bg-none dgs-ui-kit-block dgs-ui-kit-text-primary-500',
      i,
    ),
    ...r,
    children: [
      e.jsx('g', {
        transform: 'translate(79,50)',
        children: e.jsx('g', {
          transform: 'rotate(0)',
          children: e.jsxs('circle', {
            cx: '0',
            cy: '0',
            r: '6',
            fill: 'currentColor',
            fillOpacity: '1',
            children: [
              e.jsx('animateTransform', {
                attributeName: 'transform',
                type: 'scale',
                begin: '-0.875s',
                values: '1.5 1.5;1 1',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
              }),
              e.jsx('animate', {
                attributeName: 'fill-opacity',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
                values: '1;0',
                begin: '-0.875s',
              }),
            ],
          }),
        }),
      }),
      e.jsx('g', {
        transform: 'translate(70.50609665440987,70.50609665440987)',
        children: e.jsx('g', {
          transform: 'rotate(45)',
          children: e.jsxs('circle', {
            cx: '0',
            cy: '0',
            r: '6',
            fill: 'currentColor',
            fillOpacity: '0.875',
            children: [
              e.jsx('animateTransform', {
                attributeName: 'transform',
                type: 'scale',
                begin: '-0.75s',
                values: '1.5 1.5;1 1',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
              }),
              e.jsx('animate', {
                attributeName: 'fill-opacity',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
                values: '1;0',
                begin: '-0.75s',
              }),
            ],
          }),
        }),
      }),
      e.jsx('g', {
        transform: 'translate(50,79)',
        children: e.jsx('g', {
          transform: 'rotate(90)',
          children: e.jsxs('circle', {
            cx: '0',
            cy: '0',
            r: '6',
            fill: 'currentColor',
            fillOpacity: '0.75',
            children: [
              e.jsx('animateTransform', {
                attributeName: 'transform',
                type: 'scale',
                begin: '-0.625s',
                values: '1.5 1.5;1 1',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
              }),
              e.jsx('animate', {
                attributeName: 'fill-opacity',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
                values: '1;0',
                begin: '-0.625s',
              }),
            ],
          }),
        }),
      }),
      e.jsx('g', {
        transform: 'translate(29.493903345590123,70.50609665440987)',
        children: e.jsx('g', {
          transform: 'rotate(135)',
          children: e.jsxs('circle', {
            cx: '0',
            cy: '0',
            r: '6',
            fill: 'currentColor',
            fillOpacity: '0.625',
            children: [
              e.jsx('animateTransform', {
                attributeName: 'transform',
                type: 'scale',
                begin: '-0.5s',
                values: '1.5 1.5;1 1',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
              }),
              e.jsx('animate', {
                attributeName: 'fill-opacity',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
                values: '1;0',
                begin: '-0.5s',
              }),
            ],
          }),
        }),
      }),
      e.jsx('g', {
        transform: 'translate(21,50)',
        children: e.jsx('g', {
          transform: 'rotate(180)',
          children: e.jsxs('circle', {
            cx: '0',
            cy: '0',
            r: '6',
            fill: 'currentColor',
            fillOpacity: '0.5',
            children: [
              e.jsx('animateTransform', {
                attributeName: 'transform',
                type: 'scale',
                begin: '-0.375s',
                values: '1.5 1.5;1 1',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
              }),
              e.jsx('animate', {
                attributeName: 'fill-opacity',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
                values: '1;0',
                begin: '-0.375s',
              }),
            ],
          }),
        }),
      }),
      e.jsx('g', {
        transform: 'translate(29.493903345590116,29.493903345590123)',
        children: e.jsx('g', {
          transform: 'rotate(225)',
          children: e.jsxs('circle', {
            cx: '0',
            cy: '0',
            r: '6',
            fill: 'currentColor',
            fillOpacity: '0.375',
            children: [
              e.jsx('animateTransform', {
                attributeName: 'transform',
                type: 'scale',
                begin: '-0.25s',
                values: '1.5 1.5;1 1',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
              }),
              e.jsx('animate', {
                attributeName: 'fill-opacity',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
                values: '1;0',
                begin: '-0.25s',
              }),
            ],
          }),
        }),
      }),
      e.jsx('g', {
        transform: 'translate(49.99999999999999,21)',
        children: e.jsx('g', {
          transform: 'rotate(270)',
          children: e.jsxs('circle', {
            cx: '0',
            cy: '0',
            r: '6',
            fill: 'currentColor',
            fillOpacity: '0.25',
            children: [
              e.jsx('animateTransform', {
                attributeName: 'transform',
                type: 'scale',
                begin: '-0.125s',
                values: '1.5 1.5;1 1',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
              }),
              e.jsx('animate', {
                attributeName: 'fill-opacity',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
                values: '1;0',
                begin: '-0.125s',
              }),
            ],
          }),
        }),
      }),
      e.jsx('g', {
        transform: 'translate(70.50609665440987,29.493903345590116)',
        children: e.jsx('g', {
          transform: 'rotate(315)',
          children: e.jsxs('circle', {
            cx: '0',
            cy: '0',
            r: '6',
            fill: 'currentColor',
            fillOpacity: '0.125',
            children: [
              e.jsx('animateTransform', {
                attributeName: 'transform',
                type: 'scale',
                begin: '0s',
                values: '1.5 1.5;1 1',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
              }),
              e.jsx('animate', {
                attributeName: 'fill-opacity',
                keyTimes: '0;1',
                dur: '1s',
                repeatCount: 'indefinite',
                values: '1;0',
                begin: '0s',
              }),
            ],
          }),
        }),
      }),
    ],
  });
};
U.__docgenInfo = { description: '', methods: [], displayName: 'SpinnerLoading' };
const Y = () => {
  const { columns: t, loading: i } = k();
  return e.jsx('tbody', {
    children: e.jsx('tr', {
      children: e.jsx('td', {
        className: 'dgs-ui-kit-p-10',
        colSpan: t.length,
        children: e.jsx(U, {
          width: typeof i != 'boolean' ? i.size : 100,
          height: typeof i != 'boolean' ? i.size : 100,
        }),
      }),
    }),
  });
};
Y.__docgenInfo = { description: '', methods: [], displayName: 'TBodyLoading' };
const A =
  'dgs-ui-kit-p-4 dgs-ui-kit-pl-0 dgs-ui-kit-bg-white dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200';
function ae(t, i) {
  return t ? (Array.isArray(t) ? t.reduce((r, o) => r?.[o] ?? null, i) : i[t]) : null;
}
function ne(t, i, r) {
  if (typeof t.render == 'function') return t.render(i, r);
  const o = ae(t.dataIndex, i);
  if (t.ellipsis) {
    const s = e.jsx('div', { className: '!dgs-ui-kit-truncate', children: o });
    return typeof t.ellipsis != 'boolean' && t.ellipsis.hideTooltip
      ? s
      : e.jsx(O, { wrapperClassName: 'dgs-ui-kit-w-full', content: o, children: s });
  }
  return o;
}
const Z = (t) => {
  const { havePagination: i } = t,
    {
      columns: r,
      data: o,
      rowKey: s,
      rowSelection: n,
      stickyTableHeader: l,
      loading: a,
      emptyContent: u,
      getRowClassName: d,
    } = k();
  if (a) return e.jsx(Y, {});
  if (o.length < 1 && u) return e.jsx(F, {});
  const m = typeof d == 'function';
  return e.jsx('tbody', {
    children: o.map((p, y) =>
      e.jsxs(
        'tr',
        {
          children: [
            $(n) &&
              e.jsx(h, {
                type: 'td',
                className: c(
                  A,
                  n?.className,
                  { 'dgs-ui-kit-border-b-0 dgs-ui-kit-rounded-br-2xl': !i && y === o.length - 1 },
                  n?.className,
                  m ? d(p) : '',
                ),
                sticky: n?.sticky,
                addBorderToSticky: l ? y !== 0 : !0,
                children: C(n?.align, {
                  onChange: (g) => n?.onSelectRow(g, p[s]),
                  checked: !!n?.selectedRowKeys.find((g) => g === p[s]),
                }),
              }),
            r.map((g) =>
              e.jsx(
                h,
                {
                  type: 'td',
                  className: c(
                    A,
                    {
                      'dgs-ui-kit-border-b-0 first:dgs-ui-kit-rounded-br-2xl last:dgs-ui-kit-rounded-bl-2xl':
                        !i && y === o.length - 1,
                    },
                    g.className,
                    m ? d(p) : '',
                  ),
                  sticky: g.sticky,
                  addBorderToSticky: l ? y !== 0 : !0,
                  children: e.jsx('div', {
                    className: c(
                      'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-ml-2',
                      N(g.align),
                    ),
                    children: ne(g, p, y),
                  }),
                },
                `${p[s]}-${W(g.key, g.dataIndex)}`,
              ),
            ),
          ],
        },
        p[s],
      ),
    ),
  });
};
Z.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TBody',
  props: { havePagination: { required: !0, tsType: { name: 'boolean' }, description: '' } },
};
const G = (t) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: e.jsx('path', {
      fill: 'currentColor',
      d: 'M19.53 16.03a.75.75 0 0 1-.976.073l-.084-.073L12 9.561l-6.47 6.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084 7-7a.75.75 0 0 1 .976-.073l.084.073 7 7a.75.75 0 0 1 0 1.06',
    }),
  });
G.__docgenInfo = { description: '', methods: [], displayName: 'IconArrowUp2' };
function oe(t, i) {
  if (t.length !== i.length) return !1;
  t.sort(), i.sort();
  for (let r = 0; r < t.length; r++) if (t[r] !== i[r]) return !1;
  return !0;
}
const v = 16,
  I =
    'dgs-ui-kit-p-4 dgs-ui-kit-pl-0 dgs-ui-kit-text-gray-500 dgs-ui-kit-bg-gray-50 dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200',
  E = '!dgs-ui-kit-h-8 dgs-ui-kit-shrink-0';
function B(t, i) {
  const r = t === 'ascend' ? G : ee;
  return e.jsx('button', {
    onClick: () => i.onSort(t),
    children: e.jsx(r, {
      width: v,
      height: v,
      className: i.active === t ? 'dgs-ui-kit-text-primary-500' : 'dgs-ui-kit-text-gray-500',
    }),
  });
}
function L(t, i) {
  return e.jsxs('div', {
    className:
      'dgs-ui-kit-font-p1-medium dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse',
    children: [
      e.jsx('span', { children: t }),
      i && (i.anchorIcon ?? e.jsx(te, { width: v, height: v })),
    ],
  });
}
function q(t, i) {
  return t.map((r) => r[i]);
}
const J = (t) => {
  const { haveHeader: i } = t,
    { columns: r, rowKey: o, rowSelection: s, data: n, stickyTableHeader: l } = k();
  return e.jsx('thead', {
    children: e.jsxs('tr', {
      children: [
        $(s) &&
          e.jsx(h, {
            type: 'th',
            className: c(I, { 'dgs-ui-kit-rounded-tr-2xl': !i }, s?.className),
            sticky: s?.sticky,
            stuckToTop: l,
            children: e.jsxs('div', {
              className: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-between',
              children: [
                C(s?.align, {
                  checked: s.selectedRowKeys.length > 0,
                  isIndeterminate: !oe(q(n, o), s.selectedRowKeys),
                  onChange: (a) => s?.onSelectRow(a, a.target.checked ? q(n, o) : []),
                }),
                e.jsx(R, { type: 'vertical', className: E }),
              ],
            }),
          }),
        r.map((a, u) =>
          e.jsx(
            h,
            {
              type: 'th',
              sticky: a.sticky,
              className: c(
                I,
                { 'first:dgs-ui-kit-rounded-tr-2xl last:dgs-ui-kit-rounded-tl-2xl': !i },
                a.className,
              ),
              stuckToTop: l,
              children: e.jsxs('div', {
                className: 'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center',
                children: [
                  e.jsxs('div', {
                    className: c(
                      'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse dgs-ui-kit-w-full dgs-ui-kit-ml-2',
                      N(a.align),
                    ),
                    children: [
                      a.tooltip?.content
                        ? e.jsx(O, { ...a.tooltip, children: L(a.title, a.tooltip) })
                        : L(a.title),
                      typeof a.sort?.onSort == 'function' &&
                        e.jsxs('div', {
                          className: 'dgs-ui-kit-flex dgs-ui-kit-flex-col',
                          children: [B('ascend', a.sort), B('descend', a.sort)],
                        }),
                    ],
                  }),
                  u !== r.length - 1 && e.jsx(R, { type: 'vertical', className: E }),
                ],
              }),
            },
            W(a.key, a.dataIndex),
          ),
        ),
      ],
    }),
  });
};
J.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'THead',
  props: { haveHeader: { required: !0, tsType: { name: 'boolean' }, description: '' } },
};
function S(t) {
  const {
      header: i,
      wrapperClassName: r,
      className: o,
      data: s,
      pagination: n,
      layout: l = 'auto',
      containerClassName: a,
    } = t,
    u = (i && Object.values(i).length > 0) ?? !1,
    d = !!(n?.totalCount && n?.pageSize),
    m = l !== 'fixed' ? 'div' : Q.Fragment;
  return e.jsxs('div', {
    className: c(
      'dgs-ui-kit-relative dgs-ui-kit-bg-white dgs-ui-kit-border dgs-ui-kit-border-gray-200 dgs-ui-kit-border-solid dgs-ui-kit-rounded-2xl',
      r,
    ),
    children: [
      u && e.jsx(M, { ...i, total: n?.totalCount ?? s.length }),
      e.jsx(m, {
        ...(l !== 'fixed'
          ? { className: c('dgs-ui-kit-overflow-x-auto dgs-ui-kit-h-full', a) }
          : {}),
        children: e.jsx(D, {
          ...t,
          children: e.jsxs('table', {
            className: o,
            style: { tableLayout: l },
            children: [e.jsx(J, { haveHeader: u }), e.jsx(Z, { havePagination: d })],
          }),
        }),
      }),
      d && e.jsx(ie, { className: c('dgs-ui-kit-py-4 !dgs-ui-kit-px-0', n?.className), ...n }),
    ],
  });
}
S.__docgenInfo = { description: '', methods: [], displayName: 'Table' };
const _e = {
    title: 'Components/Table',
    component: S,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Table from '@dgshahr/ui-kit/Table';\nOr\nimport { Table } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      data: { control: 'object', table: { type: { summary: 'T[]' } } },
      columns: {
        control: 'object',
        table: {
          type: {
            summary: 'ColumnsType<T>',
            detail: `{
  title?: string;
  align?: 'start' | 'center' | 'end';
  className?: string;
  tooltip?: Omit<TooltipProps, 'children'> & {
    anchorIcon?: ReactNode;
  };
  sticky?: 'left' | 'right';
  ellipsis?:
    | boolean
    | {
        hideTooltip?: boolean;
      };
  render?: (record: T, index: number) => ReactNode;
  sort?: {
      active?: 'ascend' | 'descend';
      onSort: (value: 'ascend' | 'descend') => void;
    };
  key?: string; 
  dataIndex?: string | string[]; (you should pass one of key or dataIndex)
}`,
          },
        },
      },
      header: {
        control: 'object',
        table: {
          type: {
            summary: 'TableHeaderProps',
            detail: `{
            title?: string;
            showTotal?: boolean;
              extraElement?: ReactNode;
            className?: string;
}`,
          },
        },
      },
      stickyTableHeader: {
        control: 'boolean',
        table: { type: { summary: 'boolean' } },
        description: "It only works if the wrapper element has height and the layout isn't fixed.",
      },
      pagination: { control: 'object', table: { type: { summary: 'PaginationProps' } } },
      rowKey: {
        description: "it's required if you want to use rowSelection",
        table: { type: { summary: 'string' } },
      },
      rowSelection: {
        control: 'object',
        table: {
          type: {
            summary: 'RowSelectionProps<T>',
            detail: `Pick<ColumnsType, 'align' | 'sticky' | 'className'> & {
  onSelectRow: (e: React.ChangeEvent<HTMLInputElement>, key: string | string[], record?: T) => void;
  selectedRowKeys: string[];
}`,
          },
        },
      },
      wrapperClassName: { control: 'text', table: { type: { summary: 'string' } } },
      containerClassName: { control: 'text', table: { type: { summary: 'string' } } },
      layout: {
        control: 'select',
        options: ['auto', 'fixed'],
        table: { type: { summary: 'auto, fixed' }, defaultValue: { summary: 'auto' } },
        description: 'The table should have a width for the layout to work.',
      },
      loading: { control: 'boolean', table: { type: { summary: 'boolean | {size: number}' } } },
      emptyContent: { control: 'object', table: { type: { summary: 'ReactNode' } } },
      getRowClassName: {
        control: 'object',
        table: { type: { summary: '(record: T) => string | undefined' } },
      },
    },
  },
  le = [
    {
      id: '1',
      title: 'نام محصول',
      price: 32e4,
      details:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      id: '2',
      title: 'نام محصول',
      price: 32e4,
      details:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      id: '3',
      title: 'نام محصول',
      price: 32e4,
      details:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      id: '4',
      title: 'نام محصول',
      price: 32e4,
      details:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      id: '5',
      title: 'نام محصول',
      price: 32e4,
      details:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      id: '6',
      title: 'نام محصول',
      price: 32e4,
      details:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
  ],
  de = [
    { title: 'نام محصول', key: 'title', dataIndex: 'title', sort: { onSort() {} } },
    { title: 'قیمت', dataIndex: 'price', key: 'price', tooltip: { content: 'قیمت به تومان است.' } },
    { title: 'جزئیات', dataIndex: 'details', key: 'details', ellipsis: !0 },
    {
      title: 'عملیات',
      key: 'actions',
      align: 'center',
      render: () =>
        e.jsx(H, { color: 'error', variant: 'outline', size: 'small', children: 'حذف محصول' }),
    },
  ],
  w = { data: le, columns: de, className: 'dgs-ui-kit-w-[800px]', layout: 'fixed', rowKey: 'id' },
  x = { args: w },
  b = {
    args: {
      ...w,
      header: {
        title: 'جدول محصولات',
        showTotal: !0,
        extraElement: e.jsx(H, { size: 'small', variant: 'text', rightIcon: e.jsx(P, {}) }),
      },
      pagination: { pageSize: 6, totalCount: 120 },
    },
  },
  ce = (t) => {
    const [i, r] = f.useState([]);
    return e.jsx(S, {
      rowSelection: {
        selectedRowKeys: i,
        sticky: 'right',
        onSelectRow(o, s) {
          Array.isArray(s)
            ? r(s)
            : o.target.checked
              ? r((l) => [...l, s])
              : r(i.filter((l) => l !== s));
        },
      },
      ...t,
    });
  },
  j = { args: w, render: (t) => e.jsx(ce, { ...t }) },
  T = {
    args: {
      ...w,
      data: Array.from({ length: 100 }).map((t, i) => ({
        id: i,
        title: 'نام محصول',
        price: 32e4,
        details:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
      })),
      stickyTableHeader: !0,
    },
  };
x.parameters = {
  ...x.parameters,
  docs: {
    ...x.parameters?.docs,
    source: {
      originalSource: `{
  args: defaultArgs
}`,
      ...x.parameters?.docs?.source,
    },
  },
};
b.parameters = {
  ...b.parameters,
  docs: {
    ...b.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...defaultArgs,
    header: {
      title: 'جدول محصولات',
      showTotal: true,
      extraElement: <Button size="small" variant="text" rightIcon={<IconRefreshLeft />} />
    },
    pagination: {
      pageSize: 6,
      totalCount: 120
    }
  }
}`,
      ...b.parameters?.docs?.source,
    },
  },
};
j.parameters = {
  ...j.parameters,
  docs: {
    ...j.parameters?.docs,
    source: {
      originalSource: `{
  args: defaultArgs,
  render: args => <TableWithSelectionExample {...args} />
}`,
      ...j.parameters?.docs?.source,
    },
  },
};
T.parameters = {
  ...T.parameters,
  docs: {
    ...T.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...defaultArgs,
    data: Array.from({
      length: 100
    }).map((_, index) => ({
      id: index,
      title: 'نام محصول',
      price: 320000,
      details: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است'
    })),
    stickyTableHeader: true
  }
}`,
      ...T.parameters?.docs?.source,
    },
  },
};
const Ae = ['Default', 'WithHeaderAndPagination', 'WithSelection', 'LongTable'];
export {
  x as Default,
  T as LongTable,
  b as WithHeaderAndPagination,
  j as WithSelection,
  Ae as __namedExportsOrder,
  _e as default,
};
