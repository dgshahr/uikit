import { addDays } from 'date-fns-jalali/addDays';
import { eachDayOfInterval } from 'date-fns-jalali/eachDayOfInterval';
import { endOfMonth } from 'date-fns-jalali/endOfMonth';
import { endOfWeek } from 'date-fns-jalali/endOfWeek';
import { format } from 'date-fns-jalali/format';
import { getDay } from 'date-fns-jalali/getDay';
import { isAfter } from 'date-fns-jalali/isAfter';
import { isBefore } from 'date-fns-jalali/isBefore';
import { isSameDay } from 'date-fns-jalali/isSameDay';
import { isWithinInterval } from 'date-fns-jalali/isWithinInterval';
import { startOfMonth } from 'date-fns-jalali/startOfMonth';
import { startOfWeek } from 'date-fns-jalali/startOfWeek';
import { subDays } from 'date-fns-jalali/subDays';
import type { FC } from 'react';
import { useDatepickerContext } from './context';
import type { DatepickerProps } from './types';

type DayItem = { date: Date; isInMonth: boolean }[];

const SHORT_WEEK_DAYS = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

function getDaysOfCalendar(internalDate: Date) {
  let tempDays: DayItem = [];
  const endOfCurrentMonth = endOfMonth(internalDate);
  const startOfCurrentMonth = startOfMonth(internalDate);
  const daysOfMonth = eachDayOfInterval({
    start: startOfMonth(internalDate),
    end: endOfMonth(internalDate),
  }).map((date) => ({ date, isInMonth: true }));
  const startOfMonthWeekday = getDay(startOfCurrentMonth);
  const endOfMonthWeekday = getDay(endOfCurrentMonth);

  if (startOfMonthWeekday !== 6) {
    const daysTillStartOfWeek = eachDayOfInterval({
      start: startOfWeek(startOfCurrentMonth),
      end: subDays(startOfCurrentMonth, 1),
    });
    tempDays = [
      ...daysTillStartOfWeek.map((date) => ({
        date,
        isInMonth: false,
      })),
      ...daysOfMonth,
    ];
  } else tempDays = [...daysOfMonth];

  if (endOfMonthWeekday != 5) {
    const daysTillEndOfWeek = eachDayOfInterval({
      start: addDays(endOfCurrentMonth, 1),
      end: endOfWeek(endOfCurrentMonth),
    }).map((date) => ({
      date,
      isInMonth: false,
    }));
    tempDays = [...tempDays, ...daysTillEndOfWeek];
  }

  return tempDays;
}

function getDayClassName({
  date,
  isInMonth,
  showExtraDays,
  value,
  startDate,
  endDate,
  highlightWeekends,
  holidays,
}: DayItem[0] & DatepickerProps) {
  const isDateVisible = isInMonth || showExtraDays;
  if (!isDateVisible) return 'dgsuikit:pointer-events-none';

  const isToday = isSameDay(new Date(), date);
  const isWeekend = getDay(date) === 5;
  const isSelectable =
    (startDate ? isAfter(date, startDate) : true) && (endDate ? isBefore(date, endDate) : true);
  const isHoliday = holidays?.length && holidays.some((hDate) => isSameDay(hDate, date));

  const activeItemClass = 'dgsuikit:!bg-primary-500 dgsuikit:!text-white dgsuikit:border-none';
  const holidayClass = 'dgsuikit:!text-error-500';
  let className =
    'dgsuikit:py-1 dgsuikit:rounded-2xl dgsuikit:transition dgsuikit:hover:bg-primary-50 dgsuikit:hover:text-primary-500';

  if (isToday) className = `${className} dgsuikit:border dgsuikit:border-primary-300`;
  if (!isInMonth && isDateVisible) className = `${className} dgsuikit:text-gray-400`;
  else if ((isWeekend && highlightWeekends) || isHoliday)
    className = `${className} ${holidayClass}`;
  else className = `${className} dgsuikit:text-gray-600`;
  if (!isSelectable) className = `${className} dgsuikit:line-through dgsuikit:pointer-events-none`;

  if (value instanceof Date) {
    if (isSameDay(value, date)) className = `${className} ${activeItemClass}`;
  } else if (value.start && isSameDay(value.start, date))
    className = `${className} dgsuikit:rounded-l-none ${activeItemClass}`;
  else if (value.end && isSameDay(value.end, date))
    className = `${className} dgsuikit:rounded-r-none ${activeItemClass}`;
  else if (
    value.start &&
    value.end &&
    isWithinInterval(date, {
      start: value.start,
      end: value.end,
    })
  )
    className = `${className} dgsuikit:rounded-none dgsuikit:border-none dgsuikit:bg-primary-50 dgsuikit:text-primary-500`;

  return className;
}

const Days: FC = () => {
  const { internalDate, datepickerProps } = useDatepickerContext();
  const { showExtraDays, onChange, acceptRange, value } = datepickerProps;
  const daysOfCalendar = getDaysOfCalendar(internalDate);

  function handleChange(date: Date) {
    if (acceptRange) {
      if (value.start && isSameDay(value.start, date)) return;
      if ((value.start && !value.end && isBefore(date, value.start)) || !value.start || value.end)
        onChange({ start: date, end: null });
      else
        onChange({
          start: value.start,
          end: date,
        });
    } else onChange(date);
  }

  return (
    <>
      <div className="dgsuikit:bg-gray-50 dgsuikit:p-3 dgsuikit:font-button-small dgsuikit:text-gray-600 dgsuikit:text-center dgsuikit:grid dgsuikit:grid-rows-1 dgsuikit:grid-cols-7">
        {SHORT_WEEK_DAYS.map((weekDay) => (
          <span key={weekDay}>{weekDay}</span>
        ))}
      </div>
      <div className="dgsuikit:grid dgsuikit:grid-cols-7 dgsuikit:text-center dgsuikit:font-p3-medium dgsuikit:ss02 dgsuikit:p-3 dgsuikit:gap-y-2">
        {daysOfCalendar.map((dayItem) => (
          <button
            type="button"
            key={dayItem.date.toString()}
            className={getDayClassName({ ...dayItem, ...datepickerProps })}
            onClick={() => handleChange(dayItem.date)}
          >
            {dayItem.isInMonth || showExtraDays ? format(dayItem.date, 'd') : ''}
          </button>
        ))}
      </div>
    </>
  );
};

export default Days;
