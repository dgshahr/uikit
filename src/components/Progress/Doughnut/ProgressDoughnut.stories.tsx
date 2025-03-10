import type { Meta, StoryObj } from '@storybook/react';

import ProgressDoughnut from './index';

const meta = {
  title: 'Components/Progress/Doughnut',
  component: ProgressDoughnut,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport ProgressDoughnut from '@dgshahr/ui-kit/Progress/Doughnut';\nOr\nimport { ProgressDoughnut } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    color: {
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    textClassName: {
      if: {
        arg: 'showText',
        eq: true,
      },
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof ProgressDoughnut>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: 1,
    total: 5,
  },
};
