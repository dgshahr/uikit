import { j as r } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { D as i } from './index-t7NbSghB.js';
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
          'dgsuikit:w-[100px] dgsuikit:h-[100px] dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center',
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
  render: args => <div className="dgsuikit:w-[100px] dgsuikit:h-[100px] dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center">\r
      <Divider {...args} />\r
    </div>
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
const u = ['Default'];
export { e as Default, u as __namedExportsOrder, m as default };
