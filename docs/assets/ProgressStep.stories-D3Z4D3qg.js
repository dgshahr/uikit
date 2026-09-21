import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as s } from './clsx-B-dksMZM.js';
import './index-D1sGr8oY.js';
/* empty css               */ const d = (p) => {
  const {
      type: g = 'rtl',
      size: c = 'large',
      title: m,
      currentStep: i,
      totalSteps: a = 5,
      color: t = 'primary',
      subtitle: k,
      showSubtitle: y,
      showStepsCount: u,
      className: x,
      containerClassName: f,
      progress: h = 100,
    } = p,
    b = Math.min(Math.max(h, 0), 100),
    l = 94 / a,
    S = 4 + (i - 1) * l + (b / 100) * l,
    r = c === 'large',
    o = g === 'rtl';
  return e.jsx('div', {
    className: s('dgsuikit:border dgsuikit:border-solid dgsuikit:border-gray-100', f),
    children: e.jsxs('div', {
      className: s(
        'dgsuikit:flex dgsuikit:flex-col dgsuikit:justify-between dgsuikit:gap-3 dgsuikit:px-4',
        x,
      ),
      children: [
        e.jsxs('div', {
          className: s(
            'dgsuikit:flex dgsuikit:flex-col',
            r && 'dgsuikit:pt-2.5',
            !o && 'dgsuikit:items-center dgsuikit:justify-center',
          ),
          children: [
            e.jsxs('div', {
              className: s('dgsuikit:flex dgsuikit:items-center dgsuikit:justify-between'),
              children: [
                e.jsx('span', {
                  className: s(
                    'dgsuikit:font-p2-regular dgsuikit:text-[14px]',
                    {
                      'dgsuikit:text-primary-500': t === 'primary',
                      'dgsuikit:text-secondary-500': t === 'secondary',
                    },
                    r && 'dgsuikit:font-p1-regular dgsuikit:text-[16px]',
                  ),
                  children: m,
                }),
                u &&
                  o &&
                  e.jsxs('p', {
                    className: s('dgsuikit:font-p2-regular', r && 'dgsuikit:font-p1-regular'),
                    children: [
                      e.jsx('span', {
                        className: s('dgsuikit:ss02 dgsuikit:font-p1-regular', {
                          'dgsuikit:text-primary-500': t === 'primary',
                          'dgsuikit:text-secondary-500': t === 'secondary',
                        }),
                        children: i,
                      }),
                      ' ',
                      'از',
                      ' ',
                      e.jsx('span', {
                        className: s(
                          'dgsuikit:ss02 dgsuikit:font-p2-regular',
                          r && 'dgsuikit:font-p1-regular',
                        ),
                        children: a,
                      }),
                    ],
                  }),
              ],
            }),
            y &&
              e.jsx('span', {
                className: s(
                  'dgsuikit:font-caption-regular dgsuikit:text-[11px] dgsuikit:text-gray-500',
                  r && 'dgsuikit:font-p3-regular dgsuikit:text-[13px]',
                ),
                children: k,
              }),
            u &&
              !o &&
              e.jsxs('p', {
                className: s('dgsuikit:font-p2-regular', r && 'dgsuikit:font-p1-regular'),
                children: [
                  e.jsx('span', {
                    className: s('dgsuikit:ss02 dgsuikit:font-p1-regular', {
                      'dgsuikit:text-primary-500': t === 'primary',
                      'dgsuikit:text-secondary-500': t === 'secondary',
                    }),
                    children: i,
                  }),
                  ' ',
                  'از',
                  ' ',
                  e.jsx('span', {
                    className: s(
                      'dgsuikit:ss02 dgsuikit:font-p2-regular',
                      r && 'dgsuikit:font-p1-regular',
                    ),
                    children: a,
                  }),
                ],
              }),
          ],
        }),
        e.jsx('div', {
          className: s('dgsuikit:h-1 dgsuikit:relative dgsuikit:-mx-4', {
            'dgsuikit:bg-primary-100': t === 'primary',
            'dgsuikit:bg-secondary-100': t === 'secondary',
          }),
          children: e.jsx('div', {
            className: s(
              'dgsuikit:absolute dgsuikit:right-0 dgsuikit:h-2/3 dgsuikit:top-[0.7px] dgsuikit:transition-all dgsuikit:duration-500 dgsuikit:ease-out',
              {
                'dgsuikit:bg-primary-500': t === 'primary',
                'dgsuikit:bg-secondary-500': t === 'secondary',
              },
            ),
            style: { width: i > a ? '100%' : `${S}%` },
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
    title: 'Components/Progress/StepBar',
    component: d,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport ProgressStep from '@dgshahr/ui-kit/Progress/Bar';\nOr\nimport { ProgressStep } from '@dgshahr/ui-kit';\n```",
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
