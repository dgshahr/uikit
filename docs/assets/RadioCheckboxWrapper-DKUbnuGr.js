import { j as i } from './jsx-runtime-D_zvdyIk.js';
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
      'dgsuikit:flex dgsuikit:w-fit dgsuikit:justify-between dgsuikit:items-center dgsuikit:group dgsuikit:has-[:disabled]:opacity-40 dgsuikit:has-[:disabled]:cursor-not-allowed dgsuikit:transition',
      {
        'dgsuikit:p-3 dgsuikit:border dgsuikit:w-full dgsuikit:border-solid dgsuikit:rounded-xl dgsuikit:bg-white dgsuikit:has-[:checked]:bg-primary-50':
          s === 'bordered',
        'dgsuikit:has-[:checked]:border-primary-500 dgsuikit:border-gray-200 dgsuikit:hover:ring-4 dgsuikit:hover:ring-gray-100 has-[:focus]:ring dgsuikit:has-[:focus]:ring-primary-300 dgsuikit:has-[:focus]:ring-offset-1 dgsuikit:has-[:focus]:ring-offset-white':
          s === 'bordered' && !t,
        'dgsuikit:border-error-500 dgsuikit:hover:ring-4 dgsuikit:hover:ring-error-50 has-[:focus]:ring dgsuikit:has-[:focus]:ring-error-300 dgsuikit:has-[:focus]:ring-offset-1 dgsuikit:has-[:focus]:ring-offset-white':
          s === 'bordered' && t,
      },
      n,
    ),
    children: [
      i.jsxs('div', {
        className: e('dgsuikit:flex dgsuikit:items-start dgsuikit:space-x-2'),
        children: [
          i.jsx('div', {
            className: e(
              'dgsuikit:relative dgsuikit:h-[18px] dgsuikit:w-[18px] dgsuikit:shrink-0',
              { 'dgsuikit:mt-1': d },
            ),
            children: o({
              inputClassName: e(
                'dgsuikit:peer dgsuikit:w-full dgsuikit:h-full dgsuikit:disabled:bg-gray-200 dgsuikit:appearance-none dgsuikit:border dgsuikit:border-gray-300 dgsuikit:group-hover:border-primary-500 dgsuikit:checked:bg-primary-500 dgsuikit:checked:border-transparent dgsuikit:transition-all',
                {
                  'dgsuikit:group-hover:ring-4 dgsuikit:group-hover:ring-gray-100 dgsuikit:focus:!ring dgsuikit:focus:!ring-primary-300 dgsuikit:focus:ring-offset-1 dgsuikit:focus:ring-offset-white':
                    s !== 'bordered' && !t,
                  'dgsuikit:!border-error-500 dgsuikit:group-hover:ring-4 dgsuikit:group-hover:ring-error-50 dgsuikit:focus:!ring dgsuikit:focus:!ring-error-300 dgsuikit:focus:ring-offset-1 dgsuikit:focus:ring-offset-white':
                    s !== 'bordered' && t,
                },
              ),
              checkedInputClassName:
                'dgsuikit:absolute dgsuikit:top-0 dgsuikit:left-0 dgsuikit:w-full dgsuikit:h-full dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:text-white dgsuikit:opacity-0 dgsuikit:peer-checked:opacity-100 dgsuikit:transition-opacity',
            }),
          }),
          !!d &&
            i.jsxs('div', {
              className: 'dgsuikit:space-y-1',
              children: [
                i.jsx('div', {
                  className:
                    'dgsuikit:font-p2-medium dgsuikit:text-gray-700 dgsuikit:transition dgsuikit:group-hover:text-primary-500',
                  children: d,
                }),
                !!(r || g) &&
                  i.jsx('div', {
                    className: e(
                      'dgsuikit:font-p3-regular',
                      r ? 'dgsuikit:text-error-500' : 'dgsuikit:text-gray-500',
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
              'dgsuikit:text-gray-600 dgsuikit:group-hover:text-primary-500 dgsuikit:group-checked:text-primary-500',
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
