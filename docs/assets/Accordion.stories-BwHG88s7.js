'use client';
import { j as e } from './jsx-runtime-DEdD30eg.js';
import { r as l } from './index-RYns6xqu.js';
import { c } from './clsx-B-dksMZM.js';
import { I as N } from './IconArrowDown2-Eol_5cU7.js';
import { D as j } from './index-CGFy4d2-.js';
/* empty css               */ const h = l.createContext({
    activeKey: null,
    setActiveKey: () => {},
  }),
  v = () => l.useContext(h);
function w(i, t = !1) {
  if (!i) return t ? [] : null;
  const s = Array.isArray(i);
  return t ? (s ? i : [i]) : s ? i[0] : i;
}
const y = (i) => {
  const { defaultActiveKey: t, className: s, children: m, disableAccordion: p } = i,
    [g, f] = l.useState(w(t, p));
  return e.jsx('div', {
    className: c('dgs-ui-kit-flex dgs-ui-kit-flex-col', s),
    children: e.jsx(h.Provider, { value: { activeKey: g, setActiveKey: f }, children: m }),
  });
};
y.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'AccordionGroup',
  props: {
    defaultActiveKey: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'string | string[]',
        elements: [
          { name: 'string' },
          { name: 'Array', elements: [{ name: 'string' }], raw: 'string[]' },
        ],
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    disableAccordion: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
const u = (i) => {
  const {
      children: t,
      title: s,
      accordionKey: m,
      className: p,
      contentClassName: g,
      hideDivider: f = !1,
    } = i,
    { activeKey: r, setActiveKey: d } = v(),
    x = l.useId(),
    o = m ?? x,
    k = Array.isArray(r),
    n = k ? r.includes(o) : o === r;
  function A() {
    d(n ? (k ? r.filter((I) => I !== o) : null) : k ? [...r, o] : o);
  }
  return e.jsxs('div', {
    className: c('dgs-ui-kit-bg-white dgs-ui-kit-px-4 dgs-ui-kit-pt-4', p),
    children: [
      e.jsxs('button', {
        className: c(
          'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center dgs-ui-kit-w-full',
          n ? 'dgs-ui-kit-text-primary-500' : 'dgs-ui-kit-text-gray-600',
        ),
        onClick: A,
        children: [
          e.jsx('div', {
            className: n ? 'dgs-ui-kit-font-h5-bold' : 'dgs-ui-kit-font-p1-medium',
            children: s,
          }),
          e.jsx(N, {
            className: c(
              'dgs-ui-kit-transition dgs-ui-kit-duration-300 dgs-ui-kit-ease-in-out dgs-ui-kit-shrink-0 dgs-ui-kit-w-auto dgs-ui-kit-h-auto',
              n && 'dgs-ui-kit-rotate-180',
            ),
            width: 20,
            height: 20,
          }),
        ],
      }),
      e.jsx('div', {
        className: c(
          'dgs-ui-kit-grid dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-600 dgs-ui-kit-overflow-hidden dgs-ui-kit-transition-all dgs-ui-kit-duration-300 dgs-ui-kit-ease-in-out',
          n
            ? 'dgs-ui-kit-grid-rows-[1fr] dgs-ui-kit-opacity-100 dgs-ui-kit-mt-3'
            : 'dgs-ui-kit-grid-rows-[0fr] dgs-ui-kit-opacity-0',
          g,
        ),
        children: e.jsx('div', { className: 'dgs-ui-kit-overflow-hidden', children: t }),
      }),
      !f && e.jsx(j, { type: 'horizontal', color: 'white', className: 'dgs-ui-kit-mt-4' }),
    ],
  });
};
u.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'AccordionItem',
  props: {
    title: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    accordionKey: { required: !1, tsType: { name: 'string' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    contentClassName: { required: !1, tsType: { name: 'string' }, description: '' },
    hideDivider: { required: !1, tsType: { name: 'boolean' }, description: '' },
  },
};
const G = {
    title: 'Components/Accordion',
    component: y,
    subcomponents: { AccordionItem: u },
    parameters: {
      docs: {
        description: {
          component:
            "### \n```js\nimport { AccordionGroup, AccordionItem } from '@dgshahr/ui-kit/Accordion';\nOr\nimport { AccordionGroup, AccordionItem } from '@dgshahr/ui-kit';\n```",
        },
      },
    },
    argTypes: {
      disableAccordion: {
        description:
          "disable accordion effect and multiple 'AcordionItem' can be open at same time.",
      },
    },
  },
  a = {
    render: (i) =>
      e.jsxs(y, {
        ...i,
        children: [
          e.jsx(u, {
            title: 'عنوان اول',
            children:
              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          }),
          e.jsx(u, {
            title: 'عنوان دوم',
            children:
              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          }),
        ],
      }),
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
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
      ...a.parameters?.docs?.source,
    },
  },
};
const _ = ['Default'];
export { a as Default, _ as __namedExportsOrder, G as default };
