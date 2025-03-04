import { j as e } from './jsx-runtime-DEdD30eg.js';
import './index-RYns6xqu.js';
import { Q as c } from './QuestionMarkCircle-DJx5pZyZ.js';
import { c as d } from './clsx-B-dksMZM.js';
import { A as g } from './ArrowLeft2-FpSjjEcJ.js';
/* empty css               */ const a = (o) => {
  const { items: r, pageTitle: s, className: l } = o;
  return e.jsx('div', {
    className: d('dgs-ui-kit-bg-gray-100 dgs-ui-kit-w-full', l),
    children: e.jsxs('div', {
      className:
        'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 dgs-ui-kit-py-3 dgs-ui-kit-overflow-x-auto no-scrollbar dgs-ui-kit-container',
      children: [
        r.map((i, n) =>
          e.jsxs(
            'a',
            {
              href: i.link,
              className:
                'dgs-ui-kit-transition dgs-ui-kit-shrink-0 dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 dgs-ui-kit-text-gray-500 hover:dgs-ui-kit-text-primary-500',
              children: [
                i.icon && i.icon,
                e.jsx('div', { className: 'dgs-ui-kit-font-caption-demibold', children: i.title }),
                n !== r.length - 1 || (n === r.length - 1 && s)
                  ? e.jsx(g, { width: 16, height: 16 })
                  : null,
              ],
            },
            i.link,
          ),
        ),
        s
          ? e.jsx('div', {
              className:
                'dgs-ui-kit-text-gray-500 dgs-ui-kit-font-caption-regular dgs-ui-kit-shrink-0',
              children: s,
            })
          : null,
      ],
    }),
  });
};
a.__docgenInfo = {
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
const x = {
    title: 'Components/Breadcrumb',
    component: a,
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
        { link: '/', title: 'خانه', icon: e.jsx(c, { width: 16, height: 16 }) },
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
const y = ['Default'];
export { t as Default, y as __namedExportsOrder, x as default };
