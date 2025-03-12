import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';
import Switch from './index';

const meta = {
  title: 'Components/Form/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Switch from '@dgshahr/ui-kit/Form/Switch';\nOr\nimport { Switch } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    size: {
      table: {
        defaultValue: {
          summary: 'large',
        },
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

const SwitchExample: FC<Story['args']> = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      {...props}
      checked={checked}
      onChange={setChecked}
    />
  );
};

export const Default: Story = {
  args: {
    checked: false,
    onChange: () => {},
    size: 'large',
    label: 'عنوان',
    description: 'متن کمکی',
  },
  render: (args) => <SwitchExample {...args} />,
};
