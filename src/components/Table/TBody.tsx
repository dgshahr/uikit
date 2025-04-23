import clsx from 'clsx';
import type { ColumnsType, TableProps, UnknownRecord } from './types';
import {
  getAlingmentClass,
  getColumnKey,
  getStickyClass,
  isSelectionAvailable,
  renderRowSelectCheckbox,
} from './utils';
import Tooltip from '../Tooltip';

interface TBodyProps<T extends UnknownRecord> {
  columns: ColumnsType<T>[];
  data: T[];
  rowSelection: TableProps<T>['rowSelection'];
  rowKey: TableProps<T>['rowKey'];
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

function TBody<T extends UnknownRecord>(props: Readonly<TBodyProps<T>>) {
  const { data, columns, rowKey, rowSelection, havePagination } = props;

  return (
    <tbody>
      {data.map((record, rowIndex) => (
        <tr key={record[rowKey] as string}>
          {isSelectionAvailable(rowSelection) && (
            <td
              className={clsx(
                CELL_CLASS,
                rowSelection?.className,
                {
                  'dgs-ui-kit-border-b-0 dgs-ui-kit-rounded-br-2xl':
                    !havePagination && rowIndex === data.length - 1,
                },
                getStickyClass(rowSelection?.sticky),
                rowSelection?.className,
              )}
            >
              {renderRowSelectCheckbox(rowSelection?.align, {
                onChange: (e) => rowSelection?.onSelectRow(e, record[rowKey] as string),
                checked: Boolean(
                  rowSelection?.selectedRowKeys.find((key) => key === (record[rowKey] as string)),
                ),
              })}
            </td>
          )}
          {columns.map((column) => (
            <td
              key={`${record[rowKey]}-${getColumnKey(column.key, column.dataIndex)}`}
              className={clsx(
                CELL_CLASS,
                {
                  'dgs-ui-kit-border-b-0 first:dgs-ui-kit-rounded-br-2xl last:dgs-ui-kit-rounded-bl-2xl':
                    !havePagination && rowIndex === data.length - 1,
                },
                getStickyClass(column?.sticky),
                column.className,
              )}
            >
              <div
                className={clsx(
                  'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-ml-2',
                  getAlingmentClass(column.align),
                )}
              >
                {getCellContent(column, record, rowIndex)}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
