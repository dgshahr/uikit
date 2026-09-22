import type { Meta, StoryObj } from '@storybook/react';

import IconCategory2 from '../../icons/IconCategory2';
import IconHeartOutline from '../../icons/IconHeartOutline';
import IconHome from '../../icons/IconHome';
import IconLogin from '../../icons/IconLogin';
import IconShoppingCartOutline from '../../icons/IconShoppingCartOutline';

import Badge from '../Badge';

import BottomNav from './index';

const meta = {
  title: 'Components/BottomNav',
  component: BottomNav,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport BottomNav from '@dgshahr/ui-kit/BottomNav';\nOr\nimport { BottomNav } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    activeItemId: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: 'object',
      table: {
        type: { summary: 'BottomNavItem[]' },
      },
    },
  },
} satisfies Meta<typeof BottomNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeItemId: 'home',
    containerClassName: 'dgsuikit:w-[360px]',
    showTitle: true,
    items: [
      {
        id: 'home',
        title: 'خانه',
        icon: <IconHome className="dgsuikit:size-5!" />,
      },
      {
        id: 'category',
        title: 'دسته‌بندی',
        icon: <IconCategory2 className="dgsuikit:size-5!" />,
        disabled: true,
      },
      {
        id: 'cart',
        title: 'سبد خرید',
        icon: <IconShoppingCartOutline className="dgsuikit:size-5!" />,
        badge: (
          <Badge
            color="error"
            size="small"
            type="solid"
            value="2"
            valueType="number"
          />
        ),
      },
      {
        id: 'favorites',
        title: 'علاقه‌مندی',
        icon: <IconHeartOutline className="dgsuikit:size-5!" />,
        badge: (
          <Badge
            color="success"
            size="small"
            type="solid"
            value="متن"
            valueType="text"
          />
        ),
      },
      {
        id: 'login',
        title: 'ورود',
        icon: <IconLogin className="dgsuikit:size-5!" />,
        hasPulse: true,
        pulseColor: 'warning',
      },
    ],
  },
};
