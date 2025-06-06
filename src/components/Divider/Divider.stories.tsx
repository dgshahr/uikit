import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Divider from './index';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Divider from '@dgshahr/ui-kit/Divider';\nOr\nimport { Divider } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    size: {
      table: {
        defaultValue: { summary: 'thin' },
      },
    },
    color: {
      table: {
        defaultValue: { summary: 'gray' },
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'vertical',
    size: 'thin',
    color: 'gray',
  },
  render: (args) => (
    <div className="dgsuikit:w-[100px] dgsuikit:h-[100px] dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center">
      <Divider {...args} />
    </div>
  ),
};
