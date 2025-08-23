'use client';
import { j as i } from './jsx-runtime-D_zvdyIk.js';
import { r as g } from './index-CTzypqlY.js';
import { c as v } from './clsx-B-dksMZM.js';
import { F as T } from './FieldBottomInfo-Cv8aBHkK.js';
import { F as w } from './TextFieldWrapper-Pf0ZOciq.js';
import { I as x } from './index-D1sYvYPn.js';
/* empty css               */ import './IconInfoCircleOutline-Dd1i2qLz.js';
import './IconEye-Cb9e2e14.js';
import './omitObjects-DTdUR98j.js';
const F = (o) => o.replace(/[۰-۹]/g, (r) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(r))),
  d = (o) => {
    const {
        inputsNumber: r = 4,
        onChange: u,
        onEnd: f,
        className: k,
        inputsContainerClassName: C,
        labelContent: y,
        hintMessage: h,
        errorMessage: c,
        isError: N,
        value: s,
        ...E
      } = o,
      m = g.useRef(!1);
    function l(a) {
      document.getElementById(`dgsuikit:otp-input-${a}`)?.focus();
    }
    function j(a, e) {
      const t = [a.code, a.key];
      if (s[e] && t.includes(s[e])) {
        l(e + 1);
        return;
      }
      if (t.includes('Backspace') || t.includes('Delete')) {
        const n = s.split('');
        (n[e] = ''), e !== 0 && l(e - 1), u(n.join(''));
      } else t.includes('ArrowLeft') ? l(e - 1) : t.includes('ArrowRight') && l(e + 1);
    }
    function I(a, e) {
      const t = F(a.currentTarget.value),
        n = s.split('');
      t.length > 1
        ? t.split('').forEach((O, b) => {
            b < r && (n[b] = O);
          })
        : (n[e] = t),
        u(n.join('')),
        e + 1 !== r && t && l(e + 1);
    }
    return (
      g.useEffect(() => {
        s.length === r && m.current
          ? ((m.current = !1), typeof f == 'function' && f(s))
          : s.length < r && (m.current = !0);
      }, [s]),
      i.jsxs('div', {
        className: v('dgsuikit:space-y-2', k),
        children: [
          y ? i.jsx(w, { labelContent: y }) : null,
          i.jsx('div', {
            className: v(
              'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-2 dgsuikit:[direction:ltr]',
              C,
            ),
            children: Array.from(Array(r).keys()).map((a, e) =>
              i.jsx(
                x,
                {
                  containerClassName: 'dgsuikit:w-12 dgsuikit:h-12 dgsuikit:p-0',
                  className:
                    'dgsuikit:w-full dgsuikit:h-full dgsuikit:!text-center dgsuikit:placeholder:!text-center',
                  placeholder: '-',
                  autoFocus: e === 0,
                  onChange: (t) => I(t, e),
                  onKeyUp: (t) => j(t, e),
                  onFocus: (t) => t.currentTarget.select(),
                  id: `dgsuikit:otp-input-${e}`,
                  value: s[e] || '',
                  showMaxLength: !1,
                  isError: !!c || N,
                  autoComplete: 'off',
                  maxLength: e === 0 && !Number(s.split('')[0]) ? r : 1,
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
    const [r, u] = g.useState('');
    return i.jsx(d, { ...o, value: r, onChange: u });
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
