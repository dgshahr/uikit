import clsx from 'clsx';
import React from 'react';

import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';

import { useMenu } from './context';
import type { MenuItemProps } from './type';

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  icon,
  endElement,
}) => {
  const { close } = useMenu();

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
      close();
    }
  };

  return (
    <button
      className={clsx(
        'dgsuikit:flex dgsuikit:w-full dgsuikit:items-center dgsuikit:p-3 dgsuikit:my-0.5 dgsuikit:text-right dgsuikit:text-sm dgsuikit:rounded-lg dgsuikit:transition-colors dgsuikit:duration-150 dgsuikit:min-h-12',
        disabled
          ? 'dgsuikit:opacity-50 dgsuikit:cursor-not-allowed dgsuikit:text-gray-400'
          : 'dgsuikit:text-gray-600 dgsuikit:hover:bg-gray-50 dgsuikit:hover:text-gray-900 dgsuikit:cursor-pointer dgsuikit:focus:bg-gray-100 dgsuikit:focus:outline-none',
        className,
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon && (
        <span className="dgsuikit:ml-3 dgsuikit:flex dgsuikit:justify-center dgsuikit:items-center dgsuikit:flex-shrink-0 dgsuikit:w-6 dgsuikit:h-6">
          {icon}
        </span>
      )}

      <div className="dgsuikit:font-medium dgsuikit:text-ellipsis dgsuikit:w-full dgsuikit:h-full">
        {children}
      </div>

      {endElement ? (
        <div className="dgsuikit:h-4 dgsuikit:shrink-0">{endElement}</div>
      ) : (
        <IconArrowLeft2 className="dgsuikit:h-4 dgsuikit:w-4 dgsuikit:shrink-0" />
      )}
    </button>
  );
};

export default MenuItem;
