import type { ReactNode } from 'react';

export type CardColor = 'primary' | 'warning' | 'error' | 'success' | 'gray' | 'white';
export type CardSize = 'small' | 'medium';
export type TitleVariant = 'primary' | 'default';

export interface CardHeaderProps {
  size: CardSize;
  color: CardColor;
  title: string;
  icon: ReactNode;
  variant: TitleVariant;
  Element: ReactNode;
  className?: string;
}

export interface CardProps {
  size?: CardSize;
  color?: CardColor;
  header?: Partial<CardHeaderProps>;
  className: string;
}
