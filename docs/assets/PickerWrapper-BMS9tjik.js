'use client';
import { j as i } from './jsx-runtime-D_zvdyIk.js';
import { c as t } from './clsx-B-dksMZM.js';
import { r as a } from './index-CTzypqlY.js';
import { D as S } from './index-Dd7hsxwT.js';
import { u as D } from './useFlipPosition-D78LAv0q.js';
import { I as L } from './IconArrowDown2-BBhufJ55.js';
import { I as O } from './index-8SMaNsFH.js';
/* empty css               */ const N = a.createContext({ toggleWrapperVisibility: () => {} }),
  H = () => a.useContext(N),
  _ = (u) => {
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
  C = 'dgsuikit:duration-300',
  v = 400,
  A = (u) => {
    const {
        dropdownType: e = 'popover',
        disabled: s,
        isLoading: o,
        wrapperClassName: y,
        customInput: g,
        children: m,
        drawerProps: k,
        inputProps: I,
        popoverClassName: T,
        popoverPosition: P,
      } = u,
      f = P === 'top' ? 'top-left' : 'bottom-left',
      [n, d] = a.useState(!1),
      [x, l] = a.useState(!1),
      [h, j] = a.useState(f);
    let r;
    const { anchorRef: W, popperRef: E } = D({
        initialPosition: f,
        minVisible: 180,
        onPositionChange(p) {
          j((b) => (b === p ? b : p));
        },
      }),
      R = _(() => {
        e === 'popover' &&
          n &&
          (d(!1),
          r && clearTimeout(r),
          (r = setTimeout(() => {
            l(!1);
          }, v)));
      });
    function w() {
      if (s || o) return;
      const p = !x;
      r && clearTimeout(r),
        p
          ? (l(!0),
            (r = setTimeout(() => {
              d(!0);
            }, 0)))
          : (d(!1),
            (r = setTimeout(() => {
              l(!1);
            }, v)));
    }
    const c = t({
      'dgsuikit:!cursor-not-allowed': s,
      'dgsuikit:!cursor-wait': o,
      'dgsuikit:!cursor-pointer': !o && !s,
    });
    return i.jsxs('div', {
      ref: R,
      className: t('dgsuikit:relative', y),
      children: [
        i.jsx('button', {
          ref: W,
          type: 'button',
          className: t('dgsuikit:w-full', c),
          onClick: w,
          children: g
            ? g(n)
            : i.jsx(O, {
                leftIcon: o
                  ? i.jsx('div', { className: 'dot-flashing dgsuikit:mr-2' })
                  : i.jsx(L, {
                      width: 20,
                      height: 20,
                      className: t('dgsuikit:transition', C, { 'dgsuikit:rotate-180': n }),
                    }),
                containerClassName: t(c, { 'dgsuikit:items-baseline': o }),
                className: t('dgsuikit:caret-transparent', c),
                disabled: s,
                ...I,
              }),
        }),
        i.jsx(N.Provider, {
          value: { toggleWrapperVisibility: w },
          children:
            x &&
            i.jsx(i.Fragment, {
              children:
                e === 'popover'
                  ? i.jsx('div', {
                      ref: E,
                      className: t(
                        'dgsuikit:absolute dgsuikit:min-w-[300px] dgsuikit:right-0 dgsuikit:overflow-y-auto dgsuikit:overflow-x-hidden dgsuikit:shadow-lg dgsuikit:w-full dgsuikit:max-h-[360px] dgsuikit:transition-all dgsuikit:bg-white dgsuikit:z-50 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-solid dgsuikit:border-gray-200 dgsuikit:pb-3',
                        C,
                        n
                          ? 'dgsuikit:opacity-100'
                          : 'dgsuikit:opacity-0 dgsuikit:max-h-0 dgsuikit:overflow-y-hidden',
                        {
                          'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)]':
                            h.includes('bottom'),
                          'dgsuikit:top-0 dgsuikit:translate-y-[calc(-100%-8px)]':
                            h.includes('top'),
                        },
                        T,
                      ),
                      children: m,
                    })
                  : i.jsx(S, {
                      ...k,
                      open: n,
                      onClose: () => d(!1),
                      containerClassName: t('dgsuikit:!pb-3 dgsuikit:!px-0', k?.containerClassName),
                      children: m,
                    }),
            }),
        }),
      ],
    });
  };
A.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'PickerWrapper',
  props: {
    isLoading: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { A as P, H as u };
