import type { ReactNode } from 'react';
import type { DeepNamePath } from '@/src/utils/types/deepNamePath';
import type { PaginationProps } from '../Pagination';
import type { TooltipProps } from '../Tooltip';

type NonTypeSafeDataIndex = string | string[];
type TypeSafeDataIndex<T> = keyof T | DeepNamePath<T>;
type DataIndexPath<T> = [keyof T] extends [never] ? NonTypeSafeDataIndex : TypeSafeDataIndex<T>;

export type UnknownRecord = Record<string, unknown>;

export type SortValues = 'ascend' | 'descend';
interface ColumnsTypeBase<T> {
  title?: string;
  align?: 'start' | 'center' | 'end';
  className?: string;
  tooltip?: Omit<TooltipProps, 'children'> & {
    anchorIcon?: ReactNode;
  };
  sticky?: 'left' | 'right';
  ellipsis?:
    | boolean
    | {
        hideTooltip?: boolean;
      };
  render?: (record: T, index: number) => ReactNode;
  sort?: {
    active?: SortValues;
    onSort: (value: SortValues) => void;
  };
}

interface ColumnsTypeWithKey<T> {
  key: string;
  dataIndex?: DataIndexPath<T>;
}

interface ColumnsTypeWithDataIndex<T> {
  key?: string;
  dataIndex: DataIndexPath<T>;
}

export type ColumnsType<T extends UnknownRecord = UnknownRecord> = ColumnsTypeBase<T> &
  (ColumnsTypeWithKey<T> | ColumnsTypeWithDataIndex<T>);

export interface TableHeaderProps {
  title?: string;
  showTotal?: boolean;
  extraElement?: ReactNode;
  className?: string;
}

export interface RowSelectionProps<T> extends Pick<ColumnsType, 'align' | 'sticky' | 'className'> {
  onSelectRow: (e: React.ChangeEvent<HTMLInputElement>, key: string | string[], record?: T) => void;
  selectedRowKeys: string[];
}

export interface TableProps<T extends UnknownRecord = UnknownRecord> {
  data: T[];
  columns: ColumnsType<T>[];
  rowKey: [keyof T] extends [never] ? string : keyof T;
  header?: TableHeaderProps;
  stickyTableHeader?: boolean;
  rowSelection?: RowSelectionProps<T>;
  pagination?: PaginationProps;
  wrapperClassName?: string;
  className?: string;
  loading?:
    | boolean
    | {
        size: number;
      };
}
