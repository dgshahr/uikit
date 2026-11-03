import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as t } from './clsx-B-dksMZM.js';
import './index-D1sGr8oY.js';
/* empty css               */ const d = (p) => {
  const {
      type: g = 'rtl',
      size: c = 'large',
      title: m,
      currentStep: r,
      totalSteps: a = 5,
      color: s = 'primary',
      subtitle: k,
      showSubtitle: y,
      showStepsCount: o,
      className: x,
      containerClassName: f,
      progress: h = 100,
    } = p,
    b = Math.min(Math.max(h, 0), 100),
    l = 94 / a,
    S = 4 + (r - 1) * l + (b / 100) * l,
    i = c === 'large',
    u = g === 'rtl';
  return e.jsx('div', {
    className: t('dgsuikit:border dgsuikit:border-solid dgsuikit:border-gray-100', f),
    children: e.jsxs('div', {
      className: t(
        'dgsuikit:flex dgsuikit:flex-col dgsuikit:justify-between dgsuikit:gap-3 dgsuikit:px-4',
        x,
      ),
      children: [
        e.jsxs('div', {
          className: t(
            'dgsuikit:flex dgsuikit:flex-col',
            i && 'dgsuikit:pt-2.5',
            !u && 'dgsuikit:items-center dgsuikit:justify-center',
          ),
          children: [
            e.jsxs('div', {
              className: t('dgsuikit:flex dgsuikit:items-center dgsuikit:justify-between'),
              children: [
                e.jsx('span', {
                  className: t(
                    'dgsuikit:font-p2-regular dgsuikit:text-[14px]',
                    {
                      'dgsuikit:text-primary-500': s === 'primary',
                      'dgsuikit:text-secondary-500': s === 'secondary',
                    },
                    i && 'dgsuikit:font-p1-regular dgsuikit:text-[16px]',
                  ),
                  children: m,
                }),
                o &&
                  u &&
                  e.jsxs('p', {
                    className: t(
                      'dgsuikit:font-p2-regular dgsuikit:text-gray-400',
                      i && 'dgsuikit:font-p1-regular',
                    ),
                    children: [
                      e.jsx('span', {
                        className: t('dgsuikit:ss02 dgsuikit:font-p1-regular', {
                          'dgsuikit:text-primary-500': s === 'primary',
                          'dgsuikit:text-secondary-500': s === 'secondary',
                        }),
                        children: r,
                      }),
                      ' ',
                      'از',
                      ' ',
                      e.jsx('span', {
                        className: t(
                          'dgsuikit:ss02 dgsuikit:font-p2-regular',
                          i && 'dgsuikit:font-p1-regular',
                        ),
                        children: a,
                      }),
                    ],
                  }),
              ],
            }),
            y &&
              e.jsx('span', {
                className: t(
                  'dgsuikit:font-caption-regular dgsuikit:text-[11px] dgsuikit:text-gray-500',
                  i && 'dgsuikit:font-p3-regular dgsuikit:text-[13px]',
                ),
                children: k,
              }),
            o &&
              !u &&
              e.jsxs('p', {
                className: t('dgsuikit:font-p2-regular', i && 'dgsuikit:font-p1-regular'),
                children: [
                  e.jsx('span', {
                    className: t('dgsuikit:ss02 dgsuikit:font-p1-regular', {
                      'dgsuikit:text-primary-500': s === 'primary',
                      'dgsuikit:text-secondary-500': s === 'secondary',
                    }),
                    children: r,
                  }),
                  ' ',
                  'از',
                  ' ',
                  e.jsx('span', {
                    className: t(
                      'dgsuikit:ss02 dgsuikit:font-p2-regular',
                      i && 'dgsuikit:font-p1-regular',
                    ),
                    children: a,
                  }),
                ],
              }),
          ],
        }),
        e.jsx('div', {
          className: t('dgsuikit:h-1 dgsuikit:relative dgsuikit:-mx-4 dgsuikit:bg-gray-100'),
          children: e.jsx('div', {
            className: t(
              'dgsuikit:absolute dgsuikit:right-0 dgsuikit:h-2/3 dgsuikit:top-[0.7px] dgsuikit:transition-all dgsuikit:duration-500 dgsuikit:ease-out',
              {
                'dgsuikit:bg-primary-500': s === 'primary',
                'dgsuikit:bg-secondary-500': s === 'secondary',
              },
            ),
            style: { width: r > a ? '100%' : `${S}%` },
          }),
        }),
      ],
    }),
  });
};
d.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'ProgressStep',
  props: {
    type: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "'rtl' | 'center'",
        elements: [
          { name: 'literal', value: "'rtl'" },
          { name: 'literal', value: "'center'" },
        ],
      },
      description: '',
    },
    size: {
      required: !0,
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
    color: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "'primary' | 'secondary'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'secondary'" },
        ],
      },
      description: '',
    },
    title: { required: !0, tsType: { name: 'string' }, description: '' },
    currentStep: { required: !0, tsType: { name: 'number' }, description: '' },
    totalSteps: { required: !0, tsType: { name: 'number' }, description: '' },
    subtitle: { required: !1, tsType: { name: 'string' }, description: '' },
    showSubtitle: { required: !1, tsType: { name: 'boolean' }, description: '' },
    showStepsCount: { required: !1, tsType: { name: 'boolean' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    progress: { required: !1, tsType: { name: 'number' }, description: '' },
    containerClassName: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const T = {
    title: 'Components/Progress/Step',
    component: d,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport ProgressStep from '@dgshahr/ui-kit/Progress/Step';\nOr\nimport { ProgressStep } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      color: {
        options: ['primary', 'secondary'],
        control: { type: 'select' },
        table: { type: { summary: 'primary, secondary' }, defaultValue: { summary: 'primary' } },
      },
    },
  },
  n = {
    args: {
      title: 'عنوان اصلی',
      subtitle: 'متن راهنما یا مرحله بعدی',
      showSubtitle: !0,
      currentStep: 3,
      totalSteps: 5,
      type: 'rtl',
      size: 'small',
      color: 'primary',
      showStepsCount: !0,
      progress: 100,
      className: 'dgsuikit:w-[400px]',
    },
  };
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    title: 'عنوان اصلی',
    subtitle: 'متن راهنما یا مرحله بعدی',
    showSubtitle: true,
    currentStep: 3,
    totalSteps: 5,
    type: 'rtl',
    size: 'small',
    color: 'primary',
    showStepsCount: true,
    progress: 100,
    className: 'dgsuikit:w-[400px]'
  }
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
const q = ['Default'];
export { n as Default, q as __namedExportsOrder, T as default };
