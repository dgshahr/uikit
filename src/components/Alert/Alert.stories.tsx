import type { Meta, StoryObj } from '@storybook/react';

import Alert from './index';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Alert from '@dgshahr/ui-kit/Alert';\nOr\nimport { Alert } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    variant: {
      options: ['warning', 'primary', 'error', 'success', 'gray'],
      control: { type: 'select' },
      table: {
        type: { summary: 'warning, primary, error, success, gray' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'select' },
      table: {
        type: { summary: 'large, small' },
        defaultValue: { summary: 'small' },
      },
    },
    primaryButton: {
      table: {
        type: {
          detail:
            "interface AlertButtonProps extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'children'> {\ntext: string;\n}",
        },
      },
    },
    outlineButton: {
      table: {
        type: {
          detail:
            "interface AlertButtonProps extends Omit<ButtonProps, 'variant' | 'color' | 'size' | 'children'> {\ntext: string;\n}",
        },
      },
    },
    showTitleIcon: {
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'عنوان پیام',
    closable: true,
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
    primaryButton: { text: 'عنوان' },
    outlineButton: { text: 'عنوان' },
  },
};
