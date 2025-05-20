import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';
import IconCategory2 from '../../icons/IconCategory2';
import IconChart from '../../icons/IconChart';
import IconFlashDisable from '../../icons/IconFlashDisable';
import IconMoneyBag from '../../icons/IconMoneyBag';
import IconSetting from '../../icons/IconSetting';

import Button from '../Button';
import Sidebar from './index';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Sidebar from '@dgshahr/ui-kit/Sidebar';\nOr\nimport { Sidebar } from '@dgshahr/ui-kit';\n\`\`\``,
      },
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  argTypes: {
    logo: {
      control: 'object',
      table: {
        type: {
          summary: 'object',
          detail: `{
                      open: string;
                      close: string;
                    } & Omit<
                      React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
                      'src'
                  >`,
        },
      },
    },
    searchInput: {
      table: {
        type: { summary: "boolean | Omit<InputProps, 'value' | 'onChange'>" },
      },
    },
    logOutButtonProps: {
      table: {
        type: {
          summary: "Omit<ButtonProps, 'onClick'>",
        },
      },
    },
    showMask: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onMaskClick: {
      control: 'object',
      if: {
        arg: 'showMask',
        eq: true,
      },
      description: 'only avaiable when showMaks is true',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const SidebarExample: FC<Story['args']> = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(!open)}>toggle sidebar</Button>
      {/*  @ts-expect-error showMask should be true to accept onMaskClick but for demo we give contorl of showMask to user and type is unpredictable*/}
      <Sidebar
        {...props}
        isOpen={open}
        setIsOpen={(open) => setOpen(open)}
        showMask={props.showMask ?? false}
        onMaskClick={() => setOpen(false)}
      />
    </>
  );
};

export const Default: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {},
    logo: {
      open: 'https://dgshahr.com/assets/svg/logotype.svg',
      close: 'https://dgshahr.com/assets/svg/logo.svg',
      loading: 'eager',
    },
    userProfile: {
      image: 'https://lend-front.s3.ir-thr-at1.arvanstorage.ir/images/Profile.png',
      name: 'نام و نام خانوادگی',
      description: 'سمت',
    },
    items: [
      {
        title: 'منوی اصلی',
        children: [
          {
            title: 'داشبورد',
            icon: <IconCategory2 />,
            link: '/dashboard',
            badgeCount: 1,
          },
          {
            title: 'تنظیمات',
            icon: <IconSetting />,
            badgeCount: 6,
            children: [
              {
                title: 'تنظیمات یک',
                link: '/settings/1',
                badgeCount: 3,
              },
              {
                title: 'تنظیمات دو',
                link: '/settings/2',
                active: true,
                badgeCount: 3,
              },
            ],
          },
          {
            title: 'گزارشات',
            icon: <IconChart />,
            link: '/reports',
            badgeCount: 2,
          },
          { title: 'منوی غیرفعال', icon: <IconFlashDisable />, disabled: true },
        ],
      },
      {
        title: 'منوی فرعی',
        children: [
          {
            title: 'زیرگروه منوی فرعی',
            icon: <IconMoneyBag />,
            link: '/sub-menu',
            badgeCount: 3,
          },
        ],
      },
    ],
  },
  render: (args) => <SidebarExample {...args} />,
};
