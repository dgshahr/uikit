import { createContext, useContext } from 'react';
import type { SidebarProps } from './types';

export const sidebarContext = createContext<SidebarProps>({
  isOpen: false,
  setIsOpen: () => {},
});
export const useSidebarContext = () => useContext(sidebarContext);
