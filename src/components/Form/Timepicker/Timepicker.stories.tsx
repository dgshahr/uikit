import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TimepickerWithRange } from './types';
import { fullWidthStory } from '../../../utils/storybook/helpers';
import TimePicker from './index';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/Form/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
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

// Single Time Picker Stories
export const Single: StoryObj<typeof TimePicker> = {
  args: {
    value: new Date(),
    onChange: (_time: Date) => {
      // Handle time change
    },
    acceptRange: false,
    showSubmitButton: true,
    showNowButton: true,
  },
  render: (args) => {
    const [value, setValue] = useState<Date | null>(args.value instanceof Date ? args.value : null);

    return (
      <div className="dgsuikit:w-80">
        <TimePicker
          {...args}
          acceptRange={false}
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        />
      </div>
    );
  },
};

// Range Time Picker Stories
export const Range: StoryObj<typeof TimePicker> = {
  render: (args) => {
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 1);
    const [value, setValue] = useState<TimepickerWithRange['value']>({
      start: new Date(),
      end: endDate,
    });

    return (
      <div className="dgsuikit:w-80">
        <TimePicker
          {...args}
          value={value}
          acceptRange={true}
          onChange={(val: TimepickerWithRange['value']) => {
            setValue(val);
          }}
        />
      </div>
    );
  },
};

// With Custom Minute Step
export const CustomMinuteStep: StoryObj<typeof TimePicker> = {
  args: {
    value: new Date(),
    onChange: (_time: Date) => {
      // Handle time change
    },
    acceptRange: false,
    minuteStep: 15,
    showSubmitButton: true,
    showNowButton: true,
  },
  render: (args) => {
    const [value, setValue] = useState<Date | null>(args.value instanceof Date ? args.value : null);

    return (
      <div className="dgsuikit:w-80">
        <TimePicker
          {...args}
          acceptRange={false}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

// Calendar Mode (No Wrapper)
export const CalendarMode: StoryObj<typeof TimePicker> = {
  args: {
    mode: 'time',
    value: new Date(),
    onChange: (_time: Date) => {
      // Handle time change
    },
    acceptRange: false,
    showSubmitButton: true,
    showNowButton: true,
  },
  render: (args) => {
    const [value, setValue] = useState<Date | null>(args.value instanceof Date ? args.value : null);

    return (
      <div className="dgsuikit:w-80 dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-lg">
        <TimePicker
          {...args}
          acceptRange={false}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

// Drawer Mode
export const DrawerMode: StoryObj<typeof TimePicker> = {
  args: {
    value: new Date(),
    onChange: (_time: Date) => {
      // Handle time change
    },
    dropdownType: 'drawer',
    acceptRange: false,
    showSubmitButton: true,
    showNowButton: true,
  },
  render: (args) => {
    const [value, setValue] = useState<Date | null>(args.value instanceof Date ? args.value : null);

    return (
      <div className="dgsuikit:w-80">
        <TimePicker
          {...args}
          acceptRange={false}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};
