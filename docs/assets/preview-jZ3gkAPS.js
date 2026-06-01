const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './DocsRenderer-CFRXHY34-YHdkTxZi.js',
      './iframe-DRrUiuwY.js',
      './index-Dahukp9Z.js',
      './index-BHfm3GOV.js',
      './jsx-runtime-D_zvdyIk.js',
      './index-DFn6di8N.js',
      './index-DA08jwmW.js',
      './index-CFeRKNTJ.js',
      './index-DrFu-skq.js',
      './client-CAmdlUIk.js',
    ]),
) => i.map((i) => d[i]);
import { _ as a } from './iframe-DRrUiuwY.js';
var i = Object.defineProperty,
  s = (e, r) => {
    for (var t in r) i(e, t, { get: r[t], enumerable: !0 });
  },
  _ = {};
s(_, { parameters: () => d });
var p = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, o] = r;
    return o.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  d = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await a(
          () => import('./DocsRenderer-CFRXHY34-YHdkTxZi.js'),
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
