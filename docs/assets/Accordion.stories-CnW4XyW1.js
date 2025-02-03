'use client';
import { j as i } from './jsx-runtime-DEdD30eg.js';
import { r as n } from './index-RYns6xqu.js';
import { c as s } from './clsx-B-dksMZM.js';
import { A as h } from './ArrowDown2-BROvoNUr.js';
import { D as y } from './index-riJfK5zl.js';
/* empty css               */ const k = n.createContext({
    activeKey: null,
    setActiveKey: () => {},
  }),
  A = () => n.useContext(k),
  m = (t) => {
    const { defaultActiveKey: c = null, className: d, children: a } = t,
      [u, l] = n.useState(c);
    return i.jsx('div', {
      className: s('dgs-ui-kit-flex dgs-ui-kit-flex-col', d),
      children: i.jsx(k.Provider, { value: { activeKey: u, setActiveKey: l }, children: a }),
    });
  };
m.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'AccordionGroup',
  props: {
    defaultActiveKey: { required: !1, tsType: { name: 'string' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const o = (t) => {
  const { children: c, title: d, accordionKey: a, className: u, contentClassName: l } = t,
    { activeKey: f, setActiveKey: p } = A(),
    x = n.useId(),
    g = a ?? x,
    e = g === f;
  return i.jsxs('div', {
    className: s('dgs-ui-kit-bg-white dgs-ui-kit-px-4 dgs-ui-kit-pt-4', u),
    children: [
      i.jsxs('button', {
        className: s(
          'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center dgs-ui-kit-w-full',
          e ? 'dgs-ui-kit-text-primary-500' : 'dgs-ui-kit-text-gray-600',
        ),
        onClick: () => {
          p(e ? null : g);
        },
        children: [
          i.jsx('div', {
            className: e ? 'dgs-ui-kit-font-h5-bold' : 'dgs-ui-kit-font-p1-medium',
            children: d,
          }),
          i.jsx(h, {
            className: s(
              'dgs-ui-kit-transition dgs-ui-kit-duration-300 dgs-ui-kit-ease-in-out dgs-ui-kit-shrink-0 dgs-ui-kit-w-auto dgs-ui-kit-h-auto',
              e && 'dgs-ui-kit-rotate-180',
            ),
            width: 20,
            height: 20,
          }),
        ],
      }),
      i.jsx('div', {
        className: s(
          'dgs-ui-kit-grid dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-600 dgs-ui-kit-overflow-hidden dgs-ui-kit-transition-all dgs-ui-kit-duration-300 dgs-ui-kit-ease-in-out',
          e
            ? 'dgs-ui-kit-grid-rows-[1fr] dgs-ui-kit-opacity-100 dgs-ui-kit-mt-3'
            : 'dgs-ui-kit-grid-rows-[0fr] dgs-ui-kit-opacity-0',
          l,
        ),
        children: i.jsx('div', { className: 'dgs-ui-kit-overflow-hidden', children: c }),
      }),
      i.jsx(y, { type: 'horizontal', color: 'white', className: 'dgs-ui-kit-mt-4' }),
    ],
  });
};
o.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'AccordionItem',
  props: {
    title: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    accordionKey: { required: !1, tsType: { name: 'string' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    contentClassName: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
const C = {
    title: 'Components/Accordion',
    component: m,
    subcomponents: { AccordionItem: o },
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport { AccordionGroup, AccordionItem } from '@dgshahr/ui-kit/Accordion';\nOr\nimport { AccordionGroup, AccordionItem } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {},
  },
  r = {
    render: (t) =>
      i.jsxs(m, {
        ...t,
        children: [
          i.jsx(o, {
            title: 'عنوان اول',
            children:
              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          }),
          i.jsx(o, {
            title: 'عنوان دوم',
            children:
              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          }),
        ],
      }),
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <AccordionGroup {...args}>\r
      <AccordionItem title="عنوان اول">\r
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است\r
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی\r
        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.\r
      </AccordionItem>\r
      <AccordionItem title="عنوان دوم">\r
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است\r
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی\r
        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.\r
      </AccordionItem>\r
    </AccordionGroup>
}`,
      ...r.parameters?.docs?.source,
    },
  },
};
const T = ['Default'];
export { r as Default, T as __namedExportsOrder, C as default };
