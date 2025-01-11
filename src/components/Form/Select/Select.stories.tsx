import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import React, { useState } from 'react';
import ArrowDown2 from '../../../icons/ArrowDown2';
import Ringing3OutlineIcon from '../../../icons/Ringing3Outline';
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
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { label: 'عنوان گزینه 1', value: 1 },
  { label: 'عنوان گزینه 2', value: 2 },
  { label: 'عنوان گزینه 3', value: 3, disabled: true },
  { label: 'عنوان گزینه 4', value: 4 },
  { label: 'عنوان گزینه 5', value: 5 },
  { label: 'عنوان گزینه 6', value: 6 },
  { label: 'عنوان گزینه 7', value: 7 },
];

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
            <Ringing3OutlineIcon
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
        <ArrowDown2
          width={16}
          height={16}
        />
      </div>
    );
  },
  beforOptions: (
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
