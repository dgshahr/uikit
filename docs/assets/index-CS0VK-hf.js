'use client';
import { j as i } from './jsx-runtime-D_zvdyIk.js';
import { c as l } from './clsx-B-dksMZM.js';
import { r as f } from './index-CTzypqlY.js';
/* empty css               */ import { r as I } from './index-BRSOB10J.js';
import { I as R } from './IconCloseRemove-B6m37iwz.js';
const m = 150;
let n = 0,
  h;
function w({ position: s, padding: a = 0, item: u }) {
  return s === 'center'
    ? 'auto'
    : u === 'width'
      ? s === 'bottom' || s === 'top'
        ? `calc(100% - ${a * 2}px)`
        : 'auto'
      : s === 'bottom' || s === 'top'
        ? 'auto'
        : `calc(100% - ${a * 2}px)`;
}
function O({ position: s, padding: a = 0 }) {
  const u = 'dgsuikit:rounded-2xl';
  if (a > 0 || s === 'center') return u;
  switch (s) {
    case 'bottom':
      return `${u} dgsuikit:rounded-b-none`;
    case 'left':
      return `${u} dgsuikit:rounded-l-none`;
    case 'right':
      return `${u} dgsuikit:rounded-r-none`;
    case 'top':
      return `${u} dgsuikit:rounded-t-none`;
    default:
      return u;
  }
}
const L = (s) => {
  const {
      open: a,
      onClose: u,
      persist: y,
      position: t = 'bottom',
      children: b,
      className: N,
      maskClassName: j,
      containerClassName: C,
      padding: d = 8,
      width: D,
      header: e,
      footer: c,
      containerElement: p,
    } = s,
    [o, x] = f.useState(!1),
    k = p ?? document?.body;
  function v() {
    h && clearTimeout(h),
      (h = setTimeout(() => {
        n > 0
          ? k.classList.add('dgsuikit:overflow-hidden', 'dgsuikit:relative')
          : k.classList.remove('dgsuikit:overflow-hidden', 'dgsuikit:relative');
      }, m));
  }
  function E() {
    n === 0 && v(),
      n++,
      setTimeout(() => {
        x(!0);
      }, m);
  }
  function g(r = !0) {
    x(!1),
      setTimeout(() => {
        (n = Math.max(0, n - 1)), v(), r && u();
      }, m);
  }
  if (
    (f.useEffect(() => {
      a ? E() : o && g(!1);
    }, [a]),
    f.useEffect(
      () => () => {
        g(!1);
      },
      [],
    ),
    !a)
  )
    return;
  const $ = e ? Object.values(e).some((r) => !!r) : !1,
    T =
      t === 'center'
        ? { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
        : {
            top: t !== 'bottom' ? (d ?? 0) : 'unset',
            bottom: t !== 'top' ? (d ?? 0) : 'unset',
            left: t !== 'right' ? (d ?? 0) : 'unset',
            right: t !== 'left' ? (d ?? 0) : 'unset',
          };
  return I.createPortal(
    i.jsx('div', {
      className: l(
        'dgsuikit:bg-black/40 dgsuikit:top-0 dgsuikit:left-0 dgsuikit:z-50 dgsuikit:opacity-0 dgsuikit:overflow-hidden dgsuikit:cursor-default dgsuikit:transition dgsuikit:ease-linear',
        { 'dgsuikit:opacity-100': o, 'dgsuikit:w-full dgsuikit:h-full': a },
        p ? 'dgsuikit:absolute' : 'dgsuikit:fixed',
        j,
      ),
      onClick: () => (y ? null : g()),
      children: i.jsx('div', {
        className: l(
          'dgsuikit:absolute dgsuikit:z-10 dgsuikit:opacity-0 dgsuikit:transition dgsuikit:duration-100 dgsuikit:flex dgsuikit:justify-center',
          {
            'dgsuikit:opacity-100': o,
            'dgsuikit:translate-y-full': !o && t === 'bottom',
            'dgsuikit:-translate-y-full': !o && t === 'top',
            'dgsuikit:translate-x-full': !o && t === 'right',
            'dgsuikit:-translate-x-full': !o && t === 'left',
          },
          N,
        ),
        style: {
          ...T,
          maxHeight: `calc(100svh - ${d * 2}px)`,
          maxWidth: `calc(100vw - ${d * 2}px)`,
          width: w({ position: t, padding: d, item: 'width' }),
          height: w({ position: t, padding: d, item: 'height' }),
        },
        children: i.jsxs('div', {
          className: l(
            'dgsuikit:overflow-x-hidden dgsuikit:flex dgsuikit:flex-col dgsuikit:bg-white dgsuikit:divide-y dgsuikit:divide-gray-200 dgsuikit:divide-solid',
            O({ position: t, padding: d }),
          ),
          style: { width: D ?? '100%' },
          onClick: (r) => r.stopPropagation(),
          children: [
            e &&
              $ &&
              i.jsxs('div', {
                className: l(
                  'dgsuikit:h-16 dgsuikit:relative dgsuikit:shrink-0',
                  e?.containerClassName,
                ),
                children: [
                  e.actionElement
                    ? i.jsx('div', {
                        className:
                          'dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:right-4 dgsuikit:[&>svg]:w-6 dgsuikit:[&_svg]:h-6 dgsuikit:text-gray-600',
                        children: e.actionElement,
                      })
                    : null,
                  e.title
                    ? i.jsxs('div', {
                        className:
                          'dgsuikit:flex dgsuikit:flex-col dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:right-1/2 dgsuikit:-translate-y-1/2 dgsuikit:translate-x-1/2 dgsuikit:text-center',
                        children: [
                          i.jsx('span', {
                            className: 'dgsuikit:font-h6-bold dgsuikit:text-gray-800',
                            children: e.title,
                          }),
                          e.description
                            ? i.jsx('span', {
                                className: 'dgsuikit:font-caption-regular dgsuikit:text-gray-500',
                                children: e.description,
                              })
                            : null,
                        ],
                      })
                    : null,
                  e.haveCloseIcon &&
                    i.jsx('button', {
                      onClick: () => g(),
                      className:
                        'dgsuikit:absolute dgsuikit:top-1/2 dgsuikit:-translate-y-1/2 dgsuikit:left-4',
                      children: i.jsx(R, {
                        width: 24,
                        height: 24,
                        className: 'dgsuikit:text-gray-600',
                      }),
                    }),
                ],
              }),
            i.jsx('div', { className: l('dgsuikit:p-4 dgsuikit:overflow-y-auto', C), children: b }),
            c?.element
              ? i.jsx('div', {
                  className: l('dgsuikit:p-4 dgsuikit:mt-auto', c.containerClassName),
                  children: c.element,
                })
              : null,
          ],
        }),
      }),
    }),
    k,
  );
};
export { L as D };
