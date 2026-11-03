import { j as e } from './jsx-runtime-D_zvdyIk.js';
import './index-D1sGr8oY.js';
import { I as h } from './IconHome-BKzjvA4g.js';
import { c as u } from './clsx-B-dksMZM.js';
const c = {
    error: 'dgsuikit:bg-error-50 dgsuikit:border-error-200 dgsuikit:border dgsuikit:border-solid',
    gray: 'dgsuikit:bg-gray-50 dgsuikit:border-gray-200 dgsuikit:border dgsuikit:border-solid',
    primary:
      'dgsuikit:bg-primary-50 dgsuikit:border-primary-200 dgsuikit:border dgsuikit:border-solid',
    success:
      'dgsuikit:bg-success-50 dgsuikit:border-success-200 dgsuikit:border dgsuikit:border-solid',
    warning:
      'dgsuikit:bg-warning-50 dgsuikit:border-warning-200 dgsuikit:border dgsuikit:border-solid',
    white: 'dgsuikit:bg-white dgsuikit:border-gray-200 dgsuikit:border dgsuikit:border-solid',
  },
  g = { medium: 'dgsuikit:p-6 dgsuikit:rounded-xl', small: 'dgsuikit:p-4 dgsuikit:rounded-xl' },
  b = { default: 'dgsuikit:text-gray-700', primary: 'dgsuikit:text-primary-500' },
  C = { small: 'dgsuikit:font-h5-bold', medium: 'dgsuikit:font-h3-bold' },
  p = (n) => {
    const {
        variant: r = 'default',
        size: i = 'medium',
        color: s = 'white',
        title: a,
        icon: l,
        Element: t,
      } = n,
      d = u(
        'dgsuikit:rounded-b-none dgsuikit:flex dgsuikit:gap-3 dgsuikit:items-center',
        c[s],
        g[i],
      ),
      m = u('dgsuikit:font-bold', b[r], C[i]);
    return e.jsxs('div', {
      className: d,
      children: [
        e.jsxs('div', {
          className: 'dgsuikit:flex dgsuikit:gap-2 dgsuikit:items-center',
          children: [l, e.jsx('p', { className: m, children: a })],
        }),
        e.jsx('div', { className: 'dgsuikit:w-full', children: t }),
      ],
    });
  };
p.__docgenInfo = { description: '', methods: [], displayName: 'CardHeader' };
const f = 'dgsuikit:border-t-0 dgsuikit:rounded-t-none',
  k = (n) => {
    const {
        header: r,
        children: i,
        size: s = 'medium',
        color: a = 'white',
        className: l,
        wrapperClassName: t,
      } = n,
      d = !!(r && Object.keys(r).length > 0),
      m = r?.color ?? a,
      y = u(l, d && f, c[a], g[s]);
    return e.jsxs('div', {
      ...(t ? { className: t } : {}),
      children: [
        d && e.jsx(p, { ...r, color: m, size: s }),
        e.jsx('div', { className: y, children: i }),
      ],
    });
  };
k.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Card',
  props: {
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'small' | 'medium'",
        elements: [
          { name: 'literal', value: "'small'" },
          { name: 'literal', value: "'medium'" },
        ],
      },
      description: '',
    },
    color: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'warning' | 'error' | 'success' | 'gray' | 'white'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'warning'" },
          { name: 'literal', value: "'error'" },
          { name: 'literal', value: "'success'" },
          { name: 'literal', value: "'gray'" },
          { name: 'literal', value: "'white'" },
        ],
      },
      description: '',
    },
    header: {
      required: !1,
      tsType: {
        name: 'Omit',
        elements: [
          {
            name: 'Partial',
            elements: [{ name: 'CardHeaderProps' }],
            raw: 'Partial<CardHeaderProps>',
          },
          { name: 'literal', value: "'size'" },
        ],
        raw: "Omit<Partial<CardHeaderProps>, 'size'>",
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const j = {
    title: 'Components/Card',
    component: k,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Card from '@dgshahr/ui-kit/Card';\nOr\nimport { Card } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      header: {
        table: {
          type: {
            summary: 'Partial<CardHeaderProps>',
            detail: `CardHeaderProps {
          color: CardColor;
          title: string;
          icon: ReactNode;
          variant: CardTitleVariant;
          Element: ReactNode;
          className?: string;
        }`,
          },
        },
      },
      color: {
        table: {
          type: { summary: "'primary' | 'warning' | 'error' | 'success' | 'gray' | 'white'" },
          defaultValue: { summary: 'white' },
        },
      },
      size: {
        table: { type: { summary: "'small' | 'medium'" }, defaultValue: { summary: 'medium' } },
      },
    },
  },
  o = {
    args: {
      className: 'dgsuikit:w-[400px]',
      header: { icon: e.jsx(h, {}), title: 'عنوان', color: 'gray', variant: 'primary' },
      color: 'white',
      size: 'medium',
      children: e.jsx('div', { children: 'بدنه' }),
    },
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    className: 'dgsuikit:w-[400px]',
    header: {
      icon: <IconHome />,
      title: 'عنوان',
      color: 'gray',
      variant: 'primary'
    },
    color: 'white',
    size: 'medium',
    children: <div>بدنه</div>
  }
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const z = ['Default'];
export { o as Default, z as __namedExportsOrder, j as default };
