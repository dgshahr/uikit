import { j as i } from './jsx-runtime-D_zvdyIk.js';
import { c as o } from './clsx-B-dksMZM.js';
/* empty css               */ const c = {
    primary: {
      primary:
        'dgsuikit:bg-primary-500 dgsuikit:active:bg-primary-600 dgsuikit:hover:bg-primary-300 dgsuikit:text-white dgsuikit:border-transparent',
      success:
        'dgsuikit:bg-success-600 dgsuikit:active:bg-success-700 dgsuikit:hover:bg-success-500 dgsuikit:text-white dgsuikit:border-transparent',
      error:
        'dgsuikit:bg-error-500 dgsuikit:active:bg-error-600 dgsuikit:hover:bg-error-400 dgsuikit:text-white dgsuikit:border-transparent',
      warning:
        'dgsuikit:bg-warning-500 dgsuikit:active:bg-warning-600 dgsuikit:hover:bg-warning-300 dgsuikit:text-gray-900 dgsuikit:border-transparent',
      gray: 'dgsuikit:bg-gray-600 dgsuikit:active:bg-gray-700 dgsuikit:hover:bg-gray-500 dgsuikit:text-white dgsuikit:border-transparent',
    },
    secondary: {
      primary:
        'dgsuikit:text-primary-500 dgsuikit:hover:text-primary-400 dgsuikit:active:text-primary-700 dgsuikit:bg-gray-100 dgsuikit:active:bg-gray-200 dgsuikit:hover:bg-gray-50 dgsuikit:border-transparent',
      success:
        'dgsuikit:text-success-600 dgsuikit:hover:text-success-500 dgsuikit:active:text-success-700 dgsuikit:bg-success-50 dgsuikit:active:bg-success-100 dgsuikit:hover:bg-success-50 dgsuikit:border-transparent',
      error:
        'dgsuikit:text-error-500 dgsuikit:hover:text-error-400 dgsuikit:active:text-error-700 dgsuikit:bg-error-50 dgsuikit:active:bg-error-100 dgsuikit:hover:bg-error-50 dgsuikit:border-transparent',
      warning:
        'dgsuikit:text-gray-700 dgsuikit:hover:text-gray-600 dgsuikit:active:text-gray-800 dgsuikit:bg-warning-50 dgsuikit:active:bg-warning-100 dgsuikit:hover:bg-warning-50 dgsuikit:border-transparent',
      gray: 'dgsuikit:text-gray-600 dgsuikit:hover:text-gray-500 dgsuikit:active:text-gray-800 dgsuikit:bg-gray-100 dgsuikit:active:bg-gray-200 dgsuikit:hover:bg-gray-100 dgsuikit:border-transparent',
    },
    outline: {
      primary:
        'dgsuikit:text-primary-500 dgsuikit:hover:text-primary-400 dgsuikit:active:text-primary-700 dgsuikit:border-primary-300 dgsuikit:hover:border-primary-200 dgsuikit:active:border-primary-600',
      success:
        'dgsuikit:text-success-600 dgsuikit:hover:text-success-500 dgsuikit:active:text-success-700 dgsuikit:border-success-500 dgsuikit:hover:border-success-400 dgsuikit:active:border-success-700 dgsuikit:disabled:active:border-success-600',
      error:
        'dgsuikit:text-error-500 dgsuikit:hover:text-error-400 dgsuikit:active:text-error-700 dgsuikit:border-error-300 dgsuikit:hover:border-error-200 dgsuikit:active:border-error-600 dgsuikit:disabled:border-error-500',
      warning:
        'dgsuikit:text-warning-700 dgsuikit:hover:text-warning-600 dgsuikit:active:text-warning-800 dgsuikit:border-warning-500 dgsuikit:hover:border-warning-400 dgsuikit:active:border-warning-600',
      gray: 'dgsuikit:text-gray-600 dgsuikit:hover:text-gray-500 dgsuikit:active:text-gray-800 dgsuikit:border-gray-400 dgsuikit:hover:border-gray-300 dgsuikit:active:border-gray-700 dgsuikit:disabled:border-gray-600',
    },
    text: {
      primary:
        'dgsuikit:text-primary-500 dgsuikit:hover:text-primary-400 dgsuikit:active:text-primary-700 dgsuikit:border-transparent',
      success:
        'dgsuikit:text-success-600 dgsuikit:hover:text-success-500 dgsuikit:active:text-success-700 dgsuikit:border-transparent',
      error:
        'dgsuikit:text-error-500 dgsuikit:hover:text-error-400 dgsuikit:active:text-error-700 dgsuikit:border-transparent',
      warning:
        'dgsuikit:text-warning-700 dgsuikit:hover:text-warning-600 dgsuikit:active:text-warning-800 dgsuikit:border-transparent',
      gray: 'dgsuikit:text-gray-600 dgsuikit:hover:text-gray-500 dgsuikit:active:text-gray-800 dgsuikit:border-transparent',
    },
  },
  m = {
    small: 'button-small-icon dgsuikit:py-2.5 dgsuikit:px-4 dgsuikit:font-button-small',
    medium: 'button-medium-icon dgsuikit:py-3 dgsuikit:px-5 dgsuikit:font-button-medium',
    large: 'button-large-icon dgsuikit:py-3 dgsuikit:px-6 dgsuikit:font-button-large',
  },
  b = {
    small: 'button-small-icon dgsuikit:p-[10px]',
    medium: 'button-medium-icon dgsuikit:p-3',
    large: 'button-large-icon dgsuikit:p-3',
  },
  k = 'dgsuikit:opacity-0';
