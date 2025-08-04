import { addDays } from 'date-fns-jalali/addDays';
import { eachDayOfInterval } from 'date-fns-jalali/eachDayOfInterval';
import { endOfMonth } from 'date-fns-jalali/endOfMonth';
import { endOfWeek } from 'date-fns-jalali/endOfWeek';
import { getDay } from 'date-fns-jalali/getDay';
import { isAfter } from 'date-fns-jalali/isAfter';
import { isBefore } from 'date-fns-jalali/isBefore';
import { isSameDay } from 'date-fns-jalali/isSameDay';
import { isWithinInterval } from 'date-fns-jalali/isWithinInterval';
import { startOfMonth } from 'date-fns-jalali/startOfMonth';
import { startOfWeek } from 'date-fns-jalali/startOfWeek';
import { subDays } from 'date-fns-jalali/subDays';
import type { DatepickerProps, DayItem } from './types';

function isDateInDateArray(datesArray: Date[], date: Date) {
  return datesArray.some((disabledDate) => isSameDay(disabledDate, date));
}

export function getDaysOfCalendar(
  internalDate: Date,
  disableDates: DatepickerProps['disableDates'] = [],
  holidays: DatepickerProps['holidays'] = [],
) {
  let tempDays: DayItem[] = [];
  const endOfCurrentMonth = endOfMonth(internalDate);
  const startOfCurrentMonth = startOfMonth(internalDate);
  const daysOfMonth = eachDayOfInterval({
    start: startOfMonth(internalDate),
    end: endOfMonth(internalDate),
  }).map((date) => ({
    date,
    isInMonth: true,
    isDisabled: isDateInDateArray(disableDates, date),
    isHoliday: isDateInDateArray(holidays, date),
  }));
  const startOfMonthWeekday = getDay(startOfCurrentMonth);
  const endOfMonthWeekday = getDay(endOfCurrentMonth);

  if (startOfMonthWeekday !== 6) {
    const daysTillStartOfWeek = eachDayOfInterval({
      start: startOfWeek(startOfCurrentMonth),
      end: subDays(startOfCurrentMonth, 1),
    }).map((date) => ({
      date,
      isInMonth: false,
      isDisabled: isDateInDateArray(disableDates, date),
      isHoliday: isDateInDateArray(holidays, date),
    }));
    tempDays = [...daysTillStartOfWeek, ...daysOfMonth];
  } else tempDays = [...daysOfMonth];

  if (endOfMonthWeekday != 5) {
    const daysTillEndOfWeek = eachDayOfInterval({
      start: addDays(endOfCurrentMonth, 1),
      end: endOfWeek(endOfCurrentMonth),
    }).map((date) => ({
      date,
      isInMonth: false,
      isDisabled: isDateInDateArray(disableDates, date),
      isHoliday: isDateInDateArray(holidays, date),
    }));
    tempDays = [...tempDays, ...daysTillEndOfWeek];
  }

  return tempDays;
}

export function getDayClassName({
  date,
  isInMonth,
  isHoliday,
  showExtraDays,
  value,
  startDate,
  endDate,
  highlightWeekends,
  dayHoverAction,
}: DayItem & DatepickerProps) {
  const isDateVisible = isInMonth || showExtraDays;
  if (!isDateVisible) return 'dgsuikit:pointer-events-none';

  const isToday = isSameDay(new Date(), date);
  const isWeekend = getDay(date) === 5;
  const isSelectable =
    (startDate ? isAfter(date, startDate) : true) && (endDate ? isBefore(date, endDate) : true);

  const activeItemClass = 'dgsuikit:!bg-primary-500 dgsuikit:!text-white dgsuikit:border-none';

  let className =
    'dgsuikit:w-full dgsuikit:py-1 dgsuikit:rounded-2xl dgsuikit:transition dgsuikit:group-hover:bg-primary-50 dgsuikit:not-disabled:group-hover:text-primary-500 dgsuikit:disabled:bg-gray-200';

  if (isToday) className = `${className} dgsuikit:border dgsuikit:border-primary-300`;
  if (!isInMonth && isDateVisible) className = `${className} dgsuikit:text-gray-400`;
  else if ((isWeekend && highlightWeekends) || isHoliday)
    className = `${className} dgsuikit:!text-error-500`;
  else className = `${className} dgsuikit:text-gray-600`;
  if (!isSelectable) className = `${className} dgsuikit:line-through dgsuikit:pointer-events-none`;
  if (!dayHoverAction?.element) className = `${className} dgsuikit:disabled:cursor-not-allowed`;

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
