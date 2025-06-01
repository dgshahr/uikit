import clsx from 'clsx';
import { format } from 'date-fns-jalali/format';
import { type FC } from 'react';
import Body from './Body';
import { DatePickerProvider } from './context';
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

const DatePicker: FC<DatepickerProps> = (props) => {
  const { showSubmitButton = true, showTodayButton = true, value } = props;

  const wrapperProps: Omit<PickerWrapperProps, 'children'> = { ...props };
  if (wrapperProps.dropdownType === 'drawer') {
    wrapperProps.drawerProps = {
      ...wrapperProps.drawerProps,
      containerClassName: clsx('dgsuikit:!p-0', wrapperProps.drawerProps?.containerClassName),
    };
  } else
    wrapperProps.popoverClassName = clsx(
      'dgsuikit:!p-0 dgsuikit:max-h-max',
      wrapperProps.popoverClassName,
    );

  if (!wrapperProps.customInput)
    wrapperProps.inputProps = {
      ...wrapperProps.inputProps,
      value: wrapperProps.inputProps?.value ?? formatValue(value),
    };

  return (
    <PickerWrapper {...(wrapperProps as PickerWrapperProps)}>
      <DatePickerProvider datepickerProps={props}>
        <Header />
        <Body />
        {(showSubmitButton || showTodayButton) && <Footer />}
      </DatePickerProvider>
    </PickerWrapper>
  );
};

export default DatePicker;
