const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['./index-Kfq78SDR.js', './index-D1sGr8oY.js']),
) => i.map((i) => d[i]);
import { _ as i } from './iframe-CaKi2_ZK.js';
import { R as t, r as p } from './index-D1sGr8oY.js';
import { H as l, A as u, C as d, D as h } from './index-6Hf41lUH.js';
import { renderElement as E, unmountElement as x } from './react-18-DpAPlAL5.js';
import './jsx-runtime-D_zvdyIk.js';
import './index-D2xQP-y6.js';
import './index-m6QQCFJ3.js';
import './index-DcVEtX0K.js';
import './index-Bhqu_tAV.js';
var D = { code: d, a: u, ...l },
  _ = class extends p.Component {
    constructor() {
      (super(...arguments), (this.state = { hasError: !1 }));
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(r) {
      let { showException: e } = this.props;
      e(r);
    }
    render() {
      let { hasError: r } = this.state,
        { children: e } = this.props;
      return r ? null : t.createElement(t.Fragment, null, e);
    }
  },
  P = class {
    constructor() {
      ((this.render = async (r, e, n) => {
        let s = { ...D, ...e?.components },
          a = h;
        return new Promise((m, c) => {
          i(
            async () => {
              const { MDXProvider: o } = await import('./index-Kfq78SDR.js');
              return { MDXProvider: o };
            },
            __vite__mapDeps([0, 1]),
            import.meta.url,
          )
            .then(({ MDXProvider: o }) =>
              E(
                t.createElement(
                  _,
                  { showException: c, key: Math.random() },
                  t.createElement(
                    o,
                    { components: s },
                    t.createElement(a, { context: r, docsParameter: e }),
                  ),
                ),
                n,
              ),
            )
            .then(() => m());
        });
      }),
        (this.unmount = (r) => {
          x(r);
        }));
    }
  };
export { P as DocsRenderer, D as defaultComponents };
