import type { ReactNode } from 'react';
import type { ButtonProps } from '../Button';
import type { InputProps } from '../Form/Input';

export interface ThirdLevelSidebarItem {
  title: string;
  link: string;
  badgeCount?: number;
  disabled?: boolean;
  active?: boolean;
}

export interface SecondLevelSidebarItem {
  title: string;
  icon: ReactNode;
  link?: string;
  badgeCount?: number;
  disabled?: boolean;
  active?: boolean;
  children?: ThirdLevelSidebarItem[];
}

export interface FirstLevelSidebarItem {
  title: string;
  children?: SecondLevelSidebarItem[];
}

interface SidebarPropsBase {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  logo?: {
    open: string;
    close: string;
  } & Omit<
    React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    'src'
  >;
  searchInput?: boolean | Omit<InputProps, 'value' | 'onChange'>;
  items?: FirstLevelSidebarItem[];
  extraComponent?: ReactNode;
  userProfile?: {
    image: string;
    name?: string;
    description?: string;
    link?: string;
  };
  onLogout?: () => void;
  logOutButtonProps?: Omit<ButtonProps, 'onClick'>;
  className?: string;
  hideOnClose?: boolean;
  showMask?: boolean;
}

interface SidebarPropsWithHideOnClose {
  hideOnClose: true;
}

interface SidebarPropsWithoutHideOnClose {
  hideOnClose?: false;
  openOnHover?: boolean;
}

export type SidebarProps = SidebarPropsBase &
  (SidebarPropsWithHideOnClose | SidebarPropsWithoutHideOnClose);
