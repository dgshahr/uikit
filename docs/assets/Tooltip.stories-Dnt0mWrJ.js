import { j as t } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { I as o } from './IconInfoCircleOutline-Dd1i2qLz.js';
import { f as i } from './helpers-jvLsOI0h.js';
import { T as r } from './index-vMQGGeRy.js';
import './clsx-B-dksMZM.js';
import './useFlipPosition-Eiz29amO.js';
import './index-GdYbSsJO.js';
/* empty css               */ const f = {
    title: 'Components/Tooltip',
    component: r,
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
  e = {
    beforeEach: () => i({ height: '400px' }),
    args: {
      children: t.jsx('span', { children: 'hover me' }),
      title: 'عنوان پیام',
      icon: t.jsx(o, {}),
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
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
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
      ...e.parameters?.docs?.source,
    },
  },
};
const h = ['Default'];
export { e as Default, h as __namedExportsOrder, f as default };
