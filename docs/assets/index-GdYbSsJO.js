import { c as g, g as V } from './index-CTzypqlY.js';
var h, L;
function Y() {
  if (L) return h;
  L = 1;
  var _ = 'Expected a function',
    x = NaN,
    C = '[object Symbol]',
    F = /^\s+|\s+$/g,
    M = /^[-+]0x[0-9a-f]+$/i,
    N = /^0b[01]+$/i,
    R = /^0o[0-7]+$/i,
    W = parseInt,
    $ = typeof g == 'object' && g && g.Object === Object && g,
    A = typeof self == 'object' && self && self.Object === Object && self,
    B = $ || A || Function('return this')(),
    q = Object.prototype,
    D = q.toString,
    G = Math.max,
    P = Math.min,
    y = function () {
      return B.Date.now();
    };
  function H(e, t, i) {
    var a,
      u,
      b,
      c,
      r,
      f,
      s = 0,
      O = !1,
      d = !1,
      j = !0;
    if (typeof e != 'function') throw new TypeError(_);
    (t = I(t) || 0),
      p(i) &&
        ((O = !!i.leading),
        (d = 'maxWait' in i),
        (b = d ? G(I(i.maxWait) || 0, t) : b),
        (j = 'trailing' in i ? !!i.trailing : j));
    function v(n) {
      var o = a,
        m = u;
      return (a = u = void 0), (s = n), (c = e.apply(m, o)), c;
    }
    function z(n) {
      return (s = n), (r = setTimeout(l, t)), O ? v(n) : c;
    }
    function J(n) {
      var o = n - f,
        m = n - s,
        k = t - o;
      return d ? P(k, b - m) : k;
    }
    function E(n) {
      var o = n - f,
        m = n - s;
      return f === void 0 || o >= t || o < 0 || (d && m >= b);
    }
    function l() {
      var n = y();
      if (E(n)) return S(n);
      r = setTimeout(l, J(n));
    }
    function S(n) {
      return (r = void 0), j && a ? v(n) : ((a = u = void 0), c);
    }
    function K() {
      r !== void 0 && clearTimeout(r), (s = 0), (a = f = u = r = void 0);
    }
    function Q() {
      return r === void 0 ? c : S(y());
    }
    function T() {
      var n = y(),
        o = E(n);
      if (((a = arguments), (u = this), (f = n), o)) {
        if (r === void 0) return z(f);
        if (d) return (r = setTimeout(l, t)), v(f);
      }
      return r === void 0 && (r = setTimeout(l, t)), c;
    }
    return (T.cancel = K), (T.flush = Q), T;
  }
  function p(e) {
    var t = typeof e;
    return !!e && (t == 'object' || t == 'function');
  }
  function U(e) {
    return !!e && typeof e == 'object';
  }
  function X(e) {
    return typeof e == 'symbol' || (U(e) && D.call(e) == C);
  }
  function I(e) {
    if (typeof e == 'number') return e;
    if (X(e)) return x;
    if (p(e)) {
      var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
      e = p(t) ? t + '' : t;
    }
    if (typeof e != 'string') return e === 0 ? e : +e;
    e = e.replace(F, '');
    var i = N.test(e);
    return i || R.test(e) ? W(e.slice(2), i ? 2 : 8) : M.test(e) ? x : +e;
  }
  return (h = H), h;
}
var Z = Y();
const ee = V(Z);
export { ee as d };
