'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as o } from './clsx-B-dksMZM.js';
import { r as g } from './index-CTzypqlY.js';
/* empty css               */ import { r as A } from './index-BRSOB10J.js';
import { I as _ } from './IconCloseRemove-B6m37iwz.js';
import { u as L } from './useFlipPosition-D78LAv0q.js';
import { u as z } from './useOutsideClick-OW2A_t1-.js';
import { I as M } from './IconArrowDown2-BBhufJ55.js';
import { I as V } from './index-BVG3gmue.js';
const $ = g.createContext({ toggleWrapperVisibility: () => {} }),
  it = () => g.useContext($),
  D = 150;
let v = 0,
  E;
function S({ position: a, padding: r = 0, item: i }) {
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
        persist: k,
        position: e = 'bottom',
        children: w,
        className: b,
        maskClassName: y,
        containerClassName: j,
        padding: u = 8,
        width: I,
        header: s,
        footer: l,
        containerElement: p,
        havePopover: f,
      } = a,
      [d, h] = g.useState(!1),
      x = p ?? document?.body;
    function n() {
      E && clearTimeout(E),
        (E = setTimeout(() => {
          v > 0
            ? x.classList.add('dgsuikit:overflow-hidden', 'dgsuikit:relative')
            : x.classList.remove('dgsuikit:overflow-hidden', 'dgsuikit:relative');
        }, D));
    }
    function T() {
      v === 0 && n(),
        v++,
        setTimeout(() => {
          h(!0);
        }, D);
    }
    function m(c = !0) {
      h(!1),
        setTimeout(() => {
          (v = Math.max(0, v - 1)), n(), c && i();
        }, D);
    }
    if (
      (g.useEffect(() => {
        r ? T() : d && m(!1);
      }, [r]),
      g.useEffect(
        () => () => {
          m(!1);
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
          p ? 'dgsuikit:absolute' : 'dgsuikit:fixed',
          y,
        ),
        onClick: () => (k ? null : m()),
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
            width: S({ position: e, padding: u, item: 'width' }),
            height: S({ position: e, padding: u, item: 'height' }),
          },
          children: t.jsxs('div', {
            className: o(
              'dgsuikit:flex dgsuikit:flex-col dgsuikit:bg-white dgsuikit:divide-y dgsuikit:divide-gray-200 dgsuikit:divide-solid',
              !f && 'dgsuikit:overflow-x-hidden',
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
                        onClick: () => m(),
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
                className: o('dgsuikit:p-4', !f && 'dgsuikit:overflow-y-auto', j),
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
  W = 'dgsuikit:duration-300',
  O = 400,
  B = (a) => {
    const {
        dropdownType: r = 'popover',
        disabled: i,
        isLoading: k,
        wrapperClassName: e,
        customInput: w,
        children: b,
        drawerProps: y,
        inputProps: j,
        popoverClassName: u,
        popoverPosition: I,
      } = a,
      s = I === 'top' ? 'top-left' : 'bottom-left',
      [l, p] = g.useState(!1),
      [f, d] = g.useState(!1),
      [h, x] = g.useState(s);
    let n;
    const { anchorRef: T, popperRef: m } = L({
        initialPosition: s,
        minVisible: 180,
        onPositionChange(C) {
          x((R) => (R === C ? R : C));
        },
      }),
      P = z(() => {
        r === 'popover' &&
          l &&
          (p(!1),
          n && clearTimeout(n),
          (n = setTimeout(() => {
            d(!1);
          }, O)));
      });
    function N() {
      if (i || k) return;
      const C = !f;
      n && clearTimeout(n),
        C
          ? (d(!0),
            (n = setTimeout(() => {
              p(!0);
            }, 0)))
          : (p(!1),
            (n = setTimeout(() => {
              d(!1);
            }, O)));
    }
    const c = o({
      'dgsuikit:!cursor-not-allowed': i,
      'dgsuikit:!cursor-wait': k,
      'dgsuikit:!cursor-pointer': !k && !i,
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
                leftIcon: k
                  ? t.jsx('div', { className: 'dot-flashing dgsuikit:mr-2' })
                  : t.jsx(M, {
                      width: 20,
                      height: 20,
                      className: o('dgsuikit:transition', W, { 'dgsuikit:rotate-180': l }),
                    }),
                containerClassName: o(c, { 'dgsuikit:items-baseline': k }),
                className: o('dgsuikit:caret-transparent', c),
                disabled: i,
                ...j,
              }),
        }),
        t.jsx($.Provider, {
          value: { toggleWrapperVisibility: N },
          children:
            f &&
            t.jsx(t.Fragment, {
              children:
                r === 'popover'
                  ? t.jsx('div', {
                      ref: m,
                      className: o(
                        'dgsuikit:absolute dgsuikit:min-w-[300px] dgsuikit:right-0 dgsuikit:overflow-y-auto dgsuikit:overflow-x-hidden dgsuikit:shadow-lg dgsuikit:w-full dgsuikit:max-h-[360px] dgsuikit:transition-all dgsuikit:bg-white dgsuikit:z-50 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-solid dgsuikit:border-gray-200 dgsuikit:pb-3',
                        W,
                        l
                          ? 'dgsuikit:opacity-100'
                          : 'dgsuikit:opacity-0 dgsuikit:max-h-0 dgsuikit:overflow-y-hidden',
                        {
                          'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)]':
                            h.includes('bottom'),
                          'dgsuikit:top-0 dgsuikit:translate-y-[calc(-100%-8px)]':
                            h.includes('top'),
                        },
                        u,
                      ),
                      children: b,
                    })
                  : t.jsx(U, {
                      ...y,
                      open: l,
                      onClose: () => p(!1),
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
