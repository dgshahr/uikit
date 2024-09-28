import clsx from 'clsx';
import { useState } from 'react';
import ArrowLeft2Icon from '@/src/icons/ArrowLeft2';
import ArrowRight2Icon from '@/src/icons/ArrowRight2';
import { getPaginationRange, DOTS } from './utils';
import Button from '../Button';

import '@/src/styles.css';

export interface PaginationProps {
  totalCount: number;
  pageSize: number;
  onPageChange?: (page: number) => void;
  siblingCount?: number;
  defaultCurrent?: number;
  navigationButtonsWithText?: boolean;
  hideOnSinglePage?: boolean;
  className?: string;
}

const Pagination = (props: PaginationProps) => {
  const {
    totalCount,
    pageSize,
    onPageChange,
    siblingCount = 1,
    defaultCurrent = 1,
    navigationButtonsWithText = true,
    hideOnSinglePage,
    className,
  } = props;
  const [currentPage, setCurrentPage] = useState(defaultCurrent);
  const paginationRange = getPaginationRange({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });
  const lastPage = paginationRange[paginationRange.length - 1];

  if (hideOnSinglePage && paginationRange.length < 2) {
    return null;
  }

  function handlePageChange(page: number) {
    if (typeof onPageChange === 'function') onPageChange(page);
    setCurrentPage(page);
  }

  return (
    <div className={clsx('flex justify-between w-full px-4 text-gray-600', className)}>
      <Button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        rightIcon={<ArrowRight2Icon />}
        variant={navigationButtonsWithText ? 'text' : 'secondary'}
        size={navigationButtonsWithText ? 'medium' : 'small'}
      >
        {navigationButtonsWithText && 'صفحه قبل'}
      </Button>
      <div className="flex items-center gap-x-1 tablet:gap-x-4">
        {paginationRange.map((pageNumber) => {
          if (typeof pageNumber === 'string') {
            return <div key={pageNumber}>{DOTS}</div>;
          }
          return (
            <button
              key={pageNumber}
              className={clsx(
                'ss02 w-9 h-9 tablet:w-11 tablet:h-11 flex justify-center items-center font-h6-bold tablet:font-h5-bold transition border border-solid border-transparent rounded-lg',
                pageNumber === currentPage
                  ? 'bg-primary-500 text-white'
                  : 'hover:text-primary-500 hover:border-primary-200',
                className,
              )}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <Button
        disabled={currentPage === lastPage}
        onClick={() => handlePageChange(currentPage + 1)}
        leftIcon={<ArrowLeft2Icon />}
        variant={navigationButtonsWithText ? 'text' : 'secondary'}
        size={navigationButtonsWithText ? 'medium' : 'small'}
      >
        {navigationButtonsWithText && 'صفحه بعد'}
      </Button>
    </div>
  );
};

export default Pagination;
