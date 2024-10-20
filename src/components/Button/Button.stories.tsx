import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ArrowLeft2Icon from '../../icons/ArrowLeft2';
import ArrowRight2Icon from '../../icons/ArrowRight2';

import Button from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Button from '@dgshahr/ui-kit/Button';\nOr\nimport { Button } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    children: { control: 'object', table: { type: { summary: 'ReactNode' } } },
    rightIcon: { control: 'object', table: { type: { summary: 'ReactNode' } } },
    leftIcon: { control: 'object', table: { type: { summary: 'ReactNode' } } },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
      table: {
        type: { summary: 'primary, secondary, outline, text' },
      },
    },
    color: {
      options: ['primary', 'gray', 'success', 'error', 'warning'],
      control: 'select',
      table: {
        type: { summary: 'primary, gray, success, error, warning' },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: 'select',
      table: {
        type: { summary: 'small, medium, large' },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'عنوان',
    rightIcon: <ArrowRight2Icon />,
    leftIcon: <ArrowLeft2Icon />,
  },
};
