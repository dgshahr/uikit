'use client';
import { j as i } from './jsx-runtime-DEdD30eg.js';
import { r as g } from './index-RYns6xqu.js';
import { c as v } from './clsx-B-dksMZM.js';
import { I as x } from './index-CYrzEuCa.js';
import { F as T, a as w } from './TextFieldWrapper-DFt8mlBg.js';
/* empty css               */ import './omitObjects-DTdUR98j.js';
import './InfoCircleOutline-BidNIAAo.js';
const F = (a) => a.replace(/[۰-۹]/g, (s) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(s))),
  d = (a) => {
    const {
        inputsNumber: s = 4,
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
    function l(r) {
      document.getElementById(`dgs-ui-kit-otp-input-${r}`)?.focus();
    }
    function j(r, t) {
      const e = [r.code, r.key];
      if (e.includes('Backspace') || e.includes('Delete')) {
        const n = o.split('');
        (n[t] = ''), t !== 0 && l(t - 1), u(n.join(''));
      } else e.includes('ArrowLeft') ? l(t - 1) : e.includes('ArrowRight') && l(t + 1);
    }
    function I(r, t) {
      const e = F(r.currentTarget.value),
        n = o.split('');
      e.length > 1
        ? e.split('').forEach((O, b) => {
            b < s && (n[b] = O);
          })
        : (n[t] = e),
        u(n.join('')),
        t + 1 !== s && e && l(t + 1);
    }
    return (
      g.useEffect(() => {
        o.length === s && m.current
          ? ((m.current = !1), typeof f == 'function' && f(o))
          : o.length < s && (m.current = !0);
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
            children: Array.from(Array(s).keys()).map((r, t) =>
              i.jsx(
                x,
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
                r,
              ),
            ),
          }),
          c || h ? i.jsx(w, { errorMessage: c, hintMessage: h }) : null,
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
const S = {
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
    const [s, u] = g.useState('');
    return i.jsx(d, { ...a, value: s, onChange: u });
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
const K = ['Default'];
export { p as Default, K as __namedExportsOrder, S as default };
