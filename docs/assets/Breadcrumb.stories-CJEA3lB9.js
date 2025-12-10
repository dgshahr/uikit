import { j as t } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { I as d } from './IconQuestionMarkCircle-BuJs7Hhg.js';
import { f as m } from './helpers-BL3Yl0VC.js';
import { c as u } from './clsx-B-dksMZM.js';
import { I as g } from './IconArrowLeft2-DI3fgQDw.js';
/* empty css               */ const o = (a) => {
  const { items: n, pageTitle: r, className: l } = a;
  return t.jsx('div', {
    className: u('dgsuikit:bg-gray-100 dgsuikit:w-full', l),
    children: t.jsxs('div', {
      className:
        'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:py-1 dgsuikit:overflow-x-auto dgsuikit:no-scrollbar dgsuikit:container',
      children: [
        n.map((i, s) => {
          const c = 'link' in i ? 'a' : 'button';
          return t.jsxs(
            c,
            {
              ...('link' in i ? { href: i.link } : { onClick: i.onClick }),
              className:
                'dgsuikit:transition dgsuikit:shrink-0 dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:text-gray-500 dgsuikit:hover:text-primary-500',
              children: [
                i.icon && i.icon,
                t.jsx('div', { className: 'dgsuikit:font-caption-regular', children: i.title }),
                s !== n.length - 1 || (s === n.length - 1 && r)
                  ? t.jsx(g, { width: 16, height: 16 })
                  : null,
              ],
            },
            i.title,
          );
        }),
        r
          ? t.jsx('div', {
              className: 'dgsuikit:text-gray-500 dgsuikit:font-caption-demibold dgsuikit:shrink-0',
              children: r,
            })
          : null,
      ],
    }),
  });
};
o.__docgenInfo = {
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
            name: 'intersection',
            raw: 'BreadcrumbItemBase & (BreadcrumbItemLink | BreadcrumbItemOnClick)',
            elements: [{ name: 'BreadcrumbItemBase' }, { name: 'unknown' }],
          },
        ],
        raw: 'BreadcrumbItem[]',
      },
      description: '',
    },
    pageTitle: { required: !1, tsType: { name: 'string' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const B = {
    title: 'Components/Breadcrumb',
    component: o,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Breadcrumb from '@dgshahr/ui-kit/Breadcrumb';\nOr\nimport { Breadcrumb } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    beforeEach: () => {
      m({ notFlex: !0 });
    },
    argTypes: {
      items: {
        control: 'object',
        description: 'Each item can be a link or a button with an onClick handler.',
        table: {
          type: {
            summary: 'Breadcrumb Item Array',
            detail: `{
 link: string;
 onClick: () => void
 title: string;
 icon?: ReactNode;
}[]`,
          },
        },
      },
    },
  },
  e = {
    args: {
      pageTitle: 'نام صفحه',
      items: [
        { link: '/', title: 'خانه', icon: t.jsx(d, { width: 16, height: 16 }) },
        { link: 'https://www.google.com', title: 'لینک گوگل' },
        { onClick: () => alert('Clicked!'), title: 'دکمه کلیک شونده' },
      ],
    },
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
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
    }, {
      onClick: () => alert('Clicked!'),
      title: 'دکمه کلیک شونده'
    }]
  }
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
const C = ['Default'];
export { e as Default, C as __namedExportsOrder, B as default };
