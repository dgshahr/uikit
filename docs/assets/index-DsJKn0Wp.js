import { j as i } from './jsx-runtime-D_zvdyIk.js';
import { c as d } from './clsx-B-dksMZM.js';
import { I as H, a as V } from './index-CaeLGGl5.js';
import { r as o } from './index-Dahukp9Z.js';
import { I as W } from './IconSearch-BpsoWpUw.js';
import { C as $ } from './index-CSUGPkmK.js';
import { B as z } from './index-XKnEmu1b.js';
import { u as D, P as U } from './PickerWrapper-u2gB2Nt1.js';
import { C as G } from './index-0ehEWP2Z.js';
/* empty css               */ function J({ label: n, isMultiple: r, isActive: s, disabled: l }) {
  return r ? i.jsx($, { checked: s, label: n, readOnly: !0, disabled: l }) : n;
}
const S = (n) => {
    const { option: r, onClick: s, value: l, mode: p, optionCellClassName: m, optionCell: t } = n;
    function a() {
      return Array.isArray(l) ? l.includes(r.value) : r.value === l;
    }
    return i.jsx('button', {
      type: 'button',
      onClick: s,
      className: d(
        'dgsuikit:w-full dgsuikit:text-start dgsuikit:px-3 dgsuikit:disabled:cursor-not-allowed dgsuikit:py-3 dgsuikit:font-p1-regular dgsuikit:disabled:bg-gray-50 dgsuikit:transition',
        a()
          ? 'dgsuikit:bg-primary-50 dgsuikit:text-primary-500'
          : 'dgsuikit:text-gray-700 dgsuikit:disabled:text-gray-400',
        m,
      ),
      disabled: r.disabled,
      children: t
        ? t(r, a())
        : J({
            label: r.label,
            isMultiple: p === 'multiple',
            isActive: a(),
            disabled: r.disabled ?? !1,
          }),
    });
  },
  R = o.memo(S);
