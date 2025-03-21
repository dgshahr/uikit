const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['./react-18-CJwW9gwZ.js', './index-RYns6xqu.js', './index-DYmNCwer.js']),
) => i.map((i) => d[i]);
import { _ as bt } from './iframe-BN7BdcuL.js';
import { _ as Ut } from './chunk-H6MOWX77-DTQOW814.js';
import { g as Ft, r as F, R as K } from './index-RYns6xqu.js';
import { r as kt } from './index-DYmNCwer.js';
import '../sb-preview/runtime.js';
var Oe = { exports: {} };
const Gt = '2.0.0',
  ct = 256,
  Mt = Number.MAX_SAFE_INTEGER || 9007199254740991,
  jt = 16,
  Xt = ct - 6,
  xt = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
var ie = {
    MAX_LENGTH: ct,
    MAX_SAFE_COMPONENT_LENGTH: jt,
    MAX_SAFE_BUILD_LENGTH: Xt,
    MAX_SAFE_INTEGER: Mt,
    RELEASE_TYPES: xt,
    SEMVER_SPEC_VERSION: Gt,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2,
  },
  Ee = {};
const Vt =
  typeof process == 'object' && Ee && Ee.NODE_DEBUG && /\bsemver\b/i.test(Ee.NODE_DEBUG)
    ? (...e) => console.error('SEMVER', ...e)
    : () => {};
var oe = Vt;
(function (e, t) {
  const { MAX_SAFE_COMPONENT_LENGTH: r, MAX_SAFE_BUILD_LENGTH: n, MAX_LENGTH: o } = ie,
    a = oe;
  t = e.exports = {};
  const l = (t.re = []),
    u = (t.safeRe = []),
    i = (t.src = []),
    s = (t.t = {});
  let f = 0;
  const m = '[a-zA-Z0-9-]',
    O = [
      ['\\s', 1],
      ['\\d', o],
      [m, n],
    ],
    d = (k) => {
      for (const [D, G] of O)
        k = k.split(`${D}*`).join(`${D}{0,${G}}`).split(`${D}+`).join(`${D}{1,${G}}`);
      return k;
    },
    R = (k, D, G) => {
      const pe = d(D),
        N = f++;
      a(k, N, D),
        (s[k] = N),
        (i[N] = D),
        (l[N] = new RegExp(D, G ? 'g' : void 0)),
        (u[N] = new RegExp(pe, G ? 'g' : void 0));
    };
  R('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
    R('NUMERICIDENTIFIERLOOSE', '\\d+'),
    R('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${m}*`),
    R(
      'MAINVERSION',
      `(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})\\.(${i[s.NUMERICIDENTIFIER]})`,
    ),
    R(
      'MAINVERSIONLOOSE',
      `(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})\\.(${i[s.NUMERICIDENTIFIERLOOSE]})`,
    ),
    R('PRERELEASEIDENTIFIER', `(?:${i[s.NUMERICIDENTIFIER]}|${i[s.NONNUMERICIDENTIFIER]})`),
    R(
      'PRERELEASEIDENTIFIERLOOSE',
      `(?:${i[s.NUMERICIDENTIFIERLOOSE]}|${i[s.NONNUMERICIDENTIFIER]})`,
    ),
    R('PRERELEASE', `(?:-(${i[s.PRERELEASEIDENTIFIER]}(?:\\.${i[s.PRERELEASEIDENTIFIER]})*))`),
    R(
      'PRERELEASELOOSE',
      `(?:-?(${i[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[s.PRERELEASEIDENTIFIERLOOSE]})*))`,
    ),
    R('BUILDIDENTIFIER', `${m}+`),
    R('BUILD', `(?:\\+(${i[s.BUILDIDENTIFIER]}(?:\\.${i[s.BUILDIDENTIFIER]})*))`),
    R('FULLPLAIN', `v?${i[s.MAINVERSION]}${i[s.PRERELEASE]}?${i[s.BUILD]}?`),
    R('FULL', `^${i[s.FULLPLAIN]}$`),
    R('LOOSEPLAIN', `[v=\\s]*${i[s.MAINVERSIONLOOSE]}${i[s.PRERELEASELOOSE]}?${i[s.BUILD]}?`),
    R('LOOSE', `^${i[s.LOOSEPLAIN]}$`),
    R('GTLT', '((?:<|>)?=?)'),
    R('XRANGEIDENTIFIERLOOSE', `${i[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
    R('XRANGEIDENTIFIER', `${i[s.NUMERICIDENTIFIER]}|x|X|\\*`),
    R(
      'XRANGEPLAIN',
      `[v=\\s]*(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:\\.(${i[s.XRANGEIDENTIFIER]})(?:${i[s.PRERELEASE]})?${i[s.BUILD]}?)?)?`,
    ),
    R(
      'XRANGEPLAINLOOSE',
      `[v=\\s]*(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[s.XRANGEIDENTIFIERLOOSE]})(?:${i[s.PRERELEASELOOSE]})?${i[s.BUILD]}?)?)?`,
    ),
    R('XRANGE', `^${i[s.GTLT]}\\s*${i[s.XRANGEPLAIN]}$`),
    R('XRANGELOOSE', `^${i[s.GTLT]}\\s*${i[s.XRANGEPLAINLOOSE]}$`),
    R('COERCEPLAIN', `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),
    R('COERCE', `${i[s.COERCEPLAIN]}(?:$|[^\\d])`),
    R('COERCEFULL', i[s.COERCEPLAIN] + `(?:${i[s.PRERELEASE]})?(?:${i[s.BUILD]})?(?:$|[^\\d])`),
    R('COERCERTL', i[s.COERCE], !0),
    R('COERCERTLFULL', i[s.COERCEFULL], !0),
    R('LONETILDE', '(?:~>?)'),
    R('TILDETRIM', `(\\s*)${i[s.LONETILDE]}\\s+`, !0),
    (t.tildeTrimReplace = '$1~'),
    R('TILDE', `^${i[s.LONETILDE]}${i[s.XRANGEPLAIN]}$`),
    R('TILDELOOSE', `^${i[s.LONETILDE]}${i[s.XRANGEPLAINLOOSE]}$`),
    R('LONECARET', '(?:\\^)'),
    R('CARETTRIM', `(\\s*)${i[s.LONECARET]}\\s+`, !0),
    (t.caretTrimReplace = '$1^'),
    R('CARET', `^${i[s.LONECARET]}${i[s.XRANGEPLAIN]}$`),
    R('CARETLOOSE', `^${i[s.LONECARET]}${i[s.XRANGEPLAINLOOSE]}$`),
    R('COMPARATORLOOSE', `^${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]})$|^$`),
    R('COMPARATOR', `^${i[s.GTLT]}\\s*(${i[s.FULLPLAIN]})$|^$`),
    R('COMPARATORTRIM', `(\\s*)${i[s.GTLT]}\\s*(${i[s.LOOSEPLAIN]}|${i[s.XRANGEPLAIN]})`, !0),
    (t.comparatorTrimReplace = '$1$2$3'),
    R('HYPHENRANGE', `^\\s*(${i[s.XRANGEPLAIN]})\\s+-\\s+(${i[s.XRANGEPLAIN]})\\s*$`),
    R(
      'HYPHENRANGELOOSE',
      `^\\s*(${i[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[s.XRANGEPLAINLOOSE]})\\s*$`,
    ),
    R('STAR', '(<|>)?=?\\s*\\*'),
    R('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
    R('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
})(Oe, Oe.exports);
var q = Oe.exports;
const Yt = Object.freeze({ loose: !0 }),
  Wt = Object.freeze({}),
  Ht = (e) => (e ? (typeof e != 'object' ? Yt : e) : Wt);
