'use client';
import { j as e } from './jsx-runtime-DEdD30eg.js';
import { c as a } from './clsx-B-dksMZM.js';
import { r as B } from './index-RYns6xqu.js';
import { C as b } from './CloseRemove-DAxcZzP_.js';
import { B as u } from './index-C6XlpC8Y.js';
/* empty css               */ const g = (t) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: e.jsx('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d: 'm15.993 10.222-4.618 4.618a.746.746 0 0 1-1.061 0l-2.309-2.309a.75.75 0 0 1 1.06-1.061l1.78 1.779 4.087-4.088a.75.75 0 1 1 1.061 1.061M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5',
      clipRule: 'evenodd',
    }),
  });
g.__docgenInfo = { description: '', methods: [], displayName: 'CheckCircleBoldIcon' };
const m = (t) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: e.jsx('path', {
      fill: 'currentColor',
      d: 'M10.628 3.353a2.85 2.85 0 0 1 3.85 1.09l7.268 12.614c.16.377.23.683.25 1.001a2.76 2.76 0 0 1-.73 2.021c-.51.554-1.2.881-1.95.921H4.68c-.31-.019-.62-.09-.91-.198-1.45-.585-2.15-2.23-1.56-3.656L9.53 4.433a2.73 2.73 0 0 1 1.099-1.08m1.37 11.92c-.48 0-.88.396-.88.873 0 .474.4.872.88.872s.87-.398.87-.883a.867.867 0 0 0-.87-.862m0-6.183c-.48 0-.88.386-.88.862v2.804c0 .475.4.873.88.873s.87-.398.87-.873V9.952a.866.866 0 0 0-.87-.862',
    }),
  });
m.__docgenInfo = { description: '', methods: [], displayName: 'DangerBoldIcon' };
const p = (t) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: e.jsx('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      d: 'M12.756 15.693a.75.75 0 0 1-1.5 0v-4.299a.75.75 0 0 1 1.5 0zM11.25 8.291a.75.75 0 0 1 1.5 0c0 .414-.336.782-.75.782s-.75-.305-.75-.719zM12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5',
      clipRule: 'evenodd',
    }),
  });
p.__docgenInfo = { description: '', methods: [], displayName: 'InfoCircleBoldIcon' };
const l = {
    container: {
      warning: 'dgs-ui-kit-bg-warning-50 dgs-ui-kit-border-warning-200',
      primary: 'dgs-ui-kit-bg-primary-50 dgs-ui-kit-border-primary-100',
      error: 'dgs-ui-kit-bg-error-50 dgs-ui-kit-border-error-200',
      success: 'dgs-ui-kit-bg-success-50 dgs-ui-kit-border-success-200',
      gray: 'dgs-ui-kit-bg-gray-50 dgs-ui-kit-border-gray-200',
    },
    icon: {
      warning: 'dgs-ui-kit-text-warning-700',
      primary: 'dgs-ui-kit-text-primary-400',
      error: 'dgs-ui-kit-text-error-600',
      success: 'dgs-ui-kit-text-success-600',
      gray: 'dgs-ui-kit-text-gray-600',
    },
    title: {
      warning: 'dgs-ui-kit-text-warning-800',
      primary: 'dgs-ui-kit-text-primary-700',
      error: 'dgs-ui-kit-text-error-700',
      success: 'dgs-ui-kit-text-success-800',
      gray: 'dgs-ui-kit-text-gray-800',
    },
    close: {
      warning: 'dgs-ui-kit-text-warning-800',
      primary: 'dgs-ui-kit-text-primary-600',
      error: 'dgs-ui-kit-text-error-600',
      success: 'dgs-ui-kit-text-success-800',
      gray: 'dgs-ui-kit-text-gray-800',
    },
    text: {
      warning: 'dgs-ui-kit-text-warning-800',
      primary: 'dgs-ui-kit-text-primary-600',
      error: 'dgs-ui-kit-text-error-600',
      success: 'dgs-ui-kit-text-success-800',
      gray: 'dgs-ui-kit-text-gray-700',
    },
  },
  s = {
    container: { large: 'dgs-ui-kit-p-4', small: 'dgs-ui-kit-p-3' },
    icon: { large: 24, small: 20 },
    title: { large: 'dgs-ui-kit-font-h5-bold mb-2', small: 'dgs-ui-kit-font-h6-bold mb-1' },
    close: { large: 20, small: 20 },
    text: { large: 'dgs-ui-kit-font-p2-regular', small: 'dgs-ui-kit-font-p3-regular' },
  };
