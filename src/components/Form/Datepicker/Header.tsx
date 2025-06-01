import { add } from 'date-fns-jalali/add';
import { format } from 'date-fns-jalali/format';
import { isSameMonth } from 'date-fns-jalali/isSameMonth';
import { isSameYear } from 'date-fns-jalali/isSameYear';
import { isWithinInterval } from 'date-fns-jalali/isWithinInterval';
import { startOfMonth } from 'date-fns-jalali/startOfMonth';
import { sub } from 'date-fns-jalali/sub';
import type { FC } from 'react';
import IconArrowDown2 from '@/src/icons/IconArrowDown2';
import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';
import IconArrowRight2 from '@/src/icons/IconArrowRight2';
import { useDatepickerContext } from './context';
import { DateTypes } from './types';
import Button from '../../Button';

function getButtonTitle(dateType: DateTypes, internalDate: Date) {
  switch (dateType) {
    case DateTypes.Day:
      return format(internalDate, 'yyyy MMMM');
    case DateTypes.Month:
      return format(internalDate, 'yyyy');
    case DateTypes.Year:
      return `${format(internalDate, 'yyyy')}-${format(sub(internalDate, { years: 11 }), 'yyyy')}`;
    default:
      return 'تاریخ اشتباه';
  }
}

function isPrevNavigationDisabled(internalDate: Date, dateType: DateTypes, startDate: Date) {
  switch (dateType) {
    case DateTypes.Day:
      return isSameMonth(internalDate, add(startDate, { days: 1 }));
    case DateTypes.Month:
      return isSameYear(internalDate, startDate);
    case DateTypes.Year:
      return isWithinInterval(startDate, {
        start: internalDate,
        end: sub(internalDate, { years: 12 }),
      });
  }
}

function isNextNavigationDisabled(internalDate: Date, dateType: DateTypes, endDate: Date) {
  switch (dateType) {
    case DateTypes.Day:
      return isSameMonth(sub(endDate, { days: 1 }), internalDate);
    case DateTypes.Month:
      return isSameYear(endDate, internalDate);
    case DateTypes.Year:
      return isWithinInterval(endDate, {
        start: internalDate,
        end: sub(internalDate, { years: 12 }),
      });
  }
}

const Header: FC = () => {
  const { internalDate, dateType, setDateType, setInternalDate, datepickerProps } =
    useDatepickerContext();
  const { startDate, endDate } = datepickerProps;

  function handleNavigate(type: 'next' | 'prev') {
    const calculationFunc = type === 'next' ? add : sub;
    switch (dateType) {
      case DateTypes.Day: {
        setInternalDate(calculationFunc(startOfMonth(internalDate), { months: 1 }));
        break;
      }
      case DateTypes.Month: {
        setInternalDate(calculationFunc(internalDate, { years: 1 }));
        break;
      }
      case DateTypes.Year:
        setInternalDate(calculationFunc(internalDate, { years: 12 }));
        break;
      default: {
        console.error('wrong date type');
        break;
      }
    }
  }

  return (
    <div className="dgsuikit:p-3 dgsuikit:flex dgsuikit:justify-between dgsuikit:items-center dgsuikit:border-b dgsuikit:border-gray-200">
      <button
        type="button"
        className="dgsuikit:bg-gray-100 dgsuikit:rounded-lg dgsuikit:p-3 dgsuikit:min-w-[50%] dgsuikit:flex dgsuikit:justify-between dgsuikit:items-center dgsuikit:disabled:cursor-not-allowed"
        disabled={dateType === DateTypes.Year}
        onClick={() => dateType !== DateTypes.Year && setDateType(dateType + 1)}
      >
        <span className="dgsuikit:font-button-large dgsuikit:text-gray-700 ss02">
          {getButtonTitle(dateType, internalDate)}
        </span>
        <IconArrowDown2
          width={20}
          height={20}
          className="dgsuikit:text-gray-600"
        />
      </button>
      <div className="dgsuikit:flex dgsuikit:gap-2">
        <Button
          type="button"
          variant="outline"
          rightIcon={<IconArrowRight2 />}
          disabled={startDate && isPrevNavigationDisabled(internalDate, dateType, startDate)}
          onClick={() => handleNavigate('prev')}
        />
        <Button
          type="button"
          variant="outline"
          rightIcon={<IconArrowLeft2 />}
          disabled={endDate && isNextNavigationDisabled(internalDate, dateType, endDate)}
          onClick={() => handleNavigate('next')}
        />
      </div>
    </div>
  );
};

export default Header;
