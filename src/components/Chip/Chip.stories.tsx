import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ArrowDown2Icon from '../../icons/ArrowDown2';
import UserIcon from '../../icons/User';

import Chip from './index';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Chip from '@dgshahr/ui-kit/Chip';\nOr\nimport { Chip } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      table: {
        type: { summary: 'string | ReactNode' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      table: {
        type: {
          summary: 'small, large',
        },
        defaultValue: { summary: 'small' },
      },
    },
    clickable: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean', detail: 'if set to true changes element to "button"' },
      },
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'برچسب',
    rightIcon: <UserIcon />,
    leftIcon: <ArrowDown2Icon />,
  },
};
