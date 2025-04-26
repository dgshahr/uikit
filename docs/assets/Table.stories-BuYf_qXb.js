import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { r as H } from './index-CTzypqlY.js';
import { B as I } from './index-BJigavT-.js';
import { c as l } from './clsx-B-dksMZM.js';
import { B as z } from './index-qRQMl068.js';
import { C as D } from './index-C-3LqFTM.js';
import { T as R } from './index-Cqa0uTrI.js';
import { I as O } from './IconArrowDown2-BBhufJ55.js';
import { I as q } from './IconInfoCircleOutline-Dd1i2qLz.js';
import { D as w } from './index-BJ3vqg7X.js';
import { P as W } from './index-BwOV1Ihi.js';
/* empty css               */ import './omitObjects-DTdUR98j.js';
import './RadioCheckboxWrapper-BVspdQ78.js';
import './useFlipPosition-Eiz29amO.js';
import './index-GdYbSsJO.js';
import './IconArrowLeft2-DI3fgQDw.js';
import './IconArrowRight2-C2yC-io_.js';
const A = (e) =>
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
A.__docgenInfo = { description: '', methods: [], displayName: 'IconRefreshLeft' };
const _ = (e) => {
  const { title: i, actionButton: r, showTotal: a, total: n, className: d } = e;
  return t.jsxs('div', {
    className: l(
      'dgs-ui-kit-p-4 dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200',
      d,
    ),
    children: [
      t.jsx('div', {
        className: 'dgs-ui-kit-font-h4-bold dgs-ui-kit-text-gray-700 dgs-ui-kit-w-full',
        children: i,
      }),
      a &&
        t.jsxs('div', {
          className: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-shrink-0',
          children: [
            t.jsx('span', {
              className: 'dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-700 dgs-ui-kit-ml-1',
              children: 'تعداد نتایج:',
            }),
            t.jsx(z, {
              value: n ?? 0,
              valueType: 'number',
              size: 'large',
              color: 'primary',
              type: 'twoTone',
            }),
          ],
        }),
      r &&
        t.jsx(I, {
          className: l('dgs-ui-kit-shrink-0', r.className),
          ...r,
          children: r.children ?? null,
        }),
    ],
  });
};
_.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TableHeader',
  props: {
    title: { required: !1, tsType: { name: 'string' }, description: '' },
    showTotal: { required: !1, tsType: { name: 'boolean' }, description: '' },
    actionButton: { required: !1, tsType: { name: 'ButtonProps' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    total: { required: !1, tsType: { name: 'number' }, description: '' },
  },
};
function f(e) {
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
function B(e, i) {
  return e || (Array.isArray(i) ? i[i.length - 1] : i);
}
function K(e) {
  return !!((e && e.selectedRowKeys.length > 1) || typeof e?.onSelectRow == 'function');
}
function k(e, i) {
  return t.jsx('div', {
    className: l('dgs-ui-kit-w-full dgs-ui-kit-flex dgs-ui-kit-items-center', f(e ?? 'center')),
    children: t.jsx(D, { ...i }),
  });
}
function h(e, i) {
  if (e)
    return l('dgs-ui-kit-sticky dgs-ui-kit-translate-y-[1px] dgs-ui-kit-z-10', {
      'dgs-ui-kit-right-0': e === 'right',
      'dgs-ui-kit-left-0': e === 'left',
      'after:dgs-ui-kit-content-[""] after:dgs-ui-kit-absolute after:dgs-ui-kit-bottom-0 after:dgs-ui-kit-right-0 after:dgs-ui-kit-w-full after:dgs-ui-kit-border-b after:dgs-ui-kit-border-solid after:dgs-ui-kit-border-gray-200':
        i,
    });
}
k.__docgenInfo = { description: '', methods: [], displayName: 'renderRowSelectCheckbox' };
const N =
  'dgs-ui-kit-p-4 dgs-ui-kit-pl-0 dgs-ui-kit-bg-white dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200';
function M(e, i) {
  return e ? (Array.isArray(e) ? e.reduce((r, a) => r?.[a] ?? null, i) : i[e]) : null;
}
function U(e, i, r) {
  if (typeof e.render == 'function') return e.render(i, r);
  const a = M(e.dataIndex, i);
  if (e.ellipsis) {
    const n = t.jsx('div', { className: '!dgs-ui-kit-truncate', children: a });
    return typeof e.ellipsis != 'boolean' && e.ellipsis.hideTooltip
      ? n
      : t.jsx(R, { wrapperClassName: 'dgs-ui-kit-w-full', content: a, children: n });
  }
  return a;
}
function P(e) {
  const { data: i, columns: r, rowKey: a, rowSelection: n, havePagination: d } = e;
  return t.jsx('tbody', {
    children: i.map((s, c) =>
      t.jsxs(
        'tr',
        {
          children: [
            K(n) &&
              t.jsx('td', {
                className: l(
                  N,
                  n?.className,
                  { 'dgs-ui-kit-border-b-0 dgs-ui-kit-rounded-br-2xl': !d && c === i.length - 1 },
                  h(n?.sticky),
                  n?.className,
                ),
                children: k(n?.align, {
                  onChange: (o) => n?.onSelectRow(o, s[a]),
                  checked: !!n?.selectedRowKeys.find((o) => o === s[a]),
                }),
              }),
            r.map((o) =>
              t.jsx(
                'td',
                {
                  className: l(
                    N,
                    {
                      'dgs-ui-kit-border-b-0 first:dgs-ui-kit-rounded-br-2xl last:dgs-ui-kit-rounded-bl-2xl':
                        !d && c === i.length - 1,
                    },
                    h(o?.sticky),
                    o.className,
                  ),
                  children: t.jsx('div', {
                    className: l(
                      'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-ml-2',
                      f(o.align),
                    ),
                    children: U(o, s, c),
                  }),
                },
                `${s[a]}-${B(o.key, o.dataIndex)}`,
              ),
            ),
          ],
        },
        s[a],
      ),
    ),
  });
}
P.__docgenInfo = { description: '', methods: [], displayName: 'TBody' };
const L = (e) =>
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
L.__docgenInfo = { description: '', methods: [], displayName: 'IconArrowUp2' };
function $(e, i) {
  if (e.length !== i.length) return !1;
  e.sort(), i.sort();
  for (let r = 0; r < e.length; r++) if (e[r] !== i[r]) return !1;
  return !0;
}
const u = 16,
  v =
    'dgs-ui-kit-p-4 dgs-ui-kit-pl-0 dgs-ui-kit-text-gray-500 dgs-ui-kit-bg-gray-50 dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200',
  T = '!dgs-ui-kit-h-8 dgs-ui-kit-shrink-0';
function S(e, i) {
  return t.jsxs('div', {
    className:
      'dgs-ui-kit-font-p1-medium dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse',
    children: [
      t.jsx('span', { children: e }),
      i && (i.anchorIcon ?? t.jsx(q, { width: u, height: u })),
    ],
  });
}
function C(e, i) {
  return e.map((r) => r[i]);
}
function E(e) {
  const { columns: i, haveHeader: r, rowSelection: a, rowKey: n, data: d } = e;
  return t.jsx('thead', {
    children: t.jsxs('tr', {
      children: [
        K(a) &&
          t.jsx('th', {
            className: l(v, { 'dgs-ui-kit-rounded-tr-2xl': !r }, h(a?.sticky, !0), a?.className),
            children: t.jsxs('div', {
              className: 'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-between',
              children: [
                k(a?.align, {
                  checked: a.selectedRowKeys.length > 0,
                  isIndeterminate: !$(C(d, n), a.selectedRowKeys),
                  onChange: (s) => a?.onSelectRow(s, s.target.checked ? C(d, n) : []),
                }),
                t.jsx(w, { type: 'vertical', className: T }),
              ],
            }),
          }),
        i.map((s, c) =>
          t.jsx(
            'th',
            {
              className: l(
                v,
                { 'first:dgs-ui-kit-rounded-tr-2xl last:dgs-ui-kit-rounded-tl-2xl': !r },
                h(s?.sticky, !0),
                s.className,
              ),
              children: t.jsxs('div', {
                className: 'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center',
                children: [
                  t.jsxs('div', {
                    className: l(
                      'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse dgs-ui-kit-w-full dgs-ui-kit-ml-2',
                      f(s.align),
                    ),
                    children: [
                      s.tooltip?.content
                        ? t.jsx(R, { ...s.tooltip, children: S(s.title, s.tooltip) })
                        : S(s.title),
                      typeof s.onSort == 'function' &&
                        t.jsxs('div', {
                          className: 'dgs-ui-kit-flex dgs-ui-kit-flex-col',
                          children: [
                            t.jsx('button', {
                              onClick: () => s.onSort('ascend'),
                              children: t.jsx(L, { width: u, height: u }),
                            }),
                            t.jsx('button', {
                              onClick: () => s.onSort('descend'),
                              children: t.jsx(O, { width: u, height: u }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  c !== i.length - 1 && t.jsx(w, { type: 'vertical', className: T }),
                ],
              }),
            },
            B(s.key, s.dataIndex),
          ),
        ),
      ],
    }),
  });
}
E.__docgenInfo = { description: '', methods: [], displayName: 'THead' };
function x(e) {
  const {
      header: i,
      wrapperClassName: r,
      className: a,
      columns: n,
      rowSelection: d,
      data: s,
      rowKey: c,
      pagination: o,
    } = e,
    b = (i && Object.values(i).length > 0) ?? !1,
    j = !!(o?.totalCount && o?.pageSize);
  return t.jsxs('div', {
    className: l(
      'dgs-ui-kit-relative dgs-ui-kit-bg-white dgs-ui-kit-border dgs-ui-kit-border-gray-200 dgs-ui-kit-border-solid dgs-ui-kit-rounded-2xl',
      r,
    ),
    children: [
      b && t.jsx(_, { ...i, total: o?.totalCount ?? s.length }),
      t.jsxs('table', {
        className: a,
        children: [
          t.jsx(E, { columns: n, haveHeader: b, rowKey: c, rowSelection: d, data: s }),
          t.jsx(P, { columns: n, data: s, rowKey: c, rowSelection: d, havePagination: j }),
        ],
      }),
      j && t.jsx(W, { className: l('dgs-ui-kit-py-4 !dgs-ui-kit-px-0', o?.className), ...o }),
    ],
  });
}
x.__docgenInfo = { description: '', methods: [], displayName: 'Table' };
const pe = {
    title: 'Components/Table',
    component: x,
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
  onSort?: (sortOrder: 'ascend' | 'descend') => void;
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
            actionButton?: ButtonProps;
            className?: string;
}`,
          },
        },
      },
      pagination: { control: 'object', table: { type: { summary: 'PaginationProps' } } },
      rowKey: { table: { type: { summary: 'string' } } },
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
  V = [
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
  Z = [
    { title: 'نام محصول', key: 'title', dataIndex: 'title', onSort: () => {} },
    { title: 'قیمت', dataIndex: 'price', key: 'price', tooltip: { content: 'قیمت به تومان است.' } },
    { title: 'جزئیات', dataIndex: 'details', key: 'details', ellipsis: !0 },
    {
      title: 'عملیات',
      key: 'actions',
      align: 'center',
      render: () =>
        t.jsx(I, { color: 'error', variant: 'outline', size: 'small', children: 'حذف محصول' }),
    },
  ],
  y = {
    data: V,
    columns: Z,
    className: 'dgs-ui-kit-w-[800px] dgs-ui-kit-table-fixed',
    rowKey: 'id',
  },
  g = { args: y },
  p = {
    args: {
      ...y,
      header: {
        title: 'جدول محصولات',
        showTotal: !0,
        actionButton: { size: 'small', variant: 'text', rightIcon: t.jsx(A, {}) },
      },
      pagination: { pageSize: 6, totalCount: 120 },
    },
  },
  F = (e) => {
    const [i, r] = H.useState([]);
    return t.jsx(x, {
      rowSelection: {
        selectedRowKeys: i,
        sticky: 'right',
        onSelectRow(a, n) {
          Array.isArray(n)
            ? r(n)
            : a.target.checked
              ? r((s) => [...s, n])
              : r(i.filter((s) => s !== n));
        },
      },
      ...e,
    });
  },
  m = { args: y, render: (e) => t.jsx(F, { ...e }) };
g.parameters = {
  ...g.parameters,
  docs: {
    ...g.parameters?.docs,
    source: {
      originalSource: `{
  args: defaultArgs
}`,
      ...g.parameters?.docs?.source,
    },
  },
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...defaultArgs,
    header: {
      title: 'جدول محصولات',
      showTotal: true,
      actionButton: {
        size: 'small',
        variant: 'text',
        rightIcon: <IconRefreshLeft />
      }
    },
    pagination: {
      pageSize: 6,
      totalCount: 120
    }
  }
}`,
      ...p.parameters?.docs?.source,
    },
  },
};
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `{
  args: defaultArgs,
  render: args => <TableWithSelectionExample {...args} />
}`,
      ...m.parameters?.docs?.source,
    },
  },
};
const me = ['Default', 'WithHeaderAndPagination', 'WithSelection'];
export {
  g as Default,
  p as WithHeaderAndPagination,
  m as WithSelection,
  me as __namedExportsOrder,
  pe as default,
};
