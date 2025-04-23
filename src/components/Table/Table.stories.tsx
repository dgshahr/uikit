import type { Meta, StoryObj } from '@storybook/react';
import React, { FC, useState } from 'react';
import IconRefreshLeft from '../../icons/IconRefreshLeft';
import Button from '../Button';
import Table, { type ColumnsType } from './index';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: `### \n\`\`\`js\nimport Table from '@dgshahr/ui-kit/Table';\nOr\nimport { Table } from '@dgshahr/ui-kit';\n\`\`\``,
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const dataSource = [
  {
    id: '1',
    title: 'نام محصول',
    price: 320000,
    details:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    id: '2',
    title: 'نام محصول',
    price: 320000,
    details:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    id: '3',
    title: 'نام محصول',
    price: 320000,
    details:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    id: '4',
    title: 'نام محصول',
    price: 320000,
    details:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    id: '5',
    title: 'نام محصول',
    price: 320000,
    details:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
  {
    id: '6',
    title: 'نام محصول',
    price: 320000,
    details:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  },
];

type RowData = (typeof dataSource)[0];

const columns: ColumnsType<RowData>[] = [
  {
    title: 'نام محصول',
    key: 'title',
    dataIndex: 'title',
    onSort: () => {},
  },
  {
    title: 'قیمت',
    dataIndex: 'price',
    key: 'price',
    tooltip: {
      content: 'قیمت به تومان است.',
    },
  },
  {
    title: 'جزئیات',
    dataIndex: 'details',
    key: 'details',
    ellipsis: true,
  },
  {
    title: 'عملیات',
    key: 'actions',
    align: 'center',
    render: () => (
      <Button
        color="error"
        variant="outline"
        size="small"
      >
        حذف محصول
      </Button>
    ),
  },
];

const defaultArgs: Story['args'] = {
  data: dataSource,
  // @ts-expect-error: Column type (DeepPathName) doesn't work in storybook
  columns,
  className: 'dgs-ui-kit-w-[800px] dgs-ui-kit-table-fixed',
  rowKey: 'id',
};

export const Default: Story = {
  args: defaultArgs,
};

export const WithHeaderAndPagination: Story = {
  args: {
    ...defaultArgs,
    header: {
      title: 'جدول محصولات',
      showTotal: true,
      actionButton: {
        size: 'small',
        variant: 'text',
        rightIcon: <IconRefreshLeft />,
      },
    },
    pagination: {
      pageSize: 6,
      totalCount: 120,
    },
  },
};

const TableWithSelectionExample: FC<Story['args']> = (props) => {
  const [selectedRowKeys, setselectedRowKeys] = useState<string[]>([]);

  return (
    <Table
      rowSelection={{
        selectedRowKeys,
        sticky: 'right',
        onSelectRow(e, key) {
          const isKeyArray = Array.isArray(key);
          if (isKeyArray) setselectedRowKeys(key);
          else if (e.target.checked) setselectedRowKeys((state) => [...state, key]);
          else setselectedRowKeys(selectedRowKeys.filter((rowKey) => rowKey !== key));
        },
      }}
      {...props}
    />
  );
};

export const WithSelection: Story = {
  args: defaultArgs,
  render: (args) => <TableWithSelectionExample {...args} />,
};
