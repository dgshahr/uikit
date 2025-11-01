import { j as o } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { I as t } from './IconArrowDown2-BBhufJ55.js';
import { I as e } from './IconUser-GH1SR0Q5.js';
import { C as a } from './index-BxS0lAi1.js';
import './clsx-B-dksMZM.js';
import './omitObjects-DTdUR98j.js';
import './index--PMV3f1E.js';
/* empty css               */ const d = {
    title: 'Components/Chip',
    component: a,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Chip from '@dgshahr/ui-kit/Chip';\nOr\nimport { Chip } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      label: { control: 'text', table: { type: { summary: 'string | ReactNode' } } },
      size: {
        control: 'select',
        options: ['xsmall', 'small', 'large'],
        table: { type: { summary: 'small, large' }, defaultValue: { summary: 'small' } },
      },
      color: {
        control: 'select',
        options: ['primary', 'gray'],
        table: { type: { summary: 'primary, gray' }, defaultValue: { summary: 'primary' } },
      },
      clickable: {
        control: 'boolean',
        table: {
          type: { summary: 'boolean', detail: 'if set to true changes element to "button"' },
        },
      },
    },
  },
  r = { args: { label: 'برچسب', rightIcon: o.jsx(e, {}), leftIcon: o.jsx(t, {}) } };
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    label: 'برچسب',
    rightIcon: <IconUser />,
    leftIcon: <IconArrowDown2 />
  }
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
const f = ['Default'];
export { r as Default, f as __namedExportsOrder, d as default };
