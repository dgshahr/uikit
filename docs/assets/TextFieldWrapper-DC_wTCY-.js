'use client';
import { j as i } from './jsx-runtime-DEdD30eg.js';
import { c as o } from './clsx-B-dksMZM.js';
import { R as w } from './index-RYns6xqu.js';
import { I } from './InfoCircleOutline-BidNIAAo.js';
/* empty css               */ const h = (a) => {
  const { errorMessage: e, hintMessage: s, maxLength: r, value: n, disabled: t } = a;
  return i.jsxs('div', {
    className: o(
      'dgs-ui-kit-flex dgs-ui-kit-font-p3-regular',
      {
        'dgs-ui-kit-justify-between': (e || s) && r,
        'dgs-ui-kit-justify-start': (e || s) && !r,
        'dgs-ui-kit-justify-end': !(e || s) && r,
        'dgs-ui-kit-text-gray-400': t,
      },
      e ? 'dgs-ui-kit-text-error-500' : 'dgs-ui-kit-text-gray-500',
    ),
    children: [
      (e || s) &&
        i.jsxs('div', {
          className: o(
            'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 dgs-ui-kit-font-light',
            { 'dgs-ui-kit-text-gray-400': t },
          ),
          children: [i.jsx(I, { width: 16, height: 16 }), i.jsx('span', { children: e || s })],
        }),
      r && i.jsxs('span', { className: 'ss02', children: [n?.length ?? 0, '/', r] }),
    ],
  });
};
h.__docgenInfo = {
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
const y = (a) => {
  const { link: e, labelContent: s, required: r, disabled: n, children: t } = a;
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs('div', {
        className: o('dgs-ui-kit-flex', {
          'dgs-ui-kit-justify-between': s && e?.href,
          'dgs-ui-kit-mb-2': !t,
          'dgs-ui-kit-justify-start': s && !e?.href,
          'dgs-ui-kit-justify-end': !s && e?.href,
          'dgs-ui-kit-text-gray-400': n,
        }),
        children: [
          s &&
            i.jsxs('label', {
              className: 'dgs-ui-kit-px-0 dgs-ui-kit-font-p2-medium md:dgs-ui-kit-mx-0',
              children: [
                s,
                r &&
                  i.jsx('span', {
                    className: 'dgs-ui-kit-ms-2 dgs-ui-kit-text-error-500',
                    children: '*',
                  }),
              ],
            }),
          e?.href &&
            i.jsx('a', {
              href: e.href,
              className: 'dgs-ui-kit-font-button-small dgs-ui-kit-text-primary-400',
              children: e.cnotent,
            }),
        ],
      }),
      t,
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
const C = (a) => {
  const {
      labelContent: e,
      link: s,
      containerClassName: r,
      rightIcon: n,
      isError: t,
      errorMessage: l,
      hintMessage: g,
      required: x,
      labelAddon: b,
      maxLength: c,
      disabled: d,
      value: q,
      wrapperClassName: u,
      showMaxLength: p,
      children: T,
    } = a,
    m = !!(l || g || (c && p)),
    f = !!(e || s?.href),
    j = m || f || u ? 'div' : w.Fragment,
    v = (N) => {
      const k = N.currentTarget.querySelector('textarea, input');
      k && k.focus();
    };
  return i.jsxs(j, {
    ...(u ? { className: u } : {}),
    children: [
      f && i.jsx(y, { disabled: d, labelContent: e, link: s, required: x, children: b }),
      i.jsxs('div', {
        onClick: v,
        className: o(
          `dgs-ui-kit-relative dgs-ui-kit-cursor-text dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-rounded-lg dgs-ui-kit-ring-4 dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-gap-x-3 dgs-ui-kit-p-3 dgs-ui-kit-bg-gray-100 dgs-ui-kit-transition-all dgs-ui-kit-ring-transparent has-[:focus]:dgs-ui-kit-bg-white ${!d && 'hover:dgs-ui-kit-ring-gray-50'}`,
          t || l
            ? 'dgs-ui-kit-border-error-500 has-[:focus]:dgs-ui-kit-ring-error-50'
            : `dgs-ui-kit-border-transparent has-[:focus]:dgs-ui-kit-border-primary-500 has-[:focus]:dgs-ui-kit-ring-primary-50 ${!d && 'hover:dgs-ui-kit-border-gray-300'}`,
          r,
          { 'dgs-ui-kit-text-gray-400': d },
        ),
        children: [n && i.jsx('div', { className: 'dgs-ui-kit-text-gray-600', children: n }), T],
      }),
      m &&
        i.jsx(h, {
          disabled: d,
          errorMessage: l,
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
export { y as F, C as T, h as a };
