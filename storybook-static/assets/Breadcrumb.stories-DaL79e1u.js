import { j as e } from './jsx-runtime-DEdD30eg.js';
import './index-RYns6xqu.js';
import { c as d } from './clsx-B-dksMZM.js';
import { A as g } from './ArrowLeft2-FpSjjEcJ.js';
/* empty css               */ const o = (s) =>
  e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...s,
    children: [
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12c0 5.384-4.365 9.75-9.75 9.75S2.5 17.384 2.5 12',
        clipRule: 'evenodd',
      }),
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M12.197 15.446a.75.75 0 0 1 .75.75v.028a.75.75 0 0 1-1.5 0v-.028a.75.75 0 0 1 .75-.75M9.303 10.193c0-1.74 1.399-3.138 3.138-3.138a3.136 3.136 0 0 1 3.138 3.138c0 1.227-.702 2.094-1.615 2.598l-.163.092c-.264.15-.467.263-.633.413-.163.146-.224.27-.222.444a.75.75 0 1 1-1.5.02c-.01-.719.329-1.229.719-1.58.302-.272.678-.48.939-.626l.122-.068.01-.006c.553-.305.843-.727.843-1.287 0-.91-.734-1.638-1.638-1.638-.91 0-1.638.727-1.638 1.638a.75.75 0 0 1-1.5 0',
        clipRule: 'evenodd',
      }),
    ],
  });
o.__docgenInfo = { description: '', methods: [], displayName: 'QuestionMarkCircleIcon' };
const l = (s) => {
  const { items: r, pageTitle: n, className: c } = s;
  return e.jsx('div', {
    className: d('dgs-ui-kit-bg-gray-100 dgs-ui-kit-w-full', c),
    children: e.jsxs('div', {
      className:
        'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 dgs-ui-kit-py-3 dgs-ui-kit-overflow-x-auto no-scrollbar dgs-ui-kit-container',
      children: [
        r.map((i, a) =>
          e.jsxs(
            'a',
            {
              href: i.link,
              className:
                'dgs-ui-kit-transition dgs-ui-kit-shrink-0 dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 dgs-ui-kit-text-gray-500 hover:dgs-ui-kit-text-primary-500',
              children: [
                i.icon && i.icon,
                e.jsx('div', { className: 'dgs-ui-kit-font-caption-demibold', children: i.title }),
                a !== r.length - 1 || (a === r.length - 1 && n)
                  ? e.jsx(g, { width: 16, height: 16 })
                  : null,
              ],
            },
            i.link,
          ),
        ),
        n
          ? e.jsx('div', {
              className:
                'dgs-ui-kit-text-gray-500 dgs-ui-kit-font-caption-regular dgs-ui-kit-shrink-0',
              children: n,
            })
          : null,
      ],
    }),
  });
};
l.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Breadcrumb',
  props: {
    items: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'object',
            raw: `{
  link: string;
  title: string;
  icon?: ReactNode;
}`,
            signature: {
              properties: [
                { key: 'link', value: { name: 'string', required: !0 } },
                { key: 'title', value: { name: 'string', required: !0 } },
                { key: 'icon', value: { name: 'ReactNode', required: !1 } },
              ],
            },
          },
        ],
        raw: `{
  link: string;
  title: string;
  icon?: ReactNode;
}[]`,
      },
      description: '',
    },
    pageTitle: { required: !1, tsType: { name: 'string' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const f = {
    title: 'Components/Breadcrumb',
    component: l,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Breadcrumb from '@dgshahr/ui-kit/Breadcrumb';\nOr\nimport { Breadcrumb } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      items: {
        control: 'object',
        table: {
          type: {
            summary: 'Breadcrumb Item Array',
            detail: `{
 link: string;
 title: string;
 icon?: ReactNode;
}[]`,
          },
        },
      },
    },
  },
  t = {
    args: {
      pageTitle: 'نام صفحه',
      items: [
        { link: '/', title: 'خانه', icon: e.jsx(o, { width: 16, height: 16 }) },
        { link: 'https://www.google.com', title: 'لینک گوگل' },
      ],
    },
  };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    pageTitle: 'نام صفحه',
    items: [{
      link: '/',
      title: 'خانه',
      icon: <QuestionMarkCircle width={16} height={16} />
    }, {
      link: 'https://www.google.com',
      title: 'لینک گوگل'
    }]
  }
}`,
      ...t.parameters?.docs?.source,
    },
  },
};
const x = ['Default'];
export { t as Default, x as __namedExportsOrder, f as default };
