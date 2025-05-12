import { P as a } from './index-Btw99RJa.js';
import './jsx-runtime-D_zvdyIk.js';
import './clsx-B-dksMZM.js';
import './index-CTzypqlY.js';
import './IconArrowLeft2-DI3fgQDw.js';
import './IconArrowRight2-C2yC-io_.js';
import './index-DbviSDdO.js';
/* empty css               */ const u = {
    title: 'Components/Pagination',
    component: a,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Pagination from '@dgshahr/ui-kit/Pagination';\nOr\nimport { Pagination } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      siblingCount: { table: { defaultValue: { summary: '1' } } },
      navigationButtonsWithText: { table: { defaultValue: { summary: 'true' } } },
      defaultCurrent: { table: { defaultValue: { summary: '1' } } },
    },
  },
  t = { args: { totalCount: 100, pageSize: 8 } };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    totalCount: 100,
    pageSize: 8
  }
}`,
      ...t.parameters?.docs?.source,
    },
  },
};
const l = ['Default'];
export { t as Default, l as __namedExportsOrder, u as default };
