import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { TimepickerWithRange } from './types';
import { fullWidthStory } from '../../../utils/storybook/helpers';
import TimePicker from './index';

const meta: Meta<typeof TimePicker> = {
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
    mode: {
      control: { type: 'select' },
      options: ['input', 'time'],
    },
    dropdownType: {
      control: { type: 'select' },
      options: ['popover', 'drawer'],
    },
    minuteStep: {
      control: { type: 'number', min: 1, max: 30 },
    },
    showSubmitButton: {
      control: { type: 'boolean' },
    },
    showNowButton: {
      control: { type: 'boolean' },
    },
    acceptRange: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Single = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());

    return (
      <div className="dgsuikit:w-80">
        <TimePicker
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        />
      </div>
    );
  },
};

export const Range = {
  render: () => {
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 1);
    const [value, setValue] = useState<TimepickerWithRange['value']>({
      start: new Date(),
      end: endDate,
    });

    return (
      <div className="dgsuikit:w-80">
        <TimePicker
          value={value}
          acceptRange
          onChange={(val: TimepickerWithRange['value']) => {
            setValue(val);
          }}
        />
      </div>
    );
  },
};

export const CalendarMode = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return (
      <div className="dgsuikit:w-80 dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-lg">
        <TimePicker
          mode="time"
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const DrawerMode = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return (
      <div className="dgsuikit:w-80">
        <TimePicker
          acceptRange={false}
          value={value}
          onChange={setValue}
          dropdownType="drawer"
        />
      </div>
    );
  },
};
