import { j as o } from './jsx-runtime-DEdD30eg.js';
import { r as p } from './index-RYns6xqu.js';
import { I as a } from './index-Bt4iTh3Y.js';
import './clsx-B-dksMZM.js';
import './IconEye-B0QP_hKN.js';
import './omitObjects-DTdUR98j.js';
import './TextFieldWrapper-BouNr5dk.js';
import './FieldBottomInfo-CAJDJ2C4.js';
import './IconInfoCircleOutline-dnxLfpkw.js';
/* empty css               */ const f = {
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
  m = (e) => {
    const [n, r] = p.useState('');
    return o.jsx(a, {
      ...e,
      value: n,
      onChange: (s) => r(s.currentTarget.value),
      onClear: () => r(''),
    });
  },
  t = {
    args: { labelContent: 'عنوان', hintMessage: 'متن راهنما' },
    render: (e) => o.jsx(m, { ...e }),
  };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    labelContent: 'عنوان',
    hintMessage: 'متن راهنما'
  },
  render: args => <InputExample {...args} />
}`,
      ...t.parameters?.docs?.source,
    },
  },
};
const I = ['Default'];
export { t as Default, I as __namedExportsOrder, f as default };
