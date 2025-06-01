'use client';
import clsx from 'clsx';
import { useState } from 'react';
import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';
import IconArrowRight2 from '@/src/icons/IconArrowRight2';
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
    <div
      className={clsx(
        'dgsuikit:flex dgsuikit:justify-between dgsuikit:w-full dgsuikit:px-4 dgsuikit:text-gray-600',
        className,
      )}
    >
      <Button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        rightIcon={<IconArrowRight2 />}
        variant={navigationButtonsWithText ? 'text' : 'secondary'}
        size={navigationButtonsWithText ? 'medium' : 'small'}
      >
        {navigationButtonsWithText && 'صفحه قبل'}
      </Button>
      <div className="dgsuikit:flex dgsuikit:items-center dgsuikit:gap-x-1 dgsuikit:md:gap-x-4">
        {paginationRange.map((pageNumber, index) => {
          if (typeof pageNumber === 'string') {
            return <div key={`${pageNumber}-${index}`}>{DOTS}</div>;
          }
          return (
            <button
              key={pageNumber}
              className={clsx(
                'ss02 dgsuikit:w-9 dgsuikit:h-9 dgsuikit:md:w-11 dgsuikit:md:h-11 dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center dgsuikit:font-h6-bold dgsuikit:md:font-h5-bold dgsuikit:transition dgsuikit:border dgsuikit:border-solid dgsuikit:border-transparent dgsuikit:rounded-lg',
                pageNumber === currentPage
                  ? 'dgsuikit:bg-primary-500 dgsuikit:text-white'
                  : 'dgsuikit:hover:text-primary-500 dgsuikit:hover:border-primary-200',
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
        leftIcon={<IconArrowLeft2 />}
        variant={navigationButtonsWithText ? 'text' : 'secondary'}
        size={navigationButtonsWithText ? 'medium' : 'small'}
      >
        {navigationButtonsWithText && 'صفحه بعد'}
      </Button>
    </div>
  );
};

export default Pagination;
