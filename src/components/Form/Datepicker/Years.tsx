import { eachYearOfInterval } from 'date-fns-jalali/eachYearOfInterval';
import { endOfYear } from 'date-fns-jalali/endOfYear';
import { format } from 'date-fns-jalali/format';
import { isAfter } from 'date-fns-jalali/isAfter';
import { isBefore } from 'date-fns-jalali/isBefore';
import { isSameYear } from 'date-fns-jalali/isSameYear';
import { startOfYear } from 'date-fns-jalali/startOfYear';
import { subYears } from 'date-fns-jalali/subYears';
import type { FC } from 'react';
import { useDatepickerContext } from './context';
import { DateTypes, type DatepickerProps } from './types';

function getYearClassName({ year, value, startDate, endDate }: { year: Date } & DatepickerProps) {
  let className =
    'dgsuikit:rounded-full dgsuikit:py-1 dgsuikit:transition dgsuikit:hover:bg-primary-50 dgsuikit:hover:text-primary-500';
  const activeClassName = 'dgsuikit:!bg-primary-500 dgsuikit:!text-white';
  const isSelectable =
    (startDate ? isAfter(endOfYear(year), startDate) : true) &&
    (endDate ? isBefore(year, endOfYear(endDate)) : true);

  {
    if (value instanceof Date) {
      if (isSameYear(value, year)) className = `${className} ${activeClassName}`;
    } else if (value?.start && isSameYear(year, value.start))
      className = `${className} ${activeClassName}`;
  }

  if (!isSelectable) className = `${className} dgsuikit:line-through dgsuikit:pointer-events-none`;

  return className;
}

const Years: FC = () => {
  const { internalDate, setDateType, setInternalDate, datepickerProps } = useDatepickerContext();

  function handleYearSelect(year: Date) {
    setInternalDate(startOfYear(year));
    setDateType(DateTypes.Month);
  }
  return (
    <div className="dgsuikit:p-3 dgsuikit:grid dgsuikit:grid-cols-3 dgsuikit:text-center dgsuikit:gap-y-3 dgsuikit:font-p3-medium dgsuikit:text-gray-600 dgsuikit:ss02">
      {eachYearOfInterval({
        start: internalDate,
        end: subYears(internalDate, 11),
      }).map((year) => (
        <button
          type="button"
          key={year.toString()}
          onClick={() => handleYearSelect(year)}
          className={getYearClassName({ year, ...datepickerProps })}
        >
          {format(year, 'yyyy')}
        </button>
      ))}
    </div>
  );
};

export default Years;
