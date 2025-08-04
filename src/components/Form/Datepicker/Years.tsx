import { eachYearOfInterval } from 'date-fns-jalali/eachYearOfInterval';
import { format } from 'date-fns-jalali/format';
import { startOfYear } from 'date-fns-jalali/startOfYear';
import { subYears } from 'date-fns-jalali/subYears';
import type { FC } from 'react';
import { useDatepickerContext } from './context';
import { DateTypes } from './types';
import { getYearClassName } from './utils';

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
