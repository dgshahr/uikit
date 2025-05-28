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

    const paddingRightClass = 'dgs-ui-kit-pr-[80px]';
    documentElement.classList.add(paddingRightClass);

    return () => {
      documentElement.classList.remove(paddingRightClass);
    };
  }, [hideOnClose]);

  useEffect(() => {
    if (!showMask) return;

    const overflowClass = 'dgs-ui-kit-overflow-hidden';

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
                'dgs-ui-kit-fixed dgs-ui-kit-top-0 dgs-ui-kit-left-0 dgs-ui-kit-z-50 dgs-ui-kit-overflow-hidden dgs-ui-kit-transition-[background-color] dgs-ui-kit-ease-linear',
                isOpen
                  ? 'dgs-ui-kit-size-full dgs-ui-kit-bg-black/40'
                  : 'dgs-ui-kit-size-0 dgs-ui-kit-bg-transparent',
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
            'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-fixed dgs-ui-kit-top-0 dgs-ui-kit-right-0 dgs-ui-kit-bg-white dgs-ui-kit-shadow-md dgs-ui-kit-h-full dgs-ui-kit-p-4 dgs-ui-kit-pt-6 dgs-ui-kit-transition-[width,max-width,opacity]',
            {
              'dgs-ui-kit-w-[280px] dgs-ui-kit-max-w-full': isOpen,
              'dgs-ui-kit-w-[80px] dgs-ui-kit-max-w-[80px]': !isOpen && !hideOnClose,
              'dgs-ui-kit-w-0 dgs-ui-kit-opacity-0': !isOpen && hideOnClose,
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
          <div className="dgs-ui-kit-shrink-0 dgs-ui-kit-flex-1">
            {extraComponent}
            <Divider
              className="dgs-ui-kit-mt-6 dgs-ui-kit-mb-4"
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
