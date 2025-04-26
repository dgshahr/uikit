import clsx from 'clsx';
import type { ColumnsType, TableProps, UnknownRecord } from './types';
import type { CheckboxProps } from '../Form/Checkbox';
import Checkbox from '../Form/Checkbox';

export function getAlingmentClass(align: ColumnsType['align']) {
  switch (align) {
    case 'center':
      return 'dgs-ui-kit-justify-center';
    case 'start':
      return 'dgs-ui-kit-justify-start';
    case 'end':
      return 'dgs-ui-kit-justify-end';
    default:
      return undefined;
  }
}

export function getColumnKey(
  key: ColumnsType['key'],
  dataIndex: ColumnsType<UnknownRecord>['dataIndex'],
) {
  if (key) return key;

  if (Array.isArray(dataIndex))
    return (dataIndex as Array<string>)[(dataIndex as Array<string>).length - 1];

  return dataIndex as string;
}

export function isSelectionAvailable<T extends UnknownRecord>(
  rowSelection: TableProps<T>['rowSelection'],
) {
  return Boolean(
    (rowSelection && rowSelection.selectedRowKeys.length > 1) ||
      typeof rowSelection?.onSelectRow === 'function',
  );
}

export function renderRowSelectCheckbox(
  alingment: ColumnsType['align'],
  checkboxProps?: CheckboxProps,
) {
  return (
    <div
      className={clsx(
        'dgs-ui-kit-w-full dgs-ui-kit-flex dgs-ui-kit-items-center',
        getAlingmentClass(alingment ?? 'center'),
      )}
    >
      <Checkbox {...checkboxProps} />
    </div>
  );
}

export function getStickyClass(sticky: ColumnsType['sticky'], addBeforeBorderTop?: boolean) {
  if (!sticky) return;

  return clsx('dgs-ui-kit-sticky dgs-ui-kit-z-10', {
    'dgs-ui-kit-right-0': sticky === 'right',
    'dgs-ui-kit-left-0': sticky === 'left',
    'before:dgs-ui-kit-content-[""] before:dgs-ui-kit-absolute before:dgs-ui-kit-top-0 before:dgs-ui-kit-right-0 before:dgs-ui-kit-w-full before:dgs-ui-kit-border-t before:md:dgs-ui-kit-border-t-0 before:dgs-ui-kit-border-solid before:dgs-ui-kit-border-gray-200':
      addBeforeBorderTop,
  });
}
