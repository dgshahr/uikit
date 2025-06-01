'use client';

import clsx from 'clsx';
import type { FC } from 'react';
import TabelCell from './Cell';
import { useTableContext } from './context';
import TBodyEmpty from './TBodyEmpty';
import TBodyLoading from './TBodyLoading';
import type { ColumnsType, UnknownRecord } from './types';
import {
  getAlingmentClass,
  getColumnKey,
  isSelectionAvailable,
  renderRowSelectCheckbox,
} from './utils';
import Tooltip from '../Tooltip';

interface TBodyProps {
  havePagination: boolean;
}

const CELL_CLASS =
  'dgsuikit:p-4 dgsuikit:pl-0 dgsuikit:bg-white dgsuikit:border-b dgsuikit:border-solid dgsuikit:border-gray-200';

function getCellContentByPathIndex<T extends UnknownRecord>(
  dataIndex: ColumnsType<T>['dataIndex'],
  record: T,
) {
  if (!dataIndex) return null;

  if (Array.isArray(dataIndex)) {
    return dataIndex.reduce((obj, key) => obj?.[key] ?? null, record);
  }

  return record[dataIndex as keyof T];
}

function getCellContent<T extends UnknownRecord>(
  column: ColumnsType<T>,
  record: T,
  rowIndex: number,
) {
  if (typeof column.render === 'function') return column.render(record, rowIndex);

  const content = getCellContentByPathIndex(column.dataIndex, record);

  if (column.ellipsis) {
    const truncatedElement = <div className="dgsuikit:!truncate">{content}</div>;

    if (typeof column.ellipsis !== 'boolean' && column.ellipsis.hideTooltip)
      return truncatedElement;
    else
      return (
        <Tooltip
          wrapperClassName="dgsuikit:w-full"
          content={content}
        >
          {truncatedElement}
        </Tooltip>
      );
  }

  return content;
}

const TBody: FC<TBodyProps> = (props) => {
  const { havePagination } = props;
  const {
    columns,
    data,
    rowKey,
    rowSelection,
    stickyTableHeader,
    loading,
    emptyContent,
    getRowClassName,
  } = useTableContext();

  if (loading) return <TBodyLoading />;

  if (data.length < 1 && emptyContent) return <TBodyEmpty />;

  const haveRowClassName = typeof getRowClassName === 'function';

  return (
    <tbody>
      {data.map((record, rowIndex) => (
        <tr key={record[rowKey] as string}>
          {isSelectionAvailable(rowSelection) && (
            <TabelCell
              type="td"
              className={clsx(
                CELL_CLASS,
                rowSelection?.className,
                {
                  'dgsuikit:border-b-0 dgsuikit:rounded-br-2xl':
                    !havePagination && rowIndex === data.length - 1,
                },
                rowSelection?.className,
                haveRowClassName ? getRowClassName(record) : '',
              )}
              sticky={rowSelection?.sticky}
              addBorderToSticky={stickyTableHeader ? rowIndex !== 0 : true}
            >
              {renderRowSelectCheckbox(rowSelection?.align, {
                onChange: (e) => rowSelection?.onSelectRow(e, record[rowKey] as string),
                checked: Boolean(
                  rowSelection?.selectedRowKeys.find((key) => key === (record[rowKey] as string)),
                ),
              })}
            </TabelCell>
          )}
          {columns.map((column) => (
            <TabelCell
              type="td"
              key={`${record[rowKey]}-${getColumnKey(column.key, column.dataIndex)}`}
              className={clsx(
                CELL_CLASS,
                {
                  'dgsuikit:border-b-0 dgsuikit:first:rounded-br-2xl dgsuikit:last:rounded-bl-2xl':
                    !havePagination && rowIndex === data.length - 1,
                },
                column.className,
                haveRowClassName ? getRowClassName(record) : '',
              )}
              sticky={column.sticky}
              addBorderToSticky={stickyTableHeader ? rowIndex !== 0 : true}
            >
              <div
                className={clsx(
                  'dgsuikit:flex dgsuikit:items-center dgsuikit:ml-2',
                  getAlingmentClass(column.align),
                )}
              >
                {getCellContent(column, record, rowIndex)}
              </div>
            </TabelCell>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;
