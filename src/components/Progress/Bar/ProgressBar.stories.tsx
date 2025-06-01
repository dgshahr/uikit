import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from './index';

const meta = {
  title: 'Components/Progress/Bar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport ProgressBar from '@dgshahr/ui-kit/Progress/Bar';\nOr\nimport { ProgressBar } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
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
    currentShowType: {
      options: ['percentage', 'value'],
      control: { type: 'select' },
      table: {
        type: { summary: 'percentage, value' },
        defaultValue: {
          summary: 'percentage',
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
    current: 50,
    total: 100,
    color: 'primary',
    currentShowType: 'percentage',
    className: 'dgsuikit:w-[400px]',
  },
};
