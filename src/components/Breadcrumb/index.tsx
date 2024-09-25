import ArrowLeft2Icon from '@/src/icons/ArrowLeft2';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import '@/src/styles.css';

interface BreadcrumbProps {
  items: {
    link: string;
    title: string;
    icon?: ReactNode;
  }[];
  pageTitle: string;
  className?: string;
}

const Breadcrumb = (props: BreadcrumbProps) => {
  const { items, pageTitle, className } = props;

  return (
    <div className={clsx('bg-gray-100 overflow-x-hidden w-full', className)}>
      <div className="flex items-center gap-x-1 w-full py-3 container">
        {items.map((breadcrumbItem) => (
          <a
            key={breadcrumbItem.link}
            href={breadcrumbItem.link}
            className="transition flex items-center gap-x-1 text-gray-500 hover:text-primary-500"
          >
            {breadcrumbItem.icon && breadcrumbItem.icon}
            <div className="font-caption-demibold">{breadcrumbItem.title}</div>
            <ArrowLeft2Icon
              width={16}
              height={16}
            />
          </a>
        ))}
        <div className="text-gray-500 font-caption-regular">{pageTitle}</div>
      </div>
    </div>
  );
};

export default Breadcrumb;
