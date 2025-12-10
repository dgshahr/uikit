import { j as u } from './jsx-runtime-D_zvdyIk.js';
import { c as n } from './clsx-B-dksMZM.js';
import { o as m } from './omitObjects-DTdUR98j.js';
import { B as p } from './index-BDor-GfJ.js';
/* empty css               */ const o = {
    primary: {
      filled:
        'dgsuikit:text-primary-500 dgsuikit:hover:text-primary-500 dgsuikit:border-primary-100 dgsuikit:bg-primary-50',
      base: 'dgsuikit:bg-white dgsuikit:text-gray-700 dgsuikit:hover:text-primary-500 dgsuikit:border-gray-200 dgsuikit:hover:border-gray-300',
      active: 'dgsuikit:!border-primary-500 dgsuikit:!text-primary-500',
    },
    gray: {
      filled:
        'dgsuikit:text-gray-600 dgsuikit:hover:text-gray-600 dgsuikit:border-gray-200 dgsuikit:bg-gray-50',
      base: 'dgsuikit:bg-white dgsuikit:text-gray-700 dgsuikit:hover:text-gray-600 dgsuikit:border-gray-200 dgsuikit:hover:border-gray-300',
      active: 'dgsuikit:!border-gray-500 dgsuikit:!text-gray-600',
    },
  },
  c = 'dgsuikit:opacity-40 dgsuikit:cursor-not-allowed',
  k = { xsmall: 'small', small: 'small', large: 'medium' };
function y({
  size: i = 'small',
  filled: s,
  color: e = 'primary',
  className: r,
  disabled: t,
  isActive: a,
}) {
  const d =
      'dgsuikit:border dgsuikit:border-solid dgsuikit:rounded-full dgsuikit:transition dgsuikit:hover:ring-4 dgsuikit:ring-gray-100 dgsuikit:flex dgsuikit:items-center',
    l = {
      xsmall:
        'dgsuikit:gap-0.5 dgsuikit:py-0.5 dgsuikit:px-2 dgsuikit:font-p3-medium dgsuikit:[&_svg]:size-4',
      small:
        'dgsuikit:gap-1 dgsuikit:py-1 dgsuikit:px-3 dgsuikit:font-p2-medium dgsuikit:[&_svg]:size-4',
      large:
        'dgsuikit:gap-2 dgsuikit:py-2.5 dgsuikit:px-5 dgsuikit:font-p1-medium dgsuikit:[&_svg]:size-5',
    },
    g = s ? o[e].filled : o[e].base;
  return n(d, l[i], g, t && c, a && o[e].active, r);
}
const b = (i) => {
  const {
      label: s,
      rightIcon: e = null,
      leftIcon: r = null,
      badgeNumber: t,
      clickable: a,
      ...d
    } = i,
    l = a ? 'button' : 'div',
    g = m(d, ['filled', 'size', 'isActive', 'color']);
  return u.jsxs(l, {
    ...g,
    className: n(y(i), ''),
    children: [
      e,
      s,
      t && u.jsx(p, { value: t, valueType: 'number', color: i.color, size: k[i.size || 'small'] }),
      r,
    ],
  });
};
b.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Chip',
  props: {
    label: {
      required: !0,
      tsType: {
        name: 'union',
        raw: 'string | ReactNode',
        elements: [{ name: 'string' }, { name: 'ReactNode' }],
      },
      description: '',
    },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'xsmall' | 'small' | 'large'",
        elements: [
          { name: 'literal', value: "'xsmall'" },
          { name: 'literal', value: "'small'" },
          { name: 'literal', value: "'large'" },
        ],
      },
      description: '',
    },
    rightIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    leftIcon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    filled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    badgeNumber: { required: !1, tsType: { name: 'number' }, description: '' },
    isActive: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    color: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'gray'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'gray'" },
        ],
      },
      description: '',
    },
  },
};
export { b as C };
