'use client';

import clsx from 'clsx';
import { TableContextProvider } from './context';
import TableHeader from './Header';
import TBody from './TBody';
import THead from './THead';
import type { TableProps, UnknownRecord } from './types';
import Pagination from '../Pagination';

import '@/src/styles.css';

function Table<T extends UnknownRecord>(props: Readonly<TableProps<T>>) {
  const {
    header,
    wrapperClassName,
    className,
    columns,
    rowSelection,
    data,
    rowKey,
    pagination,
    stickyTableHeader,
  } = props;

  const haveHeader = (header && Object.values(header).length > 0) ?? false;
  const havePagination = Boolean(pagination?.totalCount && pagination?.pageSize);

  return (
    <div
      className={clsx(
        'dgs-ui-kit-relative dgs-ui-kit-bg-white dgs-ui-kit-border dgs-ui-kit-border-gray-200 dgs-ui-kit-border-solid dgs-ui-kit-rounded-2xl ',
        wrapperClassName,
      )}
    >
      {haveHeader && (
        <TableHeader
          {...header}
          total={pagination?.totalCount ?? data.length}
        />
      )}
      <table className={className}>
        <TableContextProvider
          columns={columns}
          rowSelection={rowSelection}
        >
          <THead<T>
            columns={columns}
            haveHeader={haveHeader}
            rowKey={rowKey}
            rowSelection={rowSelection}
            data={data}
            stickyTableHeader={stickyTableHeader}
          />
          <TBody<T>
            columns={columns}
            data={data}
            rowKey={rowKey}
            rowSelection={rowSelection}
            havePagination={havePagination}
            stickyTableHeader={stickyTableHeader}
          />
        </TableContextProvider>
      </table>
      {havePagination && (
        <Pagination
          className={clsx('dgs-ui-kit-py-4 !dgs-ui-kit-px-0', pagination?.className)}
          {...pagination!}
        />
      )}
    </div>
  );
}

export default Table;
export * from './types';
