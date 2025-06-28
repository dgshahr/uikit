import { j as t } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { I as o } from './IconArrowLeft2-DI3fgQDw.js';
import { I as e } from './IconArrowRight2-C2yC-io_.js';
import { B as a } from './index-CZZihYHC.js';
import './clsx-B-dksMZM.js';
/* empty css               */ const u = {
    title: 'Components/Button',
    component: a,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Button from '@dgshahr/ui-kit/Button';\nOr\nimport { Button } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      children: { control: 'object', table: { type: { summary: 'ReactNode' } } },
      rightIcon: { control: 'object', table: { type: { summary: 'ReactNode' } } },
      leftIcon: { control: 'object', table: { type: { summary: 'ReactNode' } } },
      variant: {
        control: 'select',
        options: ['primary', 'secondary', 'outline', 'text'],
        table: { type: { summary: 'primary, secondary, outline, text' } },
      },
      color: {
        options: ['primary', 'gray', 'success', 'error', 'warning'],
        control: 'select',
        table: { type: { summary: 'primary, gray, success, error, warning' } },
      },
      size: {
        options: ['small', 'medium', 'large'],
        control: 'select',
        table: { type: { summary: 'small, medium, large' }, defaultValue: { summary: 'medium' } },
      },
    },
  },
  r = { args: { children: 'عنوان', rightIcon: t.jsx(e, {}), leftIcon: t.jsx(o, {}) } };
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    children: 'عنوان',
    rightIcon: <IconArrowRight2 />,
    leftIcon: <IconArrowLeft2 />
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
const d = ['Default'];
export { r as Default, d as __namedExportsOrder, u as default };
