import { j as l } from './jsx-runtime-D_zvdyIk.js';
/* empty css               */ function o({
  type: e,
  size: i = 'thin',
  color: t = 'gray',
  className: a,
}) {
  const r = e === 'horizontal' ? 'dgsuikit:w-full' : 'dgsuikit:h-full',
    s = {
      horizontal: { thin: 'dgsuikit:h-[1px]', thick: 'dgsuikit:h-1' },
      vertical: { thin: 'dgsuikit:w-[1px]', thick: 'dgsuikit:w-1' },
    },
    n = t === 'gray' ? 'dgsuikit:bg-gray-200' : 'dgsuikit:bg-gray-100';
  return [r, s[e][i], n, a ?? ''].slice().join(' ');
}
const u = (e) => l.jsx('div', { className: o(e) });
u.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Divider',
  props: {
    type: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "'horizontal' | 'vertical'",
        elements: [
          { name: 'literal', value: "'horizontal'" },
          { name: 'literal', value: "'vertical'" },
        ],
      },
      description: '',
    },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'thin' | 'thick'",
        elements: [
          { name: 'literal', value: "'thin'" },
          { name: 'literal', value: "'thick'" },
        ],
      },
      description: '',
    },
    color: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'white' | 'gray'",
        elements: [
          { name: 'literal', value: "'white'" },
          { name: 'literal', value: "'gray'" },
        ],
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { u as D };
