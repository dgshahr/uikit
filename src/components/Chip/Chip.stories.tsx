import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import IconArrowDown2 from '../../icons/IconArrowDown2';
import IconUser from '../../icons/IconUser';

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
      options: ['xsmall', 'small', 'large'],
      table: {
        type: {
          summary: 'small, large',
        },
        defaultValue: { summary: 'small' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'gray'],
      table: {
        type: {
          summary: 'primary, gray',
        },
        defaultValue: { summary: 'primary' },
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
    rightIcon: <IconUser />,
    leftIcon: <IconArrowDown2 />,
  },
};
