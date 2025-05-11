import { j as n } from './jsx-runtime-D_zvdyIk.js';
import { c as o } from './clsx-B-dksMZM.js';
import { B as u } from './index-CtPsmfai.js';
/* empty css               */ function g({
  size: e = 'small',
  filled: s,
  className: t,
  disabled: r,
  isActive: i,
}) {
  const a =
      'dgs-ui-kit-bg-white dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-rounded-full dgs-ui-kit-transition hover:dgs-ui-kit-ring-4 dgs-ui-kit-ring-gray-100 dgs-ui-kit-flex dgs-ui-kit-items-center',
    d = {
      small:
        'dgs-ui-kit-gap-1 dgs-ui-kit-py-1 dgs-ui-kit-px-3 dgs-ui-kit-font-p2-medium [&_svg]:dgs-ui-kit-size-4',
      large:
        'dgs-ui-kit-gap-2 dgs-ui-kit-py-2.5 dgs-ui-kit-px-5 dgs-ui-kit-font-p1-medium [&_svg]:dgs-ui-kit-size-5',
    },
    l = {
      default:
        'dgs-ui-kit-text-gray-700 hover:dgs-ui-kit-text-primary-500 dgs-ui-kit-border-gray-200 hover:dgs-ui-kit-border-gray-300',
      filled: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-500 dgs-ui-kit-border-primary-100',
    };
  return o(
    a,
    d[e],
    l[s ? 'filled' : 'default'],
    r && 'dgs-ui-kit-opacity-40 dgs-ui-kit-cursor-not-allowed',
    i && '!dgs-ui-kit-border-primary-500 !dgs-ui-kit-text-primary-500',
    t,
  );
}
const p = (e) => {
  const {
      label: s,
      rightIcon: t = null,
      leftIcon: r = null,
      badgeNumber: i,
      clickable: a,
      ...d
    } = e,
    l = a ? 'button' : 'div';
  return n.jsxs(l, {
    ...d,
    className: g(e),
    children: [t, s, i && n.jsx(u, { value: i, valueType: 'number' }), r],
  });
};
p.__docgenInfo = {
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
export { p as C };
