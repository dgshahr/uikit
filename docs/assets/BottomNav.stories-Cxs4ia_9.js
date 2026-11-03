import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { I as k } from './IconCategory2-D_FfBdZ8.js';
import { I as v } from './IconHome-BKzjvA4g.js';
import { B as n } from './index-gieMcv16.js';
import { c as s } from './clsx-B-dksMZM.js';
/* empty css               */ const d = (i) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...i,
    children: e.jsx('path', {
      fill: 'currentColor',
      d: 'm12.25 21.172-.3-.13c-4.71-2.09-9.72-6.19-9.7-11.45.01-3.1 1.73-5.59 4.48-6.47 2.11-.68 4.04-.17 5.52 1.44 1.48-1.61 3.41-2.12 5.52-1.44 2.75.89 4.47 3.37 4.48 6.48.03 5.25-4.99 9.35-9.7 11.44zM8.5 4.322c-.42 0-.85.07-1.31.22-2.53.81-3.44 3.15-3.44 5.06-.02 4.42 4.5 8.07 8.5 9.92 4-1.85 8.52-5.5 8.5-9.92 0-1.91-.92-4.24-3.44-5.06-1.79-.58-3.28-.02-4.44 1.64l-.62.88-.62-.88c-.86-1.24-1.91-1.87-3.13-1.87z',
    }),
  });
d.__docgenInfo = { description: '', methods: [], displayName: 'IconHeartOutline' };
const u = (i) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...i,
    children: e.jsx('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d: 'M17.053 2a4.43 4.43 0 0 1 4.425 4.425v11.139A4.44 4.44 0 0 1 17.042 22h-4.885a4.43 4.43 0 0 1-4.424-4.425v-.942a.75.75 0 0 1 1.5 0v.942a2.93 2.93 0 0 0 2.924 2.925h4.885a2.94 2.94 0 0 0 2.936-2.936V6.425A2.93 2.93 0 0 0 17.053 3.5h-4.885a2.94 2.94 0 0 0-2.935 2.934v.933a.75.75 0 0 1-1.5 0v-.933A4.44 4.44 0 0 1 12.168 2zm-3.66 6.553 2.928 2.917a1 1 0 0 1 .067.076l-.067-.076q.06.06.105.128l.02.035a1 1 0 0 1 .03.056l.015.042a1 1 0 0 1 .021.058l.011.047q.008.029.012.058 0 .013.002.027a1 1 0 0 1 .005.079l-.007.079v.023l-.002.005.01-.107q0 .083-.019.164l-.013.047a1 1 0 0 1-.019.059l-.018.04a.4.4 0 0 1-.028.058l-.021.033a1 1 0 0 1-.037.055l-.027.031-.04.044-2.929 2.915a.747.747 0 0 1-1.06-.002.75.75 0 0 1 .002-1.06l1.641-1.634H3.75a.75.75 0 0 1 0-1.5h10.225l-1.64-1.635a.749.749 0 1 1 1.057-1.062',
      clipRule: 'evenodd',
    }),
  });
u.__docgenInfo = { description: '', methods: [], displayName: 'IconLogin' };
const c = (i) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...i,
    children: e.jsx('path', {
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1.5,
      d: 'M3 3.148h1.997L7.65 14.381a2.24 2.24 0 0 0 2.385 1.714l6.937-.643a2.48 2.48 0 0 0 2.146-1.75l1.833-6.004a1.11 1.11 0 0 0-1.072-1.435l-14.05.114M8.887 20.347v.118m.478-.093a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0M18.098 20.347v.118m.478-.093a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0',
    }),
  });
c.__docgenInfo = { description: '', methods: [], displayName: 'IconShoppingCartOutline' };
const x = {
    primary: 'dgsuikit:text-primary-500',
    secondary: 'dgsuikit:text-secondary-600',
    gray: 'dgsuikit:text-gray-600',
    success: 'dgsuikit:text-success-600',
    error: 'dgsuikit:text-error-500',
    warning: 'dgsuikit:text-warning-500',
    sky: 'dgsuikit:text-sky-600',
    violet: 'dgsuikit:text-violet-500',
    flamingo: 'dgsuikit:text-flamingo-500',
  },
  g = ({ items: i, activeItemId: m, containerClassName: p, showTitle: r }) =>
    e.jsx('div', {
      className: s(
        'dgsuikit:flex dgsuikit:justify-center dgsuikit:rounded-full dgsuikit:p-3 dgsuikit:bg-[rgba(255,255,255,0.8)] dgsuikit:shadow-[0_0_24px_0_rgba(8,8,8,0.08)] dgsuikit:h-[60px]',
        p,
      ),
      children: i.map((t) => {
        const l = t.id === m,
          o = t.disabled;
        return e.jsxs(
          'button',
          {
            type: 'button',
            disabled: t.disabled,
            onClick: t.onClick,
            className: s(
              'dgsuikit:relative dgsuikit:flex dgsuikit:flex-1 dgsuikit:flex-col dgsuikit:items-center',
              r ? 'dgsuikit:gap-1' : 'dgsuikit:justify-center dgsuikit:my-auto',
              o && 'dgsuikit:disabled:cursor-not-allowed',
            ),
            children: [
              t.hasPulse &&
                e.jsx('span', {
                  className: s(
                    'bottom-nav-pulse',
                    'dgsuikit:left-4.5 dgsuikit:top-0',
                    x[t.pulseColor ?? 'error'],
                    t.pulseOnce && 'bottom-nav-pulse-once',
                  ),
                }),
              t.badge &&
                e.jsx('span', {
                  className: s(
                    'dgsuikit:absolute dgsuikit:left-0 dgsuikit:-top-2.5',
                    t.badge.props.valueType === 'number' && 'dgsuikit:left-2.5',
                  ),
                  children: t.badge,
                }),
              e.jsx('span', {
                className: s(
                  'dgsuikit:block icon-button dgsuikit:[&_svg]:size-full dgsuikit:text-gray-600 dgsuikit:h-full',
                  l && 'dgsuikit:text-primary-500!',
                  o && 'dgsuikit:text-gray-300!',
                ),
                children: t.icon,
              }),
              r &&
                e.jsx('span', {
                  className: s(
                    'dgsuikit:text-[10px] dgsuikit:font-oveline-regular dgsuikit:leading-[12px] dgsuikit:text-gray-600',
                    l && 'dgsuikit:text-primary-500 dgsuikit:font-semibold',
                    o && 'dgsuikit:text-gray-300!',
                  ),
                  children: t.title,
                }),
            ],
          },
          t.id,
        );
      }),
    });
