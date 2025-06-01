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
  argTypes: {
    header: {
      table: {
        type: {
          summary: 'Partial<CardHeaderProps>',
          detail: `CardHeaderProps {
          color: CardColor;
          title: string;
          icon: ReactNode;
          variant: CardTitleVariant;
          Element: ReactNode;
          className?: string;
        }`,
        },
      },
    },
    color: {
      table: {
        type: {
          summary: `'primary' | 'warning' | 'error' | 'success' | 'gray' | 'white'`,
        },
        defaultValue: { summary: 'white' },
      },
    },
    size: {
      table: {
        type: { summary: `'small' | 'medium'` },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'dgsuikit:w-[400px]',
    header: {
      icon: <IconHome />,
      title: 'عنوان',
      color: 'gray',
      variant: 'primary',
    },
    color: 'white',
    size: 'medium',
    children: <div>بدنه</div>,
  },
};
