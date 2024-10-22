import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Input from '@dgshahr/ui-kit/Form/Input';\nOr\nimport { Input } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    isError: {
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelContent: 'عنوان',
    hintMessage: 'متن راهنما',
  },
};
