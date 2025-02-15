import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DatepickerProps } from './types';
import Datepicker from '.';

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
  argTypes: {
    value: {
      table: {
        type: {
          summary: 'Date | {start: Date | null, end: Date | null}',
          detail: "'start' and 'end' only available if acceptRange='true'",
        },
      },
    },
    onChange: {
      table: {
        type: {
          summary: '(value: ValueType) => void',
        },
      },
    },
    onClear: {
      if: { arg: 'showClearButton', neq: true },
      table: {
        type: {
          summary: '() => void',
          detail: 'only available if showClearButton is not true.',
        },
      },
    },
  },
} satisfies Meta<typeof Datepicker>;

export default meta;

type Story = StoryObj<typeof meta>;

const DefaulutDatepickerExample = (props: DatepickerProps) => {
  const [value, setValue] = useState(new Date());

  return (
    <Datepicker
      {...props}
      acceptRange={false}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  args: {
    value: new Date(),
    onChange: () => {},
    onClear: () => {},
  },
  render: (args) => <DefaulutDatepickerExample {...args} />,
};

const RangeDatepickerExample = (props: DatepickerProps) => {
  const [value, setValue] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  return (
    <Datepicker
      {...props}
      acceptRange
      value={value}
      onChange={setValue}
    />
  );
};

export const Range: Story = {
  args: {
    value: new Date(),
    onChange: () => {},
    onClear: () => {},
    inputProps: {
      placeholder: 'تاریخ موردنظر خود را انتخاب کنید',
    },
  },
  render: (args) => <RangeDatepickerExample {...args} />,
};
