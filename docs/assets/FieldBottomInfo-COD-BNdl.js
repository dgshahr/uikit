import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as a } from './clsx-B-dksMZM.js';
import { I as o } from './IconInfoCircleOutline-Dd1i2qLz.js';
const g = (d) => {
  const { errorMessage: e, hintMessage: s, extraHelper: i, disabled: r, className: n } = d;
  return t.jsxs('div', {
    className: a(
      'dgs-ui-kit-flex dgs-ui-kit-font-p3-regular',
      {
        'dgs-ui-kit-justify-between': (e ?? s) && i,
        'dgs-ui-kit-justify-start': (e ?? s) && !i,
        'dgs-ui-kit-justify-end': !(e ?? s) && i,
        'dgs-ui-kit-text-gray-400': r,
      },
      e ? 'dgs-ui-kit-text-error-500' : 'dgs-ui-kit-text-gray-500',
      n,
    ),
    children: [
      (e || s) &&
        t.jsxs('div', {
          className: a(
            'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 dgs-ui-kit-font-light',
            { 'dgs-ui-kit-text-gray-400': r },
          ),
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
