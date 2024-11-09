import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './index';

const meta = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Textarea from '@dgshahr/ui-kit/Form/Textarea';\nOr\nimport { Textarea } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    labelAddon: {
      description: 'A React node that is placed between the label and input field.',
      control: 'text', // You can use `control: { type: 'text' }` for basic representation or customize it as needed
    },
    isError: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    errorMessage: {
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelContent: 'عنوان',
    hintMessage: 'متن راهنما',
  },
};
