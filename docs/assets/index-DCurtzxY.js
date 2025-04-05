'use client';
import { j as i } from './jsx-runtime-D_zvdyIk.js';
import { c as l } from './clsx-B-dksMZM.js';
import { r as f } from './index-DatCARk7.js';
/* empty css               */ import { r as I } from './index-JDkdBrmE.js';
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
  const u = 'dgs-ui-kit-rounded-2xl';
  if (a > 0 || s === 'center') return u;
  switch (s) {
    case 'bottom':
      return `${u} dgs-ui-kit-rounded-b-none`;
    case 'left':
      return `${u} dgs-ui-kit-rounded-l-none`;
    case 'right':
      return `${u} dgs-ui-kit-rounded-r-none`;
    case 'top':
      return `${u} dgs-ui-kit-rounded-t-none`;
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
          ? k.classList.add('dgs-ui-kit-overflow-hidden', 'dgs-ui-kit-relative')
          : k.classList.remove('dgs-ui-kit-overflow-hidden', 'dgs-ui-kit-relative');
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
        'dgs-ui-kit-bg-black/40 dgs-ui-kit-top-0 dgs-ui-kit-left-0 dgs-ui-kit-z-50 dgs-ui-kit-opacity-0 dgs-ui-kit-overflow-hidden dgs-ui-kit-cursor-default dgs-ui-kit-transition dgs-ui-kit-ease-linear',
        { 'dgs-ui-kit-opacity-100': o, 'dgs-ui-kit-w-full dgs-ui-kit-h-full': a },
        p ? 'dgs-ui-kit-absolute' : 'dgs-ui-kit-fixed',
        j,
      ),
      onClick: () => (y ? null : g()),
      children: i.jsx('div', {
        className: l(
          'dgs-ui-kit-absolute dgs-ui-kit-z-10 dgs-ui-kit-opacity-0 dgs-ui-kit-transition dgs-ui-kit-duration-100 dgs-ui-kit-flex dgs-ui-kit-justify-center',
          {
            'dgs-ui-kit-opacity-100': o,
            'dgs-ui-kit-translate-y-full': !o && t === 'bottom',
            '-dgs-ui-kit-translate-y-full': !o && t === 'top',
            'dgs-ui-kit-translate-x-full': !o && t === 'right',
            '-dgs-ui-kit-translate-x-full': !o && t === 'left',
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
            'dgs-ui-kit-overflow-x-hidden dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-bg-white dgs-ui-kit-divide-y dgs-ui-kit-divide-gray-200 dgs-ui-kit-divide-solid',
            O({ position: t, padding: d }),
          ),
          style: { width: D ?? '100%' },
          onClick: (r) => r.stopPropagation(),
          children: [
            e &&
              $ &&
              i.jsxs('div', {
                className: l(
                  'dgs-ui-kit-h-16 dgs-ui-kit-relative dgs-ui-kit-shrink-0',
                  e?.containerClassName,
                ),
                children: [
                  e.actionElement
                    ? i.jsx('div', {
                        className:
                          'dgs-ui-kit-absolute dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-right-4 [&>svg]:dgs-ui-kit-w-6 [&_svg]:dgs-ui-kit-h-6 dgs-ui-kit-text-gray-600',
                        children: e.actionElement,
                      })
                    : null,
                  e.title
                    ? i.jsxs('div', {
                        className:
                          'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-absolute dgs-ui-kit-top-1/2 dgs-ui-kit-right-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-translate-x-1/2 dgs-ui-kit-text-center',
                        children: [
                          i.jsx('span', {
                            className: 'dgs-ui-kit-font-h6-bold dgs-ui-kit-text-gray-800',
                            children: e.title,
                          }),
                          e.description
                            ? i.jsx('span', {
                                className:
                                  'dgs-ui-kit-font-caption-regular dgs-ui-kit-text-gray-500',
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
                        'dgs-ui-kit-absolute dgs-ui-kit-top-1/2 -dgs-ui-kit-translate-y-1/2 dgs-ui-kit-left-4',
                      children: i.jsx(R, {
                        width: 24,
                        height: 24,
                        className: 'dgs-ui-kit-text-gray-600',
                      }),
                    }),
                ],
              }),
            i.jsx('div', {
              className: l('dgs-ui-kit-p-4 dgs-ui-kit-overflow-y-auto', C),
              children: b,
            }),
            c?.element
              ? i.jsx('div', {
                  className: l('dgs-ui-kit-p-4 dgs-ui-kit-mt-auto', c.containerClassName),
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
