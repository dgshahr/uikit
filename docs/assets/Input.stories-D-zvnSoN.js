import { j as o } from './jsx-runtime-D_zvdyIk.js';
import { r as p } from './index-CTzypqlY.js';
import { I as a } from './index-725Xjxr6.js';
import './clsx-B-dksMZM.js';
import './IconEye-Cb9e2e14.js';
import './omitObjects-DTdUR98j.js';
import './TextFieldWrapper-2qx4DqcM.js';
import './FieldBottomInfo-DcydcAx7.js';
import './IconInfoCircleOutline-Dd1i2qLz.js';
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
