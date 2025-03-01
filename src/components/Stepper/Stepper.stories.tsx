import type { Meta, StoryObj } from '@storybook/react';
import type { SVGProps } from 'react';
import React from 'react';
import Step from './Step';
import Stepper from './Stepper';

const AddUserBoldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.5 15.015c4.067 0 7.5.67 7.5 3.254S13.545 21.5 9.5 21.5c-4.067 0-7.5-.67-7.5-3.254s3.454-3.23 7.5-3.23M18.999 7.5c.496 0 .899.41.899.912v1.176H21.1c.495 0 .899.41.899.912a.907.907 0 0 1-.899.911h-1.203v1.177a.906.906 0 0 1-.899.912.907.907 0 0 1-.899-.912v-1.177h-1.201A.906.906 0 0 1 16 10.5c0-.502.403-.911.899-.911H18.1V8.412c0-.503.404-.912.899-.912M9.5 2.5c2.755 0 4.963 2.237 4.963 5.027s-2.208 5.027-4.963 5.027-4.963-2.237-4.963-5.027S6.745 2.5 9.5 2.5"
    />
  </svg>
);

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    activeStep: { control: { type: 'number', min: 0, max: 2 } },
    orientation: {
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
    orientation: 'horizontal',
    size: 'medium',
  },
  render: (args) => {
    return (
      <Stepper {...args}>
        <Step
          title="اولش"
          subTitle="چیز"
          icon={<AddUserBoldIcon />}
        />
        <Step
          title="وسطش"
          subTitle="چیز"
          icon={<AddUserBoldIcon />}
        />
        <Step
          title="آخرش"
          subTitle="چیز"
          icon={<AddUserBoldIcon />}
        />
      </Stepper>
    );
  },
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    orientation: 'vertical',
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};
