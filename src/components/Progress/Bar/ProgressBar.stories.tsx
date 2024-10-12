import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from './index';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    title: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    progress: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      table: {
        type: { summary: 'primary, secondary' },
        defaultValue: {
          summary: 'primary',
        },
      },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'عنوان',
    progress: 50,
    color: 'primary',
    className: 'dgs-ui-kit-w-[400px]',
  },
};
