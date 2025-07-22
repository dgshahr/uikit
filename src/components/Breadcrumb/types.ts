import type { ReactNode } from 'react';

interface BreadcrumbItemBase {
  title: string;
  icon?: ReactNode;
}

interface BreadcrumbItemLink {
  link: string;
  onClick?: never;
}
interface BreadcrumbItemOnClick {
  link?: never;
  onClick: () => void;
}

export type BreadcrumbItem = BreadcrumbItemBase & (BreadcrumbItemLink | BreadcrumbItemOnClick);

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  pageTitle?: string;
  className?: string;
}
