import { j as o } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { A as e, a as t } from './AccordionItem-DSp8yhbe.js';
import './clsx-B-dksMZM.js';
import './IconArrowDown2-BBhufJ55.js';
import './index-C2Tm7hBD.js';
/* empty css               */ const A = {
    title: 'Components/Accordion',
    component: t,
    subcomponents: { AccordionItem: e },
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
  r = {
    render: (n) =>
      o.jsxs(t, {
        ...n,
        children: [
          o.jsx(e, {
            title: 'عنوان اول',
            children:
              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          }),
          o.jsx(e, {
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
const l = ['Default'];
export { r as Default, l as __namedExportsOrder, A as default };
