import { j as s } from './jsx-runtime-DEdD30eg.js';
import { c as d } from './clsx-B-dksMZM.js';
import { r as m } from './index-RYns6xqu.js';
import { o as c } from './omitObjects-DTdUR98j.js';
import { T as u } from './TextFieldWrapper-DyswCM13.js';
/* empty css               */ const n = m.forwardRef(function (t, i) {
  const { dir: r = 'rtl', placeholderDir: o = r, className: l, ...a } = t,
    p = c(a, [
      'labelAddon',
      'labelContent',
      'link',
      'rightIcon',
      'isError',
      'errorMessage',
      'hintMessage',
      'wrapperClassName',
      'showMaxLength',
      'containerClassName',
    ]);
  return s.jsx(u, {
    ...t,
    children: s.jsx('textarea', {
      ...p,
      ref: i,
      className: d(
        'dgs-ui-kit-bg-transparent dgs-ui-kit-leading-normal dgs-ui-kit-w-full dgs-ui-kit-h-full focus:dgs-ui-kit-outline-none ss02 dgs-ui-kit-flex-1 dgs-ui-kit-resize-none',
        r === 'rtl' ? 'dgs-ui-kit-text-right' : '!dgs-ui-kit-text-left',
        o === 'rtl' ? 'placeholder:dgs-ui-kit-text-right' : 'placeholder:dgs-ui-kit-text-left',
        l,
      ),
      rows: a.rows ?? 5,
    }),
  });
});
n.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Textarea',
  props: {
    labelContent: { required: !1, tsType: { name: 'string' }, description: '' },
    labelAddon: {
      required: !1,
      tsType: { name: 'ReactReactNode', raw: 'React.ReactNode' },
      description: '',
    },
    link: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: `{
  cnotent: string;
  href: string;
}`,
        signature: {
          properties: [
            { key: 'cnotent', value: { name: 'string', required: !0 } },
            { key: 'href', value: { name: 'string', required: !0 } },
          ],
        },
      },
      description: '',
    },
    containerClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    rightIcon: { required: !1, tsType: { name: 'JSX.Element' }, description: '' },
    dir: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'rtl' | 'ltr'",
        elements: [
          { name: 'literal', value: "'rtl'" },
          { name: 'literal', value: "'ltr'" },
        ],
      },
      description: '',
    },
    placeholderDir: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'rtl' | 'ltr'",
        elements: [
          { name: 'literal', value: "'rtl'" },
          { name: 'literal', value: "'ltr'" },
        ],
      },
      description: '',
    },
    isError: { required: !1, tsType: { name: 'boolean' }, description: '' },
    errorMessage: { required: !1, tsType: { name: 'string' }, description: '' },
    hintMessage: { required: !1, tsType: { name: 'string' }, description: '' },
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    showMaxLength: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
  composes: ['Omit'],
};
const k = {
    title: 'Components/Form/Textarea',
    component: n,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Textarea from '@dgshahr/ui-kit/Form/Textarea';\nOr\nimport { Textarea } from '@dgshahr/ui-kit';\n```",
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
  e = { args: { labelContent: 'عنوان', hintMessage: 'متن راهنما' } };
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    labelContent: 'عنوان',
    hintMessage: 'متن راهنما'
  }
}`,
      ...e.parameters?.docs?.source,
    },
  },
};
const q = ['Default'];
export { e as Default, q as __namedExportsOrder, k as default };
