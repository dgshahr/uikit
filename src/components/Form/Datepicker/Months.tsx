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
    'dgs-ui-kit-rounded-full dgs-ui-kit-py-1 dgs-ui-kit-transition hover:dgs-ui-kit-bg-primary-50 hover:dgs-ui-kit-text-primary-500';
  const activeClassName = '!dgs-ui-kit-bg-primary-500 !dgs-ui-kit-text-white';
  const isSelectable =
    (startDate ? isAfter(endOfMonth(month), startDate) : true) &&
    (endDate ? isBefore(month, endOfMonth(endDate)) : true);

  if (value instanceof Date) {
    if (isSameMonth(value, month)) className = `${className} ${activeClassName}`;
  } else if (value.start && isSameMonth(month, value.start))
    className = `${className} ${activeClassName}`;

  if (!isSelectable)
    className = `${className} dgs-ui-kit-line-through dgs-ui-kit-pointer-events-none`;

  return className;
}

const Months: FC = () => {
  const { internalDate, datepickerProps, setInternalDate, setDateType } = useDatepickerContext();

  function handleMonthSelect(month: Date) {
    setInternalDate(startOfMonth(month));
    setDateType(DateTypes.Day);
  }

  return (
    <div className="dgs-ui-kit-p-3 dgs-ui-kit-grid dgs-ui-kit-grid-cols-3 dgs-ui-kit-text-center dgs-ui-kit-gap-y-3 dgs-ui-kit-font-p3-medium dgs-ui-kit-text-gray-600">
      {eachMonthOfInterval({
        start: startOfYear(internalDate),
        end: endOfYear(internalDate),
      }).map((month) => (
        <button
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
