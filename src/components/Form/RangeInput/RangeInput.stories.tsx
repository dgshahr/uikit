import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';
import { fullWidthStory } from '../../../utils/storybook/helpers';
import RangeInput from './index';

const meta = {
  title: 'Components/Form/RangeInput',
  component: RangeInput,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport RangeInput from '@dgshahr/ui-kit/Form/RangeInput';\nOr\nimport { RangeInput } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  beforeEach: () =>
    fullWidthStory({
      height: '150px',
    }),
  argTypes: {
    value: {
      control: 'number',
      table: {
        type: {
          summary: 'number | number[]',
        },
      },
    },
    step: {
      table: {
        defaultValue: {
          summary: '1',
        },
      },
    },
    onChange: {
      table: {
        type: {
          summary: '(value: number | number[]) => void',
        },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      table: {
        type: {
          summary: "'primary' | 'secondary'",
        },
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    endTitle: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    startTitle: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    tooltip: {
      control: 'boolean',
      description: 'If true, the tooltip content will be input value.',
      table: {
        type: {
          summary: 'boolean | ReactNode',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    tooltipSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the tooltip',
      table: {
        type: {
          summary: "'small' | 'medium' | 'large'",
        },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    wrapperClassName: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} satisfies Meta<typeof RangeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const RangeInputExample: FC<Story['args']> = (props) => {
  const [value, setValue] = useState(props.value);

  return (
    <RangeInput
      {...props}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  args: {
    max: 100,
    min: 0,
    onChange() {},
    value: 50,
    step: 20,
  },

  render: (args) => <RangeInputExample {...args} />,
};

export const Secondary: Story = {
  ...Default,
  args: {
    ...Default.args,
    color: 'secondary',
  },
};

export const Multiple: Story = {
  args: {
    max: 10000,
    min: 0,
    onChange() {},
    value: [2000, 8000],
    wrapperClassName: 'dgsuikit:w-[200px]',
    startTitle: 'عنوان',
    endTitle: 'عنوان',
    color: 'primary',
  },

  render: (args) => <RangeInputExample {...args} />,
};
