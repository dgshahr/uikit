import clsx from 'clsx';
import type { FC } from 'react';
import IconLogout from '@/src/icons/IconLogout';
import { DURATION_CLASS } from './constants';
import { sidebarContext } from './context';
import SidebarItems from './Items';
import SidebarLogoImage from './LogoImage';
import SidebarProfile from './Profile';
import SidebarToggleButton from './ToggleButton';
import type { SidebarProps } from './types';
import Button from '../Button';
import Divider from '../Divider';

const Sidebar: FC<SidebarProps> = (props) => {
  const {
    isOpen,
    className,
    logo,
    items,
    extraComponent,
    userProfile,
    logOutButtonProps,
    onLogout,
  } = props;

  return (
    <sidebarContext.Provider value={props}>
      <div
        className={clsx(
          className,
          'dgs-ui-kit-flex dgs-ui-kit-flex-col dgs-ui-kit-fixed dgs-ui-kit-top-0 dgs-ui-kit-right-0 dgs-ui-kit-bg-white dgs-ui-kit-shadow-md dgs-ui-kit-h-full dgs-ui-kit-p-4 dgs-ui-kit-pt-6 dgs-ui-kit-transition-[width,max-width]',
          isOpen
            ? 'dgs-ui-kit-w-[280px] dgs-ui-kit-max-w-full'
            : 'dgs-ui-kit-w-[80px] dgs-ui-kit-max-w-[80px]',
          DURATION_CLASS,
        )}
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
    </sidebarContext.Provider>
  );
};

export default Sidebar;
export * from './types';
