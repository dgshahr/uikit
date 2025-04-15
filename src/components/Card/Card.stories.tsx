import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import IconHome from '../../icons/IconHome';
import Card from './index';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Card from '@dgshahr/ui-kit/Card';\nOr\nimport { Card } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'dgs-ui-kit-w-[400px]',
    header: {
      icon: <IconHome />,
      title: 'عنوان',
      color: 'gray',
      variant: 'primary',
    },
    color: 'white',
    size: 'small',
    children: <div>بدنه</div>,
  },
};
