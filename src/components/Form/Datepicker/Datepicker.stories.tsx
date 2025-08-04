import type { Meta, StoryObj } from '@storybook/react';
import { isSameDay } from 'date-fns-jalali/isSameDay';
import React, { useState } from 'react';
import { DatepickerProps } from './types';
import IconMinus4 from '../../../icons/IconMinus4';
import IconPlus4 from '../../../icons/IconPlus4';
import { fullWidthStory } from '../../../utils/storybook/helpers';

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
  beforeEach: () => fullWidthStory({ alignItems: 'flex-start', height: '550px' }),
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
    onSubmit: {
      if: { arg: 'showSubmitButton', neq: true },
      table: {
        type: {
          summary: '() => void',
          detail: 'only available if showSubmitButton is not true.',
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
    inputProps: {
      placeholder: 'تاریخ موردنظر خود را انتخاب کنید',
    },
  },
  render: (args) => <RangeDatepickerExample {...args} />,
};

const DayHoverDatepickerExample = (props: DatepickerProps) => {
  const [value, setValue] = useState(new Date());
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  return (
    <Datepicker
      {...props}
      acceptRange={false}
      value={value}
      onChange={setValue}
      disableDates={disabledDates}
      dayHoverAction={{
        onClick: (dayItem) => {
          setDisabledDates((prev) => {
            if (dayItem.isDisabled) {
              return prev.filter((date) => !isSameDay(date, dayItem.date));
            }
            return [...prev, dayItem.date];
          });
        },
        element: (dayItem) => (
          <span className="dgsuikit:bg-primary-500 dgsuikit:text-white dgsuikit:size-4 dgsuikit:rounded-full dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center">
            {dayItem.isDisabled ? (
              <IconMinus4
                width={12}
                height={12}
              />
            ) : (
              <IconPlus4
                width={12}
                height={12}
              />
            )}
          </span>
        ),
      }}
    />
  );
};

export const DayHoverAction: Story = {
  args: {
    value: new Date(),
    onChange: () => {},
    dayHoverAction: {
      onClick: () => {},
      element: () => null, // This will be overridden in the component
    },
    inputProps: {
      placeholder: 'تاریخ موردنظر خود را انتخاب کنید',
    },
  },
  render: (args) => <DayHoverDatepickerExample {...args} />,
};
