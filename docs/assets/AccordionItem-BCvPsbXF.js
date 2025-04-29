'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as a } from './clsx-B-dksMZM.js';
import { r as c } from './index-CTzypqlY.js';
import { I as w } from './IconArrowDown2-BBhufJ55.js';
import { D as b } from './index-DZasg-7d.js';
const k = c.createContext({ activeKey: null, setActiveKey: () => {} }),
  I = () => c.useContext(k);
function j(i, s = !1) {
  if (!i) return s ? [] : null;
  const t = Array.isArray(i);
  return s ? (t ? i : [i]) : t ? i[0] : i;
}
const q = (i) => {
  const { defaultActiveKey: s, className: t, children: l, disableAccordion: u } = i,
    [m, g] = c.useState(j(s, u));
  return e.jsx('div', {
    className: a('dgs-ui-kit-flex dgs-ui-kit-flex-col', t),
    children: e.jsx(k.Provider, { value: { activeKey: m, setActiveKey: g }, children: l }),
  });
};
q.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'AccordionGroup',
  props: {
    defaultActiveKey: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'string | string[]',
        elements: [
          { name: 'string' },
          { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
        ],
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    disableAccordion: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
const T = (i) => {
  const {
      children: s,
      title: t,
      accordionKey: l,
      className: u,
      contentClassName: m,
      hideDivider: g = !1,
      hideArrow: y = !1,
      titleClassName: h,
      disable: f,
    } = i,
    { activeKey: r, setActiveKey: d } = I(),
    x = c.useId(),
    n = l ?? x,
    p = Array.isArray(r);
  function A() {
    return f ? !1 : p ? r.includes(n) : n === r;
  }
  const o = A();
  function N() {
    d(o ? (p ? r.filter((v) => v !== n) : null) : p ? [...r, n] : n);
  }
  return e.jsxs('div', {
    className: a('dgs-ui-kit-bg-white dgs-ui-kit-px-4 dgs-ui-kit-pt-4', u),
    children: [
      e.jsxs('button', {
        className: a(
          'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center dgs-ui-kit-w-full',
          o ? 'dgs-ui-kit-text-primary-500' : 'dgs-ui-kit-text-gray-600',
          h,
        ),
        onClick: N,
        disabled: f,
        children: [
          e.jsx('div', {
            className: o ? 'dgs-ui-kit-font-h5-bold' : 'dgs-ui-kit-font-p1-medium',
            children: t,
          }),
          !y &&
            e.jsx(w, {
              className: a(
                'dgs-ui-kit-transition-transform dgs-ui-kit-duration-300 dgs-ui-kit-shrink-0 dgs-ui-kit-w-auto dgs-ui-kit-h-auto',
                o && 'dgs-ui-kit-rotate-180',
              ),
              width: 20,
              height: 20,
            }),
        ],
      }),
      e.jsx('div', {
        className: a(
          'dgs-ui-kit-grid dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-600 dgs-ui-kit-overflow-hidden dgs-ui-kit-transition-all dgs-ui-kit-duration-300 dgs-ui-kit-ease-in-out',
          o
            ? 'dgs-ui-kit-grid-rows-[1fr] dgs-ui-kit-opacity-100 dgs-ui-kit-mt-3'
            : 'dgs-ui-kit-grid-rows-[0fr] dgs-ui-kit-opacity-0',
          m,
        ),
        children: e.jsx('div', { className: 'dgs-ui-kit-overflow-hidden', children: s }),
      }),
      !g && e.jsx(b, { type: 'horizontal', color: 'white', className: 'dgs-ui-kit-mt-4' }),
    ],
  });
};
T.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'AccordionItem',
  props: {
    title: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    accordionKey: { required: !1, tsType: { name: 'string' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    contentClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    hideDivider: { required: !1, tsType: { name: 'boolean' }, description: '' },
    hideArrow: { required: !1, tsType: { name: 'boolean' }, description: '' },
    titleClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    disable: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
export { T as A, q as a };
