import type { Meta, StoryObj } from '@storybook/react';

import OtpInput from './index';

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
    onChange: {
      control: { type: 'object' },
      table: {
        type: { summary: 'function', detail: '(value:number)=> void' },
      },
    },
    onEnd: {
      control: { type: 'object' },
      table: {
        type: { summary: 'function', detail: '(value:number)=> void' },
      },
    },
  },
} satisfies Meta<typeof OtpInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputsNumber: 4,
    labelContent: 'عنوان',
    hintMessage: 'متن راهنما',
    onEnd(value) {
      alert(value);
    },
  },
};
