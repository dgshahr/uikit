import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';
import Input, { InputProps } from './index';

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
    labelAddon: {
      description: 'A React node that is placed between the label and input field.',
      control: 'text',
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
    maxLength: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
    showMaxLength: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const InputExample: FC<InputProps> = (props) => {
  const [value, setValue] = useState('');

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
      onClear={() => setValue('')}
    />
  );
};

export const Default: Story = {
  args: {
    labelContent: 'عنوان',
    hintMessage: 'متن راهنما',
  },

  render: (args) => <InputExample {...args} />,
};
