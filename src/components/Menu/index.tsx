import clsx from 'clsx';
import { useState, type FC } from 'react';

import { useFlipPosition, type PopperPosition } from '@/src/hooks/useFlipPosition';
import { useOutsideClick } from '@/src/hooks/useOutsideClick';

import { DURATION_CLASS, POSITION_CLASS_NAMES, REMOVE_CONTAINER_TIMEOUT } from './constants';
import { MenuContext } from './context';
import MenuItem from './MenuItem';
import type { MenuContextType, MenuProps } from './types';

const MenuComponent: FC<MenuProps> = (props) => {
  const {
    trigger,
    children,
    className = '',
    popoverClassName = '',
    position = 'bottom-right',
  } = props;
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isMenuInDom, setIsMenuInDom] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<PopperPosition>(position);
  let transitionTimeout: ReturnType<typeof setTimeout>;

  const { anchorRef, popperRef } = useFlipPosition<HTMLElement, HTMLDivElement>({
    initialPosition: position,
    minVisible: 180,
    padding: 8,
    onPositionChange(newPosition) {
      setCurrentPosition(newPosition);
    },
  });

  const containerRef = useOutsideClick<HTMLDivElement>(() => {
    if (isShowMenu) {
      setIsShowMenu(false);
      if (transitionTimeout) clearTimeout(transitionTimeout);
      transitionTimeout = setTimeout(() => {
        setIsMenuInDom(false);
      }, REMOVE_CONTAINER_TIMEOUT);
    }
  });

  function toggleMenuVisibility() {
    const newState = !isMenuInDom;

    if (transitionTimeout) clearTimeout(transitionTimeout);

    if (newState) {
      setIsMenuInDom(true);
      transitionTimeout = setTimeout(() => {
        setIsShowMenu(true);
      }, 0);
    } else {
      setIsShowMenu(false);
      transitionTimeout = setTimeout(() => {
        setIsMenuInDom(false);
      }, REMOVE_CONTAINER_TIMEOUT);
    }
  }

  const value: MenuContextType = { close: toggleMenuVisibility };

  return (
    <MenuContext.Provider value={value}>
      <div
        ref={containerRef}
        className={clsx('dgsuikit:relative dgsuikit:inline-block dgsuikit:text-right', className)}
      >
        {trigger(toggleMenuVisibility, anchorRef)}
        {isMenuInDom && (
          <div
            ref={popperRef}
            className={clsx(
              'dgsuikit:absolute dgsuikit:z-50 dgsuikit:min-w-[256px] dgsuikit:px-4 dgsuikit:pb-4 dgsuikit:rounded-2xl dgsuikit:bg-white dgsuikit:shadow-lg dgsuikit:ring-1 dgsuikit:ring-gray-200 dgsuikit:focus:outline-none',
              'dgsuikit:transition-all',
              DURATION_CLASS,
              isShowMenu
                ? 'dgsuikit:opacity-100 dgsuikit:scale-100'
                : 'dgsuikit:opacity-0 dgsuikit:scale-95',
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

interface IMenuComponent extends FC<MenuProps> {
  Item: typeof MenuItem;
}

const Menu = MenuComponent as IMenuComponent;
Menu.Item = MenuItem;

export default Menu;
export * from './types';
