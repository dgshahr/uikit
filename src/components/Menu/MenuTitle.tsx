import clsx from 'clsx';
import React from 'react';

import type { MenuTitleProps } from './type';

const MenuTitle: React.FC<MenuTitleProps> = ({ children, className = '' }) => {
  return (
    <div
      className={clsx('dgsuikit:py-4 dgsuikit:font-p2-regular dgsuikit:text-gray-400', className)}
    >
      {children}
    </div>
  );
};

export default MenuTitle;
