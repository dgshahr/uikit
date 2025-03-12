'use client';
import { j as i } from './jsx-runtime-DEdD30eg.js';
import { r as g } from './index-RYns6xqu.js';
import { c as v } from './clsx-B-dksMZM.js';
import { F as x } from './FieldBottomInfo-CAJDJ2C4.js';
import { F as T } from './TextFieldWrapper-BouNr5dk.js';
import { I as w } from './index-Bt4iTh3Y.js';
/* empty css               */ import './IconInfoCircleOutline-dnxLfpkw.js';
import './IconEye-B0QP_hKN.js';
import './omitObjects-DTdUR98j.js';
const F = (a) => a.replace(/[۰-۹]/g, (r) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(r))),
  d = (a) => {
    const {
        inputsNumber: r = 4,
        onChange: u,
        onEnd: f,
        className: k,
        inputsContainerClassName: C,
        labelContent: y,
        hintMessage: h,
        errorMessage: c,
        isError: E,
        value: o,
        ...N
      } = a,
      m = g.useRef(!1);
    function l(s) {
      document.getElementById(`dgs-ui-kit-otp-input-${s}`)?.focus();
    }
    function j(s, t) {
      const e = [s.code, s.key];
      if (e.includes('Backspace') || e.includes('Delete')) {
        const n = o.split('');
        (n[t] = ''), t !== 0 && l(t - 1), u(n.join(''));
      } else e.includes('ArrowLeft') ? l(t - 1) : e.includes('ArrowRight') && l(t + 1);
    }
    function I(s, t) {
      const e = F(s.currentTarget.value),
        n = o.split('');
      e.length > 1
        ? e.split('').forEach((O, b) => {
            b < r && (n[b] = O);
          })
        : (n[t] = e),
        u(n.join('')),
        t + 1 !== r && e && l(t + 1);
    }
    return (
      g.useEffect(() => {
        o.length === r && m.current
          ? ((m.current = !1), typeof f == 'function' && f(o))
          : o.length < r && (m.current = !0);
      }, [o]),
      i.jsxs('div', {
        className: v('dgs-ui-kit-space-y-2', k),
        children: [
          y ? i.jsx(T, { labelContent: y }) : null,
          i.jsx('div', {
            className: v(
              'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 [direction:ltr]',
              C,
            ),
            children: Array.from(Array(r).keys()).map((s, t) =>
              i.jsx(
                w,
                {
                  containerClassName: 'dgs-ui-kit-w-12 dgs-ui-kit-h-12 dgs-ui-kit-p-0',
                  className:
                    'dgs-ui-kit-w-full dgs-ui-kit-h-full !dgs-ui-kit-text-center placeholder:!dgs-ui-kit-text-center',
                  placeholder: '-',
                  autoFocus: t === 0,
                  onChange: (e) => I(e, t),
                  onKeyUp: (e) => j(e, t),
                  onFocus: (e) => e.currentTarget.select(),
                  id: `dgs-ui-kit-otp-input-${t}`,
                  value: o[t] || '',
                  showMaxLength: !1,
                  isError: !!c || E,
                  autoComplete: 'off',
                  maxLength: 1,
                  onPaste: (e) => {
                    const n = e.clipboardData.getData('text');
                    Number(n) && u(n);
                  },
                  onInput: (e) => {
                    const n = e.currentTarget;
                    return !!(Number(n.value) && n.value.length > 1);
                  },
                  ...N,
                },
                s,
              ),
            ),
          }),
          c || h ? i.jsx(x, { errorMessage: c, hintMessage: h }) : null,
        ],
      })
    );
  };
d.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'OtpInput',
  props: {
    inputsNumber: { required: !1, tsType: { name: 'number' }, description: '' },
    onChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: string) => void',
        signature: {
          arguments: [{ type: { name: 'string' }, name: 'value' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    onEnd: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: string) => void',
        signature: {
          arguments: [{ type: { name: 'string' }, name: 'value' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    inputsContainerClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    value: { required: !0, tsType: { name: 'string' }, description: '' },
  },
  composes: ['Omit'],
};
const U = {
    title: 'Components/Form/OtpInput',
    component: d,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport OtpInput from '@dgshahr/ui-kit/Form/OtpInput';\nOr\nimport { OtpInput } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      value: { control: { disable: !0 } },
      onChange: {
        control: { type: 'object', disable: !0 },
        table: { type: { summary: 'function', detail: '(value:string)=> void' } },
      },
      inputsNumber: { table: { defaultValue: { summary: '4' } } },
      onEnd: {
        control: { type: 'object' },
        table: { type: { summary: 'function', detail: '(value:string)=> void' } },
      },
      isError: { control: { type: 'boolean' }, table: { type: { summary: 'boolean' } } },
      errorMessage: { control: { type: 'text' }, table: { type: { summary: 'string' } } },
    },
  },
  q = (a) => {
    const [r, u] = g.useState('');
    return i.jsx(d, { ...a, value: r, onChange: u });
  },
  p = {
    args: {
      value: '',
      onChange() {},
      inputsNumber: 4,
      labelContent: 'عنوان',
      hintMessage: 'متن راهنما',
    },
    render: (a) => i.jsx(q, { ...a }),
  };
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    value: '',
    onChange() {},
    inputsNumber: 4,
    labelContent: 'عنوان',
    hintMessage: 'متن راهنما'
  },
  render: args => <OtpExample {...args} />
}`,
      ...p.parameters?.docs?.source,
    },
  },
};
const $ = ['Default'];
export { p as Default, $ as __namedExportsOrder, U as default };