function j(t, i) {
  let r = p;
  return (
    t === 'error' ? (r = m) : t === 'success' && (r = g),
    e.jsx(r, {
      className: a('dgs-ui-kit-shrink-0 dgs-ui-kit-my-[2px]', l.icon[t]),
      width: s.icon[i],
      height: s.icon[i],
    })
  );
}
const x = (t) => {
  const {
      variant: i = 'primary',
      size: r = 'small',
      title: d,
      text: y,
      primaryButton: n,
      outlineButton: o,
      closable: k,
      showTitleIcon: h = !0,
      className: f,
    } = t,
    [w, v] = B.useState(!0);
  return w
    ? e.jsxs('div', {
        className: a(
          'dgs-ui-kit-w-full dgs-ui-kit-flex dgs-ui-kit-gap-x-3 dgs-ui-kit-rounded-xl dgs-ui-kit-border dgs-ui-kit-border-solid',
          l.container[i],
          s.container[r],
          f,
        ),
        children: [
          h && j(i, r),
          e.jsxs('div', {
            className: 'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-flex-1',
            children: [
              !!d && e.jsx('div', { className: a(l.title[i], s.title[r]), children: d }),
              e.jsx('p', { className: a(l.text[i], s.text[r]), children: y }),
              (!!n?.text || !!o?.text) &&
                e.jsxs('div', {
                  className: a(
                    'dgs-ui-kit-flex dgs-ui-kit-gap-x-2 dgs-ui-kit-items-center',
                    r === 'large' ? 'dgs-ui-kit-mt-4' : 'dgs-ui-kit-mt-3',
                  ),
                  children: [
                    !!n?.text &&
                      e.jsx(u, {
                        variant: 'primary',
                        color: i,
                        size: 'small',
                        ...n,
                        children: n?.text,
                      }),
                    !!o?.text &&
                      e.jsx(u, {
                        variant: 'outline',
                        color: i,
                        size: 'small',
                        ...o,
                        children: o?.text,
                      }),
                  ],
                }),
            ],
          }),
          k &&
            e.jsx('button', {
              className: 'dgs-ui-kit-shrink-0 dgs-ui-kit-my-[2px] dgs-ui-kit-h-fit',
              onClick: () => v(!1),
              children: e.jsx(b, {
                className: a(l.close[i]),
                width: s.close[r],
                height: s.close[r],
              }),
            }),
        ],
      })
    : null;
};
x.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Alert',
  props: {
    variant: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'warning' | 'primary' | 'error' | 'success' | 'gray'",
        elements: [
          { name: 'literal', value: "'warning'" },
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'error'" },
          { name: 'literal', value: "'success'" },
          { name: 'literal', value: "'gray'" },
        ],
      },
      description: '',
    },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'large' | 'small'",
        elements: [
          { name: 'literal', value: "'large'" },
          { name: 'literal', value: "'small'" },
        ],
      },
      description: '',
    },
    title: { required: !1, tsType: { name: 'string' }, description: '' },
    text: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    primaryButton: { required: !1, tsType: { name: 'AlertButtonProps' }, description: '' },
    outlineButton: { required: !1, tsType: { name: 'AlertButtonProps' }, description: '' },
    closable: { required: !1, tsType: { name: 'boolean' }, description: '' },
    showTitleIcon: { required: !1, tsType: { name: 'boolean' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const q = {
    title: 'Components/Alert',
    component: x,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Alert from '@dgshahr/ui-kit/Alert';\nOr\nimport { Alert } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      variant: {
        options: ['warning', 'primary', 'error', 'success', 'gray'],
        control: { type: 'select' },
        table: {
          type: { summary: 'warning, primary, error, success, gray' },
          defaultValue: { summary: 'primary' },
        },
      },
      size: {
        options: ['large', 'small'],
        control: { type: 'select' },
        table: { type: { summary: 'large, small' }, defaultValue: { summary: 'small' } },
      },
      primaryButton: {
        table: {
          type: {
            detail: `interface AlertButtonProps extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'children'> {
text: string;
}`,
          },
        },
      },
      outlineButton: {
        table: {
          type: {
            detail: `interface AlertButtonProps extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'children'> {
text: string;
}`,
          },
        },
      },
      showTitleIcon: { table: { defaultValue: { summary: 'true' } } },
    },
  },
  c = {
    args: {
      title: 'عنوان پیام',
      closable: !0,
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      primaryButton: { text: 'عنوان' },
      outlineButton: { text: 'عنوان' },
    },
  };
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    title: 'عنوان پیام',
    closable: true,
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    primaryButton: {
      text: 'عنوان'
    },
    outlineButton: {
      text: 'عنوان'
    }
  }
}`,
      ...c.parameters?.docs?.source,
    },
  },
};
const z = ['Default'];
export { c as Default, z as __namedExportsOrder, q as default };
