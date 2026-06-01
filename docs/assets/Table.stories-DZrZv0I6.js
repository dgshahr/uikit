'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as f, R as Q } from './index-Dahukp9Z.js';
import { B as H } from './index-XKnEmu1b.js';
import { c } from './clsx-B-dksMZM.js';
import { i as X } from './isBrowser-CEYOmsdG.js';
import { B as ee } from './index-jNE6KmJF.js';
import { S as te } from './index-DsJKn0Wp.js';
import { C as ie } from './index-CSUGPkmK.js';
import { T as O } from './index-aqQhlUU_.js';
import { I as se } from './IconArrowDown2-BBhufJ55.js';
import { I as re } from './IconInfoCircleOutline-Dd1i2qLz.js';
import { D as _ } from './index-DBtP1gFw.js';
import { P as ae } from './index-CBjmyK4l.js';
/* empty css               */ import './index-CaeLGGl5.js';
import './IconEye-Cb9e2e14.js';
import './omitObjects-DTdUR98j.js';
import './TextFieldWrapper-WYPEZs3s.js';
import './FieldBottomInfo-DcydcAx7.js';
import './IconSearch-BpsoWpUw.js';
import './PickerWrapper-u2gB2Nt1.js';
import './index-DFn6di8N.js';
import './index-DA08jwmW.js';
import './IconCloseRemove-B6m37iwz.js';
import './useFlipPosition-BVl5jSrf.js';
import './index-CGSpllIl.js';
import './useOutsideClick-C6FAtUjz.js';
import './index-0ehEWP2Z.js';
import './IconMinus4-BhTKwdYo.js';
import './RadioCheckboxWrapper-9BgHmDon.js';
import './IconArrowLeft2-DI3fgQDw.js';
import './IconArrowRight2-C2yC-io_.js';
const z = (t) =>
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
z.__docgenInfo = { description: '', methods: [], displayName: 'IconRefreshLeft' };
const K = f.createContext({ observer: null, columns: [], data: [], rowKey: '' }),
  D = 'dgsuikit:after:!shadow-[rgba(0,0,0,0.06)]';
