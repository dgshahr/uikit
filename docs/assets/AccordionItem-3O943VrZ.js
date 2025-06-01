'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as a } from './clsx-B-dksMZM.js';
import { r as c } from './index-CTzypqlY.js';
import { I as w } from './IconArrowDown2-BBhufJ55.js';
import { D as b } from './index-Ch-6HcDK.js';
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
    className: a('dgsuikit:flex dgsuikit:flex-col', t),
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
    className: a('dgsuikit:bg-white dgsuikit:px-4 dgsuikit:pt-4', u),
    children: [
      e.jsxs('button', {
        className: a(
          'dgsuikit:flex dgsuikit:justify-between dgsuikit:items-center dgsuikit:w-full',
          o ? 'dgsuikit:text-primary-500' : 'dgsuikit:text-gray-600',
          h,
        ),
        onClick: N,
        disabled: f,
        children: [
          e.jsx('div', {
            className: o ? 'dgsuikit:font-h5-bold' : 'dgsuikit:font-p1-medium',
            children: t,
          }),
          !y &&
            e.jsx(w, {
              className: a(
                'dgsuikit:transition-transform dgsuikit:duration-300 dgsuikit:shrink-0 dgsuikit:w-auto dgsuikit:h-auto',
                o && 'dgsuikit:rotate-180',
              ),
              width: 20,
              height: 20,
            }),
        ],
      }),
      e.jsx('div', {
        className: a(
          'dgsuikit:grid dgsuikit:font-p1-regular dgsuikit:text-gray-600 dgsuikit:overflow-hidden dgsuikit:transition-all dgsuikit:duration-300 dgsuikit:ease-in-out',
          o
            ? 'dgsuikit:grid-rows-[1fr] dgsuikit:opacity-100 dgsuikit:mt-3'
            : 'dgsuikit:grid-rows-[0fr] dgsuikit:opacity-0',
          m,
        ),
        children: e.jsx('div', { className: 'dgsuikit:overflow-hidden', children: s }),
      }),
      !g && e.jsx(b, { type: 'horizontal', color: 'white', className: 'dgsuikit:mt-4' }),
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
