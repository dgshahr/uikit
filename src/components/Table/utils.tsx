import clsx from 'clsx';
import type { ColumnsType, TableProps, UnknownRecord } from './types';
import type { CheckboxProps } from '../Form/Checkbox';
import Checkbox from '../Form/Checkbox';

export function getAlingmentClass(align: ColumnsType['align']) {
  switch (align) {
    case 'center':
      return 'dgsuikit:justify-center';
    case 'start':
      return 'dgsuikit:justify-start';
    case 'end':
      return 'dgsuikit:justify-end';
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
        'dgsuikit:w-full dgsuikit:flex dgsuikit:items-center',
        getAlingmentClass(alingment ?? 'center'),
      )}
    >
      <Checkbox {...checkboxProps} />
    </div>
  );
}

export function getStickyClass(sticky: ColumnsType['sticky'], addBeforeBorderTop?: boolean) {
  if (!sticky) return;

  return clsx(
    'dgsuikit:sticky dgsuikit:z-10',
    'dgsuikit:after:content[""] dgsuikit:after:absolute dgsuikit:after:top-0 dgsuikit:after:h-full dgsuikit:after:w-[30px] dgsuikit:after:transition-shadow', // sticky shadow class
    {
      'dgsuikit:right-[-1px] dgsuikit:pr-[calc(1em+1px)] dgsuikit:after:left-0 dgsuikit:after:-translate-x-full dgsuikit:after:shadow-[inset_-10px_0_8px_-8px] dgsuikit:after:shadow-transparent':
        sticky === 'right',
      'dgsuikit:left-[-1px] dgsuikit:pl-[calc(1em+1px)] dgsuikit:after:right-0 dgsuikit:after:translate-x-full dgsuikit:after:shadow-[inset_10px_0_8px_-8px] dgsuikit:after:shadow-transparent':
        sticky === 'left',
      'dgsuikit:before:content-[""] dgsuikit:before:absolute dgsuikit:before:top-0 dgsuikit:before:right-0 dgsuikit:before:w-full dgsuikit:before:border-t dgsuikit:before:md:border-t-0 dgsuikit:before:border-solid dgsuikit:before:border-gray-200':
        addBeforeBorderTop,
    },
  );
}
