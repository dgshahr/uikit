const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['./index-DDqqPSgF.js', './index-Dahukp9Z.js']),
) => i.map((i) => d[i]);
import { _ as l } from './iframe-DRrUiuwY.js';
import { r as s, R as n } from './index-Dahukp9Z.js';
import { H as p, A as h, h as d, D as E } from './index-BHfm3GOV.js';
import { c as R } from './client-CAmdlUIk.js';
import './jsx-runtime-D_zvdyIk.js';
import './index-DFn6di8N.js';
import './index-DA08jwmW.js';
import './index-CFeRKNTJ.js';
import './index-DrFu-skq.js';
var a = new Map();
function v() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var f = ({ callback: e, children: r }) => {
  let t = s.useRef();
  return (
    s.useLayoutEffect(() => {
      t.current !== e && ((t.current = e), e());
    }, [e]),
    r
  );
};
typeof Promise.withResolvers > 'u' &&
  (Promise.withResolvers = () => {
    let e = null,
      r = null;
    return {
      promise: new Promise((t, o) => {
        (e = t), (r = o);
      }),
      resolve: e,
      reject: r,
    };
  });
var w = async (e, r, t) => {
    let o = await x(r, t);
    if (v()) {
      o.render(e);
      return;
    }
    let { promise: i, resolve: m } = Promise.withResolvers();
    return o.render(s.createElement(f, { callback: m }, e)), i;
  },
  _ = (e, r) => {
    let t = a.get(e);
    t && (t.unmount(), a.delete(e));
  },
  x = async (e, r) => {
    let t = a.get(e);
    return t || ((t = R.createRoot(e, r)), a.set(e, t)), t;
  },
  g = { code: d, a: h, ...p },
  y = class extends s.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(e) {
      let { showException: r } = this.props;
      r(e);
    }
    render() {
      let { hasError: e } = this.state,
        { children: r } = this.props;
      return e ? null : n.createElement(n.Fragment, null, r);
    }
  },
  S = class {
    constructor() {
      (this.render = async (e, r, t) => {
        let o = { ...g, ...r?.components },
          i = E;
        return new Promise((m, u) => {
          l(
            async () => {
              const { MDXProvider: c } = await import('./index-DDqqPSgF.js');
              return { MDXProvider: c };
            },
            __vite__mapDeps([0, 1]),
            import.meta.url,
          )
            .then(({ MDXProvider: c }) =>
              w(
                n.createElement(
                  y,
                  { showException: u, key: Math.random() },
                  n.createElement(
                    c,
                    { components: o },
                    n.createElement(i, { context: e, docsParameter: r }),
                  ),
                ),
                t,
              ),
            )
            .then(() => m());
        });
      }),
        (this.unmount = (e) => {
          _(e);
        });
    }
  };
export { S as DocsRenderer, g as defaultComponents };
