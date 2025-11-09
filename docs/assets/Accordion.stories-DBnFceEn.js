import { j as r } from './jsx-runtime-D_zvdyIk.js';
import './index-CTzypqlY.js';
import { A as e, a as t } from './AccordionItem-COKFqW-V.js';
import './clsx-B-dksMZM.js';
import './IconArrowDown2-BBhufJ55.js';
import './index-DKwzKZ1u.js';
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
  o = {
    render: (n) =>
      r.jsxs(t, {
        ...n,
        children: [
          r.jsx(e, {
            title: 'عنوان اول',
            children:
              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          }),
          r.jsx(e, {
            title: 'عنوان دوم',
            children:
              'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
          }),
        ],
      }),
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `{
  render: args => <AccordionGroup {...args}>
      <AccordionItem title="عنوان اول">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </AccordionItem>
      <AccordionItem title="عنوان دوم">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
        تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
      </AccordionItem>
    </AccordionGroup>
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const l = ['Default'];
export { o as Default, l as __namedExportsOrder, A as default };
