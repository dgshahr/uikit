import type { Meta, StoryObj } from '@storybook/react';
import React, { ComponentType } from 'react';
import Step from './Step';
import Stepper from './Stepper';
import QuestionMarkCircle from '../../icons/QuestionMarkCircle';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  subcomponents: { Step: Step as ComponentType<unknown> },
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

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    activeStep: 1,
    stepOrientation: 'horizontal',
    size: 'medium',
  },
  render: (args) => (
    <Stepper {...args}>
      <Step
        title="آیتم اول"
        subTitle="مرحله ۱ از ۳"
        icon={<QuestionMarkCircle />}
      />
      <Step
        title="آیتم دوم"
        subTitle="مرحله ۲ از ۳"
        icon={<QuestionMarkCircle />}
      />
      <Step
        title="آیتم سوم"
        subTitle="مرحله پایانی"
        icon={<QuestionMarkCircle />}
      />
    </Stepper>
  ),
};
