import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import { Slider, Slide } from './index';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    containerClassName: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '',
        },
      },
    },
    showNavigationDots: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    dotsClassName: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '',
        },
      },
    },
    slidesPerView: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: {
          summary: '1',
        },
      },
    },
    autoplay: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean | {delay?: number | null}' },
        defaultValue: {
          summary: 'false',
          detail: 'if true: {delay: 7000}',
        },
      },
    },
    spaceBetween: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: {
          summary: '0',
        },
      },
    },
    navigationVariant: {
      options: ['inside', 'outside'],
      control: { type: 'select' },
      table: {
        type: { summary: 'inside, outside' },
        defaultValue: {
          summary: 'outside',
        },
      },
    },
    navigationButtonsShowType: {
      options: ['hide', 'permanent', 'hover'],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'hide, permanent, hover',
          detail: 'type is "hide, permanent" if  navigationVariant is outside',
        },
        defaultValue: {
          summary: 'hide',
        },
      },
    },
    showPaginationText: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    navigationContainerClassName: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '',
        },
      },
    },
    children: {
      control: { type: 'object' },
      description: 'use `Slide` component for every slide you have',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    containerClassName: 'w-[400px]',
    children: Array(10)
      .fill(null)
      .map((_, index) => (
        <Slide key={index}>
          <div className="h-[200px] bg-gray-600 rounded flex items-center justify-center text-white">
            {index + 1}
          </div>
        </Slide>
      )),
  },
};
