'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { r as g } from './index-CTzypqlY.js';
import { I as v } from './IconInfoCircleOutline-Dd1i2qLz.js';
import { f as j } from './helpers-jvLsOI0h.js';
import { c } from './clsx-B-dksMZM.js';
import { u as S } from './useFlipPosition-Eiz29amO.js';
/* empty css               */ import './index-GdYbSsJO.js';
const I = {
    'bottom-right':
      'dgs-ui-kit-left-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
    'bottom-center':
      'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
    'bottom-left':
      'dgs-ui-kit-right-4 dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-t dgs-ui-kit-border-l dgs-ui-kit-rounded-tl',
    'top-right':
      'dgs-ui-kit-left-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
    'top-center':
      'dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
    'top-left':
      'dgs-ui-kit-right-4 dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-1/2 dgs-ui-kit-border-b dgs-ui-kit-border-r dgs-ui-kit-rounded-br',
  },
  _ = {
    'bottom-right': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
    'bottom-center':
      'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
    'bottom-left': 'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
    'top-right': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-0',
    'top-center':
      'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-left-1/2 -dgs-ui-kit-translate-x-1/2',
    'top-left': 'dgs-ui-kit-top-0 -dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-right-0',
  },
  p = (k) => {
    const {
        children: m,
        content: f,
        className: h,
        footer: b,
        icon: e,
        position: s = 'top-center',
        title: o,
      } = k,
      [x, r] = g.useState(!1),
      [d, y] = g.useState(s),
      { anchorRef: T, popperRef: N } = S({
        initialPosition: s,
        onPositionChange(u) {
          y((l) => (l === u ? l : u));
        },
      });
    function a() {
      r(!0);
    }
    function n() {
      r(!1);
    }
    return t.jsxs('div', {
      ref: T,
      className: 'dgs-ui-kit-relative',
      onMouseEnter: a,
      onTouchStart: a,
      onMouseLeave: n,
      onTouchEnd: n,
      children: [
        m,
        t.jsxs('div', {
          ref: N,
          className: c(
            h,
            'dgs-ui-kit-absolute dgs-ui-kit-p-4 dgs-ui-kit-flex dgs-ui-kit-gap-2 dgs-ui-kit-max-w-[400px] dgs-ui-kit-bg-gray-700 dgs-ui-kit-text-white dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-gray-300 dgs-ui-kit-shadow-md dgs-ui-kit-transition dgs-ui-kit-duration-300 dgs-ui-kit-w-max',
            x
              ? 'dgs-ui-kit-opacity-100 dgs-ui-kit-scale-100'
              : 'dgs-ui-kit-opacity-0 dgs-ui-kit-scale-0',
            _[d],
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
                f,
                b,
              ],
            }),
            t.jsx('div', {
              className: c(
                'dgs-ui-kit-w-4 dgs-ui-kit-h-4 dgs-ui-kit-bg-gray-700 dgs-ui-kit-border-gray-300 dgs-ui-kit-absolute dgs-ui-kit-rotate-45',
                I[d],
              ),
            }),
          ],
        }),
      ],
    });
  };
p.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Tooltip',
  props: {
    position: {
      required: !1,
      tsType: {
        name: 'union',
        raw: `| 'top-left'
| 'top-center'
| 'top-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'`,
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
const L = {
    title: 'Components/Tooltip',
    component: p,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Tooltip from '@dgshahr/ui-kit/Tooltip';\nOr\nimport { Tooltip } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      children: { description: 'The element to hover on' },
      position: {
        table: {
          type: {
            summary: 'top-right, top-center, top-left, bottom-right, bottom-center, bottom-left',
          },
          defaultValue: { summary: 'top-center' },
        },
      },
    },
  },
  i = {
    beforeEach: () => j({ height: '400px' }),
    args: {
      children: t.jsx('span', { children: 'hover me' }),
      title: 'عنوان پیام',
      icon: t.jsx(v, {}),
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
  beforeEach: () => fullWidthStory({
    height: '400px'
  }),
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
const M = ['Default'];
export { i as Default, M as __namedExportsOrder, L as default };
