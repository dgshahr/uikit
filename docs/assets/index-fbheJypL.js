import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as f } from './clsx-B-dksMZM.js';
import { r as g } from './index-CTzypqlY.js';
import { I as q } from './IconEye-Cb9e2e14.js';
import { o as k } from './omitObjects-DTdUR98j.js';
import { T as C } from './TextFieldWrapper-DNkQ4CD6.js';
const h = (i) =>
  e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...i,
    children: [
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'm15.456 9.595-5.852 5.852-1.061-1.06 5.853-5.853z',
        clipRule: 'evenodd',
      }),
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'm9.6 8.532 5.856 5.858-1.06 1.06-5.857-5.857z',
        clipRule: 'evenodd',
      }),
      e.jsx('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-8.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17',
        clipRule: 'evenodd',
      }),
    ],
  });
h.__docgenInfo = { description: '', methods: [], displayName: 'IconCloseSquare' };
const x = (i) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...i,
    children: e.jsx('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d: 'M20.417 3.22a.75.75 0 0 1 0 1.06L4.643 20.055a.744.744 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l1.972-1.971c-1.413-1.293-2.613-3.036-3.493-5.089a.75.75 0 0 1 0-.593C3.082 8.977 4.52 7.02 6.22 5.683c3.292-2.606 7.621-2.744 11.048-.375l2.088-2.088a.75.75 0 0 1 1.06 0m-.37 4.82c.724.962 1.36 2.073 1.891 3.299a.74.74 0 0 1 0 .595C19.842 16.79 16.128 19.69 12 19.69a8.8 8.8 0 0 1-2.769-.451.75.75 0 0 1 .474-1.424A7.3 7.3 0 0 0 12 18.19c3.428 0 6.561-2.442 8.43-6.553a14.5 14.5 0 0 0-1.58-2.694.75.75 0 0 1 1.197-.902M7.15 6.862c-1.437 1.13-2.67 2.776-3.58 4.778.794 1.752 1.836 3.23 3.047 4.322l2.138-2.138a3.87 3.87 0 0 1-.67-2.184A3.92 3.92 0 0 1 12 7.722a3.9 3.9 0 0 1 2.187.669l2.001-2.002c-2.853-1.844-6.325-1.676-9.038.472m8.088 4.6a.75.75 0 0 1 .606.872 3.92 3.92 0 0 1-3.141 3.147.75.75 0 0 1-.268-1.476 2.41 2.41 0 0 0 1.932-1.937.754.754 0 0 1 .87-.606M12 9.221a2.418 2.418 0 0 0-2.152 3.509l3.245-3.246A2.4 2.4 0 0 0 12 9.222',
      clipRule: 'evenodd',
    }),
  });
x.__docgenInfo = { description: '', methods: [], displayName: 'IconHide' };
const j = g.forwardRef(function (l, y) {
  const {
      dir: n = 'rtl',
      placeholderDir: v = n,
      containerClassName: w,
      leftIcon: p,
      prefix: u,
      postfix: c,
      onClear: s,
      value: a,
      ...t
    } = l,
    I = k(t, [
      'labelAddon',
      'labelContent',
      'link',
      'rightIcon',
      'isError',
      'errorMessage',
      'hintMessage',
      'wrapperClassName',
      'showMaxLength',
    ]),
    [d, T] = g.useState(t.type);
  function m() {
    return e.jsx('button', {
      onClick: () => {
        typeof s == 'function' && s();
      },
      children: e.jsx(h, { className: 'dgs-ui-kit-text-gray-600', width: 20, height: 20 }),
    });
  }
  return e.jsxs(C, {
    ...l,
    containerClassName: f('dgs-ui-kit-items-center', w),
    value: a,
    children: [
      u &&
        e.jsx('span', {
          className: 'dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-500',
          children: u,
        }),
      typeof s == 'function' && a && n === 'ltr' && m(),
      e.jsx('input', {
        ...I,
        ref: y,
        className: f(
          'dgs-ui-kit-bg-transparent focus:dgs-ui-kit-outline-none dgs-ui-kit-flex-1',
          n === 'rtl' ? 'dgs-ui-kit-text-right' : '!dgs-ui-kit-text-left',
          v === 'rtl' ? 'placeholder:dgs-ui-kit-text-right' : 'placeholder:dgs-ui-kit-text-left',
          { ss02: t.type != 'password' },
          l.className,
        ),
        ...(n === 'ltr' ? { style: { direction: 'ltr' } } : {}),
        value: a,
        type: d,
        onInput: (o) => {
          if ((typeof t.onInput == 'function' && t.onInput(o)) || d !== 'number') return;
          const r = o.currentTarget;
          r.value.length > r.maxLength && (r.value = r.value.slice(0, r.maxLength));
        },
      }),
      typeof s == 'function' && a && n === 'rtl' && m(),
      c &&
        e.jsx('span', {
          className: 'dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-500',
          children: c,
        }),
      p && e.jsx('div', { className: 'dgs-ui-kit-text-gray-600', children: p }),
      t.type === 'password' &&
        e.jsx('button', {
          type: 'button',
          onClick: () => T((o) => (o === 'text' ? 'password' : 'text')),
          className: 'dgs-ui-kit-text-gray-600',
          children:
            d === 'password'
              ? e.jsx(q, { width: 20, height: 20 })
              : e.jsx(x, { width: 20, height: 20 }),
        }),
    ],
  });
});
j.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Input',
  props: {
    required: { required: !1, tsType: { name: 'boolean' }, description: '' },
    disabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
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
    wrapperClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    showMaxLength: { required: !1, tsType: { name: 'boolean' }, description: '' },
    leftIcon: { required: !1, tsType: { name: 'JSX.Element' }, description: '' },
    prefix: { required: !1, tsType: { name: 'string' }, description: '' },
    postfix: { required: !1, tsType: { name: 'string' }, description: '' },
    onClear: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '() => void',
        signature: { arguments: [], return: { name: 'void' } },
      },
      description: '',
    },
    onInput: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(event: React.FormEvent<HTMLInputElement>) => void | boolean',
        signature: {
          arguments: [
            {
              type: {
                name: 'ReactFormEvent',
                raw: 'React.FormEvent<HTMLInputElement>',
                elements: [{ name: 'HTMLInputElement' }],
              },
              name: 'event',
            },
          ],
          return: {
            name: 'union',
            raw: 'void | boolean',
            elements: [{ name: 'void' }, { name: 'boolean' }],
          },
        },
      },
      description: '',
    },
  },
  composes: ['Omit'],
};
export { j as I };