function A(t) {
  t.classList.add(D);
}
function ne(t) {
  t.classList.remove(D);
}
function W(t) {
  const { children: i, ...a } = t,
    { columns: l, rowSelection: s } = a,
    [o, n] = f.useState(null);
  return (
    f.useEffect(() => {
      if (!X()) return;
      let r = l.some((u) => !!u.sticky);
      return (
        r || (r = !!s?.sticky),
        r &&
          n(
            new IntersectionObserver(
              (u) => {
                let d = !1;
                for (const g of u)
                  if (g.boundingClientRect.right > g.intersectionRect.right) {
                    document?.querySelectorAll('#sticky-cell-right').forEach(A), (d = !0);
                    break;
                  } else if (g.boundingClientRect.left < g.intersectionRect.left) {
                    document?.querySelectorAll('#sticky-cell-left').forEach(A), (d = !0);
                    break;
                  }
                d || document?.querySelectorAll('[id^="sticky-cell-"]').forEach(ne);
              },
              { threshold: 1, rootMargin: '0% 100% 0% 100%' },
            ),
          ),
        () => {
          o && o.disconnect();
        }
      );
    }, [l, s]),
    e.jsx(K.Provider, { value: { observer: o, ...a }, children: i })
  );
}
const k = () => f.useContext(K);
W.__docgenInfo = { description: '', methods: [], displayName: 'TableContextProvider' };
const M = (t) => {
  const {
      title: i,
      extraElement: a,
      showTotal: l,
      total: s,
      className: o,
      pageCountSelector: n,
    } = t,
    r = n?.defaultValue ?? n?.options?.[0]?.value ?? 0,
    [u, d] = f.useState(r);
  function g(p) {
    d(p), n?.onPageCountChange?.(p);
  }
  return e.jsxs('div', {
    className: c(
      'dgsuikit:p-4 dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-1 dgsuikit:border-b dgsuikit:border-solid dgsuikit:border-gray-200',
      o,
    ),
    children: [
      e.jsx('div', {
        className: 'dgsuikit:font-h4-bold dgsuikit:text-gray-700 dgsuikit:w-full',
        children: i,
      }),
      n &&
        e.jsxs('div', {
          className:
            'dgsuikit:flex  dgsuikit:ml-2 dgsuikit:items-center dgsuikit:gap-2 dgsuikit:shrink-0 dgsuikit:mr-2',
          children: [
            e.jsx('span', {
              className:
                'dgsuikit:font-p2-regular dgsuikit:text-gray-700 dgsuikit:whitespace-nowrap',
              children: 'تعداد نمایش:',
            }),
            e.jsx(te, {
              ...n.selectProps,
              wrapperClassName: c('dgsuikit:w-20', n.selectProps?.wrapperClassName),
              popoverClassName: c('dgsuikit:!min-w-0', n.selectProps?.popoverClassName),
              inputProps: {
                size: 1,
                containerClassName: c(
                  'dgsuikit:!p-2 dgsuikit:!gap-x-1',
                  n.selectProps?.inputProps?.containerClassName,
                ),
                ...n.selectProps?.inputProps,
              },
              mode: 'single',
              options: n.options,
              value: u,
              searchable: !1,
              onChange: g,
            }),
          ],
        }),
      l &&
        e.jsxs('div', {
          className: 'dgsuikit:flex dgsuikit:items-center dgsuikit:shrink-0',
          children: [
            e.jsx('span', {
              className: 'dgsuikit:font-p2-regular dgsuikit:text-gray-700 dgsuikit:ml-1',
              children: 'تعداد نتایج:',
            }),
            e.jsx(ee, {
              value: s ?? 0,
              valueType: 'number',
              size: 'large',
              color: 'primary',
              type: 'twoTone',
            }),
          ],
        }),
      a,
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
    pageCountSelector: {
      required: !1,
      tsType: { name: 'PageCountSelectorProps' },
      description: '',
    },
    total: { required: !1, tsType: { name: 'number' }, description: '' },
  },
};
function N(t) {
  switch (t) {
    case 'center':
      return 'dgsuikit:justify-center';
    case 'start':
      return 'dgsuikit:justify-start';
    case 'end':
      return 'dgsuikit:justify-end';
    default:
      return;
  }
}
function V(t, i) {
  return t || (Array.isArray(i) ? i[i.length - 1] : i);
}
function $(t) {
  return !!((t && t.selectedRowKeys.length > 1) || typeof t?.onSelectRow == 'function');
}
function S(t, i) {
  return e.jsx('div', {
    className: c('dgsuikit:w-full dgsuikit:flex dgsuikit:items-center', N(t ?? 'center')),
    children: e.jsx(ie, { ...i }),
  });
}
function oe(t, i) {
  if (t)
    return c(
      'dgsuikit:sticky dgsuikit:z-10',
      'dgsuikit:after:content[""] dgsuikit:after:absolute dgsuikit:after:top-0 dgsuikit:after:h-full dgsuikit:after:w-[30px] dgsuikit:after:transition-shadow',
      {
        'dgsuikit:right-[-1px] dgsuikit:pr-[calc(1em+1px)] dgsuikit:after:left-0 dgsuikit:after:-translate-x-full dgsuikit:after:shadow-[inset_-10px_0_8px_-8px] dgsuikit:after:shadow-transparent':
          t === 'right',
        'dgsuikit:left-[-1px] dgsuikit:pl-[calc(1em+1px)] dgsuikit:after:right-0 dgsuikit:after:translate-x-full dgsuikit:after:shadow-[inset_10px_0_8px_-8px] dgsuikit:after:shadow-transparent':
          t === 'left',
        'dgsuikit:before:content-[""] dgsuikit:before:absolute dgsuikit:before:top-0 dgsuikit:before:right-0 dgsuikit:before:w-full dgsuikit:before:border-t dgsuikit:before:md:border-t-0 dgsuikit:before:border-solid dgsuikit:before:border-gray-200':
          i,
      },
    );
}
S.__docgenInfo = { description: '', methods: [], displayName: 'renderRowSelectCheckbox' };
const h = (t) => {
  const { children: i, className: a, type: l, sticky: s, addBorderToSticky: o, stuckToTop: n } = t,
    r = f.useRef(null),
    u = l,
    { observer: d } = k();
  return (
    f.useEffect(() => {
      if (!(!r.current || !d))
        return (
          s && d.observe(r.current),
          () => {
            !r.current || !d || (s && d.unobserve(r.current));
          }
        );
    }, [r, d]),
    e.jsx(u, {
      ref: r,
      className: c(a, oe(s, o), {
        'dgsuikit:border-b-0 dgsuikit:before:content[""] dgsuikit:before:absolute dgsuikit:before:bottom-0 dgsuikit:before:left-0 dgsuikit:before:w-full dgsuikit:before:border-b dgsuikit:before:border-solid dgsuikit:before:border-gray-200':
          n,
        'dgsuikit:top-0 dgsuikit:z-20': n && s,
        'dgsuikit:sticky dgsuikit:top-0 dgsuikit:z-10': n && !s,
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
  const { className: i, ...a } = t;
  return e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '200px',
    height: '200px',
    viewBox: '0 0 100 100',
    preserveAspectRatio: 'xMidYMid',
    className: c('dgsuikit:m-auto dgsuikit:bg-none dgsuikit:block dgsuikit:text-primary-500', i),
    ...a,
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
        className: 'dgsuikit:p-10',
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
const P =
  'dgsuikit:p-4 dgsuikit:pl-0 dgsuikit:bg-white dgsuikit:border-b dgsuikit:border-solid dgsuikit:border-gray-200';
function le(t, i) {
  return t ? (Array.isArray(t) ? t.reduce((a, l) => a?.[l] ?? null, i) : i[t]) : null;
}
function de(t, i, a) {
  if (typeof t.render == 'function') return t.render(i, a);
  const l = le(t.dataIndex, i);
  if (t.ellipsis) {
    const s = e.jsx('div', { className: 'dgsuikit:!truncate', children: l });
    return typeof t.ellipsis != 'boolean' && t.ellipsis.hideTooltip
      ? s
      : e.jsx(O, {
          wrapperClassName: 'dgsuikit:w-full',
          content: l,
          attachToBody: !0,
          children: s,
        });
  }
  return l;
}
const Z = (t) => {
  const { havePagination: i } = t,
    {
      columns: a,
      data: l,
      rowKey: s,
      rowSelection: o,
      stickyTableHeader: n,
      loading: r,
      emptyContent: u,
      getRowClassName: d,
    } = k();
  if (r) return e.jsx(Y, {});
  if (l.length < 1 && u) return e.jsx(F, {});
  const g = typeof d == 'function';
  return e.jsx('tbody', {
    children: l.map((p, y) =>
      e.jsxs(
        'tr',
        {
          children: [
            $(o) &&
              e.jsx(h, {
                type: 'td',
                className: c(
                  P,
                  o?.className,
                  { 'dgsuikit:border-b-0 dgsuikit:rounded-br-2xl': !i && y === l.length - 1 },
                  o?.className,
                  g ? d(p) : '',
                ),
                sticky: o?.sticky,
                addBorderToSticky: n ? y !== 0 : !0,
                children: S(o?.align, {
                  onChange: (m) => o?.onSelectRow(m, p[s]),
                  checked: !!o?.selectedRowKeys.find((m) => m === p[s]),
                }),
              }),
            a.map((m) =>
              e.jsx(
                h,
                {
                  type: 'td',
                  className: c(
                    P,
                    {
                      'dgsuikit:border-b-0 dgsuikit:first:rounded-br-2xl dgsuikit:last:rounded-bl-2xl':
                        !i && y === l.length - 1,
                    },
                    m.className,
                    g ? d(p) : '',
                  ),
                  sticky: m.sticky,
                  addBorderToSticky: n ? y !== 0 : !0,
                  children: e.jsx('div', {
                    className: c('dgsuikit:flex dgsuikit:items-center dgsuikit:ml-2', N(m.align)),
                    children: de(m, p, y),
                  }),
                },
                `${p[s]}-${V(m.key, m.dataIndex)}`,
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
function ce(t, i) {
  if (t.length !== i.length) return !1;
  t.sort(), i.sort();
  for (let a = 0; a < t.length; a++) if (t[a] !== i[a]) return !1;
  return !0;
}
const w = 16,
  I =
    'dgsuikit:p-4 dgsuikit:pl-0 dgsuikit:text-gray-500 dgsuikit:bg-gray-50 dgsuikit:border-b dgsuikit:border-solid dgsuikit:border-gray-200',
  E = 'dgsuikit:!h-8 dgsuikit:shrink-0 dgsuikit:mr-2';
function B(t, i) {
  const a = t === 'ascend' ? G : se;
  return e.jsx('button', {
    onClick: () => i.onSort(t),
    children: e.jsx(a, {
      width: w,
      height: w,
      className: i.active === t ? 'dgsuikit:text-primary-500' : 'dgsuikit:text-gray-500',
    }),
  });
}
function L(t, i) {
  return e.jsxs('div', {
    className: 'dgsuikit:font-p1-medium dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-1',
    children: [
      e.jsx('span', { children: t }),
      i && (i.anchorIcon ?? e.jsx(re, { width: w, height: w })),
    ],
  });
}
function q(t, i) {
  return t.map((a) => a[i]);
}
const J = (t) => {
  const { haveHeader: i } = t,
    { columns: a, rowKey: l, rowSelection: s, data: o, stickyTableHeader: n } = k();
  return e.jsx('thead', {
    children: e.jsxs('tr', {
      children: [
        $(s) &&
          e.jsx(h, {
            type: 'th',
            className: c(I, { 'dgsuikit:rounded-tr-2xl': !i }, s?.className),
            sticky: s?.sticky,
            stuckToTop: n,
            children: e.jsxs('div', {
              className: 'dgsuikit:flex dgsuikit:items-center dgsuikit:justify-between',
              children: [
                S(s?.align, {
                  checked: s.selectedRowKeys.length > 0,
                  isIndeterminate: !ce(q(o, l), s.selectedRowKeys),
                  onChange: (r) => s?.onSelectRow(r, r.target.checked ? q(o, l) : []),
                }),
                e.jsx(_, { type: 'vertical', className: E }),
              ],
            }),
          }),
        a.map((r, u) =>
          e.jsx(
            h,
            {
              type: 'th',
              sticky: r.sticky,
              className: c(
                I,
                { 'dgsuikit:first:rounded-tr-2xl dgsuikit:last:rounded-tl-2xl': !i },
                r.className,
              ),
              stuckToTop: n,
              children: e.jsxs('div', {
                className: 'dgsuikit:flex dgsuikit:justify-between dgsuikit:items-center',
                children: [
                  e.jsxs('div', {
                    className: c(
                      'dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-2 dgsuikit:w-full',
                      N(r.align),
                    ),
                    children: [
                      r.tooltip?.content
                        ? e.jsx(O, {
                            ...r.tooltip,
                            attachToBody: !0,
                            children: L(r.title, r.tooltip),
                          })
                        : L(r.title),
                      typeof r.sort?.onSort == 'function' &&
                        e.jsxs('div', {
                          className: 'dgsuikit:flex dgsuikit:flex-col',
                          children: [B('ascend', r.sort), B('descend', r.sort)],
                        }),
                    ],
                  }),
                  u !== a.length - 1 && e.jsx(_, { type: 'vertical', className: E }),
                ],
              }),
            },
            V(r.key, r.dataIndex),
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
function R(t) {
  const {
      header: i,
      wrapperClassName: a,
      className: l,
      data: s,
      pagination: o,
      layout: n = 'auto',
      containerClassName: r,
    } = t,
    u = (i && Object.values(i).length > 0) ?? !1,
    d = !!(o?.totalCount && o?.pageSize),
    g = n !== 'fixed' ? 'div' : Q.Fragment;
  return e.jsxs('div', {
    className: c(
      'dgsuikit:relative dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-200 dgsuikit:border-solid dgsuikit:rounded-2xl',
      a,
    ),
    children: [
      u && e.jsx(M, { ...i, total: o?.totalCount ?? s.length }),
      e.jsx(g, {
        ...(n !== 'fixed' ? { className: c('dgsuikit:overflow-x-auto dgsuikit:h-full', r) } : {}),
        children: e.jsx(W, {
          ...t,
          children: e.jsxs('table', {
            className: l,
            style: { tableLayout: n },
            children: [e.jsx(J, { haveHeader: u }), e.jsx(Z, { havePagination: d })],
          }),
        }),
      }),
      d && e.jsx(ae, { className: c('dgsuikit:py-4 dgsuikit:!px-0', o?.className), ...o }),
    ],
  });
}
R.__docgenInfo = { description: '', methods: [], displayName: 'Table' };
const Fe = {
    title: 'Components/Table',
    component: R,
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
  ue = [
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
  ge = [
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
  x = { data: ue, columns: ge, className: 'dgsuikit:w-[800px]', layout: 'fixed', rowKey: 'id' },
  b = { args: x },
  j = {
    args: {
      ...x,
      header: {
        title: 'جدول محصولات',
        showTotal: !0,
        extraElement: e.jsx(H, { size: 'small', variant: 'text', rightIcon: e.jsx(z, {}) }),
      },
      pagination: { pageSize: 6, totalCount: 120 },
    },
  },
  T = {
    args: {
      ...x,
      header: {
        title: 'جدول محصولات',
        showTotal: !0,
        pageCountSelector: {
          options: [
            { value: 10, label: '10' },
            { value: 25, label: '25' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
          ],
          defaultValue: 10,
          onPageCountChange: (t) => console.error('page count changed:', t),
        },
      },
      pagination: { pageSize: 6, totalCount: 120 },
    },
  },
  pe = (t) => {
    const [i, a] = f.useState([]);
    return e.jsx(R, {
      rowSelection: {
        selectedRowKeys: i,
        sticky: 'right',
        onSelectRow(l, s) {
          Array.isArray(s)
            ? a(s)
            : l.target.checked
              ? a((n) => [...n, s])
              : a(i.filter((n) => n !== s));
        },
      },
      ...t,
    });
  },
  C = { args: x, render: (t) => e.jsx(pe, { ...t }) },
  v = {
    args: {
      ...x,
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
b.parameters = {
  ...b.parameters,
  docs: {
    ...b.parameters?.docs,
    source: {
      originalSource: `{
  args: defaultArgs
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
    header: {
      title: 'جدول محصولات',
      showTotal: true,
      pageCountSelector: {
        options: [{
          value: 10,
          label: '10'
        }, {
          value: 25,
          label: '25'
        }, {
          value: 50,
          label: '50'
        }, {
          value: 100,
          label: '100'
        }],
        defaultValue: 10,
        onPageCountChange: value => console.error('page count changed:', value)
      }
    },
    pagination: {
      pageSize: 6,
      totalCount: 120
    }
  }
}`,
      ...T.parameters?.docs?.source,
    },
  },
};
C.parameters = {
  ...C.parameters,
  docs: {
    ...C.parameters?.docs,
    source: {
      originalSource: `{
  args: defaultArgs,
  render: args => <TableWithSelectionExample {...args} />
}`,
      ...C.parameters?.docs?.source,
    },
  },
};
v.parameters = {
  ...v.parameters,
  docs: {
    ...v.parameters?.docs,
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
      ...v.parameters?.docs?.source,
    },
  },
};
const Ue = [
  'Default',
  'WithHeaderAndPagination',
  'WithPageCountSelector',
  'WithSelection',
  'LongTable',
];
export {
  b as Default,
  v as LongTable,
  j as WithHeaderAndPagination,
  T as WithPageCountSelector,
  C as WithSelection,
  Ue as __namedExportsOrder,
  Fe as default,
};
