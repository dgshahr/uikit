import { j as r } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { D as i } from './index-BvJc6UyN.js';
/* empty css               */ const m = {
    title: 'Components/Divider',
    component: i,
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
      r.jsx('div', {
        className:
          'dgs-ui-kit-w-[100px] dgs-ui-kit-h-[100px] dgs-ui-kit-flex dgs-ui-kit-justify-center dgs-ui-kit-items-center',
        children: r.jsx(i, { ...t }),
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
  render: args => <div className="dgs-ui-kit-w-[100px] dgs-ui-kit-h-[100px] dgs-ui-kit-flex dgs-ui-kit-justify-center dgs-ui-kit-items-center">\r
      <Divider {...args} />\r
    </div>
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
const u = ['Default'];
export { e as Default, u as __namedExportsOrder, m as default };