S.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'OptionItem',
  props: {
    onClick: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    option: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  value: T;
  label: string;
  disabled?: boolean;
}`,
        signature: {
          properties: [
            { key: 'value', value: { name: 'T', required: !0 } },
            { key: 'label', value: { name: 'string', required: !0 } },
            { key: 'disabled', value: { name: 'boolean', required: !1 } },
          ],
        },
      },
      description: '',
    },
  },
};
const K = 20,
  E = (n) => {
    const {
        options: r,
        mode: s = 'single',
        afterOptions: l,
        beforeOptions: p,
        onChange: m,
        searchable: t = !0,
        separateSelectedOptions: a = !0,
        optionsTitle: g = 'عنوان‌ها',
        value: c,
        optionCellClassName: x,
        emptyContent: M = 'نتیجه‌ای یافت نشد !',
        showClearButtonOnEmpty: _ = !0,
      } = n,
      [b, O] = o.useState(''),
      [y, B] = o.useState(0),
      f = o.useRef(null),
      T = o.useRef(null),
      { toggleWrapperVisibility: L } = D(),
      j = d(
        'dgsuikit:border-t dgsuikit:border-solid dgsuikit:border-gray-100',
        ((!t && !p) || (s === 'multiple' && a)) && 'dgsuikit:first-of-type:border-t-0',
        !!l && 'dgsuikit:last-of-type:border-b',
      );
    let k;
    const h = t;
    typeof t == 'boolean' ? (k = t) : (k = Object.keys(t).length > 0);
    const N = o.useMemo(() => {
        if (!Array.isArray(r)) throw new Error('options should be array');
        return b ? r?.filter((e) => e.label.includes(b)) : r;
      }, [b, r]),
      v = o.useMemo(
        () => (s === 'multiple' && a ? (r?.filter((e) => c.includes(e.value)) ?? []) : []),
        [r, c],
      ),
      I = o.useMemo(() => {
        let e = N;
        s === 'multiple' && a && (e = e?.filter((w) => !c.includes(w.value)));
        const u = Math.min(y + K, e?.length ?? 0);
        return e?.slice(y, u);
      }, [N, y, c]),
      C = f?.current?.children[0]?.clientHeight ?? 50,
      F = ((N?.length ?? 0) - (s === 'multiple' ? (v.length ?? 0) : 0)) * C,
      q = o.useCallback(() => {
        const e = f?.current?.parentElement;
        if (!e) return;
        const u = e.scrollTop,
          w = f.current.offsetTop,
          A = Math.floor((u - w) / C);
        B(A >= 0 ? A : 0);
      }, [C]);
    o.useEffect(() => {
      const e = f.current?.parentElement;
      if (e) return e.addEventListener('scroll', q), () => e.removeEventListener('scroll', q);
    }, [q]),
      o.useEffect(() => {
        !k ||
          h.autoFocus === !1 ||
          !T.current ||
          setTimeout(() => {
            T.current?.focus();
          }, 300);
      }, []);
    const P = o.useCallback(
      (e) => {
        if (typeof m == 'function')
          if (s === 'multiple') {
            const u = [...(c ?? [])];
            u.includes(e) ? u.splice(u.indexOf(e), 1) : u.push(e), m(u);
          } else m(e), L();
      },
      [c],
    );
    return i.jsxs(i.Fragment, {
      children: [
        k &&
          i.jsx(H, {
            ref: T,
            id: 'search-input',
            wrapperClassName: d(
              'dgsuikit:sticky dgsuikit:top-0 dgsuikit:pt-3 dgsuikit:right-0 dgsuikit:bg-white dgsuikit:z-10 dgsuikit:px-3',
              p ? 'dgsuikit:pb-2' : 'dgsuikit:pb-3',
              h?.wrapperClassName,
            ),
            placeholder: h?.placeholder ?? 'جستجوی عنوان',
            value: b,
            onChange: (e) => O(e.currentTarget.value),
            rightIcon: h?.rightIcon ?? i.jsx(W, { width: 20, height: 20 }),
            ...(typeof t == 'object' ? t : {}),
          }),
        p,
        s === 'multiple' &&
          a &&
          v.length > 0 &&
          i.jsxs(i.Fragment, {
            children: [
              i.jsx('p', {
                className:
                  'dgsuikit:font-p2-regular dgsuikit:text-gray-400 dgsuikit:px-3 dgsuikit:py-2',
                children: `${g}‌ی انتخاب شده`,
              }),
              v.map((e) =>
                i.jsx(
                  R,
                  { onClick: () => P(e.value), option: e, optionCellClassName: d(j, x), ...n },
                  e.value,
                ),
              ),
            ],
          }),
        i.jsxs(i.Fragment, {
          children: [
            s === 'multiple' &&
              a &&
              i.jsx('p', {
                className:
                  'dgsuikit:font-p2-regular dgsuikit:text-gray-400 dgsuikit:px-3 dgsuikit:py-2',
                children: g,
              }),
            i.jsx('div', {
              ref: f,
              className: 'dgsuikit:relative',
              style: { height: F },
              children: I?.map((e, u) =>
                i.jsx(
                  'div',
                  {
                    className: d('dgsuikit:absolute dgsuikit:w-full', j),
                    style: { top: `${(y + u) * C}px` },
                    children: i.jsx(R, { onClick: () => P(e.value), option: e, ...n }),
                  },
                  e.value,
                ),
              ),
            }),
            !I?.length &&
              !v.length &&
              i.jsxs('div', {
                className:
                  'dgsuikit:text-center dgsuikit:flex dgsuikit:flex-col dgsuikit:items-center dgsuikit:mt-2',
                children: [
                  i.jsx('p', {
                    className: 'dgsuikit:text-gray-500 dgsuikit:font-p3-medium',
                    children: M,
                  }),
                  _ &&
                    i.jsx(z, {
                      type: 'button',
                      className: 'dgsuikit:mt-1',
                      variant: 'text',
                      size: 'small',
                      onClick: () => O(''),
                      children: 'پاک کردن',
                    }),
                ],
              }),
          ],
        }),
        l,
      ],
    });
  };
E.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Options',
  props: {
    options: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'object',
            raw: `{
  value: T;
  label: string;
  disabled?: boolean;
}`,
            signature: {
              properties: [
                { key: 'value', value: { name: 'T', required: !0 } },
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'disabled', value: { name: 'boolean', required: !1 } },
              ],
            },
          },
        ],
        raw: 'Option<T>[]',
      },
      description: '',
    },
    searchable: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "boolean | Omit<InputProps, 'onChange'>",
        elements: [
          { name: 'boolean' },
          {
            name: 'Omit',
            elements: [{ name: 'InputProps' }, { name: 'literal', value: "'onChange'" }],
            raw: "Omit<InputProps, 'onChange'>",
          },
        ],
      },
      description: '',
    },
    optionCell: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(option: Option<T>, isActive: boolean) => ReactNode',
        signature: {
          arguments: [
            {
              type: {
                name: 'signature',
                type: 'object',
                raw: `{
  value: T;
  label: string;
  disabled?: boolean;
}`,
                signature: {
                  properties: [
                    { key: 'value', value: { name: 'T', required: !0 } },
                    { key: 'label', value: { name: 'string', required: !0 } },
                    { key: 'disabled', value: { name: 'boolean', required: !1 } },
                  ],
                },
              },
              name: 'option',
            },
            { type: { name: 'boolean' }, name: 'isActive' },
          ],
          return: { name: 'ReactNode' },
        },
      },
      description: '',
    },
    optionCellClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    beforeOptions: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    afterOptions: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    emptyContent: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    showClearButtonOnEmpty: { required: !1, tsType: { name: 'boolean' }, description: '' },
    isLoading: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
function Q(n, r) {
  if (!Array.isArray(n)) return r.find((s) => s.value === n)?.label ?? '';
}
const X = (n) => {
  const { searchable: r = !0, value: s, options: l } = n,
    p = Array.isArray(s) && s.length > 0;
  function m() {
    return n.inputProps?.prefix
      ? n.inputProps.prefix
      : p
        ? s.map((a) =>
            i.jsx(
              G,
              {
                label: l.find((g) => g.value === a)?.label,
                clickable: !0,
                leftIcon: i.jsx(V, {}),
                onClick: (g) => {
                  g.stopPropagation();
                  const c = s.filter((x) => x !== a);
                  n.onChange?.(c);
                },
              },
              a,
            ),
          )
        : null;
  }
  const t = { ...n };
  return (
    t.dropdownType === 'popover' &&
      !r &&
      (t.popoverClassName = d('dgsuikit:pt-3', t.popoverClassName)),
    t.dropdownType === 'drawer' &&
      (t.drawerProps = {
        ...t.drawerProps,
        containerClassName: d(
          r ? 'dgsuikit:!pt-0' : 'dgsuikit:!pt-3',
          t.drawerProps?.containerClassName,
        ),
      }),
    t.customInput ||
      (t.inputProps = {
        ...t.inputProps,
        value: Q(s, l),
        prefix: m(),
        prefixClassName: p
          ? d(
              'dgsuikit:flex dgsuikit:items-center flex dgsuikit:flex-wrap dgsuikit:gap-2 dgsuikit:w-full',
              t.inputProps?.prefixClassName,
            )
          : t.inputProps?.prefixClassName,
        className: p ? 'dgsuikit:hidden' : t.inputProps?.className,
        containerClassName: p
          ? d('dgsuikit:items-baseline', t.inputProps?.containerClassName)
          : t.inputProps?.containerClassName,
      }),
    i.jsx(U, { ...t, children: i.jsx(E, { ...n }) })
  );
};
X.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Select',
  props: {
    options: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'object',
            raw: `{
  value: T;
  label: string;
  disabled?: boolean;
}`,
            signature: {
              properties: [
                { key: 'value', value: { name: 'T', required: !0 } },
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'disabled', value: { name: 'boolean', required: !1 } },
              ],
            },
          },
        ],
        raw: 'Option<T>[]',
      },
      description: '',
    },
    searchable: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "boolean | Omit<InputProps, 'onChange'>",
        elements: [
          { name: 'boolean' },
          {
            name: 'Omit',
            elements: [{ name: 'InputProps' }, { name: 'literal', value: "'onChange'" }],
            raw: "Omit<InputProps, 'onChange'>",
          },
        ],
      },
      description: '',
    },
    optionCell: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(option: Option<T>, isActive: boolean) => ReactNode',
        signature: {
          arguments: [
            {
              type: {
                name: 'signature',
                type: 'object',
                raw: `{
  value: T;
  label: string;
  disabled?: boolean;
}`,
                signature: {
                  properties: [
                    { key: 'value', value: { name: 'T', required: !0 } },
                    { key: 'label', value: { name: 'string', required: !0 } },
                    { key: 'disabled', value: { name: 'boolean', required: !1 } },
                  ],
                },
              },
              name: 'option',
            },
            { type: { name: 'boolean' }, name: 'isActive' },
          ],
          return: { name: 'ReactNode' },
        },
      },
      description: '',
    },
    optionCellClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    beforeOptions: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    afterOptions: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    emptyContent: { required: !1, tsType: { name: 'ReactNode' }, description: '' },
    showClearButtonOnEmpty: { required: !1, tsType: { name: 'boolean' }, description: '' },
    isLoading: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { X as S };
