import type { Meta, StoryObj } from '@storybook/react';

import ProgressStep from './index';

const meta = {
  title: 'Components/Progress/StepBar',
  component: ProgressStep,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport ProgressStep from '@dgshahr/ui-kit/Progress/Bar';\nOr\nimport { ProgressStep } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
      table: {
        type: { summary: 'primary, secondary' },
        defaultValue: {
          summary: 'primary',
        },
      },
    },
  },
} satisfies Meta<typeof ProgressStep>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'عنوان اصلی',
    subtitle: 'متن راهنما یا مرحله بعدی',
    showSubtitle: true,
    currentStep: 3,
    totalSteps: 5,
    type: 'rtl',
    size: 'small',
    color: 'primary',
    showStepsCount: true,
    progress: 100,
    className: 'dgsuikit:w-[400px]',
  },
};
