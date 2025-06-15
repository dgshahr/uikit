import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import Rate from './index';

const meta = {
  title: 'Components/Rate',
  component: Rate,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Rate from '@dgshahr/ui-kit/Rate';\nOr\nimport { Rate } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'small'],
      table: {
        type: {
          summary: 'large, small',
        },
        defaultValue: {
          summary: 'large',
        },
      },
    },
    showRateNumber: {
      control: 'boolean',
      description: "should be true if 'showTotalStars' is false",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showTotalStars: {
      control: 'boolean',
      description: "should be true if 'showRateNumber' is false",
      table: {
        type: { summary: 'boolean' },
      },
    },
    total: {
      control: 'number',
      table: {
        type: { summary: 'number' },
      },
    },
    value: {
      control: 'number',
      description: 'Accepts integer numbers and numbers with a decimal part bigger than 0.5.',
      table: {
        type: { summary: 'number' },
      },
    },
    showStarsNumber: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      table: {
        type: { summary: '(value: number) => void' },
      },
    },
    className: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Rate>;

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultRateExample = (props: Story['args']) => {
  const [value, setValue] = useState(3);

  return (
    <Rate
      {...props}
      value={value}
      onChange={(value) => setValue(value)}
    />
  );
};

export const Default: Story = {
  args: {
    total: 5,
    value: 3,
    showRateNumber: true,
    showTotalStars: true,
    size: 'large',
  },
  render: (args) => <DefaultRateExample {...args} />,
};
