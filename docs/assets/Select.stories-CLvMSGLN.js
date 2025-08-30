import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { c as f } from './clsx-B-dksMZM.js';
import { r as m } from './index-CTzypqlY.js';
import { S as d, c as b } from './cities-CFDZDiRv.js';
import { I as k } from './IconArrowDown2-BBhufJ55.js';
import { f as h } from './helpers-BLnSDN_K.js';
import { B as v } from './index-Bm2rxIXH.js';
import { B as p } from './index-DiI6qq6V.js';
import './index-hrKH6_ny.js';
import './IconEye-Cb9e2e14.js';
import './omitObjects-DTdUR98j.js';
import './TextFieldWrapper-BThJJOPm.js';
import './FieldBottomInfo-Dl0xKUm9.js';
import './IconInfoCircleOutline-Dd1i2qLz.js';
/* empty css               */ import './IconSearch-BpsoWpUw.js';
import './index-Cqyfd4gx.js';
import './IconMinus4-BhTKwdYo.js';
import './RadioCheckboxWrapper-IgOnnqme.js';
import './PickerWrapper-TXgLp7rB.js';
import './index-BRSOB10J.js';
import './index-X_f_OX5J.js';
import './IconCloseRemove-B6m37iwz.js';
import './useFlipPosition-D78LAv0q.js';
import './index-GdYbSsJO.js';
import './index-RpIL3XDR.js';
const c = (t) =>
  e.jsxs('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '1em',
    height: '1em',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...t,
    children: [
      e.jsx('path', {
        fill: 'currentColor',
        d: 'M17.332 18.393H7.17a2.87 2.87 0 0 1-2.6-4.092l.433-.919c.264-.555.4-1.161.4-1.776v-1.224a6.847 6.847 0 1 1 13.694 0v1.223a4.2 4.2 0 0 0 .4 1.776l.433.92a2.87 2.87 0 0 1-2.6 4.091zM12.251 5.035a5.354 5.354 0 0 0-5.347 5.348v1.224c0 .835-.185 1.659-.54 2.414l-.432.92a1.37 1.37 0 0 0 1.239 1.952h10.162a1.37 1.37 0 0 0 1.239-1.953l-.432-.92a5.7 5.7 0 0 1-.54-2.414v-1.223a5.354 5.354 0 0 0-5.349-5.348',
      }),
      e.jsx('path', {
        fill: 'currentColor',
        d: 'M12.25 5.036a.75.75 0 0 1-.75-.75V3A.75.75 0 1 1 13 3v1.286a.75.75 0 0 1-.75.75M4.686 7.23a.75.75 0 0 1-.682-1.062 7.94 7.94 0 0 1 2.337-2.926.75.75 0 1 1 .922 1.182 6.44 6.44 0 0 0-1.9 2.37.75.75 0 0 1-.677.437M19.812 7.23a.75.75 0 0 1-.681-.437 6.4 6.4 0 0 0-1.895-2.37.751.751 0 1 1 .922-1.181 7.9 7.9 0 0 1 2.336 2.927.75.75 0 0 1-.37 1 .8.8 0 0 1-.312.062M12.25 21.75a3.63 3.63 0 0 1-3.629-3.628.75.75 0 0 1 1.5 0 2.128 2.128 0 1 0 4.255 0 .75.75 0 1 1 1.5 0 3.63 3.63 0 0 1-3.627 3.628',
      }),
    ],
  });
