import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import UserBoldIcon from '../../icons/UserBold';

import Tabs from './index';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    items: {
      control: { type: 'object' },
      table: {
        type: {
          summary: 'TabItemType',
          detail:
            'key: string | number\ntitle: string\nicon?: ReactNode\nbadgeNumber?: number\ndisabled?: boolean\n',
        },
      },
    },
    activeKey: {
      control: { type: 'number' },
      table: { type: { summary: 'number | object' } },
    },
    onChange: {
      control: { type: 'object' },
      table: {
        type: { summary: "onChange: (key: ITabItem['key']) => void" },
      },
    },
    tabItemClassName: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    centred: {
      if: { arg: 'fullWidth', eq: 'true' },
      control: { type: 'boolean' },
      description: 'available only when fullWidth is true',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '[direction:rtl]',
    activeKey: 1,
    fullWidth: true,
    onChange: (key) => alert('tab key: ' + key + ' selected'),
    items: [
      { key: 1, title: 'تب اول', icon: <UserBoldIcon />, badgeNumber: 1 },
      { key: 2, title: 'تب دوم', icon: <UserBoldIcon />, badgeNumber: 1 },
      { key: 3, title: 'تب سوم', icon: <UserBoldIcon />, badgeNumber: 1, disabled: true },
    ],
  },
};
