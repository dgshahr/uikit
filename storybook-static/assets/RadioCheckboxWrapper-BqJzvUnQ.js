import { j as i } from './jsx-runtime-DEdD30eg.js';
import { c as e } from './clsx-B-dksMZM.js';
/* empty css               */ const c = (u) => {
  const {
      children: o,
      containerClassName: n,
      errorMessage: r,
      helperMessage: g,
      isError: k,
      label: d,
      variant: s = 'default',
    } = u,
    a = u.icon,
    t = k || !!r;
  return i.jsxs('label', {
    className: e(
      'dgs-ui-kit-flex dgs-ui-kit-w-fit dgs-ui-kit-justify-between dgs-ui-kit-items-center dgs-ui-kit-group has-[:disabled]:dgs-ui-kit-opacity-40 has-[:disabled]:dgs-ui-kit-cursor-not-allowed dgs-ui-kit-transition',
      {
        'dgs-ui-kit-p-3 dgs-ui-kit-border dgs-ui-kit-w-full dgs-ui-kit-border-solid dgs-ui-kit-rounded-xl dgs-ui-kit-bg-white has-[:checked]:dgs-ui-kit-bg-primary-50':
          s === 'bordered',
        'has-[:checked]:dgs-ui-kit-border-primary-500 dgs-ui-kit-border-gray-200 hover:dgs-ui-kit-ring-4 hover:dgs-ui-kit-ring-gray-100 has-[:focus]:ring has-[:focus]:dgs-ui-kit-ring-primary-300 has-[:focus]:dgs-ui-kit-ring-offset-1 has-[:focus]:dgs-ui-kit-ring-offset-white':
          s === 'bordered' && !t,
        'dgs-ui-kit-border-error-500 hover:dgs-ui-kit-ring-4 hover:dgs-ui-kit-ring-error-50 has-[:focus]:ring has-[:focus]:dgs-ui-kit-ring-error-300 has-[:focus]:dgs-ui-kit-ring-offset-1 has-[:focus]:dgs-ui-kit-ring-offset-white':
          s === 'bordered' && t,
      },
      n,
    ),
    children: [
      i.jsxs('div', {
        className: e(
          'dgs-ui-kit-flex dgs-ui-kit-items-start dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse',
        ),
        children: [
          i.jsx('div', {
            className: e(
              'dgs-ui-kit-relative dgs-ui-kit-h-[18px] dgs-ui-kit-w-[18px] dgs-ui-kit-shrink-0',
              { 'dgs-ui-kit-mt-1': d },
            ),
            children: o({
              inputClassName: e(
                'dgs-ui-kit-peer dgs-ui-kit-w-full dgs-ui-kit-h-full disabled:dgs-ui-kit-bg-gray-200 dgs-ui-kit-appearance-none dgs-ui-kit-border dgs-ui-kit-border-gray-300 group-hover:dgs-ui-kit-border-primary-500 checked:dgs-ui-kit-bg-primary-500 checked:dgs-ui-kit-border-transparent dgs-ui-kit-transition-all',
                {
                  'group-hover:dgs-ui-kit-ring-4 group-hover:dgs-ui-kit-ring-gray-100 focus:!dgs-ui-kit-ring focus:!dgs-ui-kit-ring-primary-300 focus:dgs-ui-kit-ring-offset-1 focus:dgs-ui-kit-ring-offset-white':
                    s !== 'bordered' && !t,
                  '!dgs-ui-kit-border-error-500 group-hover:dgs-ui-kit-ring-4 group-hover:dgs-ui-kit-ring-error-50 focus:!dgs-ui-kit-ring focus:!dgs-ui-kit-ring-error-300 focus:dgs-ui-kit-ring-offset-1 focus:dgs-ui-kit-ring-offset-white':
                    s !== 'bordered' && t,
                },
              ),
              checkedInputClassName:
                'dgs-ui-kit-absolute dgs-ui-kit-top-0 dgs-ui-kit-left-0 dgs-ui-kit-w-full dgs-ui-kit-h-full dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-text-white dgs-ui-kit-opacity-0 peer-checked:dgs-ui-kit-opacity-100 dgs-ui-kit-transition-opacity',
            }),
          }),
          !!d &&
            i.jsxs('div', {
              className: 'dgs-ui-kit-space-y-1',
              children: [
                i.jsx('div', {
                  className:
                    'dgs-ui-kit-font-p2-medium dgs-ui-kit-text-gray-700 dgs-ui-kit-transition group-hover:dgs-ui-kit-text-primary-500',
                  children: d,
                }),
                !!(r || g) &&
                  i.jsx('div', {
                    className: e(
                      'dgs-ui-kit-font-p3-regular',
                      r ? 'dgs-ui-kit-text-error-500' : 'dgs-ui-kit-text-gray-500',
                    ),
                    children: r || g,
                  }),
              ],
            }),
        ],
      }),
      s === 'bordered' && a
        ? i.jsx('div', {
            className:
              'dgs-ui-kit-text-gray-600 group-hover:dgs-ui-kit-text-primary-500 group-checked:dgs-ui-kit-text-primary-500',
            children: a,
          })
        : null,
    ],
  });
};
c.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'RadioCheckboxWrapper',
  props: {
    children: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(classNames: { inputClassName: string; checkedInputClassName: string }) => ReactNode',
        signature: {
          arguments: [
            {
              type: {
                name: 'signature',
                type: 'object',
                raw: '{ inputClassName: string; checkedInputClassName: string }',
                signature: {
                  properties: [
                    { key: 'inputClassName', value: { name: 'string', required: !0 } },
                    { key: 'checkedInputClassName', value: { name: 'string', required: !0 } },
                  ],
                },
              },
              name: 'classNames',
            },
          ],
          return: { name: 'ReactNode' },
        },
      },
      description: '',
    },
  },
};
export { c as R };
