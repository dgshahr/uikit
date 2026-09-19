const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './DocsRenderer-CFRXHY34-CqSaNKoo.js',
      './iframe-CaKi2_ZK.js',
      './index-D1sGr8oY.js',
      './index-6Hf41lUH.js',
      './jsx-runtime-D_zvdyIk.js',
      './index-D2xQP-y6.js',
      './index-m6QQCFJ3.js',
      './index-DcVEtX0K.js',
      './index-Bhqu_tAV.js',
      './react-18-DpAPlAL5.js',
    ]),
) => i.map((i) => d[i]);
import { _ as a } from './iframe-CaKi2_ZK.js';
var i = Object.defineProperty,
  s = (e, r) => {
    for (var t in r) i(e, t, { get: r[t], enumerable: !0 });
  },
  _ = {};
s(_, { parameters: () => d });
var p = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, o] = r;
    return (o.excludeFromDocsStories && (e[t] = !0), e);
  }, {}),
  d = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await a(
          () => import('./DocsRenderer-CFRXHY34-CqSaNKoo.js'),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          import.meta.url,
        );
        return new e();
      },
      stories: {
        filter: (e) =>
          (e.tags || []).filter((r) => p[r]).length === 0 && !e.parameters.docs?.disable,
      },
    },
  };
export { d as parameters };
