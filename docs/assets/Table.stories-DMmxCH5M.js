'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { r as g } from './index-CTzypqlY.js';
import { B } from './index-CZkW22cg.js';
import { c as u } from './clsx-B-dksMZM.js';
import { B as U } from './index-C9vtHG8C.js';
import { C as F } from './index-s2r7kP2L.js';
import { T as q } from './index-a9IqFJ52.js';
import { I as Z } from './IconArrowDown2-BBhufJ55.js';
import { I as G } from './IconInfoCircleOutline-Dd1i2qLz.js';
import { D as N } from './index-DZasg-7d.js';
import { P as J } from './index-B8zh80Ni.js';
/* empty css               */ import './omitObjects-DTdUR98j.js';
import './RadioCheckboxWrapper-CAbi2x6r.js';
import './useFlipPosition-Eiz29amO.js';
import './index-GdYbSsJO.js';
import './IconArrowLeft2-DI3fgQDw.js';
import './IconArrowRight2-C2yC-io_.js';
const H = (e) =>
  t.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: [
      t.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M3.708 7.404a.75.75 0 0 1 .983.399l1.316 3.113L9.1 9.61a.75.75 0 0 1 .584 1.381L5.9 12.59a.75.75 0 0 1-.983-.399L3.309 8.387a.75.75 0 0 1 .4-.983',
        clipRule: 'evenodd',
      }),
      t.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M12.915 5.664c-3.447 0-6.249 2.746-6.335 6.16a.75.75 0 0 1-1.5-.038c.108-4.228 3.575-7.622 7.835-7.622A7.84 7.84 0 0 1 20.75 12a7.833 7.833 0 0 1-7.835 7.835 7.84 7.84 0 0 1-6.457-3.384.75.75 0 1 1 1.232-.856 6.34 6.34 0 0 0 5.225 2.74 6.333 6.333 0 0 0 6.335-6.335 6.34 6.34 0 0 0-6.335-6.335',
        clipRule: 'evenodd',
      }),
    ],
  });
H.__docgenInfo = { description: '', methods: [], displayName: 'IconRefreshLeft' };
const L = g.createContext({ observer: null, columns: [], data: [], rowKey: '' }),
  P = 'after:!dgs-ui-kit-shadow-[rgba(0,0,0,0.06)]';
