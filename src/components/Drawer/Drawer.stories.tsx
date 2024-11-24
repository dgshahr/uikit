import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';
import ArrowLeftMd from '../../icons/ArrowLeftMd';
import Button from '../Button';
import Drawer, { DrawerProps } from './index';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Drawer from '@dgshahr/ui-kit/Drawer';\nOr\nimport { Drawer } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {
    open: {
      control: { type: 'boolean', disable: true },
    },
    onClose: {
      control: { type: 'object', disable: true },
    },
    children: {
      control: { disable: true },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    persist: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    width: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
    position: {
      control: { type: 'select' },
      options: ['bottom', 'top', 'right', 'left'],
      table: {
        type: { summary: 'bottom, top, right, left' },
        defaultValue: { summary: 'bottom' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'modal card class',
      table: {
        type: { summary: 'string' },
      },
    },
    maskClassName: {
      control: { type: 'text' },
      description: 'black screen class',
      table: {
        type: { summary: 'string' },
      },
    },
    containerClassName: {
      control: { type: 'text' },
      description: 'dialog body container class',
      table: {
        type: { summary: 'string' },
      },
    },
    padding: {
      control: { type: 'number' },
      table: { type: { summary: 'number' }, defaultValue: { summary: '8' } },
    },
    header: {
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DrawerHeaderType',
          detail:
            '{\n title?: string;\n description?: string;\n haveCloseIcon?: boolean;\n actionElement?: ReactNode;\n containerClassName?: string;\n }',
        },
      },
    },
    footer: {
      control: { type: 'object' },
      table: {
        type: {
          summary: 'DrawerFooterType',
          detail: '{\n element?: ReactNode;\n containerClassName?: string; \n}',
        },
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

const DrawerExample: FC<DrawerProps> = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>open drawer</Button>
      <Drawer
        {...props}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="dgs-ui-kit-border dgs-ui-kit-border-primary-500 dgs-ui-kit-border-dashed dgs-ui-kit-bg-gray-50 dgs-ui-kit-text-gray-500 dgs-ui-kit-rounded-lg dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-h-[200px] dgs-ui-kit-w-[500px]">
          Component
        </div>
      </Drawer>
    </>
  );
};

export const Default: Story = {
  args: {
    open: false,
    onClose: () => {},
    header: {
      title: 'عنوان',
      description: 'متن توضیحات',
      haveCloseIcon: true,
      actionElement: (
        <button>
          <ArrowLeftMd />
        </button>
      ),
    },
    footer: {
      element: (
        <div className="dgs-ui-kit-flex dgs-ui-kit-justify-end dgs-ui-kit-gap-2">
          <Button variant="secondary">اولویت دوم</Button>
          <Button>اولویت اول</Button>
        </div>
      ),
    },
  },
  render: (args) => <DrawerExample {...args} />,
};
