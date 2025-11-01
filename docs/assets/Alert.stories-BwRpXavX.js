'use client';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as a } from './clsx-B-dksMZM.js';
import { r as B } from './index-CTzypqlY.js';
import { I as b } from './IconCheckCircleBold-EXAR5RF5.js';
import { I as v } from './IconCloseRemove-B6m37iwz.js';
import { B as d } from './index-CK5dQjob.js';
/* empty css               */ const g = (i) =>
  e.jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...i,
    children: e.jsx('path', {
      fill: 'currentColor',
      d: 'M10.628 3.353a2.85 2.85 0 0 1 3.85 1.09l7.268 12.614c.16.377.23.683.25 1.001a2.76 2.76 0 0 1-.73 2.021c-.51.554-1.2.881-1.95.921H4.68c-.31-.019-.62-.09-.91-.198-1.45-.585-2.15-2.23-1.56-3.656L9.53 4.433a2.73 2.73 0 0 1 1.099-1.08m1.37 11.92c-.48 0-.88.396-.88.873 0 .474.4.872.88.872s.87-.398.87-.883a.867.867 0 0 0-.87-.862m0-6.183c-.48 0-.88.386-.88.862v2.804c0 .475.4.873.88.873s.87-.398.87-.873V9.952a.866.866 0 0 0-.87-.862',
    }),
  });
g.__docgenInfo = { description: '', methods: [], displayName: 'IconDangerBold' };
const m = (i) =>
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
      d: 'M12.756 15.693a.75.75 0 0 1-1.5 0v-4.299a.75.75 0 0 1 1.5 0zM11.25 8.291a.75.75 0 0 1 1.5 0c0 .414-.336.782-.75.782s-.75-.305-.75-.719zM12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5',
      clipRule: 'evenodd',
    }),
  });
m.__docgenInfo = { description: '', methods: [], displayName: 'IconInfoCircleBold' };
const n = {
    container: {
      warning: 'dgsuikit:bg-warning-50 dgsuikit:border-warning-200',
      primary: 'dgsuikit:bg-primary-50 dgsuikit:border-primary-100',
      error: 'dgsuikit:bg-error-50 dgsuikit:border-error-200',
      success: 'dgsuikit:bg-success-50 dgsuikit:border-success-200',
      gray: 'dgsuikit:bg-gray-50 dgsuikit:border-gray-200',
    },
    icon: {
      warning: 'dgsuikit:text-warning-700',
      primary: 'dgsuikit:text-primary-400',
      error: 'dgsuikit:text-error-600',
      success: 'dgsuikit:text-success-600',
      gray: 'dgsuikit:text-gray-600',
    },
    title: {
      warning: 'dgsuikit:text-warning-800',
      primary: 'dgsuikit:text-primary-700',
      error: 'dgsuikit:text-error-700',
      success: 'dgsuikit:text-success-800',
      gray: 'dgsuikit:text-gray-800',
    },
    close: {
      warning: 'dgsuikit:text-warning-800',
      primary: 'dgsuikit:text-primary-600',
      error: 'dgsuikit:text-error-600',
      success: 'dgsuikit:text-success-800',
      gray: 'dgsuikit:text-gray-800',
    },
    text: {
      warning: 'dgsuikit:text-warning-800',
      primary: 'dgsuikit:text-primary-600',
      error: 'dgsuikit:text-error-600',
      success: 'dgsuikit:text-success-800',
      gray: 'dgsuikit:text-gray-700',
    },
  },
  s = {
    container: { large: 'dgsuikit:p-4', small: 'dgsuikit:p-3' },
    icon: { large: 24, small: 20 },
    title: { large: 'dgsuikit:font-h5-bold mb-2', small: 'dgsuikit:font-h6-bold mb-1' },
    close: { large: 20, small: 20 },
    text: { large: 'dgsuikit:font-p2-regular', small: 'dgsuikit:font-p3-regular' },
  };
function I(i, r) {
  let t = m;
  return (
    i === 'error' ? (t = g) : i === 'success' && (t = b),
    e.jsx(t, {
      className: a('dgsuikit:shrink-0 dgsuikit:my-[2px]', n.icon[i]),
      width: s.icon[r],
      height: s.icon[r],
    })
  );
}
const p = (i) => {
  const {
      variant: r = 'primary',
      size: t = 'small',
      title: c,
      text: x,
      primaryButton: o,
      outlineButton: l,
      closable: y,
      showTitleIcon: k = !0,
      className: f,
    } = i,
    [h, w] = B.useState(!0);
  return h
    ? e.jsxs('div', {
        className: a(
          'dgsuikit:w-full dgsuikit:flex dgsuikit:gap-x-3 dgsuikit:rounded-xl dgsuikit:border dgsuikit:border-solid',
          n.container[r],
          s.container[t],
          f,
        ),
        children: [
          k && I(r, t),
          e.jsxs('div', {
            className: 'dgsuikit:flex dgsuikit:flex-col dgsuikit:flex-1',
            children: [
              !!c && e.jsx('div', { className: a(n.title[r], s.title[t]), children: c }),
              e.jsx('p', { className: a(n.text[r], s.text[t]), children: x }),
              (!!o?.text || !!l?.text) &&
                e.jsxs('div', {
                  className: a(
                    'dgsuikit:flex dgsuikit:gap-x-2 dgsuikit:items-center',
                    t === 'large' ? 'dgsuikit:mt-4' : 'dgsuikit:mt-3',
                  ),
                  children: [
                    !!o?.text &&
                      e.jsx(d, {
                        variant: 'primary',
                        color: r,
                        size: 'small',
                        ...o,
                        children: o?.text,
                      }),
                    !!l?.text &&
                      e.jsx(d, {
                        variant: 'outline',
                        color: r,
                        size: 'small',
                        ...l,
                        children: l?.text,
                      }),
                  ],
                }),
            ],
          }),
          y &&
            e.jsx('button', {
              className: 'dgsuikit:shrink-0 dgsuikit:my-[2px] dgsuikit:h-fit',
              onClick: () => w(!1),
              children: e.jsx(v, {
                className: a(n.close[r]),
                width: s.close[t],
                height: s.close[t],
              }),
            }),
        ],
      })
    : null;
};
p.__docgenInfo = {
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
const _ = {
    title: 'Components/Alert',
    component: p,
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
  u = {
    args: {
      title: 'عنوان پیام',
      closable: !0,
      text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
      primaryButton: { text: 'عنوان' },
      outlineButton: { text: 'عنوان' },
    },
  };
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
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
      ...u.parameters?.docs?.source,
    },
  },
};
const P = ['Default'];
export { u as Default, P as __namedExportsOrder, _ as default };
