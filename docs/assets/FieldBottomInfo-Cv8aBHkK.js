import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as a } from './clsx-B-dksMZM.js';
import { I as o } from './IconInfoCircleOutline-Dd1i2qLz.js';
const g = (d) => {
  const { errorMessage: e, hintMessage: s, extraHelper: i, disabled: r, className: n } = d;
  return t.jsxs('div', {
    className: a(
      'dgsuikit:flex dgsuikit:font-p3-regular',
      {
        'dgsuikit:justify-between': (e ?? s) && i,
        'dgsuikit:justify-start': (e ?? s) && !i,
        'dgsuikit:justify-end': !(e ?? s) && i,
        'dgsuikit:text-gray-400': r,
      },
      e ? 'dgsuikit:text-error-500' : 'dgsuikit:text-gray-500',
      n,
    ),
    children: [
      (e || s) &&
        t.jsxs('div', {
          className: a('dgsuikit:flex dgsuikit:items-center dgsuikit:gap-2 dgsuikit:font-light', {
            'dgsuikit:text-gray-400': r,
          }),
          children: [t.jsx(o, { width: 16, height: 16 }), t.jsx('span', { children: e ?? s })],
        }),
      i,
    ],
  });
};
g.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'FieldBottomInfo',
  props: {
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    errorMessage: { required: !1, tsType: { name: 'string' }, description: '' },
    hintMessage: { required: !1, tsType: { name: 'string' }, description: '' },
    extraHelper: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { g as F };
