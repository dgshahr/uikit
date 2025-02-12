import { add } from 'date-fns-jalali/add';
import { addYears } from 'date-fns-jalali/addYears';
import { endOfDecade } from 'date-fns-jalali/endOfDecade';
import { format } from 'date-fns-jalali/format';
import { isSameMonth } from 'date-fns-jalali/isSameMonth';
import { isSameYear } from 'date-fns-jalali/isSameYear';
import { startOfDecade } from 'date-fns-jalali/startOfDecade';
import { sub } from 'date-fns-jalali/sub';
import type { FC } from 'react';
import ArrowDown2Icon from '@/src/icons/ArrowDown2';
import ArrowLeft2Icon from '@/src/icons/ArrowLeft2';
import ArrowRight2Icon from '@/src/icons/ArrowRight2';
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
      return `${format(addYears(endOfDecade(internalDate), 1), 'yyyy')}-${format(startOfDecade(internalDate), 'yyyy')}`;
    default:
      return 'تاریخ اشتباه';
  }
}

function isPrevNavigationDisabled(internalDate: Date, dateType: DateTypes, startDate: Date) {
  switch (dateType) {
    case DateTypes.Day:
      return isSameMonth(internalDate, startDate);
    case DateTypes.Month:
      return isSameYear(internalDate, startDate);
    case DateTypes.Year:
      return isSameYear(endOfDecade(internalDate), endOfDecade(startDate));
  }
}

function isNextNavigationDisabled(internalDate: Date, dateType: DateTypes, endDate: Date) {
  switch (dateType) {
    case DateTypes.Day:
      return isSameMonth(endDate, internalDate);
    case DateTypes.Month:
      return isSameYear(endDate, internalDate);
    case DateTypes.Year:
      return isSameYear(endOfDecade(endDate), endOfDecade(internalDate));
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
        setInternalDate(calculationFunc(internalDate, { months: 1 }));
        break;
      }
      case DateTypes.Month: {
        setInternalDate(calculationFunc(internalDate, { years: 1 }));
        break;
      }
      case DateTypes.Year:
        setInternalDate(calculationFunc(internalDate, { years: 11 }));
        break;
      default: {
        console.error('wrong date type');
        break;
      }
    }
  }

  return (
    <div className="dgs-ui-kit-p-3 dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center dgs-ui-kit-border-b dgs-ui-kit-border-gray-200">
      <button
        className="dgs-ui-kit-bg-gray-100 dgs-ui-kit-rounded-lg dgs-ui-kit-p-3 dgs-ui-kit-min-w-[50%] dgs-ui-kit-flex dgs-ui-kit-justify-between dgs-ui-kit-items-center disabled:dgs-ui-kit-cursor-not-allowed"
        disabled={dateType === DateTypes.Year}
        onClick={() => dateType !== DateTypes.Year && setDateType(dateType + 1)}
      >
        <span className="dgs-ui-kit-font-button-large dgs-ui-kit-text-gray-700 ss02">
          {getButtonTitle(dateType, internalDate)}
        </span>
        <ArrowDown2Icon
          width={20}
          height={20}
          className="dgs-ui-kit-text-gray-600"
        />
      </button>
      <div className="dgs-ui-kit-flex dgs-ui-kit-gap-2">
        <Button
          variant="outline"
          rightIcon={<ArrowRight2Icon />}
          disabled={startDate && isPrevNavigationDisabled(internalDate, dateType, startDate)}
          onClick={() => handleNavigate('prev')}
        />
        <Button
          variant="outline"
          rightIcon={<ArrowLeft2Icon />}
          disabled={endDate && isNextNavigationDisabled(internalDate, dateType, endDate)}
          onClick={() => handleNavigate('next')}
        />
      </div>
    </div>
  );
};

export default Header;
