'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as i } from './clsx-B-dksMZM.js';
import { r as a } from './index-CTzypqlY.js';
import { D as E } from './index-Bhd4K1ZI.js';
import { u as R } from './useFlipPosition-Eiz29amO.js';
import { I as S } from './IconArrowDown2-BBhufJ55.js';
import { I as D } from './index-vdJI3MmU.js';
/* empty css               */ const N = a.createContext({ toggleWrapperVisibility: () => {} }),
  B = () => a.useContext(N),
  L = (u) => {
    const e = a.useRef(null);
    return (
      a.useEffect(() => {
        const s = (o) => {
          e.current && !e.current.contains(o.target) && u();
        };
        return (
          document.addEventListener('click', s, !0),
          () => {
            document.removeEventListener('click', s, !0);
          }
        );
      }, [e, u]),
      e
    );
  },
  w = 'dgs-ui-kit-duration-300',
  C = 400,
  O = (u) => {
    const {
        dropdownType: e = 'popover',
        disabled: s,
        isLoading: o,
        wrapperClassName: v,
        customInput: m,
        children: g,
        drawerProps: k,
        inputProps: y,
        popoverClassName: I,
      } = u,
      [n, d] = a.useState(!1),
      [f, p] = a.useState(!1),
      [x, T] = a.useState('bottom-left');
    let r;
    const { anchorRef: j, popperRef: P } = R({
        initialPosition: 'bottom-left',
        minVisible: 180,
        onPositionChange(l) {
          T((b) => (b === l ? b : l));
        },
      }),
      W = L(() => {
        e === 'popover' &&
          n &&
          (d(!1),
          r && clearTimeout(r),
          (r = setTimeout(() => {
            p(!1);
          }, C)));
      });
    function h() {
      if (s || o) return;
      const l = !f;
      r && clearTimeout(r),
        l
          ? (p(!0),
            (r = setTimeout(() => {
              d(!0);
            }, 0)))
          : (d(!1),
            (r = setTimeout(() => {
              p(!1);
            }, C)));
    }
    const c = i({
      '!dgs-ui-kit-cursor-not-allowed': s,
      '!dgs-ui-kit-cursor-wait': o,
      '!dgs-ui-kit-cursor-pointer': !o && !s,
    });
    return t.jsxs('div', {
      ref: W,
      className: i('dgs-ui-kit-relative', v),
      children: [
        t.jsx('button', {
          ref: j,
          type: 'button',
          className: i('dgs-ui-kit-w-full', c),
          onClick: h,
          children: m
            ? m(n)
            : t.jsx(D, {
                leftIcon: o
                  ? t.jsx('div', { className: 'dot-flashing dgs-ui-kit-mr-2' })
                  : t.jsx(S, {
                      width: 20,
                      height: 20,
                      className: i('dgs-ui-kit-transition', w, { 'dgs-ui-kit-rotate-180': n }),
                    }),
                containerClassName: i(c, { 'dgs-ui-kit-items-baseline': o }),
                className: i('dgs-ui-kit-caret-transparent', c),
                disabled: s,
                ...y,
              }),
        }),
        t.jsx(N.Provider, {
          value: { toggleWrapperVisibility: h },
          children:
            f &&
            t.jsx(t.Fragment, {
              children:
                e === 'popover'
                  ? t.jsx('div', {
                      ref: P,
                      className: i(
                        'dgs-ui-kit-absolute dgs-ui-kit-min-w-[300px] dgs-ui-kit-right-0 dgs-ui-kit-overflow-y-auto dgs-ui-kit-overflow-x-hidden dgs-ui-kit-shadow-lg dgs-ui-kit-w-full dgs-ui-kit-max-h-[360px] dgs-ui-kit-transition-all dgs-ui-kit-bg-white dgs-ui-kit-z-50 dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200 dgs-ui-kit-pb-3',
                        w,
                        n
                          ? 'dgs-ui-kit-opacity-100'
                          : 'dgs-ui-kit-opacity-0 dgs-ui-kit-max-h-0 dgs-ui-kit-overflow-y-hidden',
                        {
                          'dgs-ui-kit-bottom-0 dgs-ui-kit-translate-y-[calc(100%+8px)]':
                            x.includes('bottom'),
                          'dgs-ui-kit-top-0 dgs-ui-kit-translate-y-[calc(-100%-8px)]':
                            x.includes('top'),
                        },
                        I,
                      ),
                      children: g,
                    })
                  : t.jsx(E, {
                      ...k,
                      open: n,
                      onClose: () => d(!1),
                      containerClassName: i(
                        '!dgs-ui-kit-pb-3 !dgs-ui-kit-px-0',
                        k?.containerClassName,
                      ),
                      children: g,
                    }),
            }),
        }),
      ],
    });
  };
O.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'PickerWrapper',
  props: {
    isLoading: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { O as P, B as u };
