import { j as e } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { I as c } from './IconQuestionMarkCircle-BuJs7Hhg.js';
import { f as d } from './helpers-BLnSDN_K.js';
import { c as g } from './clsx-B-dksMZM.js';
/* empty css               */ import { I as m } from './IconArrowLeft2-DI3fgQDw.js';
const a = (o) => {
  const { items: r, pageTitle: s, className: l } = o;
  return e.jsx('div', {
    className: g('dgsuikit:bg-gray-100 dgsuikit:w-full', l),
    children: e.jsxs('div', {
      className:
        'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:py-3 dgsuikit:overflow-x-auto dgsuikit:no-scrollbar dgsuikit:container',
      children: [
        r.map((i, n) =>
          e.jsxs(
            'a',
            {
              href: i.link,
              className:
                'dgsuikit:transition dgsuikit:shrink-0 dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:text-gray-500 dgsuikit:hover:text-primary-500',
              children: [
                i.icon && i.icon,
                e.jsx('div', { className: 'dgsuikit:font-caption-demibold', children: i.title }),
                n !== r.length - 1 || (n === r.length - 1 && s)
                  ? e.jsx(m, { width: 16, height: 16 })
                  : null,
              ],
            },
            i.link,
          ),
        ),
        s
          ? e.jsx('div', {
              className: 'dgsuikit:text-gray-500 dgsuikit:font-caption-regular dgsuikit:shrink-0',
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
const w = {
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
    beforeEach: () => {
      d({ notFlex: !0 });
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
      icon: <IconQuestionMarkCircle width={16} height={16} />
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
const j = ['Default'];
export { t as Default, j as __namedExportsOrder, w as default };
