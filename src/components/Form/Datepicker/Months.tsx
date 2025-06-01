import { eachMonthOfInterval } from 'date-fns-jalali/eachMonthOfInterval';
import { endOfMonth } from 'date-fns-jalali/endOfMonth';
import { endOfYear } from 'date-fns-jalali/endOfYear';
import { format } from 'date-fns-jalali/format';
import { isAfter } from 'date-fns-jalali/isAfter';
import { isBefore } from 'date-fns-jalali/isBefore';
import { isSameMonth } from 'date-fns-jalali/isSameMonth';
import { startOfMonth } from 'date-fns-jalali/startOfMonth';
import { startOfYear } from 'date-fns-jalali/startOfYear';
import type { FC } from 'react';
import { useDatepickerContext } from './context';
import { DateTypes, type DatepickerProps } from './types';

function getMonthClassName({
  month,
  value,
  startDate,
  endDate,
}: { month: Date } & DatepickerProps) {
  let className =
    'dgsuikit:rounded-full dgsuikit:py-1 dgsuikit:transition dgsuikit:hover:bg-primary-50 dgsuikit:hover:text-primary-500';
  const activeClassName = 'dgsuikit:!bg-primary-500 dgsuikit:!text-white';
  const isSelectable =
    (startDate ? isAfter(endOfMonth(month), startDate) : true) &&
    (endDate ? isBefore(month, endOfMonth(endDate)) : true);

  if (value instanceof Date) {
    if (isSameMonth(value, month)) className = `${className} ${activeClassName}`;
  } else if (value.start && isSameMonth(month, value.start))
    className = `${className} ${activeClassName}`;

  if (!isSelectable) className = `${className} dgsuikit:line-through dgsuikit:pointer-events-none`;

  return className;
}

const Months: FC = () => {
  const { internalDate, datepickerProps, setInternalDate, setDateType } = useDatepickerContext();

  function handleMonthSelect(month: Date) {
    setInternalDate(startOfMonth(month));
    setDateType(DateTypes.Day);
  }

  return (
    <div className="dgsuikit:p-3 dgsuikit:grid dgsuikit:grid-cols-3 dgsuikit:text-center dgsuikit:gap-y-3 dgsuikit:font-p3-medium dgsuikit:text-gray-600">
      {eachMonthOfInterval({
        start: startOfYear(internalDate),
        end: endOfYear(internalDate),
      }).map((month) => (
        <button
          type="button"
          key={month.toString()}
          className={getMonthClassName({ month, ...datepickerProps })}
          onClick={() => handleMonthSelect(month)}
        >
          {format(month, 'MMMM')}
        </button>
      ))}
    </div>
  );
};

export default Months;
