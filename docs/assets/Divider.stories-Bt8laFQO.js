import { j as i } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { D as r } from './index-CS2e05IR.js';
/* empty css               */ const m = {
    title: 'Components/Divider',
    component: r,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Divider from '@dgshahr/ui-kit/Divider';\nOr\nimport { Divider } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      size: { table: { defaultValue: { summary: 'thin' } } },
      color: { table: { defaultValue: { summary: 'gray' } } },
    },
  },
  e = {
    args: { type: 'vertical', size: 'thin', color: 'gray' },
    render: (t) =>
      i.jsx('div', {
        className:
          'dgsuikit:w-[100px] dgsuikit:h-[100px] dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center',
        children: i.jsx(r, { ...t }),
      }),
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    type: 'vertical',
    size: 'thin',
    color: 'gray'
  },
  render: args => <div className="dgsuikit:w-[100px] dgsuikit:h-[100px] dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center">
      <Divider {...args} />
    </div>
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
const u = ['Default'];
export { e as Default, u as __namedExportsOrder, m as default };
