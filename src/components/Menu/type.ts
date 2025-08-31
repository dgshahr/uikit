import type { PopperPosition } from '@/src/hooks/useFlipPosition';

export interface MenuContextType {
  close: () => void;
}

export interface MenuProps {
  trigger: (toggle: () => void) => React.ReactNode;
  children: React.ReactNode;
  className?: string;
  popoverClassName?: string;
  position?: PopperPosition;
  minVisible?: number;
  padding?: number;
}

export interface MenuTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactElement;
  endElement?: React.ReactElement;
}
