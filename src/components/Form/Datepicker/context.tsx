import { createContext, useContext, useState, type FC, type PropsWithChildren } from 'react';
import { DateTypes, type ContextProviderProps, type IDatepickerContext } from './types';

const datepickerContext = createContext<IDatepickerContext>({
  dateType: DateTypes.Day,
  setDateType: () => {},
  internalDate: new Date(),
  setInternalDate: () => {},
  datepickerProps: {
    value: new Date(),
    onChange: () => {},
  },
});

export const DatePickerProvider: FC<PropsWithChildren<ContextProviderProps>> = (props) => {
  const { children, datepickerProps } = props;
  const [dateType, setDateType] = useState(DateTypes.Day);
  const [internalDate, setInternalDate] = useState(datepickerProps.value ?? new Date());

  return (
    <datepickerContext.Provider
      value={{
        dateType,
        setDateType,
        internalDate,
        setInternalDate,
        datepickerProps,
      }}
    >
      {children}
    </datepickerContext.Provider>
  );
};

export const useDatepickerContext = () => useContext(datepickerContext);
