import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as d } from './clsx-B-dksMZM.js';
import { o as m } from './omitObjects-DTdUR98j.js';
import { R as p } from './RadioCheckboxWrapper-CIyXuH4Z.js';
/* empty css               */ const r = (a) => {
  const { className: s, ...o } = a,
    i = m(o, ['label', 'isError', 'errorMessage', 'helperMessage', 'containerClassName']);
  return e.jsx(p, {
    ...o,
    children: ({ inputClassName: n, checkedInputClassName: l }) =>
      e.jsxs(e.Fragment, {
        children: [
          e.jsx('input', { ...i, type: 'radio', className: d('dgsuikit:rounded-full', n, s) }),
          e.jsx('div', {
            className: l,
            children: e.jsx('div', {
              className:
                'dgsuikit:bg-white dgsuikit:rounded-full dgsuikit:w-2 dgsuikit:h-2 dgsuikit:mt-[1px]',
            }),
          }),
        ],
      }),
  });
};
r.__docgenInfo = { description: '', methods: [], displayName: 'RadioButton' };
const f = {
    title: 'Components/Form/RadioButton',
    component: r,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport RadioButton from '@dgshahr/ui-kit/Form/RadioButton';\nOr\nimport { RadioButton } from '@dgshahr/ui-kit';\n```",
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
  t = { args: { label: 'عنوان' } };
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    label: 'عنوان'
  }
}`,
      ...t.parameters?.docs?.source,
    },
  },
};
const x = ['Default'];
export { t as Default, x as __namedExportsOrder, f as default };