c.__docgenInfo = { description: '', methods: [], displayName: 'IconRinging3Outline' };
const X = {
    title: 'Components/Form/Select',
    component: d,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Select from '@dgshahr/ui-kit/Form/Select';\nOr\nimport { Select } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    beforeEach: () => h({ alignItems: 'flex-start', height: '450px' }),
    argTypes: {
      options: {
        control: { type: 'object', disable: !0 },
        table: {
          type: {
            summary: 'Option<T>[]',
            detail: `{
  value: T;
  label: string;
  disabled?: boolean;
}`,
          },
        },
      },
      value: {
        control: 'object',
        table: {
          type: { summary: 'T | T[]', detail: "it should be array if select is 'multiple' mode." },
        },
      },
      onChange: {
        control: 'object',
        type: 'function',
        table: {
          type: {
            summary: 'onChange: (value: T | T[]) => void',
            detail: "value argumant is array if select is 'multiple' mode.",
          },
        },
      },
      mode: {
        control: { type: 'select' },
        options: ['single', 'multiple'],
        table: { type: { summary: 'single, multiple' }, defaultValue: { summary: 'single' } },
      },
      separateSelectedOptions: {
        control: 'boolean',
        table: { type: { summary: 'boolean', detail: "only available in 'multiple' mode" } },
      },
      optionsTitle: {
        control: 'text',
        table: { type: { summary: 'string', detail: "only available in 'multiple' mode." } },
      },
      customInput: {
        control: 'object',
        type: 'function',
        table: {
          type: {
            summary: '(isShowOptions: boolean) => ReactNode',
            detail: "only available if 'inputProps' is not provided",
          },
        },
      },
      inputProps: {
        control: 'object',
        table: {
          type: {
            summary: "Omit<InputProps, 'leftIcon'>",
            detail: "only available if 'customInput' is not provided",
          },
        },
      },
      dropdownType: {
        control: { type: 'select' },
        options: ['popover', 'drawer'],
        table: { type: { summary: 'popover, drawer' }, defaultValue: { summary: 'popover' } },
      },
      drawerProps: {
        control: 'object',
        table: {
          type: {
            summary: "Omit<DrawerProps, 'children' | 'onClose' | 'open'>",
            detail: "only available if dropdownType='drawer'",
          },
        },
      },
      popoverClassName: {
        control: 'text',
        table: { type: { summary: 'string', detail: "only available if dropdownType='popover'" } },
      },
      optionCell: {
        control: 'object',
        type: 'function',
        table: { type: { summary: '(option: Option<T>, isActive: boolean) => ReactNode' } },
      },
      beforeOptions: { description: 'before options in options container' },
      afterOptions: { description: 'after options in options container' },
      searchable: {
        control: 'boolean',
        table: {
          type: {
            summary: "boolean | Omit<InputProps, 'onChange'>",
            detail: "if set to 'true' it will show search input on options with default props",
          },
          defaultValue: { summary: 'true' },
        },
      },
    },
  },
  u = Object.values(b ?? {})
    .flat()
    .map((t) => ({ label: t.title, value: t.id })),
  j = { options: u, inputProps: { placeholder: 'متن نما', postfix: 'پسوند' } },
  S = {
    options: u,
    inputProps: { placeholder: 'متن نما' },
    optionCell(t, i) {
      return e.jsxs('div', {
        className: 'dgsuikit:flex dgsuikit:justify-between dgsuikit:items-center',
        children: [
          e.jsxs('div', {
            className: 'dgsuikit:flex dgsuikit:items-center',
            children: [
              e.jsx('div', {
                className:
                  'dgsuikit:bg-gray-600 dgsuikit:w-5 dgsuikit:h-5 dgsuikit:rounded dgsuikit:ml-3',
              }),
              e.jsxs('span', {
                className: 'dgsuikit:font-p1-regular dgsuikit:text-gray-700',
                children: [t.label, ' ', i && 'انتخاب شده'],
              }),
            ],
          }),
          t.disabled &&
            e.jsxs('div', {
              className:
                'dgsuikit:flex dgsuikit:flex-col dgsuikit:justify-center dgsuikit:items-center',
              children: [
                e.jsx(c, { width: 16, height: 16 }),
                e.jsx('span', {
                  className: 'dgsuikit:mt-1 dgsuikit:font-oveline-demibold',
                  children: 'ناموجود',
                }),
              ],
            }),
        ],
      });
    },
  },
  g = {
    options: u,
    inputProps: {
      placeholder: 'متن نما',
      postfix: 'پسوند',
      containerClassName: 'dgsuikit:min-w-[300px] dgsuikit:max-w-[400px]',
    },
    beforeOptions: e.jsxs('div', {
      className:
        'dgsuikit:flex dgsuikit:gap-3 dgsuikit:px-3 dgsuikit:justify-end dgsuikit:items-center',
      children: [
        e.jsx(p, {
          variant: 'text',
          size: 'small',
          className: 'dgsuikit:!px-0',
          children: 'انتخاب همه',
        }),
        e.jsx(p, {
          variant: 'text',
          size: 'small',
          className: 'dgsuikit:!px-0',
          color: 'error',
          children: 'حذف انتخاب‌ها',
        }),
      ],
    }),
    afterOptions: e.jsx('div', {
      className: 'dgsuikit:pt-3 dgsuikit:px-3 dgsuikit:flex dgsuikit:justify-end',
      children: e.jsx(p, { children: 'اعمال' }),
    }),
  },
  y = (t) => {
    const [i, l] = m.useState(0);
    return e.jsx(d, { ...t, value: i, onChange: (n) => l(n) });
  },
  s = { args: j, render: (t) => e.jsx(y, { ...t }) },
  r = { args: S, render: (t) => e.jsx(y, { ...t }) },
  x = (t) => {
    const [i, l] = m.useState([]);
    return e.jsx(d, { ...t, mode: 'multiple', value: i, onChange: (n) => l(n) });
  },
  o = { args: g, render: (t) => e.jsx(x, { ...t }) },
  a = {
    args: {
      ...g,
      customInput(t) {
        return e.jsxs('div', {
          className: f(
            'dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-2 dgsuikit:bg-gray-100 dgsuikit:py-3 dgsuikit:px-4 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-solid dgsuikit:transition',
            t
              ? 'dgsuikit:border-primary-500 dgsuikit:text-primary-500'
              : 'dgsuikit:border-transparent dgsuikit:text-gray-700',
          ),
          children: [
            e.jsx('span', { children: 'شهر' }),
            e.jsx(v, { value: '۳', valueType: 'number' }),
            e.jsx(k, { width: 16, height: 16 }),
          ],
        });
      },
    },
    render: (t) => e.jsx(x, { ...t }),
  };
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `{
  args: defaultProps as Story['args'],
  render: args => <SelectExample {...args as typeof defaultProps} />
}`,
      ...s.parameters?.docs?.source,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: customOptionProps as Story['args'],
  render: args => <SelectExample {...args as typeof customOptionProps} />
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: multiSelectProps as Story['args'],
  render: args => <MultiSelectExample {...args as typeof multiSelectProps} />
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    ...multiSelectProps,
    customInput(isShowOptions) {
      return <div className={clsx('dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-2 dgsuikit:bg-gray-100 dgsuikit:py-3 dgsuikit:px-4 dgsuikit:rounded-lg dgsuikit:border dgsuikit:border-solid dgsuikit:transition', isShowOptions ? 'dgsuikit:border-primary-500 dgsuikit:text-primary-500' : 'dgsuikit:border-transparent dgsuikit:text-gray-700')}>\r
          <span>شهر</span>\r
          <Badge value="۳" valueType="number" />\r
          <IconArrowDown2 width={16} height={16} />\r
        </div>;
    }
  } as never,
  render: args => <MultiSelectExample {...args as typeof multiSelectProps} />
}`,
      ...a.parameters?.docs?.source,
    },
  },
};
const Y = ['Default', 'CustomOption', 'MultiSelect', 'MultiSelectCustomInput'];
export {
  r as CustomOption,
  s as Default,
  o as MultiSelect,
  a as MultiSelectCustomInput,
  Y as __namedExportsOrder,
  X as default,
};
