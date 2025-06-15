'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as i } from './clsx-B-dksMZM.js';
import { r as a } from './index-CTzypqlY.js';
import { D as E } from './index-Du_ZTs0Q.js';
import { u as R } from './useFlipPosition-D78LAv0q.js';
import { I as S } from './IconArrowDown2-BBhufJ55.js';
import { I as D } from './index-Dvf2rB5F.js';
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
  w = 'dgsuikit:duration-300',
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
      'dgsuikit:!cursor-not-allowed': s,
      'dgsuikit:!cursor-wait': o,
      'dgsuikit:!cursor-pointer': !o && !s,
    });
    return t.jsxs('div', {
      ref: W,
      className: i('dgsuikit:relative', v),
      children: [
        t.jsx('button', {
          ref: j,
          type: 'button',
          className: i('dgsuikit:w-full', c),
          onClick: h,
          children: m
            ? m(n)
            : t.jsx(D, {
                leftIcon: o
                  ? t.jsx('div', { className: 'dot-flashing dgsuikit:mr-2' })
                  : t.jsx(S, {
                      width: 20,
                      height: 20,
                      className: i('dgsuikit:transition', w, { 'dgsuikit:rotate-180': n }),
                    }),
                containerClassName: i(c, { 'dgsuikit:items-baseline': o }),
                className: i('dgsuikit:caret-transparent', c),
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
                        'dgsuikit:absolute dgsuikit:min-w-[300px] dgsuikit:right-0 dgsuikit:overflow-y-auto dgsuikit:overflow-x-hidden dgsuikit:shadow-lg dgsuikit:w-full dgsuikit:max-h-[360px] dgsuikit:transition-all dgsuikit:bg-white dgsuikit:z-50 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-solid dgsuikit:border-gray-200 dgsuikit:pb-3',
                        w,
                        n
                          ? 'dgsuikit:opacity-100'
                          : 'dgsuikit:opacity-0 dgsuikit:max-h-0 dgsuikit:overflow-y-hidden',
                        {
                          'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)]':
                            x.includes('bottom'),
                          'dgsuikit:top-0 dgsuikit:translate-y-[calc(-100%-8px)]':
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
                      containerClassName: i('dgsuikit:!pb-3 dgsuikit:!px-0', k?.containerClassName),
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
