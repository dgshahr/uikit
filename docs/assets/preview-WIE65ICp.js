let d;
const b = new Uint8Array(16);
function x() {
  if (
    !d &&
    ((d = typeof crypto < 'u' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)), !d)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
    );
  return d(b);
}
const i = [];
for (let e = 0; e < 256; ++e) i.push((e + 256).toString(16).slice(1));
function S(e, t = 0) {
  return (
    i[e[t + 0]] +
    i[e[t + 1]] +
    i[e[t + 2]] +
    i[e[t + 3]] +
    '-' +
    i[e[t + 4]] +
    i[e[t + 5]] +
    '-' +
    i[e[t + 6]] +
    i[e[t + 7]] +
    '-' +
    i[e[t + 8]] +
    i[e[t + 9]] +
    '-' +
    i[e[t + 10]] +
    i[e[t + 11]] +
    i[e[t + 12]] +
    i[e[t + 13]] +
    i[e[t + 14]] +
    i[e[t + 15]]
  );
}
const v = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  y = { randomUUID: v };
function A(e, t, n) {
  if (y.randomUUID && !e) return y.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || x)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), S(r);
}
const { addons: D } = __STORYBOOK_MODULE_PREVIEW_API__,
  { ImplicitActionsDuringRendering: w } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,
  { global: p } = __STORYBOOK_MODULE_GLOBAL__;
var I = 'storybook/actions',
  f = `${I}/action-event`,
  U = { depth: 10, clearOnStoryChange: !0, limit: 50 },
  h = (e, t) => {
    let n = Object.getPrototypeOf(e);
    return !n || t(n) ? n : h(n, t);
  },
  j = (e) =>
    !!(
      typeof e == 'object' &&
      e &&
      h(e, (t) => /^Synthetic(?:Base)?Event$/.test(t.constructor.name)) &&
      typeof e.persist == 'function'
    ),
  V = (e) => {
    if (j(e)) {
      let t = Object.create(e.constructor.prototype, Object.getOwnPropertyDescriptors(e));
      t.persist();
      let n = Object.getOwnPropertyDescriptor(t, 'view'),
        r = n?.value;
      return (
        typeof r == 'object' &&
          r?.constructor.name === 'Window' &&
          Object.defineProperty(t, 'view', { ...n, value: Object.create(r.constructor.prototype) }),
        t
      );
    }
    return e;
  },
  C = () =>
    typeof crypto == 'object' && typeof crypto.getRandomValues == 'function'
      ? A()
      : Date.now().toString(36) + Math.random().toString(36).substring(2);
function _(e, t = {}) {
  let n = { ...U, ...t },
    r = function (...s) {
      if (t.implicit) {
        let g = (
          '__STORYBOOK_PREVIEW__' in p ? p.__STORYBOOK_PREVIEW__ : void 0
        )?.storyRenders.find((l) => l.phase === 'playing' || l.phase === 'rendering');
        if (g) {
          let l = !globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,
            O = new w({ phase: g.phase, name: e, deprecated: l });
          if (l) console.warn(O);
          else throw O;
        }
      }
      let o = D.getChannel(),
        c = C(),
        a = 5,
        u = s.map(V),
        E = s.length > 1 ? u : u[0],
        T = {
          id: c,
          count: 0,
          data: { name: e, args: E },
          options: { ...n, maxDepth: a + (n.depth || 3), allowFunction: n.allowFunction || !1 },
        };
      o.emit(f, T);
    };
  return (r.isAction = !0), (r.implicit = t.implicit), r;
}
var m = (e, t) => typeof t[e] > 'u' && !(e in t),
  K = (e) => {
    let {
      initialArgs: t,
      argTypes: n,
      id: r,
      parameters: { actions: s },
    } = e;
    if (!s || s.disable || !s.argTypesRegex || !n) return {};
    let o = new RegExp(s.argTypesRegex);
    return Object.entries(n)
      .filter(([c]) => !!o.test(c))
      .reduce((c, [a, u]) => (m(a, t) && (c[a] = _(a, { implicit: !0, id: r })), c), {});
  },
  L = (e) => {
    let {
      initialArgs: t,
      argTypes: n,
      parameters: { actions: r },
    } = e;
    return r?.disable || !n
      ? {}
      : Object.entries(n)
          .filter(([s, o]) => !!o.action)
          .reduce(
            (s, [o, c]) => (m(o, t) && (s[o] = _(typeof c.action == 'string' ? c.action : o)), s),
            {},
          );
  },
  M = [L, K],
  R = !1,
  B = (e) => {
    let {
      parameters: { actions: t },
    } = e;
    if (
      !t?.disable &&
      !R &&
      '__STORYBOOK_TEST_ON_MOCK_CALL__' in p &&
      typeof p.__STORYBOOK_TEST_ON_MOCK_CALL__ == 'function'
    ) {
      let n = p.__STORYBOOK_TEST_ON_MOCK_CALL__;
      n((r, s) => {
        let o = r.getMockName();
        o !== 'spy' &&
          (!/^next\/.*::/.test(o) ||
            [
              'next/router::useRouter()',
              'next/navigation::useRouter()',
              'next/navigation::redirect',
              'next/cache::',
              'next/headers::cookies().set',
              'next/headers::cookies().delete',
              'next/headers::headers().set',
              'next/headers::headers().delete',
            ].some((c) => o.startsWith(c))) &&
          _(o)(s);
      }),
        (R = !0);
    }
  },
  P = [B];
export { M as argsEnhancers, P as loaders };
