import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import IconInfoCircleOutline from '../../icons/IconInfoCircleOutline';
import { fullWidthStory } from '../../utils/storybook/helpers';

import Tooltip from './index';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Tooltip from '@dgshahr/ui-kit/Tooltip';\nOr\nimport { Tooltip } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    children: {
      description: 'The element to hover on',
    },
    position: {
      table: {
        type: {
          summary: 'top-right, top-center, top-left, bottom-right, bottom-center, bottom-left',
        },
        defaultValue: {
          summary: 'top-center',
        },
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  beforeEach: () =>
    fullWidthStory({
      height: '400px',
    }),
  args: {
    children: <span>hover me</span>,
    title: 'عنوان پیام',
    icon: <IconInfoCircleOutline />,
    content:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.',
    footer: (
      <div className="dgsuikit:flex dgsuikit:gap-1 dgsuikit:justify-end dgsuikit:font-p3-medium dgsuikit:text-gray-300 dgsuikit:ss02">
        <span>۱۴:۳۴</span>
        <span>.</span>
        <span className="dgsuikit:[direction:ltr]">۱۴۰۲ \ ۰۹ \ ۲۲</span>
      </div>
    ),
  },
};
