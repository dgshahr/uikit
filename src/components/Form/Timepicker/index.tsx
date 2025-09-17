import clsx from 'clsx';
import { type FC } from 'react';
import Body from './Body';
import Footer from './Footer';
import type { TimepickerProps } from './types';
import PickerWrapper from '../Wrappers/PickerWrapper/PickerWrapper';
import type { PickerWrapperProps } from '../Wrappers/PickerWrapper/type';

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
  const { showSubmitButton = true, showNowButton = true, value } = props;

  const wrapperProps: Omit<PickerWrapperProps, 'children'> = { ...props };
  if (props.mode !== 'time') {
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

  const Wrapper = props.mode === 'time' ? 'div' : PickerWrapper;

  return (
    <Wrapper
      {...(props.mode !== 'time'
        ? (wrapperProps as PickerWrapperProps)
        : { className: props.wrapperClassName })}
    >
      <Body timePickerProps={props} />
      {(showSubmitButton || showNowButton) && <Footer timePickerProps={props} />}
    </Wrapper>
  );
};

export default TimePicker;
