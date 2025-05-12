import { j as e } from './jsx-runtime-D_zvdyIk.js';
import { r as l } from './index-CTzypqlY.js';
import { B as o } from './index-DbviSDdO.js';
import { D as a } from './index-flx7qZcs.js';
import './clsx-B-dksMZM.js';
/* empty css               */ import './index-BRSOB10J.js';
import './index-X_f_OX5J.js';
import './IconCloseRemove-B6m37iwz.js';
const n = (t) =>
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
n.__docgenInfo = { description: '', methods: [], displayName: 'IconArrowLeftMd' };
const x = {
    title: 'Components/Drawer',
    component: a,
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
    },
  },
  d = (t) => {
    const [i, s] = l.useState(!1);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(o, { onClick: () => s(!0), children: 'open drawer' }),
        e.jsx(a, {
          ...t,
          open: i,
          onClose: () => s(!1),
          children: e.jsx('div', {
            className:
              'dgs-ui-kit-border dgs-ui-kit-border-primary-500 dgs-ui-kit-border-dashed dgs-ui-kit-bg-gray-50 dgs-ui-kit-text-gray-500 dgs-ui-kit-rounded-lg dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-h-[200px] dgs-ui-kit-w-[500px]',
            children: 'Component',
          }),
        }),
      ],
    });
  },
  r = {
    args: {
      open: !1,
      onClose: () => {},
      header: {
        title: 'عنوان',
        description: 'متن توضیحات',
        haveCloseIcon: !0,
        actionElement: e.jsx('button', { children: e.jsx(n, {}) }),
      },
      footer: {
        element: e.jsxs('div', {
          className: 'dgs-ui-kit-flex dgs-ui-kit-justify-end dgs-ui-kit-gap-2',
          children: [
            e.jsx(o, { variant: 'secondary', children: 'اولویت دوم' }),
            e.jsx(o, { children: 'اولویت اول' }),
          ],
        }),
      },
    },
    render: (t) => e.jsx(d, { ...t }),
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
      actionElement: <button>\r
          <IconArrowLeftMd />\r
        </button>
    },
    footer: {
      element: <div className="dgs-ui-kit-flex dgs-ui-kit-justify-end dgs-ui-kit-gap-2">\r
          <Button variant="secondary">اولویت دوم</Button>\r
          <Button>اولویت اول</Button>\r
        </div>
    }
  },
  render: args => <DrawerExample {...args} />
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
const k = ['Default'];
export { r as Default, k as __namedExportsOrder, x as default };
