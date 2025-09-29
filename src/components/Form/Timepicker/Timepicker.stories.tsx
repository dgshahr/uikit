import type { Meta } from '@storybook/react';
import React, { useState } from 'react';
import { TimepickerProps } from './types';
import { fullWidthStory } from '../../../utils/storybook/helpers';
import { WithRange } from '../../../utils/types/DateAndTimePicker';
import TimePicker from './index';

const meta = {
  title: 'Components/Form/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Timepicker from '@dgshahr/ui-kit/Form/Timepicker';\nOr\nimport { Timepicker } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  beforeEach: () => fullWidthStory({ alignItems: '!flex-start', height: '400px' }),
  argTypes: {
    value: {
      table: {
        type: {
          summary: 'Date | null | {start: Date | null, end: Date | null}',
          detail: "'start' and 'end' only available if acceptRange='true'",
        },
      },
    },
    onChange: {
      table: {
        type: {
          summary: '(value: Date | IRangeDate) => void',
        },
      },
    },
    mode: {
      control: { type: 'select' },
      options: ['input', 'time'],
      table: {
        type: { summary: 'input | time' },
      },
    },
    dropdownType: {
      control: { type: 'select' },
      options: ['popover', 'drawer'],
      table: {
        type: { summary: 'popover | drawer' },
      },
    },
    minuteStep: {
      control: { type: 'number', min: 1, max: 30 },
      table: {
        type: { summary: 'number' },
      },
    },
    showSubmitButton: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    showNowButton: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptRange: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
} satisfies Meta<typeof TimePicker>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Story = any;

const DefaultTimePickerExample = (props: TimepickerProps) => {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <div className="dgsuikit:w-80">
      <TimePicker
        {...props}
        acceptRange={false}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    value: new Date(),
    onChange: () => {},
  },
  render: (args) => <DefaultTimePickerExample {...args} />,
};

const RangeTimePickerExample = (props: TimepickerProps) => {
  const [value, setValue] = useState<WithRange['value']>({
    start: new Date(),
    end: (() => {
      const endDate = new Date();
      endDate.setHours(endDate.getHours() + 1);
      return endDate;
    })(),
  });

  return (
    <div className="dgsuikit:w-80">
      <TimePicker
        {...props}
        acceptRange={true}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const Range: Story = {
  args: {
    value: new Date(),
    onChange: () => {},
    acceptRange: true,
  },
  render: (args) => <RangeTimePickerExample {...args} />,
};

export const OpenMode: Story = {
  ...Default,
  args: {
    ...Default.args,
    mode: 'time',
    wrapperClassName: 'dgsuikit:w-[350px] dgsuikit:shadow-2xl dgsuikit:rounded-lg',
  },
  render: (args) => <DefaultTimePickerExample {...args} />,
};

export const DrawerMode: Story = {
  ...Default,
  args: {
    ...Default.args,
    dropdownType: 'drawer',
  },
  render: (args) => <DefaultTimePickerExample {...args} />,
};
