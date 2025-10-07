import { format } from 'date-fns-jalali/format';
import { type FC } from 'react';
import { useDateAndTimePickerWrapper } from '@/src/hooks/form/useDateAndTimePickerWrapper';
import Body from './Body';
import { DatePickerProvider } from './context';
import Footer from './Footer';
import Header from './Header';
import type { DatepickerProps } from './types';

import '@/src/styles.css';

function formatValue(value: DatepickerProps['value']) {
  if (!value) return '';
  if (value instanceof Date) return format(value, 'd MMMM yyyy');

  return value.start && value.end
    ? `از ${format(value.start, 'yyyy/M/d')} تا ${format(value.end, 'yyyy/M/d')}`
    : '';
}

const DatePicker: FC<DatepickerProps> = (props) => {
  const { showSubmitButton = true, showTodayButton = true } = props;

  const { Wrapper, wrapperProps } = useDateAndTimePickerWrapper({
    props,
    standaloneMode: 'calendar',
    formatValue,
  });

  return (
    <Wrapper {...wrapperProps}>
      <DatePickerProvider datepickerProps={props}>
        <Header />
        <Body />
        {(showSubmitButton || showTodayButton) && <Footer />}
      </DatePickerProvider>
    </Wrapper>
  );
};

export default DatePicker;
