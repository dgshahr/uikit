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
  let className = 'dgs-ui-kit-rounded-full dgs-ui-kit-py-1';
  const activeClassName = 'dgs-ui-kit-bg-primary-500 dgs-ui-kit-text-white';
  const isSelectable =
    (startDate ? isAfter(endOfYear(year), startDate) : true) &&
    (endDate ? isBefore(year, endOfYear(endDate)) : true);

  if (value instanceof Date) {
    if (isSameYear(value, year)) className = `${className} ${activeClassName}`;
  } else if (value.start && isSameYear(year, value.start))
    className = `${className} ${activeClassName}`;

  if (!isSelectable)
    className = `${className} dgs-ui-kit-line-through dgs-ui-kit-pointer-events-none`;

  return className;
}

const Years: FC = () => {
  const { internalDate, setDateType, setInternalDate, datepickerProps } = useDatepickerContext();

  function handleYearSelect(year: Date) {
    setInternalDate(startOfYear(year));
    setDateType(DateTypes.Month);
  }
  return (
    <div className="dgs-ui-kit-p-3 dgs-ui-kit-grid dgs-ui-kit-grid-cols-3 dgs-ui-kit-text-center dgs-ui-kit-gap-y-3 dgs-ui-kit-font-p3-medium dgs-ui-kit-text-gray-600 ss02">
      {eachYearOfInterval({
        start: internalDate,
        end: subYears(internalDate, 11),
      }).map((year) => (
        <button
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
