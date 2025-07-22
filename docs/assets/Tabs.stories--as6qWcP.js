import { j as t } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { f as y } from './helpers-BLnSDN_K.js';
import { c as o } from './clsx-B-dksMZM.js';
import { B as k } from './index-zdEDNP_J.js';
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
    className: o(
      'dgsuikit:flex dgsuikit:border-b dgsuikit:border-gray-200 dgsuikit:border-solid',
      n ? 'dgsuikit:w-full' : 'dgsuikit:w-fit',
      m,
    ),
    children: c.map((e) =>
      t.jsxs(
        'button',
        {
          type: 'button',
          onClick: () => u(e.key),
          disabled: e.disabled,
          className: o('dgsuikit:group', { 'dgsuikit:flex-1': n && d }),
          children: [
            t.jsxs('div', {
              className: o(
                'dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-2 dgsuikit:px-3 dgsuikit:py-4 dgsuikit:transition',
                {
                  'dgsuikit:text-primary-500': i === e.key,
                  'dgsuikit:text-gray-500 dgsuikit:group-hover:text-gray-600': i !== e.key,
                  'dgsuikit:cursor-not-allowed dgsuikit:opacity-40': e.disabled,
                  'dgsuikit:justify-center': n && d,
                },
                g,
              ),
              children: [
                e.icon
                  ? t.jsx('div', {
                      className: o('dgsuikit:transition', {
                        'dgsuikit:text-gray-400 dgsuikit:group-hover:text-gray-500': e.key !== i,
                      }),
                      children: e.icon,
                    })
                  : null,
                t.jsx('div', { className: '', children: e.title }),
                typeof e.badgeNumber == 'number' &&
                  t.jsx(k, {
                    valueType: 'number',
                    value: e.badgeNumber,
                    size: 'small',
                    className: o({
                      'dgsuikit:opacity-60': i !== e.key,
                      'dgsuikit:!opacity-100': e.disabled,
                    }),
                    color: i === e.key ? 'primary' : 'gray',
                  }),
              ],
            }),
            t.jsx('div', {
              className: o('dgsuikit:w-full dgsuikit:h-1 dgsuikit:rounded-t dgsuikit:transition', {
                'dgsuikit:bg-gray-300 dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100':
                  e.key !== i && !e.disabled,
                'dgsuikit:bg-primary-500': e.key === i,
              }),
            }),
          ],
        },
        e.key,
      ),
    ),
  });
};
l.__docgenInfo = { description: '', methods: [], displayName: 'Tabs' };
const j = {
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
    beforeEach: () => {
      y({ notFlex: !0 });
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
  a = {
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
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
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
      ...a.parameters?.docs?.source,
    },
  },
};
const v = ['Default'];
export { a as Default, v as __namedExportsOrder, j as default };
