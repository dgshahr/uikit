import { P as t } from './index-HbNBLzHe.js';
import './jsx-runtime-DEdD30eg.js';
import './index-RYns6xqu.js';
import './clsx-B-dksMZM.js';
const n = {
    title: 'Components/Progress/Doughnut',
    component: t,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport ProgressDoughnut from '@dgshahr/ui-kit/Progress/Doughnut';\nOr\nimport { ProgressDoughnut } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      color: { table: { defaultValue: { summary: 'primary' } } },
      textClassName: {
        if: { arg: 'showText', eq: !0 },
        control: 'text',
        table: { type: { summary: 'string' } },
      },
    },
  },
  r = { args: { current: 1, total: 5 } };
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    current: 1,
    total: 5
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
const m = ['Default'];
export { r as Default, m as __namedExportsOrder, n as default };
