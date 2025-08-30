'use client';
import { j as t } from './jsx-runtime-D_zvdyIk.js';
import { c as a } from './clsx-B-dksMZM.js';
import { r as l } from './index-CTzypqlY.js';
/* empty css               */ import { r as A } from './index-BRSOB10J.js';
import { I as L } from './IconCloseRemove-B6m37iwz.js';
import { u as _ } from './useFlipPosition-D78LAv0q.js';
import { I as z } from './IconArrowDown2-BBhufJ55.js';
import { I as M } from './index-hrKH6_ny.js';
const $ = l.createContext({ toggleWrapperVisibility: () => {} }),
  tt = () => l.useContext($),
  E = 150;
let v = 0,
  D;
function S({ position: s, padding: e = 0, item: i }) {
  return s === 'center'
    ? 'auto'
    : i === 'width'
      ? s === 'bottom' || s === 'top'
        ? `calc(100% - ${e * 2}px)`
        : 'auto'
      : s === 'bottom' || s === 'top'
        ? 'auto'
        : `calc(100% - ${e * 2}px)`;
}
function V({ position: s, padding: e = 0 }) {
  const i = 'dgsuikit:rounded-2xl';
  if (e > 0 || s === 'center') return i;
  switch (s) {
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
const q = (s) => {
    const {
        open: e,
        onClose: i,
        persist: c,
        position: o = 'bottom',
        children: w,
        className: b,
        maskClassName: y,
        containerClassName: j,
        padding: n = 8,
        width: I,
        header: r,
        footer: g,
        containerElement: p,
        havePopover: f,
      } = s,
      [u, h] = l.useState(!1),
      x = p ?? document?.body;
    function d() {
      D && clearTimeout(D),
        (D = setTimeout(() => {
          v > 0
            ? x.classList.add('dgsuikit:overflow-hidden', 'dgsuikit:relative')
            : x.classList.remove('dgsuikit:overflow-hidden', 'dgsuikit:relative');
        }, E));
    }
    function T() {
      v === 0 && d(),
        v++,
        setTimeout(() => {
          h(!0);
        }, E);
    }
    function m(k = !0) {
      h(!1),
        setTimeout(() => {
          (v = Math.max(0, v - 1)), d(), k && i();
        }, E);
    }
    if (
      (l.useEffect(() => {
        e ? T() : u && m(!1);
      }, [e]),
      l.useEffect(
        () => () => {
          m(!1);
        },
        [],
      ),
      !e)
    )
      return;
    const P = r ? Object.values(r).some((k) => !!k) : !1,
      N =
        o === 'center'
          ? { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
          : {
              top: o !== 'bottom' ? (n ?? 0) : 'unset',
              bottom: o !== 'top' ? (n ?? 0) : 'unset',
              left: o !== 'right' ? (n ?? 0) : 'unset',
              right: o !== 'left' ? (n ?? 0) : 'unset',
            };
    return A.createPortal(
      t.jsx('div', {
        className: a(
          'dgsuikit:bg-black/40 dgsuikit:top-0 dgsuikit:left-0 dgsuikit:z-50 dgsuikit:opacity-0 dgsuikit:overflow-hidden dgsuikit:cursor-default dgsuikit:transition dgsuikit:ease-linear',
          { 'dgsuikit:opacity-100': u, 'dgsuikit:w-full dgsuikit:h-full': e },
          p ? 'dgsuikit:absolute' : 'dgsuikit:fixed',
          y,
        ),
        onClick: () => (c ? null : m()),
        children: t.jsx('div', {
          className: a(
            'dgsuikit:absolute dgsuikit:z-10 dgsuikit:opacity-0 dgsuikit:transition dgsuikit:duration-100 dgsuikit:flex dgsuikit:justify-center',
            {
              'dgsuikit:opacity-100': u,
              'dgsuikit:translate-y-full': !u && o === 'bottom',
              'dgsuikit:-translate-y-full': !u && o === 'top',
              'dgsuikit:translate-x-full': !u && o === 'right',
              'dgsuikit:-translate-x-full': !u && o === 'left',
            },
            b,
          ),
          style: {
            ...N,
            maxHeight: `calc(100svh - ${n * 2}px)`,
            maxWidth: `calc(100vw - ${n * 2}px)`,
            width: S({ position: o, padding: n, item: 'width' }),
            height: S({ position: o, padding: n, item: 'height' }),
          },
          children: t.jsxs('div', {
            className: a(
              'dgsuikit:flex dgsuikit:flex-col dgsuikit:bg-white dgsuikit:divide-y dgsuikit:divide-gray-200 dgsuikit:divide-solid',
              !f && 'dgsuikit:overflow-x-hidden',
              V({ position: o, padding: n }),
            ),
            style: { width: I ?? '100%' },
            onClick: (k) => k.stopPropagation(),
            children: [
              r &&
                P &&
                t.jsxs('div', {
                  className: a(
                    'dgsuikit:h-16 dgsuikit:relative dgsuikit:shrink-0',
                    r?.containerClassName,
                  ),
                  children: [
                    r.actionElement
                      ? t.jsx('div', {
                          className:
                            'dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:right-4 dgsuikit:[&>svg]:w-6 dgsuikit:[&_svg]:h-6 dgsuikit:text-gray-600',
                          children: r.actionElement,
                        })
                      : null,
                    r.title
                      ? t.jsxs('div', {
                          className:
                            'dgsuikit:flex dgsuikit:flex-col dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:right-1/2 dgsuikit:-translate-y-1/2 dgsuikit:translate-x-1/2 dgsuikit:text-center',
                          children: [
                            t.jsx('span', {
                              className: 'dgsuikit:font-h6-bold dgsuikit:text-gray-800',
                              children: r.title,
                            }),
                            r.description
                              ? t.jsx('span', {
                                  className: 'dgsuikit:font-caption-regular dgsuikit:text-gray-500',
                                  children: r.description,
                                })
                              : null,
                          ],
                        })
                      : null,
                    r.haveCloseIcon &&
                      t.jsx('button', {
                        onClick: () => m(),
                        className:
                          'dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:left-4',
                        children: t.jsx(L, {
                          width: 24,
                          height: 24,
                          className: 'dgsuikit:text-gray-600',
                        }),
                      }),
                  ],
                }),
              t.jsx('div', {
                className: a('dgsuikit:p-4', !f && 'dgsuikit:overflow-y-auto', j),
                children: w,
              }),
              g?.element
                ? t.jsx('div', {
                    className: a('dgsuikit:p-4 dgsuikit:mt-auto', g.containerClassName),
                    children: g.element,
                  })
                : null,
            ],
          }),
        }),
      }),
      x,
    );
  },
  U = (s) => {
    const e = l.useRef(null);
    return (
      l.useEffect(() => {
        const i = (c) => {
          e.current && !e.current.contains(c.target) && s();
        };
        return (
          document.addEventListener('click', i, !0),
          () => {
            document.removeEventListener('click', i, !0);
          }
        );
      }, [e, s]),
      e
    );
  },
  W = 'dgsuikit:duration-300',
  O = 400,
  B = (s) => {
    const {
        dropdownType: e = 'popover',
        disabled: i,
        isLoading: c,
        wrapperClassName: o,
        customInput: w,
        children: b,
        drawerProps: y,
        inputProps: j,
        popoverClassName: n,
        popoverPosition: I,
      } = s,
      r = I === 'top' ? 'top-left' : 'bottom-left',
      [g, p] = l.useState(!1),
      [f, u] = l.useState(!1),
      [h, x] = l.useState(r);
    let d;
    const { anchorRef: T, popperRef: m } = _({
        initialPosition: r,
        minVisible: 180,
        onPositionChange(C) {
          x((R) => (R === C ? R : C));
        },
      }),
      P = U(() => {
        e === 'popover' &&
          g &&
          (p(!1),
          d && clearTimeout(d),
          (d = setTimeout(() => {
            u(!1);
          }, O)));
      });
    function N() {
      if (i || c) return;
      const C = !f;
      d && clearTimeout(d),
        C
          ? (u(!0),
            (d = setTimeout(() => {
              p(!0);
            }, 0)))
          : (p(!1),
            (d = setTimeout(() => {
              u(!1);
            }, O)));
    }
    const k = a({
      'dgsuikit:!cursor-not-allowed': i,
      'dgsuikit:!cursor-wait': c,
      'dgsuikit:!cursor-pointer': !c && !i,
    });
    return t.jsxs('div', {
      ref: P,
      className: a('dgsuikit:relative', o),
      children: [
        t.jsx('button', {
          ref: T,
          type: 'button',
          className: a('dgsuikit:w-full', k),
          onClick: N,
          children: w
            ? w(g)
            : t.jsx(M, {
                leftIcon: c
                  ? t.jsx('div', { className: 'dot-flashing dgsuikit:mr-2' })
                  : t.jsx(z, {
                      width: 20,
                      height: 20,
                      className: a('dgsuikit:transition', W, { 'dgsuikit:rotate-180': g }),
                    }),
                containerClassName: a(k, { 'dgsuikit:items-baseline': c }),
                className: a('dgsuikit:caret-transparent', k),
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
                e === 'popover'
                  ? t.jsx('div', {
                      ref: m,
                      className: a(
                        'dgsuikit:absolute dgsuikit:min-w-[300px] dgsuikit:right-0 dgsuikit:overflow-y-auto dgsuikit:overflow-x-hidden dgsuikit:shadow-lg dgsuikit:w-full dgsuikit:max-h-[360px] dgsuikit:transition-all dgsuikit:bg-white dgsuikit:z-50 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-solid dgsuikit:border-gray-200 dgsuikit:pb-3',
                        W,
                        g
                          ? 'dgsuikit:opacity-100'
                          : 'dgsuikit:opacity-0 dgsuikit:max-h-0 dgsuikit:overflow-y-hidden',
                        {
                          'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)]':
                            h.includes('bottom'),
                          'dgsuikit:top-0 dgsuikit:translate-y-[calc(-100%-8px)]':
                            h.includes('top'),
                        },
                        n,
                      ),
                      children: b,
                    })
                  : t.jsx(q, {
                      ...y,
                      open: g,
                      onClose: () => p(!1),
                      containerClassName: a('dgsuikit:!pb-3 dgsuikit:!px-0', y?.containerClassName),
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
export { q as D, B as P, tt as u };
