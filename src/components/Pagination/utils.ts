import type { PaginationProps } from '.';

export const DOTS = '...';

function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

interface GetPaginationRangeArguments
  extends Required<Pick<PaginationProps, 'totalCount' | 'pageSize' | 'siblingCount'>> {
  currentPage: number;
}

export function getPaginationRange({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
}: GetPaginationRangeArguments) {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
  const totalPageNumbers = siblingCount + 5;

  /*
    Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
  */
  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  /*
    Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
  */
  const rightSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const leftSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

  /*
    We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
  */
  const shouldShowRightDots = rightSiblingIndex > 2;
  const shouldShowLeftDots = leftSiblingIndex < totalPageCount - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  /*
    Case 2:
     No left dots to show, but rights dots to be shown
  */
  if (!shouldShowRightDots && shouldShowLeftDots) {
    let rightItemCount = 2 + siblingCount;
    if (rightSiblingIndex > 1) rightItemCount += 1;
    const rightRange = range(1, rightItemCount);

    return [...rightRange, DOTS, totalPageCount];
  }

  /*
    Case 3:
     No right dots to show, but left dots to be shown
  */
  if (shouldShowRightDots && !shouldShowLeftDots) {
    let leftItemCount = 2 + siblingCount;
    if (leftSiblingIndex < totalPageCount) leftItemCount += 1;
    const leftRange = range(totalPageCount - leftItemCount + 1, totalPageCount);
    return [firstPageIndex, DOTS, ...leftRange];
  }

  /*
    Case 4:
     Both left and right dots to be shown
  */
  const middleRange = range(rightSiblingIndex, leftSiblingIndex);
  return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
}
