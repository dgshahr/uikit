'use client';
import clsx from 'clsx';
import { useState } from 'react';
import type { FC } from 'react';
import type { TableHeaderProps } from './types';
import Badge from '../Badge';
import Select from '../Form/Select';

const TableHeader: FC<TableHeaderProps & { total?: number }> = (props) => {
  const { title, extraElement, showTotal, total, className, pageCountSelector } = props;

  const initialPageCount =
    pageCountSelector?.defaultValue ?? pageCountSelector?.options?.[0]?.value ?? 0;
  const [pageCount, setPageCount] = useState<number>(initialPageCount);

  function handlePageCountChange(value: number) {
    setPageCount(value);
    pageCountSelector?.onPageCountChange?.(value);
  }

  return (
    <div
      className={clsx(
        'dgsuikit:p-4 dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-1 dgsuikit:border-b dgsuikit:border-solid dgsuikit:border-gray-200',
        className,
      )}
    >
      <div className="dgsuikit:font-h4-bold dgsuikit:text-gray-700 dgsuikit:w-full">{title}</div>
      {pageCountSelector && (
        <div className="dgsuikit:flex  dgsuikit:ml-2 dgsuikit:items-center dgsuikit:gap-2 dgsuikit:shrink-0 dgsuikit:mr-2">
          <span className="dgsuikit:font-p2-regular dgsuikit:text-gray-700 dgsuikit:whitespace-nowrap">
            تعداد نمایش:
          </span>
          <Select<number>
            {...pageCountSelector.selectProps}
            wrapperClassName={clsx(
              'dgsuikit:w-20',
              pageCountSelector.selectProps?.wrapperClassName,
            )}
            popoverClassName={clsx(
              'dgsuikit:!min-w-0',
              pageCountSelector.selectProps?.popoverClassName,
            )}
            inputProps={{
              size: 1,
              containerClassName: clsx(
                'dgsuikit:!p-2 dgsuikit:!gap-x-1',
                pageCountSelector.selectProps?.inputProps?.containerClassName,
              ),
              ...pageCountSelector.selectProps?.inputProps,
            }}
            mode="single"
            options={pageCountSelector.options}
            value={pageCount}
            searchable={false}
            onChange={handlePageCountChange}
          />
        </div>
      )}
      {showTotal && (
        <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:shrink-0">
          <span className="dgsuikit:font-p2-regular dgsuikit:text-gray-700 dgsuikit:ml-1">
            تعداد نتایج:
          </span>
          <Badge
            value={total ?? 0}
            valueType="number"
            size="large"
            color="primary"
            type="twoTone"
          />
        </div>
      )}
      {extraElement}
    </div>
  );
};

export default TableHeader;
