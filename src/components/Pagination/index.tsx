'use client';
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
    <div
      className={clsx(
        'dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-w-full dgs-ui-kit-px-4 dgs-ui-kit-text-gray-600',
        className,
      )}
    >
      <Button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        rightIcon={<ArrowRight2Icon />}
        variant={navigationButtonsWithText ? 'text' : 'secondary'}
        size={navigationButtonsWithText ? 'medium' : 'small'}
      >
        {navigationButtonsWithText && 'صفحه قبل'}
      </Button>
      <div className="dgs-ui-kit-flex dgs-ui-kit-items-center dgs-ui-kit-gap-x-1 md:dgs-ui-kit-gap-x-4">
        {paginationRange.map((pageNumber, index) => {
          if (typeof pageNumber === 'string') {
            return <div key={`${pageNumber}-${index}`}>{DOTS}</div>;
          }
          return (
            <button
              key={pageNumber}
              className={clsx(
                'ss02 dgs-ui-kit-w-9 dgs-ui-kit-h-9 md:dgs-ui-kit-w-11 md:dgs-ui-kit-h-11 dgs-ui-kit-flex dgs-ui-kit-justify-center dgs-ui-kit-items-center dgs-ui-kit-font-h6-bold md:dgs-ui-kit-font-h5-bold dgs-ui-kit-transition dgs-ui-kit-border dgs-ui-kit-border-solid dgs-ui-kit-border-transparent dgs-ui-kit-rounded-lg',
                pageNumber === currentPage
                  ? 'dgs-ui-kit-bg-primary-500 dgs-ui-kit-text-white'
                  : 'hover:dgs-ui-kit-text-primary-500 hover:dgs-ui-kit-border-primary-200',
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