var Ne = Ht;
const ke = /^[0-9]+$/,
  ut = (e, t) => {
    const r = ke.test(e),
      n = ke.test(t);
    return (
      r && n && ((e = +e), (t = +t)), e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
    );
  },
  Kt = (e, t) => ut(t, e);
var ft = { compareIdentifiers: ut, rcompareIdentifiers: Kt };
const J = oe,
  { MAX_LENGTH: Ge, MAX_SAFE_INTEGER: Q } = ie,
  { safeRe: Me, t: je } = q,
  Bt = Ne,
  { compareIdentifiers: j } = ft;
let qt = class U {
  constructor(t, r) {
    if (((r = Bt(r)), t instanceof U)) {
      if (t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease) return t;
      t = t.version;
    } else if (typeof t != 'string')
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
    if (t.length > Ge) throw new TypeError(`version is longer than ${Ge} characters`);
    J('SemVer', t, r),
      (this.options = r),
      (this.loose = !!r.loose),
      (this.includePrerelease = !!r.includePrerelease);
    const n = t.trim().match(r.loose ? Me[je.LOOSE] : Me[je.FULL]);
    if (!n) throw new TypeError(`Invalid Version: ${t}`);
    if (
      ((this.raw = t),
      (this.major = +n[1]),
      (this.minor = +n[2]),
      (this.patch = +n[3]),
      this.major > Q || this.major < 0)
    )
      throw new TypeError('Invalid major version');
    if (this.minor > Q || this.minor < 0) throw new TypeError('Invalid minor version');
    if (this.patch > Q || this.patch < 0) throw new TypeError('Invalid patch version');
    n[4]
      ? (this.prerelease = n[4].split('.').map((o) => {
          if (/^[0-9]+$/.test(o)) {
            const a = +o;
            if (a >= 0 && a < Q) return a;
          }
          return o;
        }))
      : (this.prerelease = []),
      (this.build = n[5] ? n[5].split('.') : []),
      this.format();
  }
  format() {
    return (
      (this.version = `${this.major}.${this.minor}.${this.patch}`),
      this.prerelease.length && (this.version += `-${this.prerelease.join('.')}`),
      this.version
    );
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if ((J('SemVer.compare', this.version, this.options, t), !(t instanceof U))) {
      if (typeof t == 'string' && t === this.version) return 0;
      t = new U(t, this.options);
    }
    return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return (
      t instanceof U || (t = new U(t, this.options)),
      j(this.major, t.major) || j(this.minor, t.minor) || j(this.patch, t.patch)
    );
  }
  comparePre(t) {
    if (
      (t instanceof U || (t = new U(t, this.options)),
      this.prerelease.length && !t.prerelease.length)
    )
      return -1;
    if (!this.prerelease.length && t.prerelease.length) return 1;
    if (!this.prerelease.length && !t.prerelease.length) return 0;
    let r = 0;
    do {
      const n = this.prerelease[r],
        o = t.prerelease[r];
      if ((J('prerelease compare', r, n, o), n === void 0 && o === void 0)) return 0;
      if (o === void 0) return 1;
      if (n === void 0) return -1;
      if (n === o) continue;
      return j(n, o);
    } while (++r);
  }
  compareBuild(t) {
    t instanceof U || (t = new U(t, this.options));
    let r = 0;
    do {
      const n = this.build[r],
        o = t.build[r];
      if ((J('build compare', r, n, o), n === void 0 && o === void 0)) return 0;
      if (o === void 0) return 1;
      if (n === void 0) return -1;
      if (n === o) continue;
      return j(n, o);
    } while (++r);
  }
  inc(t, r, n) {
    switch (t) {
      case 'premajor':
        (this.prerelease.length = 0),
          (this.patch = 0),
          (this.minor = 0),
          this.major++,
          this.inc('pre', r, n);
        break;
      case 'preminor':
        (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', r, n);
        break;
      case 'prepatch':
        (this.prerelease.length = 0), this.inc('patch', r, n), this.inc('pre', r, n);
        break;
      case 'prerelease':
        this.prerelease.length === 0 && this.inc('patch', r, n), this.inc('pre', r, n);
        break;
      case 'major':
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++,
          (this.minor = 0),
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case 'minor':
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
          (this.patch = 0),
          (this.prerelease = []);
        break;
      case 'patch':
        this.prerelease.length === 0 && this.patch++, (this.prerelease = []);
        break;
      case 'pre': {
        const o = Number(n) ? 1 : 0;
        if (!r && n === !1) throw new Error('invalid increment argument: identifier is empty');
        if (this.prerelease.length === 0) this.prerelease = [o];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == 'number' && (this.prerelease[a]++, (a = -2));
          if (a === -1) {
            if (r === this.prerelease.join('.') && n === !1)
              throw new Error('invalid increment argument: identifier already exists');
            this.prerelease.push(o);
          }
        }
        if (r) {
          let a = [r, o];
          n === !1 && (a = [r]),
            j(this.prerelease[0], r) === 0
              ? isNaN(this.prerelease[1]) && (this.prerelease = a)
              : (this.prerelease = a);
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${t}`);
    }
    return (
      (this.raw = this.format()),
      this.build.length && (this.raw += `+${this.build.join('.')}`),
      this
    );
  }
};
var y = qt;
const Xe = y,
  zt = (e, t, r = !1) => {
    if (e instanceof Xe) return e;
    try {
      return new Xe(e, t);
    } catch (n) {
      if (!r) return null;
      throw n;
    }
  };
var X = zt;
const Zt = X,
  Jt = (e, t) => {
    const r = Zt(e, t);
    return r ? r.version : null;
  };
var Qt = Jt;
const er = X,
  tr = (e, t) => {
    const r = er(e.trim().replace(/^[=v]+/, ''), t);
    return r ? r.version : null;
  };
var rr = tr;
const xe = y,
  nr = (e, t, r, n, o) => {
    typeof r == 'string' && ((o = n), (n = r), (r = void 0));
    try {
      return new xe(e instanceof xe ? e.version : e, r).inc(t, n, o).version;
    } catch {
      return null;
    }
  };
var sr = nr;
const Ve = X,
  ir = (e, t) => {
    const r = Ve(e, null, !0),
      n = Ve(t, null, !0),
      o = r.compare(n);
    if (o === 0) return null;
    const a = o > 0,
      l = a ? r : n,
      u = a ? n : r,
      i = !!l.prerelease.length;
    if (!!u.prerelease.length && !i)
      return !u.patch && !u.minor ? 'major' : l.patch ? 'patch' : l.minor ? 'minor' : 'major';
    const f = i ? 'pre' : '';
    return r.major !== n.major
      ? f + 'major'
      : r.minor !== n.minor
        ? f + 'minor'
        : r.patch !== n.patch
          ? f + 'patch'
          : 'prerelease';
  };
var or = ir;
const ar = y,
  lr = (e, t) => new ar(e, t).major;
var cr = lr;
const ur = y,
  fr = (e, t) => new ur(e, t).minor;
var hr = fr;
const pr = y,
  Er = (e, t) => new pr(e, t).patch;
var mr = Er;
const dr = X,
  $r = (e, t) => {
    const r = dr(e, t);
    return r && r.prerelease.length ? r.prerelease : null;
  };
var Rr = $r;
const Ye = y,
  vr = (e, t, r) => new Ye(e, r).compare(new Ye(t, r));
var P = vr;
const Ir = P,
  gr = (e, t, r) => Ir(t, e, r);
var Lr = gr;
const Or = P,
  wr = (e, t) => Or(e, t, !0);
var Nr = wr;
const We = y,
  Tr = (e, t, r) => {
    const n = new We(e, r),
      o = new We(t, r);
    return n.compare(o) || n.compareBuild(o);
  };
var Te = Tr;
const Sr = Te,
  yr = (e, t) => e.sort((r, n) => Sr(r, n, t));
var Ar = yr;
const Cr = Te,
  _r = (e, t) => e.sort((r, n) => Cr(n, r, t));
var Dr = _r;
const Pr = P,
  br = (e, t, r) => Pr(e, t, r) > 0;
var ae = br;
const Ur = P,
  Fr = (e, t, r) => Ur(e, t, r) < 0;
var Se = Fr;
const kr = P,
  Gr = (e, t, r) => kr(e, t, r) === 0;
var ht = Gr;
const Mr = P,
  jr = (e, t, r) => Mr(e, t, r) !== 0;
var pt = jr;
const Xr = P,
  xr = (e, t, r) => Xr(e, t, r) >= 0;
var ye = xr;
const Vr = P,
  Yr = (e, t, r) => Vr(e, t, r) <= 0;
var Ae = Yr;
const Wr = ht,
  Hr = pt,
  Kr = ae,
  Br = ye,
  qr = Se,
  zr = Ae,
  Zr = (e, t, r, n) => {
    switch (t) {
      case '===':
        return (
          typeof e == 'object' && (e = e.version), typeof r == 'object' && (r = r.version), e === r
        );
      case '!==':
        return (
          typeof e == 'object' && (e = e.version), typeof r == 'object' && (r = r.version), e !== r
        );
      case '':
      case '=':
      case '==':
        return Wr(e, r, n);
      case '!=':
        return Hr(e, r, n);
      case '>':
        return Kr(e, r, n);
      case '>=':
        return Br(e, r, n);
      case '<':
        return qr(e, r, n);
      case '<=':
        return zr(e, r, n);
      default:
        throw new TypeError(`Invalid operator: ${t}`);
    }
  };
var Et = Zr;
const Jr = y,
  Qr = X,
  { safeRe: ee, t: te } = q,
  en = (e, t) => {
    if (e instanceof Jr) return e;
    if ((typeof e == 'number' && (e = String(e)), typeof e != 'string')) return null;
    t = t || {};
    let r = null;
    if (!t.rtl) r = e.match(t.includePrerelease ? ee[te.COERCEFULL] : ee[te.COERCE]);
    else {
      const i = t.includePrerelease ? ee[te.COERCERTLFULL] : ee[te.COERCERTL];
      let s;
      for (; (s = i.exec(e)) && (!r || r.index + r[0].length !== e.length); )
        (!r || s.index + s[0].length !== r.index + r[0].length) && (r = s),
          (i.lastIndex = s.index + s[1].length + s[2].length);
      i.lastIndex = -1;
    }
    if (r === null) return null;
    const n = r[2],
      o = r[3] || '0',
      a = r[4] || '0',
      l = t.includePrerelease && r[5] ? `-${r[5]}` : '',
      u = t.includePrerelease && r[6] ? `+${r[6]}` : '';
    return Qr(`${n}.${o}.${a}${l}${u}`, t);
  };
var tn = en;
class rn {
  constructor() {
    (this.max = 1e3), (this.map = new Map());
  }
  get(t) {
    const r = this.map.get(t);
    if (r !== void 0) return this.map.delete(t), this.map.set(t, r), r;
  }
  delete(t) {
    return this.map.delete(t);
  }
  set(t, r) {
    if (!this.delete(t) && r !== void 0) {
      if (this.map.size >= this.max) {
        const o = this.map.keys().next().value;
        this.delete(o);
      }
      this.map.set(t, r);
    }
    return this;
  }
}
var nn = rn,
  me,
  He;
function b() {
  if (He) return me;
  He = 1;
  const e = /\s+/g;
  class t {
    constructor(c, $) {
      if ((($ = o($)), c instanceof t))
        return c.loose === !!$.loose && c.includePrerelease === !!$.includePrerelease
          ? c
          : new t(c.raw, $);
      if (c instanceof a)
        return (this.raw = c.value), (this.set = [[c]]), (this.formatted = void 0), this;
      if (
        ((this.options = $),
        (this.loose = !!$.loose),
        (this.includePrerelease = !!$.includePrerelease),
        (this.raw = c.trim().replace(e, ' ')),
        (this.set = this.raw
          .split('||')
          .map((p) => this.parseRange(p.trim()))
          .filter((p) => p.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const p = this.set[0];
        if (((this.set = this.set.filter((v) => !k(v[0]))), this.set.length === 0)) this.set = [p];
        else if (this.set.length > 1) {
          for (const v of this.set)
            if (v.length === 1 && D(v[0])) {
              this.set = [v];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = '';
        for (let c = 0; c < this.set.length; c++) {
          c > 0 && (this.formatted += '||');
          const $ = this.set[c];
          for (let p = 0; p < $.length; p++)
            p > 0 && (this.formatted += ' '), (this.formatted += $[p].toString().trim());
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(c) {
      const p = ((this.options.includePrerelease && d) | (this.options.loose && R)) + ':' + c,
        v = n.get(p);
      if (v) return v;
      const E = this.options.loose,
        I = E ? i[s.HYPHENRANGELOOSE] : i[s.HYPHENRANGE];
      (c = c.replace(I, Dt(this.options.includePrerelease))),
        l('hyphen replace', c),
        (c = c.replace(i[s.COMPARATORTRIM], f)),
        l('comparator trim', c),
        (c = c.replace(i[s.TILDETRIM], m)),
        l('tilde trim', c),
        (c = c.replace(i[s.CARETTRIM], O)),
        l('caret trim', c);
      let L = c
        .split(' ')
        .map((T) => pe(T, this.options))
        .join(' ')
        .split(/\s+/)
        .map((T) => _t(T, this.options));
      E &&
        (L = L.filter(
          (T) => (l('loose invalid filter', T, this.options), !!T.match(i[s.COMPARATORLOOSE])),
        )),
        l('range list', L);
      const g = new Map(),
        w = L.map((T) => new a(T, this.options));
      for (const T of w) {
        if (k(T)) return [T];
        g.set(T.value, T);
      }
      g.size > 1 && g.has('') && g.delete('');
      const C = [...g.values()];
      return n.set(p, C), C;
    }
    intersects(c, $) {
      if (!(c instanceof t)) throw new TypeError('a Range is required');
      return this.set.some(
        (p) =>
          G(p, $) &&
          c.set.some((v) => G(v, $) && p.every((E) => v.every((I) => E.intersects(I, $)))),
      );
    }
    test(c) {
      if (!c) return !1;
      if (typeof c == 'string')
        try {
          c = new u(c, this.options);
        } catch {
          return !1;
        }
      for (let $ = 0; $ < this.set.length; $++) if (Pt(this.set[$], c, this.options)) return !0;
      return !1;
    }
  }
  me = t;
  const r = nn,
    n = new r(),
    o = Ne,
    a = le(),
    l = oe,
    u = y,
    { safeRe: i, t: s, comparatorTrimReplace: f, tildeTrimReplace: m, caretTrimReplace: O } = q,
    { FLAG_INCLUDE_PRERELEASE: d, FLAG_LOOSE: R } = ie,
    k = (h) => h.value === '<0.0.0-0',
    D = (h) => h.value === '',
    G = (h, c) => {
      let $ = !0;
      const p = h.slice();
      let v = p.pop();
      for (; $ && p.length; ) ($ = p.every((E) => v.intersects(E, c))), (v = p.pop());
      return $;
    },
    pe = (h, c) => (
      l('comp', h, c),
      (h = Tt(h, c)),
      l('caret', h),
      (h = wt(h, c)),
      l('tildes', h),
      (h = yt(h, c)),
      l('xrange', h),
      (h = Ct(h, c)),
      l('stars', h),
      h
    ),
    N = (h) => !h || h.toLowerCase() === 'x' || h === '*',
    wt = (h, c) =>
      h
        .trim()
        .split(/\s+/)
        .map(($) => Nt($, c))
        .join(' '),
    Nt = (h, c) => {
      const $ = c.loose ? i[s.TILDELOOSE] : i[s.TILDE];
      return h.replace($, (p, v, E, I, L) => {
        l('tilde', h, p, v, E, I, L);
        let g;
        return (
          N(v)
            ? (g = '')
            : N(E)
              ? (g = `>=${v}.0.0 <${+v + 1}.0.0-0`)
              : N(I)
                ? (g = `>=${v}.${E}.0 <${v}.${+E + 1}.0-0`)
                : L
                  ? (l('replaceTilde pr', L), (g = `>=${v}.${E}.${I}-${L} <${v}.${+E + 1}.0-0`))
                  : (g = `>=${v}.${E}.${I} <${v}.${+E + 1}.0-0`),
          l('tilde return', g),
          g
        );
      });
    },
    Tt = (h, c) =>
      h
        .trim()
        .split(/\s+/)
        .map(($) => St($, c))
        .join(' '),
    St = (h, c) => {
      l('caret', h, c);
      const $ = c.loose ? i[s.CARETLOOSE] : i[s.CARET],
        p = c.includePrerelease ? '-0' : '';
      return h.replace($, (v, E, I, L, g) => {
        l('caret', h, v, E, I, L, g);
        let w;
        return (
          N(E)
            ? (w = '')
            : N(I)
              ? (w = `>=${E}.0.0${p} <${+E + 1}.0.0-0`)
              : N(L)
                ? E === '0'
                  ? (w = `>=${E}.${I}.0${p} <${E}.${+I + 1}.0-0`)
                  : (w = `>=${E}.${I}.0${p} <${+E + 1}.0.0-0`)
                : g
                  ? (l('replaceCaret pr', g),
                    E === '0'
                      ? I === '0'
                        ? (w = `>=${E}.${I}.${L}-${g} <${E}.${I}.${+L + 1}-0`)
                        : (w = `>=${E}.${I}.${L}-${g} <${E}.${+I + 1}.0-0`)
                      : (w = `>=${E}.${I}.${L}-${g} <${+E + 1}.0.0-0`))
                  : (l('no pr'),
                    E === '0'
                      ? I === '0'
                        ? (w = `>=${E}.${I}.${L}${p} <${E}.${I}.${+L + 1}-0`)
                        : (w = `>=${E}.${I}.${L}${p} <${E}.${+I + 1}.0-0`)
                      : (w = `>=${E}.${I}.${L} <${+E + 1}.0.0-0`)),
          l('caret return', w),
          w
        );
      });
    },
    yt = (h, c) => (
      l('replaceXRanges', h, c),
      h
        .split(/\s+/)
        .map(($) => At($, c))
        .join(' ')
    ),
    At = (h, c) => {
      h = h.trim();
      const $ = c.loose ? i[s.XRANGELOOSE] : i[s.XRANGE];
      return h.replace($, (p, v, E, I, L, g) => {
        l('xRange', h, p, v, E, I, L, g);
        const w = N(E),
          C = w || N(I),
          T = C || N(L),
          Y = T;
        return (
          v === '=' && Y && (v = ''),
          (g = c.includePrerelease ? '-0' : ''),
          w
            ? v === '>' || v === '<'
              ? (p = '<0.0.0-0')
              : (p = '*')
            : v && Y
              ? (C && (I = 0),
                (L = 0),
                v === '>'
                  ? ((v = '>='), C ? ((E = +E + 1), (I = 0), (L = 0)) : ((I = +I + 1), (L = 0)))
                  : v === '<=' && ((v = '<'), C ? (E = +E + 1) : (I = +I + 1)),
                v === '<' && (g = '-0'),
                (p = `${v + E}.${I}.${L}${g}`))
              : C
                ? (p = `>=${E}.0.0${g} <${+E + 1}.0.0-0`)
                : T && (p = `>=${E}.${I}.0${g} <${E}.${+I + 1}.0-0`),
          l('xRange return', p),
          p
        );
      });
    },
    Ct = (h, c) => (l('replaceStars', h, c), h.trim().replace(i[s.STAR], '')),
    _t = (h, c) => (
      l('replaceGTE0', h, c), h.trim().replace(i[c.includePrerelease ? s.GTE0PRE : s.GTE0], '')
    ),
    Dt = (h) => (c, $, p, v, E, I, L, g, w, C, T, Y) => (
      N(p)
        ? ($ = '')
        : N(v)
          ? ($ = `>=${p}.0.0${h ? '-0' : ''}`)
          : N(E)
            ? ($ = `>=${p}.${v}.0${h ? '-0' : ''}`)
            : I
              ? ($ = `>=${$}`)
              : ($ = `>=${$}${h ? '-0' : ''}`),
      N(w)
        ? (g = '')
        : N(C)
          ? (g = `<${+w + 1}.0.0-0`)
          : N(T)
            ? (g = `<${w}.${+C + 1}.0-0`)
            : Y
              ? (g = `<=${w}.${C}.${T}-${Y}`)
              : h
                ? (g = `<${w}.${C}.${+T + 1}-0`)
                : (g = `<=${g}`),
      `${$} ${g}`.trim()
    ),
    Pt = (h, c, $) => {
      for (let p = 0; p < h.length; p++) if (!h[p].test(c)) return !1;
      if (c.prerelease.length && !$.includePrerelease) {
        for (let p = 0; p < h.length; p++)
          if ((l(h[p].semver), h[p].semver !== a.ANY && h[p].semver.prerelease.length > 0)) {
            const v = h[p].semver;
            if (v.major === c.major && v.minor === c.minor && v.patch === c.patch) return !0;
          }
        return !1;
      }
      return !0;
    };
  return me;
}
var de, Ke;
function le() {
  if (Ke) return de;
  Ke = 1;
  const e = Symbol('SemVer ANY');
  class t {
    static get ANY() {
      return e;
    }
    constructor(f, m) {
      if (((m = r(m)), f instanceof t)) {
        if (f.loose === !!m.loose) return f;
        f = f.value;
      }
      (f = f.trim().split(/\s+/).join(' ')),
        l('comparator', f, m),
        (this.options = m),
        (this.loose = !!m.loose),
        this.parse(f),
        this.semver === e ? (this.value = '') : (this.value = this.operator + this.semver.version),
        l('comp', this);
    }
    parse(f) {
      const m = this.options.loose ? n[o.COMPARATORLOOSE] : n[o.COMPARATOR],
        O = f.match(m);
      if (!O) throw new TypeError(`Invalid comparator: ${f}`);
      (this.operator = O[1] !== void 0 ? O[1] : ''),
        this.operator === '=' && (this.operator = ''),
        O[2] ? (this.semver = new u(O[2], this.options.loose)) : (this.semver = e);
    }
    toString() {
      return this.value;
    }
    test(f) {
      if ((l('Comparator.test', f, this.options.loose), this.semver === e || f === e)) return !0;
      if (typeof f == 'string')
        try {
          f = new u(f, this.options);
        } catch {
          return !1;
        }
      return a(f, this.operator, this.semver, this.options);
    }
    intersects(f, m) {
      if (!(f instanceof t)) throw new TypeError('a Comparator is required');
      return this.operator === ''
        ? this.value === ''
          ? !0
          : new i(f.value, m).test(this.value)
        : f.operator === ''
          ? f.value === ''
            ? !0
            : new i(this.value, m).test(f.semver)
          : ((m = r(m)),
            (m.includePrerelease && (this.value === '<0.0.0-0' || f.value === '<0.0.0-0')) ||
            (!m.includePrerelease &&
              (this.value.startsWith('<0.0.0') || f.value.startsWith('<0.0.0')))
              ? !1
              : !!(
                  (this.operator.startsWith('>') && f.operator.startsWith('>')) ||
                  (this.operator.startsWith('<') && f.operator.startsWith('<')) ||
                  (this.semver.version === f.semver.version &&
                    this.operator.includes('=') &&
                    f.operator.includes('=')) ||
                  (a(this.semver, '<', f.semver, m) &&
                    this.operator.startsWith('>') &&
                    f.operator.startsWith('<')) ||
                  (a(this.semver, '>', f.semver, m) &&
                    this.operator.startsWith('<') &&
                    f.operator.startsWith('>'))
                ));
    }
  }
  de = t;
  const r = Ne,
    { safeRe: n, t: o } = q,
    a = Et,
    l = oe,
    u = y,
    i = b();
  return de;
}
const sn = b(),
  on = (e, t, r) => {
    try {
      t = new sn(t, r);
    } catch {
      return !1;
    }
    return t.test(e);
  };
var ce = on;
const an = b(),
  ln = (e, t) =>
    new an(e, t).set.map((r) =>
      r
        .map((n) => n.value)
        .join(' ')
        .trim()
        .split(' '),
    );
var cn = ln;
const un = y,
  fn = b(),
  hn = (e, t, r) => {
    let n = null,
      o = null,
      a = null;
    try {
      a = new fn(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((l) => {
        a.test(l) && (!n || o.compare(l) === -1) && ((n = l), (o = new un(n, r)));
      }),
      n
    );
  };
var pn = hn;
const En = y,
  mn = b(),
  dn = (e, t, r) => {
    let n = null,
      o = null,
      a = null;
    try {
      a = new mn(t, r);
    } catch {
      return null;
    }
    return (
      e.forEach((l) => {
        a.test(l) && (!n || o.compare(l) === 1) && ((n = l), (o = new En(n, r)));
      }),
      n
    );
  };
var $n = dn;
const $e = y,
  Rn = b(),
  Be = ae,
  vn = (e, t) => {
    e = new Rn(e, t);
    let r = new $e('0.0.0');
    if (e.test(r) || ((r = new $e('0.0.0-0')), e.test(r))) return r;
    r = null;
    for (let n = 0; n < e.set.length; ++n) {
      const o = e.set[n];
      let a = null;
      o.forEach((l) => {
        const u = new $e(l.semver.version);
        switch (l.operator) {
          case '>':
            u.prerelease.length === 0 ? u.patch++ : u.prerelease.push(0), (u.raw = u.format());
          case '':
          case '>=':
            (!a || Be(u, a)) && (a = u);
            break;
          case '<':
          case '<=':
            break;
          default:
            throw new Error(`Unexpected operation: ${l.operator}`);
        }
      }),
        a && (!r || Be(r, a)) && (r = a);
    }
    return r && e.test(r) ? r : null;
  };
var In = vn;
const gn = b(),
  Ln = (e, t) => {
    try {
      return new gn(e, t).range || '*';
    } catch {
      return null;
    }
  };
var On = Ln;
const wn = y,
  mt = le(),
  { ANY: Nn } = mt,
  Tn = b(),
  Sn = ce,
  qe = ae,
  ze = Se,
  yn = Ae,
  An = ye,
  Cn = (e, t, r, n) => {
    (e = new wn(e, n)), (t = new Tn(t, n));
    let o, a, l, u, i;
    switch (r) {
      case '>':
        (o = qe), (a = yn), (l = ze), (u = '>'), (i = '>=');
        break;
      case '<':
        (o = ze), (a = An), (l = qe), (u = '<'), (i = '<=');
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (Sn(e, t, n)) return !1;
    for (let s = 0; s < t.set.length; ++s) {
      const f = t.set[s];
      let m = null,
        O = null;
      if (
        (f.forEach((d) => {
          d.semver === Nn && (d = new mt('>=0.0.0')),
            (m = m || d),
            (O = O || d),
            o(d.semver, m.semver, n) ? (m = d) : l(d.semver, O.semver, n) && (O = d);
        }),
        m.operator === u ||
          m.operator === i ||
          ((!O.operator || O.operator === u) && a(e, O.semver)))
      )
        return !1;
      if (O.operator === i && l(e, O.semver)) return !1;
    }
    return !0;
  };
var Ce = Cn;
const _n = Ce,
  Dn = (e, t, r) => _n(e, t, '>', r);
var Pn = Dn;
const bn = Ce,
  Un = (e, t, r) => bn(e, t, '<', r);
var Fn = Un;
const Ze = b(),
  kn = (e, t, r) => ((e = new Ze(e, r)), (t = new Ze(t, r)), e.intersects(t, r));
var Gn = kn;
const Mn = ce,
  jn = P;
var Xn = (e, t, r) => {
  const n = [];
  let o = null,
    a = null;
  const l = e.sort((f, m) => jn(f, m, r));
  for (const f of l)
    Mn(f, t, r) ? ((a = f), o || (o = f)) : (a && n.push([o, a]), (a = null), (o = null));
  o && n.push([o, null]);
  const u = [];
  for (const [f, m] of n)
    f === m
      ? u.push(f)
      : !m && f === l[0]
        ? u.push('*')
        : m
          ? f === l[0]
            ? u.push(`<=${m}`)
            : u.push(`${f} - ${m}`)
          : u.push(`>=${f}`);
  const i = u.join(' || '),
    s = typeof t.raw == 'string' ? t.raw : String(t);
  return i.length < s.length ? i : t;
};
const Je = b(),
  _e = le(),
  { ANY: Re } = _e,
  W = ce,
  De = P,
  xn = (e, t, r = {}) => {
    if (e === t) return !0;
    (e = new Je(e, r)), (t = new Je(t, r));
    let n = !1;
    e: for (const o of e.set) {
      for (const a of t.set) {
        const l = Yn(o, a, r);
        if (((n = n || l !== null), l)) continue e;
      }
      if (n) return !1;
    }
    return !0;
  },
  Vn = [new _e('>=0.0.0-0')],
  Qe = [new _e('>=0.0.0')],
  Yn = (e, t, r) => {
    if (e === t) return !0;
    if (e.length === 1 && e[0].semver === Re) {
      if (t.length === 1 && t[0].semver === Re) return !0;
      r.includePrerelease ? (e = Vn) : (e = Qe);
    }
    if (t.length === 1 && t[0].semver === Re) {
      if (r.includePrerelease) return !0;
      t = Qe;
    }
    const n = new Set();
    let o, a;
    for (const d of e)
      d.operator === '>' || d.operator === '>='
        ? (o = et(o, d, r))
        : d.operator === '<' || d.operator === '<='
          ? (a = tt(a, d, r))
          : n.add(d.semver);
    if (n.size > 1) return null;
    let l;
    if (o && a) {
      if (((l = De(o.semver, a.semver, r)), l > 0)) return null;
      if (l === 0 && (o.operator !== '>=' || a.operator !== '<=')) return null;
    }
    for (const d of n) {
      if ((o && !W(d, String(o), r)) || (a && !W(d, String(a), r))) return null;
      for (const R of t) if (!W(d, String(R), r)) return !1;
      return !0;
    }
    let u,
      i,
      s,
      f,
      m = a && !r.includePrerelease && a.semver.prerelease.length ? a.semver : !1,
      O = o && !r.includePrerelease && o.semver.prerelease.length ? o.semver : !1;
    m && m.prerelease.length === 1 && a.operator === '<' && m.prerelease[0] === 0 && (m = !1);
    for (const d of t) {
      if (
        ((f = f || d.operator === '>' || d.operator === '>='),
        (s = s || d.operator === '<' || d.operator === '<='),
        o)
      ) {
        if (
          (O &&
            d.semver.prerelease &&
            d.semver.prerelease.length &&
            d.semver.major === O.major &&
            d.semver.minor === O.minor &&
            d.semver.patch === O.patch &&
            (O = !1),
          d.operator === '>' || d.operator === '>=')
        ) {
          if (((u = et(o, d, r)), u === d && u !== o)) return !1;
        } else if (o.operator === '>=' && !W(o.semver, String(d), r)) return !1;
      }
      if (a) {
        if (
          (m &&
            d.semver.prerelease &&
            d.semver.prerelease.length &&
            d.semver.major === m.major &&
            d.semver.minor === m.minor &&
            d.semver.patch === m.patch &&
            (m = !1),
          d.operator === '<' || d.operator === '<=')
        ) {
          if (((i = tt(a, d, r)), i === d && i !== a)) return !1;
        } else if (a.operator === '<=' && !W(a.semver, String(d), r)) return !1;
      }
      if (!d.operator && (a || o) && l !== 0) return !1;
    }
    return !((o && s && !a && l !== 0) || (a && f && !o && l !== 0) || O || m);
  },
  et = (e, t, r) => {
    if (!e) return t;
    const n = De(e.semver, t.semver, r);
    return n > 0 ? e : n < 0 || (t.operator === '>' && e.operator === '>=') ? t : e;
  },
  tt = (e, t, r) => {
    if (!e) return t;
    const n = De(e.semver, t.semver, r);
    return n < 0 ? e : n > 0 || (t.operator === '<' && e.operator === '<=') ? t : e;
  };
var Wn = xn;
const ve = q,
  rt = ie,
  Hn = y,
  nt = ft,
  Kn = X,
  Bn = Qt,
  qn = rr,
  zn = sr,
  Zn = or,
  Jn = cr,
  Qn = hr,
  es = mr,
  ts = Rr,
  rs = P,
  ns = Lr,
  ss = Nr,
  is = Te,
  os = Ar,
  as = Dr,
  ls = ae,
  cs = Se,
  us = ht,
  fs = pt,
  hs = ye,
  ps = Ae,
  Es = Et,
  ms = tn,
  ds = le(),
  $s = b(),
  Rs = ce,
  vs = cn,
  Is = pn,
  gs = $n,
  Ls = In,
  Os = On,
  ws = Ce,
  Ns = Pn,
  Ts = Fn,
  Ss = Gn,
  ys = Xn,
  As = Wn;
var Cs = {
  parse: Kn,
  valid: Bn,
  clean: qn,
  inc: zn,
  diff: Zn,
  major: Jn,
  minor: Qn,
  patch: es,
  prerelease: ts,
  compare: rs,
  rcompare: ns,
  compareLoose: ss,
  compareBuild: is,
  sort: os,
  rsort: as,
  gt: ls,
  lt: cs,
  eq: us,
  neq: fs,
  gte: hs,
  lte: ps,
  cmp: Es,
  coerce: ms,
  Comparator: ds,
  Range: $s,
  satisfies: Rs,
  toComparators: vs,
  maxSatisfying: Is,
  minSatisfying: gs,
  minVersion: Ls,
  validRange: Os,
  outside: ws,
  gtr: Ns,
  ltr: Ts,
  intersects: Ss,
  simplifyRange: ys,
  subset: As,
  SemVer: Hn,
  re: ve.re,
  src: ve.src,
  tokens: ve.t,
  SEMVER_SPEC_VERSION: rt.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: rt.RELEASE_TYPES,
  compareIdentifiers: nt.compareIdentifiers,
  rcompareIdentifiers: nt.rcompareIdentifiers,
};
const st = Ft(Cs);
var S = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var x = F,
  Pe = kt;
function dt(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function it(e) {
  if (dt(e) !== e) throw Error('Unable to find node on an unmounted component.');
}
function _s(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dt(e)), t === null)) throw Error('Unable to find node on an unmounted component.');
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var a = o.alternate;
    if (a === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === a.child) {
      for (a = o.child; a; ) {
        if (a === r) return it(o), e;
        if (a === n) return it(o), t;
        a = a.sibling;
      }
      throw Error('Unable to find node on an unmounted component.');
    }
    if (r.return !== n.return) (r = o), (n = a);
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === r) {
          (l = !0), (r = o), (n = a);
          break;
        }
        if (u === n) {
          (l = !0), (n = o), (r = a);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = a.child; u; ) {
          if (u === r) {
            (l = !0), (r = a), (n = o);
            break;
          }
          if (u === n) {
            (l = !0), (n = a), (r = o);
            break;
          }
          u = u.sibling;
        }
        if (!l)
          throw Error(
            'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.',
          );
      }
    }
    if (r.alternate !== n)
      throw Error(
        "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
      );
  }
  if (r.tag !== 3) throw Error('Unable to find node on an unmounted component.');
  return r.stateNode.current === r ? e : t;
}
var A = Object.assign;
function Ie(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function re() {
  return !0;
}
function ot() {
  return !1;
}
function _(e) {
  function t(r, n, o, a, l) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = l),
      (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(a) : a[u]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? re
        : ot),
      (this.isPropagationStopped = ot),
      this
    );
  }
  return (
    A(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
          (this.isDefaultPrevented = re));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
          (this.isPropagationStopped = re));
      },
      persist: function () {},
      isPersistent: re,
    }),
    t
  );
}
var V = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ds = _(V),
  z = A({}, V, { view: 0, detail: 0 });
_(z);
var ge,
  Le,
  H,
  ue = A({}, z, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: be,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== H &&
            (H && e.type === 'mousemove'
              ? ((ge = e.screenX - H.screenX), (Le = e.screenY - H.screenY))
              : (Le = ge = 0),
            (H = e)),
          ge);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Le;
    },
  });
_(ue);
var Ps = A({}, ue, { dataTransfer: 0 });
_(Ps);
var bs = A({}, z, { relatedTarget: 0 });
_(bs);
var Us = A({}, V, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
_(Us);
var Fs = A({}, V, {
  clipboardData: function (e) {
    return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
  },
});
_(Fs);
var ks = A({}, V, { data: 0 });
_(ks);
var Gs = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Ms = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  js = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Xs(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = js[e]) ? !!t[e] : !1;
}
function be() {
  return Xs;
}
var xs = A({}, z, {
  key: function (e) {
    if (e.key) {
      var t = Gs[e.key] || e.key;
      if (t !== 'Unidentified') return t;
    }
    return e.type === 'keypress'
      ? ((e = Ie(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
      : e.type === 'keydown' || e.type === 'keyup'
        ? Ms[e.keyCode] || 'Unidentified'
        : '';
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: be,
  charCode: function (e) {
    return e.type === 'keypress' ? Ie(e) : 0;
  },
  keyCode: function (e) {
    return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
  },
  which: function (e) {
    return e.type === 'keypress'
      ? Ie(e)
      : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
  },
});
_(xs);
var Vs = A({}, ue, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0,
});
_(Vs);
var Ys = A({}, z, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: be,
});
_(Ys);
var Ws = A({}, V, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
_(Ws);
var Hs = A({}, ue, {
  deltaX: function (e) {
    return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function (e) {
    return 'deltaY' in e
      ? e.deltaY
      : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0;
  },
  deltaZ: 0,
  deltaMode: 0,
});
_(Hs);
function Ks(e, t, r, n, o, a, l, u, i) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, s);
  } catch (f) {
    this.onError(f);
  }
}
var B = !1,
  ne = null,
  se = !1,
  we = null,
  Bs = {
    onError: function (e) {
      (B = !0), (ne = e);
    },
  };
function qs(e, t, r, n, o, a, l, u, i) {
  (B = !1), (ne = null), Ks.apply(Bs, arguments);
}
function zs(e, t, r, n, o, a, l, u, i) {
  if ((qs.apply(this, arguments), B)) {
    if (B) {
      var s = ne;
      (B = !1), (ne = null);
    } else
      throw Error(
        'clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.',
      );
    se || ((se = !0), (we = s));
  }
}
var Ue = Array.isArray,
  Z = Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,
  Zs = Z[0],
  Js = Z[1],
  Qs = Z[2],
  ei = Z[3],
  ti = Z[4],
  ri = x.unstable_act;
function ni() {}
function si(e, t) {
  if (!e) return [];
  if (((e = _s(e)), !e)) return [];
  for (var r = e, n = []; ; ) {
    if (r.tag === 5 || r.tag === 6 || r.tag === 1 || r.tag === 0) {
      var o = r.stateNode;
      t(o) && n.push(o);
    }
    if (r.child) (r.child.return = r), (r = r.child);
    else {
      if (r === e) return n;
      for (; !r.sibling; ) {
        if (!r.return || r.return === e) return n;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }
}
function M(e, t) {
  if (e && !e._reactInternals) {
    var r = String(e);
    throw (
      ((e = Ue(e)
        ? 'an array'
        : e && e.nodeType === 1 && e.tagName
          ? 'a DOM node'
          : r === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : r),
      Error(
        t +
          '(...): the first argument must be a React class instance. Instead received: ' +
          (e + '.'),
      ))
    );
  }
}
function fe(e) {
  return !(!e || e.nodeType !== 1 || !e.tagName);
}
function Fe(e) {
  return fe(e) ? !1 : e != null && typeof e.render == 'function' && typeof e.setState == 'function';
}
function $t(e, t) {
  return Fe(e) ? e._reactInternals.type === t : !1;
}
function he(e, t) {
  return M(e, 'findAllInRenderedTree'), e ? si(e._reactInternals, t) : [];
}
function Rt(e, t) {
  return (
    M(e, 'scryRenderedDOMComponentsWithClass'),
    he(e, function (r) {
      if (fe(r)) {
        var n = r.className;
        typeof n != 'string' && (n = r.getAttribute('class') || '');
        var o = n.split(/\s+/);
        if (!Ue(t)) {
          if (t === void 0)
            throw Error(
              'TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.',
            );
          t = t.split(/\s+/);
        }
        return t.every(function (a) {
          return o.indexOf(a) !== -1;
        });
      }
      return !1;
    })
  );
}
function vt(e, t) {
  return (
    M(e, 'scryRenderedDOMComponentsWithTag'),
    he(e, function (r) {
      return fe(r) && r.tagName.toUpperCase() === t.toUpperCase();
    })
  );
}
function It(e, t) {
  return (
    M(e, 'scryRenderedComponentsWithType'),
    he(e, function (r) {
      return $t(r, t);
    })
  );
}
function at(e, t, r) {
  var n = e.type || 'unknown-event';
  (e.currentTarget = Js(r)), zs(n, t, void 0, e), (e.currentTarget = null);
}
function gt(e, t, r) {
  for (var n = []; e; ) {
    n.push(e);
    do e = e.return;
    while (e && e.tag !== 5);
    e = e || null;
  }
  for (e = n.length; 0 < e--; ) t(n[e], 'captured', r);
  for (e = 0; e < n.length; e++) t(n[e], 'bubbled', r);
}
function Lt(e, t) {
  var r = e.stateNode;
  if (!r) return null;
  var n = Qs(r);
  if (!n) return null;
  r = n[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != 'function')
    throw Error(
      'Expected `' +
        t +
        '` listener to be a function, instead got a value of `' +
        typeof r +
        '` type.',
    );
  return r;
}
function ii(e, t, r) {
  e &&
    r &&
    r._reactName &&
    (t = Lt(e, r._reactName)) &&
    (r._dispatchListeners == null && (r._dispatchListeners = []),
    r._dispatchInstances == null && (r._dispatchInstances = []),
    r._dispatchListeners.push(t),
    r._dispatchInstances.push(e));
}
function oi(e, t, r) {
  var n = r._reactName;
  t === 'captured' && (n += 'Capture'),
    (t = Lt(e, n)) &&
      (r._dispatchListeners == null && (r._dispatchListeners = []),
      r._dispatchInstances == null && (r._dispatchInstances = []),
      r._dispatchListeners.push(t),
      r._dispatchInstances.push(e));
}
var Ot = {},
  ai = new Set(['mouseEnter', 'mouseLeave', 'pointerEnter', 'pointerLeave']);
function li(e) {
  return function (t, r) {
    if (x.isValidElement(t))
      throw Error(
        'TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.',
      );
    if (Fe(t))
      throw Error(
        'TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.',
      );
    var n = 'on' + e[0].toUpperCase() + e.slice(1),
      o = new ni();
    (o.target = t), (o.type = e.toLowerCase());
    var a = Zs(t),
      l = new Ds(n, o.type, a, o, t);
    l.persist(),
      A(l, r),
      ai.has(e)
        ? l && l._reactName && ii(l._targetInst, null, l)
        : l && l._reactName && gt(l._targetInst, oi, l),
      Pe.unstable_batchedUpdates(function () {
        if ((ei(t), l)) {
          var u = l._dispatchListeners,
            i = l._dispatchInstances;
          if (Ue(u))
            for (var s = 0; s < u.length && !l.isPropagationStopped(); s++) at(l, u[s], i[s]);
          else u && at(l, u, i);
          (l._dispatchListeners = null),
            (l._dispatchInstances = null),
            l.isPersistent() || l.constructor.release(l);
        }
        if (se) throw ((u = we), (se = !1), (we = null), u);
      }),
      ti();
  };
}
'blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate'
  .split(' ')
  .forEach(function (e) {
    Ot[e] = li(e);
  });
S.Simulate = Ot;
S.act = ri;
S.findAllInRenderedTree = he;
S.findRenderedComponentWithType = function (e, t) {
  if ((M(e, 'findRenderedComponentWithType'), (e = It(e, t)), e.length !== 1))
    throw Error('Did not find exactly one match (found: ' + e.length + ') for componentType:' + t);
  return e[0];
};
S.findRenderedDOMComponentWithClass = function (e, t) {
  if ((M(e, 'findRenderedDOMComponentWithClass'), (e = Rt(e, t)), e.length !== 1))
    throw Error('Did not find exactly one match (found: ' + e.length + ') for class:' + t);
  return e[0];
};
S.findRenderedDOMComponentWithTag = function (e, t) {
  if ((M(e, 'findRenderedDOMComponentWithTag'), (e = vt(e, t)), e.length !== 1))
    throw Error('Did not find exactly one match (found: ' + e.length + ') for tag:' + t);
  return e[0];
};
S.isCompositeComponent = Fe;
S.isCompositeComponentWithType = $t;
S.isDOMComponent = fe;
S.isDOMComponentElement = function (e) {
  return !!(e && x.isValidElement(e) && e.tagName);
};
S.isElement = function (e) {
  return x.isValidElement(e);
};
S.isElementOfType = function (e, t) {
  return x.isValidElement(e) && e.type === t;
};
S.mockComponent = function (e, t) {
  return (
    (t = t || e.mockTagName || 'div'),
    e.prototype.render.mockImplementation(function () {
      return x.createElement(t, null, this.props.children);
    }),
    this
  );
};
S.nativeTouchData = function (e, t) {
  return { touches: [{ pageX: e, pageY: t }] };
};
S.renderIntoDocument = function (e) {
  var t = document.createElement('div');
  return Pe.render(e, t);
};
S.scryRenderedComponentsWithType = It;
S.scryRenderedDOMComponentsWithClass = Rt;
S.scryRenderedDOMComponentsWithTag = vt;
S.traverseTwoPhase = gt;
const { global: ci } = __STORYBOOK_MODULE_GLOBAL__;
var ui = {};
Ut(ui, {
  decorators: () => Ri,
  mount: () => di,
  parameters: () => $i,
  render: () => fi,
  renderToCanvas: () => mi,
});
var fi = (e, t) => {
  let { id: r, component: n } = t;
  if (!n)
    throw new Error(
      `Unable to render story ${r} as the component annotation is missing from the default export`,
    );
  return K.createElement(n, { ...e });
};
function hi() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var { FRAMEWORK_OPTIONS: pi } = ci,
  Ei = class extends F.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidMount() {
      let { hasError: e } = this.state,
        { showMain: t } = this.props;
      e || t();
    }
    componentDidCatch(e) {
      let { showException: t } = this.props;
      t(e);
    }
    render() {
      let { hasError: e } = this.state,
        { children: t } = this.props;
      return e ? null : t;
    }
  },
  lt = pi?.strictMode ? F.StrictMode : F.Fragment;
async function mi(
  { storyContext: e, unboundStoryFn: t, showMain: r, showException: n, forceRemount: o },
  a,
) {
  let { renderElement: l, unmountElement: u } = await bt(
      () => import('./react-18-CJwW9gwZ.js'),
      __vite__mapDeps([0, 1, 2]),
      import.meta.url,
    ),
    i = t,
    s = hi()
      ? K.createElement(i, { ...e })
      : K.createElement(Ei, { showMain: r, showException: n }, K.createElement(i, { ...e })),
    f = lt ? K.createElement(lt, null, s) : s;
  return o && u(a), await l(f, a, e?.parameters?.react?.rootOptions), () => u(a);
}
var di = (e) => async (t) => (
    t != null && (e.originalStoryFn = () => t), await e.renderToCanvas(), e.canvas
  ),
  $i = { renderer: 'react' },
  Ri = [
    (e, t) => {
      if (!t.parameters?.react?.rsc) return F.createElement(e, null);
      let r = st.major(F.version),
        n = st.minor(F.version);
      if (r < 18 || (r === 18 && n < 3))
        throw new Error('React Server Components require React >= 18.3');
      return F.createElement(F.Suspense, null, F.createElement(e, null));
    },
  ];
export { Ri as decorators, di as mount, $i as parameters, fi as render, mi as renderToCanvas };
