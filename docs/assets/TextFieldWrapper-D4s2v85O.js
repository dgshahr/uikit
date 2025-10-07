'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as f } from './clsx-B-dksMZM.js';
import { R as N } from './index-CTzypqlY.js';
import { F as w } from './FieldBottomInfo-Dl0xKUm9.js';
/* empty css               */ const k = (a) => {
  const { link: r, labelContent: i, required: d, disabled: s, labelAddon: n } = a;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs('div', {
        className: f('dgsuikit:flex', {
          'dgsuikit:justify-between': i && r?.href,
          'dgsuikit:mb-2': !n,
          'dgsuikit:justify-start': i && !r?.href,
          'dgsuikit:justify-end': !i && r?.href,
          'dgsuikit:text-gray-400': s,
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
k.__docgenInfo = {
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
      rightIcon: s,
      isError: n,
      errorMessage: l,
      hintMessage: c,
      required: h,
      labelAddon: y,
      maxLength: o,
      disabled: t,
      value: b,
      wrapperClassName: u,
      showMaxLength: x,
      children: q,
    } = a,
    p = !!(l || c || (o && x)),
    g = !!(r || i?.href),
    T = p || g || u ? 'div' : N.Fragment,
    j = (v) => {
      const m = v.currentTarget.querySelector('textarea, input');
      m && m.focus();
    };
  return e.jsxs(T, {
    ...(u ? { className: u } : {}),
    children: [
      g && e.jsx(k, { disabled: t, labelContent: r, link: i, required: h, labelAddon: y }),
      e.jsxs('div', {
        onClick: j,
        className: f(
          `dgsuikit:relative dgsuikit:cursor-text dgsuikit:border dgsuikit:border-solid dgsuikit:rounded-lg dgsuikit:ring-4 dgsuikit:flex dgsuikit:justify-between dgsuikit:gap-x-3 dgsuikit:p-3 dgsuikit:bg-gray-100 dgsuikit:transition-all dgsuikit:ring-transparent dgsuikit:has-[:focus]:bg-white ${!t && 'dgsuikit:hover:ring-gray-50'}`,
          n || l
            ? 'dgsuikit:border-error-500 dgsuikit:has-[:focus]:ring-error-50'
            : `dgsuikit:border-transparent dgsuikit:has-[:focus]:border-primary-500 dgsuikit:has-[:focus]:ring-primary-50 ${!t && 'dgsuikit:hover:border-gray-300'}`,
          d,
          { 'dgsuikit:text-gray-400': t },
        ),
        children: [s && e.jsx('div', { className: 'dgsuikit:text-gray-600', children: s }), q],
      }),
      p &&
        e.jsx(w, {
          disabled: t,
          errorMessage: l,
          hintMessage: c,
          extraHelper:
            o &&
            e.jsxs('span', {
              className: 'dgsuikit:ss02',
              children: [b?.toString()?.length ?? 0, '/', o],
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
export { k as F, R as T };