function S(e) {
  e.classList.add(P);
}
function Q(e) {
  e.classList.remove(P);
}
function K(e) {
  const { children: i, ...o } = e,
    { columns: n, rowSelection: r } = o,
    [a, l] = g.useState(null);
  return (
    g.useEffect(() => {
      let s = n.some((c) => !!c.sticky);
      return (
        s || (s = !!r?.sticky),
        s &&
          l(
            new IntersectionObserver(
              (c) => {
                let d = !1;
                for (const m of c)
                  if (m.boundingClientRect.right > m.intersectionRect.right) {
                    document.querySelectorAll('#sticky-cell-right').forEach(S), (d = !0);
                    break;
                  } else if (m.boundingClientRect.left < m.intersectionRect.left) {
                    document.querySelectorAll('#sticky-cell-left').forEach(S), (d = !0);
                    break;
                  }
                d || document.querySelectorAll('[id^="sticky-cell-"]').forEach(Q);
              },
              { threshold: 1, rootMargin: '0% 100% 0% 100%' },
            ),
          ),
        () => {
          a && a.disconnect();
        }
      );
    }, []),
    t.jsx(L.Provider, { value: { observer: a, ...o }, children: i })
  );
}
const T = () => g.useContext(L);
K.__docgenInfo = { description: '', methods: [], displayName: 'TableContextProvider' };
const z = (e) => {
  const { title: i, extraElement: o, showTotal: n, total: r, className: a } = e;
  return t.jsxs('div', {
    className: u(
      'dgs-ui-kit-p-4 dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200',
      a,
    ),
    children: [
      t.jsx('div', {
        className: 'dgs-ui-kit-font-h4-bold dgs-ui-kit-text-gray-700 dgs-ui-kit-w-full',
        children: i,
      }),
      n &&
        t.jsxs('div', {
          className: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-shrink-0',
          children: [
            t.jsx('span', {
              className: 'dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-700 dgs-ui-kit-ml-1',
              children: 'تعداد نتایج:',
            }),
            t.jsx(U, {
              value: r ?? 0,
              valueType: 'number',
              size: 'large',
              color: 'primary',
              type: 'twoTone',
            }),
          ],
        }),
      o,
    ],
  });
};
z.__docgenInfo = {
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
function w(e) {
  switch (e) {
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
function D(e, i) {
  return e || (Array.isArray(i) ? i[i.length - 1] : i);
}
function O(e) {
  return !!((e && e.selectedRowKeys.length > 1) || typeof e?.onSelectRow == 'function');
}
function v(e, i) {
  return t.jsx('div', {
    className: u('dgs-ui-kit-w-full dgs-ui-kit-flex dgs-ui-kit-items-centerd', w(e ?? 'center')),
    children: t.jsx(F, { ...i }),
  });
}
function X(e, i) {
  if (e)
    return u(
      'dgs-ui-kit-sticky dgs-ui-kit-z-10',
      'after:dgs-ui-kit-content[""] after:dgs-ui-kit-absolute after:dgs-ui-kit-top-0 after:dgs-ui-kit-h-full after:dgs-ui-kit-w-[30px] after:dgs-ui-kit-transition-shadow',
      {
        ' dgs-ui-kit-right-[-1px] dgs-ui-kit-pr-[calc(1em+1px)] after:dgs-ui-kit-left-0 after:-dgs-ui-kit-translate-x-full after:dgs-ui-kit-shadow-[inset_-10px_0_8px_-8px] after:dgs-ui-kit-shadow-transparent':
          e === 'right',
        ' dgs-ui-kit-left-[-1px] dgs-ui-kit-pl-[calc(1em+1px)] after:dgs-ui-kit-right-0 after:dgs-ui-kit-translate-x-full after:dgs-ui-kit-shadow-[inset_10px_0_8px_-8px] after:dgs-ui-kit-shadow-transparent':
          e === 'left',
        'before:dgs-ui-kit-content-[""] before:dgs-ui-kit-absolute before:dgs-ui-kit-top-0 before:dgs-ui-kit-right-0 before:dgs-ui-kit-w-full before:dgs-ui-kit-border-t before:md:dgs-ui-kit-border-t-0 before:dgs-ui-kit-border-solid before:dgs-ui-kit-border-gray-200':
          i,
      },
    );
}
v.__docgenInfo = { description: '', methods: [], displayName: 'renderRowSelectCheckbox' };
const p = (e) => {
  const { children: i, className: o, type: n, sticky: r, addBorderToSticky: a, stuckToTop: l } = e,
    s = g.useRef(null),
    c = n,
    { observer: d } = T();
  return (
    g.useEffect(() => {
      if (!(!s.current || !d))
        return (
          r && d.observe(s.current),
          () => {
            !s.current || !d || (r && d.unobserve(s.current));
          }
        );
    }, [s, d]),
    t.jsx(c, {
      ref: s,
      className: u(o, X(r, a), {
        'dgs-ui-kit-border-b-0 before:dgs-ui-kit-content[""] before:dgs-ui-kit-absolute before:dgs-ui-kit-bottom-0 before:dgs-ui-kit-left-0 before:dgs-ui-kit-w-full before:dgs-ui-kit-border-b before:dgs-ui-kit-border-solid before:dgs-ui-kit-border-gray-200':
          l,
        'dgs-ui-kit-top-0 dgs-ui-kit-z-20': l && r,
        'dgs-ui-kit-sticky dgs-ui-kit-top-0 dgs-ui-kit-z-10': l && !r,
      }),
      id: r && `sticky-cell-${r}`,
      children: i,
    })
  );
};
p.__docgenInfo = {
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
const C =
  'dgs-ui-kit-p-4 dgs-ui-kit-pl-0 dgs-ui-kit-bg-white dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200';
function Y(e, i) {
  return e ? (Array.isArray(e) ? e.reduce((o, n) => o?.[n] ?? null, i) : i[e]) : null;
}
function V(e, i, o) {
  if (typeof e.render == 'function') return e.render(i, o);
  const n = Y(e.dataIndex, i);
  if (e.ellipsis) {
    const r = t.jsx('div', { className: '!dgs-ui-kit-truncate', children: n });
    return typeof e.ellipsis != 'boolean' && e.ellipsis.hideTooltip
      ? r
      : t.jsx(q, { wrapperClassName: 'dgs-ui-kit-w-full', content: n, children: r });
  }
  return n;
}
const W = (e) => {
  const { havePagination: i } = e,
    { columns: o, data: n, rowKey: r, rowSelection: a, stickyTableHeader: l } = T();
  return t.jsx('tbody', {
    children: n.map((s, c) =>
      t.jsxs(
        'tr',
        {
          children: [
            O(a) &&
              t.jsx(p, {
                type: 'td',
                className: u(
                  C,
                  a?.className,
                  { 'dgs-ui-kit-border-b-0 dgs-ui-kit-rounded-br-2xl': !i && c === n.length - 1 },
                  a?.className,
                ),
                sticky: a?.sticky,
                addBorderToSticky: l ? c !== 0 : !0,
                children: v(a?.align, {
                  onChange: (d) => a?.onSelectRow(d, s[r]),
                  checked: !!a?.selectedRowKeys.find((d) => d === s[r]),
                }),
              }),
            o.map((d) =>
              t.jsx(
                p,
                {
                  type: 'td',
                  className: u(
                    C,
                    {
                      'dgs-ui-kit-border-b-0 first:dgs-ui-kit-rounded-br-2xl last:dgs-ui-kit-rounded-bl-2xl':
                        !i && c === n.length - 1,
                    },
                    d.className,
                  ),
                  sticky: d.sticky,
                  addBorderToSticky: l ? c !== 0 : !0,
                  children: t.jsx('div', {
                    className: u(
                      'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-ml-2',
                      w(d.align),
                    ),
                    children: V(d, s, c),
                  }),
                },
                `${s[r]}-${D(d.key, d.dataIndex)}`,
              ),
            ),
          ],
        },
        s[r],
      ),
    ),
  });
};
W.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TBody',
  props: { havePagination: { required: !0, tsType: { name: 'boolean' }, description: '' } },
};
const M = (e) =>
  t.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: t.jsx('path', {
      fill: 'currentColor',
      d: 'M19.53 16.03a.75.75 0 0 1-.976.073l-.084-.073L12 9.561l-6.47 6.47a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084 7-7a.75.75 0 0 1 .976-.073l.084.073 7 7a.75.75 0 0 1 0 1.06',
    }),
  });
M.__docgenInfo = { description: '', methods: [], displayName: 'IconArrowUp2' };
function ee(e, i) {
  if (e.length !== i.length) return !1;
  e.sort(), i.sort();
  for (let o = 0; o < e.length; o++) if (e[o] !== i[o]) return !1;
  return !0;
}
const b = 16,
  R =
    'dgs-ui-kit-p-4 dgs-ui-kit-pl-0 dgs-ui-kit-text-gray-500 dgs-ui-kit-bg-gray-50 dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200',
  _ = '!dgs-ui-kit-h-8 dgs-ui-kit-shrink-0';
function A(e, i) {
  const o = e === 'ascend' ? M : Z;
  return t.jsx('button', {
    onClick: () => i.onSort(e),
    children: t.jsx(o, {
      width: b,
      height: b,
      className: i.active === e ? 'dgs-ui-kit-text-primary-500' : 'dgs-ui-kit-text-gray-500',
    }),
  });
}
function I(e, i) {
  return t.jsxs('div', {
    className:
      'dgs-ui-kit-font-p1-medium dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse',
    children: [
      t.jsx('span', { children: e }),
      i && (i.anchorIcon ?? t.jsx(G, { width: b, height: b })),
    ],
  });
}
function E(e, i) {
  return e.map((o) => o[i]);
}
const $ = (e) => {
  const { haveHeader: i } = e,
    { columns: o, rowKey: n, rowSelection: r, data: a, stickyTableHeader: l } = T();
  return t.jsx('thead', {
    children: t.jsxs('tr', {
      children: [
        O(r) &&
          t.jsx(p, {
            type: 'th',
            className: u(R, { 'dgs-ui-kit-rounded-tr-2xl': !i }, r?.className),
            sticky: r?.sticky,
            stuckToTop: l,
            children: t.jsxs('div', {
              className: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-between',
              children: [
                v(r?.align, {
                  checked: r.selectedRowKeys.length > 0,
                  isIndeterminate: !ee(E(a, n), r.selectedRowKeys),
                  onChange: (s) => r?.onSelectRow(s, s.target.checked ? E(a, n) : []),
                }),
                t.jsx(N, { type: 'vertical', className: _ }),
              ],
            }),
          }),
        o.map((s, c) =>
          t.jsx(
            p,
            {
              type: 'th',
              sticky: s.sticky,
              className: u(
                R,
                { 'first:dgs-ui-kit-rounded-tr-2xl last:dgs-ui-kit-rounded-tl-2xl': !i },
                s.className,
              ),
              stuckToTop: l,
              children: t.jsxs('div', {
                className: 'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center',
                children: [
                  t.jsxs('div', {
                    className: u(
                      'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse dgs-ui-kit-w-full dgs-ui-kit-ml-2',
                      w(s.align),
                    ),
                    children: [
                      s.tooltip?.content
                        ? t.jsx(q, { ...s.tooltip, children: I(s.title, s.tooltip) })
                        : I(s.title),
                      typeof s.sort?.onSort == 'function' &&
                        t.jsxs('div', {
                          className: 'dgs-ui-kit-flex dgs-ui-kit-flex-col',
                          children: [A('ascend', s.sort), A('descend', s.sort)],
                        }),
                    ],
                  }),
                  c !== o.length - 1 && t.jsx(N, { type: 'vertical', className: _ }),
                ],
              }),
            },
            D(s.key, s.dataIndex),
          ),
        ),
      ],
    }),
  });
};
$.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'THead',
  props: { haveHeader: { required: !0, tsType: { name: 'boolean' }, description: '' } },
};
function j(e) {
  const { header: i, wrapperClassName: o, className: n, data: r, pagination: a } = e,
    l = (i && Object.values(i).length > 0) ?? !1,
    s = !!(a?.totalCount && a?.pageSize);
  return t.jsxs('div', {
    className: u(
      'dgs-ui-kit-relative dgs-ui-kit-bg-white dgs-ui-kit-border dgs-ui-kit-border-gray-200 dgs-ui-kit-border-solid dgs-ui-kit-rounded-2xl ',
      o,
    ),
    children: [
      l && t.jsx(z, { ...i, total: a?.totalCount ?? r.length }),
      t.jsx('table', {
        className: n,
        children: t.jsxs(K, {
          ...e,
          children: [t.jsx($, { haveHeader: l }), t.jsx(W, { havePagination: s })],
        }),
      }),
      s && t.jsx(J, { className: u('dgs-ui-kit-py-4 !dgs-ui-kit-px-0', a?.className), ...a }),
    ],
  });
}
j.__docgenInfo = { description: '', methods: [], displayName: 'Table' };
const we = {
    title: 'Components/Table',
    component: j,
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
      stickyTableHeader: { control: 'boolean', table: { type: { summary: 'boolean' } } },
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
    },
  },
  te = [
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
  ie = [
    { title: 'نام محصول', key: 'title', dataIndex: 'title', sort: { onSort() {} } },
    { title: 'قیمت', dataIndex: 'price', key: 'price', tooltip: { content: 'قیمت به تومان است.' } },
    { title: 'جزئیات', dataIndex: 'details', key: 'details', ellipsis: !0 },
    {
      title: 'عملیات',
      key: 'actions',
      align: 'center',
      render: () =>
        t.jsx(B, { color: 'error', variant: 'outline', size: 'small', children: 'حذف محصول' }),
    },
  ],
  x = {
    data: te,
    columns: ie,
    className: 'dgs-ui-kit-w-[800px] dgs-ui-kit-table-fixed',
    rowKey: 'id',
  },
  f = { args: x },
  k = {
    args: {
      ...x,
      header: {
        title: 'جدول محصولات',
        showTotal: !0,
        extraElement: t.jsx(B, { size: 'small', variant: 'text', rightIcon: t.jsx(H, {}) }),
      },
      pagination: { pageSize: 6, totalCount: 120 },
    },
  },
  se = (e) => {
    const [i, o] = g.useState([]);
    return t.jsx(j, {
      rowSelection: {
        selectedRowKeys: i,
        sticky: 'right',
        onSelectRow(n, r) {
          Array.isArray(r)
            ? o(r)
            : n.target.checked
              ? o((l) => [...l, r])
              : o(i.filter((l) => l !== r));
        },
      },
      ...e,
    });
  },
  h = { args: x, render: (e) => t.jsx(se, { ...e }) },
  y = {
    args: {
      ...x,
      data: Array.from({ length: 100 }).map((e, i) => ({
        id: i,
        title: 'نام محصول',
        price: 32e4,
        details:
          'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
      })),
      stickyTableHeader: !0,
    },
  };
f.parameters = {
  ...f.parameters,
  docs: {
    ...f.parameters?.docs,
    source: {
      originalSource: `{
  args: defaultArgs
}`,
      ...f.parameters?.docs?.source,
    },
  },
};
k.parameters = {
  ...k.parameters,
  docs: {
    ...k.parameters?.docs,
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
      ...k.parameters?.docs?.source,
    },
  },
};
h.parameters = {
  ...h.parameters,
  docs: {
    ...h.parameters?.docs,
    source: {
      originalSource: `{
  args: defaultArgs,
  render: args => <TableWithSelectionExample {...args} />
}`,
      ...h.parameters?.docs?.source,
    },
  },
};
y.parameters = {
  ...y.parameters,
  docs: {
    ...y.parameters?.docs,
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
      ...y.parameters?.docs?.source,
    },
  },
};
const ve = ['Default', 'WithHeaderAndPagination', 'WithSelection', 'LongTable'];
export {
  f as Default,
  y as LongTable,
  k as WithHeaderAndPagination,
  h as WithSelection,
  ve as __namedExportsOrder,
  we as default,
};
