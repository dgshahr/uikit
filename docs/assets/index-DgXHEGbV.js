import { j as n } from './jsx-runtime-D_zvdyIk.js';
import { c as u } from './clsx-B-dksMZM.js';
import { o as g } from './omitObjects-DTdUR98j.js';
import { B as m } from './index-B1FBgWTf.js';
/* empty css               */ function p({
  size: e = 'small',
  filled: s,
  className: t,
  disabled: r,
  isActive: i,
}) {
  const a =
      'dgsuikit:border dgsuikit:border-solid dgsuikit:rounded-full dgsuikit:transition dgsuikit:hover:ring-4 dgsuikit:ring-gray-100 dgsuikit:flex dgsuikit:items-center',
    d = {
      small:
        'dgsuikit:gap-1 dgsuikit:py-1 dgsuikit:px-3 dgsuikit:font-p2-medium dgsuikit:[&_svg]:size-4',
      large:
        'dgsuikit:gap-2 dgsuikit:py-2.5 dgsuikit:px-5 dgsuikit:font-p1-medium dgsuikit:[&_svg]:size-5',
    },
    l = {
      default:
        'dgsuikit:bg-white dgsuikit:text-gray-700 dgsuikit:hover:text-primary-500 dgsuikit:border-gray-200 dgsuikit:hover:border-gray-300',
      filled: 'dgsuikit:bg-primary-50 dgsuikit:text-primary-500 dgsuikit:border-primary-100',
    };
  return u(
    a,
    d[e],
    l[s ? 'filled' : 'default'],
    r && 'dgsuikit:opacity-40 dgsuikit:cursor-not-allowed',
    i && 'dgsuikit:!border-primary-500 dgsuikit:!text-primary-500',
    t,
  );
}
const c = (e) => {
  const {
      label: s,
      rightIcon: t = null,
      leftIcon: r = null,
      badgeNumber: i,
      clickable: a,
      ...d
    } = e,
    l = a ? 'button' : 'div',
    o = g(d, ['filled', 'size', 'isActive']);
  return n.jsxs(l, {
    ...o,
    className: p(e),
    children: [t, s, i && n.jsx(m, { value: i, valueType: 'number' }), r],
  });
};
c.__docgenInfo = {
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
        raw: "'small' | 'large'",
        elements: [
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
  },
};
export { c as C };
