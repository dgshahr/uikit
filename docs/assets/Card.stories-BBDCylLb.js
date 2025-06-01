import { j as e } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { c } from './clsx-B-dksMZM.js';
const u = (i) =>
  e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...i,
    children: [
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M4.497 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.561a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75',
        clipRule: 'evenodd',
      }),
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M10.06 3.41a3.13 3.13 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.63 1.63 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176z',
        clipRule: 'evenodd',
      }),
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M17.668 4.193a.75.75 0 0 1 .75.75v2.354a.75.75 0 0 1-1.5 0V4.943a.75.75 0 0 1 .75-.75M11.974 13.688h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 0 1 1.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 0 1-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 0 0-.35-.35c-.035-.017-.108-.043-.302-.058a13 13 0 0 0-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 0 0-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 0 1-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 0 1 1.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02',
        clipRule: 'evenodd',
      }),
    ],
  });
u.__docgenInfo = { description: '', methods: [], displayName: 'IconHome' };
const g = {
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
  p = { medium: 'dgsuikit:p-6 dgsuikit:rounded-xl', small: 'dgsuikit:p-4 dgsuikit:rounded-xl' },
  v = { default: 'dgsuikit:text-gray-700', primary: 'dgsuikit:text-primary-500' },
  b = { small: 'dgsuikit:font-h5-bold', medium: 'dgsuikit:font-h3-bold' },
  h = (i) => {
    const {
        variant: r = 'default',
        size: a = 'medium',
        color: s = 'white',
        title: d,
        icon: n,
        Element: t,
      } = i,
      o = c(
        'dgsuikit:rounded-b-none dgsuikit:flex dgsuikit:gap-3 dgsuikit:items-center',
        g[s],
        p[a],
      ),
      m = c('dgsuikit:font-bold', v[r], b[a]);
    return e.jsxs('div', {
      className: o,
      children: [
        e.jsxs('div', {
          className: 'dgsuikit:flex dgsuikit:gap-2 dgsuikit:items-center',
          children: [n, e.jsx('p', { className: m, children: d })],
        }),
        e.jsx('div', { className: 'dgsuikit:w-full', children: t }),
      ],
    });
  };
h.__docgenInfo = { description: '', methods: [], displayName: 'CardHeader' };
const f = 'dgsuikit:border-t-0 dgsuikit:rounded-t-none',
  k = (i) => {
    const {
        header: r,
        children: a,
        size: s = 'medium',
        color: d = 'white',
        className: n,
        wrapperClassName: t,
      } = i,
      o = !!(r && Object.keys(r).length > 0),
      m = r?.color ?? d,
      y = c(n, o && f, g[d], p[s]);
    return e.jsxs('div', {
      ...(t ? { className: t } : {}),
      children: [
        o && e.jsx(h, { ...r, color: m, size: s }),
        e.jsx('div', { className: y, children: a }),
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
const N = {
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
  l = {
    args: {
      className: 'dgsuikit:w-[400px]',
      header: { icon: e.jsx(u, {}), title: 'عنوان', color: 'gray', variant: 'primary' },
      color: 'white',
      size: 'medium',
      children: e.jsx('div', { children: 'بدنه' }),
    },
  };
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
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
      ...l.parameters?.docs?.source,
    },
  },
};
const j = ['Default'];
export { l as Default, j as __namedExportsOrder, N as default };
