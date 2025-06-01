import clsx from 'clsx';
import React from 'react';
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
    data,
    pagination,
    layout = 'auto',
    containerClassName,
  } = props;

  const haveHeader = (header && Object.values(header).length > 0) ?? false;
  const havePagination = Boolean(pagination?.totalCount && pagination?.pageSize);
  const ContainerElement = layout !== 'fixed' ? 'div' : React.Fragment;

  return (
    <div
      className={clsx(
        'dgsuikit:relative dgsuikit:bg-white dgsuikit:border dgsuikit:border-gray-200 dgsuikit:border-solid dgsuikit:rounded-2xl',
        wrapperClassName,
      )}
    >
      {haveHeader && (
        <TableHeader
          {...header}
          total={pagination?.totalCount ?? data.length}
        />
      )}
      <ContainerElement
        {...(layout !== 'fixed'
          ? { className: clsx('dgsuikit:overflow-x-auto dgsuikit:h-full', containerClassName) }
          : {})}
      >
        <TableContextProvider {...props}>
          <table
            className={className}
            style={{ tableLayout: layout }}
          >
            <THead haveHeader={haveHeader} />
            <TBody havePagination={havePagination} />
          </table>
        </TableContextProvider>
      </ContainerElement>
      {havePagination && (
        <Pagination
          className={clsx('dgsuikit:py-4 dgsuikit:!px-0', pagination?.className)}
          {...pagination!}
        />
      )}
    </div>
  );
}

export default Table;
export * from './types';
