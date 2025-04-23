import clsx from 'clsx';
import type { FC } from 'react';
import type { TableHeaderProps } from './types';
import Badge from '../Badge';
import Button from '../Button';

const TableHeader: FC<TableHeaderProps & { total?: number }> = (props) => {
  const { title, actionButton, showTotal, total, className } = props;

  return (
    <div
      className={clsx(
        'dgs-ui-kit-p-4 dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-space-x-1 dgs-ui-kit-space-x-reverse dgs-ui-kit-border-b dgs-ui-kit-border-solid dgs-ui-kit-border-gray-200',
        className,
      )}
    >
      <div className="dgs-ui-kit-font-h4-bold dgs-ui-kit-text-gray-700 dgs-ui-kit-w-full">
        {title}
      </div>
      {showTotal && (
        <div className="dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-shrink-0">
          <span className="dgs-ui-kit-font-p2-regular dgs-ui-kit-text-gray-700 dgs-ui-kit-ml-1">
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
      {actionButton && (
        <Button
          className={clsx('dgs-ui-kit-shrink-0', actionButton.className)}
          {...actionButton}
        >
          {actionButton.children ?? null}
        </Button>
      )}
    </div>
  );
};

export default TableHeader;
