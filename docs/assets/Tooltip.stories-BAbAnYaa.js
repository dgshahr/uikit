'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { r as f } from './index-CTzypqlY.js';
import { I as b } from './IconInfoCircleOutline-Dd1i2qLz.js';
import { c as n } from './clsx-B-dksMZM.js';
/* empty css               */ const h = {
    'top-left':
      'dgs-ui-kit-left-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
    'top-center':
      'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
    'top-right':
      'dgs-ui-kit-right-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
    'bottom-left':
      'dgs-ui-kit-left-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
    'bottom-center':
      'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
    'bottom-right':
      'dgs-ui-kit-right-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
  },
  x = {
    'top-left': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
    'top-center':
      'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
    'top-right': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
    'bottom-left': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
    'bottom-center':
      'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
    'bottom-right': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
  },
  u = (l) => {
    const {
        children: g,
        content: c,
        className: k,
        footer: p,
        icon: e,
        tailPosition: s = 'bottom-center',
        title: o,
      } = l,
      [m, r] = f.useState(!1);
    function d() {
      r(!0);
    }
    function a() {
      r(!1);
    }
    return t.jsxs('div', {
      className: 'dgs-ui-kit-relative',
      onMouseEnter: d,
      onTouchStart: d,
      onMouseLeave: a,
      onTouchEnd: a,
      children: [
        g,
        t.jsxs('div', {
          className: n(
            k,
            'dgs-ui-kit-absolute dgs-ui-kit-p-4 dgs-ui-kit-flex dgs-ui-kit-gap-2 dgs-ui-kit-max-w-[400px] dgs-ui-kit-bg-gray-700 dgs-ui-kit-text-white dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-gray-300 dgs-ui-kit-shadow-md dgs-ui-kit-transition dgs-ui-kit-w-max',
            m
              ? 'dgs-ui-kit-opacity-100 dgs-ui-kit-scale-100'
              : 'dgs-ui-kit-opacity-0 dgs-ui-kit-scale-0',
            x[s],
          ),
          children: [
            e &&
              t.jsx('span', {
                className: 'dgs-ui-kit-shrink-0 [&_svg]:dgs-ui-kit-size-5 dgs-ui-kit-pt-1',
                children: e,
              }),
            t.jsxs('div', {
              className:
                'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-gap-1 dgs-ui-kit-font-p2-regular',
              children: [
                o && t.jsx('div', { className: 'dgs-ui-kit-font-h5-bold', children: o }),
                c,
                p,
              ],
            }),
            t.jsx('div', {
              className: n(
                'dgs-ui-kit-w-4 dgs-ui-kit-h-4 dgs-ui-kit-bg-gray-700 dgs-ui-kit-border-gray-300 dgs-ui-kit-absolute dgs-ui-kit-rotate-45',
                h[s],
              ),
            }),
          ],
        }),
      ],
    });
  };
u.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Tooltip',
  props: {
    tailPosition: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'keyof typeof TAIL_POSITION_CLASS_NAME',
        elements: [
          { name: 'literal', value: "'top-left'" },
          { name: 'literal', value: "'top-center'" },
          { name: 'literal', value: "'top-right'" },
          { name: 'literal', value: "'bottom-left'" },
          { name: 'literal', value: "'bottom-center'" },
          { name: 'literal', value: "'bottom-right'" },
        ],
      },
      description: '',
    },
    title: { required: !1, tsType: { name: 'string' }, description: '' },
    icon: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    content: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    footer: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
  },
};
const I = {
    title: 'Components/Tooltip',
    component: u,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Tooltip from '@dgshahr/ui-kit/Tooltip';\nOr\nimport { Tooltip } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      children: { description: 'The element we hover on' },
      tailPosition: {
        table: {
          type: {
            summary: 'top-right, top-center, top-left, bottom-right, bottom-center, bottom-left',
          },
          defaultValue: { summary: 'bottom-center' },
        },
      },
    },
  },
  i = {
    args: {
      children: t.jsx('span', { children: 'hover me' }),
      title: 'عنوان پیام',
      icon: t.jsx(b, {}),
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
      footer: t.jsxs('div', {
        className:
          'dgs-ui-kit-flex dgs-ui-kit-gap-1 dgs-ui-kit-justify-end dgs-ui-kit-font-p3-medium dgs-ui-kit-text-gray-300 ss02',
        children: [
          t.jsx('span', { children: '۱۴:۳۴' }),
          t.jsx('span', { children: '.' }),
          t.jsx('span', { className: '[direction:ltr]', children: '۱۴۰۲ \\ ۰۹ \\ ۲۲' }),
        ],
      }),
    },
  };
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: <span>hover me</span>,
    title: 'عنوان پیام',
    icon: <IconInfoCircleOutline />,
    content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    footer: <div className="dgs-ui-kit-flex dgs-ui-kit-gap-1 dgs-ui-kit-justify-end dgs-ui-kit-font-p3-medium dgs-ui-kit-text-gray-300 ss02">\r
        <span>۱۴:۳۴</span>\r
        <span>.</span>\r
        <span className="[direction:ltr]">۱۴۰۲ \\ ۰۹ \\ ۲۲</span>\r
      </div>
  }
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
const S = ['Default'];
export { i as Default, S as __namedExportsOrder, I as default };
