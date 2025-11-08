import { c as d } from './clsx-B-dksMZM.js';
import { P as m, u as k } from './PickerWrapper-lGkRsg09.js';
import { j as c } from './jsx-runtime-D_zvdyIk.js';
import { B as l } from './index-CK5dQjob.js';
function h({ props: s, standaloneMode: r, formatValue: i }) {
  const { value: o, wrapperClassName: a } = s,
    e = { ...s };
  s?.mode !== r &&
    (e.dropdownType === 'drawer'
      ? (e.drawerProps = {
          ...e.drawerProps,
          containerClassName: d('dgsuikit:!p-0', e.drawerProps?.containerClassName),
        })
      : (e.popoverClassName = d('dgsuikit:!p-0 dgsuikit:max-h-max', e.popoverClassName)),
    e.customInput || (e.inputProps = { ...e.inputProps, value: e.inputProps?.value ?? i(o) }));
  const t = s?.mode === r ? 'div' : m,
    n = s?.mode !== r ? e : { className: a };
  return { Wrapper: t, wrapperProps: n };
}
const f = (s) => {
  const { primaryButton: r, secondaryButton: i, className: o } = s,
    { toggleWrapperVisibility: a } = k(),
    e = !!r,
    t = !!i,
    n = (p) => {
      r && typeof r.onClick == 'function' && r.onClick(p), a();
    },
    u = (p) => {
      i && typeof i.onClick == 'function' && i.onClick(p);
    };
  return c.jsxs('div', {
    className: d(
      'dgsuikit:flex dgsuikit:items-center dgsuikit:border-t dgsuikit:border-gray-200 dgsuikit:gap-4',
      t ? 'dgsuikit:justify-between' : 'dgsuikit:justify-end',
      o,
    ),
    children: [
      t &&
        c.jsx(l, {
          type: 'button',
          variant: 'text',
          size: 'small',
          isFullWidth: e,
          ...i,
          onClick: u,
          children: i?.children ?? 'اعمال',
        }),
      e &&
        c.jsx(l, {
          type: 'button',
          size: 'small',
          isFullWidth: t,
          ...r,
          onClick: n,
          children: r?.children ?? 'اعمال',
        }),
    ],
  });
};
f.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'DateAndTimePickerFooter',
  props: {
    primaryButton: { required: !1, tsType: { name: 'ButtonProps' }, description: '' },
    secondaryButton: { required: !1, tsType: { name: 'ButtonProps' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { f as D, h as u };
