import { createContext, useContext } from 'react';
import type { MenuContextType } from './types';

export const MenuContext = createContext<MenuContextType | null>(null);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('Menu components must be used within a Menu');
  }
  return context;
};
