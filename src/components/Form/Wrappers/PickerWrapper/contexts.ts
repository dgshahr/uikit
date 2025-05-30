import { createContext, useContext } from 'react';

interface IPickerWrapperContext {
  toggleWrapperVisibility: () => void;
}

export const pickerWrapperContext = createContext<IPickerWrapperContext>({
  toggleWrapperVisibility: () => {},
});

export const usePickerWrapperContext = () => useContext(pickerWrapperContext);