function p({
  variant: u = 'primary',
  color: g = 'primary',
  isFullWidth: d,
  className: e,
  size: r = 'medium',
  children: s,
}) {
  return [
    'dgsuikit:border dgsuikit:border-solid dgsuikit:relative dgsuikit:rounded-lg dgsuikit:min-w-max dgsuikit:h-fit dgsuikit:disabled:cursor-not-allowed dgsuikit:transition-all duration-300 dgsuikit:flex dgsuikit:items-center dgsuikit:disabled:opacity-40',
    d ? 'dgsuikit:w-full dgsuikit:justify-center' : 'dgsuikit:w-fit',
    c[u][g],
    s ? m[r] : b[r],
    Number(e?.length) > 0 && e,
  ]
    .slice()
    .join(' ');
}
const y = ({
  variant: u = 'primary',
  color: g = 'primary',
  isFullWidth: d,
  className: e,
  size: r,
  leftIcon: s,
  rightIcon: n,
  isLoading: a,
  children: t,
  ...l
}) =>
  i.jsxs('button', {
    className: p({ variant: u, color: g, isFullWidth: d, className: e, size: r, children: t }),
    ...l,
    children: [
      n &&
        i.jsx('span', {
          className: o(
            'dgsuikit:block icon-button dgsuikit:[&_svg]:size-full',
            { 'dgsuikit:ml-2': t },
            { [k]: a },
          ),
          children: n,
        }),
      t && i.jsx('div', { className: o({ [k]: a }), children: t }),
      a &&
        i.jsx('div', {
          className:
            'dgsuikit:absolute dgsuikit:top-0 dgsuikit:left-0 dgsuikit:w-full dgsuikit:h-full dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center',
          children: i.jsx('div', { className: 'dot-flashing' }),
        }),
      s &&
        i.jsx('span', {
          className: o(
            'dgsuikit:block icon-button dgsuikit:[&_svg]:size-full',
            { 'dgsuikit:mr-2': t },
            { [k]: a },
          ),
          children: s,
        }),
    ],
  });
y.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Button',
  props: {
    variant: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'secondary' | 'outline' | 'text'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'secondary'" },
          { name: 'literal', value: "'outline'" },
          { name: 'literal', value: "'text'" },
        ],
      },
      description: '',
      defaultValue: { value: "'primary'", computed: !1 },
    },
    color: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'warning' | 'error' | 'success' | 'gray'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'warning'" },
          { name: 'literal', value: "'error'" },
          { name: 'literal', value: "'success'" },
          { name: 'literal', value: "'gray'" },
        ],
      },
      description: '',
      defaultValue: { value: "'primary'", computed: !1 },
    },
    isFullWidth: { required: !1, tsType: { name: 'boolean' }, description: '' },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'small' | 'medium' | 'large'",
        elements: [
          { name: 'literal', value: "'small'" },
          { name: 'literal', value: "'medium'" },
          { name: 'literal', value: "'large'" },
        ],
      },
      description: '',
    },
    leftIcon: { required: !1, tsType: { name: 'JSX.Element' }, description: '' },
    rightIcon: { required: !1, tsType: { name: 'JSX.Element' }, description: '' },
    isLoading: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
export { y as B };
