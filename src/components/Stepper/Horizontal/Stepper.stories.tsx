import type { Meta, StoryObj } from '@storybook/react';
import React, { ComponentType } from 'react';
import HorizontalStep from './Step';
import HorizontalStepper from './Stepper';
import IconAlignCenter from '../../../icons/IconAlignCenter';
import IconCheckCircleBold from '../../../icons/IconCheckCircleBold';
import IconQuestionMarkCircle from '../../../icons/IconQuestionMarkCircle';

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
    activeStep: { control: { type: 'number', min: 0, max: 3 } },
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
        activeTitle="آیتم انتخاب شده"
        completeTitle="مرحله تمام شده"
        subTitle="مرحله ۱ از ۴"
        icon={<IconQuestionMarkCircle />}
        activeIcon={<IconAlignCenter />}
        completeIcon={<IconCheckCircleBold />}
      />
      <HorizontalStep
        title="آیتم دوم"
        activeTitle="آیتم انتخاب شده"
        completeTitle="مرحله تمام شده"
        subTitle="مرحله ۲ از ۴"
        icon={<IconQuestionMarkCircle />}
        activeIcon={<IconAlignCenter />}
        completeIcon={<IconCheckCircleBold />}
      />
      <HorizontalStep
        title="آیتم سوم"
        activeTitle="آیتم انتخاب شده"
        completeTitle="مرحله تمام شده"
        subTitle="مرحله ۳ از ۴"
        icon={<IconQuestionMarkCircle />}
        activeIcon={<IconAlignCenter />}
        completeIcon={<IconCheckCircleBold />}
      />
      <HorizontalStep
        title="آیتم چهارم"
        activeTitle="آیتم انتخاب شده"
        completeTitle="مرحله تمام شده"
        subTitle="مرحله پایانی"
        icon={<IconQuestionMarkCircle />}
        activeIcon={<IconAlignCenter />}
        completeIcon={<IconCheckCircleBold />}
      />
    </HorizontalStepper>
  ),
};
