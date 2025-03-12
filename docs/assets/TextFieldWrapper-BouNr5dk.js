'use client';
import { j as e } from './jsx-runtime-DEdD30eg.js';
import { c as f } from './clsx-B-dksMZM.js';
import { R as N } from './index-RYns6xqu.js';
import { F as w } from './FieldBottomInfo-CAJDJ2C4.js';
/* empty css               */ const k = (a) => {
  const { link: r, labelContent: i, required: d, disabled: s, labelAddon: n } = a;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs('div', {
        className: f('dgs-ui-kit-flex', {
          'dgs-ui-kit-justify-between': i && r?.href,
          'dgs-ui-kit-mb-2': !n,
          'dgs-ui-kit-justify-start': i && !r?.href,
          'dgs-ui-kit-justify-end': !i && r?.href,
          'dgs-ui-kit-text-gray-400': s,
        }),
        children: [
          i &&
            e.jsxs('label', {
              className: 'dgs-ui-kit-px-0 dgs-ui-kit-font-p2-medium md:dgs-ui-kit-mx-0',
              children: [
                i,
                d &&
                  e.jsx('span', {
                    className: 'dgs-ui-kit-ms-2 dgs-ui-kit-text-error-500',
                    children: '*',
                  }),
              ],
            }),
          r?.href &&
            e.jsx('a', {
              href: r.href,
              className: 'dgs-ui-kit-font-button-small dgs-ui-kit-text-primary-400',
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
          `dgs-ui-kit-relative dgs-ui-kit-cursor-text dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-rounded-lg dgs-ui-kit-ring-4 dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-gap-x-3 dgs-ui-kit-p-3 dgs-ui-kit-bg-gray-100 dgs-ui-kit-transition-all dgs-ui-kit-ring-transparent has-[:focus]:dgs-ui-kit-bg-white ${!t && 'hover:dgs-ui-kit-ring-gray-50'}`,
          n || l
            ? 'dgs-ui-kit-border-error-500 has-[:focus]:dgs-ui-kit-ring-error-50'
            : `dgs-ui-kit-border-transparent has-[:focus]:dgs-ui-kit-border-primary-500 has-[:focus]:dgs-ui-kit-ring-primary-50 ${!t && 'hover:dgs-ui-kit-border-gray-300'}`,
          d,
          { 'dgs-ui-kit-text-gray-400': t },
        ),
        children: [s && e.jsx('div', { className: 'dgs-ui-kit-text-gray-600', children: s }), q],
      }),
      p &&
        e.jsx(w, {
          disabled: t,
          errorMessage: l,
          hintMessage: c,
          extraHelper:
            o &&
            e.jsxs('span', { className: 'ss02', children: [b?.toString()?.length ?? 0, '/', o] }),
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
