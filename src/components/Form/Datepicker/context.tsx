import {
  createContext,
  useContext,
  useState,
  useEffect,
  type FC,
  type PropsWithChildren,
} from 'react';
import {
  DateTypes,
  type ContextProviderProps,
  type DatepickerProps,
  type IDatepickerContext,
} from './types';

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

function initiateInternalDate(value: DatepickerProps['value']) {
  if (!value) return new Date();

  if (value instanceof Date) return value;

  return value.start ?? new Date();
}

export const DatePickerProvider: FC<PropsWithChildren<ContextProviderProps>> = (props) => {
  const { children, datepickerProps } = props;
  const [dateType, setDateType] = useState(DateTypes.Day);
  const [internalDate, setInternalDate] = useState(initiateInternalDate(datepickerProps.value));

  const { onInternalDateChange } = datepickerProps;

  useEffect(() => {
    if (typeof onInternalDateChange === 'function') {
      onInternalDateChange(internalDate);
    }
  }, [internalDate, onInternalDateChange]);

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
