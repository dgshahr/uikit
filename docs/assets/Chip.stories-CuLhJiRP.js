import { j as t } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { I as r } from './IconArrowDown2-BBhufJ55.js';
import { I as e } from './IconUser-GH1SR0Q5.js';
import { C as a } from './index-BHAe_UaK.js';
import './clsx-B-dksMZM.js';
import './omitObjects-DTdUR98j.js';
import './index-DxrGzylW.js';
/* empty css               */ const f = {
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
        options: ['small', 'large'],
        table: { type: { summary: 'small, large' }, defaultValue: { summary: 'small' } },
      },
      clickable: {
        control: 'boolean',
        table: {
          type: { summary: 'boolean', detail: 'if set to true changes element to "button"' },
        },
      },
    },
  },
  o = { args: { label: 'برچسب', rightIcon: t.jsx(e, {}), leftIcon: t.jsx(r, {}) } };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    label: 'برچسب',
    rightIcon: <IconUser />,
    leftIcon: <IconArrowDown2 />
  }
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const g = ['Default'];
export { o as Default, g as __namedExportsOrder, f as default };
