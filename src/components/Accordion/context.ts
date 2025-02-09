import { createContext, useContext } from 'react';

interface IAccordionContext {
  activeKey: string | string[] | null;
  setActiveKey: (key: IAccordionContext['activeKey']) => void;
}

export const accordionContext = createContext<IAccordionContext>({
  activeKey: null,
  setActiveKey: () => {},
});

export const useAccordionData = () => useContext(accordionContext);
