import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import IconUserBold from '../../icons/IconUserBold';
import { fullWidthStory } from '../../utils/storybook/helpers';

import Tabs from './index';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Tabs from '@dgshahr/ui-kit/Tabs';\nOr\nimport { Tabs } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  beforeEach: () => {
    fullWidthStory({
      notFlex: true,
    });
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
    fullWidthButtons: {
      if: { arg: 'fullWidth', eq: true },
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
    activeKey: 1,
    onChange: (key) => alert('tab key: ' + key + ' selected'),
    items: [
      { key: 1, title: 'تب اول', icon: <IconUserBold />, badgeNumber: 1 },
      { key: 2, title: 'تب دوم', icon: <IconUserBold />, badgeNumber: 1 },
      { key: 3, title: 'تب سوم', icon: <IconUserBold />, badgeNumber: 1, disabled: true },
    ],
  },
};
