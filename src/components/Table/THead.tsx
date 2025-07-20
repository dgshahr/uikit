'use client';

import clsx from 'clsx';
import type { FC } from 'react';
import IconArrowDown2 from '@/src/icons/IconArrowDown2';
import IconArrowUp2 from '@/src/icons/IconArrowUp2';
import IconInfoCircleOutline from '@/src/icons/IconInfoCircleOutline';
import { isArraysEqual } from '@/src/utils/isArraysEqual';
import TabelCell from './Cell';
import { useTableContext } from './context';
import type { ColumnsType, SortValues, TableProps, UnknownRecord } from './types';
import {
  getAlingmentClass,
  getColumnKey,
  isSelectionAvailable,
  renderRowSelectCheckbox,
} from './utils';
import Divider from '../Divider';
import Tooltip from '../Tooltip';

interface THeadProps {
  haveHeader: boolean;
}

const ICON_SIZE = 16;
const TH_CLASS =
  'dgsuikit:p-4 dgsuikit:pl-0 dgsuikit:text-gray-500 dgsuikit:bg-gray-50 dgsuikit:border-b dgsuikit:border-solid dgsuikit:border-gray-200';
const DIVIDER_CLASS = 'dgsuikit:!h-8 dgsuikit:shrink-0 dgsuikit:mr-2';

function renderSortButton(sortValue: SortValues, sort: Required<ColumnsType>['sort']) {
  const SortIcon = sortValue === 'ascend' ? IconArrowUp2 : IconArrowDown2;

  return (
    <button onClick={() => sort.onSort(sortValue)}>
      <SortIcon
        width={ICON_SIZE}
        height={ICON_SIZE}
        className={
          sort.active === sortValue ? 'dgsuikit:text-primary-500' : 'dgsuikit:text-gray-500'
        }
      />
    </button>
  );
}

function getThContent(title: ColumnsType['title'], tooltip?: ColumnsType['tooltip']) {
  return (
    <div className="dgsuikit:font-p1-medium dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-1">
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

const THead: FC<THeadProps> = (props) => {
  const { haveHeader } = props;
  const { columns, rowKey, rowSelection, data, stickyTableHeader } = useTableContext();

  return (
    <thead>
      <tr>
        {isSelectionAvailable(rowSelection) && (
          <TabelCell
            type="th"
            className={clsx(
              TH_CLASS,
              { 'dgsuikit:rounded-tr-2xl': !haveHeader },
              rowSelection?.className,
            )}
            sticky={rowSelection?.sticky}
            stuckToTop={stickyTableHeader}
          >
            <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:justify-between">
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
          </TabelCell>
        )}
        {columns.map((column, index) => (
          <TabelCell
            type="th"
            sticky={column.sticky}
            key={getColumnKey(column.key, column.dataIndex)}
            className={clsx(
              TH_CLASS,
              {
                'dgsuikit:first:rounded-tr-2xl dgsuikit:last:rounded-tl-2xl': !haveHeader,
              },
              column.className,
            )}
            stuckToTop={stickyTableHeader}
          >
            <div className="dgsuikit:flex dgsuikit:justify-between dgsuikit:items-center">
              <div
                className={clsx(
                  'dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-2 dgsuikit:w-full',
                  getAlingmentClass(column.align),
                )}
              >
                {column.tooltip?.content ? (
                  <Tooltip
                    {...column.tooltip}
                    attachToBody
                  >
                    {getThContent(column.title, column.tooltip)}
                  </Tooltip>
                ) : (
                  getThContent(column.title)
                )}
                {typeof column.sort?.onSort === 'function' && (
                  <div className="dgsuikit:flex dgsuikit:flex-col">
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
          </TabelCell>
        ))}
      </tr>
    </thead>
  );
};

export default THead;
