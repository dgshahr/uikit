import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import React, { useState } from 'react';
import cities from './cities.json';
import IconArrowDown2 from '../../../icons/IconArrowDown2';
import IconRinging3Outline from '../../../icons/IconRinging3Outline';
import { fullWidthStory } from '../../../utils/storybook/helpers';
import Badge from '../../Badge';
import Button from '../../Button';

import Select from './index';

const meta = {
  title: 'Components/Form/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Select from '@dgshahr/ui-kit/Form/Select';\nOr\nimport { Select } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  beforeEach: () => fullWidthStory({ alignItems: 'flex-start', height: '450px' }),
  argTypes: {
    options: {
      control: { type: 'object', disable: true },
      table: {
        type: {
          summary: 'Option<T>[]',
          detail: `{
  value: T;
  label: string;
  disabled?: boolean;
}`,
        },
      },
    },
    value: {
      control: 'object',
      table: {
        type: { summary: 'T | T[]', detail: "it should be array if select is 'multiple' mode." },
      },
    },
    onChange: {
      control: 'object',
      type: 'function',
      table: {
        type: {
          summary: 'onChange: (value: T | T[]) => void',
          detail: "value argumant is array if select is 'multiple' mode.",
        },
      },
    },
    mode: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      table: { type: { summary: 'single, multiple' }, defaultValue: { summary: 'single' } },
    },
    separateSelectedOptions: {
      control: 'boolean',
      table: { type: { summary: 'boolean', detail: "only available in 'multiple' mode" } },
    },
    optionsTitle: {
      control: 'text',
      table: {
        type: { summary: 'string', detail: "only available in 'multiple' mode." },
      },
    },
    customInput: {
      control: 'object',
      type: 'function',
      table: {
        type: {
          summary: '(isShowOptions: boolean) => ReactNode',
          detail: "only available if 'inputProps' is not provided",
        },
      },
    },
    inputProps: {
      control: 'object',
      table: {
        type: {
          summary: "Omit<InputProps, 'leftIcon'>",
          detail: "only available if 'customInput' is not provided",
        },
      },
    },
    dropdownType: {
      control: { type: 'select' },
      options: ['popover', 'drawer'],
      table: { type: { summary: 'popover, drawer' }, defaultValue: { summary: 'popover' } },
    },
    drawerProps: {
      control: 'object',
      table: {
        type: {
          summary: "Omit<DrawerProps, 'children' | 'onClose' | 'open'>",
          detail: "only available if dropdownType='drawer'",
        },
      },
    },
    popoverClassName: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
          detail: "only available if dropdownType='popover'",
        },
      },
    },
    optionCell: {
      control: 'object',
      type: 'function',
      table: {
        type: {
          summary: '(option: Option<T>, isActive: boolean) => ReactNode',
        },
      },
    },
    beforeOptions: {
      description: 'before options in options container',
    },
    afterOptions: {
      description: 'after options in options container',
    },
    searchable: {
      control: 'boolean',
      table: {
        type: {
          summary: "boolean | Omit<InputProps, 'onChange'>",
          detail: "if set to 'true' it will show search input on options with default props",
        },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = Object.values(cities ?? {})
  .flat()
  .map((item) => ({
    label: item.title,
    value: item.id,
  }));

const defaultProps = {
  options: options,
  inputProps: {
    placeholder: 'متن نما',
    postfix: 'پسوند',
  },
};

const customOptionProps = {
  options: options,
  inputProps: {
    placeholder: 'متن نما',
  },
  optionCell(option, isActive) {
    return (
      <div className="dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center">
        <div className="dgs-ui-kit-flex dgs-ui-kit-items-center">
          <div className="dgs-ui-kit-bg-gray-600 dgs-ui-kit-w-5 dgs-ui-kit-h-5 dgs-ui-kit-rounded dgs-ui-kit-ml-3" />
          <span className="dgs-ui-kit-font-p1-regular dgs-ui-kit-text-gray-700">
            {option.label} {isActive && 'انتخاب شده'}
          </span>
        </div>
        {option.disabled && (
          <div className="dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-justify-center dgs-ui-kit-items-center">
            <IconRinging3Outline
              width={16}
              height={16}
            />
            <span className="dgs-ui-kit-mt-1 dgs-ui-kit-font-oveline-demibold">ناموجود</span>
          </div>
        )}
      </div>
    );
  },
};

const multiSelectProps = {
  options: options,
  inputProps: {
    placeholder: 'متن نما',
    postfix: 'پسوند',
    containerClassName: 'dgs-ui-kit-min-w-[300px] dgs-ui-kit-max-w-[400px]',
  },
  beforeOptions: (
    <div className="dgs-ui-kit-flex dgs-ui-kit-gap-3 dgs-ui-kit-px-3 dgs-ui-kit-justify-end dgs-ui-kit-items-center">
      <Button
        variant="text"
        size="small"
        className="!dgs-ui-kit-px-0"
      >
        انتخاب همه
      </Button>
      <Button
        variant="text"
        size="small"
        className="!dgs-ui-kit-px-0"
        color="error"
      >
        حذف انتخاب‌ها
      </Button>
    </div>
  ),
  afterOptions: (
    <div className="dgs-ui-kit-pt-3 dgs-ui-kit-px-3 dgs-ui-kit-flex dgs-ui-kit-justify-end">
      <Button>اعمال</Button>
    </div>
  ),
};

const SelectExample = (props: typeof defaultProps | typeof customOptionProps) => {
  const [value, setValue] = useState(0);

  return (
    <Select
      {...props}
      value={value}
      onChange={(value) => setValue(value)}
    />
  );
};

export const Default: Story = {
  args: defaultProps as Story['args'],
  render: (args) => <SelectExample {...(args as typeof defaultProps)} />,
};

export const CustomOption: Story = {
  args: customOptionProps as Story['args'],
  render: (args) => <SelectExample {...(args as typeof customOptionProps)} />,
};

const MultiSelectExample = (props: typeof multiSelectProps) => {
  const [value, setValue] = useState<number[]>([]);

  return (
    <Select
      {...props}
      mode="multiple"
      value={value}
      onChange={(value) => setValue(value)}
    />
  );
};

export const MultiSelect: Story = {
  args: multiSelectProps as Story['args'],
  render: (args) => <MultiSelectExample {...(args as typeof multiSelectProps)} />,
};

export const MultiSelectCustomInput: Story = {
  args: {
    ...multiSelectProps,
    customInput(isShowOptions) {
      return (
        <div
          className={clsx(
            'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-2 dgs-ui-kit-bg-gray-100 dgs-ui-kit-py-3 dgs-ui-kit-px-4 dgs-ui-kit-rounded-lg dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-transition',
            isShowOptions
              ? 'dgs-ui-kit-border-primary-500 dgs-ui-kit-text-primary-500'
              : 'dgs-ui-kit-border-transparent dgs-ui-kit-text-gray-700',
          )}
        >
          <span>شهر</span>
          <Badge
            value="۳"
            valueType="number"
          />
          <IconArrowDown2
            width={16}
            height={16}
          />
        </div>
      );
    },
  } as never,
  render: (args) => <MultiSelectExample {...(args as typeof multiSelectProps)} />,
};
