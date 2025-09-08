import clsx from 'clsx';
import { format } from 'date-fns-jalali/format';
import { type FC, useEffect } from 'react';
import Body from './Body';
import { DatePickerProvider, useDatepickerContext } from './context';
import Footer from './Footer';
import Header from './Header';
import type { DatepickerProps } from './types';
import PickerWrapper from '../Wrappers/PickerWrapper/PickerWrapper';

import '@/src/styles.css';
import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

function formatValue(value: DatepickerProps['value']) {
  if (!value) return '';
  if (value instanceof Date) return format(value, 'd MMMM yyyy');

  return value.start && value.end
    ? `از ${format(value.start, 'yyyy/M/d')} تا ${format(value.end, 'yyyy/M/d')}`
    : '';
}

const DatePickerInner: FC<{ onInternalDateChange?: (date: Date) => void; showFooter: boolean }> = ({
  onInternalDateChange,
  showFooter,
}) => {
  const { internalDate } = useDatepickerContext();

  useEffect(() => {
    if (onInternalDateChange) onInternalDateChange(internalDate);
  }, [internalDate, onInternalDateChange]);

  return (
    <>
      <Header />
      <Body />
      {showFooter && <Footer />}
    </>
  );
};

const DatePicker: FC<DatepickerProps> = (props) => {
  const { showSubmitButton = true, showTodayButton = true, value } = props;
  const showFooter = showSubmitButton || showTodayButton;

  const wrapperProps: Omit<PickerWrapperProps, 'children'> = { ...props };
  if (props.mode !== 'calendar') {
    if (wrapperProps.dropdownType === 'drawer') {
      wrapperProps.drawerProps = {
        ...wrapperProps.drawerProps,
        containerClassName: clsx('dgsuikit:!p-0', wrapperProps.drawerProps?.containerClassName),
      };
    } else {
      wrapperProps.popoverClassName = clsx(
        'dgsuikit:!p-0 dgsuikit:max-h-max',
        wrapperProps.popoverClassName,
      );
    }

    if (!wrapperProps.customInput) {
      wrapperProps.inputProps = {
        ...wrapperProps.inputProps,
        value: wrapperProps.inputProps?.value ?? formatValue(value),
      };
    }
  }

  const Wrapper = props.mode === 'calendar' ? 'div' : PickerWrapper;

  return (
    <Wrapper
      {...(props.mode !== 'calendar'
        ? (wrapperProps as PickerWrapperProps)
        : { className: props.wrapperClassName })}
    >
      <DatePickerProvider datepickerProps={props}>
        <DatePickerInner
          onInternalDateChange={props.onInternalDateChange}
          showFooter={showFooter}
        />
      </DatePickerProvider>
    </Wrapper>
  );
};

export default DatePicker;
