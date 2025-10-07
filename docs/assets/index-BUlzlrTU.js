import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as m } from './clsx-B-dksMZM.js';
import { I as d } from './IconMinus4-BhTKwdYo.js';
import { o as l } from './omitObjects-DTdUR98j.js';
import { R as h } from './RadioCheckboxWrapper-ByQOqZb4.js';
const r = (s) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...s,
    children: e.jsx('path', {
      fill: 'currentColor',
      d: 'M9.613 17.57a.75.75 0 0 1-.53-.22l-4.375-4.376a.75.75 0 0 1 1.06-1.06l3.845 3.844 9.1-9.1a.75.75 0 1 1 1.06 1.061l-9.635 9.63a.75.75 0 0 1-.525.22',
    }),
  });
r.__docgenInfo = { description: '', methods: [], displayName: 'IconCheckmark' };
const p = (s) => {
  const { className: i, isIndeterminate: t, ...o } = s,
    a = l(o, ['label', 'isError', 'errorMessage', 'helperMessage', 'containerClassName']);
  return e.jsx(h, {
    ...o,
    children: ({ inputClassName: n, checkedInputClassName: c }) =>
      e.jsxs(e.Fragment, {
        children: [
          e.jsx('input', { ...a, type: 'checkbox', className: m('dgsuikit:rounded', n, i) }),
          e.jsx('div', {
            className: c,
            children: t ? e.jsx(d, { width: 16, height: 16 }) : e.jsx(r, { width: 16, height: 16 }),
          }),
        ],
      }),
  });
};
p.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Checkbox',
  props: { isIndeterminate: { required: !1, tsType: { name: 'boolean' }, description: '' } },
};
export { p as C };
