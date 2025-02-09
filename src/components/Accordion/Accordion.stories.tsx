import type { Meta, StoryObj } from '@storybook/react';
import React, { ComponentType } from 'react';
import { AccordionGroup, AccordionItem } from './index';

const meta = {
  title: 'Components/Accordion',
  component: AccordionGroup,
  subcomponents: { AccordionItem: AccordionItem as ComponentType<unknown> },
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport { AccordionGroup, AccordionItem } from '@dgshahr/ui-kit/Accordion';\nOr\nimport { AccordionGroup, AccordionItem } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    disableAccordion: {
      description: "disable accordion effect and multiple 'AcordionItem' can be open at same time.",
    },
  },
} satisfies Meta<typeof AccordionGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AccordionGroup {...args}>
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
  ),
};
