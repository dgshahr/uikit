import { P as t } from './index-BkgHcS84.js';
import './jsx-runtime-D_zvdyIk.js';
import './clsx-B-dksMZM.js';
const a = {
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
const n = ['Default'];
export { r as Default, n as __namedExportsOrder, a as default };
