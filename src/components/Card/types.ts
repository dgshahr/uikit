import type { ReactNode } from 'react';

export type CardColor = 'primary' | 'warning' | 'error' | 'success' | 'gray' | 'white';
export type CardSize = 'small' | 'medium';
export type CardTitleVariant = 'primary' | 'default';

export interface CardHeaderProps {
  size: CardSize;
  color: CardColor;
  title: string;
  icon: ReactNode;
  variant: CardTitleVariant;
  Element: ReactNode;
  className?: string;
}

export interface CardProps {
  size?: CardSize;
  color?: CardColor;
  header?: Omit<Partial<CardHeaderProps>, 'size'>;
  className?: string;
  children: ReactNode;
  wrapperClassName?: string;
}
