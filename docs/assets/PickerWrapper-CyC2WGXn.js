'use client';
import { j as e } from './jsx-runtime-DEdD30eg.js';
import { c as i } from './clsx-B-dksMZM.js';
import { r as a } from './index-RYns6xqu.js';
import { D as y } from './index-Bs_o55pa.js';
import { A as I } from './ArrowDown2-BROvoNUr.js';
import { I as j } from './index-BrJQ9LeW.js';
/* empty css               */ const h = a.createContext({ toggleWrapperVisibility: () => {} }),
  _ = () => a.useContext(h),
  W = (u) => {
    const t = a.useRef(null);
    return (
      a.useEffect(() => {
        const s = (r) => {
          t.current && !t.current.contains(r.target) && u();
        };
        return (
          document.addEventListener('click', s, !0),
          () => {
            document.removeEventListener('click', s, !0);
          }
        );
      }, [t, u]),
      t
    );
  },
  x = 'dgs-ui-kit-duration-300',
  w = 400,
  E = (u) => {
    const {
        dropdownType: t = 'popover',
        disabled: s,
        isLoading: r,
        wrapperClassName: C,
        customInput: c,
        children: g,
        drawerProps: m,
        inputProps: v,
        popoverClassName: N,
      } = u,
      [n, d] = a.useState(!1),
      [k, l] = a.useState(!1);
    let o;
    const b = W(() => {
      t === 'popover' &&
        n &&
        (d(!1),
        o && clearTimeout(o),
        (o = setTimeout(() => {
          l(!1);
        }, w)));
    });
    function f() {
      if (s || r) return;
      const T = !k;
      o && clearTimeout(o),
        T
          ? (l(!0),
            (o = setTimeout(() => {
              d(!0);
            }, 0)))
          : (d(!1),
            (o = setTimeout(() => {
              l(!1);
            }, w)));
    }
    const p = i({
      '!dgs-ui-kit-cursor-not-allowed': s,
      '!dgs-ui-kit-cursor-wait': r,
      '!dgs-ui-kit-cursor-pointer': !r && !s,
    });
    return e.jsxs('div', {
      ref: b,
      className: i('dgs-ui-kit-relative', C),
      children: [
        e.jsx('button', {
          className: i('dgs-ui-kit-w-full', p),
          onClick: f,
          children: c
            ? c(n)
            : e.jsx(j, {
                leftIcon: r
                  ? e.jsx('div', { className: 'dot-flashing dgs-ui-kit-mr-2' })
                  : e.jsx(I, {
                      width: 20,
                      height: 20,
                      className: i('dgs-ui-kit-transition', x, { 'dgs-ui-kit-rotate-180': n }),
                    }),
                containerClassName: i(p, { 'dgs-ui-kit-items-baseline': r }),
                className: i('dgs-ui-kit-caret-transparent', p),
                disabled: s,
                ...v,
              }),
        }),
        e.jsx(h.Provider, {
          value: { toggleWrapperVisibility: f },
          children:
            k &&
            e.jsx(e.Fragment, {
              children:
                t === 'popover'
                  ? e.jsx('div', {
                      className: i(
                        'dgs-ui-kit-absolute dgs-ui-kit-min-w-[300px] dgs-ui-kit-bottom-0 dgs-ui-kit-right-0 dgs-ui-kit-translate-y-[calc(100%+8px)] dgs-ui-kit-overflow-y-auto dgs-ui-kit-overflow-x-hidden dgs-ui-kit-shadow-lg dgs-ui-kit-w-full dgs-ui-kit-max-h-[360px] dgs-ui-kit-transition-all dgs-ui-kit-bg-white dgs-ui-kit-z-50 dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200 dgs-ui-kit-pb-3',
                        x,
                        n
                          ? 'dgs-ui-kit-opacity-100'
                          : 'dgs-ui-kit-opacity-0 dgs-ui-kit-max-h-0 dgs-ui-kit-overflow-y-hidden',
                        N,
                      ),
                      children: g,
                    })
                  : e.jsx(y, {
                      ...m,
                      open: n,
                      onClose: () => d(!1),
                      containerClassName: i(
                        '!dgs-ui-kit-pb-3 !dgs-ui-kit-px-0',
                        m?.containerClassName,
                      ),
                      children: g,
                    }),
            }),
        }),
      ],
    });
  };
E.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'PickerWrapper',
  props: {
    isLoading: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { E as P, _ as u };
