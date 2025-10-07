import { createContext, useContext, type FC, type PropsWithChildren } from 'react';
import type { TimepickerProps } from './types';

interface ITimePickerContext {
  timePickerProps: TimepickerProps;
}

interface ContextProviderProps {
  timePickerProps: TimepickerProps;
}

const timePickerContext = createContext<ITimePickerContext>({
  timePickerProps: {
    value: new Date(),
    onChange: () => {},
  },
});

export const TimePickerProvider: FC<PropsWithChildren<ContextProviderProps>> = (props) => {
  const { children, timePickerProps } = props;

  return (
    <timePickerContext.Provider
      value={{
        timePickerProps,
      }}
    >
      {children}
    </timePickerContext.Provider>
  );
};

export const useTimePickerContext = () => useContext(timePickerContext);
