'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as o } from './clsx-B-dksMZM.js';
import { r as k } from './index-CTzypqlY.js';
/* empty css               */ import { r as A } from './index-BRSOB10J.js';
import { I as _ } from './IconCloseRemove-B6m37iwz.js';
import { u as L } from './useFlipPosition-D78LAv0q.js';
import { u as z } from './useOutsideClick-OW2A_t1-.js';
import { I as M } from './IconArrowDown2-BBhufJ55.js';
import { I as V } from './index-725Xjxr6.js';
const $ = k.createContext({ toggleWrapperVisibility: () => {} }),
  it = () => k.useContext($),
  W = 150;
let v = 0,
  D;
function R({ position: a, padding: r = 0, item: i }) {
  return a === 'center'
    ? 'auto'
    : i === 'width'
      ? a === 'bottom' || a === 'top'
        ? `calc(100% - ${r * 2}px)`
        : 'auto'
      : a === 'bottom' || a === 'top'
        ? 'auto'
        : `calc(100% - ${r * 2}px)`;
}
function q({ position: a, padding: r = 0 }) {
  const i = 'dgsuikit:rounded-2xl';
  if (r > 0 || a === 'center') return i;
  switch (a) {
    case 'bottom':
      return `${i} dgsuikit:rounded-b-none`;
    case 'left':
      return `${i} dgsuikit:rounded-l-none`;
    case 'right':
      return `${i} dgsuikit:rounded-r-none`;
    case 'top':
      return `${i} dgsuikit:rounded-t-none`;
    default:
      return i;
  }
}
const U = (a) => {
    const {
        open: r,
        onClose: i,
        persist: p,
        position: e = 'bottom',
        children: w,
        className: b,
        maskClassName: y,
        containerClassName: j,
        padding: u = 8,
        width: I,
        header: s,
        footer: l,
        containerElement: m,
        havePopover: h,
      } = a,
      [d, g] = k.useState(!1),
      x = m ?? document?.body;
    function n() {
      D && clearTimeout(D),
        (D = setTimeout(() => {
          v > 0
            ? x.classList.add('dgsuikit:overflow-hidden', 'dgsuikit:relative')
            : x.classList.remove('dgsuikit:overflow-hidden', 'dgsuikit:relative');
        }, W));
    }
    function T() {
      v === 0 && n(),
        v++,
        setTimeout(() => {
          g(!0);
        }, W);
    }
    function f(c = !0) {
      g(!1),
        setTimeout(() => {
          (v = Math.max(0, v - 1)), n(), c && i();
        }, W);
    }
    if (
      (k.useEffect(() => {
        r ? T() : d && f(!1);
      }, [r]),
      k.useEffect(
        () => () => {
          f(!1);
        },
        [],
      ),
      !r)
    )
      return;
    const P = s ? Object.values(s).some((c) => !!c) : !1,
      N =
        e === 'center'
          ? { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
          : {
              top: e !== 'bottom' ? (u ?? 0) : 'unset',
              bottom: e !== 'top' ? (u ?? 0) : 'unset',
              left: e !== 'right' ? (u ?? 0) : 'unset',
              right: e !== 'left' ? (u ?? 0) : 'unset',
            };
    return A.createPortal(
      t.jsx('div', {
        className: o(
          'dgsuikit:bg-black/40 dgsuikit:top-0 dgsuikit:left-0 dgsuikit:z-50 dgsuikit:opacity-0 dgsuikit:overflow-hidden dgsuikit:cursor-default dgsuikit:transition dgsuikit:ease-linear',
          { 'dgsuikit:opacity-100': d, 'dgsuikit:w-full dgsuikit:h-full': r },
          m ? 'dgsuikit:absolute' : 'dgsuikit:fixed',
          y,
        ),
        onClick: () => (p ? null : f()),
        children: t.jsx('div', {
          className: o(
            'dgsuikit:absolute dgsuikit:z-10 dgsuikit:opacity-0 dgsuikit:transition dgsuikit:duration-100 dgsuikit:flex dgsuikit:justify-center',
            {
              'dgsuikit:opacity-100': d,
              'dgsuikit:translate-y-full': !d && e === 'bottom',
              'dgsuikit:-translate-y-full': !d && e === 'top',
              'dgsuikit:translate-x-full': !d && e === 'right',
              'dgsuikit:-translate-x-full': !d && e === 'left',
            },
            b,
          ),
          style: {
            ...N,
            maxHeight: `calc(100svh - ${u * 2}px)`,
            maxWidth: `calc(100vw - ${u * 2}px)`,
            width: R({ position: e, padding: u, item: 'width' }),
            height: R({ position: e, padding: u, item: 'height' }),
          },
          children: t.jsxs('div', {
            className: o(
              'dgsuikit:flex dgsuikit:flex-col dgsuikit:bg-white dgsuikit:divide-y dgsuikit:divide-gray-200 dgsuikit:divide-solid',
              !h && 'dgsuikit:overflow-x-hidden',
              q({ position: e, padding: u }),
            ),
            style: { width: I ?? '100%' },
            onClick: (c) => c.stopPropagation(),
            children: [
              s &&
                P &&
                t.jsxs('div', {
                  className: o(
                    'dgsuikit:h-16 dgsuikit:relative dgsuikit:shrink-0',
                    s?.containerClassName,
                  ),
                  children: [
                    s.actionElement
                      ? t.jsx('div', {
                          className:
                            'dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:right-4 dgsuikit:[&>svg]:w-6 dgsuikit:[&_svg]:h-6 dgsuikit:text-gray-600',
                          children: s.actionElement,
                        })
                      : null,
                    s.title
                      ? t.jsxs('div', {
                          className:
                            'dgsuikit:flex dgsuikit:flex-col dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:right-1/2 dgsuikit:-translate-y-1/2 dgsuikit:translate-x-1/2 dgsuikit:text-center',
                          children: [
                            t.jsx('span', {
                              className: 'dgsuikit:font-h6-bold dgsuikit:text-gray-800',
                              children: s.title,
                            }),
                            s.description
                              ? t.jsx('span', {
                                  className: 'dgsuikit:font-caption-regular dgsuikit:text-gray-500',
                                  children: s.description,
                                })
                              : null,
                          ],
                        })
                      : null,
                    s.haveCloseIcon &&
                      t.jsx('button', {
                        onClick: () => f(),
                        className:
                          'dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:left-4',
                        children: t.jsx(_, {
                          width: 24,
                          height: 24,
                          className: 'dgsuikit:text-gray-600',
                        }),
                      }),
                  ],
                }),
              t.jsx('div', {
                className: o('dgsuikit:p-4', !h && 'dgsuikit:overflow-y-auto', j),
                children: w,
              }),
              l?.element
                ? t.jsx('div', {
                    className: o('dgsuikit:p-4 dgsuikit:mt-auto', l.containerClassName),
                    children: l.element,
                  })
                : null,
            ],
          }),
        }),
      }),
      x,
    );
  },
  S = 'dgsuikit:duration-300',
  O = 400,
  B = (a) => {
    const {
        dropdownType: r = 'popover',
        disabled: i,
        isLoading: p,
        wrapperClassName: e,
        customInput: w,
        children: b,
        drawerProps: y,
        inputProps: j,
        popoverClassName: u,
        popoverPosition: I,
      } = a,
      s = I ?? 'bottom-left',
      [l, m] = k.useState(!1),
      [h, d] = k.useState(!1),
      [g, x] = k.useState(s);
    let n;
    const { anchorRef: T, popperRef: f } = L({
        initialPosition: s,
        minVisible: 180,
        onPositionChange(C) {
          x((E) => (E === C ? E : C));
        },
      }),
      P = z(() => {
        r === 'popover' &&
          l &&
          (m(!1),
          n && clearTimeout(n),
          (n = setTimeout(() => {
            d(!1);
          }, O)));
      });
    function N() {
      if (i || p) return;
      const C = !h;
      n && clearTimeout(n),
        C
          ? (d(!0),
            (n = setTimeout(() => {
              m(!0);
            }, 0)))
          : (m(!1),
            (n = setTimeout(() => {
              d(!1);
            }, O)));
    }
    const c = o({
      'dgsuikit:!cursor-not-allowed': i,
      'dgsuikit:!cursor-wait': p,
      'dgsuikit:!cursor-pointer': !p && !i,
    });
    return t.jsxs('div', {
      ref: P,
      className: o('dgsuikit:relative', e),
      children: [
        t.jsx('button', {
          ref: T,
          type: 'button',
          className: o('dgsuikit:w-full', c),
          onClick: N,
          children: w
            ? w(l)
            : t.jsx(V, {
                leftIcon: p
                  ? t.jsx('div', { className: 'dot-flashing dgsuikit:mr-2' })
                  : t.jsx(M, {
                      width: 20,
                      height: 20,
                      className: o('dgsuikit:transition', S, { 'dgsuikit:rotate-180': l }),
                    }),
                containerClassName: o(c, { 'dgsuikit:items-baseline': p }),
                className: o('dgsuikit:caret-transparent', c),
                disabled: i,
                ...j,
              }),
        }),
        t.jsx($.Provider, {
          value: { toggleWrapperVisibility: N },
          children:
            h &&
            t.jsx(t.Fragment, {
              children:
                r === 'popover'
                  ? t.jsx('div', {
                      ref: f,
                      className: o(
                        'dgsuikit:absolute dgsuikit:min-w-[300px] dgsuikit:overflow-y-auto dgsuikit:overflow-x-hidden dgsuikit:shadow-lg dgsuikit:w-full dgsuikit:max-h-[360px] dgsuikit:transition-all dgsuikit:bg-white dgsuikit:z-50 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-solid dgsuikit:border-gray-200 dgsuikit:pb-3',
                        S,
                        l
                          ? 'dgsuikit:opacity-100'
                          : 'dgsuikit:opacity-0 dgsuikit:max-h-0 dgsuikit:overflow-y-hidden',
                        {
                          'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)]':
                            g.includes('bottom'),
                          'dgsuikit:top-0 dgsuikit:translate-y-[calc(-100%-8px)]':
                            g.includes('top'),
                        },
                        {
                          'dgsuikit:right-0': g.endsWith('left'),
                          'dgsuikit:left-0': g.endsWith('right'),
                          'dgsuikit:left-1/2 dgsuikit:-translate-x-1/2': g.endsWith('center'),
                        },
                        u,
                      ),
                      children: b,
                    })
                  : t.jsx(U, {
                      ...y,
                      open: l,
                      onClose: () => m(!1),
                      containerClassName: o('dgsuikit:!pb-3 dgsuikit:!px-0', y?.containerClassName),
                      children: b,
                    }),
            }),
        }),
      ],
    });
  };
B.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'PickerWrapper',
  props: {
    isLoading: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { U as D, B as P, it as u };
