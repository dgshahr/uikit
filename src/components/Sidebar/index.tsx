'use client';

import clsx from 'clsx';
import { Fragment, useEffect, type FC } from 'react';
import IconLogout from '@/src/icons/IconLogout';
import { DURATION_CLASS } from './constants';
import { sidebarContext } from './context';
import SidebarItems from './Items';
import SidebarLogoImage from './LogoImage';
import SidebarProfile from './Profile';
import SidebarToggleButton from './ToggleButton';
import type { SidebarProps, SidebarPropsWithoutHideOnClose } from './types';
import Button from '../Button';
import Divider from '../Divider';

const Sidebar: FC<SidebarProps> = (props) => {
  const {
    isOpen,
    setIsOpen,
    className,
    logo,
    items,
    extraComponent,
    userProfile,
    logOutButtonProps,
    onLogout,
    showMask,
    hideOnClose,
  } = props;

  const openOnHover = (props as SidebarPropsWithoutHideOnClose).openOnHover;

  const MaskElement = showMask ? 'div' : Fragment;
  const documentElement = document.documentElement;

  useEffect(() => {
    if (hideOnClose) return;

    const paddingRightClass = 'dgsuikit:pr-[80px]';
    documentElement.classList.add(paddingRightClass);

    return () => {
      documentElement.classList.remove(paddingRightClass);
    };
  }, [hideOnClose]);

  useEffect(() => {
    if (!showMask) return;

    const overflowClass = 'dgsuikit:overflow-hidden';

    if (isOpen) documentElement.classList.add(overflowClass);
    else documentElement.classList.remove(overflowClass);

    return () => {
      documentElement.classList.remove(overflowClass);
    };
  }, [showMask, isOpen]);

  return (
    <sidebarContext.Provider value={props}>
      <MaskElement
        {...(MaskElement === 'div'
          ? {
              className: clsx(
                'dgsuikit:fixed dgsuikit:top-0 dgsuikit:left-0 dgsuikit:z-40 dgsuikit:overflow-hidden dgsuikit:transition-[background-color] dgsuikit:ease-linear',
                isOpen
                  ? 'dgsuikit:size-full dgsuikit:bg-black/40'
                  : 'dgsuikit:size-0 dgsuikit:bg-transparent',
                DURATION_CLASS,
              ),
              onClick: (e) => {
                if (e.target === e.currentTarget) setIsOpen(false);
              },
            }
          : {})}
      >
        <div
          className={clsx(
            className,
            'dgsuikit:flex dgsuikit:flex-col dgsuikit:fixed dgsuikit:top-0 dgsuikit:right-0 dgsuikit:bg-white dgsuikit:shadow-md dgsuikit:h-full dgsuikit:p-4 dgsuikit:pt-6 dgsuikit:transition-[width,max-width,opacity]',
            {
              'dgsuikit:w-[280px] dgsuikit:max-w-full': isOpen,
              'dgsuikit:w-[80px] dgsuikit:max-w-[80px]': !isOpen && !hideOnClose,
              'dgsuikit:w-0 dgsuikit:opacity-0': !isOpen && hideOnClose,
            },
            DURATION_CLASS,
          )}
          onMouseEnter={() => {
            if (openOnHover && !isOpen) setIsOpen(true);
          }}
          onMouseLeave={() => {
            if (openOnHover && isOpen) setIsOpen(false);
          }}
        >
          <SidebarToggleButton />
          {Boolean(logo?.open ?? logo?.close) && <SidebarLogoImage />}
          {items && items.length > 0 && <SidebarItems />}
          <div className="dgsuikit:shrink-0 dgsuikit:flex-1">
            {extraComponent}
            <Divider
              className="dgsuikit:mt-6 dgsuikit:mb-4"
              type="horizontal"
            />
            {Boolean(userProfile?.image) && <SidebarProfile />}
            <Button
              color="error"
              variant="secondary"
              rightIcon={<IconLogout />}
              isFullWidth
              onClick={onLogout}
              {...logOutButtonProps}
            >
              {isOpen ? 'خروج' : ''}
            </Button>
          </div>
        </div>
      </MaskElement>
    </sidebarContext.Provider>
  );
};

export default Sidebar;
export * from './types';
