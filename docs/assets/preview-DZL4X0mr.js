const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './DocsRenderer-CFRXHY34-Skx4Jocj.js',
      './iframe-C7Nrn8uZ.js',
      './index-CTzypqlY.js',
      './jsx-runtime-D_zvdyIk.js',
      './index-BRSOB10J.js',
      './index-X_f_OX5J.js',
      './index-CFeRKNTJ.js',
      './index-DrFu-skq.js',
      './react-18-C7NcDMCS.js',
    ]),
) => i.map((i) => d[i]);
import { _ as a } from './iframe-C7Nrn8uZ.js';
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
          () => import('./DocsRenderer-CFRXHY34-Skx4Jocj.js').then((r) => r.D),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
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
