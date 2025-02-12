import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Datepicker, { DatepickerProps } from '.';

const meta = {
  title: 'Components/Form/Datepicker',
  component: Datepicker,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Datepicker from '@dgshahr/ui-kit/Form/Datepicker';\nOr\nimport { Datepicker } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Datepicker>;

export default meta;

type Story = StoryObj<typeof meta>;

const DatepickerExample = (props: DatepickerProps) => {
  const [value, setValue] = useState(new Date());

  return (
    <Datepicker
      {...props}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  args: {
    value: new Date(),
    onChange: () => {},
  },
  render: (args) => <DatepickerExample {...args} />,
};
