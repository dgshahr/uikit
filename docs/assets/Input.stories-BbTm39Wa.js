import { j as o } from './jsx-runtime-D_zvdyIk.js';
import { r as p } from './index-CTzypqlY.js';
import { I as a } from './index-Dl2a6ouj.js';
import './clsx-B-dksMZM.js';
import './IconEye-Cb9e2e14.js';
import './omitObjects-DTdUR98j.js';
import './TextFieldWrapper-DXO5H9hO.js';
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
      maxLength: { control: { type: 'number' }, table: { type: { summary: 'number' } } },
      showMaxLength: { control: { type: 'boolean' }, table: { type: { summary: 'boolean' } } },
    },
  },
  m = (t) => {
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
    render: (t) => o.jsx(m, { ...t }),
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
const I = ['Default'];
export { e as Default, I as __namedExportsOrder, f as default };
