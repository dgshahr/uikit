const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './test-utils-DMevpjHC.js',
      './index-CTzypqlY.js',
      './react-18-C7NcDMCS.js',
      './index-X_f_OX5J.js',
    ]),
) => i.map((i) => d[i]);
import { _ as pe } from './iframe-DDWfIKHL.js';
import { _ as Te, a as O, d as Ae } from './chunk-XP5HYGXS-D5tuasO7.js';
import { r as M, R as Y, b as ge } from './index-CTzypqlY.js';
var ne = {};
const { global: we } = __STORYBOOK_MODULE_GLOBAL__;
var Q = O({
    '../../node_modules/semver/internal/constants.js'(c, u) {
      var r = '2.0.0',
        i = Number.MAX_SAFE_INTEGER || 9007199254740991,
        n = 16,
        s = 250,
        p = ['major', 'premajor', 'minor', 'preminor', 'patch', 'prepatch', 'prerelease'];
      u.exports = {
        MAX_LENGTH: 256,
        MAX_SAFE_COMPONENT_LENGTH: n,
        MAX_SAFE_BUILD_LENGTH: s,
        MAX_SAFE_INTEGER: i,
        RELEASE_TYPES: p,
        SEMVER_SPEC_VERSION: r,
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2,
      };
    },
  }),
  Z = O({
    '../../node_modules/semver/internal/debug.js'(c, u) {
      var r =
        typeof process == 'object' && ne && ne.NODE_DEBUG && /\bsemver\b/i.test(ne.NODE_DEBUG)
          ? (...i) => console.error('SEMVER', ...i)
          : () => {};
      u.exports = r;
    },
  }),
  z = O({
    '../../node_modules/semver/internal/re.js'(c, u) {
      var { MAX_SAFE_COMPONENT_LENGTH: r, MAX_SAFE_BUILD_LENGTH: i, MAX_LENGTH: n } = Q(),
        s = Z();
      c = u.exports = {};
      var p = (c.re = []),
        h = (c.safeRe = []),
        e = (c.src = []),
        f = (c.safeSrc = []),
        a = (c.t = {}),
        v = 0,
        t = '[a-zA-Z0-9-]',
        l = [
          ['\\s', 1],
          ['\\d', n],
          [t, i],
        ],
        E = (I) => {
          for (let [T, A] of l)
            I = I.split(`${T}*`).join(`${T}{0,${A}}`).split(`${T}+`).join(`${T}{1,${A}}`);
          return I;
        },
        o = (I, T, A) => {
          let y = E(T),
            D = v++;
          s(I, D, T),
            (a[I] = D),
            (e[D] = T),
            (f[D] = y),
            (p[D] = new RegExp(T, A ? 'g' : void 0)),
            (h[D] = new RegExp(y, A ? 'g' : void 0));
        };
      o('NUMERICIDENTIFIER', '0|[1-9]\\d*'),
        o('NUMERICIDENTIFIERLOOSE', '\\d+'),
        o('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${t}*`),
        o(
          'MAINVERSION',
          `(${e[a.NUMERICIDENTIFIER]})\\.(${e[a.NUMERICIDENTIFIER]})\\.(${e[a.NUMERICIDENTIFIER]})`,
        ),
        o(
          'MAINVERSIONLOOSE',
          `(${e[a.NUMERICIDENTIFIERLOOSE]})\\.(${e[a.NUMERICIDENTIFIERLOOSE]})\\.(${e[a.NUMERICIDENTIFIERLOOSE]})`,
        ),
        o('PRERELEASEIDENTIFIER', `(?:${e[a.NUMERICIDENTIFIER]}|${e[a.NONNUMERICIDENTIFIER]})`),
        o(
          'PRERELEASEIDENTIFIERLOOSE',
          `(?:${e[a.NUMERICIDENTIFIERLOOSE]}|${e[a.NONNUMERICIDENTIFIER]})`,
        ),
        o('PRERELEASE', `(?:-(${e[a.PRERELEASEIDENTIFIER]}(?:\\.${e[a.PRERELEASEIDENTIFIER]})*))`),
        o(
          'PRERELEASELOOSE',
          `(?:-?(${e[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[a.PRERELEASEIDENTIFIERLOOSE]})*))`,
        ),
        o('BUILDIDENTIFIER', `${t}+`),
        o('BUILD', `(?:\\+(${e[a.BUILDIDENTIFIER]}(?:\\.${e[a.BUILDIDENTIFIER]})*))`),
        o('FULLPLAIN', `v?${e[a.MAINVERSION]}${e[a.PRERELEASE]}?${e[a.BUILD]}?`),
        o('FULL', `^${e[a.FULLPLAIN]}$`),
        o('LOOSEPLAIN', `[v=\\s]*${e[a.MAINVERSIONLOOSE]}${e[a.PRERELEASELOOSE]}?${e[a.BUILD]}?`),
        o('LOOSE', `^${e[a.LOOSEPLAIN]}$`),
        o('GTLT', '((?:<|>)?=?)'),
        o('XRANGEIDENTIFIERLOOSE', `${e[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        o('XRANGEIDENTIFIER', `${e[a.NUMERICIDENTIFIER]}|x|X|\\*`),
        o(
          'XRANGEPLAIN',
          `[v=\\s]*(${e[a.XRANGEIDENTIFIER]})(?:\\.(${e[a.XRANGEIDENTIFIER]})(?:\\.(${e[a.XRANGEIDENTIFIER]})(?:${e[a.PRERELEASE]})?${e[a.BUILD]}?)?)?`,
        ),
        o(
          'XRANGEPLAINLOOSE',
          `[v=\\s]*(${e[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[a.XRANGEIDENTIFIERLOOSE]})(?:${e[a.PRERELEASELOOSE]})?${e[a.BUILD]}?)?)?`,
        ),
        o('XRANGE', `^${e[a.GTLT]}\\s*${e[a.XRANGEPLAIN]}$`),
        o('XRANGELOOSE', `^${e[a.GTLT]}\\s*${e[a.XRANGEPLAINLOOSE]}$`),
        o('COERCEPLAIN', `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),
        o('COERCE', `${e[a.COERCEPLAIN]}(?:$|[^\\d])`),
        o('COERCEFULL', e[a.COERCEPLAIN] + `(?:${e[a.PRERELEASE]})?(?:${e[a.BUILD]})?(?:$|[^\\d])`),
        o('COERCERTL', e[a.COERCE], !0),
        o('COERCERTLFULL', e[a.COERCEFULL], !0),
        o('LONETILDE', '(?:~>?)'),
        o('TILDETRIM', `(\\s*)${e[a.LONETILDE]}\\s+`, !0),
        (c.tildeTrimReplace = '$1~'),
        o('TILDE', `^${e[a.LONETILDE]}${e[a.XRANGEPLAIN]}$`),
        o('TILDELOOSE', `^${e[a.LONETILDE]}${e[a.XRANGEPLAINLOOSE]}$`),
        o('LONECARET', '(?:\\^)'),
        o('CARETTRIM', `(\\s*)${e[a.LONECARET]}\\s+`, !0),
        (c.caretTrimReplace = '$1^'),
        o('CARET', `^${e[a.LONECARET]}${e[a.XRANGEPLAIN]}$`),
        o('CARETLOOSE', `^${e[a.LONECARET]}${e[a.XRANGEPLAINLOOSE]}$`),
        o('COMPARATORLOOSE', `^${e[a.GTLT]}\\s*(${e[a.LOOSEPLAIN]})$|^$`),
        o('COMPARATOR', `^${e[a.GTLT]}\\s*(${e[a.FULLPLAIN]})$|^$`),
        o('COMPARATORTRIM', `(\\s*)${e[a.GTLT]}\\s*(${e[a.LOOSEPLAIN]}|${e[a.XRANGEPLAIN]})`, !0),
        (c.comparatorTrimReplace = '$1$2$3'),
        o('HYPHENRANGE', `^\\s*(${e[a.XRANGEPLAIN]})\\s+-\\s+(${e[a.XRANGEPLAIN]})\\s*$`),
        o(
          'HYPHENRANGELOOSE',
          `^\\s*(${e[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[a.XRANGEPLAINLOOSE]})\\s*$`,
        ),
        o('STAR', '(<|>)?=?\\s*\\*'),
        o('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$'),
        o('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
    },
  }),
  Ee = O({
    '../../node_modules/semver/internal/parse-options.js'(c, u) {
      var r = Object.freeze({ loose: !0 }),
        i = Object.freeze({}),
        n = (s) => (s ? (typeof s != 'object' ? r : s) : i);
      u.exports = n;
    },
  }),
  Ie = O({
    '../../node_modules/semver/internal/identifiers.js'(c, u) {
      var r = /^[0-9]+$/,
        i = (s, p) => {
          let h = r.test(s),
            e = r.test(p);
          return (
            h && e && ((s = +s), (p = +p)),
            s === p ? 0 : h && !e ? -1 : e && !h ? 1 : s < p ? -1 : 1
          );
        },
        n = (s, p) => i(p, s);
      u.exports = { compareIdentifiers: i, rcompareIdentifiers: n };
    },
  }),
  q = O({
    '../../node_modules/semver/classes/semver.js'(c, u) {
      var r = Z(),
        { MAX_LENGTH: i, MAX_SAFE_INTEGER: n } = Q(),
        { safeRe: s, safeSrc: p, t: h } = z(),
        e = Ee(),
        { compareIdentifiers: f } = Ie(),
        a = class b {
          constructor(t, l) {
            if (((l = e(l)), t instanceof b)) {
              if (t.loose === !!l.loose && t.includePrerelease === !!l.includePrerelease) return t;
              t = t.version;
            } else if (typeof t != 'string')
              throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
            if (t.length > i) throw new TypeError(`version is longer than ${i} characters`);
            r('SemVer', t, l),
              (this.options = l),
              (this.loose = !!l.loose),
              (this.includePrerelease = !!l.includePrerelease);
            let E = t.trim().match(l.loose ? s[h.LOOSE] : s[h.FULL]);
            if (!E) throw new TypeError(`Invalid Version: ${t}`);
            if (
              ((this.raw = t),
              (this.major = +E[1]),
              (this.minor = +E[2]),
              (this.patch = +E[3]),
              this.major > n || this.major < 0)
            )
              throw new TypeError('Invalid major version');
            if (this.minor > n || this.minor < 0) throw new TypeError('Invalid minor version');
            if (this.patch > n || this.patch < 0) throw new TypeError('Invalid patch version');
            E[4]
              ? (this.prerelease = E[4].split('.').map((o) => {
                  if (/^[0-9]+$/.test(o)) {
                    let I = +o;
                    if (I >= 0 && I < n) return I;
                  }
                  return o;
                }))
              : (this.prerelease = []),
              (this.build = E[5] ? E[5].split('.') : []),
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
            if ((r('SemVer.compare', this.version, this.options, t), !(t instanceof b))) {
              if (typeof t == 'string' && t === this.version) return 0;
              t = new b(t, this.options);
            }
            return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
          }
          compareMain(t) {
            return (
              t instanceof b || (t = new b(t, this.options)),
              f(this.major, t.major) || f(this.minor, t.minor) || f(this.patch, t.patch)
            );
          }
          comparePre(t) {
            if (
              (t instanceof b || (t = new b(t, this.options)),
              this.prerelease.length && !t.prerelease.length)
            )
              return -1;
            if (!this.prerelease.length && t.prerelease.length) return 1;
            if (!this.prerelease.length && !t.prerelease.length) return 0;
            let l = 0;
            do {
              let E = this.prerelease[l],
                o = t.prerelease[l];
              if ((r('prerelease compare', l, E, o), E === void 0 && o === void 0)) return 0;
              if (o === void 0) return 1;
              if (E === void 0) return -1;
              if (E !== o) return f(E, o);
            } while (++l);
          }
          compareBuild(t) {
            t instanceof b || (t = new b(t, this.options));
            let l = 0;
            do {
              let E = this.build[l],
                o = t.build[l];
              if ((r('build compare', l, E, o), E === void 0 && o === void 0)) return 0;
              if (o === void 0) return 1;
              if (E === void 0) return -1;
              if (E !== o) return f(E, o);
            } while (++l);
          }
          inc(t, l, E) {
            if (t.startsWith('pre')) {
              if (!l && E === !1)
                throw new Error('invalid increment argument: identifier is empty');
              if (l) {
                let o = new RegExp(
                    `^${this.options.loose ? p[h.PRERELEASELOOSE] : p[h.PRERELEASE]}$`,
                  ),
                  I = `-${l}`.match(o);
                if (!I || I[1] !== l) throw new Error(`invalid identifier: ${l}`);
              }
            }
            switch (t) {
              case 'premajor':
                (this.prerelease.length = 0),
                  (this.patch = 0),
                  (this.minor = 0),
                  this.major++,
                  this.inc('pre', l, E);
                break;
              case 'preminor':
                (this.prerelease.length = 0), (this.patch = 0), this.minor++, this.inc('pre', l, E);
                break;
              case 'prepatch':
                (this.prerelease.length = 0), this.inc('patch', l, E), this.inc('pre', l, E);
                break;
              case 'prerelease':
                this.prerelease.length === 0 && this.inc('patch', l, E), this.inc('pre', l, E);
                break;
              case 'release':
                if (this.prerelease.length === 0)
                  throw new Error(`version ${this.raw} is not a prerelease`);
                this.prerelease.length = 0;
                break;
              case 'major':
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) &&
                  this.major++,
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
                let o = Number(E) ? 1 : 0;
                if (this.prerelease.length === 0) this.prerelease = [o];
                else {
                  let I = this.prerelease.length;
                  for (; --I >= 0; )
                    typeof this.prerelease[I] == 'number' && (this.prerelease[I]++, (I = -2));
                  if (I === -1) {
                    if (l === this.prerelease.join('.') && E === !1)
                      throw new Error('invalid increment argument: identifier already exists');
                    this.prerelease.push(o);
                  }
                }
                if (l) {
                  let I = [l, o];
                  E === !1 && (I = [l]),
                    f(this.prerelease[0], l) === 0
                      ? isNaN(this.prerelease[1]) && (this.prerelease = I)
                      : (this.prerelease = I);
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
      u.exports = a;
    },
  }),
  H = O({
    '../../node_modules/semver/functions/parse.js'(c, u) {
      var r = q(),
        i = (n, s, p = !1) => {
          if (n instanceof r) return n;
          try {
            return new r(n, s);
          } catch (h) {
            if (!p) return null;
            throw h;
          }
        };
      u.exports = i;
    },
  }),
  xe = O({
    '../../node_modules/semver/functions/valid.js'(c, u) {
      var r = H(),
        i = (n, s) => {
          let p = r(n, s);
          return p ? p.version : null;
        };
      u.exports = i;
    },
  }),
  je = O({
    '../../node_modules/semver/functions/clean.js'(c, u) {
      var r = H(),
        i = (n, s) => {
          let p = r(n.trim().replace(/^[=v]+/, ''), s);
          return p ? p.version : null;
        };
      u.exports = i;
    },
  }),
  Pe = O({
    '../../node_modules/semver/functions/inc.js'(c, u) {
      var r = q(),
        i = (n, s, p, h, e) => {
          typeof p == 'string' && ((e = h), (h = p), (p = void 0));
          try {
            return new r(n instanceof r ? n.version : n, p).inc(s, h, e).version;
          } catch {
            return null;
          }
        };
      u.exports = i;
    },
  }),
  Ce = O({
    '../../node_modules/semver/functions/diff.js'(c, u) {
      var r = H(),
        i = (n, s) => {
          let p = r(n, null, !0),
            h = r(s, null, !0),
            e = p.compare(h);
          if (e === 0) return null;
          let f = e > 0,
            a = f ? p : h,
            v = f ? h : p,
            t = !!a.prerelease.length;
          if (v.prerelease.length && !t) {
            if (!v.patch && !v.minor) return 'major';
            if (v.compareMain(a) === 0) return v.minor && !v.patch ? 'minor' : 'patch';
          }
          let l = t ? 'pre' : '';
          return p.major !== h.major
            ? l + 'major'
            : p.minor !== h.minor
              ? l + 'minor'
              : p.patch !== h.patch
                ? l + 'patch'
                : 'prerelease';
        };
      u.exports = i;
    },
  }),
  ye = O({
    '../../node_modules/semver/functions/major.js'(c, u) {
      var r = q(),
        i = (n, s) => new r(n, s).major;
      u.exports = i;
    },
  }),
  De = O({
    '../../node_modules/semver/functions/minor.js'(c, u) {
      var r = q(),
        i = (n, s) => new r(n, s).minor;
      u.exports = i;
    },
  }),
  Ge = O({
    '../../node_modules/semver/functions/patch.js'(c, u) {
      var r = q(),
        i = (n, s) => new r(n, s).patch;
      u.exports = i;
    },
  }),
  qe = O({
    '../../node_modules/semver/functions/prerelease.js'(c, u) {
      var r = H(),
        i = (n, s) => {
          let p = r(n, s);
          return p && p.prerelease.length ? p.prerelease : null;
        };
      u.exports = i;
    },
  }),
  U = O({
    '../../node_modules/semver/functions/compare.js'(c, u) {
      var r = q(),
        i = (n, s, p) => new r(n, p).compare(new r(s, p));
      u.exports = i;
    },
  }),
  Fe = O({
    '../../node_modules/semver/functions/rcompare.js'(c, u) {
      var r = U(),
        i = (n, s, p) => r(s, n, p);
      u.exports = i;
    },
  }),
  Ue = O({
    '../../node_modules/semver/functions/compare-loose.js'(c, u) {
      var r = U(),
        i = (n, s) => r(n, s, !0);
      u.exports = i;
    },
  }),
  ce = O({
    '../../node_modules/semver/functions/compare-build.js'(c, u) {
      var r = q(),
        i = (n, s, p) => {
          let h = new r(n, p),
            e = new r(s, p);
          return h.compare(e) || h.compareBuild(e);
        };
      u.exports = i;
    },
  }),
  Ve = O({
    '../../node_modules/semver/functions/sort.js'(c, u) {
      var r = ce(),
        i = (n, s) => n.sort((p, h) => r(p, h, s));
      u.exports = i;
    },
  }),
  be = O({
    '../../node_modules/semver/functions/rsort.js'(c, u) {
      var r = ce(),
        i = (n, s) => n.sort((p, h) => r(h, p, s));
      u.exports = i;
    },
  }),
  J = O({
    '../../node_modules/semver/functions/gt.js'(c, u) {
      var r = U(),
        i = (n, s, p) => r(n, s, p) > 0;
      u.exports = i;
    },
  }),
  me = O({
    '../../node_modules/semver/functions/lt.js'(c, u) {
      var r = U(),
        i = (n, s, p) => r(n, s, p) < 0;
      u.exports = i;
    },
  }),
  _e = O({
    '../../node_modules/semver/functions/eq.js'(c, u) {
      var r = U(),
        i = (n, s, p) => r(n, s, p) === 0;
      u.exports = i;
    },
  }),
  Le = O({
    '../../node_modules/semver/functions/neq.js'(c, u) {
      var r = U(),
        i = (n, s, p) => r(n, s, p) !== 0;
      u.exports = i;
    },
  }),
  he = O({
    '../../node_modules/semver/functions/gte.js'(c, u) {
      var r = U(),
        i = (n, s, p) => r(n, s, p) >= 0;
      u.exports = i;
    },
  }),
  fe = O({
    '../../node_modules/semver/functions/lte.js'(c, u) {
      var r = U(),
        i = (n, s, p) => r(n, s, p) <= 0;
      u.exports = i;
    },
  }),
  Ne = O({
    '../../node_modules/semver/functions/cmp.js'(c, u) {
      var r = _e(),
        i = Le(),
        n = J(),
        s = he(),
        p = me(),
        h = fe(),
        e = (f, a, v, t) => {
          switch (a) {
            case '===':
              return (
                typeof f == 'object' && (f = f.version),
                typeof v == 'object' && (v = v.version),
                f === v
              );
            case '!==':
              return (
                typeof f == 'object' && (f = f.version),
                typeof v == 'object' && (v = v.version),
                f !== v
              );
            case '':
            case '=':
            case '==':
              return r(f, v, t);
            case '!=':
              return i(f, v, t);
            case '>':
              return n(f, v, t);
            case '>=':
              return s(f, v, t);
            case '<':
              return p(f, v, t);
            case '<=':
              return h(f, v, t);
            default:
              throw new TypeError(`Invalid operator: ${a}`);
          }
        };
      u.exports = e;
    },
  }),
  Xe = O({
    '../../node_modules/semver/functions/coerce.js'(c, u) {
      var r = q(),
        i = H(),
        { safeRe: n, t: s } = z(),
        p = (h, e) => {
          if (h instanceof r) return h;
          if ((typeof h == 'number' && (h = String(h)), typeof h != 'string')) return null;
          e = e || {};
          let f = null;
          if (!e.rtl) f = h.match(e.includePrerelease ? n[s.COERCEFULL] : n[s.COERCE]);
          else {
            let o = e.includePrerelease ? n[s.COERCERTLFULL] : n[s.COERCERTL],
              I;
            for (; (I = o.exec(h)) && (!f || f.index + f[0].length !== h.length); )
              (!f || I.index + I[0].length !== f.index + f[0].length) && (f = I),
                (o.lastIndex = I.index + I[1].length + I[2].length);
            o.lastIndex = -1;
          }
          if (f === null) return null;
          let a = f[2],
            v = f[3] || '0',
            t = f[4] || '0',
            l = e.includePrerelease && f[5] ? `-${f[5]}` : '',
            E = e.includePrerelease && f[6] ? `+${f[6]}` : '';
          return i(`${a}.${v}.${t}${l}${E}`, e);
        };
      u.exports = p;
    },
  }),
  Me = O({
    '../../node_modules/semver/internal/lrucache.js'(c, u) {
      var r = class {
        constructor() {
          (this.max = 1e3), (this.map = new Map());
        }
        get(i) {
          let n = this.map.get(i);
          if (n !== void 0) return this.map.delete(i), this.map.set(i, n), n;
        }
        delete(i) {
          return this.map.delete(i);
        }
        set(i, n) {
          if (!this.delete(i) && n !== void 0) {
            if (this.map.size >= this.max) {
              let s = this.map.keys().next().value;
              this.delete(s);
            }
            this.map.set(i, n);
          }
          return this;
        }
      };
      u.exports = r;
    },
  }),
  V = O({
    '../../node_modules/semver/classes/range.js'(c, u) {
      var r = /\s+/g,
        i = class K {
          constructor(m, _) {
            if (((_ = p(_)), m instanceof K))
              return m.loose === !!_.loose && m.includePrerelease === !!_.includePrerelease
                ? m
                : new K(m.raw, _);
            if (m instanceof h)
              return (this.raw = m.value), (this.set = [[m]]), (this.formatted = void 0), this;
            if (
              ((this.options = _),
              (this.loose = !!_.loose),
              (this.includePrerelease = !!_.includePrerelease),
              (this.raw = m.trim().replace(r, ' ')),
              (this.set = this.raw
                .split('||')
                .map((R) => this.parseRange(R.trim()))
                .filter((R) => R.length)),
              !this.set.length)
            )
              throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
            if (this.set.length > 1) {
              let R = this.set[0];
              if (((this.set = this.set.filter((L) => !T(L[0]))), this.set.length === 0))
                this.set = [R];
              else if (this.set.length > 1) {
                for (let L of this.set)
                  if (L.length === 1 && A(L[0])) {
                    this.set = [L];
                    break;
                  }
              }
            }
            this.formatted = void 0;
          }
          get range() {
            if (this.formatted === void 0) {
              this.formatted = '';
              for (let m = 0; m < this.set.length; m++) {
                m > 0 && (this.formatted += '||');
                let _ = this.set[m];
                for (let R = 0; R < _.length; R++)
                  R > 0 && (this.formatted += ' '), (this.formatted += _[R].toString().trim());
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
          parseRange(m) {
            let _ = ((this.options.includePrerelease && o) | (this.options.loose && I)) + ':' + m,
              R = s.get(_);
            if (R) return R;
            let L = this.options.loose,
              $ = L ? a[v.HYPHENRANGELOOSE] : a[v.HYPHENRANGE];
            (m = m.replace($, ae(this.options.includePrerelease))),
              e('hyphen replace', m),
              (m = m.replace(a[v.COMPARATORTRIM], t)),
              e('comparator trim', m),
              (m = m.replace(a[v.TILDETRIM], l)),
              e('tilde trim', m),
              (m = m.replace(a[v.CARETTRIM], E)),
              e('caret trim', m);
            let N = m
              .split(' ')
              .map((j) => D(j, this.options))
              .join(' ')
              .split(/\s+/)
              .map((j) => se(j, this.options));
            L &&
              (N = N.filter(
                (j) => (
                  e('loose invalid filter', j, this.options), !!j.match(a[v.COMPARATORLOOSE])
                ),
              )),
              e('range list', N);
            let w = new Map(),
              g = N.map((j) => new h(j, this.options));
            for (let j of g) {
              if (T(j)) return [j];
              w.set(j.value, j);
            }
            w.size > 1 && w.has('') && w.delete('');
            let x = [...w.values()];
            return s.set(_, x), x;
          }
          intersects(m, _) {
            if (!(m instanceof K)) throw new TypeError('a Range is required');
            return this.set.some(
              (R) =>
                y(R, _) &&
                m.set.some((L) => y(L, _) && R.every(($) => L.every((N) => $.intersects(N, _)))),
            );
          }
          test(m) {
            if (!m) return !1;
            if (typeof m == 'string')
              try {
                m = new f(m, this.options);
              } catch {
                return !1;
              }
            for (let _ = 0; _ < this.set.length; _++)
              if (ie(this.set[_], m, this.options)) return !0;
            return !1;
          }
        };
      u.exports = i;
      var n = Me(),
        s = new n(),
        p = Ee(),
        h = ee(),
        e = Z(),
        f = q(),
        {
          safeRe: a,
          t: v,
          comparatorTrimReplace: t,
          tildeTrimReplace: l,
          caretTrimReplace: E,
        } = z(),
        { FLAG_INCLUDE_PRERELEASE: o, FLAG_LOOSE: I } = Q(),
        T = (d) => d.value === '<0.0.0-0',
        A = (d) => d.value === '',
        y = (d, m) => {
          let _ = !0,
            R = d.slice(),
            L = R.pop();
          for (; _ && R.length; ) (_ = R.every(($) => L.intersects($, m))), (L = R.pop());
          return _;
        },
        D = (d, m) => (
          e('comp', d, m),
          (d = C(d, m)),
          e('caret', d),
          (d = X(d, m)),
          e('tildes', d),
          (d = S(d, m)),
          e('xrange', d),
          (d = te(d, m)),
          e('stars', d),
          d
        ),
        P = (d) => !d || d.toLowerCase() === 'x' || d === '*',
        X = (d, m) =>
          d
            .trim()
            .split(/\s+/)
            .map((_) => F(_, m))
            .join(' '),
        F = (d, m) => {
          let _ = m.loose ? a[v.TILDELOOSE] : a[v.TILDE];
          return d.replace(_, (R, L, $, N, w) => {
            e('tilde', d, R, L, $, N, w);
            let g;
            return (
              P(L)
                ? (g = '')
                : P($)
                  ? (g = `>=${L}.0.0 <${+L + 1}.0.0-0`)
                  : P(N)
                    ? (g = `>=${L}.${$}.0 <${L}.${+$ + 1}.0-0`)
                    : w
                      ? (e('replaceTilde pr', w), (g = `>=${L}.${$}.${N}-${w} <${L}.${+$ + 1}.0-0`))
                      : (g = `>=${L}.${$}.${N} <${L}.${+$ + 1}.0-0`),
              e('tilde return', g),
              g
            );
          });
        },
        C = (d, m) =>
          d
            .trim()
            .split(/\s+/)
            .map((_) => G(_, m))
            .join(' '),
        G = (d, m) => {
          e('caret', d, m);
          let _ = m.loose ? a[v.CARETLOOSE] : a[v.CARET],
            R = m.includePrerelease ? '-0' : '';
          return d.replace(_, (L, $, N, w, g) => {
            e('caret', d, L, $, N, w, g);
            let x;
            return (
              P($)
                ? (x = '')
                : P(N)
                  ? (x = `>=${$}.0.0${R} <${+$ + 1}.0.0-0`)
                  : P(w)
                    ? $ === '0'
                      ? (x = `>=${$}.${N}.0${R} <${$}.${+N + 1}.0-0`)
                      : (x = `>=${$}.${N}.0${R} <${+$ + 1}.0.0-0`)
                    : g
                      ? (e('replaceCaret pr', g),
                        $ === '0'
                          ? N === '0'
                            ? (x = `>=${$}.${N}.${w}-${g} <${$}.${N}.${+w + 1}-0`)
                            : (x = `>=${$}.${N}.${w}-${g} <${$}.${+N + 1}.0-0`)
                          : (x = `>=${$}.${N}.${w}-${g} <${+$ + 1}.0.0-0`))
                      : (e('no pr'),
                        $ === '0'
                          ? N === '0'
                            ? (x = `>=${$}.${N}.${w}${R} <${$}.${N}.${+w + 1}-0`)
                            : (x = `>=${$}.${N}.${w}${R} <${$}.${+N + 1}.0-0`)
                          : (x = `>=${$}.${N}.${w} <${+$ + 1}.0.0-0`)),
              e('caret return', x),
              x
            );
          });
        },
        S = (d, m) => (
          e('replaceXRanges', d, m),
          d
            .split(/\s+/)
            .map((_) => W(_, m))
            .join(' ')
        ),
        W = (d, m) => {
          d = d.trim();
          let _ = m.loose ? a[v.XRANGELOOSE] : a[v.XRANGE];
          return d.replace(_, (R, L, $, N, w, g) => {
            e('xRange', d, R, L, $, N, w, g);
            let x = P($),
              j = x || P(N),
              k = j || P(w),
              B = k;
            return (
              L === '=' && B && (L = ''),
              (g = m.includePrerelease ? '-0' : ''),
              x
                ? L === '>' || L === '<'
                  ? (R = '<0.0.0-0')
                  : (R = '*')
                : L && B
                  ? (j && (N = 0),
                    (w = 0),
                    L === '>'
                      ? ((L = '>='), j ? (($ = +$ + 1), (N = 0), (w = 0)) : ((N = +N + 1), (w = 0)))
                      : L === '<=' && ((L = '<'), j ? ($ = +$ + 1) : (N = +N + 1)),
                    L === '<' && (g = '-0'),
                    (R = `${L + $}.${N}.${w}${g}`))
                  : j
                    ? (R = `>=${$}.0.0${g} <${+$ + 1}.0.0-0`)
                    : k && (R = `>=${$}.${N}.0${g} <${$}.${+N + 1}.0-0`),
              e('xRange return', R),
              R
            );
          });
        },
        te = (d, m) => (e('replaceStars', d, m), d.trim().replace(a[v.STAR], '')),
        se = (d, m) => (
          e('replaceGTE0', d, m), d.trim().replace(a[m.includePrerelease ? v.GTE0PRE : v.GTE0], '')
        ),
        ae = (d) => (m, _, R, L, $, N, w, g, x, j, k, B) => (
          P(R)
            ? (_ = '')
            : P(L)
              ? (_ = `>=${R}.0.0${d ? '-0' : ''}`)
              : P($)
                ? (_ = `>=${R}.${L}.0${d ? '-0' : ''}`)
                : N
                  ? (_ = `>=${_}`)
                  : (_ = `>=${_}${d ? '-0' : ''}`),
          P(x)
            ? (g = '')
            : P(j)
              ? (g = `<${+x + 1}.0.0-0`)
              : P(k)
                ? (g = `<${x}.${+j + 1}.0-0`)
                : B
                  ? (g = `<=${x}.${j}.${k}-${B}`)
                  : d
                    ? (g = `<${x}.${j}.${+k + 1}-0`)
                    : (g = `<=${g}`),
          `${_} ${g}`.trim()
        ),
        ie = (d, m, _) => {
          for (let R = 0; R < d.length; R++) if (!d[R].test(m)) return !1;
          if (m.prerelease.length && !_.includePrerelease) {
            for (let R = 0; R < d.length; R++)
              if ((e(d[R].semver), d[R].semver !== h.ANY && d[R].semver.prerelease.length > 0)) {
                let L = d[R].semver;
                if (L.major === m.major && L.minor === m.minor && L.patch === m.patch) return !0;
              }
            return !1;
          }
          return !0;
        };
    },
  }),
  ee = O({
    '../../node_modules/semver/classes/comparator.js'(c, u) {
      var r = Symbol('SemVer ANY'),
        i = class oe {
          static get ANY() {
            return r;
          }
          constructor(t, l) {
            if (((l = n(l)), t instanceof oe)) {
              if (t.loose === !!l.loose) return t;
              t = t.value;
            }
            (t = t.trim().split(/\s+/).join(' ')),
              e('comparator', t, l),
              (this.options = l),
              (this.loose = !!l.loose),
              this.parse(t),
              this.semver === r
                ? (this.value = '')
                : (this.value = this.operator + this.semver.version),
              e('comp', this);
          }
          parse(t) {
            let l = this.options.loose ? s[p.COMPARATORLOOSE] : s[p.COMPARATOR],
              E = t.match(l);
            if (!E) throw new TypeError(`Invalid comparator: ${t}`);
            (this.operator = E[1] !== void 0 ? E[1] : ''),
              this.operator === '=' && (this.operator = ''),
              E[2] ? (this.semver = new f(E[2], this.options.loose)) : (this.semver = r);
          }
          toString() {
            return this.value;
          }
          test(t) {
            if ((e('Comparator.test', t, this.options.loose), this.semver === r || t === r))
              return !0;
            if (typeof t == 'string')
              try {
                t = new f(t, this.options);
              } catch {
                return !1;
              }
            return h(t, this.operator, this.semver, this.options);
          }
          intersects(t, l) {
            if (!(t instanceof oe)) throw new TypeError('a Comparator is required');
            return this.operator === ''
              ? this.value === ''
                ? !0
                : new a(t.value, l).test(this.value)
              : t.operator === ''
                ? t.value === ''
                  ? !0
                  : new a(this.value, l).test(t.semver)
                : ((l = n(l)),
                  (l.includePrerelease && (this.value === '<0.0.0-0' || t.value === '<0.0.0-0')) ||
                  (!l.includePrerelease &&
                    (this.value.startsWith('<0.0.0') || t.value.startsWith('<0.0.0')))
                    ? !1
                    : !!(
                        (this.operator.startsWith('>') && t.operator.startsWith('>')) ||
                        (this.operator.startsWith('<') && t.operator.startsWith('<')) ||
                        (this.semver.version === t.semver.version &&
                          this.operator.includes('=') &&
                          t.operator.includes('=')) ||
                        (h(this.semver, '<', t.semver, l) &&
                          this.operator.startsWith('>') &&
                          t.operator.startsWith('<')) ||
                        (h(this.semver, '>', t.semver, l) &&
                          this.operator.startsWith('<') &&
                          t.operator.startsWith('>'))
                      ));
          }
        };
      u.exports = i;
      var n = Ee(),
        { safeRe: s, t: p } = z(),
        h = Ne(),
        e = Z(),
        f = q(),
        a = V();
    },
  }),
  re = O({
    '../../node_modules/semver/functions/satisfies.js'(c, u) {
      var r = V(),
        i = (n, s, p) => {
          try {
            s = new r(s, p);
          } catch {
            return !1;
          }
          return s.test(n);
        };
      u.exports = i;
    },
  }),
  ke = O({
    '../../node_modules/semver/ranges/to-comparators.js'(c, u) {
      var r = V(),
        i = (n, s) =>
          new r(n, s).set.map((p) =>
            p
              .map((h) => h.value)
              .join(' ')
              .trim()
              .split(' '),
          );
      u.exports = i;
    },
  }),
  He = O({
    '../../node_modules/semver/ranges/max-satisfying.js'(c, u) {
      var r = q(),
        i = V(),
        n = (s, p, h) => {
          let e = null,
            f = null,
            a = null;
          try {
            a = new i(p, h);
          } catch {
            return null;
          }
          return (
            s.forEach((v) => {
              a.test(v) && (!e || f.compare(v) === -1) && ((e = v), (f = new r(e, h)));
            }),
            e
          );
        };
      u.exports = n;
    },
  }),
  We = O({
    '../../node_modules/semver/ranges/min-satisfying.js'(c, u) {
      var r = q(),
        i = V(),
        n = (s, p, h) => {
          let e = null,
            f = null,
            a = null;
          try {
            a = new i(p, h);
          } catch {
            return null;
          }
          return (
            s.forEach((v) => {
              a.test(v) && (!e || f.compare(v) === 1) && ((e = v), (f = new r(e, h)));
            }),
            e
          );
        };
      u.exports = n;
    },
  }),
  Be = O({
    '../../node_modules/semver/ranges/min-version.js'(c, u) {
      var r = q(),
        i = V(),
        n = J(),
        s = (p, h) => {
          p = new i(p, h);
          let e = new r('0.0.0');
          if (p.test(e) || ((e = new r('0.0.0-0')), p.test(e))) return e;
          e = null;
          for (let f = 0; f < p.set.length; ++f) {
            let a = p.set[f],
              v = null;
            a.forEach((t) => {
              let l = new r(t.semver.version);
              switch (t.operator) {
                case '>':
                  l.prerelease.length === 0 ? l.patch++ : l.prerelease.push(0),
                    (l.raw = l.format());
                case '':
                case '>=':
                  (!v || n(l, v)) && (v = l);
                  break;
                case '<':
                case '<=':
                  break;
                default:
                  throw new Error(`Unexpected operation: ${t.operator}`);
              }
            }),
              v && (!e || n(e, v)) && (e = v);
          }
          return e && p.test(e) ? e : null;
        };
      u.exports = s;
    },
  }),
  Ye = O({
    '../../node_modules/semver/ranges/valid.js'(c, u) {
      var r = V(),
        i = (n, s) => {
          try {
            return new r(n, s).range || '*';
          } catch {
            return null;
          }
        };
      u.exports = i;
    },
  }),
  ve = O({
    '../../node_modules/semver/ranges/outside.js'(c, u) {
      var r = q(),
        i = ee(),
        { ANY: n } = i,
        s = V(),
        p = re(),
        h = J(),
        e = me(),
        f = fe(),
        a = he(),
        v = (t, l, E, o) => {
          (t = new r(t, o)), (l = new s(l, o));
          let I, T, A, y, D;
          switch (E) {
            case '>':
              (I = h), (T = f), (A = e), (y = '>'), (D = '>=');
              break;
            case '<':
              (I = e), (T = a), (A = h), (y = '<'), (D = '<=');
              break;
            default:
              throw new TypeError('Must provide a hilo val of "<" or ">"');
          }
          if (p(t, l, o)) return !1;
          for (let P = 0; P < l.set.length; ++P) {
            let X = l.set[P],
              F = null,
              C = null;
            if (
              (X.forEach((G) => {
                G.semver === n && (G = new i('>=0.0.0')),
                  (F = F || G),
                  (C = C || G),
                  I(G.semver, F.semver, o) ? (F = G) : A(G.semver, C.semver, o) && (C = G);
              }),
              F.operator === y ||
                F.operator === D ||
                ((!C.operator || C.operator === y) && T(t, C.semver)) ||
                (C.operator === D && A(t, C.semver)))
            )
              return !1;
          }
          return !0;
        };
      u.exports = v;
    },
  }),
  ze = O({
    '../../node_modules/semver/ranges/gtr.js'(c, u) {
      var r = ve(),
        i = (n, s, p) => r(n, s, '>', p);
      u.exports = i;
    },
  }),
  Ke = O({
    '../../node_modules/semver/ranges/ltr.js'(c, u) {
      var r = ve(),
        i = (n, s, p) => r(n, s, '<', p);
      u.exports = i;
    },
  }),
  Qe = O({
    '../../node_modules/semver/ranges/intersects.js'(c, u) {
      var r = V(),
        i = (n, s, p) => ((n = new r(n, p)), (s = new r(s, p)), n.intersects(s, p));
      u.exports = i;
    },
  }),
  Ze = O({
    '../../node_modules/semver/ranges/simplify.js'(c, u) {
      var r = re(),
        i = U();
      u.exports = (n, s, p) => {
        let h = [],
          e = null,
          f = null,
          a = n.sort((E, o) => i(E, o, p));
        for (let E of a)
          r(E, s, p) ? ((f = E), e || (e = E)) : (f && h.push([e, f]), (f = null), (e = null));
        e && h.push([e, null]);
        let v = [];
        for (let [E, o] of h)
          E === o
            ? v.push(E)
            : !o && E === a[0]
              ? v.push('*')
              : o
                ? E === a[0]
                  ? v.push(`<=${o}`)
                  : v.push(`${E} - ${o}`)
                : v.push(`>=${E}`);
        let t = v.join(' || '),
          l = typeof s.raw == 'string' ? s.raw : String(s);
        return t.length < l.length ? t : s;
      };
    },
  }),
  Je = O({
    '../../node_modules/semver/ranges/subset.js'(c, u) {
      var r = V(),
        i = ee(),
        { ANY: n } = i,
        s = re(),
        p = U(),
        h = (l, E, o = {}) => {
          if (l === E) return !0;
          (l = new r(l, o)), (E = new r(E, o));
          let I = !1;
          e: for (let T of l.set) {
            for (let A of E.set) {
              let y = a(T, A, o);
              if (((I = I || y !== null), y)) continue e;
            }
            if (I) return !1;
          }
          return !0;
        },
        e = [new i('>=0.0.0-0')],
        f = [new i('>=0.0.0')],
        a = (l, E, o) => {
          if (l === E) return !0;
          if (l.length === 1 && l[0].semver === n) {
            if (E.length === 1 && E[0].semver === n) return !0;
            o.includePrerelease ? (l = e) : (l = f);
          }
          if (E.length === 1 && E[0].semver === n) {
            if (o.includePrerelease) return !0;
            E = f;
          }
          let I = new Set(),
            T,
            A;
          for (let S of l)
            S.operator === '>' || S.operator === '>='
              ? (T = v(T, S, o))
              : S.operator === '<' || S.operator === '<='
                ? (A = t(A, S, o))
                : I.add(S.semver);
          if (I.size > 1) return null;
          let y;
          if (
            T &&
            A &&
            ((y = p(T.semver, A.semver, o)),
            y > 0 || (y === 0 && (T.operator !== '>=' || A.operator !== '<=')))
          )
            return null;
          for (let S of I) {
            if ((T && !s(S, String(T), o)) || (A && !s(S, String(A), o))) return null;
            for (let W of E) if (!s(S, String(W), o)) return !1;
            return !0;
          }
          let D,
            P,
            X,
            F,
            C = A && !o.includePrerelease && A.semver.prerelease.length ? A.semver : !1,
            G = T && !o.includePrerelease && T.semver.prerelease.length ? T.semver : !1;
          C && C.prerelease.length === 1 && A.operator === '<' && C.prerelease[0] === 0 && (C = !1);
          for (let S of E) {
            if (
              ((F = F || S.operator === '>' || S.operator === '>='),
              (X = X || S.operator === '<' || S.operator === '<='),
              T)
            ) {
              if (
                (G &&
                  S.semver.prerelease &&
                  S.semver.prerelease.length &&
                  S.semver.major === G.major &&
                  S.semver.minor === G.minor &&
                  S.semver.patch === G.patch &&
                  (G = !1),
                S.operator === '>' || S.operator === '>=')
              ) {
                if (((D = v(T, S, o)), D === S && D !== T)) return !1;
              } else if (T.operator === '>=' && !s(T.semver, String(S), o)) return !1;
            }
            if (A) {
              if (
                (C &&
                  S.semver.prerelease &&
                  S.semver.prerelease.length &&
                  S.semver.major === C.major &&
                  S.semver.minor === C.minor &&
                  S.semver.patch === C.patch &&
                  (C = !1),
                S.operator === '<' || S.operator === '<=')
              ) {
                if (((P = t(A, S, o)), P === S && P !== A)) return !1;
              } else if (A.operator === '<=' && !s(A.semver, String(S), o)) return !1;
            }
            if (!S.operator && (A || T) && y !== 0) return !1;
          }
          return !((T && X && !A && y !== 0) || (A && F && !T && y !== 0) || G || C);
        },
        v = (l, E, o) => {
          if (!l) return E;
          let I = p(l.semver, E.semver, o);
          return I > 0 ? l : I < 0 || (E.operator === '>' && l.operator === '>=') ? E : l;
        },
        t = (l, E, o) => {
          if (!l) return E;
          let I = p(l.semver, E.semver, o);
          return I < 0 ? l : I > 0 || (E.operator === '<' && l.operator === '<=') ? E : l;
        };
      u.exports = h;
    },
  }),
  er = O({
    '../../node_modules/semver/index.js'(c, u) {
      var r = z(),
        i = Q(),
        n = q(),
        s = Ie(),
        p = H(),
        h = xe(),
        e = je(),
        f = Pe(),
        a = Ce(),
        v = ye(),
        t = De(),
        l = Ge(),
        E = qe(),
        o = U(),
        I = Fe(),
        T = Ue(),
        A = ce(),
        y = Ve(),
        D = be(),
        P = J(),
        X = me(),
        F = _e(),
        C = Le(),
        G = he(),
        S = fe(),
        W = Ne(),
        te = Xe(),
        se = ee(),
        ae = V(),
        ie = re(),
        d = ke(),
        m = He(),
        _ = We(),
        R = Be(),
        L = Ye(),
        $ = ve(),
        N = ze(),
        w = Ke(),
        g = Qe(),
        x = Ze(),
        j = Je();
      u.exports = {
        parse: p,
        valid: h,
        clean: e,
        inc: f,
        diff: a,
        major: v,
        minor: t,
        patch: l,
        prerelease: E,
        compare: o,
        rcompare: I,
        compareLoose: T,
        compareBuild: A,
        sort: y,
        rsort: D,
        gt: P,
        lt: X,
        eq: F,
        neq: C,
        gte: G,
        lte: S,
        cmp: W,
        coerce: te,
        Comparator: se,
        Range: ae,
        satisfies: ie,
        toComparators: d,
        maxSatisfying: m,
        minSatisfying: _,
        minVersion: R,
        validRange: L,
        outside: $,
        gtr: N,
        ltr: w,
        intersects: g,
        simplifyRange: x,
        subset: j,
        SemVer: n,
        re: r.re,
        src: r.src,
        tokens: r.t,
        SEMVER_SPEC_VERSION: i.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: i.RELEASE_TYPES,
        compareIdentifiers: s.compareIdentifiers,
        rcompareIdentifiers: s.rcompareIdentifiers,
      };
    },
  }),
  rr = {};
Ae(rr, {
  beforeAll: () => Er,
  decorators: () => pr,
  mount: () => or,
  parameters: () => ur,
  render: () => ar,
  renderToCanvas: () => lr,
});
var de = Te(er()),
  tr = { ...ge };
function Re(c) {
  globalThis.IS_REACT_ACT_ENVIRONMENT = c;
}
function sr() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var Oe = async () => {
    if (typeof tr.act != 'function') {
      let c = await pe(
        () => import('./test-utils-DMevpjHC.js').then((u) => u.t),
        __vite__mapDeps([0, 1]),
        import.meta.url,
      );
      c?.default?.act ?? c.act;
    }
    return (c) => c();
  },
  ar = (c, u) => {
    let { id: r, component: i } = u;
    if (!i)
      throw new Error(
        `Unable to render story ${r} as the component annotation is missing from the default export`,
      );
    return Y.createElement(i, { ...c });
  },
  { FRAMEWORK_OPTIONS: ir } = we,
  nr = class extends M.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidMount() {
      let { hasError: c } = this.state,
        { showMain: u } = this.props;
      c || u();
    }
    componentDidCatch(c) {
      let { showException: u } = this.props;
      u(c);
    }
    render() {
      let { hasError: c } = this.state,
        { children: u } = this.props;
      return c ? null : u;
    }
  },
  $e = ir?.strictMode ? M.StrictMode : M.Fragment,
  ue = [],
  le = !1,
  Se = async () => {
    if (le || ue.length === 0) return;
    le = !0;
    let c = ue.shift();
    c && (await c()), (le = !1), Se();
  };
async function lr(
  { storyContext: c, unboundStoryFn: u, showMain: r, showException: i, forceRemount: n },
  s,
) {
  let { renderElement: p, unmountElement: h } = await pe(
      async () => {
        const { renderElement: t, unmountElement: l } = await import('./react-18-C7NcDMCS.js');
        return { renderElement: t, unmountElement: l };
      },
      __vite__mapDeps([2, 1, 3]),
      import.meta.url,
    ),
    e = u,
    f = c.parameters.__isPortableStory
      ? Y.createElement(e, { ...c })
      : Y.createElement(nr, { showMain: r, showException: i }, Y.createElement(e, { ...c })),
    a = $e ? Y.createElement($e, null, f) : f;
  n && h(s);
  let v = await Oe();
  return (
    await new Promise(async (t, l) => {
      ue.push(async () => {
        try {
          await v(async () => {
            await p(a, s, c?.parameters?.react?.rootOptions);
          }),
            t();
        } catch (E) {
          l(E);
        }
      }),
        Se();
    }),
    async () => {
      await v(() => {
        h(s);
      });
    }
  );
}
var or = (c) => async (u) => (
    u != null && (c.originalStoryFn = () => u), await c.renderToCanvas(), c.canvas
  ),
  ur = { renderer: 'react' },
  pr = [
    (c, u) => {
      if (!u.parameters?.react?.rsc) return c();
      let r = de.default.major(M.version),
        i = de.default.minor(M.version);
      if (r < 18 || (r === 18 && i < 3))
        throw new Error('React Server Components require React >= 18.3');
      return M.createElement(M.Suspense, null, c());
    },
  ],
  Er = async () => {
    try {
      let { configure: c } = await pe(
          async () => {
            const { configure: r } = await Promise.resolve().then(() => mr);
            return { configure: r };
          },
          void 0,
          import.meta.url,
        ),
        u = await Oe();
      c({
        unstable_advanceTimersWrapper: (r) => u(r),
        asyncWrapper: async (r) => {
          let i = sr();
          Re(!1);
          try {
            let n = await r();
            return (
              await new Promise((s) => {
                setTimeout(() => {
                  s();
                }, 0),
                  cr() && jest.advanceTimersByTime(0);
              }),
              n
            );
          } finally {
            Re(i);
          }
        },
        eventWrapper: (r) => {
          let i;
          return u(() => ((i = r()), i)), i;
        },
      });
    } catch {}
  };
function cr() {
  return typeof jest < 'u' && jest !== null
    ? setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    : !1;
}
const mr = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: 'Module' }),
);
export {
  Er as beforeAll,
  pr as decorators,
  or as mount,
  ur as parameters,
  ar as render,
  lr as renderToCanvas,
};
