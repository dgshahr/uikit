'use client';
import { j as e } from './jsx-runtime-DEdD30eg.js';
import { c as l } from './clsx-B-dksMZM.js';
import { R as I } from './index-RYns6xqu.js';
/* empty css               */ const k = (r) =>
  e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...r,
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
        d: 'M12.25 7.541a.75.75 0 0 1 .75.75v.063a.75.75 0 0 1-1.5 0v-.063a.75.75 0 0 1 .75-.75m.006 3.103a.75.75 0 0 1 .75.75v4.3a.75.75 0 0 1-1.5 0v-4.3a.75.75 0 0 1 .75-.75',
        clipRule: 'evenodd',
      }),
    ],
  });
k.__docgenInfo = { description: '', methods: [], displayName: 'InfoCircleOutlineIcon' };
const x = (r) => {
  const { errorMessage: i, hintMessage: s, maxLength: t, value: a, disabled: n } = r;
  return e.jsxs('div', {
    className: l(
      'dgs-ui-kit-flex dgs-ui-kit-font-p3-regular',
      {
        'dgs-ui-kit-justify-between': (i || s) && t,
        'dgs-ui-kit-justify-start': (i || s) && !t,
        'dgs-ui-kit-justify-end': !(i || s) && t,
        'dgs-ui-kit-text-gray-400': n,
      },
      i ? 'dgs-ui-kit-text-error-500' : 'dgs-ui-kit-text-gray-500',
    ),
    children: [
      (i || s) &&
        e.jsxs('div', {
          className: l(
            'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 dgs-ui-kit-font-light',
            { 'dgs-ui-kit-text-gray-400': n },
          ),
          children: [e.jsx(k, { width: 16, height: 16 }), e.jsx('span', { children: i || s })],
        }),
      t && e.jsxs('span', { className: 'ss02', children: [a?.length ?? 0, '/', t] }),
    ],
  });
};
x.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'FieldBottomInfo',
  props: {
    maxLength: { required: !1, tsType: { name: 'number' }, description: '' },
    value: { required: !1, tsType: { name: 'string' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
  composes: ['Pick'],
};
const y = (r) => {
  const { link: i, labelContent: s, required: t, disabled: a, children: n } = r;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs('div', {
        className: l('dgs-ui-kit-flex', {
          'dgs-ui-kit-justify-between': s && i?.href,
          'dgs-ui-kit-mb-2': !n,
          'dgs-ui-kit-justify-start': s && !i?.href,
          'dgs-ui-kit-justify-end': !s && i?.href,
          'dgs-ui-kit-text-gray-400': a,
        }),
        children: [
          s &&
            e.jsxs('label', {
              className: 'dgs-ui-kit-px-0 dgs-ui-kit-font-p2-medium md:dgs-ui-kit-mx-0',
              children: [
                s,
                t &&
                  e.jsx('span', {
                    className: 'dgs-ui-kit-ms-2 dgs-ui-kit-text-error-500',
                    children: '*',
                  }),
              ],
            }),
          i?.href &&
            e.jsx('a', {
              href: i.href,
              className: 'dgs-ui-kit-font-button-small dgs-ui-kit-text-primary-400',
              children: i.cnotent,
            }),
        ],
      }),
      n,
    ],
  });
};
y.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'FieldLabel',
  props: {
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
  composes: ['Pick'],
};
const C = (r) => {
  const {
      labelContent: i,
      link: s,
      containerClassName: t,
      rightIcon: a,
      isError: n,
      errorMessage: o,
      hintMessage: g,
      required: b,
      labelAddon: v,
      maxLength: c,
      disabled: d,
      value: q,
      wrapperClassName: u,
      showMaxLength: p,
      children: j,
    } = r,
    m = !!(o || g || (c && p)),
    f = !!(i || s?.href),
    T = m || f || u ? 'div' : I.Fragment,
    w = (N) => {
      const h = N.currentTarget.querySelector('textarea, input');
      h && h.focus();
    };
  return e.jsxs(T, {
    ...(u ? { className: u } : {}),
    children: [
      f && e.jsx(y, { disabled: d, labelContent: i, link: s, required: b, children: v }),
      e.jsxs('div', {
        onClick: w,
        className: l(
          `dgs-ui-kit-relative dgs-ui-kit-cursor-text dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-rounded-lg dgs-ui-kit-ring-4 dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-gap-x-3 dgs-ui-kit-p-3 dgs-ui-kit-bg-gray-100 dgs-ui-kit-transition-all dgs-ui-kit-ring-transparent has-[:focus]:dgs-ui-kit-bg-white ${!d && 'hover:dgs-ui-kit-ring-gray-50'}`,
          n || o
            ? 'dgs-ui-kit-border-error-500 has-[:focus]:dgs-ui-kit-ring-error-50'
            : `dgs-ui-kit-border-transparent has-[:focus]:dgs-ui-kit-border-primary-500 has-[:focus]:dgs-ui-kit-ring-primary-50 ${!d && 'hover:dgs-ui-kit-border-gray-300'}`,
          t,
          { 'dgs-ui-kit-text-gray-400': d },
        ),
        children: [a && e.jsx('div', { className: 'dgs-ui-kit-text-gray-600', children: a }), j],
      }),
      m &&
        e.jsx(x, {
          disabled: d,
          errorMessage: o,
          hintMessage: g,
          maxLength: p ? c : void 0,
          value: q?.toString(),
        }),
    ],
  });
};
C.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TextFieldWrapper',
  props: {
    labelContent: { required: !1, tsType: { name: 'string' }, description: '' },
    labelAddon: {
      required: !1,
      tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
      description: '',
    },
    link: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  cnotent: string;
  href: string;
}`,
        signature: {
          properties: [
            { key: 'cnotent', value: { name: 'string', required: !0 } },
            { key: 'href', value: { name: 'string', required: !0 } },
          ],
        },
      },
      description: '',
    },
    containerClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    rightIcon: { required: !1, tsType: { name: 'JSX.Element' }, description: '' },
    dir: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'rtl' | 'ltr'",
        elements: [
          { name: 'literal', value: "'rtl'" },
          { name: 'literal', value: "'ltr'" },
        ],
      },
      description: '',
    },
    placeholderDir: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'rtl' | 'ltr'",
        elements: [
          { name: 'literal', value: "'rtl'" },
          { name: 'literal', value: "'ltr'" },
        ],
      },
      description: '',
    },
    isError: { required: !1, tsType: { name: 'boolean' }, description: '' },
    errorMessage: { required: !1, tsType: { name: 'string' }, description: '' },
    hintMessage: { required: !1, tsType: { name: 'string' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    showMaxLength: { required: !1, tsType: { name: 'boolean' }, description: '' },
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    maxLength: { required: !1, tsType: { name: 'number' }, description: '' },
    value: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'string | number | readonly string[]',
        elements: [{ name: 'string' }, { name: 'number' }, { name: 'unknown' }],
      },
      description: '',
    },
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
  },
};
export { y as F, C as T, x as a };
