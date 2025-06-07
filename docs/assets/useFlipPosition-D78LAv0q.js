import { d as z } from './index-GdYbSsJO.js';
import { r as m } from './index-CTzypqlY.js';
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
function B(t, e) {
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
function F(t, e, r, n) {
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
function T(t, e, r, n, s, f, c) {
  const h = t < f,
    p = t + r.height > s - f,
    u = e < f,
    l = e + r.width > n - f;
  if (!c) return { top: h, bottom: p, left: u, right: l };
  const i = Math.min(r.bottom, s) - Math.max(t, 0),
    o = Math.min(r.right, n) - Math.max(e, 0),
    b =
      h && p
        ? i >= c
          ? { top: !1, bottom: !1 }
          : i < r.height / 2
            ? { top: !0, bottom: !1 }
            : { top: !1, bottom: !0 }
        : h
          ? { top: i < c, bottom: !1 }
          : p
            ? { top: !1, bottom: i < c }
            : { top: !1, bottom: !1 },
    d =
      u && l
        ? o >= c
          ? { left: !1, right: !1 }
          : o < r.width / 2
            ? { left: !0, right: !1 }
            : { left: !1, right: !0 }
        : u
          ? { left: o < c, right: !1 }
          : l
            ? { left: !1, right: o < c }
            : { left: !1, right: !1 };
  return { top: b.top, bottom: b.bottom, left: d.left, right: d.right };
}
function A({
  initialPosition: t,
  onPositionChange: e,
  padding: r = 8,
  debounceWait: n = 50,
  minVisible: s,
}) {
  const f = m.useRef(null),
    c = m.useRef(null),
    [h, p] = m.useState(t),
    u = m.useCallback(() => {
      const i = f.current,
        o = c.current;
      if (!i || !o) return;
      const b = i.getBoundingClientRect(),
        { anchorX: d, anchorY: v } = B(t, b),
        y = window.getComputedStyle(o),
        W = y.display !== 'none' && y.visibility !== 'hidden' && y.opacity !== '0';
      let w;
      if (W) w = o.getBoundingClientRect();
      else {
        const M = y.transform || 'none',
          O = S(M, 1);
        o.style.setProperty('opacity', '0', 'important'),
          o.style.setProperty('transform', O, 'important'),
          o.style.setProperty('visibility', 'hidden', 'important'),
          o.style.setProperty('position', 'absolute', 'important'),
          o.style.setProperty('transition', 'none', 'important'),
          o.offsetHeight,
          (w = o.getBoundingClientRect()),
          o.style.removeProperty('opacity'),
          o.style.removeProperty('transform'),
          o.style.removeProperty('visibility'),
          o.style.removeProperty('position'),
          o.style.removeProperty('transition');
      }
      const k = window.innerWidth,
        x = window.innerHeight,
        { top: E, left: P } = F(t, d, v, w),
        g = T(E, P, w, k, x, r, s);
      let a = t;
      ((t.startsWith('top') && g.top) || (t.startsWith('bottom') && g.bottom)) && (a = C(a)),
        ((t.endsWith('left') && g.left) || (t.endsWith('right') && g.right)) && (a = H(a)),
        a.endsWith('center') && (a = L(a, g)),
        a !== h && (p(a), e && e(a));
    }, [e, r]),
    l = m.useMemo(() => z(u, n), [u, n]);
  return (
    m.useEffect(
      () => (
        l(),
        window.addEventListener('resize', l),
        window.addEventListener('scroll', l),
        () => {
          window.removeEventListener('resize', l),
            window.removeEventListener('scroll', l),
            l.cancel();
        }
      ),
      [l],
    ),
    { anchorRef: f, popperRef: c, position: h }
  );
}
export { A as u };
