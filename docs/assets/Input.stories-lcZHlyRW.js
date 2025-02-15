import { j as o } from './jsx-runtime-DEdD30eg.js';
import { r as p } from './index-RYns6xqu.js';
import { I as a } from './index-Cy3Q9cqR.js';
import './clsx-B-dksMZM.js';
import './omitObjects-DTdUR98j.js';
import './TextFieldWrapper-CPrZIvq7.js';
/* empty css               */ const y = {
    title: 'Components/Form/Input',
    component: a,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Input from '@dgshahr/ui-kit/Form/Input';\nOr\nimport { Input } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      labelAddon: {
        description: 'A React node that is placed between the label and input field.',
        control: 'text',
      },
      isError: { control: { type: 'boolean' }, table: { type: { summary: 'boolean' } } },
      disabled: { control: { type: 'boolean' }, table: { type: { summary: 'boolean' } } },
      errorMessage: { control: { type: 'text' }, table: { type: { summary: 'string' } } },
      placeholder: { control: { type: 'text' }, table: { type: { summary: 'string' } } },
    },
  },
  l = (t) => {
    const [n, r] = p.useState('');
    return o.jsx(a, {
      ...t,
      value: n,
      onChange: (s) => r(s.currentTarget.value),
      onClear: () => r(''),
    });
  },
  e = {
    args: { labelContent: 'عنوان', hintMessage: 'متن راهنما' },
    render: (t) => o.jsx(l, { ...t }),
  };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    labelContent: 'عنوان',
    hintMessage: 'متن راهنما'
  },
  render: args => <InputExample {...args} />
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
const x = ['Default'];
export { e as Default, x as __namedExportsOrder, y as default };
