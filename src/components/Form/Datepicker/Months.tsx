import { eachMonthOfInterval } from 'date-fns-jalali/eachMonthOfInterval';
import { endOfYear } from 'date-fns-jalali/endOfYear';
import { format } from 'date-fns-jalali/format';
import { startOfMonth } from 'date-fns-jalali/startOfMonth';
import { startOfYear } from 'date-fns-jalali/startOfYear';
import type { FC } from 'react';
import { useDatepickerContext } from './context';
import { DateTypes } from './types';
import { getMonthClassName } from './utils';

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
