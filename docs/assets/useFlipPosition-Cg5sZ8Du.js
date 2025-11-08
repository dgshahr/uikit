import { d as B } from './index-GdYbSsJO.js';
import { r as m } from './index-CTzypqlY.js';
import { i as v } from './isBrowser-CEYOmsdG.js';
function C(t) {
  return t.startsWith('top') ? t.replace('top', 'bottom') : t.replace('bottom', 'top');
}
function H(t) {
  return t.endsWith('left')
    ? t.replace('left', 'right')
    : t.endsWith('right')
      ? t.replace('right', 'left')
      : t;
}
function L(t, e) {
  return t.endsWith('center')
    ? e.left && !e.right
      ? t.replace('center', 'right')
      : e.right && !e.left
        ? t.replace('center', 'left')
        : t
    : t;
}
function S(t, e) {
  const r = RegExp(/matrix\(([^)]+)\)/).exec(t);
  if (!r) return `scale(${e})`;
  const n = r[1].split(',').map((s) => parseFloat(s.trim()));
  return n.length !== 6 ? `scale(${e})` : ((n[0] = e), (n[3] = e), `matrix(${n.join(', ')})`);
}
function F(t, e) {
  let r;
  switch (t) {
    case 'top-left':
    case 'bottom-left':
      r = e.left;
      break;
    case 'top-right':
    case 'bottom-right':
      r = e.right;
      break;
    case 'top-center':
    case 'bottom-center':
    default:
      r = e.left + e.width / 2;
      break;
  }
  const n = t.startsWith('top') ? e.top : e.bottom;
  return { anchorX: r, anchorY: n };
}
function T(t, e, r, n) {
  let s = 0,
    f = 0;
  switch (t) {
    case 'top-left':
    case 'bottom-left':
      s = e;
      break;
    case 'top-center':
    case 'bottom-center':
      s = e - n.width / 2;
      break;
    case 'top-right':
    case 'bottom-right':
      s = e - n.width;
      break;
  }
  switch (t) {
    case 'top-left':
    case 'top-center':
    case 'top-right':
      f = r - n.height;
      break;
    case 'bottom-left':
    case 'bottom-center':
    case 'bottom-right':
      f = r;
      break;
  }
  return { top: f, left: s };
}
function $(t, e, r, n, s, f, i) {
  const u = t < f,
    p = t + r.height > s - f,
    h = e < f,
    l = e + r.width > n - f;
  if (!i) return { top: u, bottom: p, left: h, right: l };
  const c = Math.min(r.bottom, s) - Math.max(t, 0),
    o = Math.min(r.right, n) - Math.max(e, 0),
    b =
      u && p
        ? c >= i
          ? { top: !1, bottom: !1 }
          : c < r.height / 2
            ? { top: !0, bottom: !1 }
            : { top: !1, bottom: !0 }
        : u
          ? { top: c < i, bottom: !1 }
          : p
            ? { top: !1, bottom: c < i }
            : { top: !1, bottom: !1 },
    d =
      h && l
        ? o >= i
          ? { left: !1, right: !1 }
          : o < r.width / 2
            ? { left: !0, right: !1 }
            : { left: !1, right: !0 }
        : h
          ? { left: o < i, right: !1 }
          : l
            ? { left: !1, right: o < i }
            : { left: !1, right: !1 };
  return { top: b.top, bottom: b.bottom, left: d.left, right: d.right };
}
function U({
  initialPosition: t,
  onPositionChange: e,
  padding: r = 8,
  debounceWait: n = 50,
  minVisible: s,
}) {
  const f = m.useRef(null),
    i = m.useRef(null),
    [u, p] = m.useState(t),
    h = m.useCallback(() => {
      if (!v()) return;
      const c = f.current,
        o = i.current;
      if (!c || !o) return;
      const b = c.getBoundingClientRect(),
        { anchorX: d, anchorY: W } = F(t, b),
        w = window?.getComputedStyle(o),
        k = w.display !== 'none' && w.visibility !== 'hidden' && w.opacity !== '0';
      let y;
      if (k) y = o.getBoundingClientRect();
      else {
        const O = w.transform || 'none',
          z = S(O, 1);
        o.style.setProperty('opacity', '0', 'important'),
          o.style.setProperty('transform', z, 'important'),
          o.style.setProperty('visibility', 'hidden', 'important'),
          o.style.setProperty('position', 'absolute', 'important'),
          o.style.setProperty('transition', 'none', 'important'),
          o.offsetHeight,
          (y = o.getBoundingClientRect()),
          o.style.removeProperty('opacity'),
          o.style.removeProperty('transform'),
          o.style.removeProperty('visibility'),
          o.style.removeProperty('position'),
          o.style.removeProperty('transition');
      }
      const x = window?.innerWidth,
        E = window?.innerHeight,
        { top: P, left: M } = T(t, d, W, y),
        g = $(P, M, y, x, E, r, s);
      let a = t;
      ((t.startsWith('top') && g.top) || (t.startsWith('bottom') && g.bottom)) && (a = C(a)),
        ((t.endsWith('left') && g.left) || (t.endsWith('right') && g.right)) && (a = H(a)),
        a.endsWith('center') && (a = L(a, g)),
        a !== u && (p(a), e && e(a));
    }, [e, r]),
    l = m.useMemo(() => B(h, n), [h, n]);
  return (
    m.useEffect(() => {
      if (v())
        return (
          l(),
          window?.addEventListener('resize', l),
          window?.addEventListener('scroll', l),
          () => {
            window?.removeEventListener('resize', l),
              window?.removeEventListener('scroll', l),
              l.cancel();
          }
        );
    }, [l]),
    { anchorRef: f, popperRef: i, position: u }
  );
}
export { U as u };
