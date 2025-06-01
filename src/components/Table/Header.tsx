import clsx from 'clsx';
import type { FC } from 'react';
import type { TableHeaderProps } from './types';
import Badge from '../Badge';

const TableHeader: FC<TableHeaderProps & { total?: number }> = (props) => {
  const { title, extraElement, showTotal, total, className } = props;

  return (
    <div
      className={clsx(
        'dgsuikit:p-4 dgsuikit:flex dgsuikit:items-center dgsuikit:space-x-1 dgsuikit:border-b dgsuikit:border-solid dgsuikit:border-gray-200',
        className,
      )}
    >
      <div className="dgsuikit:font-h4-bold dgsuikit:text-gray-700 dgsuikit:w-full">{title}</div>
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
