import type { Meta, StoryObj } from '@storybook/react';
import React, { ComponentType } from 'react';
import HorizontalStep from './Step';
import HorizontalStepper from './Stepper';
import QuestionMarkCircle from '../../../icons/QuestionMarkCircle';

const meta: Meta<typeof HorizontalStepper> = {
  title: 'Components/Stepper/Horizontal',
  component: HorizontalStepper,
  subcomponents: { Step: HorizontalStep as ComponentType<unknown> },
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport { HorizontalStepper, HorizontalStep } from '@dgshahr/ui-kit/Stepper/Horizontal';\nOr\nimport { HorizontalStepper, HorizontalStep } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    activeStep: { control: { type: 'number', min: 0, max: 2 } },
    stepOrientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof HorizontalStepper>;

export const Default: Story = {
  args: {
    activeStep: 1,
    stepOrientation: 'horizontal',
    size: 'medium',
  },
  render: (args) => (
    <HorizontalStepper {...args}>
      <HorizontalStep
        title="آیتم اول"
        subTitle="مرحله ۱ از ۳"
        icon={<QuestionMarkCircle />}
      />
      <HorizontalStep
        title="آیتم دوم"
        subTitle="مرحله ۲ از ۳"
        icon={<QuestionMarkCircle />}
      />
      <HorizontalStep
        title="آیتم سوم"
        subTitle="مرحله پایانی"
        icon={<QuestionMarkCircle />}
      />
    </HorizontalStepper>
  ),
};
