import clsx from 'clsx';
import React, { useState, useEffect, type FC } from 'react';

import { useFlipPosition, type PopperPosition } from '@/src/hooks/useFlipPosition';
import { useOutsideClick } from '@/src/hooks/useOutsideClick';
import IconArrowLeft2 from '@/src/icons/IconArrowLeft2';

import { MenuContext, useMenu } from './context';
import type { MenuContextType, MenuItemProps, MenuProps, MenuTitleProps } from './type';

const POSITION_CLASS_NAMES: Record<PopperPosition, string> = {
  'bottom-right': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-0',
  'bottom-center':
    'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
  'bottom-left': 'dgsuikit:bottom-0 dgsuikit:translate-y-[calc(100%+8px)] dgsuikit:right-0',
  'top-right': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-0',
  'top-center':
    'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:left-1/2 dgsuikit:-translate-x-1/2',
  'top-left': 'dgsuikit:top-0 dgsuikit:-translate-y-[calc(100%+8px)] dgsuikit:right-0',
};

const MenuComponent: React.FC<MenuProps> = ({
  trigger,
  children,
  className = '',
  popoverClassName = '',
  position = 'bottom-left',
  minVisible = 180,
  padding = 8,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<PopperPosition>(position);

  // Use the positioning hook
  const { anchorRef, popperRef } = useFlipPosition<HTMLDivElement, HTMLDivElement>({
    initialPosition: position,
    minVisible,
    padding,
    onPositionChange(newPosition) {
      setCurrentPosition(newPosition);
    },
  });

  // Use outside click hook for better UX
  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        close();
        anchorRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const value: MenuContextType = {
    isOpen,
    toggle,
    close,
    buttonRef: anchorRef,
    menuRef: popperRef,
  };

  return (
    <MenuContext.Provider value={value}>
      <div
        ref={containerRef}
        dir="rtl"
        className={clsx('dgsuikit:relative dgsuikit:inline-block dgsuikit:text-right', className)}
      >
        <div ref={anchorRef}>{trigger(toggle)}</div>
        {isOpen && (
          <div
            ref={popperRef}
            className={clsx(
              'dgsuikit:absolute dgsuikit:z-50 dgsuikit:min-w-[256px] dgsuikit:px-4 dgsuikit:pb-4 dgsuikit:rounded-2xl dgsuikit:bg-white dgsuikit:shadow-lg dgsuikit:ring-1 dgsuikit:ring-gray-200 dgsuikit:focus:outline-none dgsuikit:transition-all dgsuikit:duration-200',
              POSITION_CLASS_NAMES[currentPosition],
              popoverClassName,
            )}
          >
            {children}
          </div>
        )}
      </div>
    </MenuContext.Provider>
  );
};

const MenuTitle: React.FC<MenuTitleProps> = ({ children, className = '' }) => {
  return (
    <div className={clsx('dgsuikit:py-4 dgsuikit:text-sm dgsuikit:font-normal', className)}>
      {children}
    </div>
  );
};

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
        <span className="dgsuikit:ml-3 dgsuikit:flex-shrink-0 dgsuikit:w-6 dgsuikit:h-6">
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

interface IMenuComponent extends FC<MenuProps> {
  Title: typeof MenuTitle;
  Item: typeof MenuItem;
}

const Menu = MenuComponent as IMenuComponent;
Menu.Title = MenuTitle;
Menu.Item = MenuItem;

export default Menu;
