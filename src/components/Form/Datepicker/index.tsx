import clsx from 'clsx';
import { type FC } from 'react';
import { DatePickerProvider } from './context';
import Footer from './Footer';
import Header from './Header';
import type { DatepickerProps } from './types';
import PickerWrapper from '../Wrappers/PickerWrapper/PickerWrapper';

import '@/src/styles.css';
import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

const DatePicker: FC<DatepickerProps> = (props) => {
  const { showClearButton = true, showTodayButton = true } = props;

  const wrapperProps: Omit<PickerWrapperProps, 'children'> = { ...props };
  if (wrapperProps.dropdownType === 'drawer') {
    wrapperProps.drawerProps = {
      ...wrapperProps.drawerProps,
      containerClassName: clsx('!dgs-ui-kit-p-0', wrapperProps.drawerProps?.containerClassName),
    };
  } else wrapperProps.popoverClassName = clsx('!dgs-ui-kit-p-0', wrapperProps.popoverClassName);

  return (
    <PickerWrapper {...(wrapperProps as PickerWrapperProps)}>
      <DatePickerProvider datepickerProps={props}>
        <Header />
        {(showClearButton || showTodayButton) && <Footer />}
      </DatePickerProvider>
    </PickerWrapper>
  );
};

export default DatePicker;
