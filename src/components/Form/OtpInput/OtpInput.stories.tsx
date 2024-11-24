import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';
import OtpInput, { OtpInputProps } from './index';

const meta = {
  title: 'Components/Form/OtpInput',
  component: OtpInput,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport OtpInput from '@dgshahr/ui-kit/Form/OtpInput';\nOr\nimport { OtpInput } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    value: {
      control: { disable: true },
    },
    onChange: {
      control: { type: 'object', disable: true },
      table: {
        type: { summary: 'function', detail: '(value:string)=> void' },
      },
    },
    inputsNumber: {
      table: {
        defaultValue: { summary: '4' },
      },
    },
    onEnd: {
      control: { type: 'object' },
      table: {
        type: { summary: 'function', detail: '(value:string)=> void' },
      },
    },
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
  },
} satisfies Meta<typeof OtpInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const OtpExample: FC<OtpInputProps> = (props) => {
  const [value, setValue] = useState('');

  return (
    <OtpInput
      {...props}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  args: {
    value: '',
    onChange() {},
    inputsNumber: 4,
    labelContent: 'عنوان',
    hintMessage: 'متن راهنما',
  },
  render: (args) => <OtpExample {...args} />,
};
