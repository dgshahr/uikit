import { j as t } from './jsx-runtime-DEdD30eg.js';
import { c as m } from './clsx-B-dksMZM.js';
import { o as d } from './omitObjects-DTdUR98j.js';
import { R as p } from './RadioCheckboxWrapper-vQUD_q3B.js';
import './index-RYns6xqu.js';
/* empty css               */ const r = (a) => {
  const { className: s, ...o } = a,
    i = d(o, ['label', 'isError', 'errorMessage', 'helperMessage', 'containerClassName']);
  return t.jsx(p, {
    ...o,
    children: ({ inputClassName: n, checkedInputClassName: l }) =>
      t.jsxs(t.Fragment, {
        children: [
          t.jsx('input', { ...i, type: 'radio', className: m('dgs-ui-kit-rounded-full', n, s) }),
          t.jsx('div', {
            className: l,
            children: t.jsx('div', {
              className:
                'dgs-ui-kit-bg-white dgs-ui-kit-rounded-full dgs-ui-kit-w-2 dgs-ui-kit-h-2 dgs-ui-kit-mt-[1px]',
            }),
          }),
        ],
      }),
  });
};
r.__docgenInfo = { description: '', methods: [], displayName: 'RadioButton' };
const x = {
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
const h = ['Default'];
export { e as Default, h as __namedExportsOrder, x as default };
