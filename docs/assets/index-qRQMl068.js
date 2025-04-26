import { j as u } from './jsx-runtime-D_zvdyIk.js';
/* empty css               */ function n(i) {
  const e =
      'dgs-ui-kit-inline-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-rounded-[20px]',
    g = {
      twoTone: {
        primary: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-text-primary-600',
        secondary: 'dgs-ui-kit-bg-secondary-100 dgs-ui-kit-text-secondary-700',
        gray: 'dgs-ui-kit-bg-gray-100 dgs-ui-kit-text-gray-600',
        success: 'dgs-ui-kit-bg-success-50 dgs-ui-kit-text-success-800',
        error: 'dgs-ui-kit-bg-error-50 dgs-ui-kit-text-error-600',
        warning: 'dgs-ui-kit-bg-warning-50 dgs-ui-kit-text-warning-700',
        sky: 'dgs-ui-kit-bg-sky-50 dgs-ui-kit-text-sky-700',
        violet: 'dgs-ui-kit-bg-violet-50 dgs-ui-kit-text-violet-800',
        flamingo: 'dgs-ui-kit-bg-flamingo-50 dgs-ui-kit-text-flamingo-700',
      },
      solid: {
        primary: 'dgs-ui-kit-bg-primary-500 dgs-ui-kit-text-white',
        secondary: 'dgs-ui-kit-bg-secondary-600 dgs-ui-kit-text-white',
        gray: 'dgs-ui-kit-bg-gray-600 dgs-ui-kit-text-white',
        success: 'dgs-ui-kit-bg-success-600 dgs-ui-kit-text-white',
        error: 'dgs-ui-kit-bg-error-500 dgs-ui-kit-text-white',
        warning: 'dgs-ui-kit-bg-warning-500 dgs-ui-kit-text-black',
        sky: 'dgs-ui-kit-bg-sky-600 dgs-ui-kit-text-white',
        violet: 'dgs-ui-kit-bg-violet-500 dgs-ui-kit-text-white',
        flamingo: 'dgs-ui-kit-bg-flamingo-500 dgs-ui-kit-text-white',
      },
    },
    t = {
      small:
        'dgs-ui-kit-font-oveline-demibold dgs-ui-kit-py-1 dgs-ui-kit-px-2 dgs-ui-kit-gap-[2px]',
      medium:
        'dgs-ui-kit-font-caption-demibold dgs-ui-kit-py-1 dgs-ui-kit-px-[10px] dgs-ui-kit-gap-1',
      large: 'dgs-ui-kit-font-button-small dgs-ui-kit-py-2 dgs-ui-kit-px-4 dgs-ui-kit-gap-[6px]',
    },
    s = {
      small:
        'dgs-ui-kit-font-caption-demibold dgs-ui-kit-py-[2px] dgs-ui-kit-px-[6px] dgs-ui-kit-min-w-5',
      medium: 'dgs-ui-kit-font-p3-medium dgs-ui-kit-px-[6px] dgs-ui-kit-min-w-6',
      large: 'dgs-ui-kit-font-h5-bold dgs-ui-kit-py-[2px] dgs-ui-kit-px-2 dgs-ui-kit-min-w-8',
    };
  return [
    e,
    g[i.type][i.color],
    i.valueType === 'text' ? t[i.size] : s[i.size] + ' ss02',
    i.className.length > 0 ? i.className : '',
  ]
    .slice()
    .join(' ');
}
function o(i) {
  return i === 'small'
    ? 'dgs-ui-kit-w-3 dgs-ui-kit-h-3'
    : i === 'medium'
      ? 'dgs-ui-kit-w-[14px] dgs-ui-kit-h-[14px]'
      : 'dgs-ui-kit-w-4 dgs-ui-kit-h-4';
}
const l = (i) => {
  const {
      type: e = 'solid',
      color: g = 'primary',
      size: t = 'medium',
      valueType: s = 'text',
      value: k,
      width: a,
      className: r = '',
    } = i,
    d = i.icon;
  return u.jsxs('div', {
    className: n({ type: e, color: g, size: t, valueType: s, className: r }),
    style: { width: a ?? 'auto' },
    children: [d && s === 'text' && u.jsx('span', { className: o(t), children: d }), k],
  });
};
l.__docgenInfo = { description: '', methods: [], displayName: 'Badge' };
export { l as B };
