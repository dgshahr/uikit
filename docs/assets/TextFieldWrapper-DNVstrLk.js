'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as k } from './clsx-B-dksMZM.js';
import { R as w } from './index-D1sGr8oY.js';
import { F as C } from './FieldBottomInfo-DcydcAx7.js';
/* empty css               */ const h = (a) => {
  const { link: r, labelContent: i, required: d, disabled: t, labelAddon: n } = a;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs('div', {
        className: k('dgsuikit:flex', {
          'dgsuikit:justify-between': i && r?.href,
          'dgsuikit:mb-2': !n,
          'dgsuikit:justify-start': i && !r?.href,
          'dgsuikit:justify-end': !i && r?.href,
          'dgsuikit:text-gray-400': t,
        }),
        children: [
          i &&
            e.jsxs('label', {
              className: 'dgsuikit:px-0 dgsuikit:font-p2-medium dgsuikit:md:mx-0',
              children: [
                i,
                d &&
                  e.jsx('span', {
                    className: 'dgsuikit:ms-2 dgsuikit:text-error-500',
                    children: '*',
                  }),
              ],
            }),
          r?.href &&
            e.jsx('a', {
              href: r.href,
              className: 'dgsuikit:font-button-small dgsuikit:text-primary-400',
              children: r.cnotent,
            }),
        ],
      }),
      n,
    ],
  });
};
h.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'FieldLabel',
  props: {
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
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
  },
};
const R = (a) => {
  const {
      labelContent: r,
      link: i,
      containerClassName: d,
      rightIcon: t,
      isError: n,
      errorMessage: l,
      hintMessage: c,
      required: y,
      labelAddon: b,
      maxLength: o,
      disabled: s,
      value: x,
      wrapperClassName: u,
      showMaxLength: p,
      children: q,
      hintMessageClassName: T,
    } = a,
    g = !!(l || c || (o && p)),
    m = !!(r || i?.href),
    N = g || m || u ? 'div' : w.Fragment,
    j = (v) => {
      const f = v.currentTarget.querySelector('textarea, input');
      f && f.focus();
    };
  return e.jsxs(N, {
    ...(u ? { className: u } : {}),
    children: [
      m && e.jsx(h, { disabled: s, labelContent: r, link: i, required: y, labelAddon: b }),
      e.jsxs('div', {
        onClick: j,
        className: k(
          `dgsuikit:relative dgsuikit:cursor-text dgsuikit:border dgsuikit:border-solid dgsuikit:rounded-lg dgsuikit:ring-4 dgsuikit:flex dgsuikit:justify-between dgsuikit:gap-x-3 dgsuikit:p-3 dgsuikit:bg-gray-100 dgsuikit:transition-all dgsuikit:ring-transparent dgsuikit:has-[:focus]:bg-white ${!s && 'dgsuikit:hover:ring-gray-50'}`,
          n || l
            ? 'dgsuikit:border-error-500 dgsuikit:has-[:focus]:ring-error-50'
            : `dgsuikit:border-transparent dgsuikit:has-[:focus]:border-primary-500 dgsuikit:has-[:focus]:ring-primary-50 ${!s && 'dgsuikit:hover:border-gray-300'}`,
          d,
          { 'dgsuikit:text-gray-400': s },
        ),
        children: [t && e.jsx('div', { className: 'dgsuikit:text-gray-600', children: t }), q],
      }),
      g &&
        e.jsx(C, {
          disabled: s,
          errorMessage: l,
          hintMessage: c,
          className: T,
          extraHelper:
            o &&
            p &&
            e.jsxs('span', {
              className: 'dgsuikit:ss02',
              children: [x?.toString()?.length ?? 0, '/', o],
            }),
        }),
    ],
  });
};
R.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TextFieldWrapper',
  props: {
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
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
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    showMaxLength: { required: !1, tsType: { name: 'boolean' }, description: '' },
    hintMessageClassName: { required: !1, tsType: { name: 'string' }, description: '' },
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
  composes: ['Omit'],
};
export { h as F, R as T };
