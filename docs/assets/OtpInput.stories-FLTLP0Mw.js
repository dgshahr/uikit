'use client';
import { j as i } from './jsx-runtime-D_zvdyIk.js';
import { r as g } from './index-CTzypqlY.js';
import { c as v } from './clsx-B-dksMZM.js';
import { F as T } from './FieldBottomInfo-COD-BNdl.js';
import { F as w } from './TextFieldWrapper-C_DgltlB.js';
import { I as x } from './index-Cx6nr_bJ.js';
/* empty css               */ import './IconInfoCircleOutline-Dd1i2qLz.js';
import './IconEye-Cb9e2e14.js';
import './omitObjects-DTdUR98j.js';
const F = (o) => o.replace(/[۰-۹]/g, (s) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(s))),
  d = (o) => {
    const {
        inputsNumber: s = 4,
        onChange: u,
        onEnd: f,
        className: k,
        inputsContainerClassName: C,
        labelContent: y,
        hintMessage: h,
        errorMessage: c,
        isError: N,
        value: r,
        ...E
      } = o,
      m = g.useRef(!1);
    function l(a) {
      document.getElementById(`dgs-ui-kit-otp-input-${a}`)?.focus();
    }
    function j(a, e) {
      const t = [a.code, a.key];
      if (r[e] && t.includes(r[e])) {
        l(e + 1);
        return;
      }
      if (t.includes('Backspace') || t.includes('Delete')) {
        const n = r.split('');
        (n[e] = ''), e !== 0 && l(e - 1), u(n.join(''));
      } else t.includes('ArrowLeft') ? l(e - 1) : t.includes('ArrowRight') && l(e + 1);
    }
    function I(a, e) {
      const t = F(a.currentTarget.value),
        n = r.split('');
      t.length > 1
        ? t.split('').forEach((O, b) => {
            b < s && (n[b] = O);
          })
        : (n[e] = t),
        u(n.join('')),
        e + 1 !== s && t && l(e + 1);
    }
    return (
      g.useEffect(() => {
        r.length === s && m.current
          ? ((m.current = !1), typeof f == 'function' && f(r))
          : r.length < s && (m.current = !0);
      }, [r]),
      i.jsxs('div', {
        className: v('dgs-ui-kit-space-y-2', k),
        children: [
          y ? i.jsx(w, { labelContent: y }) : null,
          i.jsx('div', {
            className: v(
              'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-2 [direction:ltr]',
              C,
            ),
            children: Array.from(Array(s).keys()).map((a, e) =>
              i.jsx(
                x,
                {
                  containerClassName: 'dgs-ui-kit-w-12 dgs-ui-kit-h-12 dgs-ui-kit-p-0',
                  className:
                    'dgs-ui-kit-w-full dgs-ui-kit-h-full !dgs-ui-kit-text-center placeholder:!dgs-ui-kit-text-center',
                  placeholder: '-',
                  autoFocus: e === 0,
                  onChange: (t) => I(t, e),
                  onKeyUp: (t) => j(t, e),
                  onFocus: (t) => t.currentTarget.select(),
                  id: `dgs-ui-kit-otp-input-${e}`,
                  value: r[e] || '',
                  showMaxLength: !1,
                  isError: !!c || N,
                  autoComplete: 'off',
                  maxLength: e === 0 && !Number(r.split('')[0]) ? void 0 : 1,
                  onPaste: (t) => {
                    const n = t.clipboardData.getData('text');
                    Number(n) && u(n);
                  },
                  onInput: (t) => {
                    const n = t.currentTarget;
                    return !!(Number(n.value) && n.value.length > 1);
                  },
                  ...E,
                },
                a,
              ),
            ),
          }),
          c || h ? i.jsx(T, { errorMessage: c, hintMessage: h }) : null,
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
  q = (o) => {
    const [s, u] = g.useState('');
    return i.jsx(d, { ...o, value: s, onChange: u });
  },
  p = {
    args: {
      value: '',
      onChange() {},
      inputsNumber: 4,
      labelContent: 'عنوان',
      hintMessage: 'متن راهنما',
    },
    render: (o) => i.jsx(q, { ...o }),
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
