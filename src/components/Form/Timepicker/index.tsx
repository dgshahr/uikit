import { type FC } from 'react';
import Body from './Body';
import Footer from './Footer';
import type { TimepickerProps } from './types';
import { usePickerWrapper } from '../../../hooks/usePickerWrapper';
import PickerWrapper from '../Wrappers/PickerWrapper/PickerWrapper';

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

  const { Wrapper, wrapperProps } = usePickerWrapper<TimepickerProps, TimepickerProps['value']>({
    props,
    mode: props.mode,
    standaloneMode: 'time',
    formatValue,
  });

  const WrapperComponent = Wrapper === 'div' ? 'div' : PickerWrapper;

  return (
    <WrapperComponent
      {...(Wrapper === 'div' ? wrapperProps : { ...wrapperProps, children: undefined })}
    >
      <Body timePickerProps={props} />
      {(showSubmitButton || showNowButton) && <Footer timePickerProps={props} />}
    </WrapperComponent>
  );
};

export default TimePicker;
