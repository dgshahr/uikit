import { format } from 'date-fns-jalali/format';
import { isBefore } from 'date-fns-jalali/isBefore';
import { isSameDay } from 'date-fns-jalali/isSameDay';
import { Fragment, type FC } from 'react';
import { useDatepickerContext } from './context';
import { getDayClassName, getDaysOfCalendar } from './utils';

const SHORT_WEEK_DAYS = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

const Days: FC = () => {
  const { internalDate, datepickerProps } = useDatepickerContext();
  const { showExtraDays, onChange, acceptRange, value, disableDates, holidays, dayHoverAction } =
    datepickerProps;
  const daysOfCalendar = getDaysOfCalendar(internalDate, disableDates, holidays);
  const haveAction = Boolean(dayHoverAction?.onClick && dayHoverAction?.element);

  const DayWrapper = haveAction ? 'div' : Fragment;

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
          <DayWrapper
            key={dayItem.date.toString()}
            {...(haveAction ? { className: 'dgsuikit:group dgsuikit:relative' } : {})}
          >
            {haveAction && (dayItem.isInMonth || showExtraDays) && (
              <button
                type="button"
                className="dgsuikit:absolute dgsuikit:top-0 dgsuikit:right-0 dgsuikit:-translate-y-1/2 dgsuikit:opacity-0 dgsuikit:group-hover:opacity-100 dgsuikit:transition-opacity"
                onClickCapture={(e) => {
                  e.stopPropagation();
                  dayHoverAction!.onClick(dayItem);
                }}
              >
                {dayHoverAction!.element(dayItem)}
              </button>
            )}
            <button
              type="button"
              className={getDayClassName({ ...dayItem, ...datepickerProps })}
              onClick={() => handleChange(dayItem.date)}
              disabled={dayItem.isDisabled}
            >
              {dayItem.isInMonth || showExtraDays ? format(dayItem.date, 'd') : ''}
            </button>
          </DayWrapper>
        ))}
      </div>
    </>
  );
};

export default Days;
