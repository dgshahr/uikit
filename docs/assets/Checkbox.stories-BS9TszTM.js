import { C as t } from './index-DgO_T8WM.js';
import './jsx-runtime-DEdD30eg.js';
import './index-RYns6xqu.js';
import './clsx-B-dksMZM.js';
import './omitObjects-DTdUR98j.js';
import './RadioCheckboxWrapper-Bg8gfYci.js';
/* empty css               */ const n = {
    title: 'Components/Form/Checkbox',
    component: t,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Checkbox from '@dgshahr/ui-kit/Form/Checkbox';\nOr\nimport { Checkbox } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      label: { control: { type: 'text' }, table: { type: { summary: 'string | ReactNode' } } },
      isError: { control: { type: 'boolean' }, table: { type: { summary: 'boolean' } } },
      helperMessage: { control: { type: 'text' }, table: { type: { summary: 'string' } } },
      errorMessage: { control: { type: 'text' }, table: { type: { summary: 'string' } } },
      variant: {
        control: { type: 'select' },
        options: ['bordered', 'default'],
        table: { type: { summary: 'bordered, default' }, defaultValue: { summary: 'default' } },
      },
      icon: {
        control: { type: 'object' },
        table: {
          type: { summary: 'ReactNode', detail: "it's only available on variant='bordered'" },
        },
      },
    },
  },
  e = { args: { label: 'عنوان' } };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    label: 'عنوان'
  }
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
const c = ['Default'];
export { e as Default, c as __namedExportsOrder, n as default };
