const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './DocsRenderer-CFRXHY34-DcEG5XcQ.js',
      './iframe-CL62Y02-.js',
      './index-RYns6xqu.js',
      './jsx-runtime-DEdD30eg.js',
      './index-DYmNCwer.js',
      './index-B8HTi1Im.js',
      './index-DrFu-skq.js',
      './react-18-CJwW9gwZ.js',
    ]),
) => i.map((i) => d[i]);
import { _ as a } from './iframe-CL62Y02-.js';
import '../sb-preview/runtime.js';
const { global: s } = __STORYBOOK_MODULE_GLOBAL__;
var _ = Object.entries(s.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, o] = r;
    return o.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  n = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await a(
          () => import('./DocsRenderer-CFRXHY34-DcEG5XcQ.js').then((r) => r.ak),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
          import.meta.url,
        );
        return new e();
      },
      stories: {
        filter: (e) =>
          (e.tags || []).filter((r) => _[r]).length === 0 && !e.parameters.docs?.disable,
      },
    },
  };
export { n as parameters };