g.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'BottomNav',
  props: {
    items: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'intersection',
            raw: 'BottomNavItemBase & (BottomNavItemWithBadge | BottomNavItemWithPulse)',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: `{
  id: string;
  title: string;
  icon: JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
}`,
                signature: {
                  properties: [
                    { key: 'id', value: { name: 'string', required: !0 } },
                    { key: 'title', value: { name: 'string', required: !0 } },
                    { key: 'icon', value: { name: 'JSX.Element', required: !0 } },
                    { key: 'disabled', value: { name: 'boolean', required: !1 } },
                    {
                      key: 'onClick',
                      value: {
                        name: 'signature',
                        type: 'function',
                        raw: '() => void',
                        signature: { arguments: [], return: { name: 'void' } },
                        required: !1,
                      },
                    },
                  ],
                },
              },
              { name: 'unknown' },
            ],
          },
        ],
        raw: 'BottomNavItem[]',
      },
      description: '',
    },
    activeItemId: { required: !1, tsType: { name: 'string' }, description: '' },
    containerClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    showTitle: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
const I = {
    title: 'Components/BottomNav',
    component: g,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport BottomNav from '@dgshahr/ui-kit/BottomNav';\nOr\nimport { BottomNav } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      activeItemId: { control: 'text', table: { type: { summary: 'string' } } },
      items: { control: 'object', table: { type: { summary: 'BottomNavItem[]' } } },
    },
  },
  a = {
    args: {
      activeItemId: 'home',
      containerClassName: 'dgsuikit:w-[360px]',
      showTitle: !0,
      items: [
        { id: 'home', title: 'خانه', icon: e.jsx(v, { className: 'dgsuikit:size-5!' }) },
        {
          id: 'category',
          title: 'دسته‌بندی',
          icon: e.jsx(k, { className: 'dgsuikit:size-5!' }),
          disabled: !0,
        },
        {
          id: 'cart',
          title: 'سبد خرید',
          icon: e.jsx(c, { className: 'dgsuikit:size-5!' }),
          badge: e.jsx(n, {
            color: 'error',
            size: 'small',
            type: 'solid',
            value: '2',
            valueType: 'number',
          }),
        },
        {
          id: 'favorites',
          title: 'علاقه‌مندی',
          icon: e.jsx(d, { className: 'dgsuikit:size-5!' }),
          badge: e.jsx(n, {
            color: 'success',
            size: 'small',
            type: 'solid',
            value: 'متن',
            valueType: 'text',
          }),
        },
        {
          id: 'login',
          title: 'ورود',
          icon: e.jsx(u, { className: 'dgsuikit:size-5!' }),
          hasPulse: !0,
          pulseColor: 'warning',
        },
      ],
    },
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    activeItemId: 'home',
    containerClassName: 'dgsuikit:w-[360px]',
    showTitle: true,
    items: [{
      id: 'home',
      title: 'خانه',
      icon: <IconHome className="dgsuikit:size-5!" />
    }, {
      id: 'category',
      title: 'دسته‌بندی',
      icon: <IconCategory2 className="dgsuikit:size-5!" />,
      disabled: true
    }, {
      id: 'cart',
      title: 'سبد خرید',
      icon: <IconShoppingCartOutline className="dgsuikit:size-5!" />,
      badge: <Badge color="error" size="small" type="solid" value="2" valueType="number" />
    }, {
      id: 'favorites',
      title: 'علاقه‌مندی',
      icon: <IconHeartOutline className="dgsuikit:size-5!" />,
      badge: <Badge color="success" size="small" type="solid" value="متن" valueType="text" />
    }, {
      id: 'login',
      title: 'ورود',
      icon: <IconLogin className="dgsuikit:size-5!" />,
      hasPulse: true,
      pulseColor: 'warning'
    }]
  }
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
const j = ['Default'];
export { a as Default, j as __namedExportsOrder, I as default };
