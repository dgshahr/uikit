import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import IconQuestionMarkCircle from '../../icons/IconQuestionMarkCircle';
import { fullWidthStory } from '../../utils/storybook/helpers';

import Breadcrumb from './index';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Breadcrumb from '@dgshahr/ui-kit/Breadcrumb';\nOr\nimport { Breadcrumb } from '@dgshahr/ui-kit';\n\`\`\``,
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
      control: 'object',
      table: {
        type: {
          summary: 'Breadcrumb Item Array',
          detail: '{\n link: string;\n title: string;\n icon?: ReactNode;\n}[]',
        },
      },
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageTitle: 'نام صفحه',
    items: [
      {
        link: '/',
        title: 'خانه',
        icon: (
          <IconQuestionMarkCircle
            width={16}
            height={16}
          />
        ),
      },
      {
        link: 'https://www.google.com',
        title: 'لینک گوگل',
      },
    ],
  },
};
