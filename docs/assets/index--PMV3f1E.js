import { j as e } from './jsx-runtime-D_zvdyIk.js';
/* empty css               */ function c(i) {
  const g =
      'dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:rounded-[20px]',
    d = {
      twoTone: {
        primary: 'dgsuikit:bg-primary-50 dgsuikit:text-primary-600',
        secondary: 'dgsuikit:bg-secondary-100 dgsuikit:text-secondary-700',
        gray: 'dgsuikit:bg-gray-100 dgsuikit:text-gray-600',
        success: 'dgsuikit:bg-success-50 dgsuikit:text-success-800',
        error: 'dgsuikit:bg-error-50 dgsuikit:text-error-600',
        warning: 'dgsuikit:bg-warning-50 dgsuikit:text-warning-700',
        sky: 'dgsuikit:bg-sky-50 dgsuikit:text-sky-700',
        violet: 'dgsuikit:bg-violet-50 dgsuikit:text-violet-800',
        flamingo: 'dgsuikit:bg-flamingo-50 dgsuikit:text-flamingo-700',
      },
      solid: {
        primary: 'dgsuikit:bg-primary-500 dgsuikit:text-white',
        secondary: 'dgsuikit:bg-secondary-600 dgsuikit:text-white',
        gray: 'dgsuikit:bg-gray-600 dgsuikit:text-white',
        success: 'dgsuikit:bg-success-600 dgsuikit:text-white',
        error: 'dgsuikit:bg-error-500 dgsuikit:text-white',
        warning: 'dgsuikit:bg-warning-500 dgsuikit:text-black',
        sky: 'dgsuikit:bg-sky-600 dgsuikit:text-white',
        violet: 'dgsuikit:bg-violet-500 dgsuikit:text-white',
        flamingo: 'dgsuikit:bg-flamingo-500 dgsuikit:text-white',
      },
    },
    t = {
      small: 'dgsuikit:font-oveline-demibold dgsuikit:py-1 dgsuikit:px-2 dgsuikit:gap-[2px]',
      medium: 'dgsuikit:font-caption-demibold dgsuikit:py-1 dgsuikit:px-[10px] dgsuikit:gap-1',
      large: 'dgsuikit:font-button-small dgsuikit:py-2 dgsuikit:px-4 dgsuikit:gap-[6px]',
    },
    s = {
      small: 'dgsuikit:font-caption-demibold dgsuikit:py-[2px] dgsuikit:px-[6px] dgsuikit:min-w-5',
      medium: 'dgsuikit:font-p3-medium dgsuikit:px-[6px] dgsuikit:min-w-6',
      large: 'dgsuikit:font-h5-bold dgsuikit:py-[2px] dgsuikit:px-2 dgsuikit:min-w-8',
    };
  return [
    g,
    d[i.type][i.color],
    i.valueType === 'text' ? t[i.size] : s[i.size] + ' dgsuikit:ss02',
    i.className.length > 0 ? i.className : '',
  ]
    .slice()
    .join(' ');
}
function a(i) {
  return i === 'small'
    ? 'dgsuikit:w-3 dgsuikit:h-3'
    : i === 'medium'
      ? 'dgsuikit:w-[14px] dgsuikit:h-[14px]'
      : 'dgsuikit:w-4 dgsuikit:h-4';
}
const m = (i) => {
  const {
      type: g = 'solid',
      color: d = 'primary',
      size: t = 'medium',
      valueType: s = 'text',
      value: k,
      width: o,
      className: l = '',
    } = i,
    { icon: u, leftIcon: r, rightIcon: n } = i;
  return (
    u &&
      console.error(
        '[Deprecated Prop Warning] ❗ The "icon" prop in <Badge /> is deprecated and will be removed in a future update. Please use "leftIcon" or "rightIcon" instead.',
      ),
    e.jsxs('div', {
      className: c({ type: g, color: d, size: t, valueType: s, className: l }),
      style: { width: o ?? 'auto' },
      children: [
        r && s === 'text' && e.jsx('span', { className: a(t), children: r }),
        u && s === 'text' && e.jsx('span', { className: a(t), children: u }),
        k,
        n && s === 'text' && e.jsx('span', { className: a(t), children: n }),
      ],
    })
  );
};
m.__docgenInfo = { description: '', methods: [], displayName: 'Badge' };
export { m as B };
