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
  'dgs-ui-kit-p-4 dgs-ui-kit-pl-0 dgs-ui-kit-bg-white dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200';

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
    const truncatedElement = <div className="!dgs-ui-kit-truncate">{content}</div>;

    if (typeof column.ellipsis !== 'boolean' && column.ellipsis.hideTooltip)
      return truncatedElement;
    else
      return (
        <Tooltip
          wrapperClassName="dgs-ui-kit-w-full"
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
  const { columns, data, rowKey, rowSelection, stickyTableHeader, loading, emptyContent } =
    useTableContext();

  if (loading) return <TBodyLoading />;

  if (data.length < 1 && emptyContent) return <TBodyEmpty />;

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
                  'dgs-ui-kit-border-b-0 dgs-ui-kit-rounded-br-2xl':
                    !havePagination && rowIndex === data.length - 1,
                },
                rowSelection?.className,
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
                  'dgs-ui-kit-border-b-0 first:dgs-ui-kit-rounded-br-2xl last:dgs-ui-kit-rounded-bl-2xl':
                    !havePagination && rowIndex === data.length - 1,
                },
                column.className,
              )}
              sticky={column.sticky}
              addBorderToSticky={stickyTableHeader ? rowIndex !== 0 : true}
            >
              <div
                className={clsx(
                  'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-ml-2',
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
