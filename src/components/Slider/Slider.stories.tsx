import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Slider, Slide } from './index';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport { Slider, Slide } from '@dgshahr/ui-kit/Slider';\nOr\nimport { Slider, Slide } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
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
        type: { summary: 'number, accepts decimal' },
        defaultValue: {
          summary: '1',
        },
      },
    },
    centerMode: {
      control: { type: 'boolean' },
      description: 'Center current slide (usefull with decimal slidesPerView)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: {
          summary: 'false',
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
      options: ['hide', 'permanent', 'hover', 'onSides'],
      control: { type: 'select' },
      table: {
        type: {
          summary: 'hide, permanent, hover, onSides',
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
    responsive: {
      control: { type: 'object' },
      description:
        "It designed based on mobile first approach, so if you for example use `768` breakpoint it's props applied after `768px` device width.",
      table: {
        type: {
          summary: 'Record<number, SliderProps>',
          detail: 'example: { 768: { slidesPerView: 1, spaceBetween: 0 } }',
        },
      },
    },
    containerXPadding: {
      control: { type: 'number' },
      description:
        "it's add padding to first and last slide (it's just a temporary solution and i'm trying to handle it on container)",
    },
    onSlideIndexChange: {
      control: { type: 'object' },
      table: {
        type: { summary: 'function', detail: '(slideIndex: number)=> void' },
      },
    },
    ref: {
      control: {
        type: 'object',
      },
      description: 'returns two keys as a result `navigate` and `element`',
    },
    initialSlide: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
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
    containerClassName: 'dgs-ui-kit-w-[400px]',
    responsive: { 768: { slidesPerView: 2, spaceBetween: 8 } },
    slidesPerView: 1,
    spaceBetween: 0,
    onSlideIndexChange() {},
    children: Array(5)
      .fill(null)
      .map((_, index) => (
        <Slide key={index}>
          <div className="dgs-ui-kit-h-[200px] dgs-ui-kit-bg-gray-600 dgs-ui-kit-rounded dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-center dgs-ui-kit-text-white">
            {index + 1}
          </div>
        </Slide>
      )),
  },
};
