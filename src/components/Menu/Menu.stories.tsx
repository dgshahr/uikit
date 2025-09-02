import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import IconArrowDownMd from '../../icons/IconArrowDownMd';
import IconDownload from '../../icons/IconDownload';
import IconEditProfile from '../../icons/IconEditProfile';
import IconLogout from '../../icons/IconLogout';
import IconSetting from '../../icons/IconSetting';
import IconShare from '../../icons/IconShare';
import IconUser from '../../icons/IconUser';
import { fullWidthStory } from '../../utils/storybook/helpers';
import Divider from '../Divider';

import Menu from './index';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dropdown menu component with customizable trigger and menu items. Supports icons, disabled states, custom styling, and dynamic positioning based on viewport space.',
      },
    },
  },
  beforeEach: () => fullWidthStory({ alignItems: '!flex-start', height: '400px' }),
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for the menu container',
    },
    popoverClassName: {
      control: 'text',
      description: 'Additional CSS classes for the popover menu',
    },
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Initial position of the menu (will auto-flip if needed)',
    },
  },
};

const renderTrigger = (
  label: string,
  toggle: () => void,
  ref: React.Ref<HTMLElement>,
): React.ReactElement => (
  <button
    ref={ref as React.Ref<HTMLButtonElement>}
    onClick={toggle}
    className="dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2 dgsuikit:px-4 dgsuikit:py-2 dgsuikit:text-sm dgsuikit:font-medium dgsuikit:text-gray-700 dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-md dgsuikit:shadow-sm dgsuikit:hover:bg-gray-50"
  >
    {label}
    <IconArrowDownMd className="dgsuikit:w-6 dgsuikit:h-6" />
  </button>
);

const renderTitle = (label: string): React.ReactElement => (
  <p className="dgsuikit:py-4 dgsuikit:font-p2-regular dgsuikit:text-gray-400">{label}</p>
);

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    trigger: (toggle, ref) => renderTrigger('گزینه‌های منو', toggle, ref),
    children: (
      <>
        {renderTitle('تنظیمات حساب کاربری')}
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
          endElement={null}
        >
          پروفایل
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          تنظیمات
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
          className="dgsuikit:text-red-500 dgsuikit:bg-red-50 dgsuikit:hover:bg-red-100 dgsuikit:hover:text-red-500"
        >
          خروج
        </Menu.Item>
      </>
    ),
  },
};

export const WithSections: Story = {
  args: {
    trigger: (toggle, ref) => renderTrigger('گزینه‌ها', toggle, ref),
    children: (
      <>
        {renderTitle('مجوزهای کاربری')}
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          مشاهده پروفایل
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          تنظیمات ادمین
        </Menu.Item>
        <Divider
          type="horizontal"
          className="dgsuikit:-mx-4 dgsuikit:!w-auto"
        />
        {renderTitle('مجوزهای کاربری')}
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          مشاهده پروفایل
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          تنظیمات ادمین
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
          className="dgsuikit:text-red-500 dgsuikit:bg-red-50 dgsuikit:hover:bg-red-100 dgsuikit:hover:text-red-500"
        >
          خروج
        </Menu.Item>
      </>
    ),
  },
};

export const WithDisabledItems: Story = {
  args: {
    trigger: (toggle, ref) => renderTrigger('گزینه‌های غیر فعال', toggle, ref),
    children: (
      <>
        {renderTitle('مجوزهای کاربری')}
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          مشاهده پروفایل
        </Menu.Item>
        <Menu.Item
          icon={<IconEditProfile className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
          disabled
        >
          ویرایش پروفایل
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
          disabled
        >
          تنظیمات ادمین
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
          className="dgsuikit:text-red-500 dgsuikit:bg-red-50 dgsuikit:hover:bg-red-100 dgsuikit:hover:text-red-500"
        >
          خروج
        </Menu.Item>
      </>
    ),
  },
};

export const WithEndElements: Story = {
  args: {
    trigger: (toggle, ref) => renderTrigger('اعلانات', toggle, ref),
    children: (
      <>
        {renderTitle('تنظیمات اعلان‌ها')}
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
          endElement={<span className="dgsuikit:text-xs dgsuikit:text-gray-400">ON</span>}
        >
          اعلان‌های ایمیلی
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
          endElement={<span className="dgsuikit:text-xs dgsuikit:text-gray-400">OFF</span>}
        >
          اعلان‌های پوش
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
          endElement={
            <span className="dgsuikit:text-xs dgsuikit:bg-blue-100 dgsuikit:text-blue-600 dgsuikit:px-2 dgsuikit:py-1 dgsuikit:rounded">
              NEW
            </span>
          }
        >
          اعلان‌های پیامکی
        </Menu.Item>
      </>
    ),
  },
};

export const CustomStyling: Story = {
  args: {
    className: 'dgsuikit:w-full dgsuikit:max-w-sm',
    popoverClassName: 'dgsuikit:w-full',
    trigger: (toggle, ref) => renderTrigger('منوی با استایل سفارشی', toggle, ref),
    children: (
      <>
        {renderTitle('تم سفارشی')}
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-6 dgsuikit:h-6 dgsuikit:text-blue-500" />}
          onClick={() => {}}
          className="dgsuikit:hover:bg-blue-50 dgsuikit:hover:text-blue-700"
        >
          پروفایل
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-6 dgsuikit:h-6 dgsuikit:text-blue-500" />}
          onClick={() => {}}
          className="dgsuikit:hover:bg-blue-50 dgsuikit:hover:text-blue-700"
        >
          تنظیمات
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-6 dgsuikit:h-6 dgsuikit:text-red-500" />}
          onClick={() => {}}
          className="dgsuikit:hover:bg-red-50 dgsuikit:hover:text-red-700"
        >
          خروج
        </Menu.Item>
      </>
    ),
  },
};

export const LongContent: Story = {
  args: {
    trigger: (toggle, ref) => renderTrigger('منوی طولانی', toggle, ref),
    popoverClassName: 'dgsuikit:w-98',
    children: (
      <>
        {renderTitle('گزینه‌های گسترش‌یافته')}
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          مدیریت کاربران و اداری
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          تنظیمات سیستم و پیکربندی
        </Menu.Item>
        <Menu.Item
          icon={<IconEditProfile className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          ابزارهای ویرایش و انتشار محتوا
        </Menu.Item>
        <Menu.Item
          icon={<IconDownload className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          مدیریت صادرات داده و پشتیبان‌گیری
        </Menu.Item>
        <Menu.Item
          icon={<IconShare className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          گزینه‌های اشتراک‌گذاری و ویژگی‌های همکاری
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-6 dgsuikit:h-6" />}
          onClick={() => {}}
        >
          عملیات پاکسازی و نگهداری
        </Menu.Item>
      </>
    ),
  },
};
