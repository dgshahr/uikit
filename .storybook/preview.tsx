import type { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Getting Started', ['Introductions', 'Colors', 'Contributing'], 'Components'],
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ direction: 'rtl' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default preview;
