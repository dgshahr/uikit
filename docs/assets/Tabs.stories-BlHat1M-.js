import { j as t } from './jsx-runtime-DEdD30eg.js';
import './index-RYns6xqu.js';
import { c as a } from './clsx-B-dksMZM.js';
import { B as y } from './index-B9ILpVy6.js';
/* empty css               */ const r = (s) =>
  t.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...s,
    children: t.jsx('path', {
      fill: 'currentColor',
      d: 'M9.35 14.858c3.985 0 7.349.633 7.349 3.082S13.313 21 9.349 21l-.27-.001C5.213 20.97 2 20.311 2 17.917c0-2.447 3.386-3.06 7.35-3.06m6.22-1.475c1.515-.028 3.145.176 3.747.32 1.276.244 2.115.741 2.462 1.466a2.1 2.1 0 0 1 0 1.878c-.531 1.124-2.245 1.485-2.912 1.578a.207.207 0 0 1-.234-.232c.34-3.113-2.367-4.588-3.067-4.927-.03-.017-.036-.04-.034-.055.002-.01.015-.025.038-.028M9.35 3c2.699 0 4.862 2.119 4.862 4.762 0 2.644-2.163 4.763-4.863 4.763-2.698 0-4.863-2.119-4.863-4.763S6.651 3 9.35 3m6.484.795c2.608 0 4.654 2.402 3.957 5.076-.47 1.803-2.174 3-4.073 2.95a4 4 0 0 1-.56-.051c-.13-.023-.197-.168-.122-.275a6.37 6.37 0 0 0 1.137-3.646c0-1.407-.45-2.717-1.233-3.793-.026-.033-.044-.084-.019-.124.02-.03.059-.047.095-.055a4 4 0 0 1 .818-.082',
    }),
  });
r.__docgenInfo = { description: '', methods: [], displayName: 'IconUserBold' };
const l = (s) => {
  const {
      activeKey: i,
      onChange: u,
      items: c,
      className: m,
      tabItemClassName: g,
      fullWidth: n,
    } = s,
    d = s.fullWidthButtons;
  return t.jsx('div', {
    className: a(
      'dgs-ui-kit-flex dgs-ui-kit-border-b dgs-ui-kit-border-gray-200 dgs-ui-kit-border-solid',
      n ? 'dgs-ui-kit-w-full' : 'dgs-ui-kit-w-fit',
      m,
    ),
    children: c.map((e) =>
      t.jsxs(
        'button',
        {
          onClick: () => u(e.key),
          disabled: e.disabled,
          className: a('dgs-ui-kit-group', { 'dgs-ui-kit-flex-1': n && d }),
          children: [
            t.jsxs('div', {
              className: a(
                'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse dgs-ui-kit-px-3 dgs-ui-kit-py-4 dgs-ui-kit-transition',
                {
                  'dgs-ui-kit-text-primary-500': i === e.key,
                  'dgs-ui-kit-text-gray-500 group-hover:dgs-ui-kit-text-gray-600': i !== e.key,
                  'dgs-ui-kit-cursor-not-allowed dgs-ui-kit-opacity-40': e.disabled,
                  'dgs-ui-kit-justify-center': n && d,
                },
                g,
              ),
              children: [
                e.icon
                  ? t.jsx('div', {
                      className: a('dgs-ui-kit-transition', {
                        'dgs-ui-kit-text-gray-400 group-hover:dgs-ui-kit-text-gray-500':
                          e.key !== i,
                      }),
                      children: e.icon,
                    })
                  : null,
                t.jsx('div', { className: '', children: e.title }),
                typeof e.badgeNumber == 'number' &&
                  t.jsx(y, {
                    valueType: 'number',
                    value: e.badgeNumber,
                    size: 'small',
                    className: a({
                      'dgs-ui-kit-opacity-60': i !== e.key,
                      '!dgs-ui-kit-opacity-100': e.disabled,
                    }),
                    color: i === e.key ? 'primary' : 'gray',
                  }),
              ],
            }),
            t.jsx('div', {
              className: a(
                'dgs-ui-kit-w-full dgs-ui-kit-h-1 dgs-ui-kit-rounded-t dgs-ui-kit-transition',
                {
                  'dgs-ui-kit-bg-gray-300 dgs-ui-kit-opacity-0 group-hover:dgs-ui-kit-opacity-100':
                    e.key !== i && !e.disabled,
                  'dgs-ui-kit-bg-primary-500': e.key === i,
                },
              ),
            }),
          ],
        },
        e.key,
      ),
    ),
  });
};
l.__docgenInfo = { description: '', methods: [], displayName: 'Tabs' };
const x = {
    title: 'Components/Tabs',
    component: l,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Tabs from '@dgshahr/ui-kit/Tabs';\nOr\nimport { Tabs } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      items: {
        control: { type: 'object' },
        table: {
          type: {
            summary: 'TabItemType',
            detail: `key: string | number
title: string
icon?: ReactNode
badgeNumber?: number
disabled?: boolean
`,
          },
        },
      },
      activeKey: { control: { type: 'number' }, table: { type: { summary: 'number | object' } } },
      onChange: {
        control: { type: 'object' },
        table: { type: { summary: "onChange: (key: ITabItem['key']) => void" } },
      },
      tabItemClassName: { control: { type: 'text' }, table: { type: { summary: 'string' } } },
      fullWidth: {
        control: { type: 'boolean' },
        table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      },
      fullWidthButtons: {
        if: { arg: 'fullWidth', eq: !0 },
        control: { type: 'boolean' },
        description: 'available only when fullWidth is true',
        table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      },
    },
  },
  o = {
    args: {
      activeKey: 1,
      onChange: (s) => alert('tab key: ' + s + ' selected'),
      items: [
        { key: 1, title: 'تب اول', icon: t.jsx(r, {}), badgeNumber: 1 },
        { key: 2, title: 'تب دوم', icon: t.jsx(r, {}), badgeNumber: 1 },
        { key: 3, title: 'تب سوم', icon: t.jsx(r, {}), badgeNumber: 1, disabled: !0 },
      ],
    },
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    activeKey: 1,
    onChange: key => alert('tab key: ' + key + ' selected'),
    items: [{
      key: 1,
      title: 'تب اول',
      icon: <IconUserBold />,
      badgeNumber: 1
    }, {
      key: 2,
      title: 'تب دوم',
      icon: <IconUserBold />,
      badgeNumber: 1
    }, {
      key: 3,
      title: 'تب سوم',
      icon: <IconUserBold />,
      badgeNumber: 1,
      disabled: true
    }]
  }
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const N = ['Default'];
export { o as Default, N as __namedExportsOrder, x as default };
