import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as p } from './index-CTzypqlY.js';
import { B as i } from './index-B_Eb74RL.js';
import { S as c, c as m } from './cities-CSGxbvCK.js';
import { D as n } from './PickerWrapper-CWV4OkbI.js';
import './clsx-B-dksMZM.js';
/* empty css               */ import './index-BsBdBjjS.js';
import './IconEye-Cb9e2e14.js';
import './omitObjects-DTdUR98j.js';
import './TextFieldWrapper-CpAjtkAK.js';
import './FieldBottomInfo-DcydcAx7.js';
import './IconInfoCircleOutline-Dd1i2qLz.js';
import './IconSearch-BpsoWpUw.js';
import './index-Cp0Z7hmX.js';
import './IconMinus4-BhTKwdYo.js';
import './RadioCheckboxWrapper-BXWfagIk.js';
import './index-D_mZYS_m.js';
import './index-BDor-GfJ.js';
import './index-BRSOB10J.js';
import './index-X_f_OX5J.js';
import './IconCloseRemove-B6m37iwz.js';
import './isBrowser-CEYOmsdG.js';
import './useFlipPosition-Cg5sZ8Du.js';
import './index-GdYbSsJO.js';
import './useOutsideClick-BZ98SsGu.js';
import './IconArrowDown2-BBhufJ55.js';
const s = (t) =>
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
      d: 'M12.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H5a.75.75 0 0 1 0-1.5h12.19l-4.72-4.72a.75.75 0 0 1 0-1.06',
      clipRule: 'evenodd',
    }),
  });
s.__docgenInfo = { description: '', methods: [], displayName: 'IconArrowLeftMd' };
const H = {
    title: 'Components/Drawer',
    component: n,
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport Drawer from '@dgshahr/ui-kit/Drawer';\nOr\nimport { Drawer } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      open: { control: { type: 'boolean', disable: !0 } },
      onClose: { control: { type: 'object', disable: !0 } },
      children: { control: { disable: !0 }, table: { type: { summary: 'ReactNode' } } },
      persist: { control: { type: 'boolean' }, table: { type: { summary: 'boolean' } } },
      width: { control: { type: 'number' }, table: { type: { summary: 'number' } } },
      position: {
        control: { type: 'select' },
        options: ['bottom', 'top', 'right', 'left', 'center'],
        table: {
          type: { summary: 'bottom, top, right, left, center' },
          defaultValue: { summary: 'bottom' },
        },
      },
      className: {
        control: { type: 'text' },
        description: 'modal card class',
        table: { type: { summary: 'string' } },
      },
      maskClassName: {
        control: { type: 'text' },
        description: 'black screen class',
        table: { type: { summary: 'string' } },
      },
      containerClassName: {
        control: { type: 'text' },
        description: 'dialog body container class',
        table: { type: { summary: 'string' } },
      },
      padding: {
        control: { type: 'number' },
        table: { type: { summary: 'number' }, defaultValue: { summary: '8' } },
      },
      header: {
        control: { type: 'object' },
        table: {
          type: {
            summary: 'DrawerHeaderType',
            detail: `{
 title?: string;
 description?: string;
 haveCloseIcon?: boolean;
 actionElement?: ReactNode;
 containerClassName?: string;
 }`,
          },
        },
      },
      footer: {
        control: { type: 'object' },
        table: {
          type: {
            summary: 'DrawerFooterType',
            detail: `{
 element?: ReactNode;
 containerClassName?: string; 
}`,
          },
        },
      },
      containerElement: {
        control: { type: 'object' },
        description:
          "CAUTION: this will change the mask position to 'absolute' to fit in your container so it's not going to positioned relative to viewport.",
        table: { type: { summary: 'Element' }, defaultValue: { summary: 'document.body' } },
      },
      havePopover: {
        control: { type: 'boolean' },
        table: { type: { summary: 'boolean' } },
        description:
          'If your drawer content has a popover, set this to true to avoid overflow hidden on the drawer body.',
      },
    },
  },
  l = (t) => {
    const [d, a] = p.useState(!1);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(i, { onClick: () => a(!0), children: 'open drawer' }),
        e.jsx(n, { ...t, open: d, onClose: () => a(!1), children: t.children }),
      ],
    });
  },
  o = {
    args: {
      open: !1,
      onClose: () => {},
      header: {
        title: 'عنوان',
        description: 'متن توضیحات',
        haveCloseIcon: !0,
        actionElement: e.jsx('button', { children: e.jsx(s, {}) }),
      },
      footer: {
        element: e.jsxs('div', {
          className: 'dgsuikit:flex dgsuikit:justify-end dgsuikit:gap-2',
          children: [
            e.jsx(i, { variant: 'secondary', children: 'اولویت دوم' }),
            e.jsx(i, { children: 'اولویت اول' }),
          ],
        }),
      },
      children: e.jsx('div', {
        className:
          'dgsuikit:border dgsuikit:border-primary-500 dgsuikit:border-dashed dgsuikit:bg-gray-50 dgsuikit:text-gray-500 dgsuikit:rounded-lg dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:h-[200px] dgsuikit:w-[500px]',
        children: 'Component',
      }),
    },
    render: (t) => e.jsx(l, { ...t }),
  },
  u = Object.values(m ?? {})
    .flat()
    .map((t) => ({ label: t.title, value: t.id })),
  r = {
    args: {
      open: !1,
      onClose: () => {},
      header: {
        title: 'عنوان',
        description: 'متن توضیحات',
        haveCloseIcon: !0,
        actionElement: e.jsx('button', { children: e.jsx(s, {}) }),
      },
      position: 'center',
      havePopover: !0,
      children: e.jsx(c, {
        optionCellClassName: 'dgsuikit:[direction:rtl]',
        options: u,
        value: 301,
        onChange: () => {},
      }),
    },
    render: (t) => e.jsx(l, { ...t }),
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    open: false,
    onClose: () => {},
    header: {
      title: 'عنوان',
      description: 'متن توضیحات',
      haveCloseIcon: true,
      actionElement: <button>
          <IconArrowLeftMd />
        </button>
    },
    footer: {
      element: <div className="dgsuikit:flex dgsuikit:justify-end dgsuikit:gap-2">
          <Button variant="secondary">اولویت دوم</Button>
          <Button>اولویت اول</Button>
        </div>
    },
    children: <div className="dgsuikit:border dgsuikit:border-primary-500 dgsuikit:border-dashed dgsuikit:bg-gray-50 dgsuikit:text-gray-500 dgsuikit:rounded-lg dgsuikit:flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:h-[200px] dgsuikit:w-[500px]">
        Component
      </div>
  },
  render: args => <DrawerExample {...args} />
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  args: {
    open: false,
    onClose: () => {},
    header: {
      title: 'عنوان',
      description: 'متن توضیحات',
      haveCloseIcon: true,
      actionElement: <button>
          <IconArrowLeftMd />
        </button>
    },
    position: 'center',
    havePopover: true,
    children: <Select optionCellClassName="dgsuikit:[direction:rtl]" options={selectOptions} value={301} onChange={() => {}} />
  },
  render: args => <DrawerExample {...args} />
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
const W = ['Default', 'WithPopover'];
export { o as Default, r as WithPopover, W as __namedExportsOrder, H as default };
