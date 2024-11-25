import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './index';

const meta = {
  title: 'Components/Form/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport RadioButton from '@dgshahr/ui-kit/Form/RadioButton';\nOr\nimport { RadioButton } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string | ReactNode',
        },
      },
    },
    isError: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    helperMessage: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    errorMessage: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['bordered', 'default'],
      table: {
        type: {
          summary: 'bordered, default',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    icon: {
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ReactNode',
          detail: "it's only available on variant='bordered'",
        },
      },
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'عنوان',
  },
};
