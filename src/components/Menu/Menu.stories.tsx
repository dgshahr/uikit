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
  beforeEach: () => fullWidthStory({ alignItems: 'flex-start', height: '350px' }),
  tags: ['autodocs'],
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
    minVisible: {
      control: 'number',
      description: 'Minimum visible pixels required before flipping position',
    },
    padding: {
      control: 'number',
      description: 'Padding from viewport edges before flipping position',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

// Basic Menu Story
export const Default: Story = {
  args: {
    trigger: (toggle) => (
      <button
        onClick={toggle}
        className="dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2 dgsuikit:px-4 dgsuikit:py-2 dgsuikit:text-sm dgsuikit:font-medium dgsuikit:text-gray-700 dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-md dgsuikit:shadow-sm dgsuikit:hover:bg-gray-50 dgsuikit:focus:outline-none dgsuikit:focus:ring-2 dgsuikit:focus:ring-blue-500 dgsuikit:focus:ring-offset-2 dgsuikit:transition-colors dgsuikit:duration-200"
      >
        Menu Options
        <IconArrowDownMd className="dgsuikit:w-4 dgsuikit:h-4" />
      </button>
    ),
    children: (
      <>
        <Menu.Title>Account Settings</Menu.Title>
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Settings
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Logout
        </Menu.Item>
      </>
    ),
  },
};

// Menu with Actions Story
export const WithActions: Story = {
  args: {
    trigger: (toggle) => (
      <button
        onClick={toggle}
        className="dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2 dgsuikit:px-4 dgsuikit:py-2 dgsuikit:text-sm dgsuikit:font-medium dgsuikit:text-gray-700 dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-md dgsuikit:shadow-sm dgsuikit:hover:bg-gray-50 dgsuikit:focus:outline-none dgsuikit:focus:ring-2 dgsuikit:focus:ring-blue-500 dgsuikit:focus:ring-offset-2 dgsuikit:transition-colors dgsuikit:duration-200"
      >
        Actions
        <IconArrowDownMd className="dgsuikit:w-4 dgsuikit:h-4" />
      </button>
    ),
    children: (
      <>
        <Menu.Title>File Actions</Menu.Title>
        <Menu.Item
          icon={<IconEditProfile className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Edit
        </Menu.Item>
        <Menu.Item
          icon={<IconDownload className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Download
        </Menu.Item>
        <Menu.Item
          icon={<IconShare className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Share
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
          className="dgsuikit:text-red-600 dgsuikit:hover:bg-red-50 dgsuikit:hover:text-red-700"
        >
          Delete
        </Menu.Item>
      </>
    ),
  },
};

// Menu with Disabled Items Story
export const WithDisabledItems: Story = {
  args: {
    trigger: (toggle) => (
      <button
        onClick={toggle}
        className="dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2 dgsuikit:px-4 dgsuikit:py-2 dgsuikit:text-sm dgsuikit:font-medium dgsuikit:text-gray-700 dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-md dgsuikit:shadow-sm dgsuikit:hover:bg-gray-50 dgsuikit:focus:outline-none dgsuikit:focus:ring-2 dgsuikit:focus:ring-blue-500 dgsuikit:focus:ring-offset-2 dgsuikit:transition-colors dgsuikit:duration-200"
      >
        Options
        <IconArrowDownMd className="dgsuikit:w-4 dgsuikit:h-4" />
      </button>
    ),
    children: (
      <>
        <Menu.Title>User Permissions</Menu.Title>
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          View Profile
        </Menu.Item>
        <Menu.Item
          icon={<IconEditProfile className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
          disabled
        >
          Edit Profile
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
          disabled
        >
          Admin Settings
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Logout
        </Menu.Item>
      </>
    ),
  },
};

// Menu with End Elements Story
export const WithEndElements: Story = {
  args: {
    trigger: (toggle) => (
      <button
        onClick={toggle}
        className="dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2 dgsuikit:px-4 dgsuikit:py-2 dgsuikit:text-sm dgsuikit:font-medium dgsuikit:text-gray-700 dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-md dgsuikit:shadow-sm dgsuikit:hover:bg-gray-50 dgsuikit:focus:outline-none dgsuikit:focus:ring-2 dgsuikit:focus:ring-blue-500 dgsuikit:focus:ring-offset-2 dgsuikit:transition-colors dgsuikit:duration-200"
      >
        Notifications
        <IconArrowDownMd className="dgsuikit:w-4 dgsuikit:h-4" />
      </button>
    ),
    children: (
      <>
        <Menu.Title>Notification Settings</Menu.Title>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
          endElement={<span className="dgsuikit:text-xs dgsuikit:text-gray-400">ON</span>}
        >
          Email Notifications
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
          endElement={<span className="dgsuikit:text-xs dgsuikit:text-gray-400">OFF</span>}
        >
          Push Notifications
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
          endElement={
            <span className="dgsuikit:text-xs dgsuikit:bg-blue-100 dgsuikit:text-blue-600 dgsuikit:px-2 dgsuikit:py-1 dgsuikit:rounded">
              NEW
            </span>
          }
        >
          SMS Notifications
        </Menu.Item>
      </>
    ),
  },
};

// Menu with Custom Styling Story
export const CustomStyling: Story = {
  args: {
    className: 'dgsuikit:w-full dgsuikit:max-w-sm',
    popoverClassName: 'dgsuikit:w-full',
    trigger: (toggle) => (
      <button
        onClick={toggle}
        className="dgsuikit:w-full dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2 dgsuikit:px-4 dgsuikit:py-3 dgsuikit:text-sm dgsuikit:font-medium dgsuikit:text-white dgsuikit:bg-blue-600 dgsuikit:border dgsuikit:border-blue-600 dgsuikit:rounded-lg dgsuikit:shadow-sm dgsuikit:hover:bg-blue-700 dgsuikit:focus:outline-none dgsuikit:focus:ring-2 dgsuikit:focus:ring-blue-500 dgsuikit:focus:ring-offset-2 dgsuikit:transition-colors dgsuikit:duration-200"
      >
        Custom Styled Menu
        <IconArrowDownMd className="dgsuikit:w-4 dgsuikit:h-4" />
      </button>
    ),
    children: (
      <>
        <Menu.Title className="dgsuikit:text-blue-600 dgsuikit:font-semibold">
          Custom Theme
        </Menu.Title>
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-4 dgsuikit:h-4 dgsuikit:text-blue-500" />}
          onClick={() => {}}
          className="dgsuikit:hover:bg-blue-50 dgsuikit:hover:text-blue-700"
        >
          Profile
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-4 dgsuikit:h-4 dgsuikit:text-blue-500" />}
          onClick={() => {}}
          className="dgsuikit:hover:bg-blue-50 dgsuikit:hover:text-blue-700"
        >
          Settings
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-4 dgsuikit:h-4 dgsuikit:text-red-500" />}
          onClick={() => {}}
          className="dgsuikit:hover:bg-red-50 dgsuikit:hover:text-red-700"
        >
          Logout
        </Menu.Item>
      </>
    ),
  },
};

// Menu with Long Content Story
export const LongContent: Story = {
  args: {
    trigger: (toggle) => (
      <button
        onClick={toggle}
        className="dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2 dgsuikit:px-4 dgsuikit:py-2 dgsuikit:text-sm dgsuikit:font-medium dgsuikit:text-gray-700 dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-md dgsuikit:shadow-sm dgsuikit:hover:bg-gray-50 dgsuikit:focus:outline-none dgsuikit:focus:ring-2 dgsuikit:focus:ring-blue-500 dgsuikit:focus:ring-offset-2 dgsuikit:transition-colors dgsuikit:duration-200"
      >
        Long Menu
        <IconArrowDownMd className="dgsuikit:w-4 dgsuikit:h-4" />
      </button>
    ),
    children: (
      <>
        <Menu.Title>Extended Options</Menu.Title>
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          User Management and Administration
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          System Settings and Configuration
        </Menu.Item>
        <Menu.Item
          icon={<IconEditProfile className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Content Editing and Publishing Tools
        </Menu.Item>
        <Menu.Item
          icon={<IconDownload className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Data Export and Backup Management
        </Menu.Item>
        <Menu.Item
          icon={<IconShare className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Sharing Options and Collaboration Features
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Cleanup and Maintenance Operations
        </Menu.Item>
      </>
    ),
  },
};

// Menu with Top Position Story
export const TopPosition: Story = {
  args: {
    position: 'top-left',
    trigger: (toggle) => (
      <button
        onClick={toggle}
        className="dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2 dgsuikit:px-4 dgsuikit:py-2 dgsuikit:text-sm dgsuikit:font-medium dgsuikit:text-gray-700 dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-md dgsuikit:shadow-sm dgsuikit:hover:bg-gray-50 dgsuikit:focus:outline-none dgsuikit:focus:ring-2 dgsuikit:focus:ring-blue-500 dgsuikit:focus:ring-offset-2 dgsuikit:transition-colors dgsuikit:duration-200"
      >
        Top Position Menu
        <IconArrowDownMd className="dgsuikit:w-4 dgsuikit:h-4" />
      </button>
    ),
    children: (
      <>
        <Menu.Title>Top Position Example</Menu.Title>
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Settings
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Logout
        </Menu.Item>
      </>
    ),
  },
};

// Menu with Center Position Story
export const CenterPosition: Story = {
  args: {
    position: 'bottom-center',
    trigger: (toggle) => (
      <button
        onClick={toggle}
        className="dgsuikit:inline-flex dgsuikit:items-center dgsuikit:justify-center dgsuikit:gap-2 dgsuikit:px-4 dgsuikit:py-2 dgsuikit:text-sm dgsuikit:font-medium dgsuikit:text-gray-700 dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-300 dgsuikit:rounded-md dgsuikit:shadow-sm dgsuikit:hover:bg-gray-50 dgsuikit:focus:outline-none dgsuikit:focus:ring-2 dgsuikit:focus:ring-blue-500 dgsuikit:focus:ring-offset-2 dgsuikit:transition-colors dgsuikit:duration-200"
      >
        Center Position Menu
        <IconArrowDownMd className="dgsuikit:w-4 dgsuikit:h-4" />
      </button>
    ),
    children: (
      <>
        <Menu.Title>Center Position Example</Menu.Title>
        <Menu.Item
          icon={<IconUser className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          icon={<IconSetting className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Settings
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout className="dgsuikit:w-4 dgsuikit:h-4" />}
          onClick={() => {}}
        >
          Logout
        </Menu.Item>
      </>
    ),
  },
};
