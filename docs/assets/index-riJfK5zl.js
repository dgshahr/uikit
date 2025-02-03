import { j as l } from './jsx-runtime-DEdD30eg.js';
/* empty css               */ function o({
  type: e,
  size: i = 'thin',
  color: t = 'gray',
  className: a,
}) {
  const r = e === 'horizontal' ? 'dgs-ui-kit-w-full' : 'dgs-ui-kit-h-full',
    s = {
      horizontal: { thin: 'dgs-ui-kit-h-[1px]', thick: 'dgs-ui-kit-h-1' },
      vertical: { thin: 'dgs-ui-kit-w-[1px]', thick: 'dgs-ui-kit-w-1' },
    },
    n = t === 'gray' ? 'dgs-ui-kit-bg-gray-200' : 'dgs-ui-kit-bg-gray-100';
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
