import { format } from 'date-fns-jalali/format';
import { type FC } from 'react';
import Body from './Body';
import { DatePickerProvider } from './context';
import Footer from './Footer';
import Header from './Header';
import type { DatepickerProps } from './types';
import { usePickerWrapper } from '../../../hooks/usePickerWrapper';
import PickerWrapper from '../Wrappers/PickerWrapper/PickerWrapper';

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

  const { Wrapper, wrapperProps } = usePickerWrapper<DatepickerProps, DatepickerProps['value']>({
    props,
    mode: props.mode,
    standaloneMode: 'calendar',
    formatValue,
  });

  const WrapperComponent = Wrapper === 'div' ? 'div' : PickerWrapper;

  return (
    <WrapperComponent
      {...(Wrapper === 'div' ? wrapperProps : { ...wrapperProps, children: undefined })}
    >
      <DatePickerProvider datepickerProps={props}>
        <Header />
        <Body />
        {(showSubmitButton || showTodayButton) && <Footer />}
      </DatePickerProvider>
    </WrapperComponent>
  );
};

export default DatePicker;
