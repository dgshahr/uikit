import type { Meta, StoryObj } from '@storybook/react';

import Badge from './index';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Badge from '@dgshahr/ui-kit/Badge';\nOr\nimport { Badge } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    type: {
      options: ['twoTone', 'solid'],
      control: { type: 'select' },
      table: {
        type: { summary: 'twoTone, solid' },
        defaultValue: {
          summary: 'solid',
        },
      },
    },
    valueType: {
      options: ['text', 'number'],
      control: { type: 'select' },
      table: {
        type: { summary: 'text, number' },
        defaultValue: {
          summary: 'text',
        },
      },
    },
    icon: {
      if: { arg: 'valueType', eq: 'text' },
      control: { type: 'text' },
      description: "available only when valueType = 'text'",
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    color: {
      options: [
        'primary',
        'secondary',
        'gray',
        'success',
        'error',
        'warning',
        'sky',
        'violet',
        'flamingo',
      ],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'primary, secondary, gray, success, error, warning, sky, violet, flamingo',
        },
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      table: {
        type: { summary: 'small, medium, large' },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    value: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string, number' },
      },
    },
    width: {
      control: { type: 'number' },
      table: {
        type: { summary: 'string, number' },
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'متن تستی',
    valueType: 'text',
    type: 'solid',
    size: 'medium',
    color: 'primary',
  },
};
