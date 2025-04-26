import clsx from 'clsx';
import IconArrowDown2 from '@/src/icons/IconArrowDown2';
import IconArrowUp2 from '@/src/icons/IconArrowUp2';
import IconInfoCircleOutline from '@/src/icons/IconInfoCircleOutline';
import { isArraysEqual } from '@/src/utils/isArraysEqual';
import type { ColumnsType, SortValues, TableProps, UnknownRecord } from './types';
import {
  getAlingmentClass,
  getColumnKey,
  getStickyClass,
  isSelectionAvailable,
  renderRowSelectCheckbox,
} from './utils';
import Divider from '../Divider';
import Tooltip from '../Tooltip';

interface THeadProps<T extends UnknownRecord> {
  columns: ColumnsType<T>[];
  haveHeader: boolean;
  data: T[];
  rowSelection: TableProps<T>['rowSelection'];
  rowKey: TableProps<T>['rowKey'];
}

const ICON_SIZE = 16;
const TH_CLASS =
  'dgs-ui-kit-p-4 dgs-ui-kit-pl-0 dgs-ui-kit-text-gray-500 dgs-ui-kit-bg-gray-50 dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200';
const DIVIDER_CLASS = '!dgs-ui-kit-h-8 dgs-ui-kit-shrink-0';

function renderSortButton(sortValue: SortValues, sort: Required<ColumnsType>['sort']) {
  const SortIcon = sortValue === 'ascend' ? IconArrowUp2 : IconArrowDown2;

  return (
    <button onClick={() => sort.onSort(sortValue)}>
      <SortIcon
        width={ICON_SIZE}
        height={ICON_SIZE}
        className={
          sort.active === sortValue ? 'dgs-ui-kit-text-primary-500' : 'dgs-ui-kit-text-gray-500'
        }
      />
    </button>
  );
}

function getThContent(title: ColumnsType['title'], tooltip?: ColumnsType['tooltip']) {
  return (
    <div className="dgs-ui-kit-font-p1-medium dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse">
      <span>{title}</span>
      {tooltip &&
        (tooltip.anchorIcon ?? (
          <IconInfoCircleOutline
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        ))}
    </div>
  );
}

function getAllDataKey<T extends UnknownRecord>(
  data: TableProps<T>['data'],
  rowKey: TableProps<T>['rowKey'],
) {
  return data.map((record) => record[rowKey] as string);
}

function THead<T extends UnknownRecord>(props: Readonly<THeadProps<T>>) {
  const { columns, haveHeader, rowSelection, rowKey, data } = props;

  return (
    <thead>
      <tr>
        {isSelectionAvailable(rowSelection) && (
          <th
            className={clsx(
              TH_CLASS,
              { 'dgs-ui-kit-rounded-tr-2xl': !haveHeader },
              getStickyClass(rowSelection?.sticky),
              rowSelection?.className,
            )}
          >
            <div className="dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-justify-between">
              {renderRowSelectCheckbox(rowSelection?.align, {
                checked: rowSelection!.selectedRowKeys.length > 0,
                isIndeterminate: !isArraysEqual(
                  getAllDataKey(data, rowKey),
                  rowSelection!.selectedRowKeys,
                ),
                onChange: (e) =>
                  rowSelection?.onSelectRow(e, e.target.checked ? getAllDataKey(data, rowKey) : []),
              })}
              <Divider
                type="vertical"
                className={DIVIDER_CLASS}
              />
            </div>
          </th>
        )}
        {columns.map((column, index) => (
          <th
            key={getColumnKey(column.key, column.dataIndex)}
            className={clsx(
              TH_CLASS,
              {
                'first:dgs-ui-kit-rounded-tr-2xl last:dgs-ui-kit-rounded-tl-2xl': !haveHeader,
              },
              getStickyClass(column?.sticky),
              column.className,
            )}
          >
            <div className="dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center">
              <div
                className={clsx(
                  'dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-2 dgs-ui-kit-space-x-reverse dgs-ui-kit-w-full dgs-ui-kit-ml-2',
                  getAlingmentClass(column.align),
                )}
              >
                {column.tooltip?.content ? (
                  <Tooltip {...column.tooltip}>
                    {getThContent(column.title, column.tooltip)}
                  </Tooltip>
                ) : (
                  getThContent(column.title)
                )}
                {typeof column.sort?.onSort === 'function' && (
                  <div className="dgs-ui-kit-flex dgs-ui-kit-flex-col">
                    {renderSortButton('ascend', column.sort)}
                    {renderSortButton('descend', column.sort)}
                  </div>
                )}
              </div>
              {index !== columns.length - 1 && (
                <Divider
                  type="vertical"
                  className={DIVIDER_CLASS}
                />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default THead;
