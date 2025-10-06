import { type FC } from 'react';
import Body from './Body';
import { TimePickerProvider } from './context';
import Footer from './Footer';
import type { TimepickerProps } from './types';
import { useDateAndTimePickerWrapper } from '../../../hooks/useDateAndTimePickerWrapper';

function formatValue(value: TimepickerProps['value']) {
  if (!value) return '';

  if (value instanceof Date) {
    const hours = value.getHours().toString().padStart(2, '0');
    const minutes = value.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  if (value.start && value.end) {
    const startHours = value.start.getHours().toString().padStart(2, '0');
    const startMinutes = value.start.getMinutes().toString().padStart(2, '0');
    const endHours = value.end.getHours().toString().padStart(2, '0');
    const endMinutes = value.end.getMinutes().toString().padStart(2, '0');
    return `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`;
  }
  return '';
}

const TimePicker: FC<TimepickerProps> = (props) => {
  const { showSubmitButton = true, showNowButton = true } = props;

  const { Wrapper, wrapperProps } = useDateAndTimePickerWrapper({
    props,
    standaloneMode: 'time',
    formatValue,
  });

  return (
    <Wrapper {...wrapperProps}>
      <TimePickerProvider timePickerProps={props}>
        <Body />
        {(showSubmitButton || showNowButton) && <Footer />}
      </TimePickerProvider>
    </Wrapper>
  );
};

export default TimePicker;
