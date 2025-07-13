import { j as t } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { I as e } from './IconInfoCircleOutline-Dd1i2qLz.js';
import { f as o } from './helpers-BLnSDN_K.js';
import { T as s } from './index-1YO0Pwc0.js';
import './clsx-B-dksMZM.js';
import './useFlipPosition-D78LAv0q.js';
import './index-GdYbSsJO.js';
/* empty css               */ const g = {
    title: 'Components/Tooltip',
    component: s,
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
    beforeEach: () => o({ height: '400px' }),
    args: {
      children: t.jsx('span', { children: 'hover me' }),
      title: 'عنوان پیام',
      icon: t.jsx(e, {}),
      content:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
      footer: t.jsxs('div', {
        className:
          'dgsuikit:flex dgsuikit:gap-1 dgsuikit:justify-end dgsuikit:font-p3-medium dgsuikit:text-gray-300 dgsuikit:ss02',
        children: [
          t.jsx('span', { children: '۱۴:۳۴' }),
          t.jsx('span', { children: '.' }),
          t.jsx('span', { className: 'dgsuikit:[direction:ltr]', children: '۱۴۰۲ \\ ۰۹ \\ ۲۲' }),
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
    footer: <div className="dgsuikit:flex dgsuikit:gap-1 dgsuikit:justify-end dgsuikit:font-p3-medium dgsuikit:text-gray-300 dgsuikit:ss02">\r
        <span>۱۴:۳۴</span>\r
        <span>.</span>\r
        <span className="dgsuikit:[direction:ltr]">۱۴۰۲ \\ ۰۹ \\ ۲۲</span>\r
      </div>
  }
}`,
      ...i.parameters?.docs?.source,
    },
  },
};
const f = ['Default'];
export { i as Default, f as __namedExportsOrder, g as default };
