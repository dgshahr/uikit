import clsx from 'clsx';
import type { FC } from 'react';
import { TITLE_CLASS, COMPACT_TITLE_CLASS } from '../../constants';
import type { FileType } from '../../types';

export type SingleType = 'default' | 'compact';

interface PreviewTitleProps {
  type: SingleType;
  title?: string;
  fileName?: string;
  loading?: FileType['loading'];
  errorMessage?: FileType['errorMessage'];
  status?: FileType['status'];
}

const PreviewTitle: FC<PreviewTitleProps> = ({
  type,
  title,
  fileName,
  loading,
  errorMessage,
  status = 'default',
}) => {
  const text = title ?? fileName;
  if (!text) return null;

  const map = type === 'compact' ? COMPACT_TITLE_CLASS : TITLE_CLASS;
  const classType = loading ? map.loading : errorMessage ? map.error : map[status];

  const baseClass =
    'dgsuikit:font-p2-medium dgsuikit:text-center dgsuikit:line-clamp-1 dgsuikit:w-0 dgsuikit:min-w-full';

  const layoutClass =
    type === 'compact'
      ? 'dgsuikit:absolute dgsuikit:-bottom-[0.5px] dgsuikit:px-3 dgsuikit:backdrop-blur-[1px] dgsuikit:text-white dgsuikit:py-1.5 dgsuikit:rounded-b-lg dgsuikit:mt-1'
      : 'dgsuikit:px-3 dgsuikit:py-1.5 dgsuikit:rounded-lg dgsuikit:mt-1';

  return <div className={clsx(classType, baseClass, layoutClass)}>{text}</div>;
};

export default PreviewTitle;
