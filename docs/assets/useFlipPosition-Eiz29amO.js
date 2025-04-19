import { d as L } from './index-GdYbSsJO.js';
import { r as a } from './index-CTzypqlY.js';
function S(t) {
  return t.startsWith('top') ? t.replace('top', 'bottom') : t.replace('bottom', 'top');
}
function B(t) {
  return t.endsWith('left')
    ? t.replace('left', 'right')
    : t.endsWith('right')
      ? t.replace('right', 'left')
      : t;
}
function F(t, e) {
  return t.endsWith('center')
    ? e.left && !e.right
      ? t.replace('center', 'right')
      : e.right && !e.left
        ? t.replace('center', 'left')
        : t
    : t;
}
function T(t, e) {
  const r = RegExp(/matrix\(([^)]+)\)/).exec(t);
  if (!r) return `scale(${e})`;
  const n = r[1].split(',').map((f) => parseFloat(f.trim()));
  return n.length !== 6 ? `scale(${e})` : ((n[0] = e), (n[3] = e), `matrix(${n.join(', ')})`);
}
function $(t, e) {
  let r;
  switch (t) {
    case 'top-left':
    case 'bottom-left':
      r = e.left;
      break;
    case 'top-center':
    case 'bottom-center':
      r = e.left + e.width / 2;
      break;
    case 'top-right':
    case 'bottom-right':
      r = e.right;
      break;
    default:
      r = e.left + e.width / 2;
  }
  const n = t.startsWith('top') ? e.top : e.bottom;
  return { anchorX: r, anchorY: n };
}
function j(t, e, r, n) {
  let f = 0,
    l = 0;
  switch (t) {
    case 'top-left':
    case 'bottom-left':
      f = e;
      break;
    case 'top-center':
    case 'bottom-center':
      f = e - n.width / 2;
      break;
    case 'top-right':
    case 'bottom-right':
      f = e - n.width;
      break;
  }
  switch (t) {
    case 'top-left':
    case 'top-center':
    case 'top-right':
      l = r - n.height;
      break;
    case 'bottom-left':
    case 'bottom-center':
    case 'bottom-right':
      l = r;
      break;
  }
  return { top: l, left: f };
}
function A(t, e, r, n, f, l, c) {
  const u = t < l,
    g = t + r.height > f - l,
    m = e < l,
    p = e + r.width > n - l;
  if (c == null) return { top: u, bottom: g, left: m, right: p };
  const h = Math.min(r.bottom, f) - Math.max(t, 0),
    s = Math.min(r.right, n) - Math.max(e, 0),
    b =
      u && g
        ? h >= c
          ? { top: !1, bottom: !1 }
          : h < r.height / 2
            ? { top: !0, bottom: !1 }
            : { top: !1, bottom: !0 }
        : u
          ? { top: h < c, bottom: !1 }
          : g
            ? { top: !1, bottom: h < c }
            : { top: !1, bottom: !1 },
    o =
      m && p
        ? s >= c
          ? { left: !1, right: !1 }
          : s < r.width / 2
            ? { left: !0, right: !1 }
            : { left: !1, right: !0 }
        : m
          ? { left: s < c, right: !1 }
          : p
            ? { left: !1, right: s < c }
            : { left: !1, right: !1 };
  return { top: b.top, bottom: b.bottom, left: o.left, right: o.right };
}
function U({
  initialPosition: t,
  onPositionChange: e,
  padding: r = 8,
  debounceWait: n = 50,
  minVisible: f,
}) {
  const l = a.useRef(null),
    c = a.useRef(null),
    [u, g] = a.useState(t),
    m = a.useRef(t);
  a.useEffect(() => {
    m.current = t;
  }, [t]);
  const p = a.useRef(u);
  a.useEffect(() => {
    p.current = u;
  }, [u]);
  const h = a.useCallback(() => {
      const b = l.current,
        o = c.current;
      if (!b || !o) return;
      const d = m.current,
        P = b.getBoundingClientRect(),
        { anchorX: W, anchorY: E } = $(d, P),
        y = window.getComputedStyle(o),
        k = y.display !== 'none' && y.visibility !== 'hidden' && y.opacity !== '0';
      let v;
      if (k) v = o.getBoundingClientRect();
      else {
        const C = y.transform || 'none',
          H = T(C, 1);
        o.style.setProperty('opacity', '0', 'important'),
          o.style.setProperty('transform', H, 'important'),
          o.style.setProperty('visibility', 'hidden', 'important'),
          o.style.setProperty('position', 'absolute', 'important'),
          o.style.setProperty('transition', 'none', 'important'),
          o.offsetHeight,
          (v = o.getBoundingClientRect()),
          o.style.removeProperty('opacity'),
          o.style.removeProperty('transform'),
          o.style.removeProperty('visibility'),
          o.style.removeProperty('position'),
          o.style.removeProperty('transition');
      }
      const x = window.innerWidth,
        M = window.innerHeight,
        { top: O, left: z } = j(d, W, E, v),
        w = A(O, z, v, x, M, r, f);
      let i = d;
      ((d.startsWith('top') && w.top) || (d.startsWith('bottom') && w.bottom)) && (i = S(i)),
        ((i.endsWith('left') && w.left) || (i.endsWith('right') && w.right)) && (i = B(i)),
        i.endsWith('center') && (i = F(i, w)),
        i !== p.current && (g(i), e && e(i));
    }, [e, r]),
    s = a.useMemo(() => L(h, n), [h, n]);
  return (
    a.useEffect(
      () => (
        s(),
        window.addEventListener('resize', s),
        window.addEventListener('scroll', s),
        () => {
          window.removeEventListener('resize', s),
            window.removeEventListener('scroll', s),
            s.cancel();
        }
      ),
      [s],
    ),
    { anchorRef: l, popperRef: c, position: u }
  );
}
export { U as u };
